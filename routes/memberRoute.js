import express from 'express';
import {getMember,getMember,deleteMember}  from '../controller/memberController';

const router=express.Router();

router.get("/getallmember",getMember);
router.post("/createmember",getMember);
router.delete("/deletemember/:id",deleteMember);

export default router;
