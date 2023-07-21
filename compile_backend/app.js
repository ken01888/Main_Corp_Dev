/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BACKEND/ClientPortal/ClientPersonalDetails.ts":
/*!***********************************************************!*\
  !*** ./src/BACKEND/ClientPortal/ClientPersonalDetails.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express = __webpack_require__(/*! express */ "express");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
var ClientPersonalDetails_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails.ts");
var router = express.Router();
router.get('/getPrincipleInformation', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.json(req.user);
        return [2 /*return*/];
    });
}); });
router.put('/updateClientinformation', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.user);
                return [4 /*yield*/, ClientPersonalDetails_1.default.updatePRINCIPLE(req.body, req.user.id)];
            case 1:
                newReply = _a.sent();
                res.json(newReply);
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;


/***/ }),

/***/ "./src/BACKEND/ClientPortal/InventoryRoutes.ts":
/*!*****************************************************!*\
  !*** ./src/BACKEND/ClientPortal/InventoryRoutes.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express = __webpack_require__(/*! express */ "express");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
var Inventory_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory.ts");
var router = express.Router();
router.post('/createStore', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req.body.client_id = req.user.id;
                return [4 /*yield*/, Inventory_1.default.createStore(req.body)];
            case 1:
                store = _a.sent();
                res.json('hello');
                return [2 /*return*/];
        }
    });
}); });
router.get('/getStores', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.user);
                req.body.client_id = req.user.id;
                return [4 /*yield*/, Inventory_1.default.selectStore(req.body)];
            case 1:
                current_store = _a.sent();
                res.json(current_store);
                return [2 /*return*/];
        }
    });
}); });
router.post('/insertInventoryItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.insertInventoryItem(req.body)];
            case 1:
                current_store = _a.sent();
                res.json(current_store);
                return [2 /*return*/];
        }
    });
}); });
router.get('/getInventoryItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getInventoryItems;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.user);
                return [4 /*yield*/, Inventory_1.default.getInventoryItems(5)];
            case 1:
                getInventoryItems = _a.sent();
                res.json(getInventoryItems);
                return [2 /*return*/];
        }
    });
}); });
// router.post('/requestNotary_Service_Requests/:id?', async (req, res) => {
//     const newReply = await NotaryRequest.requestNotaryServices(req.body)
//     res.json('hello')
// });
// router.put('/updateClientinformation', async (req:any, res) => {
// console.log(req.user)
//     const newReply = await client_admin_query.updatePRINCIPLE(req.body,req.user.id)
//     res.json(newReply)
// });
exports["default"] = router;


/***/ }),

/***/ "./src/BACKEND/Homepage/contact.ts":
/*!*****************************************!*\
  !*** ./src/BACKEND/Homepage/contact.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express = __webpack_require__(/*! express */ "express");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
var Homepage_Query_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/Homepage_Query */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Homepage_Query.ts");
var send_sms_1 = __webpack_require__(/*! ../ProgramControlFlow/SMS/send_sms */ "./src/BACKEND/ProgramControlFlow/SMS/send_sms.ts");
var router = express.Router();
router.post('/client_message', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var sendTextReply, newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, send_sms_1.MessageResponseFromHomePage)(req.body.first_name, [req.body.phone_number])];
            case 1:
                sendTextReply = _a.sent();
                return [4 /*yield*/, Homepage_Query_1.default.insertMessage(req.body)];
            case 2:
                newReply = _a.sent();
                console.log(sendTextReply);
                res.json(newReply);
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;


/***/ }),

/***/ "./src/BACKEND/Homepage/registration.ts":
/*!**********************************************!*\
  !*** ./src/BACKEND/Homepage/registration.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express = __webpack_require__(/*! express */ "express");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
var bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
var jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
var Login_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/Login */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Login/index.ts");
var router = express.Router();
var checkCredentials = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var check_DB_against_email;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, Login_1.checkAccount)(req.body.email)];
            case 1:
                check_DB_against_email = _a.sent();
                if (check_DB_against_email.length === 0) {
                    next();
                }
                else {
                    res.json('This username is unavailable');
                }
                return [2 /*return*/];
        }
    });
}); };
router.post('/registration', checkCredentials, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var salt, hash, token, sendTextReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bcrypt.genSaltSync(Number(process.env.SALT_ROUND))];
            case 1:
                salt = _a.sent();
                return [4 /*yield*/, bcrypt.hashSync(req.body.confirm_password, salt)];
            case 2:
                hash = _a.sent();
                delete req.body.confirm_password;
                token = jwt.sign({ user_name: req.body.email, email: req.body.email }, process.env.BEARER_PRIVATE);
                req.body.password = hash;
                req.body.access_token = token;
                req.body.client_access_pin = Math.floor(Math.random() * 999999) + 111111;
                return [4 /*yield*/, (0, Login_1.registrationInformation)(req.body)];
            case 3:
                sendTextReply = _a.sent();
                res.redirect('/principle');
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;


/***/ }),

/***/ "./src/BACKEND/ProgramControlFlow/SMS/send_sms.ts":
/*!********************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SMS/send_sms.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendReply = exports.MessageResponseFromHomePage = exports.MessagingResponse = void 0;
var Twilio = __webpack_require__(/*! twilio */ "twilio");
var dotenv = __webpack_require__(/*! dotenv */ "dotenv");
dotenv.config();
// Twilio Control and Access Credential 
var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_AUTHKEY;
var sms = Twilio(accountSid, authToken);
exports.MessagingResponse = Twilio.twiml.MessagingResponse;
function MessageResponseFromHomePage(name, to) {
    var _this = this;
    to.map(function (i) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sms.messages.create({
                        body: "Dear ".concat(name.toLocaleUpperCase(), ", thank you for reaching out to \uD83C\uDF0E Kcm Inc. We take immense pride in our partnership with you and are dedicated to delivering unparalleled service. Rest assured that one of our representatives will be in touch with you promptly to address your inquiry."),
                        from: process.env.TWILIO_PHONE,
                        shortenUrls: true,
                        to: i
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.MessageResponseFromHomePage = MessageResponseFromHomePage;
var sendReply = function (body, to) {
    if (body === void 0) { body = "Testing the api"; }
    _phonenumber.map(function (i) { return __awaiter(void 0, void 0, void 0, function () {
        var new_Message;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, sms.messages.create({
                        body: body,
                        from: (_a = process.env.TWILIO_PHONE) === null || _a === void 0 ? void 0 : _a.toString(),
                        to: i
                    })];
                case 1:
                    new_Message = _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
};
exports.sendReply = sendReply;


/***/ }),

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Conection.ts":
/*!*********************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Conection.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Query = exports.mysqlAccess = void 0;
var mysql = __webpack_require__(/*! mysql2 */ "mysql2");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
exports.mysqlAccess = mysql.createPool({
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE
});
var Query = function (query, values) {
    return new Promise(function (resolve, reject) {
        exports.mysqlAccess.query(query, values, function (err, results) {
            if (err)
                return reject(err);
            return resolve(results);
        });
    });
};
exports.Query = Query;


/***/ }),

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Homepage_Query.ts":
/*!***********************************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Homepage_Query.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Conection_1 = __webpack_require__(/*! ../Conection */ "./src/BACKEND/ProgramControlFlow/SQL/Conection.ts");
var viewMessages = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('select * from Communication.Messages')];
}); }); };
var insertMessage = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Communication.Messages SET ?', values)];
}); }); };
// const singleChirp = async (id:string) => Query('SELECT * FROM Chirps WHERE id = ?',[id]);
// const deleteMessages = async (id: string) => Query('DELETE FROM contact WHERE id = ?', [id]);
// const insertCLIENT = async (...values: any) => Query('INSERT INTO KCM_INC.clientRegistration SET ?', values);
// const insertInstitution = async (values: any) => Query('INSERT INTO Nutrientmap.institution SET ?', values);
// const updateMessages = async (newContent: any, id: any) => Query('UPDATE contact SET ? WHERE id = ?', [newContent, id])
// const allUsers = async () => Query('SELECT * FROM Users');
// const insertUsers = async(user :any )=>Query('INSERT INTO clients SET ?' ,[user]);
// const insertPhysical = async(physical :any,clientid:number )=>Query('INSERT INTO client_lifestyle SET ?' ,[physical]);
exports["default"] = {
    viewMessages: viewMessages,
    insertMessage: insertMessage
};


/***/ }),

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Login/index.ts":
/*!********************************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Login/index.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkAccount = exports.registrationInformation = void 0;
var Conection_1 = __webpack_require__(/*! ../../Conection */ "./src/BACKEND/ProgramControlFlow/SQL/Conection.ts");
var registrationInformation = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Credentials.Login_Credentials SET ?', values)];
}); }); };
exports.registrationInformation = registrationInformation;
var checkAccount = function (email) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Credentials.Login_Credentials WHERE email = ?', email)];
}); }); };
exports.checkAccount = checkAccount;


/***/ }),

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails.ts":
/*!****************************************************************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Conection_1 = __webpack_require__(/*! ../../Conection */ "./src/BACKEND/ProgramControlFlow/SQL/Conection.ts");
var getClientInformation = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Credentials.Login_Credentials where id = ?', [id])];
}); }); };
var insertCLIENT = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Clients.Personal_Information SET ?', values)];
}); }); };
var updatePRINCIPLE = function (info, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Credentials.Login_Credentials SET ? WHERE id = ?', [info, id])
        // const singleChirp = async (id:string) => Query('SELECT * FROM Chirps WHERE id = ?',[id]);
        // const deleteMessages = async (id: string) => Query('DELETE FROM contact WHERE id = ?', [id]);
        // const insertCLIENT = async (...values: any) => Query('INSERT INTO KCM_INC.clientRegistration SET ?', values);
        // const insertInstitution = async (values: any) => Query('INSERT INTO Nutrientmap.institution SET ?', values);
        // const updateMessages = async (newContent: any, id: any) => Query('UPDATE contact SET ? WHERE id = ?', [newContent, id])
        // const allUsers = async () => Query('SELECT * FROM Users');
        // const insertUsers = async(user :any )=>Query('INSERT INTO clients SET ?' ,[user]);
        // const insertPhysical = async(physical :any,clientid:number )=>Query('INSERT INTO client_lifestyle SET ?' ,[physical]);
    ];
}); }); };
// const singleChirp = async (id:string) => Query('SELECT * FROM Chirps WHERE id = ?',[id]);
// const deleteMessages = async (id: string) => Query('DELETE FROM contact WHERE id = ?', [id]);
// const insertCLIENT = async (...values: any) => Query('INSERT INTO KCM_INC.clientRegistration SET ?', values);
// const insertInstitution = async (values: any) => Query('INSERT INTO Nutrientmap.institution SET ?', values);
// const updateMessages = async (newContent: any, id: any) => Query('UPDATE contact SET ? WHERE id = ?', [newContent, id])
// const allUsers = async () => Query('SELECT * FROM Users');
// const insertUsers = async(user :any )=>Query('INSERT INTO clients SET ?' ,[user]);
// const insertPhysical = async(physical :any,clientid:number )=>Query('INSERT INTO client_lifestyle SET ?' ,[physical]);
exports["default"] = {
    getClientInformation: getClientInformation,
    insertCLIENT: insertCLIENT,
    updatePRINCIPLE: updatePRINCIPLE,
};


/***/ }),

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory.ts":
/*!****************************************************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Conection_1 = __webpack_require__(/*! ../../Conection */ "./src/BACKEND/ProgramControlFlow/SQL/Conection.ts");
var createStore = function (store) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Inventory.Store SET ?', store)];
}); }); };
var selectStore = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Inventory.Store WHERE ?;', [id])];
}); }); };
var insertInventoryItem = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Inventory.Store_Item SET ?', values)];
}); }); };
var getInventoryItems = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Inventory.Store_Item where ?;;', [id])];
}); }); };
exports["default"] = {
    createStore: createStore,
    selectStore: selectStore,
    insertInventoryItem: insertInventoryItem,
    getInventoryItems: getInventoryItems
};


/***/ }),

/***/ "./src/BACKEND/Security/Bearer.ts":
/*!****************************************!*\
  !*** ./src/BACKEND/Security/Bearer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! dotenv/config */ "dotenv/config");
__webpack_require__(/*! passport-local */ "passport-local");
var passport = __webpack_require__(/*! passport */ "passport");
var passport_http_bearer_1 = __webpack_require__(/*! passport-http-bearer */ "passport-http-bearer");
var Conection_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Conection */ "./src/BACKEND/ProgramControlFlow/SQL/Conection.ts");
passport.use(new passport_http_bearer_1.Strategy(function (token, done) {
    console.log(token);
    Conection_1.mysqlAccess.query("SELECT * FROM Credentials.Login_Credentials Where access_token = ?", [token], function (error, user) {
        if (error) {
            return done(error);
        }
        if (!user) {
            return done(null, false);
        }
        if (user) {
            return done(null, user, { scope: 'read' });
        }
    });
}));


/***/ }),

/***/ "./src/BACKEND/Security/localStrategy.ts":
/*!***********************************************!*\
  !*** ./src/BACKEND/Security/localStrategy.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var express = __webpack_require__(/*! express */ "express");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
__webpack_require__(/*! passport-local */ "passport-local");
var passport = __webpack_require__(/*! passport */ "passport");
var passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
var index_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/Login/index */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Login/index.ts");
var bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
var router = express.Router();
passport.use(new passport_local_1.Strategy({
    usernameField: 'email',
    passwordField: 'password',
}, function verify(email, password, done) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, index_1.checkAccount)(email)];
                case 1:
                    user = (_a.sent())[0];
                    try {
                        if (!user) {
                            return [2 /*return*/, done(null, false, { message: "Invalid credentials.\n" })];
                        }
                        if (!bcrypt.compareSync(password, user.password)) {
                            return [2 /*return*/, done(null, false, { message: "Invalid credentials.\n" })];
                        }
                        return [2 /*return*/, done(null, user)];
                    }
                    catch (error) {
                        console.log(error);
                    }
                    return [2 /*return*/];
            }
        });
    });
}));
passport.serializeUser(function (user, done) {
    process.nextTick(function () {
        console.log('seralize');
        return done(null, {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            business_name: user.business_name,
            phone_number: user.phone_number,
            email: user.email,
            account_type: user.account_type,
            access_token: user.access_token
        });
    });
});
passport.deserializeUser(function (user, done) {
    console.log('deseralize');
    process.nextTick(function () {
        return done(null, user);
    });
});
router.post('/login_verification', passport.authenticate('local'), function (req, res) {
    console.log(req.user);
    if (req.user) {
        req.logIn(req.session.passport.user, function (err) {
            return res.json(req.user);
        });
    }
    else if (!req.user) {
        res.sendStatus(401);
    }
});
exports["default"] = router;


/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-http-bearer":
/*!***************************************!*\
  !*** external "passport-http-bearer" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("passport-http-bearer");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("twilio");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./src/BACKEND/index.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var express = __webpack_require__(/*! express */ "express");
var cors = __webpack_require__(/*! cors */ "cors");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
var passport = __webpack_require__(/*! passport */ "passport");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
// import HomepageServer from './ProgramControlFlow/SQL/Query.ts/Homepage_Query';
// import ClientPortal from './ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails';
// import { MessagingResponse, sendReply } from './ProgramControlFlow/SMS/send_sms';
// import './ProgramControlFlow/PAYMENTS/authorize_card';
var contact_1 = __webpack_require__(/*! ./Homepage/contact */ "./src/BACKEND/Homepage/contact.ts");
var ClientPersonalDetails_1 = __webpack_require__(/*! ./ClientPortal/ClientPersonalDetails */ "./src/BACKEND/ClientPortal/ClientPersonalDetails.ts");
// import billing from './ClientPortal/ClientBilling';
// import notary from './ClientPortal/ClientServiceRequest';
var InventoryRoutes_1 = __webpack_require__(/*! ./ClientPortal/InventoryRoutes */ "./src/BACKEND/ClientPortal/InventoryRoutes.ts");
var registration_1 = __webpack_require__(/*! ./Homepage/registration */ "./src/BACKEND/Homepage/registration.ts");
var localStrategy_1 = __webpack_require__(/*! ./Security/localStrategy */ "./src/BACKEND/Security/localStrategy.ts");
var session = __webpack_require__(/*! express-session */ "express-session");
__webpack_require__(/*! ./Security/Bearer */ "./src/BACKEND/Security/Bearer.ts");
var cookieparser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
var validateUser = function (req, res, next) {
    if (!req.user) {
        res.sendStatus(403);
    }
    else {
        console.log(req.user);
        next();
    }
};
var app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('trust proxy', true);
app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', '*');
    next();
});
app.use(cookieparser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', express.static('public'));
app.use(localStrategy_1.default);
app.use('/principle', validateUser, express.static('public'));
// app.use(authenticationUser)
app.use('/client_registration', registration_1.default);
app.use('/message', contact_1.default);
app.use(ClientPersonalDetails_1.default);
app.use(InventoryRoutes_1.default);
// app.use('/client_portal',billing)
// app.use('/client_portal_services',notary)
app.listen(8000, function () {
    console.log("Server listening on port ".concat(8000, "..."));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFN0QsOEJBQThCO0FBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsc0JBQVksQ0FBQztBQUM3QyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxpQkFBTyxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsK0JBQU0sQ0FBQztBQUNmLEdBQUcsQ0FBQyxHQUFHLENBQUMseUJBQUssQ0FBQztBQUNkLG9DQUFvQztBQUNwQyw0Q0FBNEM7QUFHNUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUE0QixJQUFJLFFBQUssQ0FBQztBQUNwRCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9DbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9JbnZlbnRvcnlSb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvSG9tZXBhZ2UvY29udGFjdC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Ib21lcGFnZS9yZWdpc3RyYXRpb24udHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML0NvbmVjdGlvbi50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9TZWN1cml0eS9CZWFyZXIudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvU2VjdXJpdHkvbG9jYWxTdHJhdGVneS50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52L2NvbmZpZ1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJteXNxbDJcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydFwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0LWh0dHAtYmVhcmVyXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnQtbG9jYWxcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJ0d2lsaW9cIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGNsaWVudF9hZG1pbl9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIuZ2V0KCcvZ2V0UHJpbmNpcGxlSW5mb3JtYXRpb24nLCBhc3luYyAocmVxOmFueSwgcmVzKSA9PiB7XG4gICAgcmVzLmpzb24ocmVxLnVzZXIpXG59KTtcblxucm91dGVyLnB1dCgnL3VwZGF0ZUNsaWVudGluZm9ybWF0aW9uJywgYXN5bmMgKHJlcTphbnksIHJlcykgPT4ge1xuY29uc29sZS5sb2cocmVxLnVzZXIpXG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBjbGllbnRfYWRtaW5fcXVlcnkudXBkYXRlUFJJTkNJUExFKHJlcS5ib2R5LHJlcS51c2VyLmlkKVxuICAgIHJlcy5qc29uKG5ld1JlcGx5KVxufSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeSc7XG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cblxucm91dGVyLnBvc3QoJy9jcmVhdGVTdG9yZScsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICAgcmVxLmJvZHkuY2xpZW50X2lkID0gcmVxLnVzZXIuaWRcbiAgICBjb25zdCBzdG9yZSA9IGF3YWl0IHN0b3Jlcy5jcmVhdGVTdG9yZShyZXEuYm9keSlcbiAgICByZXMuanNvbignaGVsbG8nKVxufSk7XG5cbnJvdXRlci5nZXQoJy9nZXRTdG9yZXMnLGFzeW5jIChyZXE6YW55LHJlcyk9PntcbiAgICBjb25zb2xlLmxvZyhyZXEudXNlcilcbiAgICByZXEuYm9keS5jbGllbnRfaWQgPSByZXEudXNlci5pZFxuICAgIGNvbnN0IGN1cnJlbnRfc3RvcmUgPSBhd2FpdCBzdG9yZXMuc2VsZWN0U3RvcmUocmVxLmJvZHkpIFxuICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG5cbn0pXG5cbnJvdXRlci5wb3N0KCcvaW5zZXJ0SW52ZW50b3J5SXRlbXMnLGFzeW5jIChyZXE6YW55LHJlcyk9PntcbiAgICBjb25zdCBjdXJyZW50X3N0b3JlID0gYXdhaXQgc3RvcmVzLmluc2VydEludmVudG9yeUl0ZW0ocmVxLmJvZHkpXG4gICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcblxufSlcblxucm91dGVyLmdldCgnL2dldEludmVudG9yeUl0ZW1zJyxhc3luYyAocmVxLHJlcyk9PntcbiAgICBjb25zb2xlLmxvZyhyZXEudXNlcilcbiAgICBjb25zdCBnZXRJbnZlbnRvcnlJdGVtcyA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtcyg1KVxuICAgIHJlcy5qc29uKGdldEludmVudG9yeUl0ZW1zKVxufSlcblxuXG4vLyByb3V0ZXIucG9zdCgnL3JlcXVlc3ROb3RhcnlfU2VydmljZV9SZXF1ZXN0cy86aWQ/JywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4vLyAgICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBOb3RhcnlSZXF1ZXN0LnJlcXVlc3ROb3RhcnlTZXJ2aWNlcyhyZXEuYm9keSlcbi8vICAgICByZXMuanNvbignaGVsbG8nKVxuXG4vLyB9KTtcblxuLy8gcm91dGVyLnB1dCgnL3VwZGF0ZUNsaWVudGluZm9ybWF0aW9uJywgYXN5bmMgKHJlcTphbnksIHJlcykgPT4ge1xuLy8gY29uc29sZS5sb2cocmVxLnVzZXIpXG4vLyAgICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBjbGllbnRfYWRtaW5fcXVlcnkudXBkYXRlUFJJTkNJUExFKHJlcS5ib2R5LHJlcS51c2VyLmlkKVxuLy8gICAgIHJlcy5qc29uKG5ld1JlcGx5KVxuLy8gfSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBkYXRhYmFzZV9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5JztcbmltcG9ydCB7IE1lc3NhZ2VSZXNwb25zZUZyb21Ib21lUGFnZSB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TTVMvc2VuZF9zbXMnO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbnJvdXRlci5wb3N0KCcvY2xpZW50X21lc3NhZ2UnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbmNvbnN0IHNlbmRUZXh0UmVwbHkgPSBhd2FpdCBNZXNzYWdlUmVzcG9uc2VGcm9tSG9tZVBhZ2UocmVxLmJvZHkuZmlyc3RfbmFtZSxbcmVxLmJvZHkucGhvbmVfbnVtYmVyXSApXG4gIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgZGF0YWJhc2VfcXVlcnkuaW5zZXJ0TWVzc2FnZShyZXEuYm9keSlcbiAgY29uc29sZS5sb2coc2VuZFRleHRSZXBseSlcbiAgcmVzLmpzb24obmV3UmVwbHkpXG59KTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGRhdGFiYXNlX3F1ZXJ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvSG9tZXBhZ2VfUXVlcnknO1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdCdcbmltcG9ydCAqIGFzIGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgeyByZWdpc3RyYXRpb25JbmZvcm1hdGlvbiwgY2hlY2tBY2NvdW50IH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Mb2dpbidcbmltcG9ydCB7IFVuZGVybGluZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5jb25zdCBjaGVja0NyZWRlbnRpYWxzID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IGNoZWNrX0RCX2FnYWluc3RfZW1haWw6IGFueVtdID0gYXdhaXQgY2hlY2tBY2NvdW50KHJlcS5ib2R5LmVtYWlsKVxuICBpZiAoY2hlY2tfREJfYWdhaW5zdF9lbWFpbC5sZW5ndGggPT09IDApIHtcbiAgICBuZXh0KClcbiAgfSBlbHNlIHtcbiAgICByZXMuanNvbignVGhpcyB1c2VybmFtZSBpcyB1bmF2YWlsYWJsZScpXG4gIH1cbn1cblxuXG5yb3V0ZXIucG9zdCgnL3JlZ2lzdHJhdGlvbicsIGNoZWNrQ3JlZGVudGlhbHMsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHRTeW5jKE51bWJlcihwcm9jZXNzLmVudi5TQUxUX1JPVU5EKSk7XG4gIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaFN5bmMocmVxLmJvZHkuY29uZmlybV9wYXNzd29yZCwgc2FsdCk7XG4gIGRlbGV0ZSByZXEuYm9keS5jb25maXJtX3Bhc3N3b3JkXG4gIHZhciB0b2tlbiA9IGp3dC5zaWduKHsgdXNlcl9uYW1lOiByZXEuYm9keS5lbWFpbCwgZW1haWw6IHJlcS5ib2R5LmVtYWlsIH0sIHByb2Nlc3MuZW52LkJFQVJFUl9QUklWQVRFKTtcbiAgcmVxLmJvZHkucGFzc3dvcmQgPSBoYXNoXG4gIHJlcS5ib2R5LmFjY2Vzc190b2tlbiA9IHRva2VuXG4gIHJlcS5ib2R5LmNsaWVudF9hY2Nlc3NfcGluID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KSArIDExMTExMVxuICBjb25zdCBzZW5kVGV4dFJlcGx5ID0gYXdhaXQgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24ocmVxLmJvZHkpXG4gIHJlcy5yZWRpcmVjdCgnL3ByaW5jaXBsZScpXG59KTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuIiwiXG5pbXBvcnQgKiBhcyBUd2lsaW8gZnJvbSAndHdpbGlvJ1xuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudidcbmRvdGVudi5jb25maWcoKVxuXG5cblxuLy8gVHdpbGlvIENvbnRyb2wgYW5kIEFjY2VzcyBDcmVkZW50aWFsIFxuY29uc3QgYWNjb3VudFNpZCA9IHByb2Nlc3MuZW52LlRXSUxJT19TSUQ7XG5jb25zdCBhdXRoVG9rZW4gPSBwcm9jZXNzLmVudi5UV0lMSU9fQVVUSEtFWTtcbmNvbnN0IHNtcyA9IFR3aWxpbyhhY2NvdW50U2lkLCBhdXRoVG9rZW4pXG5cbmV4cG9ydCBjb25zdCB7IE1lc3NhZ2luZ1Jlc3BvbnNlIH0gPSBUd2lsaW8udHdpbWwgXG5cbmV4cG9ydCBmdW5jdGlvbiBNZXNzYWdlUmVzcG9uc2VGcm9tSG9tZVBhZ2UobmFtZTpzdHJpbmcsdG8/OnN0cmluZ1tdfCBhbnkpIHtcbiAgICBcbiAgICB0by5tYXAoYXN5bmMgKGkpID0+IHtcbiAgICAgICAgYXdhaXQgc21zLm1lc3NhZ2VzLmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5OiBgRGVhciAke25hbWUudG9Mb2NhbGVVcHBlckNhc2UoKX0sIHRoYW5rIHlvdSBmb3IgcmVhY2hpbmcgb3V0IHRvIPCfjI4gS2NtIEluYy4gV2UgdGFrZSBpbW1lbnNlIHByaWRlIGluIG91ciBwYXJ0bmVyc2hpcCB3aXRoIHlvdSBhbmQgYXJlIGRlZGljYXRlZCB0byBkZWxpdmVyaW5nIHVucGFyYWxsZWxlZCBzZXJ2aWNlLiBSZXN0IGFzc3VyZWQgdGhhdCBvbmUgb2Ygb3VyIHJlcHJlc2VudGF0aXZlcyB3aWxsIGJlIGluIHRvdWNoIHdpdGggeW91IHByb21wdGx5IHRvIGFkZHJlc3MgeW91ciBpbnF1aXJ5LmAsXG4gICAgICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5UV0lMSU9fUEhPTkUsXG4gICAgICAgICAgICBzaG9ydGVuVXJsczogdHJ1ZSxcbiAgICAgICAgICAgIHRvOiBpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IHNlbmRSZXBseSA9IChib2R5ID0gXCJUZXN0aW5nIHRoZSBhcGlcIiwgdG8/OiBhbnkpID0+IHtcbiAgICBfcGhvbmVudW1iZXIubWFwKGFzeW5jIChpKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld19NZXNzYWdlID0gYXdhaXQgc21zLm1lc3NhZ2VzLmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuVFdJTElPX1BIT05FPy50b1N0cmluZygpLFxuICAgICAgICAgICAgdG86IGlcbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cblxuXG4iLCJpbXBvcnQgKiBhcyBteXNxbCBmcm9tICdteXNxbDInO1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcblxuXG5cblxuXG5leHBvcnQgY29uc3QgbXlzcWxBY2Nlc3MgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgICBwb3J0OjMzMDYsXG4gICAgdXNlcjpwcm9jZXNzLmVudi5NWVNRTF9VU0VSLFxuICAgIHBhc3N3b3JkOnByb2Nlc3MuZW52Lk1ZU1FMX1BBU1NXT1JELFxuICAgIGRhdGFiYXNlOnByb2Nlc3MuZW52LkRBVEFCQVNFXG59KVxuXG5leHBvcnQgY29uc3QgUXVlcnkgPSAocXVlcnk6c3RyaW5nLHZhbHVlcz86QXJyYXk8c3RyaW5nfG51bWJlcj4pPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFycmF5PGFueT4+KChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgbXlzcWxBY2Nlc3MucXVlcnkocXVlcnksdmFsdWVzLChlcnIscmVzdWx0czphbnkpID0+e1xuICAgICAgICAgICAgaWYoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3Qgdmlld01lc3NhZ2VzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ3NlbGVjdCAqIGZyb20gQ29tbXVuaWNhdGlvbi5NZXNzYWdlcycpO1xuY29uc3QgaW5zZXJ0TWVzc2FnZT0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ29tbXVuaWNhdGlvbi5NZXNzYWdlcyBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB2aWV3TWVzc2FnZXMsXG4gICAgaW5zZXJ0TWVzc2FnZVxuXG5cbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG4gZXhwb3J0IGNvbnN0IHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgU0VUID8nLCB2YWx1ZXMpO1xuIGV4cG9ydCBjb25zdCBjaGVja0FjY291bnQgPSBhc3luYyAoZW1haWw6YW55KSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5Mb2dpbl9DcmVkZW50aWFscyBXSEVSRSBlbWFpbCA9ID8nLGVtYWlsKVxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgZ2V0Q2xpZW50SW5mb3JtYXRpb24gPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLkxvZ2luX0NyZWRlbnRpYWxzIHdoZXJlIGlkID0gPycsW2lkXSk7XG5jb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBDbGllbnRzLlBlcnNvbmFsX0luZm9ybWF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbmNvbnN0IHVwZGF0ZVBSSU5DSVBMRSA9IGFzeW5jIChpbmZvLGlkKT0+UXVlcnkoJ1VQREFURSBDcmVkZW50aWFscy5Mb2dpbl9DcmVkZW50aWFscyBTRVQgPyBXSEVSRSBpZCA9ID8nLFtpbmZvLGlkXSlcblxuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbi8vIGNvbnN0IGRlbGV0ZU1lc3NhZ2VzID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsIFtpZF0pO1xuLy8gY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gS0NNX0lOQy5jbGllbnRSZWdpc3RyYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuLy8gY29uc3QgaW5zZXJ0SW5zdGl0dXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5pbnN0aXR1dGlvbiBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6IGFueSwgaWQ6IGFueSkgPT4gUXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LCBpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldENsaWVudEluZm9ybWF0aW9uLFxuICAgIGluc2VydENMSUVOVCxcbiAgICB1cGRhdGVQUklOQ0lQTEUsXG59IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgY3JlYXRlU3RvcmUgPSBhc3luYyAoc3RvcmU6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEludmVudG9yeS5TdG9yZSBTRVQgPycsIHN0b3JlKTtcbmNvbnN0IHNlbGVjdFN0b3JlID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBJbnZlbnRvcnkuU3RvcmUgV0hFUkUgPzsnLCBbaWRdKTtcbmNvbnN0IGluc2VydEludmVudG9yeUl0ZW0gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBJbnZlbnRvcnkuU3RvcmVfSXRlbSBTRVQgPycsIHZhbHVlcyk7XG5jb25zdCBnZXRJbnZlbnRvcnlJdGVtcyA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gSW52ZW50b3J5LlN0b3JlX0l0ZW0gd2hlcmUgPzs7JywgW2lkXSk7XG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjcmVhdGVTdG9yZSxcbiAgICBzZWxlY3RTdG9yZSxcbiAgICBpbnNlcnRJbnZlbnRvcnlJdGVtLFxuICAgIGdldEludmVudG9yeUl0ZW1zXG59IiwiXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgJ3Bhc3Nwb3J0LWxvY2FsJztcbmltcG9ydCAqIGFzIHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0IHtTdHJhdGVneSBhcyBCZWFyZXJTdHJhdGVneX0gZnJvbSAncGFzc3BvcnQtaHR0cC1iZWFyZXInO1xuaW1wb3J0ICogYXMgZGIgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQmVhcmVyVG9rZW5EZXRhaWxzJ1xuaW1wb3J0IHsgbXlzcWxBY2Nlc3MgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML0NvbmVjdGlvbic7XG5cblxuXG5cblxuXG5wYXNzcG9ydC51c2UobmV3IEJlYXJlclN0cmF0ZWd5KFxuICAgICAodG9rZW4sIGRvbmUpPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcbiAgICAgICAgbXlzcWxBY2Nlc3MucXVlcnkoYFNFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgV2hlcmUgYWNjZXNzX3Rva2VuID0gP2AsIFt0b2tlbl0sIChlcnJvciwgdXNlcikgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHsgcmV0dXJuIGRvbmUoZXJyb3IpOyB9XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHsgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpOyB9XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlciwgeyBzY29wZTogJ3JlYWQnIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG4pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0ICdwYXNzcG9ydC1sb2NhbCc7XG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCB7U3RyYXRlZ3kgYXMgTG9jYWxTdHJhdGVneX0gZnJvbSAncGFzc3BvcnQtbG9jYWwnXG5pbXBvcnQgeyBjaGVja0FjY291bnQgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luL2luZGV4J1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdCdcblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnBhc3Nwb3J0LnVzZSggbmV3IExvY2FsU3RyYXRlZ3koe1xuICB1c2VybmFtZUZpZWxkOiAnZW1haWwnLFxuICBwYXNzd29yZEZpZWxkOiAncGFzc3dvcmQnLFxufSwgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5KGVtYWlsOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nLCBkb25lOmFueSkge1xuICBjb25zdCBbdXNlcl0gPSBhd2FpdCBjaGVja0FjY291bnQoZW1haWwpXG4gIHRyeSB7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBtZXNzYWdlOiBcIkludmFsaWQgY3JlZGVudGlhbHMuXFxuXCIgfSk7XG4gICAgfVxuICAgIGlmICghYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkge1xuICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgbWVzc2FnZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlxcblwiIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxufVxuKSk7XG5cbnBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXIoKHVzZXI6YW55LCBkb25lKSA9PiB7XG4gIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzZXJhbGl6ZScpXG4gICAgcmV0dXJuIGRvbmUobnVsbCwge1xuICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICBmaXJzdF9uYW1lOiB1c2VyLmZpcnN0X25hbWUsXG4gICAgICBsYXN0X25hbWU6IHVzZXIubGFzdF9uYW1lLFxuICAgICAgYnVzaW5lc3NfbmFtZTogdXNlci5idXNpbmVzc19uYW1lLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyLnBob25lX251bWJlcixcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgYWNjb3VudF90eXBlOiB1c2VyLmFjY291bnRfdHlwZSxcbiAgICAgIGFjY2Vzc190b2tlbjogdXNlci5hY2Nlc3NfdG9rZW5cbiAgICB9KTtcbiAgfSk7XG59KTtcblxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKCh1c2VyOiBhbnksIGRvbmUpID0+IHtcbmNvbnNvbGUubG9nKCdkZXNlcmFsaXplJylcbiAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XG4gIH0pO1xufSk7XG5cblxucm91dGVyLnBvc3QoJy9sb2dpbl92ZXJpZmljYXRpb24nLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsJyksIChyZXE6YW55LCByZXMpID0+IHtcbiAgY29uc29sZS5sb2cocmVxLnVzZXIpXG4gIGlmIChyZXEudXNlcikge1xuICAgIHJlcS5sb2dJbihyZXEuc2Vzc2lvbi5wYXNzcG9ydC51c2VyLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgIHJldHVybiByZXMuanNvbihyZXEudXNlcik7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIXJlcS51c2VyKSB7XG4gICAgcmVzLnNlbmRTdGF0dXMoNDAxKVxuXG4gIH1cbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cblxuXG5cblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnYvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJteXNxbDJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtaHR0cC1iZWFyZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtbG9jYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHdpbGlvXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuaW1wb3J0ICogYXMgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG4vLyBpbXBvcnQgSG9tZXBhZ2VTZXJ2ZXIgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5Jztcbi8vIGltcG9ydCBDbGllbnRQb3J0YWwgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuLy8gaW1wb3J0IHsgTWVzc2FnaW5nUmVzcG9uc2UsIHNlbmRSZXBseSB9IGZyb20gJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG4vLyBpbXBvcnQgJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1BBWU1FTlRTL2F1dGhvcml6ZV9jYXJkJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vSG9tZXBhZ2UvY29udGFjdCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi9DbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzJ1xuLy8gaW1wb3J0IGJpbGxpbmcgZnJvbSAnLi9DbGllbnRQb3J0YWwvQ2xpZW50QmlsbGluZyc7XG4vLyBpbXBvcnQgbm90YXJ5IGZyb20gJy4vQ2xpZW50UG9ydGFsL0NsaWVudFNlcnZpY2VSZXF1ZXN0JztcbmltcG9ydCBzdG9yZSBmcm9tICcuL0NsaWVudFBvcnRhbC9JbnZlbnRvcnlSb3V0ZXMnO1xuXG5pbXBvcnQgcmVnaXN0cmF0aW9uIGZyb20gJy4vSG9tZXBhZ2UvcmVnaXN0cmF0aW9uJ1xuaW1wb3J0IFVQU3RyYXRlZ3kgZnJvbSAnLi9TZWN1cml0eS9sb2NhbFN0cmF0ZWd5J1xuaW1wb3J0ICogYXMgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nXG5pbXBvcnQgJy4vU2VjdXJpdHkvQmVhcmVyJ1xuaW1wb3J0ICogYXMgY29va2llcGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInXG5cblxuY29uc3QgdmFsaWRhdGVVc2VyID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGlmICghcmVxLnVzZXIpIHtcbiAgICByZXMuc2VuZFN0YXR1cyg0MDMpXG5cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhyZXEudXNlcilcblxuICAgIG5leHQoKVxuICB9XG59XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5cblxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShjb3JzKCkpXG5hcHAuc2V0KCd0cnVzdCBwcm94eScsIHRydWUpXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXMuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIHJlcy5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnKicpXG4gIG5leHQoKVxufSlcbmFwcC51c2UoY29va2llcGFyc2VyKCkpXG5hcHAudXNlKHNlc3Npb24oe1xuICBzZWNyZXQ6ICdrZXlib2FyZCBjYXQnLFxuICByZXNhdmU6IGZhbHNlLFxuICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2UsXG4gIGNvb2tpZTogeyBzZWN1cmU6IGZhbHNlIH1cbn0pKTtcblxuXG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG5hcHAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XG5cblxuXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKTtcbmFwcC51c2UoVVBTdHJhdGVneSlcblxuXG5cbmFwcC51c2UoJy9wcmluY2lwbGUnLCB2YWxpZGF0ZVVzZXIsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcblxuLy8gYXBwLnVzZShhdXRoZW50aWNhdGlvblVzZXIpXG5hcHAudXNlKCcvY2xpZW50X3JlZ2lzdHJhdGlvbicsIHJlZ2lzdHJhdGlvbilcbmFwcC51c2UoJy9tZXNzYWdlJyxjb250YWN0KVxuYXBwLnVzZShjbGllbnQpXG5hcHAudXNlKHN0b3JlKVxuLy8gYXBwLnVzZSgnL2NsaWVudF9wb3J0YWwnLGJpbGxpbmcpXG4vLyBhcHAudXNlKCcvY2xpZW50X3BvcnRhbF9zZXJ2aWNlcycsbm90YXJ5KVxuIFxuXG5hcHAubGlzdGVuKDgwMDAsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAkezgwMDB9Li4uYClcbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=