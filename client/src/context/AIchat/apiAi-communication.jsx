import axios from "axios";

export const sendChatRequest = async(message) => {
    const res = await axios.post("/new", {message});
    if(res.status !== 200){
        throw new Error("unable to send chat")
    }
    const data = await res.data;
    return data;


}

export const getUserChats = async () => {
    const res = await axios.get("/all-chats");
    if (res.status !== 200) {
      throw new Error("Unable to send chat");
    }
    const data = await res.data;
    return data;
  };
  
  export const deleteUserChats = async () => {
    const res = await axios.delete("/delete");
    if (res.status !== 200) {
      throw new Error("Unable to delete chats");
    }
    const data = await res.data;
    return data;
  };
  