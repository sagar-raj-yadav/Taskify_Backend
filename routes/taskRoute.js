import express from 'express';
import {getAllTask,createTask,updateTask,deleteTask,getTasksByCard }  from '../controller/taskController.js';

const router=express.Router();

router.get("/getalltask",getAllTask);  //fetch task according to status wise(like todo,doing ,done )
router.post("/createtask",createTask);
router.put("/updatetask/:taskId",updateTask);
router.delete("/deletetask/:taskId",deleteTask);
router.get('/gettask/:cardId', getTasksByCard); // Get tasks by card ID


export default router;
