"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers = __importStar(require("../controllers/UsersControllers/index"));
const Signin_1 = require("../controllers/UsersSignin/Signin");
const ensureAuthentication_1 = require("../middleware/ensureAuthentication");
const router = (0, express_1.Router)();
router.post('/entrar', Signin_1.signin);
router.post('/users', controllers.createUser);
router.get('/users', ensureAuthentication_1.ensureAuthentication, controllers.getUsers);
router.get('/logs', ensureAuthentication_1.ensureAuthentication, controllers.getLogging);
router.post('/logs', controllers.createLogging);
router.get('/register', ensureAuthentication_1.ensureAuthentication, controllers.getRegistration);
router.post('/register', controllers.createRegistration);
exports.default = router;
