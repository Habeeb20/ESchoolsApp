import { Router } from "express";
import chatRoute from "./userAIRoute.js";

const chatRouter = Router();
chatRouter.use("/chat", chatRouter);

export default chatRouter