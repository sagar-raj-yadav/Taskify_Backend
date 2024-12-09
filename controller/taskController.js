

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const getAllTask=async(req,res)=>{
    try{
        const alltask=await prisma.Task.findMany();
        return res.status(200).json(alltask);
    } catch(error){
        return res.status(500).json({ error: error.message });
    }
}

const createTask=async(req,res)=>{
    const { name, description, status, priority, dueDate, cardId } = req.body;

    try{
        const createtask=await prisma.Tsk.create({
            data: { name, description, status, priority, dueDate, cardId }
        })
        return res.status(200).json(createtask);
    } catch(error){
        return res.status(500).json({ error: error.message });
    }
}


const updateTask=async(req,res)=>{
    try{
        const {id}=req.params;
        const { name, description, status, priority, dueDate } = req.body;

        const updatedtask=await prisma.Task.update({
            where: { id: parseInt(id, 10) },
            data: { name, description, status, priority, dueDate },
        })
        return res.status(200).json(updatedtask);
    } catch(error){
        return res.status(500).json({ error: error.message });
    }
}


const deleteTask=async(req,res)=>{
    try{
        const {id}=req.params;

        const deteledtask=await prisma.Task.delete({
            where:{id:parseInt(id,10)}
        })
        return res.status(200).json(deteledtask);
    } catch(error){
        return res.status(500).json({ error: error.message });
    }
}


// Get tasks by card ID
const getTasksByCard = async (req, res) => {
    try {
      const { cardId } = req.params;
  
      const tasks = await prisma.Task.findMany({
        where: { cardId: parseInt(cardId, 10) },
      });
  
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

export {getAllTask,createTask,updateTask,deleteTask,getTasksByCard} ;