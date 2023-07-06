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
var ClientBillingDetails_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientBillingDetails */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientBillingDetails.ts");
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
router.get('/getPrincipleBillingInformation/?:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply, clientProfileReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ClientBillingDetails_1.default.getBillingInformation()];
            case 1:
                newReply = _a.sent();
                return [4 /*yield*/, Object.entries(newReply[0]).splice(2, 4)];
            case 2:
                clientProfileReply = _a.sent();
                res.json(clientProfileReply);
                return [2 /*return*/];
        }
    });
}); });
router.put('/updatePrincipleBillingInformation/?:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.params);
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
var router = express.Router();
router.post('/client_message', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Homepage_Query_1.default.insertCLIENT(req.body)];
            case 1:
                newReply = _a.sent();
                console.log(req.body);
                res.json(newReply);
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;


/***/ }),

/***/ "./src/BACKEND/PAYMENTS/authorize_card.ts":
/*!************************************************!*\
  !*** ./src/BACKEND/PAYMENTS/authorize_card.ts ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);

Object.defineProperty(exports, "__esModule", ({ value: true }));
var AUTHORIZENET = __webpack_require__(/*! authorizenet */ "authorizenet");
var dotenv = __webpack_require__(/*! dotenv */ "dotenv");
dotenv.config();
var ApiContracts = AUTHORIZENET.APIContracts;
var ApiControllers = AUTHORIZENET.APIControllers;
var Constants = AUTHORIZENET.Constants;
function debitBankAccount() {
    var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
    merchantAuthenticationType.setName(String(process.env.AUTHORIZE_NET_API_LOGIN_ID));
    merchantAuthenticationType.setTransactionKey(String(process.env.AUTHORIZE_NET_TRANSACTION_KEY));
    var bankAccountType = new ApiContracts.BankAccountType();
    bankAccountType.setAccountType(ApiContracts.BankAccountTypeEnum.SAVINGS);
    bankAccountType.setRoutingNumber('121042882');
    //added code
    var bankAccountNum = Math.floor(Math.random() * 9999999999) + 10000;
    bankAccountType.setAccountNumber(bankAccountNum.toString());
    bankAccountType.setNameOnAccount('John Doe');
    var paymentType = new ApiContracts.PaymentType();
    paymentType.setBankAccount(bankAccountType);
    var orderDetails = new ApiContracts.OrderType();
    orderDetails.setInvoiceNumber('INV-12345');
    orderDetails.setDescription('Product Description');
    var tax = new ApiContracts.ExtendedAmountType();
    tax.setAmount('4.26');
    tax.setName('level2 tax name');
    tax.setDescription('level2 tax');
    var duty = new ApiContracts.ExtendedAmountType();
    duty.setAmount('8.55');
    duty.setName('duty name');
    duty.setDescription('duty description');
    var shipping = new ApiContracts.ExtendedAmountType();
    shipping.setAmount('8.55');
    shipping.setName('shipping name');
    shipping.setDescription('shipping description');
    // var billTo = new ApiContracts.CustomerAddressType();
    // billTo.setFirstName('Ellen');
    // billTo.setLastName('Johnson');
    // billTo.setCompany('Souveniropolis');
    // billTo.setAddress('14 Main Street');
    // billTo.setCity('Pecan Springs');
    // billTo.setState('TX');
    // billTo.setZip('44628');
    // billTo.setCountry('USA');
    var shipTo = new ApiContracts.CustomerAddressType();
    shipTo.setFirstName('China');
    shipTo.setLastName('Bayles');
    shipTo.setCompany('Thyme for Tea');
    shipTo.setAddress('12 Main Street');
    shipTo.setCity('Pecan Springs');
    shipTo.setState('TX');
    shipTo.setZip('44628');
    shipTo.setCountry('USA');
    var lineItem_id1 = new ApiContracts.LineItemType();
    lineItem_id1.setItemId('1');
    lineItem_id1.setName('vase');
    lineItem_id1.setDescription('cannes logo');
    lineItem_id1.setQuantity('18');
    lineItem_id1.setUnitPrice('45.00');
    var lineItem_id2 = new ApiContracts.LineItemType();
    lineItem_id2.setItemId('2');
    lineItem_id2.setName('vase2');
    lineItem_id2.setDescription('cannes logo2');
    lineItem_id2.setQuantity('28');
    lineItem_id2.setUnitPrice('25.00');
    var lineItemList = [];
    lineItemList.push(lineItem_id1);
    lineItemList.push(lineItem_id2);
    var lineItems = new ApiContracts.ArrayOfLineItem();
    lineItems.setLineItem(lineItemList);
    var transactionRequestType = new ApiContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION);
    transactionRequestType.setPayment(paymentType);
    transactionRequestType.setAmount(19.00);
    transactionRequestType.setLineItems(lineItems);
    transactionRequestType.setOrder(orderDetails);
    transactionRequestType.setTax(tax);
    transactionRequestType.setDuty(duty);
    transactionRequestType.setShipping(shipping);
    // transactionRequestType.setBillTo(billTo);
    transactionRequestType.setShipTo(shipTo);
    var createRequest = new ApiContracts.CreateTransactionRequest();
    createRequest.setRefId('123456');
    createRequest.setMerchantAuthentication(merchantAuthenticationType);
    createRequest.setTransactionRequest(transactionRequestType);
    //pretty print request
    console.log(JSON.stringify(createRequest.getJSON(), null, 2));
    var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());
    ctrl.execute(function () {
        var apiResponse = ctrl.getResponse();
        var response = new ApiContracts.CreateTransactionResponse(apiResponse);
        //pretty print response
        console.log(JSON.stringify(response, null, 2));
        if (response != null) {
            if (response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK) {
                if (response.getTransactionResponse().getMessages() != null) {
                    console.log('Successfully created transaction with Transaction ID: ' + response.getTransactionResponse().getTransId());
                    console.log('Response Code: ' + response.getTransactionResponse().getResponseCode());
                    console.log('Message Code: ' + response.getTransactionResponse().getMessages().getMessage()[0].getCode());
                    console.log('Description: ' + response.getTransactionResponse().getMessages().getMessage()[0].getDescription());
                }
                else {
                    console.log('Failed Transaction.');
                    if (response.getTransactionResponse().getErrors() != null) {
                        console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                        console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                    }
                }
            }
            else {
                console.log('Failed Transaction. ');
                if (response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null) {
                    console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
                    console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
                }
                else {
                    console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
                    console.log('Error message: ' + response.getMessages().getMessage()[0].getText());
                }
            }
        }
        else {
            console.log('Null Response.');
        }
    });
}
if (__webpack_require__.c[__webpack_require__.s] === module) {
    debitBankAccount(function () {
        console.log('debitBankAccount call complete.');
    });
}
debitBankAccount();
module.exports.debitBankAccount = debitBankAccount;


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
exports.sendReply = exports.sendMessage = exports.MessagingResponse = void 0;
var Twilio = __webpack_require__(/*! twilio */ "twilio");
var dotenv = __webpack_require__(/*! dotenv */ "dotenv");
dotenv.config();
// Twilio Control and Access Credential 
var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_AUTHKEY;
var sms = Twilio(accountSid, authToken);
exports.MessagingResponse = Twilio.twiml.MessagingResponse;
function sendMessage(body, to) {
    var _this = this;
    to.map(function (i) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sms.messages.create({
                        body: body,
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
exports.sendMessage = sendMessage;
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
    return [2 /*return*/, (0, Conection_1.Query)('select * from Communication.Homepage')];
}); }); };
var insertMessage = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Communication.Homepage SET ?', values)];
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

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientBillingDetails.ts":
/*!***************************************************************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientBillingDetails.ts ***!
  \***************************************************************************************************/
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

/***/ "./src/BACKEND/index.ts":
/*!******************************!*\
  !*** ./src/BACKEND/index.ts ***!
  \******************************/
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
var cors = __webpack_require__(/*! cors */ "cors");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
var Homepage_Query_1 = __webpack_require__(/*! ./ProgramControlFlow/SQL/Query.ts/Homepage_Query */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Homepage_Query.ts");
var ClientPersonalDetails_1 = __webpack_require__(/*! ./ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/ClientPersonalDetails.ts");
var send_sms_1 = __webpack_require__(/*! ./ProgramControlFlow/SMS/send_sms */ "./src/BACKEND/ProgramControlFlow/SMS/send_sms.ts");
__webpack_require__(/*! ./PAYMENTS/authorize_card */ "./src/BACKEND/PAYMENTS/authorize_card.ts");
var contact_1 = __webpack_require__(/*! ./Homepage/contact */ "./src/BACKEND/Homepage/contact.ts");
var ClientPersonalDetails_2 = __webpack_require__(/*! ./ClientPortal/ClientPersonalDetails */ "./src/BACKEND/ClientPortal/ClientPersonalDetails.ts");
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
app.post('/database_post', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Homepage_Query_1.default.insertMessage()];
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
app.post('/testing_backend', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_query.insertCLIENT(req.body)];
            case 1:
                newReply = _a.sent();
                (0, send_sms_1.sendMessage)("".concat(req.body.first_name.toUpperCase(), " We at Kcm Inc are excited."), req.body.phone_number);
                console.log(newReply);
                console.log(req.body);
                res.json(newReply);
                return [2 /*return*/];
        }
    });
}); });
console.log(Math.floor(Math.random() * 999999) + 111111);
var PORT = process.env.PORT || 80;
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT, "..."));
});


/***/ }),

/***/ "authorizenet":
/*!*******************************!*\
  !*** external "authorizenet" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("authorizenet");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

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

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(__webpack_require__.s = "./src/BACKEND/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsTUFBTSxDQUFDLEdBQUMsTUFBTSxDQUFDO0FBQ3BELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDbkMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUE0QixJQUFJLFFBQUssQ0FBQztBQUNwRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDdEZGOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRUpBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Ib21lcGFnZS9jb250YWN0LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1BBWU1FTlRTL2F1dGhvcml6ZV9jYXJkLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TTVMvc2VuZF9zbXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9Db25lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Ib21lcGFnZV9RdWVyeS50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRCaWxsaW5nRGV0YWlscy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiYXV0aG9yaXplbmV0XCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52L2NvbmZpZ1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJteXNxbDJcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJ0d2lsaW9cIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycydcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgY2xpZW50X2FkbWluX3F1ZXJ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscyc7XG5pbXBvcnQgY2xpZW50X2JpbGxpbmdfcXVlcnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50QmlsbGluZ0RldGFpbHMnO1xuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIuZ2V0KCcvZ2V0UHJpbmNpcGxlSW5mb3JtYXRpb24vPzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgY2xpZW50X2FkbWluX3F1ZXJ5LmdldENsaWVudEluZm9ybWF0aW9uKClcbiAgICBjb25zdCBjbGllbnRQcm9maWxlUmVwbHkgPSBhd2FpdCBPYmplY3QuZW50cmllcyhuZXdSZXBseVswXSkuc3BsaWNlKDEsOSlcbiAgICByZXMuanNvbihjbGllbnRQcm9maWxlUmVwbHkpXG59KTtcblxucm91dGVyLnB1dCgnL3VwZGF0ZUNsaWVudGluZm9ybWF0aW9uLz86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IGNsaWVudF9hZG1pbl9xdWVyeS51cGRhdGVQUklOQ0lQTEUocmVxLmJvZHkscmVxLnBhcmFtcy5pZClcbiAgICByZXMuanNvbignaGVsbG8nKVxufSk7XG5cbnJvdXRlci5nZXQoJy9nZXRQcmluY2lwbGVCaWxsaW5nSW5mb3JtYXRpb24vPzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgY2xpZW50X2JpbGxpbmdfcXVlcnkuZ2V0QmlsbGluZ0luZm9ybWF0aW9uKClcbiAgICBjb25zdCBjbGllbnRQcm9maWxlUmVwbHkgPSBhd2FpdCBPYmplY3QuZW50cmllcyhuZXdSZXBseVswXSkuc3BsaWNlKDIsNClcbiAgICByZXMuanNvbihjbGllbnRQcm9maWxlUmVwbHkpXG4gICBcbn0pO1xuXG5yb3V0ZXIucHV0KCcvdXBkYXRlUHJpbmNpcGxlQmlsbGluZ0luZm9ybWF0aW9uLz86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXEucGFyYW1zKVxuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgY2xpZW50X2JpbGxpbmdfcXVlcnkudXBkYXRlQmlsbGluZ0luZm9ybWF0aW9uKHJlcS5ib2R5LHJlcS5wYXJhbXMuaWQpXG4gICAgY29uc29sZS5sb2cobmV3UmVwbHkpXG4gICAgcmVzLmpzb24oJ2hlbGxvJylcbn0pO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGRhdGFiYXNlX3F1ZXJ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvSG9tZXBhZ2VfUXVlcnknO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbnJvdXRlci5wb3N0KCcvY2xpZW50X21lc3NhZ2UnLCAgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBkYXRhYmFzZV9xdWVyeS5pbnNlcnRDTElFTlQocmVxLmJvZHkpXG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICAgIHJlcy5qc29uKG5ld1JlcGx5KVxuICB9KTtcblxuXG5cblxuXG4gIGV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiaW1wb3J0ICogYXMgQVVUSE9SSVpFTkVUIGZyb20gJ2F1dGhvcml6ZW5ldCc7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52JyBcbmRvdGVudi5jb25maWcoKVxuXG5sZXQgQXBpQ29udHJhY3RzID0gQVVUSE9SSVpFTkVULkFQSUNvbnRyYWN0cztcbmxldCBBcGlDb250cm9sbGVycyA9IEFVVEhPUklaRU5FVC5BUElDb250cm9sbGVycztcbmxldCBDb25zdGFudHMgPSBBVVRIT1JJWkVORVQuQ29uc3RhbnRzXG5cblxuXG5cdGZ1bmN0aW9uIGRlYml0QmFua0FjY291bnQoKSB7XG5cdFx0dmFyIG1lcmNoYW50QXV0aGVudGljYXRpb25UeXBlID0gbmV3IEFwaUNvbnRyYWN0cy5NZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZSgpO1xuXHRtZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZS5zZXROYW1lKFN0cmluZyhwcm9jZXNzLmVudi5BVVRIT1JJWkVfTkVUX0FQSV9MT0dJTl9JRCkpO1xuXHRtZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZS5zZXRUcmFuc2FjdGlvbktleShTdHJpbmcocHJvY2Vzcy5lbnYuQVVUSE9SSVpFX05FVF9UUkFOU0FDVElPTl9LRVkpKTtcblxuXHRcblx0XHR2YXIgYmFua0FjY291bnRUeXBlID0gbmV3IEFwaUNvbnRyYWN0cy5CYW5rQWNjb3VudFR5cGUoKTtcblx0XHRiYW5rQWNjb3VudFR5cGUuc2V0QWNjb3VudFR5cGUoQXBpQ29udHJhY3RzLkJhbmtBY2NvdW50VHlwZUVudW0uU0FWSU5HUyk7XG5cdFx0YmFua0FjY291bnRUeXBlLnNldFJvdXRpbmdOdW1iZXIoJzEyMTA0Mjg4MicpO1xuXHRcdC8vYWRkZWQgY29kZVxuXHRcdHZhciBiYW5rQWNjb3VudE51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OTk5OTkpICsgMTAwMDA7XG5cdFx0YmFua0FjY291bnRUeXBlLnNldEFjY291bnROdW1iZXIoYmFua0FjY291bnROdW0udG9TdHJpbmcoKSk7XG5cdFx0YmFua0FjY291bnRUeXBlLnNldE5hbWVPbkFjY291bnQoJ0pvaG4gRG9lJyk7XG5cdFxuXHRcdHZhciBwYXltZW50VHlwZSA9IG5ldyBBcGlDb250cmFjdHMuUGF5bWVudFR5cGUoKTtcblx0XHRwYXltZW50VHlwZS5zZXRCYW5rQWNjb3VudChiYW5rQWNjb3VudFR5cGUpO1xuXHRcblx0XHR2YXIgb3JkZXJEZXRhaWxzID0gbmV3IEFwaUNvbnRyYWN0cy5PcmRlclR5cGUoKTtcblx0XHRvcmRlckRldGFpbHMuc2V0SW52b2ljZU51bWJlcignSU5WLTEyMzQ1Jyk7XG5cdFx0b3JkZXJEZXRhaWxzLnNldERlc2NyaXB0aW9uKCdQcm9kdWN0IERlc2NyaXB0aW9uJyk7XG5cdFxuXHRcdHZhciB0YXggPSBuZXcgQXBpQ29udHJhY3RzLkV4dGVuZGVkQW1vdW50VHlwZSgpO1xuXHRcdHRheC5zZXRBbW91bnQoJzQuMjYnKTtcblx0XHR0YXguc2V0TmFtZSgnbGV2ZWwyIHRheCBuYW1lJyk7XG5cdFx0dGF4LnNldERlc2NyaXB0aW9uKCdsZXZlbDIgdGF4Jyk7XG5cdFxuXHRcdHZhciBkdXR5ID0gbmV3IEFwaUNvbnRyYWN0cy5FeHRlbmRlZEFtb3VudFR5cGUoKTtcblx0XHRkdXR5LnNldEFtb3VudCgnOC41NScpO1xuXHRcdGR1dHkuc2V0TmFtZSgnZHV0eSBuYW1lJyk7XG5cdFx0ZHV0eS5zZXREZXNjcmlwdGlvbignZHV0eSBkZXNjcmlwdGlvbicpO1xuXHRcblx0XHR2YXIgc2hpcHBpbmcgPSBuZXcgQXBpQ29udHJhY3RzLkV4dGVuZGVkQW1vdW50VHlwZSgpO1xuXHRcdHNoaXBwaW5nLnNldEFtb3VudCgnOC41NScpO1xuXHRcdHNoaXBwaW5nLnNldE5hbWUoJ3NoaXBwaW5nIG5hbWUnKTtcblx0XHRzaGlwcGluZy5zZXREZXNjcmlwdGlvbignc2hpcHBpbmcgZGVzY3JpcHRpb24nKTtcblx0XG5cdFx0Ly8gdmFyIGJpbGxUbyA9IG5ldyBBcGlDb250cmFjdHMuQ3VzdG9tZXJBZGRyZXNzVHlwZSgpO1xuXHRcdC8vIGJpbGxUby5zZXRGaXJzdE5hbWUoJ0VsbGVuJyk7XG5cdFx0Ly8gYmlsbFRvLnNldExhc3ROYW1lKCdKb2huc29uJyk7XG5cdFx0Ly8gYmlsbFRvLnNldENvbXBhbnkoJ1NvdXZlbmlyb3BvbGlzJyk7XG5cdFx0Ly8gYmlsbFRvLnNldEFkZHJlc3MoJzE0IE1haW4gU3RyZWV0Jyk7XG5cdFx0Ly8gYmlsbFRvLnNldENpdHkoJ1BlY2FuIFNwcmluZ3MnKTtcblx0XHQvLyBiaWxsVG8uc2V0U3RhdGUoJ1RYJyk7XG5cdFx0Ly8gYmlsbFRvLnNldFppcCgnNDQ2MjgnKTtcblx0XHQvLyBiaWxsVG8uc2V0Q291bnRyeSgnVVNBJyk7XG5cdFxuXHRcdHZhciBzaGlwVG8gPSBuZXcgQXBpQ29udHJhY3RzLkN1c3RvbWVyQWRkcmVzc1R5cGUoKTtcblx0XHRzaGlwVG8uc2V0Rmlyc3ROYW1lKCdDaGluYScpO1xuXHRcdHNoaXBUby5zZXRMYXN0TmFtZSgnQmF5bGVzJyk7XG5cdFx0c2hpcFRvLnNldENvbXBhbnkoJ1RoeW1lIGZvciBUZWEnKTtcblx0XHRzaGlwVG8uc2V0QWRkcmVzcygnMTIgTWFpbiBTdHJlZXQnKTtcblx0XHRzaGlwVG8uc2V0Q2l0eSgnUGVjYW4gU3ByaW5ncycpO1xuXHRcdHNoaXBUby5zZXRTdGF0ZSgnVFgnKTtcblx0XHRzaGlwVG8uc2V0WmlwKCc0NDYyOCcpO1xuXHRcdHNoaXBUby5zZXRDb3VudHJ5KCdVU0EnKTtcblx0XG5cdFx0dmFyIGxpbmVJdGVtX2lkMSA9IG5ldyBBcGlDb250cmFjdHMuTGluZUl0ZW1UeXBlKCk7XG5cdFx0bGluZUl0ZW1faWQxLnNldEl0ZW1JZCgnMScpO1xuXHRcdGxpbmVJdGVtX2lkMS5zZXROYW1lKCd2YXNlJyk7XG5cdFx0bGluZUl0ZW1faWQxLnNldERlc2NyaXB0aW9uKCdjYW5uZXMgbG9nbycpO1xuXHRcdGxpbmVJdGVtX2lkMS5zZXRRdWFudGl0eSgnMTgnKTtcblx0XHRsaW5lSXRlbV9pZDEuc2V0VW5pdFByaWNlKCc0NS4wMCcpO1xuXHRcblx0XHR2YXIgbGluZUl0ZW1faWQyID0gbmV3IEFwaUNvbnRyYWN0cy5MaW5lSXRlbVR5cGUoKTtcblx0XHRsaW5lSXRlbV9pZDIuc2V0SXRlbUlkKCcyJyk7XG5cdFx0bGluZUl0ZW1faWQyLnNldE5hbWUoJ3Zhc2UyJyk7XG5cdFx0bGluZUl0ZW1faWQyLnNldERlc2NyaXB0aW9uKCdjYW5uZXMgbG9nbzInKTtcblx0XHRsaW5lSXRlbV9pZDIuc2V0UXVhbnRpdHkoJzI4Jyk7XG5cdFx0bGluZUl0ZW1faWQyLnNldFVuaXRQcmljZSgnMjUuMDAnKTtcblx0XG5cdFx0dmFyIGxpbmVJdGVtTGlzdDphbnkgPSBbXTtcblx0XHRsaW5lSXRlbUxpc3QucHVzaChsaW5lSXRlbV9pZDEpO1xuXHRcdGxpbmVJdGVtTGlzdC5wdXNoKGxpbmVJdGVtX2lkMik7XG5cdFxuXHRcdHZhciBsaW5lSXRlbXMgPSBuZXcgQXBpQ29udHJhY3RzLkFycmF5T2ZMaW5lSXRlbSgpO1xuXHRcdGxpbmVJdGVtcy5zZXRMaW5lSXRlbShsaW5lSXRlbUxpc3QpO1xuXHRcblx0XHR2YXIgdHJhbnNhY3Rpb25SZXF1ZXN0VHlwZSA9IG5ldyBBcGlDb250cmFjdHMuVHJhbnNhY3Rpb25SZXF1ZXN0VHlwZSgpO1xuXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0VHJhbnNhY3Rpb25UeXBlKEFwaUNvbnRyYWN0cy5UcmFuc2FjdGlvblR5cGVFbnVtLkFVVEhDQVBUVVJFVFJBTlNBQ1RJT04pO1xuXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0UGF5bWVudChwYXltZW50VHlwZSk7XG5cdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRBbW91bnQoMTkuMDApO1xuXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0TGluZUl0ZW1zKGxpbmVJdGVtcyk7XG5cdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRPcmRlcihvcmRlckRldGFpbHMpO1xuXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0VGF4KHRheCk7XG5cdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXREdXR5KGR1dHkpO1xuXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0U2hpcHBpbmcoc2hpcHBpbmcpO1xuXHRcdC8vIHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0QmlsbFRvKGJpbGxUbyk7XG5cdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRTaGlwVG8oc2hpcFRvKTtcblx0XG5cdFx0dmFyIGNyZWF0ZVJlcXVlc3QgPSBuZXcgQXBpQ29udHJhY3RzLkNyZWF0ZVRyYW5zYWN0aW9uUmVxdWVzdCgpO1xuXHRcdGNyZWF0ZVJlcXVlc3Quc2V0UmVmSWQoJzEyMzQ1NicpO1xuXHRcdGNyZWF0ZVJlcXVlc3Quc2V0TWVyY2hhbnRBdXRoZW50aWNhdGlvbihtZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZSk7XG5cdFx0Y3JlYXRlUmVxdWVzdC5zZXRUcmFuc2FjdGlvblJlcXVlc3QodHJhbnNhY3Rpb25SZXF1ZXN0VHlwZSk7XG5cdFxuXHRcdC8vcHJldHR5IHByaW50IHJlcXVlc3Rcblx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjcmVhdGVSZXF1ZXN0LmdldEpTT04oKSwgbnVsbCwgMikpO1xuXHRcdFx0XG5cdFx0dmFyIGN0cmwgPSBuZXcgQXBpQ29udHJvbGxlcnMuQ3JlYXRlVHJhbnNhY3Rpb25Db250cm9sbGVyKGNyZWF0ZVJlcXVlc3QuZ2V0SlNPTigpKTtcblx0XG5cdFx0Y3RybC5leGVjdXRlKGZ1bmN0aW9uKCl7XG5cdFxuXHRcdFx0dmFyIGFwaVJlc3BvbnNlID0gY3RybC5nZXRSZXNwb25zZSgpO1xuXHRcblx0XHRcdHZhciByZXNwb25zZSA9IG5ldyBBcGlDb250cmFjdHMuQ3JlYXRlVHJhbnNhY3Rpb25SZXNwb25zZShhcGlSZXNwb25zZSk7XG5cdFxuXHRcdFx0Ly9wcmV0dHkgcHJpbnQgcmVzcG9uc2Vcblx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLCBudWxsLCAyKSk7XG5cdFxuXHRcdFx0aWYocmVzcG9uc2UgIT0gbnVsbCl7XG5cdFx0XHRcdGlmKHJlc3BvbnNlLmdldE1lc3NhZ2VzKCkuZ2V0UmVzdWx0Q29kZSgpID09IEFwaUNvbnRyYWN0cy5NZXNzYWdlVHlwZUVudW0uT0spe1xuXHRcdFx0XHRcdGlmKHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRNZXNzYWdlcygpICE9IG51bGwpe1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBjcmVhdGVkIHRyYW5zYWN0aW9uIHdpdGggVHJhbnNhY3Rpb24gSUQ6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0VHJhbnNJZCgpKTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdSZXNwb25zZSBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldFJlc3BvbnNlQ29kZSgpKTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdNZXNzYWdlIENvZGU6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0TWVzc2FnZXMoKS5nZXRNZXNzYWdlKClbMF0uZ2V0Q29kZSgpKTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdEZXNjcmlwdGlvbjogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRNZXNzYWdlcygpLmdldE1lc3NhZ2UoKVswXS5nZXREZXNjcmlwdGlvbigpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRmFpbGVkIFRyYW5zYWN0aW9uLicpO1xuXHRcdFx0XHRcdFx0aWYocmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpICE9IG51bGwpe1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgQ29kZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKS5nZXRFcnJvcigpWzBdLmdldEVycm9yQ29kZSgpKTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIG1lc3NhZ2U6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkuZ2V0RXJyb3IoKVswXS5nZXRFcnJvclRleHQoKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGYWlsZWQgVHJhbnNhY3Rpb24uICcpO1xuXHRcdFx0XHRcdGlmKHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKSAhPSBudWxsICYmIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKSAhPSBudWxsKXtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpLmdldEVycm9yKClbMF0uZ2V0RXJyb3JDb2RlKCkpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIG1lc3NhZ2U6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkuZ2V0RXJyb3IoKVswXS5nZXRFcnJvclRleHQoKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIENvZGU6ICcgKyByZXNwb25zZS5nZXRNZXNzYWdlcygpLmdldE1lc3NhZ2UoKVswXS5nZXRDb2RlKCkpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIG1lc3NhZ2U6ICcgKyByZXNwb25zZS5nZXRNZXNzYWdlcygpLmdldE1lc3NhZ2UoKVswXS5nZXRUZXh0KCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdOdWxsIFJlc3BvbnNlLicpO1xuXHRcdFx0fVxuXHRcblx0XHR9KTtcblx0fVxuXHRcblx0aWYgKHJlcXVpcmUubWFpbiA9PT0gbW9kdWxlKSB7XG5cdFx0ZGViaXRCYW5rQWNjb3VudChmdW5jdGlvbigpe1xuXHRcdFx0Y29uc29sZS5sb2coJ2RlYml0QmFua0FjY291bnQgY2FsbCBjb21wbGV0ZS4nKTtcblx0XHR9KTtcblx0fVxuXHRkZWJpdEJhbmtBY2NvdW50KClcblx0bW9kdWxlLmV4cG9ydHMuZGViaXRCYW5rQWNjb3VudCA9IGRlYml0QmFua0FjY291bnQ7XG5cblxuXG5cblxuXG4iLCJcbmltcG9ydCAqIGFzIFR3aWxpbyBmcm9tICd0d2lsaW8nXG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52J1xuZG90ZW52LmNvbmZpZygpXG5cblxuXG4vLyBUd2lsaW8gQ29udHJvbCBhbmQgQWNjZXNzIENyZWRlbnRpYWwgXG5jb25zdCBhY2NvdW50U2lkID0gcHJvY2Vzcy5lbnYuVFdJTElPX1NJRDtcbmNvbnN0IGF1dGhUb2tlbiA9IHByb2Nlc3MuZW52LlRXSUxJT19BVVRIS0VZO1xuY29uc3Qgc21zID0gVHdpbGlvKGFjY291bnRTaWQsIGF1dGhUb2tlbilcblxuZXhwb3J0IGNvbnN0IHsgTWVzc2FnaW5nUmVzcG9uc2UgfSA9IFR3aWxpby50d2ltbCBcblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGJvZHk6c3RyaW5nLHRvPzpzdHJpbmdbXXwgYW55KSB7XG4gICAgXG4gICAgdG8ubWFwKGFzeW5jIChpKSA9PiB7XG4gICAgICAgIGF3YWl0IHNtcy5tZXNzYWdlcy5jcmVhdGUoe1xuICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgIGZyb206IHByb2Nlc3MuZW52LlRXSUxJT19QSE9ORSxcbiAgICAgICAgICAgIHNob3J0ZW5VcmxzOiB0cnVlLFxuICAgICAgICAgICAgdG86IGlcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBzZW5kUmVwbHkgPSAoYm9keSA9IFwiVGVzdGluZyB0aGUgYXBpXCIsIHRvPzogYW55KSA9PiB7XG4gICAgX3Bob25lbnVtYmVyLm1hcChhc3luYyAoaSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdfTWVzc2FnZSA9IGF3YWl0IHNtcy5tZXNzYWdlcy5jcmVhdGUoe1xuICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgIGZyb206IHByb2Nlc3MuZW52LlRXSUxJT19QSE9ORT8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvOiBpXG4gICAgICAgIH0pXG4gICAgfSlcblxufVxuXG5cblxuIiwiaW1wb3J0ICogYXMgbXlzcWwgZnJvbSAnbXlzcWwyJztcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5cblxuXG5cblxuY29uc3QgbXlzcWxBY2Nlc3MgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgICBwb3J0OjMzMDYsXG4gICAgdXNlcjpwcm9jZXNzLmVudi5NWVNRTF9VU0VSLFxuICAgIHBhc3N3b3JkOnByb2Nlc3MuZW52Lk1ZU1FMX1BBU1NXT1JELFxuICAgIGRhdGFiYXNlOnByb2Nlc3MuZW52LkRBVEFCQVNFXG59KVxuXG5leHBvcnQgY29uc3QgUXVlcnkgPSAocXVlcnk6c3RyaW5nLHZhbHVlcz86QXJyYXk8c3RyaW5nfG51bWJlcj4pPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFycmF5PGFueT4+KChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgbXlzcWxBY2Nlc3MucXVlcnkocXVlcnksdmFsdWVzLChlcnIscmVzdWx0czphbnkpID0+e1xuICAgICAgICAgICAgaWYoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3Qgdmlld01lc3NhZ2VzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ3NlbGVjdCAqIGZyb20gQ29tbXVuaWNhdGlvbi5Ib21lcGFnZScpO1xuY29uc3QgaW5zZXJ0TWVzc2FnZT0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ29tbXVuaWNhdGlvbi5Ib21lcGFnZSBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB2aWV3TWVzc2FnZXMsXG4gICAgaW5zZXJ0TWVzc2FnZVxuXG5cbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCBnZXRCaWxsaW5nSW5mb3JtYXRpb24gPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDbGllbnRzLlByaW5jaXBsZV9CaWxsaW5nX0luZm9ybWF0aW9uJyk7XG5jb25zdCBpbnNlcnRCaWxsaW5nSW5mb3JtYXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBDbGllbnRzLlByaW5jaXBsZV9CaWxsaW5nX0luZm9ybWF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbmNvbnN0IHVwZGF0ZUJpbGxpbmdJbmZvcm1hdGlvbiA9IGFzeW5jIChpbmZvLGlkKT0+UXVlcnkoJ1VQREFURSBDbGllbnRzLlByaW5jaXBsZV9CaWxsaW5nX0luZm9ybWF0aW9uIFNFVCA/IFdIRVJFIGFkbWluX2lkID0gPycsW2luZm8saWRdKVxuXG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuLy8gY29uc3QgZGVsZXRlTWVzc2FnZXMgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIGNvbnRhY3QgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG4vLyBjb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAoLi4udmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBLQ01fSU5DLmNsaWVudFJlZ2lzdHJhdGlvbiBTRVQgPycsIHZhbHVlcyk7XG4vLyBjb25zdCBpbnNlcnRJbnN0aXR1dGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmluc3RpdHV0aW9uIFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3QgdXBkYXRlTWVzc2FnZXMgPSBhc3luYyAobmV3Q29udGVudDogYW55LCBpZDogYW55KSA9PiBRdWVyeSgnVVBEQVRFIGNvbnRhY3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW25ld0NvbnRlbnQsIGlkXSlcbi8vIGNvbnN0IGFsbFVzZXJzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gVXNlcnMnKTtcbi8vIGNvbnN0IGluc2VydFVzZXJzID0gYXN5bmModXNlciA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRzIFNFVCA/JyAsW3VzZXJdKTtcbi8vIGNvbnN0IGluc2VydFBoeXNpY2FsID0gYXN5bmMocGh5c2ljYWwgOmFueSxjbGllbnRpZDpudW1iZXIgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudF9saWZlc3R5bGUgU0VUID8nICxbcGh5c2ljYWxdKTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5nZXRCaWxsaW5nSW5mb3JtYXRpb24sXG5pbnNlcnRCaWxsaW5nSW5mb3JtYXRpb24sXG51cGRhdGVCaWxsaW5nSW5mb3JtYXRpb25cbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCBnZXRDbGllbnRJbmZvcm1hdGlvbiA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENsaWVudHMuUGVyc29uYWxfSW5mb3JtYXRpb24nKTtcbmNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIENsaWVudHMuUGVyc29uYWxfSW5mb3JtYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuY29uc3QgdXBkYXRlUFJJTkNJUExFID0gYXN5bmMgKGluZm8saWQpPT5RdWVyeSgnVVBEQVRFIENsaWVudHMuUGVyc29uYWxfSW5mb3JtYXRpb24gU0VUID8gV0hFUkUgaWQgPSA/JyxbaW5mbyxpZF0pXG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRDbGllbnRJbmZvcm1hdGlvbixcbiAgICBpbnNlcnRDTElFTlQsXG4gICAgdXBkYXRlUFJJTkNJUExFLFxufSIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycydcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgSG9tZXBhZ2VTZXJ2ZXIgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5JztcbmltcG9ydCBDbGllbnRQb3J0YWwgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuXG5pbXBvcnQgeyBzZW5kTWVzc2FnZSwgTWVzc2FnaW5nUmVzcG9uc2UsIHNlbmRSZXBseSB9IGZyb20gJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG5pbXBvcnQgJy4vUEFZTUVOVFMvYXV0aG9yaXplX2NhcmQnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9Ib21lcGFnZS9jb250YWN0J1xuaW1wb3J0IGNsaWVudCBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnXG5cblxuXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnY29tcGxpZV9mcm9udGVuZCcpKVxuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnNldCgndHJ1c3QgcHJveHknLCB0cnVlKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuXG5cbmNvbnN0IG5ld1VzZSA9IGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICcqJylcbiAgbmV4dCgpXG59KVxuXG5hcHAudXNlKCcvbWVzc2FnZScsY29udGFjdClcbmFwcC51c2UoJy9jbGllbnRfcG9ydGFsJyxjbGllbnQpXG5cblxuYXBwLmdldCgnL3Rlc3QnLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLmpzb24oJ2EnKVxufSlcblxuYXBwLmdldCgnL2RhdGFiYXNlJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgQ2xpZW50UG9ydGFsLmdldENsaWVudEluZm9ybWF0aW9uKClcbiAgcmVzLmpzb24obmV3UmVwbHkpXG4gIGNvbnNvbGUubG9nKG5ld1JlcGx5KVxuXG59KVxuXG5hcHAucG9zdCgnL2RhdGFiYXNlX3Bvc3QnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBIb21lcGFnZVNlcnZlci5pbnNlcnRNZXNzYWdlKClcbiAgcmVzLmpzb24obmV3UmVwbHkpXG4gIGNvbnNvbGUubG9nKG5ld1JlcGx5KVxuXG59KVxuXG5hcHAucG9zdCgnL3R3aWxpbycsIChyZXEsIHJlcykgPT4ge1xuICAvLyBzZW5kTWVzc2FnZSgpO1xuICByZXMuanNvbihcIm9rXCIpXG59KVxuXG5hcHAucG9zdCgnL3NtcycsICAocmVxLCByZXMpID0+IHtcblxuICBjb25zdCB0d2ltbCA9IG5ldyBNZXNzYWdpbmdSZXNwb25zZSgpO1xuXG4gIHR3aW1sLm1lc3NhZ2UoJ1RoZSBSb2JvdHMgYXJlIGNvbWluZyEgSGVhZCBmb3IgdGhlIGhpbGxzIScpO1xuICBjb25zb2xlLmxvZyhyZXEuYm9keS5Cb2R5KVxuXG4gIHJlcy5oZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94bWwnKVxuICByZXMuc3RhdHVzKDIwMCkuc2VuZCh0d2ltbC50b1N0cmluZygpKVxufVxuXG5cblxuICAvLyByZXMudHlwZSgndGV4dC94bWwnKS5zZW5kKHR3aW1sLnRvU3RyaW5nKCkpO1xuXG4pO1xuXG5hcHAucG9zdCgnL3Rlc3RpbmdfYmFja2VuZCcsICBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBkYXRhYmFzZV9xdWVyeS5pbnNlcnRDTElFTlQocmVxLmJvZHkpXG4gIHNlbmRNZXNzYWdlKGAke3JlcS5ib2R5LmZpcnN0X25hbWUudG9VcHBlckNhc2UoKX0gV2UgYXQgS2NtIEluYyBhcmUgZXhjaXRlZC5gLHJlcS5ib2R5LnBob25lX251bWJlcilcbiAgY29uc29sZS5sb2cobmV3UmVwbHkpIFxuY29uc29sZS5sb2cocmVxLmJvZHkpXG4gIHJlcy5qc29uKG5ld1JlcGx5KVxufSlcblxuY29uc29sZS5sb2coTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjk5OTk5OSkrMTExMTExKVxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODBcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7UE9SVH0uLi5gKVxufSlcblxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF1dGhvcml6ZW5ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnYvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXlzcWwyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR3aWxpb1wiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fO1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiIiwiLy8gbW9kdWxlIGNhY2hlIGFyZSB1c2VkIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0JBQ0tFTkQvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=