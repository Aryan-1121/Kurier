import express from 'express'
import { sendMessage } from '../controllers/messageController.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();



router.post("/send/:id", protectRoute,  sendMessage);        //takes userId who wants to send message after authorization(jwt)





export default router; 







