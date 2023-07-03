/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


Object.defineProperty(exports, "__esModule", ({ value: true }));
var AUTHORIZENET = __webpack_require__(/*! authorizenet */ "authorizenet");
var dotenv = __webpack_require__(/*! dotenv */ "dotenv");
dotenv.config();
var ApiContracts = AUTHORIZENET.APIContracts;
var ApiControllers = AUTHORIZENET.APIControllers;
var Constants = AUTHORIZENET.Constants;
var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
merchantAuthenticationType.setName(String(process.env.AUTHORIZE_NET_API_LOGIN_ID));
merchantAuthenticationType.setTransactionKey(String(process.env.AUTHORIZE_NET_TRANSACTION_KEY));
var request = new ApiContracts.AuthenticateTestRequest();
request.setMerchantAuthentication(merchantAuthenticationType);
function authorizeCreditCard() {
    console.log(ApiContracts);
    var creditCard = new ApiContracts.CreditCardType();
    creditCard.setCardNumber('4242424242424242');
    creditCard.setExpirationDate('0829');
    creditCard.setCardCode('999');
    var paymentType = new ApiContracts.PaymentType();
    paymentType.setCreditCard(creditCard);
    var orderDetails = new ApiContracts.OrderType();
    orderDetails.setInvoiceNumber('INV-123456');
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
    var billTo = new ApiContracts.CustomerAddressType();
    billTo.setFirstName('Kenneth');
    billTo.setLastName('Cunningham');
    billTo.setCompany('Souveniropolis');
    billTo.setAddress('14 Main Street');
    billTo.setCity('Pecan Springs');
    billTo.setState('TX');
    billTo.setZip('44628');
    billTo.setCountry('USA');
    var shipTo = new ApiContracts.CustomerAddressType();
    shipTo.setFirstName('China');
    shipTo.setLastName('Bayles');
    shipTo.setCompany('Thyme for Tea');
    shipTo.setAddress('12 Main Street');
    shipTo.setCity('Pecan Springs');
    shipTo.setState('TX');
    shipTo.setZip('44628');
    shipTo.setCountry('USA');
    var transactionSettings = new ApiContracts.ArrayOfSetting();
    var transactionRequestType = new ApiContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(ApiContracts.TransactionTypeEnum.AUTHONLYTRANSACTION);
    transactionRequestType.setPayment(paymentType);
    transactionRequestType.setOrder(orderDetails);
    transactionRequestType.setTax(tax);
    transactionRequestType.setDuty(duty);
    transactionRequestType.setShipping(shipping);
    transactionRequestType.setBillTo(billTo);
    transactionRequestType.setShipTo(shipTo);
    transactionRequestType.setTransactionSettings(transactionSettings);
    var createRequest = new ApiContracts.CreateTransactionRequest();
    createRequest.setMerchantAuthentication(merchantAuthenticationType);
    createRequest.setTransactionRequest(transactionRequestType);
    //pretty print request
    // console.log(JSON.stringify(createRequest.getJSON(), null, 2));
    var ctrl = new ApiControllers.CreateTransactionController(createRequest.getJSON());
    // ctrl.execute(function(){
    // 	var apiResponse = ctrl.getResponse();
    // 	var response = new ApiContracts.CreateTransactionResponse(apiResponse);
    // 	//pretty print response
    // 	console.log(JSON.stringify(response, null, 2));
    // 	if(response != null){
    // 		if(response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK){
    // 			if(response.getTransactionResponse().getMessages() != null){
    // 				console.log('Successfully created transaction with Transaction ID: ' + response.getTransactionResponse().getTransId());
    // 				console.log('Response Code: ' + response.getTransactionResponse().getResponseCode());
    // 				console.log('Message Code: ' + response.getTransactionResponse().getMessages().getMessage()[0].getCode());
    // 				console.log('Description: ' + response.getTransactionResponse().getMessages().getMessage()[0].getDescription());
    //                 console.log(response)
    // 			}
    // 			else {
    // 				console.log('Failed Transaction.');
    // 				if(response.getTransactionResponse().getErrors() != null){
    // 					console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
    // 					console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
    // 				}
    // 			}
    // 		}
    // 		else {
    // 			console.log('Failed Transaction.');
    // 			if(response.getTransactionResponse() != null && response.getTransactionResponse().getErrors() != null){
    // 				console.log('Error Code: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorCode());
    // 				console.log('Error message: ' + response.getTransactionResponse().getErrors().getError()[0].getErrorText());
    // 			}
    // 			else {
    // 				console.log('Error Code: ' + response.getMessages().getMessage()[0].getCode());
    // 				console.log('Error message: ' + response.getMessages().getMessage()[0].getText());
    // 			}
    // 		}
    // 	}
    // 	else {
    // 		console.log('Null Response.');
    // 	}
    // });
}
var bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
var saltRounds = 12;
var myPlaintextPassword = 's0/\/\P4$$w0rD';
var someOtherPlaintextPassword = 'not_bacon';
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
// authorizeCreditCard();
module.exports.authorizeCreditCard = authorizeCreditCard;


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
var send_sms_1 = __webpack_require__(/*! ./ProgramControlFlow/SMS/send_sms */ "./src/BACKEND/ProgramControlFlow/SMS/send_sms.ts");
__webpack_require__(/*! ./PAYMENTS/authorize_card */ "./src/BACKEND/PAYMENTS/authorize_card.ts");
var contact_1 = __webpack_require__(/*! ./Homepage/contact */ "./src/BACKEND/Homepage/contact.ts");
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
            case 0: return [4 /*yield*/, Homepage_Query_1.default.insertCLIENT(req.body)];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7O0tBQ25CLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLE1BQU0sQ0FBQyxHQUFDLE1BQU0sQ0FBQztBQUNwRCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO0FBQ25DLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBNEIsSUFBSSxRQUFLLENBQUM7QUFDcEQsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2pGRjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Ib21lcGFnZS9jb250YWN0LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1BBWU1FTlRTL2F1dGhvcml6ZV9jYXJkLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TTVMvc2VuZF9zbXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9Db25lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Ib21lcGFnZV9RdWVyeS50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9pbmRleC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJhdXRob3JpemVuZXRcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnYvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcIm15c3FsMlwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcInR3aWxpb1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBkYXRhYmFzZV9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5JztcbmltcG9ydCB7IHNlbmRNZXNzYWdlLCBNZXNzYWdpbmdSZXNwb25zZSwgc2VuZFJlcGx5IH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLnBvc3QoJy9jbGllbnRfbWVzc2FnZScsICBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IGRhdGFiYXNlX3F1ZXJ5Lmluc2VydENMSUVOVChyZXEuYm9keSlcbiAgY29uc29sZS5sb2cocmVxLmJvZHkpXG4gICAgcmVzLmpzb24obmV3UmVwbHkpXG4gIH0pO1xuXG5cblxuXG5cbiAgZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJpbXBvcnQgKiBhcyBBVVRIT1JJWkVORVQgZnJvbSAnYXV0aG9yaXplbmV0JztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnIFxuZG90ZW52LmNvbmZpZygpXG5cbmxldCBBcGlDb250cmFjdHMgPSBBVVRIT1JJWkVORVQuQVBJQ29udHJhY3RzO1xubGV0IEFwaUNvbnRyb2xsZXJzID0gQVVUSE9SSVpFTkVULkFQSUNvbnRyb2xsZXJzO1xubGV0IENvbnN0YW50cyA9IEFVVEhPUklaRU5FVC5Db25zdGFudHNcblxudmFyIG1lcmNoYW50QXV0aGVudGljYXRpb25UeXBlID0gbmV3IEFwaUNvbnRyYWN0cy5NZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZSgpO1xuXHRtZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZS5zZXROYW1lKFN0cmluZyhwcm9jZXNzLmVudi5BVVRIT1JJWkVfTkVUX0FQSV9MT0dJTl9JRCkpO1xuXHRtZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZS5zZXRUcmFuc2FjdGlvbktleShTdHJpbmcocHJvY2Vzcy5lbnYuQVVUSE9SSVpFX05FVF9UUkFOU0FDVElPTl9LRVkpKTtcblxuXG52YXIgcmVxdWVzdCA9IG5ldyBBcGlDb250cmFjdHMuQXV0aGVudGljYXRlVGVzdFJlcXVlc3QoKTtcbnJlcXVlc3Quc2V0TWVyY2hhbnRBdXRoZW50aWNhdGlvbihtZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZSk7XG5cblxuXG5mdW5jdGlvbiBhdXRob3JpemVDcmVkaXRDYXJkKCkge1xuXHRjb25zb2xlLmxvZyhBcGlDb250cmFjdHMpXG5cblx0dmFyIGNyZWRpdENhcmQgPSBuZXcgQXBpQ29udHJhY3RzLkNyZWRpdENhcmRUeXBlKCk7XG5cdGNyZWRpdENhcmQuc2V0Q2FyZE51bWJlcignNDI0MjQyNDI0MjQyNDI0MicpO1xuXHRjcmVkaXRDYXJkLnNldEV4cGlyYXRpb25EYXRlKCcwODI5Jyk7XG5cdGNyZWRpdENhcmQuc2V0Q2FyZENvZGUoJzk5OScpO1xuXG5cdHZhciBwYXltZW50VHlwZSA9IG5ldyBBcGlDb250cmFjdHMuUGF5bWVudFR5cGUoKTtcblx0cGF5bWVudFR5cGUuc2V0Q3JlZGl0Q2FyZChjcmVkaXRDYXJkKTtcblxuXHR2YXIgb3JkZXJEZXRhaWxzID0gbmV3IEFwaUNvbnRyYWN0cy5PcmRlclR5cGUoKTtcblx0b3JkZXJEZXRhaWxzLnNldEludm9pY2VOdW1iZXIoJ0lOVi0xMjM0NTYnKTtcblx0b3JkZXJEZXRhaWxzLnNldERlc2NyaXB0aW9uKCdQcm9kdWN0IERlc2NyaXB0aW9uJyk7XG5cblx0dmFyIHRheCA9IG5ldyBBcGlDb250cmFjdHMuRXh0ZW5kZWRBbW91bnRUeXBlKCk7XG5cdHRheC5zZXRBbW91bnQoJzQuMjYnKTtcblx0dGF4LnNldE5hbWUoJ2xldmVsMiB0YXggbmFtZScpO1xuXHR0YXguc2V0RGVzY3JpcHRpb24oJ2xldmVsMiB0YXgnKTtcblxuXHR2YXIgZHV0eSA9IG5ldyBBcGlDb250cmFjdHMuRXh0ZW5kZWRBbW91bnRUeXBlKCk7XG5cdGR1dHkuc2V0QW1vdW50KCc4LjU1Jyk7XG5cdGR1dHkuc2V0TmFtZSgnZHV0eSBuYW1lJyk7XG5cdGR1dHkuc2V0RGVzY3JpcHRpb24oJ2R1dHkgZGVzY3JpcHRpb24nKTtcblxuXHR2YXIgc2hpcHBpbmcgPSBuZXcgQXBpQ29udHJhY3RzLkV4dGVuZGVkQW1vdW50VHlwZSgpO1xuXHRzaGlwcGluZy5zZXRBbW91bnQoJzguNTUnKTtcblx0c2hpcHBpbmcuc2V0TmFtZSgnc2hpcHBpbmcgbmFtZScpO1xuXHRzaGlwcGluZy5zZXREZXNjcmlwdGlvbignc2hpcHBpbmcgZGVzY3JpcHRpb24nKTtcblxuXHR2YXIgYmlsbFRvID0gbmV3IEFwaUNvbnRyYWN0cy5DdXN0b21lckFkZHJlc3NUeXBlKCk7XG5cdGJpbGxUby5zZXRGaXJzdE5hbWUoJ0tlbm5ldGgnKTtcblx0YmlsbFRvLnNldExhc3ROYW1lKCdDdW5uaW5naGFtJyk7XG5cdGJpbGxUby5zZXRDb21wYW55KCdTb3V2ZW5pcm9wb2xpcycpO1xuXHRiaWxsVG8uc2V0QWRkcmVzcygnMTQgTWFpbiBTdHJlZXQnKTtcblx0YmlsbFRvLnNldENpdHkoJ1BlY2FuIFNwcmluZ3MnKTtcblx0YmlsbFRvLnNldFN0YXRlKCdUWCcpO1xuXHRiaWxsVG8uc2V0WmlwKCc0NDYyOCcpO1xuXHRiaWxsVG8uc2V0Q291bnRyeSgnVVNBJyk7XG5cblx0dmFyIHNoaXBUbyA9IG5ldyBBcGlDb250cmFjdHMuQ3VzdG9tZXJBZGRyZXNzVHlwZSgpO1xuXHRzaGlwVG8uc2V0Rmlyc3ROYW1lKCdDaGluYScpO1xuXHRzaGlwVG8uc2V0TGFzdE5hbWUoJ0JheWxlcycpO1xuXHRzaGlwVG8uc2V0Q29tcGFueSgnVGh5bWUgZm9yIFRlYScpO1xuXHRzaGlwVG8uc2V0QWRkcmVzcygnMTIgTWFpbiBTdHJlZXQnKTtcblx0c2hpcFRvLnNldENpdHkoJ1BlY2FuIFNwcmluZ3MnKTtcblx0c2hpcFRvLnNldFN0YXRlKCdUWCcpO1xuXHRzaGlwVG8uc2V0WmlwKCc0NDYyOCcpO1xuXHRzaGlwVG8uc2V0Q291bnRyeSgnVVNBJyk7XG5cblx0XG5cblxuXG5cblx0dmFyIHRyYW5zYWN0aW9uU2V0dGluZ3MgPSBuZXcgQXBpQ29udHJhY3RzLkFycmF5T2ZTZXR0aW5nKCk7XG5cblx0dmFyIHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUgPSBuZXcgQXBpQ29udHJhY3RzLlRyYW5zYWN0aW9uUmVxdWVzdFR5cGUoKTtcblx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRUcmFuc2FjdGlvblR5cGUoQXBpQ29udHJhY3RzLlRyYW5zYWN0aW9uVHlwZUVudW0uQVVUSE9OTFlUUkFOU0FDVElPTik7XG5cdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0UGF5bWVudChwYXltZW50VHlwZSk7XG5cdFxuXHR0cmFuc2FjdGlvblJlcXVlc3RUeXBlLnNldE9yZGVyKG9yZGVyRGV0YWlscyk7XG5cdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0VGF4KHRheCk7XG5cdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0RHV0eShkdXR5KTtcblx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRTaGlwcGluZyhzaGlwcGluZyk7XG5cdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0QmlsbFRvKGJpbGxUbyk7XG5cdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0U2hpcFRvKHNoaXBUbyk7XG5cdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0VHJhbnNhY3Rpb25TZXR0aW5ncyh0cmFuc2FjdGlvblNldHRpbmdzKTtcblxuXHR2YXIgY3JlYXRlUmVxdWVzdCA9IG5ldyBBcGlDb250cmFjdHMuQ3JlYXRlVHJhbnNhY3Rpb25SZXF1ZXN0KCk7XG5cdGNyZWF0ZVJlcXVlc3Quc2V0TWVyY2hhbnRBdXRoZW50aWNhdGlvbihtZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZSk7XG5cdGNyZWF0ZVJlcXVlc3Quc2V0VHJhbnNhY3Rpb25SZXF1ZXN0KHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUpO1xuXG5cdC8vcHJldHR5IHByaW50IHJlcXVlc3Rcblx0Ly8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY3JlYXRlUmVxdWVzdC5nZXRKU09OKCksIG51bGwsIDIpKTtcblx0XHRcblx0dmFyIGN0cmwgPSBuZXcgQXBpQ29udHJvbGxlcnMuQ3JlYXRlVHJhbnNhY3Rpb25Db250cm9sbGVyKGNyZWF0ZVJlcXVlc3QuZ2V0SlNPTigpKTtcblxuXHQvLyBjdHJsLmV4ZWN1dGUoZnVuY3Rpb24oKXtcblxuXHQvLyBcdHZhciBhcGlSZXNwb25zZSA9IGN0cmwuZ2V0UmVzcG9uc2UoKTtcblxuXHQvLyBcdHZhciByZXNwb25zZSA9IG5ldyBBcGlDb250cmFjdHMuQ3JlYXRlVHJhbnNhY3Rpb25SZXNwb25zZShhcGlSZXNwb25zZSk7XG5cblx0Ly8gXHQvL3ByZXR0eSBwcmludCByZXNwb25zZVxuXHQvLyBcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLCBudWxsLCAyKSk7XG5cblx0Ly8gXHRpZihyZXNwb25zZSAhPSBudWxsKXtcblx0Ly8gXHRcdGlmKHJlc3BvbnNlLmdldE1lc3NhZ2VzKCkuZ2V0UmVzdWx0Q29kZSgpID09IEFwaUNvbnRyYWN0cy5NZXNzYWdlVHlwZUVudW0uT0spe1xuXHQvLyBcdFx0XHRpZihyZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0TWVzc2FnZXMoKSAhPSBudWxsKXtcblx0Ly8gXHRcdFx0XHRjb25zb2xlLmxvZygnU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgdHJhbnNhY3Rpb24gd2l0aCBUcmFuc2FjdGlvbiBJRDogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRUcmFuc0lkKCkpO1xuXHQvLyBcdFx0XHRcdGNvbnNvbGUubG9nKCdSZXNwb25zZSBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldFJlc3BvbnNlQ29kZSgpKTtcblx0Ly8gXHRcdFx0XHRjb25zb2xlLmxvZygnTWVzc2FnZSBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldE1lc3NhZ2VzKCkuZ2V0TWVzc2FnZSgpWzBdLmdldENvZGUoKSk7XG5cdC8vIFx0XHRcdFx0Y29uc29sZS5sb2coJ0Rlc2NyaXB0aW9uOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldE1lc3NhZ2VzKCkuZ2V0TWVzc2FnZSgpWzBdLmdldERlc2NyaXB0aW9uKCkpO1xuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0XHRlbHNlIHtcblx0Ly8gXHRcdFx0XHRjb25zb2xlLmxvZygnRmFpbGVkIFRyYW5zYWN0aW9uLicpO1xuXHQvLyBcdFx0XHRcdGlmKHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKSAhPSBudWxsKXtcblx0Ly8gXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpLmdldEVycm9yKClbMF0uZ2V0RXJyb3JDb2RlKCkpO1xuXHQvLyBcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIG1lc3NhZ2U6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkuZ2V0RXJyb3IoKVswXS5nZXRFcnJvclRleHQoKSk7XG5cdC8vIFx0XHRcdFx0fVxuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cdC8vIFx0XHRlbHNlIHtcblx0Ly8gXHRcdFx0Y29uc29sZS5sb2coJ0ZhaWxlZCBUcmFuc2FjdGlvbi4nKTtcblx0Ly8gXHRcdFx0aWYocmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpICE9IG51bGwgJiYgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpICE9IG51bGwpe1xuXHRcdFx0XHRcblx0Ly8gXHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgQ29kZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKS5nZXRFcnJvcigpWzBdLmdldEVycm9yQ29kZSgpKTtcblx0Ly8gXHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgbWVzc2FnZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKS5nZXRFcnJvcigpWzBdLmdldEVycm9yVGV4dCgpKTtcblx0Ly8gXHRcdFx0fVxuXHQvLyBcdFx0XHRlbHNlIHtcblx0Ly8gXHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgQ29kZTogJyArIHJlc3BvbnNlLmdldE1lc3NhZ2VzKCkuZ2V0TWVzc2FnZSgpWzBdLmdldENvZGUoKSk7XG5cdC8vIFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIG1lc3NhZ2U6ICcgKyByZXNwb25zZS5nZXRNZXNzYWdlcygpLmdldE1lc3NhZ2UoKVswXS5nZXRUZXh0KCkpO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cdC8vIFx0fVxuXHQvLyBcdGVsc2Uge1xuXHQvLyBcdFx0Y29uc29sZS5sb2coJ051bGwgUmVzcG9uc2UuJyk7XG5cblx0Ly8gXHR9XG5cblx0Ly8gfSk7XG59XG5cbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdCcpO1xuY29uc3Qgc2FsdFJvdW5kcyA9IDEyO1xuY29uc3QgbXlQbGFpbnRleHRQYXNzd29yZCA9ICdzMC9cXC9cXFA0JCR3MHJEJztcbmNvbnN0IHNvbWVPdGhlclBsYWludGV4dFBhc3N3b3JkID0gJ25vdF9iYWNvbic7XG5jb25zdCBoYXNoID0gYmNyeXB0Lmhhc2hTeW5jKG15UGxhaW50ZXh0UGFzc3dvcmQsIHNhbHRSb3VuZHMpO1xuY29uc29sZS5sb2coaGFzaClcblxuXG4vLyBhdXRob3JpemVDcmVkaXRDYXJkKCk7XG5cblxubW9kdWxlLmV4cG9ydHMuYXV0aG9yaXplQ3JlZGl0Q2FyZCA9IGF1dGhvcml6ZUNyZWRpdENhcmQ7XG5cblxuXG5cbiIsIlxuaW1wb3J0ICogYXMgVHdpbGlvIGZyb20gJ3R3aWxpbydcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnXG5kb3RlbnYuY29uZmlnKClcblxuXG5cbi8vIFR3aWxpbyBDb250cm9sIGFuZCBBY2Nlc3MgQ3JlZGVudGlhbCBcbmNvbnN0IGFjY291bnRTaWQgPSBwcm9jZXNzLmVudi5UV0lMSU9fU0lEO1xuY29uc3QgYXV0aFRva2VuID0gcHJvY2Vzcy5lbnYuVFdJTElPX0FVVEhLRVk7XG5jb25zdCBzbXMgPSBUd2lsaW8oYWNjb3VudFNpZCwgYXV0aFRva2VuKVxuXG5leHBvcnQgY29uc3QgeyBNZXNzYWdpbmdSZXNwb25zZSB9ID0gVHdpbGlvLnR3aW1sIFxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoYm9keTpzdHJpbmcsdG8/OnN0cmluZ1tdfCBhbnkpIHtcbiAgICBcbiAgICB0by5tYXAoYXN5bmMgKGkpID0+IHtcbiAgICAgICAgYXdhaXQgc21zLm1lc3NhZ2VzLmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuVFdJTElPX1BIT05FLFxuICAgICAgICAgICAgc2hvcnRlblVybHM6IHRydWUsXG4gICAgICAgICAgICB0bzogaVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IHNlbmRSZXBseSA9IChib2R5ID0gXCJUZXN0aW5nIHRoZSBhcGlcIiwgdG8/OiBhbnkpID0+IHtcbiAgICBfcGhvbmVudW1iZXIubWFwKGFzeW5jIChpKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld19NZXNzYWdlID0gYXdhaXQgc21zLm1lc3NhZ2VzLmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuVFdJTElPX1BIT05FPy50b1N0cmluZygpLFxuICAgICAgICAgICAgdG86IGlcbiAgICAgICAgfSlcbiAgICB9KVxuXG59XG5cblxuXG4iLCJpbXBvcnQgKiBhcyBteXNxbCBmcm9tICdteXNxbDInO1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcblxuXG5cblxuXG5jb25zdCBteXNxbEFjY2VzcyA9IG15c3FsLmNyZWF0ZVBvb2woe1xuICAgIHBvcnQ6MzMwNixcbiAgICB1c2VyOnByb2Nlc3MuZW52Lk1ZU1FMX1VTRVIsXG4gICAgcGFzc3dvcmQ6cHJvY2Vzcy5lbnYuTVlTUUxfUEFTU1dPUkQsXG4gICAgZGF0YWJhc2U6cHJvY2Vzcy5lbnYuREFUQUJBU0Vcbn0pXG5cbmV4cG9ydCBjb25zdCBRdWVyeSA9IChxdWVyeTpzdHJpbmcsdmFsdWVzPzpBcnJheTxzdHJpbmd8bnVtYmVyPik9PntcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8YW55Pj4oKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICBteXNxbEFjY2Vzcy5xdWVyeShxdWVyeSx2YWx1ZXMsKGVycixyZXN1bHRzOmFueSkgPT57XG4gICAgICAgICAgICBpZihlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn07XG5cblxuXG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCBhbGxNZXNzYWdlcyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdzZWxlY3QgKiBmcm9tIENvbW11bmljYXRpb24uSG9tZXBhZ2UnKTtcbmNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIENvbW11bmljYXRpb24uSG9tZXBhZ2UgU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuLy8gY29uc3QgZGVsZXRlTWVzc2FnZXMgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIGNvbnRhY3QgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG4vLyBjb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAoLi4udmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBLQ01fSU5DLmNsaWVudFJlZ2lzdHJhdGlvbiBTRVQgPycsIHZhbHVlcyk7XG4vLyBjb25zdCBpbnNlcnRJbnN0aXR1dGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmluc3RpdHV0aW9uIFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3QgdXBkYXRlTWVzc2FnZXMgPSBhc3luYyAobmV3Q29udGVudDogYW55LCBpZDogYW55KSA9PiBRdWVyeSgnVVBEQVRFIGNvbnRhY3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW25ld0NvbnRlbnQsIGlkXSlcbi8vIGNvbnN0IGFsbFVzZXJzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gVXNlcnMnKTtcbi8vIGNvbnN0IGluc2VydFVzZXJzID0gYXN5bmModXNlciA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRzIFNFVCA/JyAsW3VzZXJdKTtcbi8vIGNvbnN0IGluc2VydFBoeXNpY2FsID0gYXN5bmMocGh5c2ljYWwgOmFueSxjbGllbnRpZDpudW1iZXIgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudF9saWZlc3R5bGUgU0VUID8nICxbcGh5c2ljYWxdKTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYWxsTWVzc2FnZXMsXG4gICAgLy8gc2luZ2xlQ2hpcnAsXG4gICAgLy8gZGVsZXRlTWVzc2FnZXMsXG4gICAgaW5zZXJ0Q0xJRU5UXG4gICAgLy8gdXBkYXRlTWVzc2FnZXMsXG4gICAgLy8gaW5zZXJ0SW5zdGl0dXRpb25cbiAgICAvLyBhbGxVc2VycyxcbiAgICAvLyBpbnNlcnRVc2VycyxcbiAgICAvLyBpbnNlcnRQaHlzaWNhbFxuXG59IiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBkYXRhYmFzZV9xdWVyeSBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvSG9tZXBhZ2VfUXVlcnknO1xuaW1wb3J0IHsgc2VuZE1lc3NhZ2UsIE1lc3NhZ2luZ1Jlc3BvbnNlLCBzZW5kUmVwbHkgfSBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TTVMvc2VuZF9zbXMnO1xuaW1wb3J0ICcuL1BBWU1FTlRTL2F1dGhvcml6ZV9jYXJkJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vSG9tZXBhZ2UvY29udGFjdCdcblxuXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnY29tcGxpZV9mcm9udGVuZCcpKVxuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnNldCgndHJ1c3QgcHJveHknLCB0cnVlKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuXG5cbmNvbnN0IG5ld1VzZSA9IGFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICcqJylcbiAgbmV4dCgpXG59KVxuXG5hcHAudXNlKCcvbWVzc2FnZScsY29udGFjdClcblxuXG5hcHAuZ2V0KCcvdGVzdCcsIChyZXEsIHJlcykgPT4ge1xuICByZXMuanNvbignYScpXG59KVxuXG5hcHAuZ2V0KCcvZGF0YWJhc2UnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBkYXRhYmFzZV9xdWVyeS5hbGxNZXNzYWdlcygpXG4gIHJlcy5qc29uKG5ld1JlcGx5KVxuICBjb25zb2xlLmxvZyhuZXdSZXBseSlcblxufSlcblxuYXBwLnBvc3QoJy9kYXRhYmFzZV9wb3N0JywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgZGF0YWJhc2VfcXVlcnkuaW5zZXJ0Q0xJRU5UKHJlcS5ib2R5KVxuICByZXMuanNvbihuZXdSZXBseSlcbiAgY29uc29sZS5sb2cobmV3UmVwbHkpXG5cbn0pXG5cbmFwcC5wb3N0KCcvdHdpbGlvJywgKHJlcSwgcmVzKSA9PiB7XG4gIC8vIHNlbmRNZXNzYWdlKCk7XG4gIHJlcy5qc29uKFwib2tcIilcbn0pXG5cbmFwcC5wb3N0KCcvc21zJywgIChyZXEsIHJlcykgPT4ge1xuXG4gIGNvbnN0IHR3aW1sID0gbmV3IE1lc3NhZ2luZ1Jlc3BvbnNlKCk7XG5cbiAgdHdpbWwubWVzc2FnZSgnVGhlIFJvYm90cyBhcmUgY29taW5nISBIZWFkIGZvciB0aGUgaGlsbHMhJyk7XG4gIGNvbnNvbGUubG9nKHJlcS5ib2R5LkJvZHkpXG5cbiAgcmVzLmhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3htbCcpXG4gIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHR3aW1sLnRvU3RyaW5nKCkpXG59XG5cblxuXG4gIC8vIHJlcy50eXBlKCd0ZXh0L3htbCcpLnNlbmQodHdpbWwudG9TdHJpbmcoKSk7XG5cbik7XG5cbmFwcC5wb3N0KCcvdGVzdGluZ19iYWNrZW5kJywgIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IGRhdGFiYXNlX3F1ZXJ5Lmluc2VydENMSUVOVChyZXEuYm9keSlcbiAgc2VuZE1lc3NhZ2UoYCR7cmVxLmJvZHkuZmlyc3RfbmFtZS50b1VwcGVyQ2FzZSgpfSBXZSBhdCBLY20gSW5jIGFyZSBleGNpdGVkLmAscmVxLmJvZHkucGhvbmVfbnVtYmVyKVxuICBjb25zb2xlLmxvZyhuZXdSZXBseSkgXG5jb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgcmVzLmpzb24obmV3UmVwbHkpXG59KVxuXG5jb25zb2xlLmxvZyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOTk5OTk5KSsxMTExMTEpXG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MFxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtQT1JUfS4uLmApXG59KVxuXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXV0aG9yaXplbmV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnYvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXlzcWwyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR3aWxpb1wiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvQkFDS0VORC9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==