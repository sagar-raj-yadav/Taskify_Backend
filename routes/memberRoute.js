import express from 'express';
import {getAllMember,getOneMember,createMember,deleteMember}  from '../controller/memberController.js';

const router=express.Router();

router.get("/getallmember",getAllMember);
router.get("/getmember/:id",getOneMember);
router.post("/createmember",createMember);
router.delete("/deletemember/:id",deleteMember);

export default router;
