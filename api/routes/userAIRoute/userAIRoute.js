import express from "express";
import { generateChatCompletion, deleteChats, sendChatsToUser } from "../../controllers/userAI/userAIChatController.js";
import { chatCompletionValidator, validate } from "../../middlewares/validator.js";


const chatRoute = express.Router();
chatRoute.post("/new", generateChatCompletion);
chatRoute.get("/all-chats", sendChatsToUser);
chatRoute.delete("/delete", deleteChats)


export default chatRoute;