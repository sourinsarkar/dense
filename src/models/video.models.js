import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true,
    },

    thumbnail: {
        type: String,
        required: true,
    },
    
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    duration: {
        type: Number,
        required: true,
    },

    views: {
        type: Number,
        required: true,
    },

    isPublished: {
        type: Boolean,
        required: true,
    },
}, {timestamps: true});

export const Video = mongoose.model("Video", videoSchema)