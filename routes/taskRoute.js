import express from 'express';
import {getTask,getTask,getTask,updateTask}  from '../controller/taskController';

const router=express.Router();

router.get("/getalltask",getTask);  //fetch task according to status wise(like todo,doing ,done )
router.post("/createtask",getTask);
router.post("/updatetask",updateTask);
router.delete("/deletetask/:id",getTask);

export default router;
