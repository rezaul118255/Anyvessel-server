"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String
    },
    description: {
        type: String,
    },
    comments: [
        {
            data: {
                type: String,
            },
        },
    ],
    postedBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User', // Reference to the UserModel
    },
    created: {
        type: Date,
        default: Date.now()
    },
    likes: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }]
}, {
    timestamps: true,
});
exports.Blog = (0, mongoose_1.model)('Blog', blogSchema);
