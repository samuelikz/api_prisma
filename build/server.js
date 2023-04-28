"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const notFoundMiddleware_1 = __importDefault(require("./middleware/notFoundMiddleware"));
const rateLimitByIP_1 = require("./middleware/rateLimitByIP");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.ENABLED_CORS,
}));
app.use(rateLimitByIP_1.limiterByIP);
app.use(express_1.default.json());
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
app.use('/', routes_1.default, notFoundMiddleware_1.default);
app.listen(process.env.PORT, () => console.log('Server is running !!'));
