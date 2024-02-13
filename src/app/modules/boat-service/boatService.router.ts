import express from'express'
import {BoatServiceController} from'./boatService.controller';

const router = express.Router()

// crew?
router.post('/createBoatBervice',BoatServiceController.createBoatService)
router.get('/',BoatServiceController.getAllBoatService)
router.get('/:id',BoatServiceController.getSingleBoatService)
router.patch('/:id',BoatServiceController.updateBoatService)
router.delete('/:id',BoatServiceController.deleteBoatService)




export const boatServiceRouter  = router