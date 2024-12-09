import express from 'express';
import {getComment,createComment}  from '../controller/commentController';

const router=express.Router();

router.get("/getallcomment",getComment);
router.post("/createcomment",createComment);

export default router;
