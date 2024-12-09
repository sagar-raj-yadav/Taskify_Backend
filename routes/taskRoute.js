import express from 'express';
import {getTask,getTask,getTask}  from '../controller/taskController';

const router=express.Router();

router.get("/getalltask",getTask);
router.post("/createtask",getTask);
router.delete("/deletetask/:id",getTask);

export default router;
