import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Get all comments for a specific task within a specific card
const getComment = async (req, res) => {
  try {
    const { cardId, taskId } = req.params;

    // Fetch the task by cardId and taskId, including its comments
    const task = await prisma.Task.findUnique({
      where: { id: parseInt(taskId, 10) },
      include: {
        comments: true, // Include all comments related to the task
      },
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Check if the task belongs to the specified card
    if (task.cardId !== parseInt(cardId, 10)) {
      return res.status(400).json({ error: 'Task does not belong to the specified card' });
    }

    return res.status(200).json(task.comments); // Return comments for that task
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Create a new comment for a specific task within a specific card
const createComment = async (req, res) => {
  try {
    const { content, taskId, memberId } = req.body;

    // Create a new comment for the specified task
    const newComment = await prisma.Comment.create({
      data: {
        content,
        taskId: parseInt(taskId, 10),
        memberId: memberId ? parseInt(memberId, 10) : null,
      },
    });

    return res.status(201).json(newComment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getComment, createComment };