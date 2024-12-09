import express from 'express';
import {getAllTask,createTask,updateTask,deleteTask,getTasksByCard }  from '../controller/taskController';

const router=express.Router();

router.get("/getalltask",getAllTask);  //fetch task according to status wise(like todo,doing ,done )
router.post("/createtask",createTask);
router.post("/updatetask",updateTask);
router.delete("/deletetask/:id",deleteTask);
router.get('/gettask/:cardId', getTasksByCard); // Get tasks by card ID


export default router;
