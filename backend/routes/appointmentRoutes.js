import express from "express";
import { bookAppointment } from "../controller/appointmentController.js";

const router = express.Router();

router.post("/book", bookAppointment);

export default router;
