import express from 'express';
import {getCard,createCard,deleteCard}  from '../controller/cardController';

const router=express.Router();

router.get("/getallcard",getCard);
router.post("/createcard",createCard);
router.delete("/deletecard/:id",deleteCard);

export default router;
