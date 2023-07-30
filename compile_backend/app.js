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
        res.cookie('user', req.user);
        return [2 /*return*/];
    });
}); });
router.put('/updateClientinformation', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ClientPersonalDetails_1.default.updatePRINCIPLE(req.body, req.user.id)];
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
            case 0: return [4 /*yield*/, Inventory_1.default.createStore(req.body)];
            case 1:
                store = _a.sent();
                res.json('hello');
                return [2 /*return*/];
        }
    });
}); });
router.post('/insertInventoryItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body);
                return [4 /*yield*/, Inventory_1.default.insertInventoryItem(req.body)];
            case 1:
                current_store = _a.sent();
                res.json(current_store);
                return [2 /*return*/];
        }
    });
}); });
router.get('/getInventoryItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business_id, resultInventory;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                business_id = req.cookies.user.id;
                return [4 /*yield*/, Inventory_1.default.getInventoryItems(business_id)];
            case 1:
                resultInventory = _a.sent();
                res.json(resultInventory);
                return [2 /*return*/];
        }
    });
}); });
router.delete('/deleteInventoryItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.deleteInventoryItem(req.body)];
            case 1:
                current_store = _a.sent();
                res.json(current_store.affectedRows);
                return [2 /*return*/];
        }
    });
}); });
router.put('/updateInventoryItem', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.updateInventoryItem(req.body.values, req.body.id)];
            case 1:
                current_store = _a.sent();
                res.json(current_store);
                return [2 /*return*/];
        }
    });
}); });
//Checklist Routes
router.get('/getInventoryItemsForDailyChecklist/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business_id, newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                business_id = req.params.id;
                return [4 /*yield*/, Inventory_1.default.getInventoryChecklistItems(business_id)];
            case 1:
                newReply = _a.sent();
                res.json(newReply);
                return [2 /*return*/];
        }
    });
}); });
router.post('/insertInventoryChecklistItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body);
                req.body.order_quantity = req.body.stock_level - req.body.in_stock;
                if (req.body.order_quantity <= 0) {
                    req.body.order_quantity = 0;
                }
                delete req.body.stock_level;
                return [4 /*yield*/, Inventory_1.default.insertInventoryChecklistItems(req.body)];
            case 1:
                newReply = _a.sent();
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
                else if (check_DB_against_email.length > 0) {
                    res.json(true);
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
                req.body.pin = Math.floor(Math.random() * 999999) + 111111;
                return [4 /*yield*/, (0, Login_1.registrationInformation)(req.body)];
            case 3:
                sendTextReply = _a.sent();
                res.json(false);
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;


/***/ }),

/***/ "./src/BACKEND/MESSAGE_SUPPORT/support.ts":
/*!************************************************!*\
  !*** ./src/BACKEND/MESSAGE_SUPPORT/support.ts ***!
  \************************************************/
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
var Support_Database_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/Support_Database */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Support_Database.ts");
var send_sms_1 = __webpack_require__(/*! ../ProgramControlFlow/SMS/send_sms */ "./src/BACKEND/ProgramControlFlow/SMS/send_sms.ts");
var router = express.Router();
router.post('/support_message', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var sendTextReply, newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, send_sms_1.MessageResponseFromHomePage)(req.body.first_name, [req.body.phone_number])];
            case 1:
                sendTextReply = _a.sent();
                return [4 /*yield*/, Support_Database_1.default.insertMessage(req.body)];
            case 2:
                newReply = _a.sent();
                res.json(newReply);
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
                        body: "Dear ".concat(name.toLocaleUpperCase(), ",Thank you for contacting Kcm Inc. Rest assured that our support team will promptly respond to your query within the next 48-72 hours. "),
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
    host: process.env.MYSQL_HOST
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
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Credentials.Principle_Login_Credentials SET ?', values)];
}); }); };
exports.registrationInformation = registrationInformation;
var checkAccount = function (email) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Credentials.Principle_Login_Credentials WHERE email = ?', [email])];
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
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Credentials.Principle_Login_Credentials where id = ?', [id])];
}); }); };
var updatePRINCIPLE = function (info, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Credentials.Principle_Login_Credentials SET ? WHERE id = ?', [info, id])
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
// Create Store 
var createStore = function (store) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Inventory.Store SET ?', store)];
}); }); };
var selectStore = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Inventory.Store WHERE ?;', [id])];
}); }); };
//Create and Add Inventory to Principle Database
var insertInventoryItem = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Inventory.Inventory_Items SET ?', values)];
}); }); };
var getInventoryItems = function (business_id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Inventory.Inventory_Items WHERE business_id = ?', [business_id])];
}); }); };
var deleteInventoryItem = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('DELETE FROM Inventory.Inventory_Items WHERE ?', [id])];
}); }); };
var updateInventoryItem = function (values, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Inventory.Inventory_Items SET ? WHERE id = ?', [values, id])];
}); }); };
var getInventoryChecklistItems = function (business_id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT id,category,stock_level,brand,supplier,description FROM Inventory.Inventory_Items WHERE business_id = ? ORDER BY category', [business_id])];
}); }); };
var insertInventoryChecklistItems = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Inventory.Inventory_checklist SET ?', values)];
    }); });
};
exports["default"] = {
    createStore: createStore,
    selectStore: selectStore,
    insertInventoryItem: insertInventoryItem,
    getInventoryItems: getInventoryItems,
    deleteInventoryItem: deleteInventoryItem,
    updateInventoryItem: updateInventoryItem,
    getInventoryChecklistItems: getInventoryChecklistItems,
    insertInventoryChecklistItems: insertInventoryChecklistItems
};


/***/ }),

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Support_Database.ts":
/*!*************************************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Support_Database.ts ***!
  \*************************************************************************/
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
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Communication.Support SET ?', values)];
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
                    if (!user) {
                        return [2 /*return*/, done(null, false, { message: "Invalid credentials.\n" })];
                    }
                    if (!bcrypt.compareSync(password, user.password)) {
                        return [2 /*return*/, done(null, false, { message: "Invalid credentials.\n" })];
                    }
                    return [2 /*return*/, done(null, user)];
            }
        });
    });
}));
passport.serializeUser(function (user, done) {
    delete user.date_time;
    delete user.password;
    delete user.terms_of_service;
    delete user.privacy_policy;
    process.nextTick(function () {
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
    process.nextTick(function () {
        return done(null, user);
    });
});
router.post('/login_verification', passport.authenticate('local'), function (req, res) {
    if (req.user) {
        req.logIn(req.user, function (err) {
            return res.cookie('user', req.user).json(req.user);
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

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
var path = __webpack_require__(/*! path */ "path");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
var passport = __webpack_require__(/*! passport */ "passport");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
// import HomepageServer from './ProgramControlFlow/SQL/Query.ts/Homepage_Query';
// import ClientPortal from './ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails';
// import { MessagingResponse, sendReply } from './ProgramControlFlow/SMS/send_sms';
// import './ProgramControlFlow/PAYMENTS/authorize_card';
var support_1 = __webpack_require__(/*! ./MESSAGE_SUPPORT/support */ "./src/BACKEND/MESSAGE_SUPPORT/support.ts");
var ClientPersonalDetails_1 = __webpack_require__(/*! ./ClientPortal/ClientPersonalDetails */ "./src/BACKEND/ClientPortal/ClientPersonalDetails.ts");
// import billing from './ClientPortal/ClientBilling';
// import notary from './ClientPortal/ClientServiceRequest';
var InventoryRoutes_1 = __webpack_require__(/*! ./ClientPortal/InventoryRoutes */ "./src/BACKEND/ClientPortal/InventoryRoutes.ts");
var registration_1 = __webpack_require__(/*! ./Homepage/registration */ "./src/BACKEND/Homepage/registration.ts");
var localStrategy_1 = __webpack_require__(/*! ./Security/localStrategy */ "./src/BACKEND/Security/localStrategy.ts");
var session = __webpack_require__(/*! express-session */ "express-session");
__webpack_require__(/*! ./Security/Bearer */ "./src/BACKEND/Security/Bearer.ts");
var cookieparser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
var app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', '*');
    next();
});
app.set('trust proxy', true);
app.use(cookieparser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(localStrategy_1.default);
var validateUser = function (req, res, next) {
    if (!req.user) {
        res.redirect('/signup');
    }
    else {
        next();
    }
};
app.use('/', express.static('public'));
app.use('/signup', express.static('public'));
app.use('/store', express.static('public'));
app.use('/support', express.static('public'));
app.use('/principle/', validateUser, express.static('public'));
app.use(registration_1.default);
app.use(support_1.default);
app.use(ClientPersonalDetails_1.default);
app.use(InventoryRoutes_1.default);
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});
app.listen(8080, function () {
    console.log("Server listening on port ".concat(8080, "..."));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxPQUFPLENBQUMsTUFBTSxDQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUMsQ0FBQztBQUM1QyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBSzlELEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQVksQ0FBQztBQUVyQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUM7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQywrQkFBTSxDQUFDO0FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5QkFBUyxDQUFDO0FBR2xCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUMsQ0FBQztBQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBNEIsSUFBSSxRQUFLLENBQUM7QUFDcEQsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSy1DLU1vcnJpcy1JbmMvLi9zcmMvQkFDS0VORC9DbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzLnRzIiwid2VicGFjazovL0stQy1Nb3JyaXMtSW5jLy4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL0ludmVudG9yeVJvdXRlcy50cyIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy8uL3NyYy9CQUNLRU5EL0hvbWVwYWdlL3JlZ2lzdHJhdGlvbi50cyIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy8uL3NyYy9CQUNLRU5EL01FU1NBR0VfU1VQUE9SVC9zdXBwb3J0LnRzIiwid2VicGFjazovL0stQy1Nb3JyaXMtSW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcy50cyIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvQ29uZWN0aW9uLnRzIiwid2VicGFjazovL0stQy1Nb3JyaXMtSW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Mb2dpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscy50cyIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU3VwcG9ydF9EYXRhYmFzZS50cyIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy8uL3NyYy9CQUNLRU5EL1NlY3VyaXR5L0JlYXJlci50cyIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy8uL3NyYy9CQUNLRU5EL1NlY3VyaXR5L2xvY2FsU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vSy1DLU1vcnJpcy1JbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy9leHRlcm5hbCBjb21tb25qcyBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vSy1DLU1vcnJpcy1JbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vSy1DLU1vcnJpcy1JbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vSy1DLU1vcnJpcy1JbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudi9jb25maWdcIiIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3Mtc2Vzc2lvblwiIiwid2VicGFjazovL0stQy1Nb3JyaXMtSW5jL2V4dGVybmFsIGNvbW1vbmpzIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vSy1DLU1vcnJpcy1JbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJteXNxbDJcIiIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vSy1DLU1vcnJpcy1JbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1odHRwLWJlYXJlclwiIiwid2VicGFjazovL0stQy1Nb3JyaXMtSW5jL2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnQtbG9jYWxcIiIsIndlYnBhY2s6Ly9LLUMtTW9ycmlzLUluYy9leHRlcm5hbCBjb21tb25qcyBcInR3aWxpb1wiIiwid2VicGFjazovL0stQy1Nb3JyaXMtSW5jL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vSy1DLU1vcnJpcy1JbmMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSy1DLU1vcnJpcy1JbmMvLi9zcmMvQkFDS0VORC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgY2xpZW50X2FkbWluX3F1ZXJ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscyc7XG5pbXBvcnQge2NoZWNrQWNjb3VudH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Mb2dpbi8nXG5cblxuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIuZ2V0KCcvZ2V0UHJpbmNpcGxlSW5mb3JtYXRpb24nLCBhc3luYyAocmVxOmFueSwgcmVzKSA9PiB7XG4gICAgcmVzLmNvb2tpZSgndXNlcicscmVxLnVzZXIpXG5cblxufSk7XG5cbnJvdXRlci5wdXQoJy91cGRhdGVDbGllbnRpbmZvcm1hdGlvbicsIGFzeW5jIChyZXE6YW55LCByZXMpID0+IHtcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IGNsaWVudF9hZG1pbl9xdWVyeS51cGRhdGVQUklOQ0lQTEUocmVxLmJvZHkscmVxLnVzZXIuaWQpXG4gICAgcmVzLmpzb24obmV3UmVwbHkpXG59KTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7IFxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeSc7XG5pbXBvcnQgeyByZXNlcnZhdGlvbnNVcmwgfSBmcm9tICd0d2lsaW8vbGliL2p3dC90YXNrcm91dGVyL3V0aWwnO1xuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5cbnJvdXRlci5wb3N0KCcvY3JlYXRlU3RvcmUnLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gYXdhaXQgc3RvcmVzLmNyZWF0ZVN0b3JlKHJlcS5ib2R5KVxuICAgIHJlcy5qc29uKCdoZWxsbycpXG59KTtcblxuXG5yb3V0ZXIucG9zdCgnL2luc2VydEludmVudG9yeUl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgICBjb25zdCBjdXJyZW50X3N0b3JlID0gYXdhaXQgc3RvcmVzLmluc2VydEludmVudG9yeUl0ZW0ocmVxLmJvZHkpXG4gICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcblxufSk7XG5cbnJvdXRlci5nZXQoJy9nZXRJbnZlbnRvcnlJdGVtcycsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICBsZXQgYnVzaW5lc3NfaWQgPSByZXEuY29va2llcy51c2VyLmlkXG4gICAgY29uc3QgcmVzdWx0SW52ZW50b3J5ID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUl0ZW1zKGJ1c2luZXNzX2lkKVxuICAgIFxuXG4gICAgcmVzLmpzb24ocmVzdWx0SW52ZW50b3J5KVxufSk7XG5cblxucm91dGVyLmRlbGV0ZSgnL2RlbGV0ZUludmVudG9yeUl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMuZGVsZXRlSW52ZW50b3J5SXRlbShyZXEuYm9keSlcbiAgICByZXMuanNvbihjdXJyZW50X3N0b3JlLmFmZmVjdGVkUm93cylcblxufSk7XG5cbnJvdXRlci5wdXQoJy91cGRhdGVJbnZlbnRvcnlJdGVtJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMudXBkYXRlSW52ZW50b3J5SXRlbShyZXEuYm9keS52YWx1ZXMsIHJlcS5ib2R5LmlkKVxuICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG5cbn0pO1xuXG5cblxuXG4vL0NoZWNrbGlzdCBSb3V0ZXNcblxucm91dGVyLmdldCgnL2dldEludmVudG9yeUl0ZW1zRm9yRGFpbHlDaGVja2xpc3QvOmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgYnVzaW5lc3NfaWQgPSByZXEucGFyYW1zLmlkXG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBzdG9yZXMuZ2V0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMoYnVzaW5lc3NfaWQpXG4gICAgcmVzLmpzb24obmV3UmVwbHkpXG5cbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2luc2VydEludmVudG9yeUNoZWNrbGlzdEl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgICByZXEuYm9keS5vcmRlcl9xdWFudGl0eSA9IHJlcS5ib2R5LnN0b2NrX2xldmVsIC0gcmVxLmJvZHkuaW5fc3RvY2tcblxuICAgIGlmIChyZXEuYm9keS5vcmRlcl9xdWFudGl0eSA8PSAwKSB7XG4gICAgICAgIHJlcS5ib2R5Lm9yZGVyX3F1YW50aXR5ID0gMFxuICAgIH1cbiAgICBkZWxldGUgcmVxLmJvZHkuc3RvY2tfbGV2ZWxcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5pbnNlcnRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyhyZXEuYm9keSlcbiAgICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgZGF0YWJhc2VfcXVlcnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TdXBwb3J0X0RhdGFiYXNlJztcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgKiBhcyBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IHsgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24sIGNoZWNrQWNjb3VudCB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4nXG5pbXBvcnQgeyBVbmRlcmxpbmVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuY29uc3QgY2hlY2tDcmVkZW50aWFscyA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIFxuICBjb25zdCBjaGVja19EQl9hZ2FpbnN0X2VtYWlsOiBhbnlbXSA9IGF3YWl0IGNoZWNrQWNjb3VudChyZXEuYm9keS5lbWFpbClcbiAgaWYgKGNoZWNrX0RCX2FnYWluc3RfZW1haWwubGVuZ3RoID09PSAwKSB7XG4gICAgbmV4dCgpXG4gIH0gZWxzZSBpZihjaGVja19EQl9hZ2FpbnN0X2VtYWlsLmxlbmd0aCA+IDApIHtcbiAgICByZXMuanNvbih0cnVlKVxuICB9XG59XG5cblxucm91dGVyLnBvc3QoJy9yZWdpc3RyYXRpb24nLGNoZWNrQ3JlZGVudGlhbHMsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHRTeW5jKE51bWJlcihwcm9jZXNzLmVudi5TQUxUX1JPVU5EKSk7XG4gIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaFN5bmMocmVxLmJvZHkuY29uZmlybV9wYXNzd29yZCwgc2FsdCk7XG4gIGRlbGV0ZSByZXEuYm9keS5jb25maXJtX3Bhc3N3b3JkXG4gIHZhciB0b2tlbiA9IGp3dC5zaWduKHsgdXNlcl9uYW1lOiByZXEuYm9keS5lbWFpbCwgZW1haWw6IHJlcS5ib2R5LmVtYWlsIH0sIHByb2Nlc3MuZW52LkJFQVJFUl9QUklWQVRFKTtcbiAgcmVxLmJvZHkucGFzc3dvcmQgPSBoYXNoXG4gIHJlcS5ib2R5LmFjY2Vzc190b2tlbiA9IHRva2VuXG4gIHJlcS5ib2R5LnBpbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSkgKyAxMTExMTFcbiAgY29uc3Qgc2VuZFRleHRSZXBseSA9IGF3YWl0IHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uKHJlcS5ib2R5KVxuICByZXMuanNvbihmYWxzZSlcbn0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBkYXRhYmFzZV9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1N1cHBvcnRfRGF0YWJhc2UnO1xuaW1wb3J0IHsgTWVzc2FnZVJlc3BvbnNlRnJvbUhvbWVQYWdlIH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLnBvc3QoJy9zdXBwb3J0X21lc3NhZ2UnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbmNvbnN0IHNlbmRUZXh0UmVwbHkgPSBhd2FpdCBNZXNzYWdlUmVzcG9uc2VGcm9tSG9tZVBhZ2UocmVxLmJvZHkuZmlyc3RfbmFtZSxbcmVxLmJvZHkucGhvbmVfbnVtYmVyXSApXG4gIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgZGF0YWJhc2VfcXVlcnkuaW5zZXJ0TWVzc2FnZShyZXEuYm9keSlcbiAgcmVzLmpzb24obmV3UmVwbHkpXG59KTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsIlxuaW1wb3J0ICogYXMgVHdpbGlvIGZyb20gJ3R3aWxpbydcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnXG5kb3RlbnYuY29uZmlnKClcblxuXG5cbi8vIFR3aWxpbyBDb250cm9sIGFuZCBBY2Nlc3MgQ3JlZGVudGlhbCBcbmNvbnN0IGFjY291bnRTaWQgPSBwcm9jZXNzLmVudi5UV0lMSU9fU0lEO1xuY29uc3QgYXV0aFRva2VuID0gcHJvY2Vzcy5lbnYuVFdJTElPX0FVVEhLRVk7XG5jb25zdCBzbXMgPSBUd2lsaW8oYWNjb3VudFNpZCwgYXV0aFRva2VuKVxuXG5leHBvcnQgY29uc3QgeyBNZXNzYWdpbmdSZXNwb25zZSB9ID0gVHdpbGlvLnR3aW1sIFxuXG5leHBvcnQgZnVuY3Rpb24gTWVzc2FnZVJlc3BvbnNlRnJvbUhvbWVQYWdlKG5hbWU6c3RyaW5nLHRvPzpzdHJpbmdbXXwgYW55KSB7XG4gICAgXG4gICAgdG8ubWFwKGFzeW5jIChpKSA9PiB7XG4gICAgICAgIGF3YWl0IHNtcy5tZXNzYWdlcy5jcmVhdGUoe1xuICAgICAgICAgICAgYm9keTogYERlYXIgJHtuYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCl9LFRoYW5rIHlvdSBmb3IgY29udGFjdGluZyBLY20gSW5jLiBSZXN0IGFzc3VyZWQgdGhhdCBvdXIgc3VwcG9ydCB0ZWFtIHdpbGwgcHJvbXB0bHkgcmVzcG9uZCB0byB5b3VyIHF1ZXJ5IHdpdGhpbiB0aGUgbmV4dCA0OC03MiBob3Vycy4gYCxcbiAgICAgICAgICAgIGZyb206IHByb2Nlc3MuZW52LlRXSUxJT19QSE9ORSxcbiAgICAgICAgICAgIHNob3J0ZW5VcmxzOiB0cnVlLFxuICAgICAgICAgICAgdG86IGlcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3Qgc2VuZFJlcGx5ID0gKGJvZHkgPSBcIlRlc3RpbmcgdGhlIGFwaVwiLCB0bz86IGFueSkgPT4ge1xuICAgIF9waG9uZW51bWJlci5tYXAoYXN5bmMgKGkpID0+IHtcbiAgICAgICAgY29uc3QgbmV3X01lc3NhZ2UgPSBhd2FpdCBzbXMubWVzc2FnZXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5UV0lMSU9fUEhPTkU/LnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0bzogaVxuICAgICAgICB9KVxuICAgIH0pXG5cbn1cblxuXG5cblxuIiwiaW1wb3J0ICogYXMgbXlzcWwgZnJvbSAnbXlzcWwyJztcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IG15c3FsQWNjZXNzID0gbXlzcWwuY3JlYXRlUG9vbCh7XG4gICAgcG9ydDozMzA2LFxuICAgIHVzZXI6cHJvY2Vzcy5lbnYuTVlTUUxfVVNFUixcbiAgICBwYXNzd29yZDpwcm9jZXNzLmVudi5NWVNRTF9QQVNTV09SRCxcbiAgICBob3N0OnByb2Nlc3MuZW52Lk1ZU1FMX0hPU1Rcbn0pXG5cbmV4cG9ydCBjb25zdCBRdWVyeSA9IChxdWVyeTpzdHJpbmcsdmFsdWVzPzpBcnJheTxzdHJpbmd8bnVtYmVyPik9PntcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8YW55Pj4oKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICBteXNxbEFjY2Vzcy5xdWVyeShxdWVyeSx2YWx1ZXMsKGVycixyZXN1bHRzOmFueSkgPT57XG4gICAgICAgICAgICBpZihlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn07XG5cblxuXG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG4gZXhwb3J0IGxldCByZWdpc3RyYXRpb25JbmZvcm1hdGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscyBTRVQgPycsIHZhbHVlcyk7XG4gZXhwb3J0IGxldCBjaGVja0FjY291bnQgPSBhc3luYyAoZW1haWw6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgV0hFUkUgZW1haWwgPSA/JyxbZW1haWxdKVxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgZ2V0Q2xpZW50SW5mb3JtYXRpb24gPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscyB3aGVyZSBpZCA9ID8nLFtpZF0pO1xuY29uc3QgdXBkYXRlUFJJTkNJUExFID0gYXN5bmMgKGluZm8saWQpPT5RdWVyeSgnVVBEQVRFIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscyBTRVQgPyBXSEVSRSBpZCA9ID8nLFtpbmZvLGlkXSlcblxuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbi8vIGNvbnN0IGRlbGV0ZU1lc3NhZ2VzID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsIFtpZF0pO1xuLy8gY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gS0NNX0lOQy5jbGllbnRSZWdpc3RyYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuLy8gY29uc3QgaW5zZXJ0SW5zdGl0dXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5pbnN0aXR1dGlvbiBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6IGFueSwgaWQ6IGFueSkgPT4gUXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LCBpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldENsaWVudEluZm9ybWF0aW9uLFxuICAgIHVwZGF0ZVBSSU5DSVBMRSxcbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG4vLyBDcmVhdGUgU3RvcmUgXG5jb25zdCBjcmVhdGVTdG9yZSA9IGFzeW5jIChzdG9yZTogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gSW52ZW50b3J5LlN0b3JlIFNFVCA/Jywgc3RvcmUpO1xuY29uc3Qgc2VsZWN0U3RvcmUgPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIEludmVudG9yeS5TdG9yZSBXSEVSRSA/OycsIFtpZF0pO1xuXG5cbi8vQ3JlYXRlIGFuZCBBZGQgSW52ZW50b3J5IHRvIFByaW5jaXBsZSBEYXRhYmFzZVxuY29uc3QgaW5zZXJ0SW52ZW50b3J5SXRlbSA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgU0VUID8nLCB2YWx1ZXMpO1xuY29uc3QgZ2V0SW52ZW50b3J5SXRlbXMgPSBhc3luYyAoYnVzaW5lc3NfaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgV0hFUkUgYnVzaW5lc3NfaWQgPSA/JywgW2J1c2luZXNzX2lkXSk7XG5jb25zdCBkZWxldGVJbnZlbnRvcnlJdGVtID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnREVMRVRFIEZST00gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBXSEVSRSA/JywgW2lkXSk7XG5jb25zdCB1cGRhdGVJbnZlbnRvcnlJdGVtID0gYXN5bmMgKHZhbHVlcyxpZCkgPT4gUXVlcnkoJ1VQREFURSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFNFVCA/IFdIRVJFIGlkID0gPycsW3ZhbHVlcyxpZF0pO1xuY29uc3QgZ2V0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMgPSBhc3luYyhidXNpbmVzc19pZCkgPT4gUXVlcnkoJ1NFTEVDVCBpZCxjYXRlZ29yeSxzdG9ja19sZXZlbCxicmFuZCxzdXBwbGllcixkZXNjcmlwdGlvbiBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgV0hFUkUgYnVzaW5lc3NfaWQgPSA/IE9SREVSIEJZIGNhdGVnb3J5JywgW2J1c2luZXNzX2lkXSk7XG5jb25zdCBpbnNlcnRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0IFNFVCA/JywgdmFsdWVzKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjcmVhdGVTdG9yZSxcbiAgICBzZWxlY3RTdG9yZSxcbiAgICBpbnNlcnRJbnZlbnRvcnlJdGVtLFxuICAgIGdldEludmVudG9yeUl0ZW1zLFxuICAgIGRlbGV0ZUludmVudG9yeUl0ZW0sXG4gICAgdXBkYXRlSW52ZW50b3J5SXRlbSxcbiAgICBnZXRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyxcbiAgICBpbnNlcnRJbnZlbnRvcnlDaGVja2xpc3RJdGVtc1xufSIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uL0NvbmVjdGlvblwiO1xuXG5cbmNvbnN0IHZpZXdNZXNzYWdlcyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdzZWxlY3QgKiBmcm9tIENvbW11bmljYXRpb24uTWVzc2FnZXMnKTtcbmNvbnN0IGluc2VydE1lc3NhZ2U9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIENvbW11bmljYXRpb24uU3VwcG9ydCBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB2aWV3TWVzc2FnZXMsXG4gICAgaW5zZXJ0TWVzc2FnZVxuXG5cbn0iLCJcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCAncGFzc3BvcnQtbG9jYWwnO1xuaW1wb3J0ICogYXMgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnXG5pbXBvcnQge1N0cmF0ZWd5IGFzIEJlYXJlclN0cmF0ZWd5fSBmcm9tICdwYXNzcG9ydC1odHRwLWJlYXJlcic7XG5pbXBvcnQgKiBhcyBkYiBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9CZWFyZXJUb2tlbkRldGFpbHMnXG5pbXBvcnQgeyBteXNxbEFjY2VzcyB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvQ29uZWN0aW9uJztcblxuXG5cblxuXG5cbnBhc3Nwb3J0LnVzZShuZXcgQmVhcmVyU3RyYXRlZ3koXG4gICAgICh0b2tlbiwgZG9uZSk9PiB7XG4gICAgICAgIG15c3FsQWNjZXNzLnF1ZXJ5KGBTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLkxvZ2luX0NyZWRlbnRpYWxzIFdoZXJlIGFjY2Vzc190b2tlbiA9ID9gLCBbdG9rZW5dLCAoZXJyb3IsIHVzZXIpID0+IHtcblxuICAgICAgICAgICAgaWYgKGVycm9yKSB7IHJldHVybiBkb25lKGVycm9yKTsgfVxuICAgICAgICAgICAgaWYgKCF1c2VyKSB7IHJldHVybiBkb25lKG51bGwsIGZhbHNlKTsgfVxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIsIHsgc2NvcGU6ICdyZWFkJyB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgfVxuKSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCAncGFzc3BvcnQtbG9jYWwnO1xuaW1wb3J0ICogYXMgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnXG5pbXBvcnQgeyBTdHJhdGVneSBhcyBMb2NhbFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtbG9jYWwnXG5pbXBvcnQgeyBjaGVja0FjY291bnQgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luL2luZGV4J1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdCdcblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnBhc3Nwb3J0LnVzZShuZXcgTG9jYWxTdHJhdGVneSh7XG4gIHVzZXJuYW1lRmllbGQ6ICdlbWFpbCcsXG4gIHBhc3N3b3JkRmllbGQ6ICdwYXNzd29yZCcsXG59LCBhc3luYyBmdW5jdGlvbiB2ZXJpZnkoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgZG9uZTogYW55KSB7XG4gIGNvbnN0IFt1c2VyXSA9IGF3YWl0IGNoZWNrQWNjb3VudChlbWFpbClcbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgbWVzc2FnZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlxcblwiIH0pO1xuICB9XG4gIGlmICghYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkge1xuICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlLCB7IG1lc3NhZ2U6IFwiSW52YWxpZCBjcmVkZW50aWFscy5cXG5cIiB9KTtcbiAgfVxuICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcblxufVxuKSk7XG5cbnBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXIoKHVzZXI6IGFueSwgZG9uZSkgPT4ge1xuICBkZWxldGUgdXNlci5kYXRlX3RpbWVcbiAgZGVsZXRlIHVzZXIucGFzc3dvcmRcbiAgZGVsZXRlIHVzZXIudGVybXNfb2Zfc2VydmljZVxuICBkZWxldGUgdXNlci5wcml2YWN5X3BvbGljeVxuICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICByZXR1cm4gZG9uZShudWxsLCB7XG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIGZpcnN0X25hbWU6IHVzZXIuZmlyc3RfbmFtZSxcbiAgICAgIGxhc3RfbmFtZTogdXNlci5sYXN0X25hbWUsXG4gICAgICBidXNpbmVzc19uYW1lOiB1c2VyLmJ1c2luZXNzX25hbWUsXG4gICAgICBwaG9uZV9udW1iZXI6IHVzZXIucGhvbmVfbnVtYmVyLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBhY2NvdW50X3R5cGU6IHVzZXIuYWNjb3VudF90eXBlLFxuICAgICAgYWNjZXNzX3Rva2VuOiB1c2VyLmFjY2Vzc190b2tlblxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5wYXNzcG9ydC5kZXNlcmlhbGl6ZVVzZXIoKHVzZXI6IGFueSwgZG9uZSkgPT4ge1xuICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcbiAgfSk7XG59KTtcblxuXG5yb3V0ZXIucG9zdCgnL2xvZ2luX3ZlcmlmaWNhdGlvbicsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwnKSwgKHJlcTogYW55LCByZXMpID0+IHtcbiAgaWYgKHJlcS51c2VyKSB7XG4gICAgcmVxLmxvZ0luKHJlcS51c2VyLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLmNvb2tpZSgndXNlcicscmVxLnVzZXIpLmpzb24ocmVxLnVzZXIpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCFyZXEudXNlcikge1xuICAgIFxuICAgIHJlcy5zZW5kU3RhdHVzKDQwMSlcbiAgfVxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuXG5cblxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm15c3FsMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1odHRwLWJlYXJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1sb2NhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0d2lsaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcbmltcG9ydCAqIGFzIHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuLy8gaW1wb3J0IEhvbWVwYWdlU2VydmVyIGZyb20gJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Ib21lcGFnZV9RdWVyeSc7XG4vLyBpbXBvcnQgQ2xpZW50UG9ydGFsIGZyb20gJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzJztcbi8vIGltcG9ydCB7IE1lc3NhZ2luZ1Jlc3BvbnNlLCBzZW5kUmVwbHkgfSBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TTVMvc2VuZF9zbXMnO1xuLy8gaW1wb3J0ICcuL1Byb2dyYW1Db250cm9sRmxvdy9QQVlNRU5UUy9hdXRob3JpemVfY2FyZCc7XG5pbXBvcnQgc3VwcG9ydCBmcm9tICcuL01FU1NBR0VfU1VQUE9SVC9zdXBwb3J0J1xuaW1wb3J0IGNsaWVudCBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnXG4vLyBpbXBvcnQgYmlsbGluZyBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRCaWxsaW5nJztcbi8vIGltcG9ydCBub3RhcnkgZnJvbSAnLi9DbGllbnRQb3J0YWwvQ2xpZW50U2VydmljZVJlcXVlc3QnO1xuaW1wb3J0IGludmVudG9yeSBmcm9tICcuL0NsaWVudFBvcnRhbC9JbnZlbnRvcnlSb3V0ZXMnO1xuXG5pbXBvcnQgcmVnaXN0cmF0aW9uIGZyb20gJy4vSG9tZXBhZ2UvcmVnaXN0cmF0aW9uJ1xuaW1wb3J0IFVQU3RyYXRlZ3kgZnJvbSAnLi9TZWN1cml0eS9sb2NhbFN0cmF0ZWd5J1xuaW1wb3J0ICogYXMgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nXG5pbXBvcnQgJy4vU2VjdXJpdHkvQmVhcmVyJ1xuXG5pbXBvcnQgKiBhcyBjb29raWVwYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcidcblxuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXMuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIHJlcy5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnKicpXG4gIG5leHQoKVxufSlcbmFwcC5zZXQoJ3RydXN0IHByb3h5JywgdHJ1ZSlcblxuYXBwLnVzZShjb29raWVwYXJzZXIoKSlcbmFwcC51c2Uoc2Vzc2lvbih7XG4gIHNlY3JldDogJ2tleWJvYXJkIGNhdCcsXG4gIHJlc2F2ZTogZmFsc2UsXG4gIHNhdmVVbmluaXRpYWxpemVkOiBmYWxzZSxcbiAgY29va2llOiB7IHNlY3VyZTogZmFsc2UgfVxufSkpO1xuXG5cbmFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcbmFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcblxuXG5cbmFwcC51c2UoVVBTdHJhdGVneSlcbmNvbnN0IHZhbGlkYXRlVXNlciA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBpZiAoIXJlcS51c2VyKSB7XG4gICAgcmVzLnJlZGlyZWN0KCcvc2lnbnVwJylcbiAgfSBlbHNlIHtcbiAgICBuZXh0KClcbiAgfVxufVxuXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMoICdwdWJsaWMnKSlcbmFwcC51c2UoJy9zaWdudXAnLCBleHByZXNzLnN0YXRpYyggJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3N0b3JlJywgZXhwcmVzcy5zdGF0aWMoICdwdWJsaWMnKSlcbmFwcC51c2UoJy9zdXBwb3J0JywgZXhwcmVzcy5zdGF0aWMoICdwdWJsaWMnKSlcbmFwcC51c2UoJy9wcmluY2lwbGUvJywgdmFsaWRhdGVVc2VyLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5cblxuXG5cbmFwcC51c2UocmVnaXN0cmF0aW9uKVxuXG5hcHAudXNlKHN1cHBvcnQpXG5hcHAudXNlKGNsaWVudClcbmFwcC51c2UoaW52ZW50b3J5KVxuXG4gXG5hcHAuZ2V0KFwiKlwiLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLnNlbmRGaWxlKHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi4vcHVibGljXCIsIFwiaW5kZXguaHRtbFwiKSk7XG59KTtcbmFwcC5saXN0ZW4oODA4MCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7ODA4MH0uLi5gKVxufSlcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==