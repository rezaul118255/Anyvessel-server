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
Object.defineProperty(exports, "__esModule", { value: true });
exports.crewService = void 0;
const crew_model_1 = require("./crew.model");
const createCrew = (crew) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield crew_model_1.Crew.create(crew);
    return result;
});
const getAllCrew = (PaginationOption) => __awaiter(void 0, void 0, void 0, function* () {
    const { page = 1, limit = 10 } = PaginationOption;
    const skip = (page - 1) * limit;
    const result = yield crew_model_1.Crew.find().sort({
        createdAt: 'desc'
    }).skip(skip).limit(limit);
    const total = yield crew_model_1.Crew.countDocuments();
    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    };
});
const getSingleCrew = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield crew_model_1.Crew.findById(id);
    return result;
});
const updateCrew = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield crew_model_1.Crew.findByIdAndUpdate({ _id: id }, { $set: Object.assign({}, payload) }, { new: true });
    return result;
});
const deleteCrew = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield crew_model_1.Crew.findByIdAndDelete(id);
    return result;
});
exports.crewService = {
    createCrew, getAllCrew, getSingleCrew, updateCrew, deleteCrew
};
