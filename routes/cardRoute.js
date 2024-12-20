import express from 'express';
import {getAllCard,createCard,deleteCard,updateCard}  from '../controller/cardController.js';

const router=express.Router();

router.get("/getallcard",getAllCard);
router.post("/createcard",createCard);
router.delete("/deletecard/:id",deleteCard);
router.put("/updatecard/:id",updateCard);

export default router;
