/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BACKEND/ClientPortal/ClientBilling.ts":
/*!***************************************************!*\
  !*** ./src/BACKEND/ClientPortal/ClientBilling.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var ClientBillingDetails_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientBillingDetails */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientBillingDetails.ts");
var router = express.Router();
router.get('/getPrincipleBillingInformation/:id?', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply, clientProfileReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ClientBillingDetails_1.default.getBillingInformation()];
            case 1:
                newReply = _a.sent();
                return [4 /*yield*/, Object.entries(newReply[0]).splice(2, 5)];
            case 2:
                clientProfileReply = _a.sent();
                res.json(clientProfileReply);
                return [2 /*return*/];
        }
    });
}); });
router.put('/updatePrincipleBillingInformation/:id?', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req);
                return [4 /*yield*/, ClientBillingDetails_1.default.updateBillingInformation(req.body, req.params.id)];
            case 1:
                newReply = _a.sent();
                console.log(newReply);
                res.json('hello');
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;


/***/ }),

/***/ "./src/BACKEND/ClientPortal/ClientPersonalDetails.ts":
/*!***********************************************************!*\
  !*** ./src/BACKEND/ClientPortal/ClientPersonalDetails.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
router.get('/getPrincipleInformation/?:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply, clientProfileReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ClientPersonalDetails_1.default.getClientInformation()];
            case 1:
                newReply = _a.sent();
                return [4 /*yield*/, Object.entries(newReply[0]).splice(1, 9)];
            case 2:
                clientProfileReply = _a.sent();
                res.json(clientProfileReply);
                return [2 /*return*/];
        }
    });
}); });
router.put('/updateClientinformation/?:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ClientPersonalDetails_1.default.updatePRINCIPLE(req.body, req.params.id)];
            case 1:
                newReply = _a.sent();
                res.json('hello');
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;


/***/ }),

/***/ "./src/BACKEND/ClientPortal/ClientServiceRequest.ts":
/*!**********************************************************!*\
  !*** ./src/BACKEND/ClientPortal/ClientServiceRequest.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var Notary_Services_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Notary_Services */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Notary_Services.ts");
var router = express.Router();
router.get('/getNotary_Service_Requests/:id?', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Notary_Services_1.default.getUpcomingNotaryServices()];
            case 1:
                newReply = _a.sent();
                console.log(newReply);
                res.json(newReply);
                return [2 /*return*/];
        }
    });
}); });
router.post('/requestNotary_Service_Requests/:id?', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body);
                return [4 /*yield*/, Notary_Services_1.default.requestNotaryServices(req.body)];
            case 1:
                newReply = _a.sent();
                console.log(newReply);
                res.json('hello');
                return [2 /*return*/];
        }
    });
}); });
// router.get('/getPrincipleBillingInformation/?:id', async (req, res) => {
//     const newReply = await NotaryRequest.getBillingInformation()
//     const clientProfileReply = await Object.entries(newReply[0]).splice(2,5)
//     res.json(clientProfileReply)
// });
// router.put('/updatePrincipleBillingInformation/?:id', async (req, res) => {
//     console.log(req.params)
//     const newReply = await NotaryRequest.updateBillingInformation(req.body,req.params.id)
//     console.log(newReply)
//     res.json('hello')
// });
exports["default"] = router;


/***/ }),

/***/ "./src/BACKEND/Homepage/contact.ts":
/*!*****************************************!*\
  !*** ./src/BACKEND/Homepage/contact.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
                req.body.bearer_token = token;
                req.body.client_access_pin = Math.floor(Math.random() * 999999) + 111111;
                return [4 /*yield*/, (0, Login_1.registrationInformation)(req.body)];
            case 3:
                sendTextReply = _a.sent();
                res.json(sendTextReply);
                return [2 /*return*/];
        }
    });
}); });
router.get('/testing_route', function (req, res) {
    res.json('hello');
});
console.log(JSON.stringify({
    first_name: 'Kenneth ',
    last_name: 'Cunningham',
    business_name: 'Ken',
    business_size: 'micro',
    phone_number: '4047400093',
    email: '4047400093@gmail.com',
    password: 'a',
    confirm_password: 'a',
    terms_of_service: true,
    privacy_policy: true
}));
exports["default"] = router;
function insertLoginInformationForClient(body) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "./src/BACKEND/PAYMENTS/authorize_card.ts":
/*!************************************************!*\
  !*** ./src/BACKEND/PAYMENTS/authorize_card.ts ***!
  \************************************************/
/***/ (() => {

// import * as AUTHORIZENET from 'authorizenet';
// import * as express from 'express'
// import * as dotenv from 'dotenv' 
// dotenv.config()
// let ApiContracts = AUTHORIZENET.APIContracts;
// let ApiControllers = AUTHORIZENET.APIControllers;
// let Constants = AUTHORIZENET.Constants
// 	function debitBankAccount() {
// 		var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
// 	merchantAuthenticationType.setName(String(process.env.AUTHORIZE_NET_API_LOGIN_ID));
// 	merchantAuthenticationType.setTransactionKey(String(process.env.AUTHORIZE_NET_TRANSACTION_KEY));
// 		var bankAccountType = new ApiContracts.BankAccountType();
// 		bankAccountType.setAccountType(ApiContracts.BankAccountTypeEnum.SAVINGS);
// 		bankAccountType.setRoutingNumber('121042882');
// 		//added code
// 		var bankAccountNum = Math.floor(Math.random() * 9999999999) + 10000;
// 		bankAccountType.setAccountNumber(bankAccountNum.toString());
// 		bankAccountType.setNameOnAccount('John Doe');
// 		var paymentType = new ApiContracts.PaymentType();
// 		paymentType.setBankAccount(bankAccountType);
// 		var orderDetails = new ApiContracts.OrderType();
// 		orderDetails.setInvoiceNumber('INV-12345');
// 		orderDetails.setDescription('Product Description');
// 		var tax = new ApiContracts.ExtendedAmountType();
// 		tax.setAmount('4.26');
// 		tax.setName('level2 tax name');
// 		tax.setDescription('level2 tax');
// 		var duty = new ApiContracts.ExtendedAmountType();
// 		duty.setAmount('8.55');
// 		duty.setName('duty name');
// 		duty.setDescription('duty description');
// 		var shipping = new ApiContracts.ExtendedAmountType();
// 		shipping.setAmount('8.55');
// 		shipping.setName('shipping name');
// 		shipping.setDescription('shipping description');
// 		// var billTo = new ApiContracts.CustomerAddressType();
// 		// billTo.setFirstName('Ellen');
// 		// billTo.setLastName('Johnson');
// 		// billTo.setCompany('Souveniropolis');
// 		// billTo.setAddress('14 Main Street');
// 		// billTo.setCity('Pecan Springs');
// 		// billTo.setState('TX');
// 		// billTo.setZip('44628');
// 		// billTo.setCountry('USA');
// 		var shipTo = new ApiContracts.CustomerAddressType();
// 		shipTo.setFirstName('China');
// 		shipTo.setLastName('Bayles');
// 		shipTo.setCompany('Thyme for Tea');
// 		shipTo.setAddress('12 Main Street');
// 		shipTo.setCity('Pecan Springs');
// 		shipTo.setState('TX');
// 		shipTo.setZip('44628');
// 		shipTo.setCountry('USA');
// 		var lineItem_id1 = new ApiContracts.LineItemType();
// 		lineItem_id1.setItemId('1');
// 		lineItem_id1.setName('vase');
// 		lineItem_id1.setDescription('cannes logo');
// 		lineItem_id1.setQuantity('18');
// 		lineItem_id1.setUnitPrice('45.00');
// 		var lineItem_id2 = new ApiContracts.LineItemType();
// 		lineItem_id2.setItemId('2');
// 		lineItem_id2.setName('vase2');
// 		lineItem_id2.setDescription('cannes logo2');
// 		lineItem_id2.setQuantity('28');
// 		lineItem_id2.setUnitPrice('25.00');
// 		var lineItemList:any = [];
// 		lineItemList.push(lineItem_id1);
// 		lineItemList.push(lineItem_id2);
// 		var lineItems = new ApiContracts.ArrayOfLineItem();
// 		lineItems.setLineItem(lineItemList);
// 		var transactionRequestType = new ApiContracts.TransactionRequestType();
// 		transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
// 		transactionRequestType.setPayment(paymentType);
// 		transactionRequestType.setAmount(19.00);
// 		transactionRequestType.setLineItems(lineItems);
// 		transactionRequestType.setOrder(orderDetails);
// 		transactionRequestType.setTax(tax);
// 		transactionRequestType.setDuty(duty);
// 		transactionRequestType.setShipping(shipping);
// 		// transactionRequestType.setBillTo(billTo);
// 		transactionRequestType.setShipTo(shipTo);
// 		var createRequest = new ApiContracts.CreateTransactionRequest();
// 		createRequest.setRefId('123456');
// 		createRequest.setMerchantAuthentication(merchantAuthenticationType);
// 		createRequest.setTransactionRequest(transactionRequestType);
// 		//pretty print request
// 		console.log(JSON.stringify(createRequest.getJSON(), null, 2));
// 		var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());
// 		ctrl.execute(function(){
// 			var apiResponse = ctrl.getResponse();
// 			var response = new ApiContracts.CreateTransactionResponse(apiResponse);
// 			//pretty print response
// 			console.log(JSON.stringify(response, null, 2));
// 			if(response != null){
// 				if(response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK){
// 					if(response.getTransactionResponse().getMessages() != null){
// 						console.log('Successfully created transaction with Transaction ID: ' + response.getTransactionResponse().getTransId());
// 						console.log('Response Code: ' + response.getTransactionResponse().getResponseCode());
// 						console.log('Message Code: ' + response.getTransactionResponse().getMessages().getMessage()[0].getCode());
// 						console.log('Description: ' + response.getTransactionResponse().getMessages().getMessage()[0].getDescription());
// 					}
// 					else {
// 						console.log('Failed Transaction.');
// 						if(response.getTransactionResponse().getErrors() != null){
// 							console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
// 							console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
// 						}
// 					}
// 				}
// 				else {
// 					console.log('Failed Transaction. ');
// 					if(response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null){
// 						console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
// 						console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
// 					}
// 					else {
// 						console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
// 						console.log('Error message: ' + response.getMessages().getMessage()[0].getText());
// 					}
// 				}
// 			}
// 			else {
// 				console.log('Null Response.');
// 			}
// 		});
// 	}
// 	if (require.main === module) {
// 		debitBankAccount(function(){
// 			console.log('debitBankAccount call complete.');
// 		});
// 	}
// 	debitBankAccount()
// 	module.exports.debitBankAccount = debitBankAccount;


/***/ }),

/***/ "./src/BACKEND/ProgramControlFlow/SMS/send_sms.ts":
/*!********************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SMS/send_sms.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Query = void 0;
var mysql = __webpack_require__(/*! mysql2 */ "mysql2");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
var mysqlAccess = mysql.createPool({
    port: 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE
});
var Query = function (query, values) {
    return new Promise(function (resolve, reject) {
        mysqlAccess.query(query, values, function (err, results) {
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

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientBillingDetails.ts":
/*!***************************************************************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientBillingDetails.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var getBillingInformation = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Clients.Principle_Billing_Information')];
}); }); };
var insertBillingInformation = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Clients.Principle_Billing_Information SET ?', values)];
}); }); };
var updateBillingInformation = function (info, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Clients.Principle_Billing_Information SET ? WHERE admin_id = ?', [info, id])
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
    getBillingInformation: getBillingInformation,
    insertBillingInformation: insertBillingInformation,
    updateBillingInformation: updateBillingInformation
};


/***/ }),

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails.ts":
/*!****************************************************************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var getClientInformation = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Clients.Personal_Information')];
}); }); };
var insertCLIENT = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Clients.Personal_Information SET ?', values)];
}); }); };
var updatePRINCIPLE = function (info, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Clients.Personal_Information SET ? WHERE id = ?', [info, id])
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

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Notary_Services.ts":
/*!**********************************************************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Notary_Services.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var getUpcomingNotaryServices = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Clients.Principle_Notary_Request WHERE userId = 3 AND notary_request_type = "Certify copies"')];
}); }); };
var requestNotaryServices = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Clients.Principle_Notary_Request SET ?', values)];
}); }); };
var updateNotaryServiceRequest = function (info, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Clients.Principle_Notary_Request SET ? WHERE id = ?', [info, id])];
}); }); };
var deleteNotaryServiceRequest = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('DELETE FROM Clients.Principle_Notary_Request WHERE id = ?', [id])];
}); }); };
exports["default"] = {
    getUpcomingNotaryServices: getUpcomingNotaryServices,
    requestNotaryServices: requestNotaryServices,
    updateNotaryServiceRequest: updateNotaryServiceRequest,
    deleteNotaryServiceRequest: deleteNotaryServiceRequest
};


/***/ }),

/***/ "./src/BACKEND/index.ts":
/*!******************************!*\
  !*** ./src/BACKEND/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
var cors = __webpack_require__(/*! cors */ "cors");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
var ClientPersonalDetails_1 = __webpack_require__(/*! ./ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails.ts");
var send_sms_1 = __webpack_require__(/*! ./ProgramControlFlow/SMS/send_sms */ "./src/BACKEND/ProgramControlFlow/SMS/send_sms.ts");
__webpack_require__(/*! ./PAYMENTS/authorize_card */ "./src/BACKEND/PAYMENTS/authorize_card.ts");
var contact_1 = __webpack_require__(/*! ./Homepage/contact */ "./src/BACKEND/Homepage/contact.ts");
var ClientPersonalDetails_2 = __webpack_require__(/*! ./ClientPortal/ClientPersonalDetails */ "./src/BACKEND/ClientPortal/ClientPersonalDetails.ts");
var ClientBilling_1 = __webpack_require__(/*! ./ClientPortal/ClientBilling */ "./src/BACKEND/ClientPortal/ClientBilling.ts");
var ClientServiceRequest_1 = __webpack_require__(/*! ./ClientPortal/ClientServiceRequest */ "./src/BACKEND/ClientPortal/ClientServiceRequest.ts");
var registration_1 = __webpack_require__(/*! ./Homepage/registration */ "./src/BACKEND/Homepage/registration.ts");
var app = express();
app.use(express.static('complie_frontend'));
app.use(cors());
app.use(express.json());
app.set('trust proxy', true);
app.use(bodyParser.urlencoded({ extended: false }));
var newUse = app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
app.use('/message', contact_1.default);
app.use('/client_portal', ClientPersonalDetails_2.default);
app.use('/client_portal', ClientBilling_1.default);
app.use('/client_portal_services', ClientServiceRequest_1.default);
app.use('/client_registration', registration_1.default);
app.get('/test', function (req, res) {
    res.json('a');
});
app.get('/database', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ClientPersonalDetails_1.default.getClientInformation()];
            case 1:
                newReply = _a.sent();
                res.json(newReply);
                console.log(newReply);
                return [2 /*return*/];
        }
    });
}); });
app.post('/twilio', function (req, res) {
    // sendMessage();
    res.json("ok");
});
app.post('/sms', function (req, res) {
    var twiml = new send_sms_1.MessagingResponse();
    twiml.message('The Robots are coming! Head for the hills!');
    console.log(req.body.Body);
    res.header('Content-Type', 'application/xml');
    res.status(200).send(twiml.toString());
}
// res.type('text/xml').send(twiml.toString());
);
var PORT = process.env.PORT || 80;
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT, "..."));
});


/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql2");

/***/ }),

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

"use strict";
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/BACKEND/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLG1DQUE0QixJQUFJLFFBQUssQ0FBQztBQUNwRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ2pGRjs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9DbGllbnRCaWxsaW5nLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL0NsaWVudFNlcnZpY2VSZXF1ZXN0LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL0hvbWVwYWdlL2NvbnRhY3QudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvSG9tZXBhZ2UvcmVnaXN0cmF0aW9uLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1BBWU1FTlRTL2F1dGhvcml6ZV9jYXJkLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TTVMvc2VuZF9zbXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9Db25lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Ib21lcGFnZV9RdWVyeS50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luL2luZGV4LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudEJpbGxpbmdEZXRhaWxzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9Ob3RhcnlfU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52L2NvbmZpZ1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJteXNxbDJcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJ0d2lsaW9cIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBjbGllbnRfYmlsbGluZ19xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRCaWxsaW5nRGV0YWlscyc7XG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbnJvdXRlci5nZXQoJy9nZXRQcmluY2lwbGVCaWxsaW5nSW5mb3JtYXRpb24vOmlkPycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgY2xpZW50X2JpbGxpbmdfcXVlcnkuZ2V0QmlsbGluZ0luZm9ybWF0aW9uKClcbiAgICBjb25zdCBjbGllbnRQcm9maWxlUmVwbHkgPSBhd2FpdCBPYmplY3QuZW50cmllcyhuZXdSZXBseVswXSkuc3BsaWNlKDIsNSlcbiAgICByZXMuanNvbihjbGllbnRQcm9maWxlUmVwbHkpXG4gICBcbn0pO1xuXG5yb3V0ZXIucHV0KCcvdXBkYXRlUHJpbmNpcGxlQmlsbGluZ0luZm9ybWF0aW9uLzppZD8nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXEpXG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBjbGllbnRfYmlsbGluZ19xdWVyeS51cGRhdGVCaWxsaW5nSW5mb3JtYXRpb24ocmVxLmJvZHkscmVxLnBhcmFtcy5pZClcbiAgICBjb25zb2xlLmxvZyhuZXdSZXBseSlcbiAgICByZXMuanNvbignaGVsbG8nKVxufSk7XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBjbGllbnRfYWRtaW5fcXVlcnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzJztcblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLmdldCgnL2dldFByaW5jaXBsZUluZm9ybWF0aW9uLz86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IGNsaWVudF9hZG1pbl9xdWVyeS5nZXRDbGllbnRJbmZvcm1hdGlvbigpXG4gICAgY29uc3QgY2xpZW50UHJvZmlsZVJlcGx5ID0gYXdhaXQgT2JqZWN0LmVudHJpZXMobmV3UmVwbHlbMF0pLnNwbGljZSgxLDkpXG4gICAgcmVzLmpzb24oY2xpZW50UHJvZmlsZVJlcGx5KVxufSk7XG5cbnJvdXRlci5wdXQoJy91cGRhdGVDbGllbnRpbmZvcm1hdGlvbi8/OmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBjbGllbnRfYWRtaW5fcXVlcnkudXBkYXRlUFJJTkNJUExFKHJlcS5ib2R5LHJlcS5wYXJhbXMuaWQpXG4gICAgcmVzLmpzb24oJ2hlbGxvJylcbn0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IE5vdGFyeVJlcXVlc3QgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvTm90YXJ5X1NlcnZpY2VzJztcblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLmdldCgnL2dldE5vdGFyeV9TZXJ2aWNlX1JlcXVlc3RzLzppZD8nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IE5vdGFyeVJlcXVlc3QuZ2V0VXBjb21pbmdOb3RhcnlTZXJ2aWNlcygpXG4gICAgY29uc29sZS5sb2cobmV3UmVwbHkpXG4gICAgcmVzLmpzb24obmV3UmVwbHkpXG59KTtcblxucm91dGVyLnBvc3QoJy9yZXF1ZXN0Tm90YXJ5X1NlcnZpY2VfUmVxdWVzdHMvOmlkPycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgTm90YXJ5UmVxdWVzdC5yZXF1ZXN0Tm90YXJ5U2VydmljZXMocmVxLmJvZHkpXG4gICAgY29uc29sZS5sb2cobmV3UmVwbHkpXG4gICAgcmVzLmpzb24oJ2hlbGxvJylcblxufSk7XG5cbi8vIHJvdXRlci5nZXQoJy9nZXRQcmluY2lwbGVCaWxsaW5nSW5mb3JtYXRpb24vPzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuLy8gICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgTm90YXJ5UmVxdWVzdC5nZXRCaWxsaW5nSW5mb3JtYXRpb24oKVxuLy8gICAgIGNvbnN0IGNsaWVudFByb2ZpbGVSZXBseSA9IGF3YWl0IE9iamVjdC5lbnRyaWVzKG5ld1JlcGx5WzBdKS5zcGxpY2UoMiw1KVxuLy8gICAgIHJlcy5qc29uKGNsaWVudFByb2ZpbGVSZXBseSlcbiAgIFxuLy8gfSk7XG5cbi8vIHJvdXRlci5wdXQoJy91cGRhdGVQcmluY2lwbGVCaWxsaW5nSW5mb3JtYXRpb24vPzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKHJlcS5wYXJhbXMpXG4vLyAgICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBOb3RhcnlSZXF1ZXN0LnVwZGF0ZUJpbGxpbmdJbmZvcm1hdGlvbihyZXEuYm9keSxyZXEucGFyYW1zLmlkKVxuLy8gICAgIGNvbnNvbGUubG9nKG5ld1JlcGx5KVxuLy8gICAgIHJlcy5qc29uKCdoZWxsbycpXG4vLyB9KTtcblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgZGF0YWJhc2VfcXVlcnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Ib21lcGFnZV9RdWVyeSc7XG5pbXBvcnQgeyBNZXNzYWdlUmVzcG9uc2VGcm9tSG9tZVBhZ2UgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU01TL3NlbmRfc21zJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIucG9zdCgnL2NsaWVudF9tZXNzYWdlJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5jb25zdCBzZW5kVGV4dFJlcGx5ID0gYXdhaXQgTWVzc2FnZVJlc3BvbnNlRnJvbUhvbWVQYWdlKHJlcS5ib2R5LmZpcnN0X25hbWUsW3JlcS5ib2R5LnBob25lX251bWJlcl0gKVxuICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IGRhdGFiYXNlX3F1ZXJ5Lmluc2VydE1lc3NhZ2UocmVxLmJvZHkpXG4gIGNvbnNvbGUubG9nKHNlbmRUZXh0UmVwbHkpXG4gIHJlcy5qc29uKG5ld1JlcGx5KVxufSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBkYXRhYmFzZV9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5JztcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgKiBhcyBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IHsgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24sIGNoZWNrQWNjb3VudCB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4nXG5pbXBvcnQgeyBVbmRlcmxpbmVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuY29uc3QgY2hlY2tDcmVkZW50aWFscyA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCBjaGVja19EQl9hZ2FpbnN0X2VtYWlsOiBhbnlbXSA9IGF3YWl0IGNoZWNrQWNjb3VudChyZXEuYm9keS5lbWFpbClcbiAgaWYgKGNoZWNrX0RCX2FnYWluc3RfZW1haWwubGVuZ3RoID09PSAwKSB7XG4gICAgbmV4dCgpXG4gIH0gZWxzZSB7XG4gICAgcmVzLmpzb24oJ1RoaXMgdXNlcm5hbWUgaXMgdW5hdmFpbGFibGUnKVxuICB9XG59XG5cblxucm91dGVyLnBvc3QoJy9yZWdpc3RyYXRpb24nLCBjaGVja0NyZWRlbnRpYWxzLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0U3luYyhOdW1iZXIocHJvY2Vzcy5lbnYuU0FMVF9ST1VORCkpO1xuICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2hTeW5jKHJlcS5ib2R5LmNvbmZpcm1fcGFzc3dvcmQsIHNhbHQpO1xuICBkZWxldGUgcmVxLmJvZHkuY29uZmlybV9wYXNzd29yZFxuICB2YXIgdG9rZW4gPSBqd3Quc2lnbih7IHVzZXJfbmFtZTogcmVxLmJvZHkuZW1haWwsIGVtYWlsOiByZXEuYm9keS5lbWFpbCB9LCBwcm9jZXNzLmVudi5CRUFSRVJfUFJJVkFURSk7XG4gIHJlcS5ib2R5LnBhc3N3b3JkID0gaGFzaFxuICByZXEuYm9keS5iZWFyZXJfdG9rZW4gPSB0b2tlblxuICByZXEuYm9keS5jbGllbnRfYWNjZXNzX3BpbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSkgKyAxMTExMTFcbiAgY29uc3Qgc2VuZFRleHRSZXBseSA9IGF3YWl0IHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uKHJlcS5ib2R5KVxuICByZXMuanNvbihzZW5kVGV4dFJlcGx5KVxufSk7XG5cbnJvdXRlci5nZXQoJy90ZXN0aW5nX3JvdXRlJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5qc29uKCdoZWxsbycpXG59KVxuXG5cbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHtcbiAgZmlyc3RfbmFtZTogJ0tlbm5ldGggJyxcbiAgbGFzdF9uYW1lOiAnQ3VubmluZ2hhbScsXG4gIGJ1c2luZXNzX25hbWU6ICdLZW4nLFxuICBidXNpbmVzc19zaXplOiAnbWljcm8nLFxuICBwaG9uZV9udW1iZXI6ICc0MDQ3NDAwMDkzJyxcbiAgZW1haWw6ICc0MDQ3NDAwMDkzQGdtYWlsLmNvbScsXG4gIHBhc3N3b3JkOiAnYScsXG4gIGNvbmZpcm1fcGFzc3dvcmQ6ICdhJyxcbiAgdGVybXNfb2Zfc2VydmljZTogdHJ1ZSxcbiAgcHJpdmFjeV9wb2xpY3k6IHRydWVcbn0pKVxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cbmZ1bmN0aW9uIGluc2VydExvZ2luSW5mb3JtYXRpb25Gb3JDbGllbnQoYm9keTogYW55KSB7XG4gIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLicpO1xufVxuXG4iLCIvLyBpbXBvcnQgKiBhcyBBVVRIT1JJWkVORVQgZnJvbSAnYXV0aG9yaXplbmV0Jztcbi8vIGltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbi8vIGltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnIFxuLy8gZG90ZW52LmNvbmZpZygpXG5cbi8vIGxldCBBcGlDb250cmFjdHMgPSBBVVRIT1JJWkVORVQuQVBJQ29udHJhY3RzO1xuLy8gbGV0IEFwaUNvbnRyb2xsZXJzID0gQVVUSE9SSVpFTkVULkFQSUNvbnRyb2xsZXJzO1xuLy8gbGV0IENvbnN0YW50cyA9IEFVVEhPUklaRU5FVC5Db25zdGFudHNcblxuXG5cbi8vIFx0ZnVuY3Rpb24gZGViaXRCYW5rQWNjb3VudCgpIHtcbi8vIFx0XHR2YXIgbWVyY2hhbnRBdXRoZW50aWNhdGlvblR5cGUgPSBuZXcgQXBpQ29udHJhY3RzLk1lcmNoYW50QXV0aGVudGljYXRpb25UeXBlKCk7XG4vLyBcdG1lcmNoYW50QXV0aGVudGljYXRpb25UeXBlLnNldE5hbWUoU3RyaW5nKHByb2Nlc3MuZW52LkFVVEhPUklaRV9ORVRfQVBJX0xPR0lOX0lEKSk7XG4vLyBcdG1lcmNoYW50QXV0aGVudGljYXRpb25UeXBlLnNldFRyYW5zYWN0aW9uS2V5KFN0cmluZyhwcm9jZXNzLmVudi5BVVRIT1JJWkVfTkVUX1RSQU5TQUNUSU9OX0tFWSkpO1xuXG5cdFxuLy8gXHRcdHZhciBiYW5rQWNjb3VudFR5cGUgPSBuZXcgQXBpQ29udHJhY3RzLkJhbmtBY2NvdW50VHlwZSgpO1xuLy8gXHRcdGJhbmtBY2NvdW50VHlwZS5zZXRBY2NvdW50VHlwZShBcGlDb250cmFjdHMuQmFua0FjY291bnRUeXBlRW51bS5TQVZJTkdTKTtcbi8vIFx0XHRiYW5rQWNjb3VudFR5cGUuc2V0Um91dGluZ051bWJlcignMTIxMDQyODgyJyk7XG4vLyBcdFx0Ly9hZGRlZCBjb2RlXG4vLyBcdFx0dmFyIGJhbmtBY2NvdW50TnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5OTk5OSkgKyAxMDAwMDtcbi8vIFx0XHRiYW5rQWNjb3VudFR5cGUuc2V0QWNjb3VudE51bWJlcihiYW5rQWNjb3VudE51bS50b1N0cmluZygpKTtcbi8vIFx0XHRiYW5rQWNjb3VudFR5cGUuc2V0TmFtZU9uQWNjb3VudCgnSm9obiBEb2UnKTtcblx0XG4vLyBcdFx0dmFyIHBheW1lbnRUeXBlID0gbmV3IEFwaUNvbnRyYWN0cy5QYXltZW50VHlwZSgpO1xuLy8gXHRcdHBheW1lbnRUeXBlLnNldEJhbmtBY2NvdW50KGJhbmtBY2NvdW50VHlwZSk7XG5cdFxuLy8gXHRcdHZhciBvcmRlckRldGFpbHMgPSBuZXcgQXBpQ29udHJhY3RzLk9yZGVyVHlwZSgpO1xuLy8gXHRcdG9yZGVyRGV0YWlscy5zZXRJbnZvaWNlTnVtYmVyKCdJTlYtMTIzNDUnKTtcbi8vIFx0XHRvcmRlckRldGFpbHMuc2V0RGVzY3JpcHRpb24oJ1Byb2R1Y3QgRGVzY3JpcHRpb24nKTtcblx0XG4vLyBcdFx0dmFyIHRheCA9IG5ldyBBcGlDb250cmFjdHMuRXh0ZW5kZWRBbW91bnRUeXBlKCk7XG4vLyBcdFx0dGF4LnNldEFtb3VudCgnNC4yNicpO1xuLy8gXHRcdHRheC5zZXROYW1lKCdsZXZlbDIgdGF4IG5hbWUnKTtcbi8vIFx0XHR0YXguc2V0RGVzY3JpcHRpb24oJ2xldmVsMiB0YXgnKTtcblx0XG4vLyBcdFx0dmFyIGR1dHkgPSBuZXcgQXBpQ29udHJhY3RzLkV4dGVuZGVkQW1vdW50VHlwZSgpO1xuLy8gXHRcdGR1dHkuc2V0QW1vdW50KCc4LjU1Jyk7XG4vLyBcdFx0ZHV0eS5zZXROYW1lKCdkdXR5IG5hbWUnKTtcbi8vIFx0XHRkdXR5LnNldERlc2NyaXB0aW9uKCdkdXR5IGRlc2NyaXB0aW9uJyk7XG5cdFxuLy8gXHRcdHZhciBzaGlwcGluZyA9IG5ldyBBcGlDb250cmFjdHMuRXh0ZW5kZWRBbW91bnRUeXBlKCk7XG4vLyBcdFx0c2hpcHBpbmcuc2V0QW1vdW50KCc4LjU1Jyk7XG4vLyBcdFx0c2hpcHBpbmcuc2V0TmFtZSgnc2hpcHBpbmcgbmFtZScpO1xuLy8gXHRcdHNoaXBwaW5nLnNldERlc2NyaXB0aW9uKCdzaGlwcGluZyBkZXNjcmlwdGlvbicpO1xuXHRcbi8vIFx0XHQvLyB2YXIgYmlsbFRvID0gbmV3IEFwaUNvbnRyYWN0cy5DdXN0b21lckFkZHJlc3NUeXBlKCk7XG4vLyBcdFx0Ly8gYmlsbFRvLnNldEZpcnN0TmFtZSgnRWxsZW4nKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0TGFzdE5hbWUoJ0pvaG5zb24nKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0Q29tcGFueSgnU291dmVuaXJvcG9saXMnKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0QWRkcmVzcygnMTQgTWFpbiBTdHJlZXQnKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0Q2l0eSgnUGVjYW4gU3ByaW5ncycpO1xuLy8gXHRcdC8vIGJpbGxUby5zZXRTdGF0ZSgnVFgnKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0WmlwKCc0NDYyOCcpO1xuLy8gXHRcdC8vIGJpbGxUby5zZXRDb3VudHJ5KCdVU0EnKTtcblx0XG4vLyBcdFx0dmFyIHNoaXBUbyA9IG5ldyBBcGlDb250cmFjdHMuQ3VzdG9tZXJBZGRyZXNzVHlwZSgpO1xuLy8gXHRcdHNoaXBUby5zZXRGaXJzdE5hbWUoJ0NoaW5hJyk7XG4vLyBcdFx0c2hpcFRvLnNldExhc3ROYW1lKCdCYXlsZXMnKTtcbi8vIFx0XHRzaGlwVG8uc2V0Q29tcGFueSgnVGh5bWUgZm9yIFRlYScpO1xuLy8gXHRcdHNoaXBUby5zZXRBZGRyZXNzKCcxMiBNYWluIFN0cmVldCcpO1xuLy8gXHRcdHNoaXBUby5zZXRDaXR5KCdQZWNhbiBTcHJpbmdzJyk7XG4vLyBcdFx0c2hpcFRvLnNldFN0YXRlKCdUWCcpO1xuLy8gXHRcdHNoaXBUby5zZXRaaXAoJzQ0NjI4Jyk7XG4vLyBcdFx0c2hpcFRvLnNldENvdW50cnkoJ1VTQScpO1xuXHRcbi8vIFx0XHR2YXIgbGluZUl0ZW1faWQxID0gbmV3IEFwaUNvbnRyYWN0cy5MaW5lSXRlbVR5cGUoKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDEuc2V0SXRlbUlkKCcxJyk7XG4vLyBcdFx0bGluZUl0ZW1faWQxLnNldE5hbWUoJ3Zhc2UnKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDEuc2V0RGVzY3JpcHRpb24oJ2Nhbm5lcyBsb2dvJyk7XG4vLyBcdFx0bGluZUl0ZW1faWQxLnNldFF1YW50aXR5KCcxOCcpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMS5zZXRVbml0UHJpY2UoJzQ1LjAwJyk7XG5cdFxuLy8gXHRcdHZhciBsaW5lSXRlbV9pZDIgPSBuZXcgQXBpQ29udHJhY3RzLkxpbmVJdGVtVHlwZSgpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMi5zZXRJdGVtSWQoJzInKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDIuc2V0TmFtZSgndmFzZTInKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDIuc2V0RGVzY3JpcHRpb24oJ2Nhbm5lcyBsb2dvMicpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMi5zZXRRdWFudGl0eSgnMjgnKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDIuc2V0VW5pdFByaWNlKCcyNS4wMCcpO1xuXHRcbi8vIFx0XHR2YXIgbGluZUl0ZW1MaXN0OmFueSA9IFtdO1xuLy8gXHRcdGxpbmVJdGVtTGlzdC5wdXNoKGxpbmVJdGVtX2lkMSk7XG4vLyBcdFx0bGluZUl0ZW1MaXN0LnB1c2gobGluZUl0ZW1faWQyKTtcblx0XG4vLyBcdFx0dmFyIGxpbmVJdGVtcyA9IG5ldyBBcGlDb250cmFjdHMuQXJyYXlPZkxpbmVJdGVtKCk7XG4vLyBcdFx0bGluZUl0ZW1zLnNldExpbmVJdGVtKGxpbmVJdGVtTGlzdCk7XG5cdFxuLy8gXHRcdHZhciB0cmFuc2FjdGlvblJlcXVlc3RUeXBlID0gbmV3IEFwaUNvbnRyYWN0cy5UcmFuc2FjdGlvblJlcXVlc3RUeXBlKCk7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRUcmFuc2FjdGlvblR5cGUoQXBpQ29udHJhY3RzLlRyYW5zYWN0aW9uVHlwZUVudW0uQVVUSENBUFRVUkVUUkFOU0FDVElPTik7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRQYXltZW50KHBheW1lbnRUeXBlKTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldEFtb3VudCgxOS4wMCk7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRMaW5lSXRlbXMobGluZUl0ZW1zKTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldE9yZGVyKG9yZGVyRGV0YWlscyk7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRUYXgodGF4KTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldER1dHkoZHV0eSk7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRTaGlwcGluZyhzaGlwcGluZyk7XG4vLyBcdFx0Ly8gdHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRCaWxsVG8oYmlsbFRvKTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldFNoaXBUbyhzaGlwVG8pO1xuXHRcbi8vIFx0XHR2YXIgY3JlYXRlUmVxdWVzdCA9IG5ldyBBcGlDb250cmFjdHMuQ3JlYXRlVHJhbnNhY3Rpb25SZXF1ZXN0KCk7XG4vLyBcdFx0Y3JlYXRlUmVxdWVzdC5zZXRSZWZJZCgnMTIzNDU2Jyk7XG4vLyBcdFx0Y3JlYXRlUmVxdWVzdC5zZXRNZXJjaGFudEF1dGhlbnRpY2F0aW9uKG1lcmNoYW50QXV0aGVudGljYXRpb25UeXBlKTtcbi8vIFx0XHRjcmVhdGVSZXF1ZXN0LnNldFRyYW5zYWN0aW9uUmVxdWVzdCh0cmFuc2FjdGlvblJlcXVlc3RUeXBlKTtcblx0XG4vLyBcdFx0Ly9wcmV0dHkgcHJpbnQgcmVxdWVzdFxuLy8gXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNyZWF0ZVJlcXVlc3QuZ2V0SlNPTigpLCBudWxsLCAyKSk7XG5cdFx0XHRcbi8vIFx0XHR2YXIgY3RybCA9IG5ldyBBcGlDb250cm9sbGVycy5DcmVhdGVUcmFuc2FjdGlvbkNvbnRyb2xsZXIoY3JlYXRlUmVxdWVzdC5nZXRKU09OKCkpO1xuXHRcbi8vIFx0XHRjdHJsLmV4ZWN1dGUoZnVuY3Rpb24oKXtcblx0XG4vLyBcdFx0XHR2YXIgYXBpUmVzcG9uc2UgPSBjdHJsLmdldFJlc3BvbnNlKCk7XG5cdFxuLy8gXHRcdFx0dmFyIHJlc3BvbnNlID0gbmV3IEFwaUNvbnRyYWN0cy5DcmVhdGVUcmFuc2FjdGlvblJlc3BvbnNlKGFwaVJlc3BvbnNlKTtcblx0XG4vLyBcdFx0XHQvL3ByZXR0eSBwcmludCByZXNwb25zZVxuLy8gXHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UsIG51bGwsIDIpKTtcblx0XG4vLyBcdFx0XHRpZihyZXNwb25zZSAhPSBudWxsKXtcbi8vIFx0XHRcdFx0aWYocmVzcG9uc2UuZ2V0TWVzc2FnZXMoKS5nZXRSZXN1bHRDb2RlKCkgPT0gQXBpQ29udHJhY3RzLk1lc3NhZ2VUeXBlRW51bS5PSyl7XG4vLyBcdFx0XHRcdFx0aWYocmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldE1lc3NhZ2VzKCkgIT0gbnVsbCl7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgdHJhbnNhY3Rpb24gd2l0aCBUcmFuc2FjdGlvbiBJRDogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRUcmFuc0lkKCkpO1xuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1Jlc3BvbnNlIENvZGU6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0UmVzcG9uc2VDb2RlKCkpO1xuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ01lc3NhZ2UgQ29kZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRNZXNzYWdlcygpLmdldE1lc3NhZ2UoKVswXS5nZXRDb2RlKCkpO1xuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Rlc2NyaXB0aW9uOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldE1lc3NhZ2VzKCkuZ2V0TWVzc2FnZSgpWzBdLmdldERlc2NyaXB0aW9uKCkpO1xuLy8gXHRcdFx0XHRcdH1cbi8vIFx0XHRcdFx0XHRlbHNlIHtcbi8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGYWlsZWQgVHJhbnNhY3Rpb24uJyk7XG4vLyBcdFx0XHRcdFx0XHRpZihyZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkgIT0gbnVsbCl7XG4vLyBcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpLmdldEVycm9yKClbMF0uZ2V0RXJyb3JDb2RlKCkpO1xuLy8gXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgbWVzc2FnZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKS5nZXRFcnJvcigpWzBdLmdldEVycm9yVGV4dCgpKTtcbi8vIFx0XHRcdFx0XHRcdH1cbi8vIFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdFx0ZWxzZSB7XG4vLyBcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ZhaWxlZCBUcmFuc2FjdGlvbi4gJyk7XG4vLyBcdFx0XHRcdFx0aWYocmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpICE9IG51bGwgJiYgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpICE9IG51bGwpe1xuXHRcdFx0XHRcdFxuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIENvZGU6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkuZ2V0RXJyb3IoKVswXS5nZXRFcnJvckNvZGUoKSk7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgbWVzc2FnZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKS5nZXRFcnJvcigpWzBdLmdldEVycm9yVGV4dCgpKTtcbi8vIFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdFx0ZWxzZSB7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgQ29kZTogJyArIHJlc3BvbnNlLmdldE1lc3NhZ2VzKCkuZ2V0TWVzc2FnZSgpWzBdLmdldENvZGUoKSk7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgbWVzc2FnZTogJyArIHJlc3BvbnNlLmdldE1lc3NhZ2VzKCkuZ2V0TWVzc2FnZSgpWzBdLmdldFRleHQoKSk7XG4vLyBcdFx0XHRcdFx0fVxuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHRlbHNlIHtcbi8vIFx0XHRcdFx0Y29uc29sZS5sb2coJ051bGwgUmVzcG9uc2UuJyk7XG4vLyBcdFx0XHR9XG5cdFxuLy8gXHRcdH0pO1xuLy8gXHR9XG5cdFxuLy8gXHRpZiAocmVxdWlyZS5tYWluID09PSBtb2R1bGUpIHtcbi8vIFx0XHRkZWJpdEJhbmtBY2NvdW50KGZ1bmN0aW9uKCl7XG4vLyBcdFx0XHRjb25zb2xlLmxvZygnZGViaXRCYW5rQWNjb3VudCBjYWxsIGNvbXBsZXRlLicpO1xuLy8gXHRcdH0pO1xuLy8gXHR9XG4vLyBcdGRlYml0QmFua0FjY291bnQoKVxuLy8gXHRtb2R1bGUuZXhwb3J0cy5kZWJpdEJhbmtBY2NvdW50ID0gZGViaXRCYW5rQWNjb3VudDtcblxuXG5cblxuXG5cbiIsIlxuaW1wb3J0ICogYXMgVHdpbGlvIGZyb20gJ3R3aWxpbydcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnXG5kb3RlbnYuY29uZmlnKClcblxuXG5cbi8vIFR3aWxpbyBDb250cm9sIGFuZCBBY2Nlc3MgQ3JlZGVudGlhbCBcbmNvbnN0IGFjY291bnRTaWQgPSBwcm9jZXNzLmVudi5UV0lMSU9fU0lEO1xuY29uc3QgYXV0aFRva2VuID0gcHJvY2Vzcy5lbnYuVFdJTElPX0FVVEhLRVk7XG5jb25zdCBzbXMgPSBUd2lsaW8oYWNjb3VudFNpZCwgYXV0aFRva2VuKVxuXG5leHBvcnQgY29uc3QgeyBNZXNzYWdpbmdSZXNwb25zZSB9ID0gVHdpbGlvLnR3aW1sIFxuXG5leHBvcnQgZnVuY3Rpb24gTWVzc2FnZVJlc3BvbnNlRnJvbUhvbWVQYWdlKG5hbWU6c3RyaW5nLHRvPzpzdHJpbmdbXXwgYW55KSB7XG4gICAgXG4gICAgdG8ubWFwKGFzeW5jIChpKSA9PiB7XG4gICAgICAgIGF3YWl0IHNtcy5tZXNzYWdlcy5jcmVhdGUoe1xuICAgICAgICAgICAgYm9keTogYERlYXIgJHtuYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCl9LCB0aGFuayB5b3UgZm9yIHJlYWNoaW5nIG91dCB0byDwn4yOIEtjbSBJbmMuIFdlIHRha2UgaW1tZW5zZSBwcmlkZSBpbiBvdXIgcGFydG5lcnNoaXAgd2l0aCB5b3UgYW5kIGFyZSBkZWRpY2F0ZWQgdG8gZGVsaXZlcmluZyB1bnBhcmFsbGVsZWQgc2VydmljZS4gUmVzdCBhc3N1cmVkIHRoYXQgb25lIG9mIG91ciByZXByZXNlbnRhdGl2ZXMgd2lsbCBiZSBpbiB0b3VjaCB3aXRoIHlvdSBwcm9tcHRseSB0byBhZGRyZXNzIHlvdXIgaW5xdWlyeS5gLFxuICAgICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuVFdJTElPX1BIT05FLFxuICAgICAgICAgICAgc2hvcnRlblVybHM6IHRydWUsXG4gICAgICAgICAgICB0bzogaVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBzZW5kUmVwbHkgPSAoYm9keSA9IFwiVGVzdGluZyB0aGUgYXBpXCIsIHRvPzogYW55KSA9PiB7XG4gICAgX3Bob25lbnVtYmVyLm1hcChhc3luYyAoaSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdfTWVzc2FnZSA9IGF3YWl0IHNtcy5tZXNzYWdlcy5jcmVhdGUoe1xuICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgIGZyb206IHByb2Nlc3MuZW52LlRXSUxJT19QSE9ORT8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvOiBpXG4gICAgICAgIH0pXG4gICAgfSlcblxufVxuXG5cblxuIiwiaW1wb3J0ICogYXMgbXlzcWwgZnJvbSAnbXlzcWwyJztcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5cblxuXG5cblxuY29uc3QgbXlzcWxBY2Nlc3MgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgICBwb3J0OjMzMDYsXG4gICAgdXNlcjpwcm9jZXNzLmVudi5NWVNRTF9VU0VSLFxuICAgIHBhc3N3b3JkOnByb2Nlc3MuZW52Lk1ZU1FMX1BBU1NXT1JELFxuICAgIGRhdGFiYXNlOnByb2Nlc3MuZW52LkRBVEFCQVNFXG59KVxuXG5leHBvcnQgY29uc3QgUXVlcnkgPSAocXVlcnk6c3RyaW5nLHZhbHVlcz86QXJyYXk8c3RyaW5nfG51bWJlcj4pPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFycmF5PGFueT4+KChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgbXlzcWxBY2Nlc3MucXVlcnkocXVlcnksdmFsdWVzLChlcnIscmVzdWx0czphbnkpID0+e1xuICAgICAgICAgICAgaWYoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3Qgdmlld01lc3NhZ2VzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ3NlbGVjdCAqIGZyb20gQ29tbXVuaWNhdGlvbi5NZXNzYWdlcycpO1xuY29uc3QgaW5zZXJ0TWVzc2FnZT0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ29tbXVuaWNhdGlvbi5NZXNzYWdlcyBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB2aWV3TWVzc2FnZXMsXG4gICAgaW5zZXJ0TWVzc2FnZVxuXG5cbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG4gZXhwb3J0IGNvbnN0IHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgU0VUID8nLCB2YWx1ZXMpO1xuIGV4cG9ydCBjb25zdCBjaGVja0FjY291bnQgPSBhc3luYyAoZW1haWw6YW55KSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5Mb2dpbl9DcmVkZW50aWFscyBXSEVSRSBlbWFpbCA9ID8nLGVtYWlsKVxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgZ2V0QmlsbGluZ0luZm9ybWF0aW9uID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2xpZW50cy5QcmluY2lwbGVfQmlsbGluZ19JbmZvcm1hdGlvbicpO1xuY29uc3QgaW5zZXJ0QmlsbGluZ0luZm9ybWF0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ2xpZW50cy5QcmluY2lwbGVfQmlsbGluZ19JbmZvcm1hdGlvbiBTRVQgPycsIHZhbHVlcyk7XG5jb25zdCB1cGRhdGVCaWxsaW5nSW5mb3JtYXRpb24gPSBhc3luYyAoaW5mbyxpZCk9PlF1ZXJ5KCdVUERBVEUgQ2xpZW50cy5QcmluY2lwbGVfQmlsbGluZ19JbmZvcm1hdGlvbiBTRVQgPyBXSEVSRSBhZG1pbl9pZCA9ID8nLFtpbmZvLGlkXSlcblxuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbi8vIGNvbnN0IGRlbGV0ZU1lc3NhZ2VzID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsIFtpZF0pO1xuLy8gY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gS0NNX0lOQy5jbGllbnRSZWdpc3RyYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuLy8gY29uc3QgaW5zZXJ0SW5zdGl0dXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5pbnN0aXR1dGlvbiBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6IGFueSwgaWQ6IGFueSkgPT4gUXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LCBpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuZ2V0QmlsbGluZ0luZm9ybWF0aW9uLFxuaW5zZXJ0QmlsbGluZ0luZm9ybWF0aW9uLFxudXBkYXRlQmlsbGluZ0luZm9ybWF0aW9uXG59IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgZ2V0Q2xpZW50SW5mb3JtYXRpb24gPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDbGllbnRzLlBlcnNvbmFsX0luZm9ybWF0aW9uJyk7XG5jb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBDbGllbnRzLlBlcnNvbmFsX0luZm9ybWF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbmNvbnN0IHVwZGF0ZVBSSU5DSVBMRSA9IGFzeW5jIChpbmZvLGlkKT0+UXVlcnkoJ1VQREFURSBDbGllbnRzLlBlcnNvbmFsX0luZm9ybWF0aW9uIFNFVCA/IFdIRVJFIGlkID0gPycsW2luZm8saWRdKVxuXG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuLy8gY29uc3QgZGVsZXRlTWVzc2FnZXMgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIGNvbnRhY3QgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG4vLyBjb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAoLi4udmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBLQ01fSU5DLmNsaWVudFJlZ2lzdHJhdGlvbiBTRVQgPycsIHZhbHVlcyk7XG4vLyBjb25zdCBpbnNlcnRJbnN0aXR1dGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmluc3RpdHV0aW9uIFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3QgdXBkYXRlTWVzc2FnZXMgPSBhc3luYyAobmV3Q29udGVudDogYW55LCBpZDogYW55KSA9PiBRdWVyeSgnVVBEQVRFIGNvbnRhY3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW25ld0NvbnRlbnQsIGlkXSlcbi8vIGNvbnN0IGFsbFVzZXJzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gVXNlcnMnKTtcbi8vIGNvbnN0IGluc2VydFVzZXJzID0gYXN5bmModXNlciA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRzIFNFVCA/JyAsW3VzZXJdKTtcbi8vIGNvbnN0IGluc2VydFBoeXNpY2FsID0gYXN5bmMocGh5c2ljYWwgOmFueSxjbGllbnRpZDpudW1iZXIgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudF9saWZlc3R5bGUgU0VUID8nICxbcGh5c2ljYWxdKTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0Q2xpZW50SW5mb3JtYXRpb24sXG4gICAgaW5zZXJ0Q0xJRU5ULFxuICAgIHVwZGF0ZVBSSU5DSVBMRSxcbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCBnZXRVcGNvbWluZ05vdGFyeVNlcnZpY2VzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2xpZW50cy5QcmluY2lwbGVfTm90YXJ5X1JlcXVlc3QgV0hFUkUgdXNlcklkID0gMyBBTkQgbm90YXJ5X3JlcXVlc3RfdHlwZSA9IFwiQ2VydGlmeSBjb3BpZXNcIicpO1xuY29uc3QgcmVxdWVzdE5vdGFyeVNlcnZpY2VzID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ2xpZW50cy5QcmluY2lwbGVfTm90YXJ5X1JlcXVlc3QgU0VUID8nLCB2YWx1ZXMpO1xuY29uc3QgdXBkYXRlTm90YXJ5U2VydmljZVJlcXVlc3QgPSBhc3luYyAoaW5mbyxpZCk9PlF1ZXJ5KCdVUERBVEUgQ2xpZW50cy5QcmluY2lwbGVfTm90YXJ5X1JlcXVlc3QgU0VUID8gV0hFUkUgaWQgPSA/JyxbaW5mbyxpZF0pXG5jb25zdCBkZWxldGVOb3RhcnlTZXJ2aWNlUmVxdWVzdCA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gQ2xpZW50cy5QcmluY2lwbGVfTm90YXJ5X1JlcXVlc3QgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldFVwY29taW5nTm90YXJ5U2VydmljZXMsXG4gICAgcmVxdWVzdE5vdGFyeVNlcnZpY2VzLFxuICAgIHVwZGF0ZU5vdGFyeVNlcnZpY2VSZXF1ZXN0LFxuICAgIGRlbGV0ZU5vdGFyeVNlcnZpY2VSZXF1ZXN0XG59IiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBIb21lcGFnZVNlcnZlciBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvSG9tZXBhZ2VfUXVlcnknO1xuaW1wb3J0IENsaWVudFBvcnRhbCBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscyc7XG5pbXBvcnQgeyBzZW5kTWVzc2FnZSwgTWVzc2FnaW5nUmVzcG9uc2UsIHNlbmRSZXBseSB9IGZyb20gJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG5pbXBvcnQgJy4vUEFZTUVOVFMvYXV0aG9yaXplX2NhcmQnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9Ib21lcGFnZS9jb250YWN0J1xuaW1wb3J0IGNsaWVudCBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnXG5pbXBvcnQgYmlsbGluZyBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRCaWxsaW5nJztcbmltcG9ydCBub3RhcnkgZnJvbSAnLi9DbGllbnRQb3J0YWwvQ2xpZW50U2VydmljZVJlcXVlc3QnO1xuaW1wb3J0IHJlZ2lzdHJhdGlvbiBmcm9tICcuL0hvbWVwYWdlL3JlZ2lzdHJhdGlvbidcblxuXG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ2NvbXBsaWVfZnJvbnRlbmQnKSlcbmFwcC51c2UoY29ycygpKVxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC5zZXQoJ3RydXN0IHByb3h5JywgdHJ1ZSlcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcblxuXG5jb25zdCBuZXdVc2UgPSBhcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnKicpXG4gIG5leHQoKVxufSlcblxuYXBwLnVzZSgnL21lc3NhZ2UnLGNvbnRhY3QpXG5hcHAudXNlKCcvY2xpZW50X3BvcnRhbCcsY2xpZW50KVxuYXBwLnVzZSgnL2NsaWVudF9wb3J0YWwnLGJpbGxpbmcpXG5cbmFwcC51c2UoJy9jbGllbnRfcG9ydGFsX3NlcnZpY2VzJyxub3RhcnkpXG5hcHAudXNlKCcvY2xpZW50X3JlZ2lzdHJhdGlvbicscmVnaXN0cmF0aW9uKVxuXG5cblxuYXBwLmdldCgnL3Rlc3QnLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLmpzb24oJ2EnKVxufSlcblxuYXBwLmdldCgnL2RhdGFiYXNlJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgQ2xpZW50UG9ydGFsLmdldENsaWVudEluZm9ybWF0aW9uKClcbiAgcmVzLmpzb24obmV3UmVwbHkpXG4gIGNvbnNvbGUubG9nKG5ld1JlcGx5KVxuXG59KVxuXG5cbmFwcC5wb3N0KCcvdHdpbGlvJywgKHJlcSwgcmVzKSA9PiB7XG4gIC8vIHNlbmRNZXNzYWdlKCk7XG4gIHJlcy5qc29uKFwib2tcIilcbn0pXG5cbmFwcC5wb3N0KCcvc21zJywgIChyZXEsIHJlcykgPT4ge1xuXG4gIGNvbnN0IHR3aW1sID0gbmV3IE1lc3NhZ2luZ1Jlc3BvbnNlKCk7XG5cbiAgdHdpbWwubWVzc2FnZSgnVGhlIFJvYm90cyBhcmUgY29taW5nISBIZWFkIGZvciB0aGUgaGlsbHMhJyk7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5LkJvZHkpXG5cbiAgcmVzLmhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3htbCcpXG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHR3aW1sLnRvU3RyaW5nKCkpXG59XG5cblxuXG4gIC8vIHJlcy50eXBlKCd0ZXh0L3htbCcpLnNlbmQodHdpbWwudG9TdHJpbmcoKSk7XG5cbik7XG5cblxuXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MFxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtQT1JUfS4uLmApXG59KVxuXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXlzcWwyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR3aWxpb1wiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvQkFDS0VORC9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==