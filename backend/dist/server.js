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
const express_1 = __importDefault(require("express"));
const ConnectDb_1 = __importDefault(require("./outils/ConnectDb"));
const userModel_1 = __importDefault(require("./Models/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const check_1 = __importDefault(require("./outils/check"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const allUsers_1 = __importDefault(require("./allUsers"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('hello from server express with typescript');
});
// get all users
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel_1.default.find();
    const ret = (0, allUsers_1.default)(users);
    res.json(ret);
}));
// for login
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    res.setHeader('Content-Type', 'text/plain');
    const user = yield userModel_1.default.findOne({ username });
    if (!user)
        return res.json({ message: " user doesn't exist!" });
    const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!isPasswordValid)
        res.json({ message: " Username or Password is incorrect" });
    const token = jsonwebtoken_1.default.sign({ id: user._id }, `${process.env.SECRET}`);
    return res.json({ token, userId: user._id });
}));
// to register new user
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = (0, check_1.default)(req);
    const username = req.body.username;
    const exist = yield userModel_1.default.findOne({ username });
    if (exist)
        return res.status(421).json({ message: "username alredy exist" });
    if (!user)
        return res.status(422).json({ message: "the password is not same" });
    const newUser = new userModel_1.default(user);
    yield newUser.save();
    res.json({ message: "user created successfully" });
}));
// run server to listen and connect to DB
app.listen(process.env.PORT, () => {
    console.log("Express listening on port " + process.env.PORT);
    (0, ConnectDb_1.default)();
});
