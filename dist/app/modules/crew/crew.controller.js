"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crewController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const crew_server_1 = require("./crew.server");
const sendResponse_1 = require("../../../shared/sendResponse");
const createCrew = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const crewData = req.body;
    if (!crewData) {
        throw new ApiError_1.default(http_status_1.default.BAD_GATEWAY, 'Fill In the blank');
    }
    const result = yield crew_server_1.crewService.createCrew(crewData);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Crew create Successfull',
        data: result
    });
}));
const getAllCrew = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paginationOption = (0, pick_1.default)(req.query, [
        'limit',
        'page',
        'sortBy',
        'sortOrder'
    ]);
    const result = yield crew_server_1.crewService.getAllCrew(paginationOption);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'getting all data',
        data: result
    });
}));
const getSingleCrew = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!id) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Id is not found');
    }
    const result = yield crew_server_1.crewService.getSingleCrew(id);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'successful',
        data: result
    });
}));
const updateCrew = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const travelData = req.body;
    const result = yield crew_server_1.crewService.updateCrew(id, travelData);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'successfull',
        data: result
    });
}));
const deleteCrew = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield crew_server_1.crewService.deleteCrew(id);
    sendResponse_1.responseForData.sendResponseForCreate(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'delete succefull',
        data: result
    });
}));
exports.crewController = {
    createCrew, getAllCrew, getSingleCrew, updateCrew, deleteCrew
};
