import express from 'express';
import { getComment, createComment } from '../controller/commentController';

const router = express.Router();

// Get all comments for a specific task in a specific card
router.get("/getcomments/card/:cardId/task/:taskId", getComment);

// Create a new comment for a specific task
router.post("/createcomment", createComment);

export default router;
