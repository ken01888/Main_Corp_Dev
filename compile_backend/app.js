/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
                res.json(sendTextReply);
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;


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
    console.log('serialize', user);
    process.nextTick(function () {
        return done(null, {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            business_name: user.business_name,
            phone_number: user.phone_number,
            email: user.email,
            account_type: user.account_type,
            token: user.access_token
        });
    });
});
passport.deserializeUser(function (user, done) {
    console.log('deserialize', user);
    process.nextTick(function () {
        return done(null, user);
    });
});
router.post('/login_verification', passport.authenticate('local'), function (req, res) {
    if (req) {
        console.log(req.user);
        res.redirect('/');
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
// import contact from './Homepage/contact'
// import client from './ClientPortal/ClientPersonalDetails'
// import billing from './ClientPortal/ClientBilling';
// import notary from './ClientPortal/ClientServiceRequest';
var registration_1 = __webpack_require__(/*! ./Homepage/registration */ "./src/BACKEND/Homepage/registration.ts");
var localStrategy_1 = __webpack_require__(/*! ./Security/localStrategy */ "./src/BACKEND/Security/localStrategy.ts");
var session = __webpack_require__(/*! express-session */ "express-session");
__webpack_require__(/*! ./Security/Bearer */ "./src/BACKEND/Security/Bearer.ts");
var cookieparser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
var app = express();
app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('trust proxy', true);
app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', '*');
    next();
});
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
// app.use(authenticationUser)
app.use('/client_registration', registration_1.default);
// app.use('/message',contact)
// app.use('/client_portal',client)
// app.use('/client_portal',billing)
// app.use('/client_portal_services',notary)
app.listen(8000, function () {
    console.log("Server listening on port ".concat(8000, "..."));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2QsTUFBTSxFQUFFLGNBQWM7SUFDdEIsTUFBTSxFQUFFLEtBQUs7SUFDYixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Q0FDMUIsQ0FBQyxDQUFDLENBQUM7QUFDSixHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFJNUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBRXZDLEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQVUsQ0FBQztBQWFuQiw4QkFBOEI7QUFDOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxzQkFBWSxDQUFDO0FBQzdDLDhCQUE4QjtBQUM5QixtQ0FBbUM7QUFDbkMsb0NBQW9DO0FBQ3BDLDRDQUE0QztBQUU1QyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQTRCLElBQUksUUFBSyxDQUFDO0FBQ3BELENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL0hvbWVwYWdlL3JlZ2lzdHJhdGlvbi50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML0NvbmVjdGlvbi50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luL2luZGV4LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1NlY3VyaXR5L0JlYXJlci50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9TZWN1cml0eS9sb2NhbFN0cmF0ZWd5LnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImJjcnlwdFwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnYvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3Mtc2Vzc2lvblwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcIm15c3FsMlwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnQtaHR0cC1iZWFyZXJcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1sb2NhbFwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBkYXRhYmFzZV9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5JztcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgKiBhcyBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IHsgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24sIGNoZWNrQWNjb3VudCB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4nXG5pbXBvcnQgeyBVbmRlcmxpbmVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuY29uc3QgY2hlY2tDcmVkZW50aWFscyA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCBjaGVja19EQl9hZ2FpbnN0X2VtYWlsOiBhbnlbXSA9IGF3YWl0IGNoZWNrQWNjb3VudChyZXEuYm9keS5lbWFpbClcbiAgaWYgKGNoZWNrX0RCX2FnYWluc3RfZW1haWwubGVuZ3RoID09PSAwKSB7XG4gICAgbmV4dCgpXG4gIH0gZWxzZSB7XG4gICAgcmVzLmpzb24oJ1RoaXMgdXNlcm5hbWUgaXMgdW5hdmFpbGFibGUnKVxuICB9XG59XG5cblxucm91dGVyLnBvc3QoJy9yZWdpc3RyYXRpb24nLCBjaGVja0NyZWRlbnRpYWxzLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0U3luYyhOdW1iZXIocHJvY2Vzcy5lbnYuU0FMVF9ST1VORCkpO1xuICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2hTeW5jKHJlcS5ib2R5LmNvbmZpcm1fcGFzc3dvcmQsIHNhbHQpO1xuICBkZWxldGUgcmVxLmJvZHkuY29uZmlybV9wYXNzd29yZFxuICB2YXIgdG9rZW4gPSBqd3Quc2lnbih7IHVzZXJfbmFtZTogcmVxLmJvZHkuZW1haWwsIGVtYWlsOiByZXEuYm9keS5lbWFpbCB9LCBwcm9jZXNzLmVudi5CRUFSRVJfUFJJVkFURSk7XG4gIHJlcS5ib2R5LnBhc3N3b3JkID0gaGFzaFxuICByZXEuYm9keS5hY2Nlc3NfdG9rZW4gPSB0b2tlblxuICByZXEuYm9keS5jbGllbnRfYWNjZXNzX3BpbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSkgKyAxMTExMTFcbiAgY29uc3Qgc2VuZFRleHRSZXBseSA9IGF3YWl0IHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uKHJlcS5ib2R5KVxuICByZXMuanNvbihzZW5kVGV4dFJlcGx5KVxufSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cbiIsImltcG9ydCAqIGFzIG15c3FsIGZyb20gJ215c3FsMic7XG5pbXBvcnQgJ2RvdGVudi9jb25maWcnO1xuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBteXNxbEFjY2VzcyA9IG15c3FsLmNyZWF0ZVBvb2woe1xuICAgIHBvcnQ6MzMwNixcbiAgICB1c2VyOnByb2Nlc3MuZW52Lk1ZU1FMX1VTRVIsXG4gICAgcGFzc3dvcmQ6cHJvY2Vzcy5lbnYuTVlTUUxfUEFTU1dPUkQsXG4gICAgZGF0YWJhc2U6cHJvY2Vzcy5lbnYuREFUQUJBU0Vcbn0pXG5cbmV4cG9ydCBjb25zdCBRdWVyeSA9IChxdWVyeTpzdHJpbmcsdmFsdWVzPzpBcnJheTxzdHJpbmd8bnVtYmVyPik9PntcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8YW55Pj4oKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICBteXNxbEFjY2Vzcy5xdWVyeShxdWVyeSx2YWx1ZXMsKGVycixyZXN1bHRzOmFueSkgPT57XG4gICAgICAgICAgICBpZihlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn07XG5cblxuXG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG4gZXhwb3J0IGNvbnN0IHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgU0VUID8nLCB2YWx1ZXMpO1xuIGV4cG9ydCBjb25zdCBjaGVja0FjY291bnQgPSBhc3luYyAoZW1haWw6YW55KSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5Mb2dpbl9DcmVkZW50aWFscyBXSEVSRSBlbWFpbCA9ID8nLGVtYWlsKVxuXG5cblxuXG5cblxuIiwiXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgJ3Bhc3Nwb3J0LWxvY2FsJztcbmltcG9ydCAqIGFzIHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0IHtTdHJhdGVneSBhcyBCZWFyZXJTdHJhdGVneX0gZnJvbSAncGFzc3BvcnQtaHR0cC1iZWFyZXInO1xuaW1wb3J0ICogYXMgZGIgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQmVhcmVyVG9rZW5EZXRhaWxzJ1xuaW1wb3J0IHsgbXlzcWxBY2Nlc3MgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML0NvbmVjdGlvbic7XG5cblxuXG5cblxuXG5wYXNzcG9ydC51c2UobmV3IEJlYXJlclN0cmF0ZWd5KFxuICAgICAodG9rZW4sIGRvbmUpPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcbiAgICAgICAgbXlzcWxBY2Nlc3MucXVlcnkoYFNFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgV2hlcmUgYWNjZXNzX3Rva2VuID0gP2AsIFt0b2tlbl0sIChlcnJvciwgdXNlcikgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHsgcmV0dXJuIGRvbmUoZXJyb3IpOyB9XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHsgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpOyB9XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlciwgeyBzY29wZTogJ3JlYWQnIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG4pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0ICdwYXNzcG9ydC1sb2NhbCc7XG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCB7U3RyYXRlZ3kgYXMgTG9jYWxTdHJhdGVneX0gZnJvbSAncGFzc3BvcnQtbG9jYWwnXG5pbXBvcnQgeyBjaGVja0FjY291bnQgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luL2luZGV4J1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdCdcblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnBhc3Nwb3J0LnVzZSggbmV3IExvY2FsU3RyYXRlZ3koe1xuICB1c2VybmFtZUZpZWxkOiAnZW1haWwnLFxuICBwYXNzd29yZEZpZWxkOiAncGFzc3dvcmQnLFxufSwgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5KGVtYWlsOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nLCBkb25lOmFueSkge1xuICBjb25zdCBbdXNlcl0gPSBhd2FpdCBjaGVja0FjY291bnQoZW1haWwpXG4gIHRyeSB7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBtZXNzYWdlOiBcIkludmFsaWQgY3JlZGVudGlhbHMuXFxuXCIgfSk7XG4gICAgfVxuICAgIGlmICghYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkge1xuICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgbWVzc2FnZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlxcblwiIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxufVxuKSk7XG5cbnBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXIoKHVzZXI6YW55LCBkb25lKSA9PiB7XG5jb25zb2xlLmxvZygnc2VyaWFsaXplJyx1c2VyKVxuICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcblxuICAgIHJldHVybiBkb25lKG51bGwsIHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgZmlyc3RfbmFtZTogdXNlci5maXJzdF9uYW1lLFxuICAgICAgbGFzdF9uYW1lOiB1c2VyLmxhc3RfbmFtZSxcbiAgICAgIGJ1c2luZXNzX25hbWU6IHVzZXIuYnVzaW5lc3NfbmFtZSxcbiAgICAgIHBob25lX251bWJlcjogdXNlci5waG9uZV9udW1iZXIsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGFjY291bnRfdHlwZTogdXNlci5hY2NvdW50X3R5cGUsXG4gICAgICB0b2tlbjogdXNlci5hY2Nlc3NfdG9rZW5cbiAgICB9KTtcbiAgfSk7XG59KTtcblxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKCh1c2VyOiBhbnksIGRvbmUpID0+IHtcbiAgY29uc29sZS5sb2coJ2Rlc2VyaWFsaXplJyx1c2VyKVxuXG4gIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuICB9KTtcbn0pO1xuXG5cbnJvdXRlci5wb3N0KCcvbG9naW5fdmVyaWZpY2F0aW9uJywgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdsb2NhbCcpLCAocmVxOmFueSwgcmVzKSA9PiB7XG4gIGlmIChyZXEpIHtcbiAgICBjb25zb2xlLmxvZyhyZXEudXNlcilcbiAgICByZXMucmVkaXJlY3QoJy8nKVxuICB9IGVsc2UgaWYgKCFyZXEudXNlcikge1xuICAgIHJlcy5zZW5kU3RhdHVzKDQwMSlcblxuICB9XG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuXG5cblxuXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnYvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJteXNxbDJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtaHR0cC1iZWFyZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtbG9jYWxcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycydcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbi8vIGltcG9ydCBIb21lcGFnZVNlcnZlciBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvSG9tZXBhZ2VfUXVlcnknO1xuLy8gaW1wb3J0IENsaWVudFBvcnRhbCBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscyc7XG4vLyBpbXBvcnQgeyBNZXNzYWdpbmdSZXNwb25zZSwgc2VuZFJlcGx5IH0gZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU01TL3NlbmRfc21zJztcbi8vIGltcG9ydCAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvUEFZTUVOVFMvYXV0aG9yaXplX2NhcmQnO1xuLy8gaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9Ib21lcGFnZS9jb250YWN0J1xuLy8gaW1wb3J0IGNsaWVudCBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnXG4vLyBpbXBvcnQgYmlsbGluZyBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRCaWxsaW5nJztcbi8vIGltcG9ydCBub3RhcnkgZnJvbSAnLi9DbGllbnRQb3J0YWwvQ2xpZW50U2VydmljZVJlcXVlc3QnO1xuaW1wb3J0IHJlZ2lzdHJhdGlvbiBmcm9tICcuL0hvbWVwYWdlL3JlZ2lzdHJhdGlvbidcbmltcG9ydCBVUFN0cmF0ZWd5IGZyb20gJy4vU2VjdXJpdHkvbG9jYWxTdHJhdGVneSdcbmltcG9ydCAqIGFzIHNlc3Npb24gZnJvbSAnZXhwcmVzcy1zZXNzaW9uJ1xuaW1wb3J0ICcuL1NlY3VyaXR5L0JlYXJlcidcbmltcG9ydCAqIGFzIGNvb2tpZXBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJ1xuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnVzZShjb29raWVwYXJzZXIoKSlcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShjb3JzKCkpXG5hcHAuc2V0KCd0cnVzdCBwcm94eScsIHRydWUpXG5cbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgcmVzLnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICcqJylcbiAgbmV4dCgpXG59KVxuXG5cblxuXG5hcHAudXNlKHNlc3Npb24oe1xuICBzZWNyZXQ6ICdrZXlib2FyZCBjYXQnLFxuICByZXNhdmU6IGZhbHNlLFxuICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2UsXG4gIGNvb2tpZTogeyBzZWN1cmU6IGZhbHNlIH1cbn0pKTtcbmFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcbmFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcblxuXG5cbmFwcC51c2UoJy8nLCBleHByZXNzLnN0YXRpYygncHVibGljJykpO1xuXG5hcHAudXNlKFVQU3RyYXRlZ3kpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBhcHAudXNlKGF1dGhlbnRpY2F0aW9uVXNlcilcbmFwcC51c2UoJy9jbGllbnRfcmVnaXN0cmF0aW9uJywgcmVnaXN0cmF0aW9uKVxuLy8gYXBwLnVzZSgnL21lc3NhZ2UnLGNvbnRhY3QpXG4vLyBhcHAudXNlKCcvY2xpZW50X3BvcnRhbCcsY2xpZW50KVxuLy8gYXBwLnVzZSgnL2NsaWVudF9wb3J0YWwnLGJpbGxpbmcpXG4vLyBhcHAudXNlKCcvY2xpZW50X3BvcnRhbF9zZXJ2aWNlcycsbm90YXJ5KVxuXG5hcHAubGlzdGVuKDgwMDAsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAkezgwMDB9Li4uYClcbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=