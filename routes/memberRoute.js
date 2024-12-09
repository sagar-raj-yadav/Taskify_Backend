import express from 'express';
import {getMember,getMember,deleteMember,getOneMember}  from '../controller/memberController';

const router=express.Router();

router.get("/getallmember",getMember);
router.get("/getmember/:id",getOneMember);
router.post("/createmember",getMember);
router.delete("/deletemember/:id",deleteMember);

export default router;
