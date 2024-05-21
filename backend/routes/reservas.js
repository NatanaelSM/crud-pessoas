import express from "express";
import {getReservas, addReserva} from "../controllers/reserva.js"

const router = express.Router();

router.post("/addReserva", addReserva);
router.get("/reservas", getReservas);

export default router;

