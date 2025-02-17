import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true  // Ensures the username is unique
    },
    password: {
        type: String,
        required: true,
        minlength: 6  // Ensures password has at least 6 characters
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],  // Restricts gender to only "male" or "female"
    },
    profilePic: {
        type: String,
        default: ""  // Ensures a default empty string if no profile picture is provided
    }
}, {
    timestamps: true  // Adds createdAt and updatedAt fields
});

const User = mongoose.model("User", userSchema);
export default User;
