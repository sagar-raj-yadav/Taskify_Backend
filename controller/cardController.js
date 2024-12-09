import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createCard=async(req,res)=>{
    try{
        const {cardname}=req.body;

        const newCard =await prisma.Card.create({
            data:cardname
        })
        return res.status(201).json(newCard);
    }
    catch(error){
        return res.status(500).json({ error: error.message });
    }
}

const getAllCard=async(req,res)=>{
    try{
        const allcards=  await prisma.Card.findMany();
        return res.status(200).json(allcards);
    }
    catch(error){
        return res.status(500).json({ error: error.message });
    }
  
}



const deleteCard=async(req,res)=>{
    try{
        const {id}=req.params;
        await prisma.Card.delete({
            where:{id:parseInt(id,10)}
        })
        return res.status(200).json({message:"card deleted successfully"})
    }
    catch(error){
        return res.status(500).json({ error: error.message });
    }
}

const updateCard=async(req,res)=>{
    try{
        const {id}=req.params;
        const {name}=req.body;

        const updatedcard=await prisma.Card.update({
            where: { id: parseInt(id) },
            data: { name },
          })
          return res.status(200).json(updatedcard);
    }
    catch(error){
        return res.status(500).json({ error: error.message });
    }
}



export {getAllCard,createCard,deleteCard,updateCard};


/*why we write 10, here where:{id:parseInt(id,10)}  ->in deletecard
`parseInt(id, 10)` specifies the **radix** (base) for the number, 
ensuring that the `id` string is always interpreted as a decimal (base 10).
 Without it, JavaScript might misinterpret numbers, especially if they start 
 with `0` (e.g., as octal or hexadecimal in older environments). 
Explicitly using `10` makes the code safer and more predictable.
*/