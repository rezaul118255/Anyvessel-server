"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crewRouter = void 0;
const express_1 = __importDefault(require("express"));
const crew_controller_1 = require("./crew.controller");
const router = express_1.default.Router();
// crew?
router.post('/createCrew', crew_controller_1.crewController.createCrew);
router.get('/', crew_controller_1.crewController.getAllCrew);
router.get('/:id', crew_controller_1.crewController.getSingleCrew);
router.patch('/:id', crew_controller_1.crewController.updateCrew);
router.delete('/:id', crew_controller_1.crewController.deleteCrew);
exports.crewRouter = router;
