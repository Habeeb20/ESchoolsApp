// import User from "../../models/student/studentAccount.js"
// import {configureOpenAI} from "../../config/openai-config.js"
// // import { configureOpenAI } from "../config/openai-config.js";
// import { OpenAI } from "openai";




import User from "../../models/student/studentAccount.js";
import { configureOpenAI } from "../../config/openai-config.js";
import { OpenAI } from "openai";

export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        // Instead of checking user authorization, proceed directly
        const chats = [{ content: message, role: "user" }];

        // Send all chats with the new one to OpenAI API
        const config = configureOpenAI();
        const openai = new OpenAI(config);

        // Get latest response from OpenAI
        
        const chatResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: chats,
        });
        if(chatResponse.data && chatResponse.data.choices && chatResponse.data.choices.length > 0){
            const message = chatResponse.data.choices[0].message;
            
            return res.status(200).json({ chatResponse: chatResponse.data.choices[0].message });
        }else {
            return res.status(500).json({message:"unexpected error occurred"})
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};











// export const generateChatCompletion = async (req, res, next) => {
//     const { message } = req.body;
//     try {
//         const chats = [{ content: message, role: "user" }];

//         const config = configureOpenAI();
//         const openai = new OpenAI(config);

//         const chatResponse = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages: chats,
//         });

//         if (chatResponse.data && chatResponse.data.choices && chatResponse.data.choices.length > 0) {
//             const message = chatResponse.data.choices[0].message;
//             user.chats.push(message);
//             await user.save();
//             return res.status(200).json({ chats: user.chats });
//         } else {
//             return res.status(500).json({ message: "Unexpected response format from OpenAI" });
//         }
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "Something went wrong" });
//     }
// };





export const sendChatsToUser = async (req, res, next) => {
    try {
        // Retrieve user (if needed for some other purpose)
        // const user = await User.findById(res.locals.jwtData.id);

        // Simulate sending stored chats to the user (assuming you have a different approach)
        const storedChats = []; // Implement your logic to retrieve stored chats

        return res.status(200).json({ message: "OK", chats: storedChats });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
};



export const deleteChats = async (req, res, next) => {
    try {
        // Directly clear all stored chats
        const result = await User.updateOne({ /* Add your condition to find the user */ }, { $set: { chats: [] } });

        return res.status(200).json({ message: "OK" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
};

















// export const generateChatCompletion = async (req, res, next) => {
//     const { message } = req.body;
//     try {
//         const user = await User.findById(res.locals.jwtData);
//         if (!user)
//             return res
//                 .status(401)
//                 .json({ message: "User not registered OR Token malfunctioned" });
//         // grab chats of user
//         const chats = user.chats.map(({ role, content }) => ({
//             role,
//             content,
//         }));
//         chats.push({ content: message, role: "user" });
//         user.chats.push({ content: message, role: "user" });
//         // send all chats with new one to openAI API
//         const config = configureOpenAI();
//         const openai = new OpenAI(config);
//         // get latest response
//         const chatResponse = await openai.createChatCompletion({
//             model: "gpt-3.5-turbo",
//             messages: chats,
//         });
//         user.chats.push(chatResponse.data.choices[0].message);
//         await user.save();
//         return res.status(200).json({ chats: user.chats });
//     }
//     catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: "Something went wrong" });
//     }
// };
// export const sendChatsToUser = async (req, res, next) => {
//     try {
//         //user token check
//         const user = await User.findById(res.locals.jwtData.id);
//         if (!user) {
//             return res.status(401).send("User not registered OR Token malfunctioned");
//         }
//         if (user._id.toString() !== res.locals.jwtData.id) {
//             return res.status(401).send("Permissions didn't match");
//         }
//         return res.status(200).json({ message: "OK", chats: user.chats });
//     }
//     catch (error) {
//         console.log(error);
//         return res.status(200).json({ message: "ERROR", cause: error.message });
//     }
// };
// export const deleteChats = async (req, res, next) => {
//     try {
//         //user token check
//         const user = await User.findById(res.locals.jwtData.id);
//         if (!user) {
//             return res.status(401).send("User not registered OR Token malfunctioned");
//         }
//         if (user._id.toString() !== res.locals.jwtData.id) {
//             return res.status(401).send("Permissions didn't match");
//         }
//         //@ts-ignore
//         user.chats = [];
//         await user.save();
//         return res.status(200).json({ message: "OK" });
//     }
//     catch (error) {
//         console.log(error);
//         return res.status(200).json({ message: "ERROR", cause: error.message });
//     }
// };
// //# sourceMappingURL=chat-controllers.js.map