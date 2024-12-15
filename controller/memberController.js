import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllMember = async (req, res) => {
  try {
    const allmember = await prisma.Member.findMany();
    return res.status(200).json(allmember);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getOneMember = async (req, res) => {
  try {
    const { id } = req.params;
    const onemember = await prisma.Member.findUnique({
      where: { id: parseInt(id) },
    });
    if (!onemember) {
      return res.status(404).json({ error: "Member not found" });
    }
    return res.status(200).json(onemember);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const createMember = async (req, res) => {
  try {
    const { name, email, contact, position, team } = req.body;
    const newmember = await prisma.Member.create({
      data: { name, email, contact, position, team },
    });
    return res.status(200).json(newmember);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    const deletemember = await prisma.Member.delete({
      where: { id: parseInt(id) },
    });
    return res.status(200).json(deletemember);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { getAllMember, getOneMember, createMember, deleteMember };
