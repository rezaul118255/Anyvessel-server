import express from'express'
import { BoatController } from "./boat.controller";
const router = express.Router()

//boat
router.post('/createBoat',BoatController.createBoat)


export const boatRouter = router;