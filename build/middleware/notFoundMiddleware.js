"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use((req, res, next) => {
    res.status(404).render('page_error', {
        title: 'Not Found',
        error: {
            status: '404',
            message: 'The requested page was not found'
        }
    });
});
exports.default = router;
