import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";
export const sendMessage = async (req, res) => {
    try{
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const {senderId} = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        });
        if(!conversation){
            conversation = new Conversation({
                participants: [senderId, receiverId]
            });
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        await conversation.save();
        await newMessage.save();

        return res.status(200).json(newMessage);

    }catch(error){
        console.log('Error in sendMessage', error);
        res.status(500).json({error: "Internal Server Error"});
    }
};
export default sendMessage;