import express from'express'
import {crewController} from'./crew.controller';

const router = express.Router()

// crew?
router.post('/createCrew',crewController.createCrew)
router.get('/',crewController.getAllCrew)
router.get('/:id',crewController.getSingleCrew)
router.patch('/:id',crewController.updateCrew)
router.delete('/:id',crewController.deleteCrew)




export const crewRouter  = router