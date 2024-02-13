"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// create user
router.post('/create-user', 
// validateRequest(userZodValidation.userZodSchema),
user_controller_1.userController.createUser);
// get all user
router.get('/', user_controller_1.userController.getAllUser);
// get single user
router.get('/:id', user_controller_1.userController.getSingleUser);
// update user
router.patch('/:id', user_controller_1.userController.updateUser);
// delete user
router.delete('/:id', user_controller_1.userController.deleteUser);
exports.userRouter = router;
