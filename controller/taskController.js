import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Get all tasks
const getAllTask = async (req, res) => {
  try {
    const { status } = req.query; // Optionally filter tasks by status
    const allTasks = await prisma.Task.findMany({
      where: status ? { status } : {}, // Filter if status is provided
    });
    return res.status(200).json(allTasks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Create a task
const createTask = async (req, res) => {
  const { name, description, status, priority, dueDate, cardId } = req.body;

  try {
    const card = await prisma.Card.findUnique({
      where: { id: parseInt(cardId, 10) },
    });

    if (!card) {
      return res.status(400).json({ error: 'Card not found' });
    }

    const newTask = await prisma.Task.create({
      data: {
        name,
        description,
        status,
        priority,
        dueDate: new Date(dueDate),
        cardId: parseInt(cardId, 10),
      },
    });

    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update a task
const updateTask = async (req, res) => {
  const { cardId, taskId } = req.params; // cardId and taskId from URL
  const { name, description, status, priority, dueDate } = req.body;

  try {
    const card = await prisma.Card.findUnique({
      where: { id: parseInt(cardId, 10) },
      include: { tasks: true },
    });

    if (!card) {
      return res.status(404).json({ error: 'Card not found' });
    }

    const task = card.tasks.find((task) => task.id === parseInt(taskId, 10));
    if (!task) {
      return res.status(404).json({ error: 'Task not found in the specified card' });
    }

    const updatedTask = await prisma.Task.update({
      where: { id: parseInt(taskId, 10) },
      data: {
        name,
        description,
        status,
        priority,
        dueDate: dueDate ? new Date(dueDate) : undefined,
      },
    });

    return res.status(200).json(updatedTask);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const existingTask = await prisma.Task.findUnique({
      where: { taskId: parseInt(taskId, 10) },
    });

    if (!existingTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const deletedTask = await prisma.Task.delete({
      where: { taskId: parseInt(taskId, 10) },
    });

    return res.status(200).json(deletedTask);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get tasks by card ID
const getTasksByCard = async (req, res) => {
  const { cardId } = req.params;

  try {
    const tasks = await prisma.Task.findMany({
      where: { cardId: parseInt(cardId, 10) },
    });

    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllTask, createTask, updateTask, deleteTask, getTasksByCard };
