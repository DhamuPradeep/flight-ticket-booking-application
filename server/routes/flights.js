import express from "express";
import {addFlight,updateFlight,deleteFlight,getFlight,getFlights, bookFlightSeats,getflightquery, availabeSeats} from "../controllers/flight.js"
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/addflight",verifyAdmin,addFlight)

router.put("/:id",verifyAdmin,updateFlight)

router.put("/:id/bookseat/:seatid",verifyUser,bookFlightSeats)

router.delete("/:id",verifyAdmin,deleteFlight)

router.get("/:id",getFlight)

router.get("/",getFlights)

router.get("/:id/availabeseats/show",availabeSeats)

router.get("/:from/:to",getflightquery)

export default router