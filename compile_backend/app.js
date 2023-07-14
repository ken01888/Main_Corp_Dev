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
            case 0: return [4 /*yield*/, ClientBillingDetails_1.default.updateBillingInformation(req.body, req.params.id)];
            case 1:
                newReply = _a.sent();
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
router.get('/getPrincipleInformation', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // console.log(req.user)
        // const newReply = await client_admin_query.getClientInformation(req.params)
        // const clientProfileReply = await Object.entries(req.user[0]).splice(1,9)
        res.json('req.user.id');
        return [2 /*return*/];
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
            case 0: return [4 /*yield*/, Notary_Services_1.default.requestNotaryServices(req.body)];
            case 1:
                newReply = _a.sent();
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
exports["default"] = router;


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
var getClientInformation = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Credentials.Login_Credentials where id = ?', [id])];
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

/***/ "./src/BACKEND/Security/SigninVerification.ts":
/*!****************************************************!*\
  !*** ./src/BACKEND/Security/SigninVerification.ts ***!
  \****************************************************/
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
__webpack_require__(/*! passport-local */ "passport-local");
var passport = __webpack_require__(/*! passport */ "passport");
var LocalStrategy = __webpack_require__(/*! passport-local */ "passport-local");
var index_1 = __webpack_require__(/*! ./../ProgramControlFlow/SQL/Query.ts/Login/index */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Login/index.ts");
var bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
var router = express.Router();
var strategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
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
});
passport.use(strategy);
passport.serializeUser(function (user, done) {
    console.log("here at serialize");
    process.nextTick(function () {
        return done(null, {
            id: user.id,
            username: user.first_name + user.last_name,
        });
    });
});
passport.deserializeUser(function (user, done) {
    console.log("here at deserialize");
    process.nextTick(function () {
        return done(null, user);
    });
});
router.post('/login_verification', passport.authenticate('local'), function (req, res) {
    if (req.user) {
        res.json(req.user);
    }
    else if (!req.user) {
        console.log('unauthorized');
    }
});
exports["default"] = router;


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

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport-local");

/***/ }),

/***/ "twilio":
/*!*************************!*\
  !*** external "twilio" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("twilio");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./src/BACKEND/index.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var express = __webpack_require__(/*! express */ "express");
var cors = __webpack_require__(/*! cors */ "cors");
var path = __webpack_require__(/*! path */ "path");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
__webpack_require__(/*! ./PAYMENTS/authorize_card */ "./src/BACKEND/PAYMENTS/authorize_card.ts");
var contact_1 = __webpack_require__(/*! ./Homepage/contact */ "./src/BACKEND/Homepage/contact.ts");
var ClientPersonalDetails_1 = __webpack_require__(/*! ./ClientPortal/ClientPersonalDetails */ "./src/BACKEND/ClientPortal/ClientPersonalDetails.ts");
var ClientBilling_1 = __webpack_require__(/*! ./ClientPortal/ClientBilling */ "./src/BACKEND/ClientPortal/ClientBilling.ts");
var ClientServiceRequest_1 = __webpack_require__(/*! ./ClientPortal/ClientServiceRequest */ "./src/BACKEND/ClientPortal/ClientServiceRequest.ts");
var registration_1 = __webpack_require__(/*! ./Homepage/registration */ "./src/BACKEND/Homepage/registration.ts");
var SigninVerification_1 = __webpack_require__(/*! ./Security/SigninVerification */ "./src/BACKEND/Security/SigninVerification.ts");
var app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true);
var newUse = app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false }
// }));
// app.use(passport.initialize());
// app.use(passport.session());
app.use('/', function (req, res, next) { console.log(req.user); next(); }, express.static(path.join('public')));
app.get('/testing_sessions', function (req, res) {
    console.log(req.user);
    res.json(req.user);
});
app.use('/message', contact_1.default);
app.use('/client_portal', ClientPersonalDetails_1.default);
app.use('/client_portal', ClientBilling_1.default);
app.use('/client_portal_services', ClientServiceRequest_1.default);
app.use('/client_registration', registration_1.default);
app.use(SigninVerification_1.default);
// const PORT = process.env.PORT || 8080
app.listen(8080, function () {
    console.log("Server listening on port ".concat(8080, "..."));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRVAsa0NBQWtDO0FBQ2xDLCtCQUErQjtBQUUvQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxVQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUksRUFBRSxHQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFFaEcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxVQUFDLEdBQU8sRUFBQyxHQUFHO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUosR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsaUJBQU8sQ0FBQztBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLCtCQUFNLENBQUM7QUFDaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQyx1QkFBTyxDQUFDO0FBRWpDLEdBQUcsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUMsOEJBQU0sQ0FBQztBQUN6QyxHQUFHLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFDLHNCQUFZLENBQUM7QUFJNUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyw0QkFBUSxDQUFDO0FBS2pCLHdDQUF3QztBQUN4QyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQTRCLElBQUksUUFBSyxDQUFDO0FBQ3BELENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9DbGllbnRCaWxsaW5nLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL0NsaWVudFNlcnZpY2VSZXF1ZXN0LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL0hvbWVwYWdlL2NvbnRhY3QudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvSG9tZXBhZ2UvcmVnaXN0cmF0aW9uLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1BBWU1FTlRTL2F1dGhvcml6ZV9jYXJkLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TTVMvc2VuZF9zbXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9Db25lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Ib21lcGFnZV9RdWVyeS50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luL2luZGV4LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudEJpbGxpbmdEZXRhaWxzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9Ob3RhcnlfU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvU2VjdXJpdHkvU2lnbmluVmVyaWZpY2F0aW9uLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImJjcnlwdFwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudi9jb25maWdcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwibXlzcWwyXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnRcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1sb2NhbFwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcInR3aWxpb1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgY2xpZW50X2JpbGxpbmdfcXVlcnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50QmlsbGluZ0RldGFpbHMnO1xuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIuZ2V0KCcvZ2V0UHJpbmNpcGxlQmlsbGluZ0luZm9ybWF0aW9uLzppZD8nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IGNsaWVudF9iaWxsaW5nX3F1ZXJ5LmdldEJpbGxpbmdJbmZvcm1hdGlvbigpXG4gICAgY29uc3QgY2xpZW50UHJvZmlsZVJlcGx5ID0gYXdhaXQgT2JqZWN0LmVudHJpZXMobmV3UmVwbHlbMF0pLnNwbGljZSgyLDUpXG4gICAgcmVzLmpzb24oY2xpZW50UHJvZmlsZVJlcGx5KVxuICAgXG59KTtcblxucm91dGVyLnB1dCgnL3VwZGF0ZVByaW5jaXBsZUJpbGxpbmdJbmZvcm1hdGlvbi86aWQ/JywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBjbGllbnRfYmlsbGluZ19xdWVyeS51cGRhdGVCaWxsaW5nSW5mb3JtYXRpb24ocmVxLmJvZHkscmVxLnBhcmFtcy5pZClcbiAgICByZXMuanNvbignaGVsbG8nKVxufSk7XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBjbGllbnRfYWRtaW5fcXVlcnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzJztcblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLmdldCgnL2dldFByaW5jaXBsZUluZm9ybWF0aW9uJywgYXN5bmMgKHJlcTphbnksIHJlcykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHJlcS51c2VyKVxuICAgIC8vIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgY2xpZW50X2FkbWluX3F1ZXJ5LmdldENsaWVudEluZm9ybWF0aW9uKHJlcS5wYXJhbXMpXG4gICAgLy8gY29uc3QgY2xpZW50UHJvZmlsZVJlcGx5ID0gYXdhaXQgT2JqZWN0LmVudHJpZXMocmVxLnVzZXJbMF0pLnNwbGljZSgxLDkpXG4gICAgcmVzLmpzb24oJ3JlcS51c2VyLmlkJylcbn0pO1xuXG5yb3V0ZXIucHV0KCcvdXBkYXRlQ2xpZW50aW5mb3JtYXRpb24vPzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgY2xpZW50X2FkbWluX3F1ZXJ5LnVwZGF0ZVBSSU5DSVBMRShyZXEuYm9keSxyZXEucGFyYW1zLmlkKVxuICAgIHJlcy5qc29uKCdoZWxsbycpXG59KTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBOb3RhcnlSZXF1ZXN0IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL05vdGFyeV9TZXJ2aWNlcyc7XG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbnJvdXRlci5nZXQoJy9nZXROb3RhcnlfU2VydmljZV9SZXF1ZXN0cy86aWQ/JywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBOb3RhcnlSZXF1ZXN0LmdldFVwY29taW5nTm90YXJ5U2VydmljZXMoKVxuICAgIGNvbnNvbGUubG9nKG5ld1JlcGx5KVxuICAgIHJlcy5qc29uKG5ld1JlcGx5KVxufSk7XG5cbnJvdXRlci5wb3N0KCcvcmVxdWVzdE5vdGFyeV9TZXJ2aWNlX1JlcXVlc3RzLzppZD8nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IE5vdGFyeVJlcXVlc3QucmVxdWVzdE5vdGFyeVNlcnZpY2VzKHJlcS5ib2R5KVxuICAgIHJlcy5qc29uKCdoZWxsbycpXG5cbn0pO1xuXG4vLyByb3V0ZXIuZ2V0KCcvZ2V0UHJpbmNpcGxlQmlsbGluZ0luZm9ybWF0aW9uLz86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbi8vICAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IE5vdGFyeVJlcXVlc3QuZ2V0QmlsbGluZ0luZm9ybWF0aW9uKClcbi8vICAgICBjb25zdCBjbGllbnRQcm9maWxlUmVwbHkgPSBhd2FpdCBPYmplY3QuZW50cmllcyhuZXdSZXBseVswXSkuc3BsaWNlKDIsNSlcbi8vICAgICByZXMuanNvbihjbGllbnRQcm9maWxlUmVwbHkpXG4gICBcbi8vIH0pO1xuXG4vLyByb3V0ZXIucHV0KCcvdXBkYXRlUHJpbmNpcGxlQmlsbGluZ0luZm9ybWF0aW9uLz86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhyZXEucGFyYW1zKVxuLy8gICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgTm90YXJ5UmVxdWVzdC51cGRhdGVCaWxsaW5nSW5mb3JtYXRpb24ocmVxLmJvZHkscmVxLnBhcmFtcy5pZClcbi8vICAgICBjb25zb2xlLmxvZyhuZXdSZXBseSlcbi8vICAgICByZXMuanNvbignaGVsbG8nKVxuLy8gfSk7XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGRhdGFiYXNlX3F1ZXJ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvSG9tZXBhZ2VfUXVlcnknO1xuaW1wb3J0IHsgTWVzc2FnZVJlc3BvbnNlRnJvbUhvbWVQYWdlIH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLnBvc3QoJy9jbGllbnRfbWVzc2FnZScsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuY29uc3Qgc2VuZFRleHRSZXBseSA9IGF3YWl0IE1lc3NhZ2VSZXNwb25zZUZyb21Ib21lUGFnZShyZXEuYm9keS5maXJzdF9uYW1lLFtyZXEuYm9keS5waG9uZV9udW1iZXJdIClcbiAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBkYXRhYmFzZV9xdWVyeS5pbnNlcnRNZXNzYWdlKHJlcS5ib2R5KVxuICBjb25zb2xlLmxvZyhzZW5kVGV4dFJlcGx5KVxuICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgZGF0YWJhc2VfcXVlcnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Ib21lcGFnZV9RdWVyeSc7XG5pbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuaW1wb3J0ICogYXMgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCB7IHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uLCBjaGVja0FjY291bnQgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luJ1xuaW1wb3J0IHsgVW5kZXJsaW5lT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbmNvbnN0IGNoZWNrQ3JlZGVudGlhbHMgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgY2hlY2tfREJfYWdhaW5zdF9lbWFpbDogYW55W10gPSBhd2FpdCBjaGVja0FjY291bnQocmVxLmJvZHkuZW1haWwpXG4gIGlmIChjaGVja19EQl9hZ2FpbnN0X2VtYWlsLmxlbmd0aCA9PT0gMCkge1xuICAgIG5leHQoKVxuICB9IGVsc2Uge1xuICAgIHJlcy5qc29uKCdUaGlzIHVzZXJuYW1lIGlzIHVuYXZhaWxhYmxlJylcbiAgfVxufVxuXG5cbnJvdXRlci5wb3N0KCcvcmVnaXN0cmF0aW9uJywgY2hlY2tDcmVkZW50aWFscywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdFN5bmMoTnVtYmVyKHByb2Nlc3MuZW52LlNBTFRfUk9VTkQpKTtcbiAgY29uc3QgaGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoU3luYyhyZXEuYm9keS5jb25maXJtX3Bhc3N3b3JkLCBzYWx0KTtcbiAgZGVsZXRlIHJlcS5ib2R5LmNvbmZpcm1fcGFzc3dvcmRcbiAgdmFyIHRva2VuID0gand0LnNpZ24oeyB1c2VyX25hbWU6IHJlcS5ib2R5LmVtYWlsLCBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSwgcHJvY2Vzcy5lbnYuQkVBUkVSX1BSSVZBVEUpO1xuICByZXEuYm9keS5wYXNzd29yZCA9IGhhc2hcbiAgcmVxLmJvZHkuYmVhcmVyX3Rva2VuID0gdG9rZW5cbiAgcmVxLmJvZHkuY2xpZW50X2FjY2Vzc19waW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpICsgMTExMTExXG4gIGNvbnN0IHNlbmRUZXh0UmVwbHkgPSBhd2FpdCByZWdpc3RyYXRpb25JbmZvcm1hdGlvbihyZXEuYm9keSlcbiAgcmVzLmpzb24oc2VuZFRleHRSZXBseSlcbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvdGVzdGluZ19yb3V0ZScsIChyZXEsIHJlcykgPT4ge1xuICByZXMuanNvbignaGVsbG8nKVxufSlcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cbiIsIi8vIGltcG9ydCAqIGFzIEFVVEhPUklaRU5FVCBmcm9tICdhdXRob3JpemVuZXQnO1xuLy8gaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuLy8gaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudicgXG4vLyBkb3RlbnYuY29uZmlnKClcblxuLy8gbGV0IEFwaUNvbnRyYWN0cyA9IEFVVEhPUklaRU5FVC5BUElDb250cmFjdHM7XG4vLyBsZXQgQXBpQ29udHJvbGxlcnMgPSBBVVRIT1JJWkVORVQuQVBJQ29udHJvbGxlcnM7XG4vLyBsZXQgQ29uc3RhbnRzID0gQVVUSE9SSVpFTkVULkNvbnN0YW50c1xuXG5cblxuLy8gXHRmdW5jdGlvbiBkZWJpdEJhbmtBY2NvdW50KCkge1xuLy8gXHRcdHZhciBtZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZSA9IG5ldyBBcGlDb250cmFjdHMuTWVyY2hhbnRBdXRoZW50aWNhdGlvblR5cGUoKTtcbi8vIFx0bWVyY2hhbnRBdXRoZW50aWNhdGlvblR5cGUuc2V0TmFtZShTdHJpbmcocHJvY2Vzcy5lbnYuQVVUSE9SSVpFX05FVF9BUElfTE9HSU5fSUQpKTtcbi8vIFx0bWVyY2hhbnRBdXRoZW50aWNhdGlvblR5cGUuc2V0VHJhbnNhY3Rpb25LZXkoU3RyaW5nKHByb2Nlc3MuZW52LkFVVEhPUklaRV9ORVRfVFJBTlNBQ1RJT05fS0VZKSk7XG5cblx0XG4vLyBcdFx0dmFyIGJhbmtBY2NvdW50VHlwZSA9IG5ldyBBcGlDb250cmFjdHMuQmFua0FjY291bnRUeXBlKCk7XG4vLyBcdFx0YmFua0FjY291bnRUeXBlLnNldEFjY291bnRUeXBlKEFwaUNvbnRyYWN0cy5CYW5rQWNjb3VudFR5cGVFbnVtLlNBVklOR1MpO1xuLy8gXHRcdGJhbmtBY2NvdW50VHlwZS5zZXRSb3V0aW5nTnVtYmVyKCcxMjEwNDI4ODInKTtcbi8vIFx0XHQvL2FkZGVkIGNvZGVcbi8vIFx0XHR2YXIgYmFua0FjY291bnROdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTk5OTk5KSArIDEwMDAwO1xuLy8gXHRcdGJhbmtBY2NvdW50VHlwZS5zZXRBY2NvdW50TnVtYmVyKGJhbmtBY2NvdW50TnVtLnRvU3RyaW5nKCkpO1xuLy8gXHRcdGJhbmtBY2NvdW50VHlwZS5zZXROYW1lT25BY2NvdW50KCdKb2huIERvZScpO1xuXHRcbi8vIFx0XHR2YXIgcGF5bWVudFR5cGUgPSBuZXcgQXBpQ29udHJhY3RzLlBheW1lbnRUeXBlKCk7XG4vLyBcdFx0cGF5bWVudFR5cGUuc2V0QmFua0FjY291bnQoYmFua0FjY291bnRUeXBlKTtcblx0XG4vLyBcdFx0dmFyIG9yZGVyRGV0YWlscyA9IG5ldyBBcGlDb250cmFjdHMuT3JkZXJUeXBlKCk7XG4vLyBcdFx0b3JkZXJEZXRhaWxzLnNldEludm9pY2VOdW1iZXIoJ0lOVi0xMjM0NScpO1xuLy8gXHRcdG9yZGVyRGV0YWlscy5zZXREZXNjcmlwdGlvbignUHJvZHVjdCBEZXNjcmlwdGlvbicpO1xuXHRcbi8vIFx0XHR2YXIgdGF4ID0gbmV3IEFwaUNvbnRyYWN0cy5FeHRlbmRlZEFtb3VudFR5cGUoKTtcbi8vIFx0XHR0YXguc2V0QW1vdW50KCc0LjI2Jyk7XG4vLyBcdFx0dGF4LnNldE5hbWUoJ2xldmVsMiB0YXggbmFtZScpO1xuLy8gXHRcdHRheC5zZXREZXNjcmlwdGlvbignbGV2ZWwyIHRheCcpO1xuXHRcbi8vIFx0XHR2YXIgZHV0eSA9IG5ldyBBcGlDb250cmFjdHMuRXh0ZW5kZWRBbW91bnRUeXBlKCk7XG4vLyBcdFx0ZHV0eS5zZXRBbW91bnQoJzguNTUnKTtcbi8vIFx0XHRkdXR5LnNldE5hbWUoJ2R1dHkgbmFtZScpO1xuLy8gXHRcdGR1dHkuc2V0RGVzY3JpcHRpb24oJ2R1dHkgZGVzY3JpcHRpb24nKTtcblx0XG4vLyBcdFx0dmFyIHNoaXBwaW5nID0gbmV3IEFwaUNvbnRyYWN0cy5FeHRlbmRlZEFtb3VudFR5cGUoKTtcbi8vIFx0XHRzaGlwcGluZy5zZXRBbW91bnQoJzguNTUnKTtcbi8vIFx0XHRzaGlwcGluZy5zZXROYW1lKCdzaGlwcGluZyBuYW1lJyk7XG4vLyBcdFx0c2hpcHBpbmcuc2V0RGVzY3JpcHRpb24oJ3NoaXBwaW5nIGRlc2NyaXB0aW9uJyk7XG5cdFxuLy8gXHRcdC8vIHZhciBiaWxsVG8gPSBuZXcgQXBpQ29udHJhY3RzLkN1c3RvbWVyQWRkcmVzc1R5cGUoKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0Rmlyc3ROYW1lKCdFbGxlbicpO1xuLy8gXHRcdC8vIGJpbGxUby5zZXRMYXN0TmFtZSgnSm9obnNvbicpO1xuLy8gXHRcdC8vIGJpbGxUby5zZXRDb21wYW55KCdTb3V2ZW5pcm9wb2xpcycpO1xuLy8gXHRcdC8vIGJpbGxUby5zZXRBZGRyZXNzKCcxNCBNYWluIFN0cmVldCcpO1xuLy8gXHRcdC8vIGJpbGxUby5zZXRDaXR5KCdQZWNhbiBTcHJpbmdzJyk7XG4vLyBcdFx0Ly8gYmlsbFRvLnNldFN0YXRlKCdUWCcpO1xuLy8gXHRcdC8vIGJpbGxUby5zZXRaaXAoJzQ0NjI4Jyk7XG4vLyBcdFx0Ly8gYmlsbFRvLnNldENvdW50cnkoJ1VTQScpO1xuXHRcbi8vIFx0XHR2YXIgc2hpcFRvID0gbmV3IEFwaUNvbnRyYWN0cy5DdXN0b21lckFkZHJlc3NUeXBlKCk7XG4vLyBcdFx0c2hpcFRvLnNldEZpcnN0TmFtZSgnQ2hpbmEnKTtcbi8vIFx0XHRzaGlwVG8uc2V0TGFzdE5hbWUoJ0JheWxlcycpO1xuLy8gXHRcdHNoaXBUby5zZXRDb21wYW55KCdUaHltZSBmb3IgVGVhJyk7XG4vLyBcdFx0c2hpcFRvLnNldEFkZHJlc3MoJzEyIE1haW4gU3RyZWV0Jyk7XG4vLyBcdFx0c2hpcFRvLnNldENpdHkoJ1BlY2FuIFNwcmluZ3MnKTtcbi8vIFx0XHRzaGlwVG8uc2V0U3RhdGUoJ1RYJyk7XG4vLyBcdFx0c2hpcFRvLnNldFppcCgnNDQ2MjgnKTtcbi8vIFx0XHRzaGlwVG8uc2V0Q291bnRyeSgnVVNBJyk7XG5cdFxuLy8gXHRcdHZhciBsaW5lSXRlbV9pZDEgPSBuZXcgQXBpQ29udHJhY3RzLkxpbmVJdGVtVHlwZSgpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMS5zZXRJdGVtSWQoJzEnKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDEuc2V0TmFtZSgndmFzZScpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMS5zZXREZXNjcmlwdGlvbignY2FubmVzIGxvZ28nKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDEuc2V0UXVhbnRpdHkoJzE4Jyk7XG4vLyBcdFx0bGluZUl0ZW1faWQxLnNldFVuaXRQcmljZSgnNDUuMDAnKTtcblx0XG4vLyBcdFx0dmFyIGxpbmVJdGVtX2lkMiA9IG5ldyBBcGlDb250cmFjdHMuTGluZUl0ZW1UeXBlKCk7XG4vLyBcdFx0bGluZUl0ZW1faWQyLnNldEl0ZW1JZCgnMicpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMi5zZXROYW1lKCd2YXNlMicpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMi5zZXREZXNjcmlwdGlvbignY2FubmVzIGxvZ28yJyk7XG4vLyBcdFx0bGluZUl0ZW1faWQyLnNldFF1YW50aXR5KCcyOCcpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMi5zZXRVbml0UHJpY2UoJzI1LjAwJyk7XG5cdFxuLy8gXHRcdHZhciBsaW5lSXRlbUxpc3Q6YW55ID0gW107XG4vLyBcdFx0bGluZUl0ZW1MaXN0LnB1c2gobGluZUl0ZW1faWQxKTtcbi8vIFx0XHRsaW5lSXRlbUxpc3QucHVzaChsaW5lSXRlbV9pZDIpO1xuXHRcbi8vIFx0XHR2YXIgbGluZUl0ZW1zID0gbmV3IEFwaUNvbnRyYWN0cy5BcnJheU9mTGluZUl0ZW0oKTtcbi8vIFx0XHRsaW5lSXRlbXMuc2V0TGluZUl0ZW0obGluZUl0ZW1MaXN0KTtcblx0XG4vLyBcdFx0dmFyIHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUgPSBuZXcgQXBpQ29udHJhY3RzLlRyYW5zYWN0aW9uUmVxdWVzdFR5cGUoKTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldFRyYW5zYWN0aW9uVHlwZShBcGlDb250cmFjdHMuVHJhbnNhY3Rpb25UeXBlRW51bS5BVVRIQ0FQVFVSRVRSQU5TQUNUSU9OKTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldFBheW1lbnQocGF5bWVudFR5cGUpO1xuLy8gXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0QW1vdW50KDE5LjAwKTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldExpbmVJdGVtcyhsaW5lSXRlbXMpO1xuLy8gXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0T3JkZXIob3JkZXJEZXRhaWxzKTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldFRheCh0YXgpO1xuLy8gXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0RHV0eShkdXR5KTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldFNoaXBwaW5nKHNoaXBwaW5nKTtcbi8vIFx0XHQvLyB0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldEJpbGxUbyhiaWxsVG8pO1xuLy8gXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0U2hpcFRvKHNoaXBUbyk7XG5cdFxuLy8gXHRcdHZhciBjcmVhdGVSZXF1ZXN0ID0gbmV3IEFwaUNvbnRyYWN0cy5DcmVhdGVUcmFuc2FjdGlvblJlcXVlc3QoKTtcbi8vIFx0XHRjcmVhdGVSZXF1ZXN0LnNldFJlZklkKCcxMjM0NTYnKTtcbi8vIFx0XHRjcmVhdGVSZXF1ZXN0LnNldE1lcmNoYW50QXV0aGVudGljYXRpb24obWVyY2hhbnRBdXRoZW50aWNhdGlvblR5cGUpO1xuLy8gXHRcdGNyZWF0ZVJlcXVlc3Quc2V0VHJhbnNhY3Rpb25SZXF1ZXN0KHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUpO1xuXHRcbi8vIFx0XHQvL3ByZXR0eSBwcmludCByZXF1ZXN0XG4vLyBcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY3JlYXRlUmVxdWVzdC5nZXRKU09OKCksIG51bGwsIDIpKTtcblx0XHRcdFxuLy8gXHRcdHZhciBjdHJsID0gbmV3IEFwaUNvbnRyb2xsZXJzLkNyZWF0ZVRyYW5zYWN0aW9uQ29udHJvbGxlcihjcmVhdGVSZXF1ZXN0LmdldEpTT04oKSk7XG5cdFxuLy8gXHRcdGN0cmwuZXhlY3V0ZShmdW5jdGlvbigpe1xuXHRcbi8vIFx0XHRcdHZhciBhcGlSZXNwb25zZSA9IGN0cmwuZ2V0UmVzcG9uc2UoKTtcblx0XG4vLyBcdFx0XHR2YXIgcmVzcG9uc2UgPSBuZXcgQXBpQ29udHJhY3RzLkNyZWF0ZVRyYW5zYWN0aW9uUmVzcG9uc2UoYXBpUmVzcG9uc2UpO1xuXHRcbi8vIFx0XHRcdC8vcHJldHR5IHByaW50IHJlc3BvbnNlXG4vLyBcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSwgbnVsbCwgMikpO1xuXHRcbi8vIFx0XHRcdGlmKHJlc3BvbnNlICE9IG51bGwpe1xuLy8gXHRcdFx0XHRpZihyZXNwb25zZS5nZXRNZXNzYWdlcygpLmdldFJlc3VsdENvZGUoKSA9PSBBcGlDb250cmFjdHMuTWVzc2FnZVR5cGVFbnVtLk9LKXtcbi8vIFx0XHRcdFx0XHRpZihyZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0TWVzc2FnZXMoKSAhPSBudWxsKXtcbi8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgY3JlYXRlZCB0cmFuc2FjdGlvbiB3aXRoIFRyYW5zYWN0aW9uIElEOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldFRyYW5zSWQoKSk7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnUmVzcG9uc2UgQ29kZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRSZXNwb25zZUNvZGUoKSk7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnTWVzc2FnZSBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldE1lc3NhZ2VzKCkuZ2V0TWVzc2FnZSgpWzBdLmdldENvZGUoKSk7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRGVzY3JpcHRpb246ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0TWVzc2FnZXMoKS5nZXRNZXNzYWdlKClbMF0uZ2V0RGVzY3JpcHRpb24oKSk7XG4vLyBcdFx0XHRcdFx0fVxuLy8gXHRcdFx0XHRcdGVsc2Uge1xuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ZhaWxlZCBUcmFuc2FjdGlvbi4nKTtcbi8vIFx0XHRcdFx0XHRcdGlmKHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKSAhPSBudWxsKXtcbi8vIFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIENvZGU6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkuZ2V0RXJyb3IoKVswXS5nZXRFcnJvckNvZGUoKSk7XG4vLyBcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBtZXNzYWdlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpLmdldEVycm9yKClbMF0uZ2V0RXJyb3JUZXh0KCkpO1xuLy8gXHRcdFx0XHRcdFx0fVxuLy8gXHRcdFx0XHRcdH1cbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0XHRlbHNlIHtcbi8vIFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRmFpbGVkIFRyYW5zYWN0aW9uLiAnKTtcbi8vIFx0XHRcdFx0XHRpZihyZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkgIT0gbnVsbCAmJiByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkgIT0gbnVsbCl7XG5cdFx0XHRcdFx0XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgQ29kZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKS5nZXRFcnJvcigpWzBdLmdldEVycm9yQ29kZSgpKTtcbi8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBtZXNzYWdlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpLmdldEVycm9yKClbMF0uZ2V0RXJyb3JUZXh0KCkpO1xuLy8gXHRcdFx0XHRcdH1cbi8vIFx0XHRcdFx0XHRlbHNlIHtcbi8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0TWVzc2FnZXMoKS5nZXRNZXNzYWdlKClbMF0uZ2V0Q29kZSgpKTtcbi8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBtZXNzYWdlOiAnICsgcmVzcG9uc2UuZ2V0TWVzc2FnZXMoKS5nZXRNZXNzYWdlKClbMF0uZ2V0VGV4dCgpKTtcbi8vIFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdH1cbi8vIFx0XHRcdGVsc2Uge1xuLy8gXHRcdFx0XHRjb25zb2xlLmxvZygnTnVsbCBSZXNwb25zZS4nKTtcbi8vIFx0XHRcdH1cblx0XG4vLyBcdFx0fSk7XG4vLyBcdH1cblx0XG4vLyBcdGlmIChyZXF1aXJlLm1haW4gPT09IG1vZHVsZSkge1xuLy8gXHRcdGRlYml0QmFua0FjY291bnQoZnVuY3Rpb24oKXtcbi8vIFx0XHRcdGNvbnNvbGUubG9nKCdkZWJpdEJhbmtBY2NvdW50IGNhbGwgY29tcGxldGUuJyk7XG4vLyBcdFx0fSk7XG4vLyBcdH1cbi8vIFx0ZGViaXRCYW5rQWNjb3VudCgpXG4vLyBcdG1vZHVsZS5leHBvcnRzLmRlYml0QmFua0FjY291bnQgPSBkZWJpdEJhbmtBY2NvdW50O1xuXG5cblxuXG5cblxuIiwiXG5pbXBvcnQgKiBhcyBUd2lsaW8gZnJvbSAndHdpbGlvJ1xuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudidcbmRvdGVudi5jb25maWcoKVxuXG5cblxuLy8gVHdpbGlvIENvbnRyb2wgYW5kIEFjY2VzcyBDcmVkZW50aWFsIFxuY29uc3QgYWNjb3VudFNpZCA9IHByb2Nlc3MuZW52LlRXSUxJT19TSUQ7XG5jb25zdCBhdXRoVG9rZW4gPSBwcm9jZXNzLmVudi5UV0lMSU9fQVVUSEtFWTtcbmNvbnN0IHNtcyA9IFR3aWxpbyhhY2NvdW50U2lkLCBhdXRoVG9rZW4pXG5cbmV4cG9ydCBjb25zdCB7IE1lc3NhZ2luZ1Jlc3BvbnNlIH0gPSBUd2lsaW8udHdpbWwgXG5cbmV4cG9ydCBmdW5jdGlvbiBNZXNzYWdlUmVzcG9uc2VGcm9tSG9tZVBhZ2UobmFtZTpzdHJpbmcsdG8/OnN0cmluZ1tdfCBhbnkpIHtcbiAgICBcbiAgICB0by5tYXAoYXN5bmMgKGkpID0+IHtcbiAgICAgICAgYXdhaXQgc21zLm1lc3NhZ2VzLmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5OiBgRGVhciAke25hbWUudG9Mb2NhbGVVcHBlckNhc2UoKX0sIHRoYW5rIHlvdSBmb3IgcmVhY2hpbmcgb3V0IHRvIPCfjI4gS2NtIEluYy4gV2UgdGFrZSBpbW1lbnNlIHByaWRlIGluIG91ciBwYXJ0bmVyc2hpcCB3aXRoIHlvdSBhbmQgYXJlIGRlZGljYXRlZCB0byBkZWxpdmVyaW5nIHVucGFyYWxsZWxlZCBzZXJ2aWNlLiBSZXN0IGFzc3VyZWQgdGhhdCBvbmUgb2Ygb3VyIHJlcHJlc2VudGF0aXZlcyB3aWxsIGJlIGluIHRvdWNoIHdpdGggeW91IHByb21wdGx5IHRvIGFkZHJlc3MgeW91ciBpbnF1aXJ5LmAsXG4gICAgICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5UV0lMSU9fUEhPTkUsXG4gICAgICAgICAgICBzaG9ydGVuVXJsczogdHJ1ZSxcbiAgICAgICAgICAgIHRvOiBpXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IHNlbmRSZXBseSA9IChib2R5ID0gXCJUZXN0aW5nIHRoZSBhcGlcIiwgdG8/OiBhbnkpID0+IHtcbiAgICBfcGhvbmVudW1iZXIubWFwKGFzeW5jIChpKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld19NZXNzYWdlID0gYXdhaXQgc21zLm1lc3NhZ2VzLmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuVFdJTElPX1BIT05FPy50b1N0cmluZygpLFxuICAgICAgICAgICAgdG86IGlcbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cblxuXG4iLCJpbXBvcnQgKiBhcyBteXNxbCBmcm9tICdteXNxbDInO1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcblxuXG5cblxuXG5leHBvcnQgY29uc3QgbXlzcWxBY2Nlc3MgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgICBwb3J0OjMzMDYsXG4gICAgdXNlcjpwcm9jZXNzLmVudi5NWVNRTF9VU0VSLFxuICAgIHBhc3N3b3JkOnByb2Nlc3MuZW52Lk1ZU1FMX1BBU1NXT1JELFxuICAgIGRhdGFiYXNlOnByb2Nlc3MuZW52LkRBVEFCQVNFXG59KVxuXG5leHBvcnQgY29uc3QgUXVlcnkgPSAocXVlcnk6c3RyaW5nLHZhbHVlcz86QXJyYXk8c3RyaW5nfG51bWJlcj4pPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFycmF5PGFueT4+KChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgbXlzcWxBY2Nlc3MucXVlcnkocXVlcnksdmFsdWVzLChlcnIscmVzdWx0czphbnkpID0+e1xuICAgICAgICAgICAgaWYoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3Qgdmlld01lc3NhZ2VzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ3NlbGVjdCAqIGZyb20gQ29tbXVuaWNhdGlvbi5NZXNzYWdlcycpO1xuY29uc3QgaW5zZXJ0TWVzc2FnZT0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ29tbXVuaWNhdGlvbi5NZXNzYWdlcyBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB2aWV3TWVzc2FnZXMsXG4gICAgaW5zZXJ0TWVzc2FnZVxuXG5cbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG4gZXhwb3J0IGNvbnN0IHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgU0VUID8nLCB2YWx1ZXMpO1xuIGV4cG9ydCBjb25zdCBjaGVja0FjY291bnQgPSBhc3luYyAoZW1haWw6YW55KSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5Mb2dpbl9DcmVkZW50aWFscyBXSEVSRSBlbWFpbCA9ID8nLGVtYWlsKVxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgZ2V0QmlsbGluZ0luZm9ybWF0aW9uID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2xpZW50cy5QcmluY2lwbGVfQmlsbGluZ19JbmZvcm1hdGlvbicpO1xuY29uc3QgaW5zZXJ0QmlsbGluZ0luZm9ybWF0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ2xpZW50cy5QcmluY2lwbGVfQmlsbGluZ19JbmZvcm1hdGlvbiBTRVQgPycsIHZhbHVlcyk7XG5jb25zdCB1cGRhdGVCaWxsaW5nSW5mb3JtYXRpb24gPSBhc3luYyAoaW5mbyxpZCk9PlF1ZXJ5KCdVUERBVEUgQ2xpZW50cy5QcmluY2lwbGVfQmlsbGluZ19JbmZvcm1hdGlvbiBTRVQgPyBXSEVSRSBhZG1pbl9pZCA9ID8nLFtpbmZvLGlkXSlcblxuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbi8vIGNvbnN0IGRlbGV0ZU1lc3NhZ2VzID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsIFtpZF0pO1xuLy8gY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gS0NNX0lOQy5jbGllbnRSZWdpc3RyYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuLy8gY29uc3QgaW5zZXJ0SW5zdGl0dXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5pbnN0aXR1dGlvbiBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6IGFueSwgaWQ6IGFueSkgPT4gUXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LCBpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuZ2V0QmlsbGluZ0luZm9ybWF0aW9uLFxuaW5zZXJ0QmlsbGluZ0luZm9ybWF0aW9uLFxudXBkYXRlQmlsbGluZ0luZm9ybWF0aW9uXG59IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgZ2V0Q2xpZW50SW5mb3JtYXRpb24gPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLkxvZ2luX0NyZWRlbnRpYWxzIHdoZXJlIGlkID0gPycsW2lkXSk7XG5jb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBDbGllbnRzLlBlcnNvbmFsX0luZm9ybWF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbmNvbnN0IHVwZGF0ZVBSSU5DSVBMRSA9IGFzeW5jIChpbmZvLGlkKT0+UXVlcnkoJ1VQREFURSBDbGllbnRzLlBlcnNvbmFsX0luZm9ybWF0aW9uIFNFVCA/IFdIRVJFIGlkID0gPycsW2luZm8saWRdKVxuXG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuLy8gY29uc3QgZGVsZXRlTWVzc2FnZXMgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIGNvbnRhY3QgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG4vLyBjb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAoLi4udmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBLQ01fSU5DLmNsaWVudFJlZ2lzdHJhdGlvbiBTRVQgPycsIHZhbHVlcyk7XG4vLyBjb25zdCBpbnNlcnRJbnN0aXR1dGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmluc3RpdHV0aW9uIFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3QgdXBkYXRlTWVzc2FnZXMgPSBhc3luYyAobmV3Q29udGVudDogYW55LCBpZDogYW55KSA9PiBRdWVyeSgnVVBEQVRFIGNvbnRhY3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW25ld0NvbnRlbnQsIGlkXSlcbi8vIGNvbnN0IGFsbFVzZXJzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gVXNlcnMnKTtcbi8vIGNvbnN0IGluc2VydFVzZXJzID0gYXN5bmModXNlciA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRzIFNFVCA/JyAsW3VzZXJdKTtcbi8vIGNvbnN0IGluc2VydFBoeXNpY2FsID0gYXN5bmMocGh5c2ljYWwgOmFueSxjbGllbnRpZDpudW1iZXIgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudF9saWZlc3R5bGUgU0VUID8nICxbcGh5c2ljYWxdKTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0Q2xpZW50SW5mb3JtYXRpb24sXG4gICAgaW5zZXJ0Q0xJRU5ULFxuICAgIHVwZGF0ZVBSSU5DSVBMRSxcbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCBnZXRVcGNvbWluZ05vdGFyeVNlcnZpY2VzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2xpZW50cy5QcmluY2lwbGVfTm90YXJ5X1JlcXVlc3QgV0hFUkUgdXNlcklkID0gMyBBTkQgbm90YXJ5X3JlcXVlc3RfdHlwZSA9IFwiQ2VydGlmeSBjb3BpZXNcIicpO1xuY29uc3QgcmVxdWVzdE5vdGFyeVNlcnZpY2VzID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ2xpZW50cy5QcmluY2lwbGVfTm90YXJ5X1JlcXVlc3QgU0VUID8nLCB2YWx1ZXMpO1xuY29uc3QgdXBkYXRlTm90YXJ5U2VydmljZVJlcXVlc3QgPSBhc3luYyAoaW5mbyxpZCk9PlF1ZXJ5KCdVUERBVEUgQ2xpZW50cy5QcmluY2lwbGVfTm90YXJ5X1JlcXVlc3QgU0VUID8gV0hFUkUgaWQgPSA/JyxbaW5mbyxpZF0pXG5jb25zdCBkZWxldGVOb3RhcnlTZXJ2aWNlUmVxdWVzdCA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gQ2xpZW50cy5QcmluY2lwbGVfTm90YXJ5X1JlcXVlc3QgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldFVwY29taW5nTm90YXJ5U2VydmljZXMsXG4gICAgcmVxdWVzdE5vdGFyeVNlcnZpY2VzLFxuICAgIHVwZGF0ZU5vdGFyeVNlcnZpY2VSZXF1ZXN0LFxuICAgIGRlbGV0ZU5vdGFyeVNlcnZpY2VSZXF1ZXN0XG59IiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgJ3Bhc3Nwb3J0LWxvY2FsJztcbmltcG9ydCAqIGFzIHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0ICogYXMgTG9jYWxTdHJhdGVneSBmcm9tICdwYXNzcG9ydC1sb2NhbCdcbmltcG9ydCB7IGNoZWNrQWNjb3VudCB9IGZyb20gJy4vLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Mb2dpbi9pbmRleCdcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHQnXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuXG5cblxuXG5jb25zdCBzdHJhdGVneSA9IG5ldyBMb2NhbFN0cmF0ZWd5KHtcbiAgICB1c2VybmFtZUZpZWxkOiAnZW1haWwnLFxuICAgIHBhc3N3b3JkRmllbGQ6ICdwYXNzd29yZCdcbn0sIGFzeW5jIGZ1bmN0aW9uIHZlcmlmeShlbWFpbCwgcGFzc3dvcmQsIGRvbmUpIHtcbiAgICBjb25zdCBbdXNlcl0gPSBhd2FpdCBjaGVja0FjY291bnQoZW1haWwpXG4gICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBtZXNzYWdlOiBcIkludmFsaWQgY3JlZGVudGlhbHMuXFxuXCIgfSk7XG4gICAgICAgfVxuICAgICAgIGlmICghYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkge1xuICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgbWVzc2FnZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlxcblwiIH0pO1xuICAgICAgIH0gXG4gICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XG4gICAgIH1cbiAgICk7XG4gICBwYXNzcG9ydC51c2Uoc3RyYXRlZ3kpXG5cbnBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXIoICh1c2VyOmFueSwgZG9uZSkgPT57XG4gICAgY29uc29sZS5sb2coXCJoZXJlIGF0IHNlcmlhbGl6ZVwiKVxuICAgIHByb2Nlc3MubmV4dFRpY2soKCk9PiB7XG4gICAgICByZXR1cm4gZG9uZShudWxsLCB7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLmZpcnN0X25hbWUgKyB1c2VyLmxhc3RfbmFtZSxcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5cbnBhc3Nwb3J0LmRlc2VyaWFsaXplVXNlcigodXNlcjpFeHByZXNzLkF1dGhJbmZvLCBkb25lKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZXJlIGF0IGRlc2VyaWFsaXplXCIpXG5cbiAgICBwcm9jZXNzLm5leHRUaWNrKCAoKSA9PntcbiAgICAgICAgcmV0dXJuIGRvbmUobnVsbCx1c2VyICk7XG4gICAgfSk7XG59KTtcblxuXG5yb3V0ZXIucG9zdCgnL2xvZ2luX3ZlcmlmaWNhdGlvbicsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwnKSwgKHJlcTphbnksIHJlcykgPT4ge1xuICAgIGlmIChyZXEudXNlcil7XG4gICAgICAgIHJlcy5qc29uKHJlcS51c2VyKVxuXG4gICAgfSBlbHNlIGlmKCFyZXEudXNlcil7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bmF1dGhvcml6ZWQnKVxuICAgIH1cbn0pO1xuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJteXNxbDJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtbG9jYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHdpbGlvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycydcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBIb21lcGFnZVNlcnZlciBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvSG9tZXBhZ2VfUXVlcnknO1xuaW1wb3J0IENsaWVudFBvcnRhbCBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscyc7XG5pbXBvcnQgeyBNZXNzYWdpbmdSZXNwb25zZSwgc2VuZFJlcGx5IH0gZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU01TL3NlbmRfc21zJztcbmltcG9ydCAnLi9QQVlNRU5UUy9hdXRob3JpemVfY2FyZCc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL0hvbWVwYWdlL2NvbnRhY3QnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4vQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscydcbmltcG9ydCBiaWxsaW5nIGZyb20gJy4vQ2xpZW50UG9ydGFsL0NsaWVudEJpbGxpbmcnO1xuaW1wb3J0IG5vdGFyeSBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRTZXJ2aWNlUmVxdWVzdCc7XG5pbXBvcnQgcmVnaXN0cmF0aW9uIGZyb20gJy4vSG9tZXBhZ2UvcmVnaXN0cmF0aW9uJ1xuaW1wb3J0IHNlY3VyaXR5IGZyb20gJy4vU2VjdXJpdHkvU2lnbmluVmVyaWZpY2F0aW9uJ1xuaW1wb3J0ICogYXMgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nXG5cblxuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAudXNlKGNvcnMoKSlcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC5zZXQoJ3RydXN0IHByb3h5JywgdHJ1ZSlcblxuXG5jb25zdCBuZXdVc2UgPSBhcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnKicpXG4gIG5leHQoKVxufSlcblxuLy8gYXBwLnVzZShzZXNzaW9uKHtcbi8vICAgc2VjcmV0OiAna2V5Ym9hcmQgY2F0Jyxcbi8vICAgcmVzYXZlOiBmYWxzZSxcbi8vICAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuLy8gICBjb29raWU6IHsgc2VjdXJlOiBmYWxzZSB9XG4vLyB9KSk7XG5cbi8vIGFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcbi8vIGFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcblxuYXBwLnVzZSgnLycsKHJlcSxyZXMsbmV4dCk9Pntjb25zb2xlLmxvZyhyZXEudXNlcik7bmV4dCgpfSwgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKCdwdWJsaWMnKSkpXG5cbmFwcC5nZXQoJy90ZXN0aW5nX3Nlc3Npb25zJywocmVxOmFueSxyZXMpPT57XG4gIGNvbnNvbGUubG9nKHJlcS51c2VyKVxuICByZXMuanNvbihyZXEudXNlcilcbiAgfSlcblxuYXBwLnVzZSgnL21lc3NhZ2UnLGNvbnRhY3QpXG5hcHAudXNlKCcvY2xpZW50X3BvcnRhbCcsY2xpZW50KVxuYXBwLnVzZSgnL2NsaWVudF9wb3J0YWwnLGJpbGxpbmcpXG5cbmFwcC51c2UoJy9jbGllbnRfcG9ydGFsX3NlcnZpY2VzJyxub3RhcnkpXG5hcHAudXNlKCcvY2xpZW50X3JlZ2lzdHJhdGlvbicscmVnaXN0cmF0aW9uKVxuXG5cblxuYXBwLnVzZShzZWN1cml0eSlcblxuXG5cblxuLy8gY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MFxuYXBwLmxpc3Rlbig4MDgwLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHs4MDgwfS4uLmApXG59KVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9