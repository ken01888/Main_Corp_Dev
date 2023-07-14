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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
var app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', true);
app.use(function (req, res, next) {
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
app.use('/', express.static(path.join('public')));
// app.get('/testing_sessions',(req:any,res)=>{
//   console.log(req.user)
//   res.json(req.user)
//   })
// app.use('/message',contact)
// app.use('/client_portal',client)
// app.use('/client_portal',billing)
// app.use('/client_portal_services',notary)
// app.use('/client_registration',registration)
// app.use(security)
// const PORT = process.env.PORT || 8080
app.listen(8080, function () {
    console.log("Server listening on port ".concat(8080, "..."));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlCLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFFcEMsNENBQTRDO0FBQzVDLCtDQUErQztBQUkvQyxvQkFBb0I7QUFLcEIsd0NBQXdDO0FBQ3hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBNEIsSUFBSSxRQUFLLENBQUM7QUFDcEQsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUEFZTUVOVFMvYXV0aG9yaXplX2NhcmQudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52L2NvbmZpZ1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgQVVUSE9SSVpFTkVUIGZyb20gJ2F1dGhvcml6ZW5ldCc7XG4vLyBpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG4vLyBpbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52JyBcbi8vIGRvdGVudi5jb25maWcoKVxuXG4vLyBsZXQgQXBpQ29udHJhY3RzID0gQVVUSE9SSVpFTkVULkFQSUNvbnRyYWN0cztcbi8vIGxldCBBcGlDb250cm9sbGVycyA9IEFVVEhPUklaRU5FVC5BUElDb250cm9sbGVycztcbi8vIGxldCBDb25zdGFudHMgPSBBVVRIT1JJWkVORVQuQ29uc3RhbnRzXG5cblxuXG4vLyBcdGZ1bmN0aW9uIGRlYml0QmFua0FjY291bnQoKSB7XG4vLyBcdFx0dmFyIG1lcmNoYW50QXV0aGVudGljYXRpb25UeXBlID0gbmV3IEFwaUNvbnRyYWN0cy5NZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZSgpO1xuLy8gXHRtZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZS5zZXROYW1lKFN0cmluZyhwcm9jZXNzLmVudi5BVVRIT1JJWkVfTkVUX0FQSV9MT0dJTl9JRCkpO1xuLy8gXHRtZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZS5zZXRUcmFuc2FjdGlvbktleShTdHJpbmcocHJvY2Vzcy5lbnYuQVVUSE9SSVpFX05FVF9UUkFOU0FDVElPTl9LRVkpKTtcblxuXHRcbi8vIFx0XHR2YXIgYmFua0FjY291bnRUeXBlID0gbmV3IEFwaUNvbnRyYWN0cy5CYW5rQWNjb3VudFR5cGUoKTtcbi8vIFx0XHRiYW5rQWNjb3VudFR5cGUuc2V0QWNjb3VudFR5cGUoQXBpQ29udHJhY3RzLkJhbmtBY2NvdW50VHlwZUVudW0uU0FWSU5HUyk7XG4vLyBcdFx0YmFua0FjY291bnRUeXBlLnNldFJvdXRpbmdOdW1iZXIoJzEyMTA0Mjg4MicpO1xuLy8gXHRcdC8vYWRkZWQgY29kZVxuLy8gXHRcdHZhciBiYW5rQWNjb3VudE51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OTk5OTkpICsgMTAwMDA7XG4vLyBcdFx0YmFua0FjY291bnRUeXBlLnNldEFjY291bnROdW1iZXIoYmFua0FjY291bnROdW0udG9TdHJpbmcoKSk7XG4vLyBcdFx0YmFua0FjY291bnRUeXBlLnNldE5hbWVPbkFjY291bnQoJ0pvaG4gRG9lJyk7XG5cdFxuLy8gXHRcdHZhciBwYXltZW50VHlwZSA9IG5ldyBBcGlDb250cmFjdHMuUGF5bWVudFR5cGUoKTtcbi8vIFx0XHRwYXltZW50VHlwZS5zZXRCYW5rQWNjb3VudChiYW5rQWNjb3VudFR5cGUpO1xuXHRcbi8vIFx0XHR2YXIgb3JkZXJEZXRhaWxzID0gbmV3IEFwaUNvbnRyYWN0cy5PcmRlclR5cGUoKTtcbi8vIFx0XHRvcmRlckRldGFpbHMuc2V0SW52b2ljZU51bWJlcignSU5WLTEyMzQ1Jyk7XG4vLyBcdFx0b3JkZXJEZXRhaWxzLnNldERlc2NyaXB0aW9uKCdQcm9kdWN0IERlc2NyaXB0aW9uJyk7XG5cdFxuLy8gXHRcdHZhciB0YXggPSBuZXcgQXBpQ29udHJhY3RzLkV4dGVuZGVkQW1vdW50VHlwZSgpO1xuLy8gXHRcdHRheC5zZXRBbW91bnQoJzQuMjYnKTtcbi8vIFx0XHR0YXguc2V0TmFtZSgnbGV2ZWwyIHRheCBuYW1lJyk7XG4vLyBcdFx0dGF4LnNldERlc2NyaXB0aW9uKCdsZXZlbDIgdGF4Jyk7XG5cdFxuLy8gXHRcdHZhciBkdXR5ID0gbmV3IEFwaUNvbnRyYWN0cy5FeHRlbmRlZEFtb3VudFR5cGUoKTtcbi8vIFx0XHRkdXR5LnNldEFtb3VudCgnOC41NScpO1xuLy8gXHRcdGR1dHkuc2V0TmFtZSgnZHV0eSBuYW1lJyk7XG4vLyBcdFx0ZHV0eS5zZXREZXNjcmlwdGlvbignZHV0eSBkZXNjcmlwdGlvbicpO1xuXHRcbi8vIFx0XHR2YXIgc2hpcHBpbmcgPSBuZXcgQXBpQ29udHJhY3RzLkV4dGVuZGVkQW1vdW50VHlwZSgpO1xuLy8gXHRcdHNoaXBwaW5nLnNldEFtb3VudCgnOC41NScpO1xuLy8gXHRcdHNoaXBwaW5nLnNldE5hbWUoJ3NoaXBwaW5nIG5hbWUnKTtcbi8vIFx0XHRzaGlwcGluZy5zZXREZXNjcmlwdGlvbignc2hpcHBpbmcgZGVzY3JpcHRpb24nKTtcblx0XG4vLyBcdFx0Ly8gdmFyIGJpbGxUbyA9IG5ldyBBcGlDb250cmFjdHMuQ3VzdG9tZXJBZGRyZXNzVHlwZSgpO1xuLy8gXHRcdC8vIGJpbGxUby5zZXRGaXJzdE5hbWUoJ0VsbGVuJyk7XG4vLyBcdFx0Ly8gYmlsbFRvLnNldExhc3ROYW1lKCdKb2huc29uJyk7XG4vLyBcdFx0Ly8gYmlsbFRvLnNldENvbXBhbnkoJ1NvdXZlbmlyb3BvbGlzJyk7XG4vLyBcdFx0Ly8gYmlsbFRvLnNldEFkZHJlc3MoJzE0IE1haW4gU3RyZWV0Jyk7XG4vLyBcdFx0Ly8gYmlsbFRvLnNldENpdHkoJ1BlY2FuIFNwcmluZ3MnKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0U3RhdGUoJ1RYJyk7XG4vLyBcdFx0Ly8gYmlsbFRvLnNldFppcCgnNDQ2MjgnKTtcbi8vIFx0XHQvLyBiaWxsVG8uc2V0Q291bnRyeSgnVVNBJyk7XG5cdFxuLy8gXHRcdHZhciBzaGlwVG8gPSBuZXcgQXBpQ29udHJhY3RzLkN1c3RvbWVyQWRkcmVzc1R5cGUoKTtcbi8vIFx0XHRzaGlwVG8uc2V0Rmlyc3ROYW1lKCdDaGluYScpO1xuLy8gXHRcdHNoaXBUby5zZXRMYXN0TmFtZSgnQmF5bGVzJyk7XG4vLyBcdFx0c2hpcFRvLnNldENvbXBhbnkoJ1RoeW1lIGZvciBUZWEnKTtcbi8vIFx0XHRzaGlwVG8uc2V0QWRkcmVzcygnMTIgTWFpbiBTdHJlZXQnKTtcbi8vIFx0XHRzaGlwVG8uc2V0Q2l0eSgnUGVjYW4gU3ByaW5ncycpO1xuLy8gXHRcdHNoaXBUby5zZXRTdGF0ZSgnVFgnKTtcbi8vIFx0XHRzaGlwVG8uc2V0WmlwKCc0NDYyOCcpO1xuLy8gXHRcdHNoaXBUby5zZXRDb3VudHJ5KCdVU0EnKTtcblx0XG4vLyBcdFx0dmFyIGxpbmVJdGVtX2lkMSA9IG5ldyBBcGlDb250cmFjdHMuTGluZUl0ZW1UeXBlKCk7XG4vLyBcdFx0bGluZUl0ZW1faWQxLnNldEl0ZW1JZCgnMScpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMS5zZXROYW1lKCd2YXNlJyk7XG4vLyBcdFx0bGluZUl0ZW1faWQxLnNldERlc2NyaXB0aW9uKCdjYW5uZXMgbG9nbycpO1xuLy8gXHRcdGxpbmVJdGVtX2lkMS5zZXRRdWFudGl0eSgnMTgnKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDEuc2V0VW5pdFByaWNlKCc0NS4wMCcpO1xuXHRcbi8vIFx0XHR2YXIgbGluZUl0ZW1faWQyID0gbmV3IEFwaUNvbnRyYWN0cy5MaW5lSXRlbVR5cGUoKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDIuc2V0SXRlbUlkKCcyJyk7XG4vLyBcdFx0bGluZUl0ZW1faWQyLnNldE5hbWUoJ3Zhc2UyJyk7XG4vLyBcdFx0bGluZUl0ZW1faWQyLnNldERlc2NyaXB0aW9uKCdjYW5uZXMgbG9nbzInKTtcbi8vIFx0XHRsaW5lSXRlbV9pZDIuc2V0UXVhbnRpdHkoJzI4Jyk7XG4vLyBcdFx0bGluZUl0ZW1faWQyLnNldFVuaXRQcmljZSgnMjUuMDAnKTtcblx0XG4vLyBcdFx0dmFyIGxpbmVJdGVtTGlzdDphbnkgPSBbXTtcbi8vIFx0XHRsaW5lSXRlbUxpc3QucHVzaChsaW5lSXRlbV9pZDEpO1xuLy8gXHRcdGxpbmVJdGVtTGlzdC5wdXNoKGxpbmVJdGVtX2lkMik7XG5cdFxuLy8gXHRcdHZhciBsaW5lSXRlbXMgPSBuZXcgQXBpQ29udHJhY3RzLkFycmF5T2ZMaW5lSXRlbSgpO1xuLy8gXHRcdGxpbmVJdGVtcy5zZXRMaW5lSXRlbShsaW5lSXRlbUxpc3QpO1xuXHRcbi8vIFx0XHR2YXIgdHJhbnNhY3Rpb25SZXF1ZXN0VHlwZSA9IG5ldyBBcGlDb250cmFjdHMuVHJhbnNhY3Rpb25SZXF1ZXN0VHlwZSgpO1xuLy8gXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0VHJhbnNhY3Rpb25UeXBlKEFwaUNvbnRyYWN0cy5UcmFuc2FjdGlvblR5cGVFbnVtLkFVVEhDQVBUVVJFVFJBTlNBQ1RJT04pO1xuLy8gXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0UGF5bWVudChwYXltZW50VHlwZSk7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRBbW91bnQoMTkuMDApO1xuLy8gXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0TGluZUl0ZW1zKGxpbmVJdGVtcyk7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRPcmRlcihvcmRlckRldGFpbHMpO1xuLy8gXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0VGF4KHRheCk7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXREdXR5KGR1dHkpO1xuLy8gXHRcdHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0U2hpcHBpbmcoc2hpcHBpbmcpO1xuLy8gXHRcdC8vIHRyYW5zYWN0aW9uUmVxdWVzdFR5cGUuc2V0QmlsbFRvKGJpbGxUbyk7XG4vLyBcdFx0dHJhbnNhY3Rpb25SZXF1ZXN0VHlwZS5zZXRTaGlwVG8oc2hpcFRvKTtcblx0XG4vLyBcdFx0dmFyIGNyZWF0ZVJlcXVlc3QgPSBuZXcgQXBpQ29udHJhY3RzLkNyZWF0ZVRyYW5zYWN0aW9uUmVxdWVzdCgpO1xuLy8gXHRcdGNyZWF0ZVJlcXVlc3Quc2V0UmVmSWQoJzEyMzQ1NicpO1xuLy8gXHRcdGNyZWF0ZVJlcXVlc3Quc2V0TWVyY2hhbnRBdXRoZW50aWNhdGlvbihtZXJjaGFudEF1dGhlbnRpY2F0aW9uVHlwZSk7XG4vLyBcdFx0Y3JlYXRlUmVxdWVzdC5zZXRUcmFuc2FjdGlvblJlcXVlc3QodHJhbnNhY3Rpb25SZXF1ZXN0VHlwZSk7XG5cdFxuLy8gXHRcdC8vcHJldHR5IHByaW50IHJlcXVlc3Rcbi8vIFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjcmVhdGVSZXF1ZXN0LmdldEpTT04oKSwgbnVsbCwgMikpO1xuXHRcdFx0XG4vLyBcdFx0dmFyIGN0cmwgPSBuZXcgQXBpQ29udHJvbGxlcnMuQ3JlYXRlVHJhbnNhY3Rpb25Db250cm9sbGVyKGNyZWF0ZVJlcXVlc3QuZ2V0SlNPTigpKTtcblx0XG4vLyBcdFx0Y3RybC5leGVjdXRlKGZ1bmN0aW9uKCl7XG5cdFxuLy8gXHRcdFx0dmFyIGFwaVJlc3BvbnNlID0gY3RybC5nZXRSZXNwb25zZSgpO1xuXHRcbi8vIFx0XHRcdHZhciByZXNwb25zZSA9IG5ldyBBcGlDb250cmFjdHMuQ3JlYXRlVHJhbnNhY3Rpb25SZXNwb25zZShhcGlSZXNwb25zZSk7XG5cdFxuLy8gXHRcdFx0Ly9wcmV0dHkgcHJpbnQgcmVzcG9uc2Vcbi8vIFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLCBudWxsLCAyKSk7XG5cdFxuLy8gXHRcdFx0aWYocmVzcG9uc2UgIT0gbnVsbCl7XG4vLyBcdFx0XHRcdGlmKHJlc3BvbnNlLmdldE1lc3NhZ2VzKCkuZ2V0UmVzdWx0Q29kZSgpID09IEFwaUNvbnRyYWN0cy5NZXNzYWdlVHlwZUVudW0uT0spe1xuLy8gXHRcdFx0XHRcdGlmKHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRNZXNzYWdlcygpICE9IG51bGwpe1xuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBjcmVhdGVkIHRyYW5zYWN0aW9uIHdpdGggVHJhbnNhY3Rpb24gSUQ6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0VHJhbnNJZCgpKTtcbi8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdSZXNwb25zZSBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldFJlc3BvbnNlQ29kZSgpKTtcbi8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdNZXNzYWdlIENvZGU6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0TWVzc2FnZXMoKS5nZXRNZXNzYWdlKClbMF0uZ2V0Q29kZSgpKTtcbi8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdEZXNjcmlwdGlvbjogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRNZXNzYWdlcygpLmdldE1lc3NhZ2UoKVswXS5nZXREZXNjcmlwdGlvbigpKTtcbi8vIFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdFx0ZWxzZSB7XG4vLyBcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRmFpbGVkIFRyYW5zYWN0aW9uLicpO1xuLy8gXHRcdFx0XHRcdFx0aWYocmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpICE9IG51bGwpe1xuLy8gXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXJyb3IgQ29kZTogJyArIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKS5nZXRFcnJvcigpWzBdLmdldEVycm9yQ29kZSgpKTtcbi8vIFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIG1lc3NhZ2U6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkuZ2V0RXJyb3IoKVswXS5nZXRFcnJvclRleHQoKSk7XG4vLyBcdFx0XHRcdFx0XHR9XG4vLyBcdFx0XHRcdFx0fVxuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHRcdGVsc2Uge1xuLy8gXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdGYWlsZWQgVHJhbnNhY3Rpb24uICcpO1xuLy8gXHRcdFx0XHRcdGlmKHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKSAhPSBudWxsICYmIHJlc3BvbnNlLmdldFRyYW5zYWN0aW9uUmVzcG9uc2UoKS5nZXRFcnJvcnMoKSAhPSBudWxsKXtcblx0XHRcdFx0XHRcbi8vIFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBDb2RlOiAnICsgcmVzcG9uc2UuZ2V0VHJhbnNhY3Rpb25SZXNwb25zZSgpLmdldEVycm9ycygpLmdldEVycm9yKClbMF0uZ2V0RXJyb3JDb2RlKCkpO1xuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIG1lc3NhZ2U6ICcgKyByZXNwb25zZS5nZXRUcmFuc2FjdGlvblJlc3BvbnNlKCkuZ2V0RXJyb3JzKCkuZ2V0RXJyb3IoKVswXS5nZXRFcnJvclRleHQoKSk7XG4vLyBcdFx0XHRcdFx0fVxuLy8gXHRcdFx0XHRcdGVsc2Uge1xuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIENvZGU6ICcgKyByZXNwb25zZS5nZXRNZXNzYWdlcygpLmdldE1lc3NhZ2UoKVswXS5nZXRDb2RlKCkpO1xuLy8gXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yIG1lc3NhZ2U6ICcgKyByZXNwb25zZS5nZXRNZXNzYWdlcygpLmdldE1lc3NhZ2UoKVswXS5nZXRUZXh0KCkpO1xuLy8gXHRcdFx0XHRcdH1cbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0fVxuLy8gXHRcdFx0ZWxzZSB7XG4vLyBcdFx0XHRcdGNvbnNvbGUubG9nKCdOdWxsIFJlc3BvbnNlLicpO1xuLy8gXHRcdFx0fVxuXHRcbi8vIFx0XHR9KTtcbi8vIFx0fVxuXHRcbi8vIFx0aWYgKHJlcXVpcmUubWFpbiA9PT0gbW9kdWxlKSB7XG4vLyBcdFx0ZGViaXRCYW5rQWNjb3VudChmdW5jdGlvbigpe1xuLy8gXHRcdFx0Y29uc29sZS5sb2coJ2RlYml0QmFua0FjY291bnQgY2FsbCBjb21wbGV0ZS4nKTtcbi8vIFx0XHR9KTtcbi8vIFx0fVxuLy8gXHRkZWJpdEJhbmtBY2NvdW50KClcbi8vIFx0bW9kdWxlLmV4cG9ydHMuZGViaXRCYW5rQWNjb3VudCA9IGRlYml0QmFua0FjY291bnQ7XG5cblxuXG5cblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuaW1wb3J0ICogYXMgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgSG9tZXBhZ2VTZXJ2ZXIgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5JztcbmltcG9ydCBDbGllbnRQb3J0YWwgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuaW1wb3J0IHsgTWVzc2FnaW5nUmVzcG9uc2UsIHNlbmRSZXBseSB9IGZyb20gJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG5pbXBvcnQgJy4vUEFZTUVOVFMvYXV0aG9yaXplX2NhcmQnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9Ib21lcGFnZS9jb250YWN0J1xuaW1wb3J0IGNsaWVudCBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnXG5pbXBvcnQgYmlsbGluZyBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRCaWxsaW5nJztcbmltcG9ydCBub3RhcnkgZnJvbSAnLi9DbGllbnRQb3J0YWwvQ2xpZW50U2VydmljZVJlcXVlc3QnO1xuaW1wb3J0IHJlZ2lzdHJhdGlvbiBmcm9tICcuL0hvbWVwYWdlL3JlZ2lzdHJhdGlvbidcbmltcG9ydCBzZWN1cml0eSBmcm9tICcuL1NlY3VyaXR5L1NpZ25pblZlcmlmaWNhdGlvbidcbmltcG9ydCAqIGFzIHNlc3Npb24gZnJvbSAnZXhwcmVzcy1zZXNzaW9uJ1xuXG5cblxuXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAuc2V0KCd0cnVzdCBwcm94eScsIHRydWUpXG5cblxuYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKVxuICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJyonKVxuICBuZXh0KClcbn0pXG5cbi8vIGFwcC51c2Uoc2Vzc2lvbih7XG4vLyAgIHNlY3JldDogJ2tleWJvYXJkIGNhdCcsXG4vLyAgIHJlc2F2ZTogZmFsc2UsXG4vLyAgIHNhdmVVbmluaXRpYWxpemVkOiBmYWxzZSxcbi8vICAgY29va2llOiB7IHNlY3VyZTogZmFsc2UgfVxuLy8gfSkpO1xuXG4vLyBhcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG4vLyBhcHAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XG5cbmFwcC51c2UoJy8nLGV4cHJlc3Muc3RhdGljKHBhdGguam9pbigncHVibGljJykpKVxuXG4vLyBhcHAuZ2V0KCcvdGVzdGluZ19zZXNzaW9ucycsKHJlcTphbnkscmVzKT0+e1xuLy8gICBjb25zb2xlLmxvZyhyZXEudXNlcilcbi8vICAgcmVzLmpzb24ocmVxLnVzZXIpXG4vLyAgIH0pXG5cbi8vIGFwcC51c2UoJy9tZXNzYWdlJyxjb250YWN0KVxuLy8gYXBwLnVzZSgnL2NsaWVudF9wb3J0YWwnLGNsaWVudClcbi8vIGFwcC51c2UoJy9jbGllbnRfcG9ydGFsJyxiaWxsaW5nKVxuXG4vLyBhcHAudXNlKCcvY2xpZW50X3BvcnRhbF9zZXJ2aWNlcycsbm90YXJ5KVxuLy8gYXBwLnVzZSgnL2NsaWVudF9yZWdpc3RyYXRpb24nLHJlZ2lzdHJhdGlvbilcblxuXG5cbi8vIGFwcC51c2Uoc2VjdXJpdHkpXG5cblxuXG5cbi8vIGNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODBcbmFwcC5saXN0ZW4oODA4MCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7ODA4MH0uLi5gKVxufSlcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==