import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    console.log("oi");
    // SOCKET IO FUNCTIONALITY WILL GO HERE
    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).send(newMessage);
    return; // Assegure-se de retornar para evitar execução adicional
  } catch (error) {
    console.log("error in sendMessage controller: ", error);
    if (!res.headersSent) {
      res.status(500).json({ error: "internal server error" });
    }
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const sendId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [sendId, userToChatId] },
    }).populate("messages");

    if (!conversation) {
      res.status(200).json([]);
      return; // Assegure-se de retornar para evitar execução adicional
    }

    const messages = conversation?.messages;

    res.status(200).json(messages);
    return; // Assegure-se de retornar para evitar execução adicional
  } catch (error) {
    console.log("error in getMessages controller: ", error);
    if (!res.headersSent) {
      res.status(500).json({ error: "internal server error" });
    }
  }
};
