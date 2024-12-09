import express from 'express';
import {getCard,createCard,deleteCard,updateCard}  from '../controller/cardController';

const router=express.Router();

router.get("/getallcard",getCard);
router.post("/createcard",createCard);
router.delete("/deletecard/:id",deleteCard);
router.delete("/updatecard/:id",updateCard);

export default router;
