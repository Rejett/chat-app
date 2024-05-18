import express from "express";
import protectRoute from "../middleWare/protectRoute.js";
import { getUsersForSideBar } from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSideBar);

export default router;
