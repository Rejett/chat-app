import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/users.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import protectRoute from "./middleWare/protectRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", protectRoute, messageRoutes);
app.use("/api/users", protectRoute, usersRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server listening on port ${PORT}`);
});
