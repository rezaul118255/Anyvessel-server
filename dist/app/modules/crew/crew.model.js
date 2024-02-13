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
exports.Crew = exports.crewSchema = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = __importDefault(require("../../../config"));
exports.crewSchema = new mongoose_1.Schema({
    username: {
        type: String
    },
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
    },
    phone: {
        type: String
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    experience: {
        type: String
    },
    natinality: {
        country: { type: String },
        flag: { type: String }
    },
    birthday: {
        day: {
            type: String
        },
        month: {
            type: String
        },
        year: {
            type: String
        }
    },
    role: {
        type: String,
        enum: ['crew', 'boat', 'boatservice']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.crewSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield bcryptjs_1.default.hash(this.password, Number(config_1.default.bycrypt_salt_round));
        next();
    });
});
exports.Crew = (0, mongoose_1.model)('Crew', exports.crewSchema);
