/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
// var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
// 	merchantAuthenticationType.setName(String(process.env.AUTHORIZE_NET_API_LOGIN_ID));
// 	merchantAuthenticationType.setTransactionKey(String(process.env.AUTHORIZE_NET_TRANSACTION_KEY));
// var request = new ApiContracts.AuthenticateTestRequest();
// request.setMerchantAuthentication(merchantAuthenticationType);
// function authorizeCreditCard() {
// 	var creditCard = new ApiContracts.CreditCardType();
// 	creditCard.setCardNumber('4242424242424242');
// 	creditCard.setExpirationDate('0829');
// 	creditCard.setCardCode('999');
// 	var paymentType = new ApiContracts.PaymentType();
// 	paymentType.setCreditCard(creditCard);
// 	var orderDetails = new ApiContracts.OrderType();
// 	orderDetails.setInvoiceNumber('INV-12345');
// 	orderDetails.setDescription('Product Description');
// 	var tax = new ApiContracts.ExtendedAmountType();
// 	tax.setAmount('4.26');
// 	tax.setName('level2 tax name');
// 	tax.setDescription('level2 tax');
// 	var duty = new ApiContracts.ExtendedAmountType();
// 	duty.setAmount('8.55');
// 	duty.setName('duty name');
// 	duty.setDescription('duty description');
// 	var shipping = new ApiContracts.ExtendedAmountType();
// 	shipping.setAmount('8.55');
// 	shipping.setName('shipping name');
// 	shipping.setDescription('shipping description');
// 	var billTo = new ApiContracts.CustomerAddressType();
// 	billTo.setFirstName('Kenneth');
// 	billTo.setLastName('Cunningham');
// 	billTo.setCompany('Souveniropolis');
// 	billTo.setAddress('14 Main Street');
// 	billTo.setCity('Pecan Springs');
// 	billTo.setState('TX');
// 	billTo.setZip('44628');
// 	billTo.setCountry('USA');
// 	var shipTo = new ApiContracts.CustomerAddressType();
// 	shipTo.setFirstName('China');
// 	shipTo.setLastName('Bayles');
// 	shipTo.setCompany('Thyme for Tea');
// 	shipTo.setAddress('12 Main Street');
// 	shipTo.setCity('Pecan Springs');
// 	shipTo.setState('TX');
// 	shipTo.setZip('44628');
// 	shipTo.setCountry('USA');
// 	var transactionSettings = new ApiContracts.ArrayOfSetting();
// 	var transactionRequestType = new ApiContracts.TransactionRequestType();
// 	transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHONLYTRANSACTION);
// 	transactionRequestType.setPayment(paymentType);
// 	transactionRequestType.setOrder(orderDetails);
// 	transactionRequestType.setTax(tax);
// 	transactionRequestType.setDuty(duty);
// 	transactionRequestType.setShipping(shipping);
// 	transactionRequestType.setBillTo(billTo);
// 	transactionRequestType.setShipTo(shipTo);
// 	transactionRequestType.setTransactionSettings(transactionSettings);
// 	var createRequest = new ApiContracts.CreateTransactionRequest();
// 	createRequest.setMerchantAuthentication(merchantAuthenticationType);
// 	createRequest.setTransactionRequest(transactionRequestType);
// 	//pretty print request
// 	console.log(JSON.stringify(createRequest.getJSON(), null, 2));
// 	var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());
// 	ctrl.execute(function(){
// 		var apiResponse = ctrl.getResponse();
// 		var response = new ApiContracts.CreateTransactionResponse(apiResponse);
// 		//pretty print response
// 		console.log(JSON.stringify(response, null, 2));
// 		if(response != null){
// 			if(response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK){
// 				if(response.getTransactionResponse().getMessages() != null){
// 					console.log('Successfully created transaction with Transaction ID: ' + response.getTransactionResponse().getTransId());
// 					console.log('Response Code: ' + response.getTransactionResponse().getResponseCode());
// 					console.log('Message Code: ' + response.getTransactionResponse().getMessages().getMessage()[0].getCode());
// 					console.log('Description: ' + response.getTransactionResponse().getMessages().getMessage()[0].getDescription());
//                     console.log(response)
// 				}
// 				else {
// 					console.log('Failed Transaction.');
// 					if(response.getTransactionResponse().getErrors() != null){
// 						console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
// 						console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
// 					}
// 				}
// 			}
// 			else {
// 				console.log('Failed Transaction.');
// 				if(response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null){
// 					console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
// 					console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
// 				}
// 				else {
// 					console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
// 					console.log('Error message: ' + response.getMessages().getMessage()[0].getText());
// 				}
// 			}
// 		}
// 		else {
// 			console.log('Null Response.');
// 		}
// 	});
// }
// authorizeCreditCard();
// module.exports.authorizeCreditCard = authorizeCreditCard;


/***/ }),

/***/ "./src/BACKEND/SMS/send_sms.ts":
/*!*************************************!*\
  !*** ./src/BACKEND/SMS/send_sms.ts ***!
  \*************************************/
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
exports.sendReply = exports.sendMessage = exports.MessagingResponse = void 0;
var Twilio = __webpack_require__(/*! twilio */ "twilio");
var dotenv = __webpack_require__(/*! dotenv */ "dotenv");
dotenv.config();
var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_AUTHKEY;
var sms = Twilio(accountSid, authToken);
var _phonenumber = ['4047400093'];
exports.MessagingResponse = Twilio.twiml.MessagingResponse;
var sendMessage = function (body) {
    if (body === void 0) { body = "😀 Hello Guys, I know we've been trying to solve our text based marketing solutions, so I'd like to recommend using the program I'm creating for us. Of course their will have to be some testing I'd love to move on it!"; }
    _phonenumber.map(function (i) { return __awaiter(void 0, void 0, void 0, function () {
        var new_Message;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, sms.messages.create({
                        body: body,
                        from: (_a = process.env.TWILIO_PHONE) === null || _a === void 0 ? void 0 : _a.toString(),
                        shortenUrls: true,
                        mediaUrl: ['https://images.getbento.com/accounts/aa1874b477180c81cde25c4072452778/media/0OWuQwjxQK67WRDLD20V_Veggie-1.jpg?w=1200&fit=max&auto=compress,format'],
                        to: i
                    })];
                case 1:
                    new_Message = _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
};
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

/***/ "./src/BACKEND/SQL/Conection.ts":
/*!**************************************!*\
  !*** ./src/BACKEND/SQL/Conection.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Query = void 0;
var mysql = __webpack_require__(/*! mysql2 */ "mysql2");
__webpack_require__(/*! dotenv/config */ "dotenv/config");
var mysqlAccess = mysql.createPool({
    port: 3306,
    user: 'root',
    password: "4#MiSg!4",
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

/***/ "./src/BACKEND/SQL/Query.ts/Homepage_Query.ts":
/*!****************************************************!*\
  !*** ./src/BACKEND/SQL/Query.ts/Homepage_Query.ts ***!
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
var Conection_1 = __webpack_require__(/*! ../Conection */ "./src/BACKEND/SQL/Conection.ts");
var allMessages = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('select * from Communication.Homepage')];
}); }); };
var insertCLIENT = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
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
    allMessages: allMessages,
    // singleChirp,
    // deleteMessages,
    insertCLIENT: insertCLIENT
    // updateMessages,
    // insertInstitution
    // allUsers,
    // insertUsers,
    // insertPhysical
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
var Homepage_Query_1 = __webpack_require__(/*! ./SQL/Query.ts/Homepage_Query */ "./src/BACKEND/SQL/Query.ts/Homepage_Query.ts");
var send_sms_1 = __webpack_require__(/*! ./SMS/send_sms */ "./src/BACKEND/SMS/send_sms.ts");
__webpack_require__(/*! ./PAYMENTS/authorize_card */ "./src/BACKEND/PAYMENTS/authorize_card.ts");
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
app.get('/test', function (req, res) {
    res.json('a');
});
app.get('/database', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Homepage_Query_1.default.allMessages()];
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
            case 0: return [4 /*yield*/, Homepage_Query_1.default.insertCLIENT(req.body)];
            case 1:
                newReply = _a.sent();
                res.json(newReply);
                console.log(newReply);
                return [2 /*return*/];
        }
    });
}); });
app.post('/twilio', function (req, res) {
    (0, send_sms_1.sendMessage)();
    res.json("ok");
});
app.post('/sms', function (req, res) {
    var twiml = new send_sms_1.MessagingResponse();
    twiml.message('The Robots are coming! Head for the hills!');
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}
// res.type('text/xml').send(twiml.toString());
);
var PORT = process.env.PORT || 80;
app.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT, "..."));
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNLRU5EL1BBWU1FTlRTL2F1dGhvcml6ZV9jYXJkLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1NNUy9zZW5kX3Ntcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9TUUwvQ29uZWN0aW9uLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1NRTC9RdWVyeS50cy9Ib21lcGFnZV9RdWVyeS50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9pbmRleC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnYvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcIm15c3FsMlwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcInR3aWxpb1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgQVVUSE9SSVpFTkVUIGZyb20gJ2F1dGhvcml6ZW5ldCc7XG4vLyBpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG4vLyBpbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52JyBcbi8vIGRvdGVudi5jb25maWcoKVxuXG4vLyBsZXQgQXBpQ29udHJhY3RzID0gQVVUSE9SSVpFTkVULkFQSUNvbnRyYWN0cztcbi8vIGxldCBBcGlDb250cm9sbGVycyA9IEFVVEhPUklaRU5FVC5BUElDb250cm9sbGVycztcbi8vIGxldCBDb25zdGFudHMgPSBBVVRIT1JJWkVORVQuQ29uc3RhbnRzXG5cbi8vIHZhciBtZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZSA9IG5ldyBBcGlDb250cmFjdHMuTWVyY2hhbnRBdXRoZW50aWNhdGlvblR5cGUoKTtcbi8vIFx0bWVyY2hhbnRBdXRoZW50aWNhdGlvblR5cGUuc2V0TmFtZShTdHJpbmcocHJvY2Vzcy5lbnYuQVVUSE9SSVpFX05FVF9BUElfTE9HSU5fSUQpKTtcbi8vIFx0bWVyY2hhbnRBdXRoZW50aWNhdGlvblR5cGUuc2V0VHJhbnNhY3Rpb25LZXkoU3RyaW5nKHByb2Nlc3MuZW52LkFVVEhPUklaRV9ORVRfVFJBTlNBQ1RJT05fS0VZKSk7XG5cblxuLy8gdmFyIHJlcXVlc3QgPSBuZXcgQXBpQ29udHJhY3RzLkF1dGhlbnRpY2F0ZVRlc3RSZXF1ZXN0KCk7XG4vLyByZXF1ZXN0LnNldE1lcmNoYW50QXV0aGVudGljYXRpb24obWVyY2hhbnRBdXRoZW50aWNhdGlvblR5cGUpO1xuXG5cblxuLy8gZnVuY3Rpb24gYXV0aG9yaXplQ3JlZGl0Q2FyZCgpIHtcblx0XG5cbi8vIFx0dmFyIGNyZWRpdENhcmQgPSBuZXcgQXBpQ29udHJhY3RzLkNyZWRpdENhcmRUeXBlKCk7XG4vLyBcdGNyZWRpdENhcmQuc2V0Q2FyZE51bWJlcignNDI0MjQyNDI0MjQyNDI0MicpO1xuLy8gXHRjcmVkaXRDYXJkLnNldEV4cGlyYXRpb25EYXRlKCcwODI5Jyk7XG4vLyBcdGNyZWRpdENhcmQuc2V0Q2FyZENvZGUoJzk5OScpO1xuXG4vLyBcdHZhciBwYXltZW50VHlwZSA9IG5ldyBBcGlDb250cmFjdHMuUGF5bWVudFR5cGUoKTtcbi8vIFx0cGF5bWVudFR5cGUuc2V0Q3JlZGl0Q2FyZChjcmVkaXRDYXJkKTtcblxuLy8gXHR2YXIgb3JkZXJEZXRhaWxzID0gbmV3IEFwaUNvbnRyYWN0cy5PcmRlclR5cGUoKTtcbi8vIFx0b3JkZXJEZXRhaWxzLnNldEludm9pY2VOdW1iZXIoJ0lOVi0xMjM0NScpO1xuLy8gXHRvcmRlckRldGFpbHMuc2V0RGVzY3JpcHRpb24oJ1Byb2R1Y3QgRGVzY3JpcHRpb24nKTtcblxuLy8gXHR2YXIgdGF4ID0gbmV3IEFwaUNvbnRyYWN0cy5FeHRlbmRlZEFtb3VudFR5cGUoKTtcbi8vIFx0dGF4LnNldEFtb3VudCgnNC4yNicpO1xuLy8gXHR0YXguc2V0TmFtZSgnbGV2ZWwyIHRheCBuYW1lJyk7XG4vLyBcdHRheC5zZXREZXNjcmlwdGlvbignbGV2ZWwyIHRheCcpO1xuXG4vLyBcdHZhciBkdXR5ID0gbmV3IEFwaUNvbnRyYWN0cy5FeHRlbmRlZEFtb3VudFR5cGUoKTtcbi8vIFx0ZHV0eS5zZXRBbW91bnQoJzguNTUnKTtcbi8vIFx0ZHV0eS5zZXROYW1lKCdkdXR5IG5hbWUnKTtcbi8vIFx0ZHV0eS5zZXREZXNjcmlwdGlvbignZHV0eSBkZXNjcmlwdGlvbicpO1xuXG4vLyBcdHZhciBzaGlwcGluZyA9IG5ldyBBcGlDb250cmFjdHMuRXh0ZW5kZWRBbW91bnRUeXBlKCk7XG4vLyBcdHNoaXBwaW5nLnNldEFtb3VudCgnOC41NScpO1xuLy8gXHRzaGlwcGluZy5zZXROYW1lKCdzaGlwcGluZyBuYW1lJyk7XG4vLyBcdHNoaXBwaW5nLnNldERlc2NyaXB0aW9uKCdzaGlwcGluZyBkZXNjcmlwdGlvbicpO1xuXG4vLyBcdHZhciBiaWxsVG8gPSBuZXcgQXBpQ29udHJhY3RzLkN1c3RvbWVyQWRkcmVzc1R5cGUoKTtcbi8vIFx0YmlsbFRvLnNldEZpcnN0TmFtZSgnS2VubmV0aCcpO1xuLy8gXHRiaWxsVG8uc2V0TGFzdE5hbWUoJ0N1bm5pbmdoYW0nKTtcbi8vIFx0YmlsbFRvLnNldENvbXBhbnkoJ1NvdXZlbmlyb3BvbGlzJyk7XG4vLyBcdGJpbGxUby5zZXRBZGRyZXNzKCcxNCBNYWluIFN0cmVldCcpO1xuLy8gXHRiaWxsVG8uc2V0Q2l0eSgnUGVjYW4gU3ByaW5ncycpO1xuLy8gXHRiaWxsVG8uc2V0U3RhdGUoJ1RYJyk7XG4vLyBcdGJpbGxUby5zZXRaaXAoJzQ0NjI4Jyk7XG4vLyBcdGJpbGxUby5zZXRDb3VudHJ5KCdVU0EnKTtcblxuLy8gXHR2YXIgc2hpcFRvID0gbmV3IEFwaUNvbnRyYWN0cy5DdXN0b21lckFkZHJlc3NUeXBlKCk7XG4vLyBcdHNoaXBUby5zZXRGaXJzdE5hbWUoJ0NoaW5hJyk7XG4vLyBcdHNoaXBUby5zZXRMYXN0TmFtZSgnQmF5bGVzJyk7XG4vLyBcdHNoaXBUby5zZXRDb21wYW55KCdUaHltZSBmb3IgVGVhJyk7XG4vLyBcdHNoaXBUby5zZXRBZGRyZXNzKCcxMiBNYWluIFN0cmVldCcpO1xuLy8gXHRzaGlwVG8uc2V0Q2l0eSgnUGVjYW4gU3ByaW5ncycpO1xuLy8gXHRzaGlwVG8uc2V0U3RhdGUoJ1RYJyk7XG4vLyBcdHNoaXBUby5zZXRaaXAoJzQ0NjI4Jyk7XG4vLyBcdHNoaXBUby5zZXRDb3VudHJ5KCdVU0EnKTtcblxuXHRcblxuXG5cblxuLy8gXHR2YXIgdHJhbnNhY3Rpb25TZXR0aW5ncyA9IG5ldyBBcGlDb250cmFjdHMuQXJyYXlPZlNldHRpbmcoKTtcblxuLy8gXHR2YXIgdHJhbnNhY3Rpb25SZXF1ZXN0VHlwZSA9IG5ldyBBcGlDb250cmFjdHMuVHJhbnNhY3Rpb25SZXF1ZXN0VHlwZSgpO1xuLy8gXHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldFRyYW5zYWN0aW9uVHlwZShBcGlDb250cmFjdHMuVHJhbnNhY3Rpb25UeXBlRW51bS5BVVRIT05MWVRSQU5TQUNUSU9OKTtcbi8vIFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRQYXltZW50KHBheW1lbnRUeXBlKTtcblx0XG4vLyBcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0T3JkZXIob3JkZXJEZXRhaWxzKTtcbi8vIFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRUYXgodGF4KTtcbi8vIFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXREdXR5KGR1dHkpO1xuLy8gXHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldFNoaXBwaW5nKHNoaXBwaW5nKTtcbi8vIFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRCaWxsVG8oYmlsbFRvKTtcbi8vIFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRTaGlwVG8oc2hpcFRvKTtcbi8vIFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRUcmFuc2FjdGlvblNldHRpbmdzKHRyYW5zYWN0aW9uU2V0dGluZ3MpO1xuXG4vLyBcdHZhciBjcmVhdGVSZXF1ZXN0ID0gbmV3IEFwaUNvbnRyYWN0cy5DcmVhdGVUcmFuc2FjdGlvblJlcXVlc3QoKTtcbi8vIFx0Y3JlYXRlUmVxdWVzdC5zZXRNZXJjaGFudEF1dGhlbnRpY2F0aW9uKG1lcmNoYW50QXV0aGVudGljYXRpb25UeXBlKTtcbi8vIFx0Y3JlYXRlUmVxdWVzdC5zZXRUcmFuc2FjdGlvblJlcXVlc3QodHJhbnNhY3Rpb25SZXF1ZXN0VHlwZSk7XG5cbi8vIFx0Ly9wcmV0dHkgcHJpbnQgcmVxdWVzdFxuLy8gXHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjcmVhdGVSZXF1ZXN0LmdldEpTT04oKSwgbnVsbCwgMikpO1xuXHRcdFxuLy8gXHR2YXIgY3RybCA9IG5ldyBBcGlDb250cm9sbGVycy5DcmVhdGVUcmFuc2FjdGlvbkNvbnRyb2xsZXIoY3JlYXRlUmVxdWVzdC5nZXRKU09OKCkpO1xuXG4vLyBcdGN0cmwuZXhlY3V0ZShmdW5jdGlvbigpe1xuXG4vLyBcdFx0dmFyIGFwaVJlc3BvbnNlID0gY3RybC5nZXRSZXNwb25zZSgpO1xuXG4vLyBcdFx0dmFyIHJlc3BvbnNlID0gbmV3IEFwaUNvbnRyYWN0cy5DcmVhdGVUcmFuc2FjdGlvblJlc3BvbnNlKGFwaVJlc3BvbnNlKTtcblxuLy8gXHRcdC8vcHJldHR5IHByaW50IHJlc3BvbnNlXG4vLyBcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UsIG51bGwsIDIpKTtcblxuLy8gXHRcdGlmKHJlc3BvbnNlICE9IG51bGwpe1xuLy8gXHRcdFx0aWYocmVzcG9uc2UuZ2V0TWVzc2FnZXMoKS5nZXRSZXN1bHRDb2RlKCkgPT0gQXBpQ29udHJhY3RzLk1lc3NhZ2VUeXBlRW51bS5PSyl7XG4vLyBcdFx0XHRcdGlmKHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRNZXNzYWdlcygpICE9IG51bGwpe1xuLy8gXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgY3JlYXRlZCB0cmFuc2FjdGlvbiB3aXRoIFRyYW5zYWN0aW9uIElEOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldFRyYW5zSWQoKSk7XG4vLyBcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1Jlc3BvbnNlIENvZGU6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0UmVzcG9uc2VDb2RlKCkpO1xuLy8gXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdNZXNzYWdlIENvZGU6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0TWVzc2FnZXMoKS5nZXRNZXNzYWdlKClbMF0uZ2V0Q29kZSgpKTtcbi8vIFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRGVzY3JpcHRpb246ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0TWVzc2FnZXMoKS5nZXRNZXNzYWdlKClbMF0uZ2V0RGVzY3JpcHRpb24oKSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHRcdGVsc2Uge1xuLy8gXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGYWlsZWQgVHJhbnNhY3Rpb24uJyk7XG4vLyBcdFx0XHRcdFx0aWYocmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpICE9IG51bGwpe1xuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIENvZGU6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkuZ2V0RXJyb3IoKVswXS5nZXRFcnJvckNvZGUoKSk7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgbWVzc2FnZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKS5nZXRFcnJvcigpWzBdLmdldEVycm9yVGV4dCgpKTtcbi8vIFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdH1cbi8vIFx0XHRcdGVsc2Uge1xuLy8gXHRcdFx0XHRjb25zb2xlLmxvZygnRmFpbGVkIFRyYW5zYWN0aW9uLicpO1xuLy8gXHRcdFx0XHRpZihyZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkgIT0gbnVsbCAmJiByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkgIT0gbnVsbCl7XG5cdFx0XHRcdFxuLy8gXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpLmdldEVycm9yKClbMF0uZ2V0RXJyb3JDb2RlKCkpO1xuLy8gXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBtZXNzYWdlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpLmdldEVycm9yKClbMF0uZ2V0RXJyb3JUZXh0KCkpO1xuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHRcdGVsc2Uge1xuLy8gXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0TWVzc2FnZXMoKS5nZXRNZXNzYWdlKClbMF0uZ2V0Q29kZSgpKTtcbi8vIFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgbWVzc2FnZTogJyArIHJlc3BvbnNlLmdldE1lc3NhZ2VzKCkuZ2V0TWVzc2FnZSgpWzBdLmdldFRleHQoKSk7XG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdH1cbi8vIFx0XHR9XG4vLyBcdFx0ZWxzZSB7XG4vLyBcdFx0XHRjb25zb2xlLmxvZygnTnVsbCBSZXNwb25zZS4nKTtcblxuLy8gXHRcdH1cblxuLy8gXHR9KTtcbi8vIH1cblxuLy8gYXV0aG9yaXplQ3JlZGl0Q2FyZCgpO1xuXG5cbi8vIG1vZHVsZS5leHBvcnRzLmF1dGhvcml6ZUNyZWRpdENhcmQgPSBhdXRob3JpemVDcmVkaXRDYXJkO1xuXG5cblxuXG4iLCJcbmltcG9ydCAqIGFzIFR3aWxpbyBmcm9tICd0d2lsaW8nXG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52J1xuZG90ZW52LmNvbmZpZygpXG5cbmNvbnN0IGFjY291bnRTaWQgPSBwcm9jZXNzLmVudi5UV0lMSU9fU0lEO1xuY29uc3QgYXV0aFRva2VuID0gcHJvY2Vzcy5lbnYuVFdJTElPX0FVVEhLRVk7XG5jb25zdCBzbXMgPSBUd2lsaW8oYWNjb3VudFNpZCwgYXV0aFRva2VuKVxuY29uc3QgX3Bob25lbnVtYmVyID0gWyc0MDQ3NDAwMDkzJ11cblxuXG5leHBvcnQgY29uc3QgeyBNZXNzYWdpbmdSZXNwb25zZSB9ID0gVHdpbGlvLnR3aW1sXG5cblxuZXhwb3J0IGNvbnN0IHNlbmRNZXNzYWdlID0gKGJvZHkgPSBcIvCfmIAgSGVsbG8gR3V5cywgSSBrbm93IHdlJ3ZlIGJlZW4gdHJ5aW5nIHRvIHNvbHZlIG91ciB0ZXh0IGJhc2VkIG1hcmtldGluZyBzb2x1dGlvbnMsIHNvIEknZCBsaWtlIHRvIHJlY29tbWVuZCB1c2luZyB0aGUgcHJvZ3JhbSBJJ20gY3JlYXRpbmcgZm9yIHVzLiBPZiBjb3Vyc2UgdGhlaXIgd2lsbCBoYXZlIHRvIGJlIHNvbWUgdGVzdGluZyBJJ2QgbG92ZSB0byBtb3ZlIG9uIGl0IVwiXG4sICkgPT4ge1xuX3Bob25lbnVtYmVyLm1hcChhc3luYyAoaSk9PntcbiAgICBjb25zdCBuZXdfTWVzc2FnZSA9IGF3YWl0IHNtcy5tZXNzYWdlcy5jcmVhdGUoe1xuICAgICAgICBib2R5OmJvZHksXG4gICAgICAgIGZyb206IHByb2Nlc3MuZW52LlRXSUxJT19QSE9ORT8udG9TdHJpbmcoKSxcbiAgICAgICAgc2hvcnRlblVybHM6IHRydWUsXG4gICAgICAgIG1lZGlhVXJsOiBbJ2h0dHBzOi8vaW1hZ2VzLmdldGJlbnRvLmNvbS9hY2NvdW50cy9hYTE4NzRiNDc3MTgwYzgxY2RlMjVjNDA3MjQ1Mjc3OC9tZWRpYS8wT1d1UXdqeFFLNjdXUkRMRDIwVl9WZWdnaWUtMS5qcGc/dz0xMjAwJmZpdD1tYXgmYXV0bz1jb21wcmVzcyxmb3JtYXQnXSxcbiAgICAgICAgdG86IGlcbiAgICB9KVxufSlcbiBcblxufVxuXG5leHBvcnQgY29uc3Qgc2VuZFJlcGx5ID0gKGJvZHkgPSBcIlRlc3RpbmcgdGhlIGFwaVwiLHRvPzphbnkgKSA9PiB7XG4gICAgX3Bob25lbnVtYmVyLm1hcChhc3luYyAoaSk9PntcbiAgICAgICAgY29uc3QgbmV3X01lc3NhZ2UgPSBhd2FpdCBzbXMubWVzc2FnZXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGJvZHk6Ym9keSxcbiAgICAgICAgICAgIGZyb206IHByb2Nlc3MuZW52LlRXSUxJT19QSE9ORT8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvOiBpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICAgXG4gICAgXG4gICAgfVxuICAgIFxuXG5cblxuIiwiaW1wb3J0ICogYXMgbXlzcWwgZnJvbSAnbXlzcWwyJztcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5cblxuXG5cblxuY29uc3QgbXlzcWxBY2Nlc3MgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgICBwb3J0OjMzMDYsXG4gICAgdXNlcjoncm9vdCcsXG4gICAgcGFzc3dvcmQ6XCI0I01pU2chNFwiLFxuICAgIGRhdGFiYXNlOnByb2Nlc3MuZW52LkRBVEFCQVNFXG59KVxuXG5leHBvcnQgY29uc3QgUXVlcnkgPSAocXVlcnk6c3RyaW5nLHZhbHVlcz86QXJyYXk8c3RyaW5nfG51bWJlcj4pPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFycmF5PGFueT4+KChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgbXlzcWxBY2Nlc3MucXVlcnkocXVlcnksdmFsdWVzLChlcnIscmVzdWx0czphbnkpID0+e1xuICAgICAgICAgICAgaWYoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgYWxsTWVzc2FnZXMgPSBhc3luYyAoKSA9PiBRdWVyeSgnc2VsZWN0ICogZnJvbSBDb21tdW5pY2F0aW9uLkhvbWVwYWdlJyk7XG5jb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBDb21tdW5pY2F0aW9uLkhvbWVwYWdlIFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbi8vIGNvbnN0IGRlbGV0ZU1lc3NhZ2VzID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsIFtpZF0pO1xuLy8gY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gS0NNX0lOQy5jbGllbnRSZWdpc3RyYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuLy8gY29uc3QgaW5zZXJ0SW5zdGl0dXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5pbnN0aXR1dGlvbiBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6IGFueSwgaWQ6IGFueSkgPT4gUXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LCBpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFsbE1lc3NhZ2VzLFxuICAgIC8vIHNpbmdsZUNoaXJwLFxuICAgIC8vIGRlbGV0ZU1lc3NhZ2VzLFxuICAgIGluc2VydENMSUVOVFxuICAgIC8vIHVwZGF0ZU1lc3NhZ2VzLFxuICAgIC8vIGluc2VydEluc3RpdHV0aW9uXG4gICAgLy8gYWxsVXNlcnMsXG4gICAgLy8gaW5zZXJ0VXNlcnMsXG4gICAgLy8gaW5zZXJ0UGh5c2ljYWxcblxufSIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycydcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgZGF0YWJhc2VfcXVlcnkgZnJvbSAnLi9TUUwvUXVlcnkudHMvSG9tZXBhZ2VfUXVlcnknO1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UsIE1lc3NhZ2luZ1Jlc3BvbnNlLCBzZW5kUmVwbHkgfSBmcm9tICcuL1NNUy9zZW5kX3Ntcyc7XG5pbXBvcnQgJy4vUEFZTUVOVFMvYXV0aG9yaXplX2NhcmQnXG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ2NvbXBsaWVfZnJvbnRlbmQnKSlcbmFwcC51c2UoY29ycygpKVxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC5zZXQoJ3RydXN0IHByb3h5JywgdHJ1ZSlcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcblxuXG5cbmNvbnN0IG5ld1VzZSA9IGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICcqJylcbiAgbmV4dCgpXG59KVxuXG5hcHAuZ2V0KCcvdGVzdCcsIChyZXEsIHJlcykgPT4ge1xuICByZXMuanNvbignYScpXG59KVxuXG5hcHAuZ2V0KCcvZGF0YWJhc2UnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBkYXRhYmFzZV9xdWVyeS5hbGxNZXNzYWdlcygpXG4gIHJlcy5qc29uKG5ld1JlcGx5KVxuICBjb25zb2xlLmxvZyhuZXdSZXBseSlcblxufSlcblxuYXBwLnBvc3QoJy9kYXRhYmFzZV9wb3N0JywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgZGF0YWJhc2VfcXVlcnkuaW5zZXJ0Q0xJRU5UKHJlcS5ib2R5KVxuICByZXMuanNvbihuZXdSZXBseSlcbiAgY29uc29sZS5sb2cobmV3UmVwbHkpXG5cbn0pXG5cbmFwcC5wb3N0KCcvdHdpbGlvJywgKHJlcSwgcmVzKSA9PiB7XG4gIHNlbmRNZXNzYWdlKClcbiAgcmVzLmpzb24oXCJva1wiKVxufSlcblxuYXBwLnBvc3QoJy9zbXMnLCAgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHR3aW1sID0gbmV3IE1lc3NhZ2luZ1Jlc3BvbnNlKCk7XG4gdHdpbWwubWVzc2FnZSgnVGhlIFJvYm90cyBhcmUgY29taW5nISBIZWFkIGZvciB0aGUgaGlsbHMhJyk7XG5cbnJlcy53cml0ZUhlYWQoMjAwLCB7J0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3htbCd9KTtcbiAgcmVzLmVuZCh0d2ltbC50b1N0cmluZygpKTtcblxufVxuXG5cbiAgLy8gcmVzLnR5cGUoJ3RleHQveG1sJykuc2VuZCh0d2ltbC50b1N0cmluZygpKTtcblxuKTtcblxuXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MFxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtQT1JUfS4uLmApXG59KVxuXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm15c3FsMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0d2lsaW9cIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL0JBQ0tFTkQvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=