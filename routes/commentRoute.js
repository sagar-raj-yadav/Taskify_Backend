import express from 'express';
import {getComment,createComment,deleteComment}  from '../controller/commentController';

const router=express.Router();

router.get("/getallcomment",getComment);
router.post("/createcomment",createComment);
router.delete("/deletecomment/:id",deleteComment);

export default router;
