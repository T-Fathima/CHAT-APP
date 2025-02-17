import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    senderid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    },
    //createdAt , updatedAt => message.createdAt, message.updatedAt (frontend)
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);
export default Message;