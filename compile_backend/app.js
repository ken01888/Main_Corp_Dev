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
var router = express.Router();
router.post('/client_message', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Homepage_Query_1.default.insertMessage(req.body)];
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
app.use('/client_portal_services', ClientServiceRequest_1.default);
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
console.log(Math.floor(Math.random() * 999999) + 111111);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL0NsaWVudEJpbGxpbmcudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9DbGllbnRQb3J0YWwvQ2xpZW50U2VydmljZVJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvSG9tZXBhZ2UvY29udGFjdC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9QQVlNRU5UUy9hdXRob3JpemVfY2FyZC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU01TL3NlbmRfc21zLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvQ29uZWN0aW9uLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvSG9tZXBhZ2VfUXVlcnkudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50QmlsbGluZ0RldGFpbHMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL05vdGFyeV9TZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9pbmRleC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnYvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcIm15c3FsMlwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcInR3aWxpb1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGNsaWVudF9iaWxsaW5nX3F1ZXJ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudEJpbGxpbmdEZXRhaWxzJztcblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLmdldCgnL2dldFByaW5jaXBsZUJpbGxpbmdJbmZvcm1hdGlvbi86aWQ/JywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBjbGllbnRfYmlsbGluZ19xdWVyeS5nZXRCaWxsaW5nSW5mb3JtYXRpb24oKVxuICAgIGNvbnN0IGNsaWVudFByb2ZpbGVSZXBseSA9IGF3YWl0IE9iamVjdC5lbnRyaWVzKG5ld1JlcGx5WzBdKS5zcGxpY2UoMiw1KVxuICAgIHJlcy5qc29uKGNsaWVudFByb2ZpbGVSZXBseSlcbiAgIFxufSk7XG5cbnJvdXRlci5wdXQoJy91cGRhdGVQcmluY2lwbGVCaWxsaW5nSW5mb3JtYXRpb24vOmlkPycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlcSlcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IGNsaWVudF9iaWxsaW5nX3F1ZXJ5LnVwZGF0ZUJpbGxpbmdJbmZvcm1hdGlvbihyZXEuYm9keSxyZXEucGFyYW1zLmlkKVxuICAgIGNvbnNvbGUubG9nKG5ld1JlcGx5KVxuICAgIHJlcy5qc29uKCdoZWxsbycpXG59KTtcblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGNsaWVudF9hZG1pbl9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIuZ2V0KCcvZ2V0UHJpbmNpcGxlSW5mb3JtYXRpb24vPzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgY2xpZW50X2FkbWluX3F1ZXJ5LmdldENsaWVudEluZm9ybWF0aW9uKClcbiAgICBjb25zdCBjbGllbnRQcm9maWxlUmVwbHkgPSBhd2FpdCBPYmplY3QuZW50cmllcyhuZXdSZXBseVswXSkuc3BsaWNlKDEsOSlcbiAgICByZXMuanNvbihjbGllbnRQcm9maWxlUmVwbHkpXG59KTtcblxucm91dGVyLnB1dCgnL3VwZGF0ZUNsaWVudGluZm9ybWF0aW9uLz86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IGNsaWVudF9hZG1pbl9xdWVyeS51cGRhdGVQUklOQ0lQTEUocmVxLmJvZHkscmVxLnBhcmFtcy5pZClcbiAgICByZXMuanNvbignaGVsbG8nKVxufSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgTm90YXJ5UmVxdWVzdCBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9Ob3RhcnlfU2VydmljZXMnO1xuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIuZ2V0KCcvZ2V0Tm90YXJ5X1NlcnZpY2VfUmVxdWVzdHMvOmlkPycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgTm90YXJ5UmVxdWVzdC5nZXRVcGNvbWluZ05vdGFyeVNlcnZpY2VzKClcbiAgICBjb25zb2xlLmxvZyhuZXdSZXBseSlcbiAgICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL3JlcXVlc3ROb3RhcnlfU2VydmljZV9SZXF1ZXN0cy86aWQ/JywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkpXG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBOb3RhcnlSZXF1ZXN0LnJlcXVlc3ROb3RhcnlTZXJ2aWNlcyhyZXEuYm9keSlcbiAgICBjb25zb2xlLmxvZyhuZXdSZXBseSlcbiAgICByZXMuanNvbignaGVsbG8nKVxuXG59KTtcblxuLy8gcm91dGVyLmdldCgnL2dldFByaW5jaXBsZUJpbGxpbmdJbmZvcm1hdGlvbi8/OmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4vLyAgICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBOb3RhcnlSZXF1ZXN0LmdldEJpbGxpbmdJbmZvcm1hdGlvbigpXG4vLyAgICAgY29uc3QgY2xpZW50UHJvZmlsZVJlcGx5ID0gYXdhaXQgT2JqZWN0LmVudHJpZXMobmV3UmVwbHlbMF0pLnNwbGljZSgyLDUpXG4vLyAgICAgcmVzLmpzb24oY2xpZW50UHJvZmlsZVJlcGx5KVxuICAgXG4vLyB9KTtcblxuLy8gcm91dGVyLnB1dCgnL3VwZGF0ZVByaW5jaXBsZUJpbGxpbmdJbmZvcm1hdGlvbi8/OmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2cocmVxLnBhcmFtcylcbi8vICAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IE5vdGFyeVJlcXVlc3QudXBkYXRlQmlsbGluZ0luZm9ybWF0aW9uKHJlcS5ib2R5LHJlcS5wYXJhbXMuaWQpXG4vLyAgICAgY29uc29sZS5sb2cobmV3UmVwbHkpXG4vLyAgICAgcmVzLmpzb24oJ2hlbGxvJylcbi8vIH0pO1xuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBkYXRhYmFzZV9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5JztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIucG9zdCgnL2NsaWVudF9tZXNzYWdlJywgIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgZGF0YWJhc2VfcXVlcnkuaW5zZXJ0TWVzc2FnZShyZXEuYm9keSlcbiAgY29uc29sZS5sb2cocmVxLmJvZHkpXG4gICAgcmVzLmpzb24obmV3UmVwbHkpXG4gIH0pO1xuXG5cblxuXG5cbiAgZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCIvLyBpbXBvcnQgKiBhcyBBVVRIT1JJWkVORVQgZnJvbSAnYXV0aG9yaXplbmV0Jztcbi8vIGltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbi8vIGltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnIFxuLy8gZG90ZW52LmNvbmZpZygpXG5cbi8vIGxldCBBcGlDb250cmFjdHMgPSBBVVRIT1JJWkVORVQuQVBJQ29udHJhY3RzO1xuLy8gbGV0IEFwaUNvbnRyb2xsZXJzID0gQVVUSE9SSVpFTkVULkFQSUNvbnRyb2xsZXJzO1xuLy8gbGV0IENvbnN0YW50cyA9IEFVVEhPUklaRU5FVC5Db25zdGFudHNcblxuXG5cbi8vIFx0ZnVuY3Rpb24gZGViaXRCYW5rQWNjb3VudCgpIHtcbi8vIFx0XHR2YXIgbWVyY2hhbnRBdXRoZW50aWNhdGlvblR5cGUgPSBuZXcgQXBpQ29udHJhY3RzLk1lcmNoYW50QXV0aGVudGljYXRpb25UeXBlKCk7XG4vLyBcdG1lcmNoYW50QXV0aGVudGljYXRpb25UeXBlLnNldE5hbWUoU3RyaW5nKHByb2Nlc3MuZW52LkFVVEhPUklaRV9ORVRfQVBJX0xPR0lOX0lEKSk7XG4vLyBcdG1lcmNoYW50QXV0aGVudGljYXRpb25UeXBlLnNldFRyYW5zYWN0aW9uS2V5KFN0cmluZyhwcm9jZXNzLmVudi5BVVRIT1JJWkVfTkVUX1RSQU5TQUNUSU9OX0tFWSkpO1xuXG5cdFxuLy8gXHRcdHZhciBiYW5rQWNjb3VudFR5cGUgPSBuZXcgQXBpQ29udHJhY3RzLkJhbmtBY2NvdW50VHlwZSgpO1xuLy8gXHRcdGJhbmtBY2NvdW50VHlwZS5zZXRBY2NvdW50VHlwZShBcGlDb250cmFjdHMuQmFua0FjY291bnRUeXBlRW51bS5TQVZJTkdTKTtcbi8vIFx0XHRiYW5rQWNjb3VudFR5cGUuc2V0Um91dGluZ051bWJlcignMTIxMDQyODgyJyk7XG4vLyBcdFx0Ly9hZGRlZCBjb2RlXG4vLyBcdFx0dmFyIGJhbmtBY2NvdW50TnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5OTk5OSkgKyAxMDAwMDtcbi8vIFx0XHRiYW5rQWNjb3VudFR5cGUuc2V0QWNjb3VudE51bWJlcihiYW5rQWNjb3VudE51bS50b1N0cmluZygpKTtcbi8vIFx0XHRiYW5rQWNjb3VudFR5cGUuc2V0TmFtZU9uQWNjb3VudCgnSm9obiBEb2UnKTtcblx0XG4vLyBcdFx0dmFyIHBheW1lbnRUeXBlID0gbmV3IEFwaUNvbnRyYWN0cy5QYXltZW50VHlwZSgpO1xuLy8gXHRcdHBheW1lbnRUeXBlLnNldEJhbmtBY2NvdW50KGJhbmtBY2NvdW50VHlwZSk7XG5cdFxuLy8gXHRcdHZhciBvcmRlckRldGFpbHMgPSBuZXcgQXBpQ29udHJhY3RzLk9yZGVyVHlwZSgpO1xuLy8gXHRcdG9yZGVyRGV0YWlscy5zZXRJbnZvaWNlTnVtYmVyKCdJTlYtMTIzNDUnKTtcbi8vIFx0XHRvcmRlckRldGFpbHMuc2V0RGVzY3JpcHRpb24oJ1Byb2R1Y3QgRGVzY3JpcHRpb24nKTtcblx0XG4vLyBcdFx0dmFyIHRheCA9IG5ldyBBcGlDb250cmFjdHMuRXh0ZW5kZWRBbW91bnRUeXBlKCk7XG4vLyBcdFx0dGF4LnNldEFtb3VudCgnNC4yNicpO1xuLy8gXHRcdHRheC5zZXROYW1lKCdsZXZlbDIgdGF4IG5hbWUnKTtcbi8vIFx0XHR0YXguc2V0RGVzY3JpcHRpb24oJ2xldmVsMiB0YXgnKTtcblx0XG4vLyBcdFx0dmFyIGR1dHkgPSBuZXcgQXBpQ29udHJhY3RzLkV4dGVuZGVkQW1vdW50VHlwZSgpO1xuLy8gXHRcdGR1dHkuc2V0QW1vdW50KCc4LjU1Jyk7XG4vLyBcdFx0ZHV0eS5zZXROYW1lKCdkdXR5IG5hbWUnKTtcbi8vIFx0XHRkdXR5LnNldERlc2NyaXB0aW9uKCdkdXR5IGRlc2NyaXB0aW9uJyk7XG5cdFxuLy8gXHRcdHZhciBzaGlwcGluZyA9IG5ldyBBcGlDb250cmFjdHMuRXh0ZW5kZWRBbW91bnRUeXBlKCk7XG4vLyBcdFx0c2hpcHBpbmcuc2V0QW1vdW50KCc4LjU1Jyk7XG4vLyBcdFx0c2hpcHBpbmcuc2V0TmFtZSgnc2hpcHBpbmcgbmFtZScpO1xuLy8gXHRcdHNoaXBwaW5nLnNldERlc2NyaXB0aW9uKCdzaGlwcGluZyBkZXNjcmlwdGlvbicpO1xuXHRcbi8vIFx0XHQvLyB2YXIgYmlsbFRvID0gbmV3IEFwaUNvbnRyYWN0cy5DdXN0b21lckFkZHJlc3NUeXBlKCk7XG4vLyBcdFx0Ly8gYmlsbFRvLnNldEZpcnN0TmFtZSgnRWxsZW4nKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0TGFzdE5hbWUoJ0pvaG5zb24nKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0Q29tcGFueSgnU291dmVuaXJvcG9saXMnKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0QWRkcmVzcygnMTQgTWFpbiBTdHJlZXQnKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0Q2l0eSgnUGVjYW4gU3ByaW5ncycpO1xuLy8gXHRcdC8vIGJpbGxUby5zZXRTdGF0ZSgnVFgnKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0WmlwKCc0NDYyOCcpO1xuLy8gXHRcdC8vIGJpbGxUby5zZXRDb3VudHJ5KCdVU0EnKTtcblx0XG4vLyBcdFx0dmFyIHNoaXBUbyA9IG5ldyBBcGlDb250cmFjdHMuQ3VzdG9tZXJBZGRyZXNzVHlwZSgpO1xuLy8gXHRcdHNoaXBUby5zZXRGaXJzdE5hbWUoJ0NoaW5hJyk7XG4vLyBcdFx0c2hpcFRvLnNldExhc3ROYW1lKCdCYXlsZXMnKTtcbi8vIFx0XHRzaGlwVG8uc2V0Q29tcGFueSgnVGh5bWUgZm9yIFRlYScpO1xuLy8gXHRcdHNoaXBUby5zZXRBZGRyZXNzKCcxMiBNYWluIFN0cmVldCcpO1xuLy8gXHRcdHNoaXBUby5zZXRDaXR5KCdQZWNhbiBTcHJpbmdzJyk7XG4vLyBcdFx0c2hpcFRvLnNldFN0YXRlKCdUWCcpO1xuLy8gXHRcdHNoaXBUby5zZXRaaXAoJzQ0NjI4Jyk7XG4vLyBcdFx0c2hpcFRvLnNldENvdW50cnkoJ1VTQScpO1xuXHRcbi8vIFx0XHR2YXIgbGluZUl0ZW1faWQxID0gbmV3IEFwaUNvbnRyYWN0cy5MaW5lSXRlbVR5cGUoKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDEuc2V0SXRlbUlkKCcxJyk7XG4vLyBcdFx0bGluZUl0ZW1faWQxLnNldE5hbWUoJ3Zhc2UnKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDEuc2V0RGVzY3JpcHRpb24oJ2Nhbm5lcyBsb2dvJyk7XG4vLyBcdFx0bGluZUl0ZW1faWQxLnNldFF1YW50aXR5KCcxOCcpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMS5zZXRVbml0UHJpY2UoJzQ1LjAwJyk7XG5cdFxuLy8gXHRcdHZhciBsaW5lSXRlbV9pZDIgPSBuZXcgQXBpQ29udHJhY3RzLkxpbmVJdGVtVHlwZSgpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMi5zZXRJdGVtSWQoJzInKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDIuc2V0TmFtZSgndmFzZTInKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDIuc2V0RGVzY3JpcHRpb24oJ2Nhbm5lcyBsb2dvMicpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMi5zZXRRdWFudGl0eSgnMjgnKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDIuc2V0VW5pdFByaWNlKCcyNS4wMCcpO1xuXHRcbi8vIFx0XHR2YXIgbGluZUl0ZW1MaXN0OmFueSA9IFtdO1xuLy8gXHRcdGxpbmVJdGVtTGlzdC5wdXNoKGxpbmVJdGVtX2lkMSk7XG4vLyBcdFx0bGluZUl0ZW1MaXN0LnB1c2gobGluZUl0ZW1faWQyKTtcblx0XG4vLyBcdFx0dmFyIGxpbmVJdGVtcyA9IG5ldyBBcGlDb250cmFjdHMuQXJyYXlPZkxpbmVJdGVtKCk7XG4vLyBcdFx0bGluZUl0ZW1zLnNldExpbmVJdGVtKGxpbmVJdGVtTGlzdCk7XG5cdFxuLy8gXHRcdHZhciB0cmFuc2FjdGlvblJlcXVlc3RUeXBlID0gbmV3IEFwaUNvbnRyYWN0cy5UcmFuc2FjdGlvblJlcXVlc3RUeXBlKCk7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRUcmFuc2FjdGlvblR5cGUoQXBpQ29udHJhY3RzLlRyYW5zYWN0aW9uVHlwZUVudW0uQVVUSENBUFRVUkVUUkFOU0FDVElPTik7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRQYXltZW50KHBheW1lbnRUeXBlKTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldEFtb3VudCgxOS4wMCk7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRMaW5lSXRlbXMobGluZUl0ZW1zKTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldE9yZGVyKG9yZGVyRGV0YWlscyk7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRUYXgodGF4KTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldER1dHkoZHV0eSk7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRTaGlwcGluZyhzaGlwcGluZyk7XG4vLyBcdFx0Ly8gdHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRCaWxsVG8oYmlsbFRvKTtcbi8vIFx0XHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldFNoaXBUbyhzaGlwVG8pO1xuXHRcbi8vIFx0XHR2YXIgY3JlYXRlUmVxdWVzdCA9IG5ldyBBcGlDb250cmFjdHMuQ3JlYXRlVHJhbnNhY3Rpb25SZXF1ZXN0KCk7XG4vLyBcdFx0Y3JlYXRlUmVxdWVzdC5zZXRSZWZJZCgnMTIzNDU2Jyk7XG4vLyBcdFx0Y3JlYXRlUmVxdWVzdC5zZXRNZXJjaGFudEF1dGhlbnRpY2F0aW9uKG1lcmNoYW50QXV0aGVudGljYXRpb25UeXBlKTtcbi8vIFx0XHRjcmVhdGVSZXF1ZXN0LnNldFRyYW5zYWN0aW9uUmVxdWVzdCh0cmFuc2FjdGlvblJlcXVlc3RUeXBlKTtcblx0XG4vLyBcdFx0Ly9wcmV0dHkgcHJpbnQgcmVxdWVzdFxuLy8gXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNyZWF0ZVJlcXVlc3QuZ2V0SlNPTigpLCBudWxsLCAyKSk7XG5cdFx0XHRcbi8vIFx0XHR2YXIgY3RybCA9IG5ldyBBcGlDb250cm9sbGVycy5DcmVhdGVUcmFuc2FjdGlvbkNvbnRyb2xsZXIoY3JlYXRlUmVxdWVzdC5nZXRKU09OKCkpO1xuXHRcbi8vIFx0XHRjdHJsLmV4ZWN1dGUoZnVuY3Rpb24oKXtcblx0XG4vLyBcdFx0XHR2YXIgYXBpUmVzcG9uc2UgPSBjdHJsLmdldFJlc3BvbnNlKCk7XG5cdFxuLy8gXHRcdFx0dmFyIHJlc3BvbnNlID0gbmV3IEFwaUNvbnRyYWN0cy5DcmVhdGVUcmFuc2FjdGlvblJlc3BvbnNlKGFwaVJlc3BvbnNlKTtcblx0XG4vLyBcdFx0XHQvL3ByZXR0eSBwcmludCByZXNwb25zZVxuLy8gXHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UsIG51bGwsIDIpKTtcblx0XG4vLyBcdFx0XHRpZihyZXNwb25zZSAhPSBudWxsKXtcbi8vIFx0XHRcdFx0aWYocmVzcG9uc2UuZ2V0TWVzc2FnZXMoKS5nZXRSZXN1bHRDb2RlKCkgPT0gQXBpQ29udHJhY3RzLk1lc3NhZ2VUeXBlRW51bS5PSyl7XG4vLyBcdFx0XHRcdFx0aWYocmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldE1lc3NhZ2VzKCkgIT0gbnVsbCl7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgdHJhbnNhY3Rpb24gd2l0aCBUcmFuc2FjdGlvbiBJRDogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRUcmFuc0lkKCkpO1xuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1Jlc3BvbnNlIENvZGU6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0UmVzcG9uc2VDb2RlKCkpO1xuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ01lc3NhZ2UgQ29kZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRNZXNzYWdlcygpLmdldE1lc3NhZ2UoKVswXS5nZXRDb2RlKCkpO1xuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Rlc2NyaXB0aW9uOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldE1lc3NhZ2VzKCkuZ2V0TWVzc2FnZSgpWzBdLmdldERlc2NyaXB0aW9uKCkpO1xuLy8gXHRcdFx0XHRcdH1cbi8vIFx0XHRcdFx0XHRlbHNlIHtcbi8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGYWlsZWQgVHJhbnNhY3Rpb24uJyk7XG4vLyBcdFx0XHRcdFx0XHRpZihyZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkgIT0gbnVsbCl7XG4vLyBcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpLmdldEVycm9yKClbMF0uZ2V0RXJyb3JDb2RlKCkpO1xuLy8gXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgbWVzc2FnZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKS5nZXRFcnJvcigpWzBdLmdldEVycm9yVGV4dCgpKTtcbi8vIFx0XHRcdFx0XHRcdH1cbi8vIFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdH1cbi8vIFx0XHRcdFx0ZWxzZSB7XG4vLyBcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0ZhaWxlZCBUcmFuc2FjdGlvbi4gJyk7XG4vLyBcdFx0XHRcdFx0aWYocmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpICE9IG51bGwgJiYgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpICE9IG51bGwpe1xuXHRcdFx0XHRcdFxuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIENvZGU6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkuZ2V0RXJyb3IoKVswXS5nZXRFcnJvckNvZGUoKSk7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgbWVzc2FnZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKS5nZXRFcnJvcigpWzBdLmdldEVycm9yVGV4dCgpKTtcbi8vIFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdFx0ZWxzZSB7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgQ29kZTogJyArIHJlc3BvbnNlLmdldE1lc3NhZ2VzKCkuZ2V0TWVzc2FnZSgpWzBdLmdldENvZGUoKSk7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgbWVzc2FnZTogJyArIHJlc3BvbnNlLmdldE1lc3NhZ2VzKCkuZ2V0TWVzc2FnZSgpWzBdLmdldFRleHQoKSk7XG4vLyBcdFx0XHRcdFx0fVxuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHR9XG4vLyBcdFx0XHRlbHNlIHtcbi8vIFx0XHRcdFx0Y29uc29sZS5sb2coJ051bGwgUmVzcG9uc2UuJyk7XG4vLyBcdFx0XHR9XG5cdFxuLy8gXHRcdH0pO1xuLy8gXHR9XG5cdFxuLy8gXHRpZiAocmVxdWlyZS5tYWluID09PSBtb2R1bGUpIHtcbi8vIFx0XHRkZWJpdEJhbmtBY2NvdW50KGZ1bmN0aW9uKCl7XG4vLyBcdFx0XHRjb25zb2xlLmxvZygnZGViaXRCYW5rQWNjb3VudCBjYWxsIGNvbXBsZXRlLicpO1xuLy8gXHRcdH0pO1xuLy8gXHR9XG4vLyBcdGRlYml0QmFua0FjY291bnQoKVxuLy8gXHRtb2R1bGUuZXhwb3J0cy5kZWJpdEJhbmtBY2NvdW50ID0gZGViaXRCYW5rQWNjb3VudDtcblxuXG5cblxuXG5cbiIsIlxuaW1wb3J0ICogYXMgVHdpbGlvIGZyb20gJ3R3aWxpbydcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnXG5kb3RlbnYuY29uZmlnKClcblxuXG5cbi8vIFR3aWxpbyBDb250cm9sIGFuZCBBY2Nlc3MgQ3JlZGVudGlhbCBcbmNvbnN0IGFjY291bnRTaWQgPSBwcm9jZXNzLmVudi5UV0lMSU9fU0lEO1xuY29uc3QgYXV0aFRva2VuID0gcHJvY2Vzcy5lbnYuVFdJTElPX0FVVEhLRVk7XG5jb25zdCBzbXMgPSBUd2lsaW8oYWNjb3VudFNpZCwgYXV0aFRva2VuKVxuXG5leHBvcnQgY29uc3QgeyBNZXNzYWdpbmdSZXNwb25zZSB9ID0gVHdpbGlvLnR3aW1sIFxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoYm9keTpzdHJpbmcsdG8/OnN0cmluZ1tdfCBhbnkpIHtcbiAgICBcbiAgICB0by5tYXAoYXN5bmMgKGkpID0+IHtcbiAgICAgICAgYXdhaXQgc21zLm1lc3NhZ2VzLmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuVFdJTElPX1BIT05FLFxuICAgICAgICAgICAgc2hvcnRlblVybHM6IHRydWUsXG4gICAgICAgICAgICB0bzogaVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IHNlbmRSZXBseSA9IChib2R5ID0gXCJUZXN0aW5nIHRoZSBhcGlcIiwgdG8/OiBhbnkpID0+IHtcbiAgICBfcGhvbmVudW1iZXIubWFwKGFzeW5jIChpKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld19NZXNzYWdlID0gYXdhaXQgc21zLm1lc3NhZ2VzLmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuVFdJTElPX1BIT05FPy50b1N0cmluZygpLFxuICAgICAgICAgICAgdG86IGlcbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cblxuXG4iLCJpbXBvcnQgKiBhcyBteXNxbCBmcm9tICdteXNxbDInO1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcblxuXG5cblxuXG5jb25zdCBteXNxbEFjY2VzcyA9IG15c3FsLmNyZWF0ZVBvb2woe1xuICAgIHBvcnQ6MzMwNixcbiAgICB1c2VyOnByb2Nlc3MuZW52Lk1ZU1FMX1VTRVIsXG4gICAgcGFzc3dvcmQ6cHJvY2Vzcy5lbnYuTVlTUUxfUEFTU1dPUkQsXG4gICAgZGF0YWJhc2U6cHJvY2Vzcy5lbnYuREFUQUJBU0Vcbn0pXG5cbmV4cG9ydCBjb25zdCBRdWVyeSA9IChxdWVyeTpzdHJpbmcsdmFsdWVzPzpBcnJheTxzdHJpbmd8bnVtYmVyPik9PntcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8YW55Pj4oKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICBteXNxbEFjY2Vzcy5xdWVyeShxdWVyeSx2YWx1ZXMsKGVycixyZXN1bHRzOmFueSkgPT57XG4gICAgICAgICAgICBpZihlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn07XG5cblxuXG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCB2aWV3TWVzc2FnZXMgPSBhc3luYyAoKSA9PiBRdWVyeSgnc2VsZWN0ICogZnJvbSBDb21tdW5pY2F0aW9uLk1lc3NhZ2VzJyk7XG5jb25zdCBpbnNlcnRNZXNzYWdlPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBDb21tdW5pY2F0aW9uLk1lc3NhZ2VzIFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbi8vIGNvbnN0IGRlbGV0ZU1lc3NhZ2VzID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsIFtpZF0pO1xuLy8gY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gS0NNX0lOQy5jbGllbnRSZWdpc3RyYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuLy8gY29uc3QgaW5zZXJ0SW5zdGl0dXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5pbnN0aXR1dGlvbiBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6IGFueSwgaWQ6IGFueSkgPT4gUXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LCBpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHZpZXdNZXNzYWdlcyxcbiAgICBpbnNlcnRNZXNzYWdlXG5cblxufSIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL0NvbmVjdGlvblwiO1xuXG5cbmNvbnN0IGdldEJpbGxpbmdJbmZvcm1hdGlvbiA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENsaWVudHMuUHJpbmNpcGxlX0JpbGxpbmdfSW5mb3JtYXRpb24nKTtcbmNvbnN0IGluc2VydEJpbGxpbmdJbmZvcm1hdGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIENsaWVudHMuUHJpbmNpcGxlX0JpbGxpbmdfSW5mb3JtYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuY29uc3QgdXBkYXRlQmlsbGluZ0luZm9ybWF0aW9uID0gYXN5bmMgKGluZm8saWQpPT5RdWVyeSgnVVBEQVRFIENsaWVudHMuUHJpbmNpcGxlX0JpbGxpbmdfSW5mb3JtYXRpb24gU0VUID8gV0hFUkUgYWRtaW5faWQgPSA/JyxbaW5mbyxpZF0pXG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbmdldEJpbGxpbmdJbmZvcm1hdGlvbixcbmluc2VydEJpbGxpbmdJbmZvcm1hdGlvbixcbnVwZGF0ZUJpbGxpbmdJbmZvcm1hdGlvblxufSIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL0NvbmVjdGlvblwiO1xuXG5cbmNvbnN0IGdldENsaWVudEluZm9ybWF0aW9uID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2xpZW50cy5QZXJzb25hbF9JbmZvcm1hdGlvbicpO1xuY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ2xpZW50cy5QZXJzb25hbF9JbmZvcm1hdGlvbiBTRVQgPycsIHZhbHVlcyk7XG5jb25zdCB1cGRhdGVQUklOQ0lQTEUgPSBhc3luYyAoaW5mbyxpZCk9PlF1ZXJ5KCdVUERBVEUgQ2xpZW50cy5QZXJzb25hbF9JbmZvcm1hdGlvbiBTRVQgPyBXSEVSRSBpZCA9ID8nLFtpbmZvLGlkXSlcblxuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbi8vIGNvbnN0IGRlbGV0ZU1lc3NhZ2VzID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsIFtpZF0pO1xuLy8gY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gS0NNX0lOQy5jbGllbnRSZWdpc3RyYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuLy8gY29uc3QgaW5zZXJ0SW5zdGl0dXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5pbnN0aXR1dGlvbiBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6IGFueSwgaWQ6IGFueSkgPT4gUXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LCBpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldENsaWVudEluZm9ybWF0aW9uLFxuICAgIGluc2VydENMSUVOVCxcbiAgICB1cGRhdGVQUklOQ0lQTEUsXG59IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgZ2V0VXBjb21pbmdOb3RhcnlTZXJ2aWNlcyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENsaWVudHMuUHJpbmNpcGxlX05vdGFyeV9SZXF1ZXN0IFdIRVJFIHVzZXJJZCA9IDMgQU5EIG5vdGFyeV9yZXF1ZXN0X3R5cGUgPSBcIkNlcnRpZnkgY29waWVzXCInKTtcbmNvbnN0IHJlcXVlc3ROb3RhcnlTZXJ2aWNlcyA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIENsaWVudHMuUHJpbmNpcGxlX05vdGFyeV9SZXF1ZXN0IFNFVCA/JywgdmFsdWVzKTtcbmNvbnN0IHVwZGF0ZU5vdGFyeVNlcnZpY2VSZXF1ZXN0ID0gYXN5bmMgKGluZm8saWQpPT5RdWVyeSgnVVBEQVRFIENsaWVudHMuUHJpbmNpcGxlX05vdGFyeV9SZXF1ZXN0IFNFVCA/IFdIRVJFIGlkID0gPycsW2luZm8saWRdKVxuY29uc3QgZGVsZXRlTm90YXJ5U2VydmljZVJlcXVlc3QgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIENsaWVudHMuUHJpbmNpcGxlX05vdGFyeV9SZXF1ZXN0IFdIRVJFIGlkID0gPycsIFtpZF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRVcGNvbWluZ05vdGFyeVNlcnZpY2VzLFxuICAgIHJlcXVlc3ROb3RhcnlTZXJ2aWNlcyxcbiAgICB1cGRhdGVOb3RhcnlTZXJ2aWNlUmVxdWVzdCxcbiAgICBkZWxldGVOb3RhcnlTZXJ2aWNlUmVxdWVzdFxufSIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycydcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgSG9tZXBhZ2VTZXJ2ZXIgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5JztcbmltcG9ydCBDbGllbnRQb3J0YWwgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UsIE1lc3NhZ2luZ1Jlc3BvbnNlLCBzZW5kUmVwbHkgfSBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TTVMvc2VuZF9zbXMnO1xuaW1wb3J0ICcuL1BBWU1FTlRTL2F1dGhvcml6ZV9jYXJkJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vSG9tZXBhZ2UvY29udGFjdCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi9DbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzJ1xuaW1wb3J0IGJpbGxpbmcgZnJvbSAnLi9DbGllbnRQb3J0YWwvQ2xpZW50QmlsbGluZyc7XG5pbXBvcnQgbm90YXJ5IGZyb20gJy4vQ2xpZW50UG9ydGFsL0NsaWVudFNlcnZpY2VSZXF1ZXN0J1xuXG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoJ2NvbXBsaWVfZnJvbnRlbmQnKSlcbmFwcC51c2UoY29ycygpKVxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC5zZXQoJ3RydXN0IHByb3h5JywgdHJ1ZSlcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcblxuXG5jb25zdCBuZXdVc2UgPSBhcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnKicpXG4gIG5leHQoKVxufSlcblxuYXBwLnVzZSgnL21lc3NhZ2UnLGNvbnRhY3QpXG5hcHAudXNlKCcvY2xpZW50X3BvcnRhbCcsY2xpZW50KVxuYXBwLnVzZSgnL2NsaWVudF9wb3J0YWwnLGJpbGxpbmcpXG5cbmFwcC51c2UoJy9jbGllbnRfcG9ydGFsX3NlcnZpY2VzJyxub3RhcnkpXG5hcHAudXNlKCcvY2xpZW50X3BvcnRhbF9zZXJ2aWNlcycsbm90YXJ5KVxuXG5cblxuYXBwLmdldCgnL3Rlc3QnLCAocmVxLCByZXMpID0+IHtcbiAgcmVzLmpzb24oJ2EnKVxufSlcblxuYXBwLmdldCgnL2RhdGFiYXNlJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgQ2xpZW50UG9ydGFsLmdldENsaWVudEluZm9ybWF0aW9uKClcbiAgcmVzLmpzb24obmV3UmVwbHkpXG4gIGNvbnNvbGUubG9nKG5ld1JlcGx5KVxuXG59KVxuXG5cbmFwcC5wb3N0KCcvdHdpbGlvJywgKHJlcSwgcmVzKSA9PiB7XG4gIC8vIHNlbmRNZXNzYWdlKCk7XG4gIHJlcy5qc29uKFwib2tcIilcbn0pXG5cbmFwcC5wb3N0KCcvc21zJywgIChyZXEsIHJlcykgPT4ge1xuXG4gIGNvbnN0IHR3aW1sID0gbmV3IE1lc3NhZ2luZ1Jlc3BvbnNlKCk7XG5cbiAgdHdpbWwubWVzc2FnZSgnVGhlIFJvYm90cyBhcmUgY29taW5nISBIZWFkIGZvciB0aGUgaGlsbHMhJyk7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5LkJvZHkpXG5cbiAgcmVzLmhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3htbCcpXG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHR3aW1sLnRvU3RyaW5nKCkpXG59XG5cblxuXG4gIC8vIHJlcy50eXBlKCd0ZXh0L3htbCcpLnNlbmQodHdpbWwudG9TdHJpbmcoKSk7XG5cbik7XG5cblxuXG5jb25zb2xlLmxvZyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOTk5OTk5KSsxMTExMTEpXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MFxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtQT1JUfS4uLmApXG59KVxuXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm15c3FsMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0d2lsaW9cIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL0JBQ0tFTkQvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=