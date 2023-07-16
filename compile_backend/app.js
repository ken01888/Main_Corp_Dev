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

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/BearerTokenDetails.ts":
/*!*************************************************************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/BearerTokenDetails.ts ***!
  \*************************************************************************************************/
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
exports.getBearerInfo = void 0;
var Conection_1 = __webpack_require__(/*! ../../Conection */ "./src/BACKEND/ProgramControlFlow/SQL/Conection.ts");
var getBearerInfo = function (token) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Credentials.Login_Credentials where access_token = ?', [token])];
}); }); };
exports.getBearerInfo = getBearerInfo;


/***/ }),

/***/ "./src/BACKEND/Security/Bearer.ts":
/*!****************************************!*\
  !*** ./src/BACKEND/Security/Bearer.ts ***!
  \****************************************/
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
__webpack_require__(/*! dotenv/config */ "dotenv/config");
__webpack_require__(/*! passport-local */ "passport-local");
var passport = __webpack_require__(/*! passport */ "passport");
var BearerStrategy = __webpack_require__(/*! passport-http-bearer */ "passport-http-bearer");
var db = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/BearerTokenDetails */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/BearerTokenDetails.ts");
passport.use(new BearerStrategy(function (token, done) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db.getBearerInfo(token)];
                case 1:
                    user = (_a.sent())[0];
                    console.log(token);
                    // if (!user) {return done(null, false); }
                    if (user) {
                        return [2 /*return*/, done(null, user, { scope: 'all' })];
                    }
                    return [2 /*return*/];
            }
        });
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
var LocalStrategy = __webpack_require__(/*! passport-local */ "passport-local");
var index_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/Login/index */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Login/index.ts");
var bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
var router = express.Router();
passport.use(new LocalStrategy({
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
    console.log('serialize :', user);
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
    console.log('deserialize :', user);
    process.nextTick(function () {
        return done(null, user);
    });
});
router.post('/login_verification', passport.authenticate('local'), function (req, res) {
    console.log('onpost :', req.user);
    if (req.user) {
        res.sendStatus(200);
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('trust proxy', true);
app.use(cookieparser());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
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
app.use('/', express.static(path.join('public')));
app.use(localStrategy_1.default);
app.get('/userData', passport.authenticate('session'), function (req, res) {
    console.log('onpost-testinuserData', req.user);
    res.send('hello');
});
app.use('/principle', passport.authenticate('bearer'), express.static(path.join('public')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25DLG9DQUFvQztBQUNwQyw0Q0FBNEM7QUFFNUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUE0QixJQUFJLFFBQUssQ0FBQztBQUNwRCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Ib21lcGFnZS9yZWdpc3RyYXRpb24udHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9Db25lY3Rpb24udHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Mb2dpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9CZWFyZXJUb2tlbkRldGFpbHMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL0JBQ0tFTkQvU2VjdXJpdHkvQmVhcmVyLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL1NlY3VyaXR5L2xvY2FsU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudi9jb25maWdcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwibXlzcWwyXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnRcIiIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1odHRwLWJlYXJlclwiIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0LWxvY2FsXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9CQUNLRU5EL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGRhdGFiYXNlX3F1ZXJ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvSG9tZXBhZ2VfUXVlcnknO1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdCdcbmltcG9ydCAqIGFzIGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgeyByZWdpc3RyYXRpb25JbmZvcm1hdGlvbiwgY2hlY2tBY2NvdW50IH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Mb2dpbidcbmltcG9ydCB7IFVuZGVybGluZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5jb25zdCBjaGVja0NyZWRlbnRpYWxzID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IGNoZWNrX0RCX2FnYWluc3RfZW1haWw6IGFueVtdID0gYXdhaXQgY2hlY2tBY2NvdW50KHJlcS5ib2R5LmVtYWlsKVxuICBpZiAoY2hlY2tfREJfYWdhaW5zdF9lbWFpbC5sZW5ndGggPT09IDApIHtcbiAgICBuZXh0KClcbiAgfSBlbHNlIHtcbiAgICByZXMuanNvbignVGhpcyB1c2VybmFtZSBpcyB1bmF2YWlsYWJsZScpXG4gIH1cbn1cblxuXG5yb3V0ZXIucG9zdCgnL3JlZ2lzdHJhdGlvbicsIGNoZWNrQ3JlZGVudGlhbHMsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHRTeW5jKE51bWJlcihwcm9jZXNzLmVudi5TQUxUX1JPVU5EKSk7XG4gIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaFN5bmMocmVxLmJvZHkuY29uZmlybV9wYXNzd29yZCwgc2FsdCk7XG4gIGRlbGV0ZSByZXEuYm9keS5jb25maXJtX3Bhc3N3b3JkXG4gIHZhciB0b2tlbiA9IGp3dC5zaWduKHsgdXNlcl9uYW1lOiByZXEuYm9keS5lbWFpbCwgZW1haWw6IHJlcS5ib2R5LmVtYWlsIH0sIHByb2Nlc3MuZW52LkJFQVJFUl9QUklWQVRFKTtcbiAgcmVxLmJvZHkucGFzc3dvcmQgPSBoYXNoXG4gIHJlcS5ib2R5LmFjY2Vzc190b2tlbiA9IHRva2VuXG4gIHJlcS5ib2R5LmNsaWVudF9hY2Nlc3NfcGluID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KSArIDExMTExMVxuICBjb25zdCBzZW5kVGV4dFJlcGx5ID0gYXdhaXQgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24ocmVxLmJvZHkpXG4gIHJlcy5qc29uKHNlbmRUZXh0UmVwbHkpXG59KTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuIiwiaW1wb3J0ICogYXMgbXlzcWwgZnJvbSAnbXlzcWwyJztcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IG15c3FsQWNjZXNzID0gbXlzcWwuY3JlYXRlUG9vbCh7XG4gICAgcG9ydDozMzA2LFxuICAgIHVzZXI6cHJvY2Vzcy5lbnYuTVlTUUxfVVNFUixcbiAgICBwYXNzd29yZDpwcm9jZXNzLmVudi5NWVNRTF9QQVNTV09SRCxcbiAgICBkYXRhYmFzZTpwcm9jZXNzLmVudi5EQVRBQkFTRVxufSlcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gKHF1ZXJ5OnN0cmluZyx2YWx1ZXM/OkFycmF5PHN0cmluZ3xudW1iZXI+KT0+e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxhbnk+PigocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgIG15c3FsQWNjZXNzLnF1ZXJ5KHF1ZXJ5LHZhbHVlcywoZXJyLHJlc3VsdHM6YW55KSA9PntcbiAgICAgICAgICAgIGlmKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfSlcbiAgICB9KVxufTtcblxuXG5cbiIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL0NvbmVjdGlvblwiO1xuXG5cbiBleHBvcnQgY29uc3QgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBDcmVkZW50aWFscy5Mb2dpbl9DcmVkZW50aWFscyBTRVQgPycsIHZhbHVlcyk7XG4gZXhwb3J0IGNvbnN0IGNoZWNrQWNjb3VudCA9IGFzeW5jIChlbWFpbDphbnkpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLkxvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIGVtYWlsID0gPycsZW1haWwpXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG5leHBvcnQgY29uc3QgZ2V0QmVhcmVySW5mbyA9IGFzeW5jICh0b2tlbikgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgd2hlcmUgYWNjZXNzX3Rva2VuID0gPycsW3Rva2VuXSk7XG4iLCJcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCAncGFzc3BvcnQtbG9jYWwnO1xuaW1wb3J0ICogYXMgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnXG5pbXBvcnQgKiBhcyBCZWFyZXJTdHJhdGVneSBmcm9tICdwYXNzcG9ydC1odHRwLWJlYXJlcic7XG5pbXBvcnQgKiBhcyBkYiBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9CZWFyZXJUb2tlbkRldGFpbHMnXG5cblxuXG5cblxuXG5wYXNzcG9ydC51c2UobmV3IEJlYXJlclN0cmF0ZWd5KFxuICAgIGFzeW5jIGZ1bmN0aW9uICh0b2tlbiwgZG9uZSkge1xuICAgICAgICBjb25zdCBbdXNlcl0gPSBhd2FpdCBkYi5nZXRCZWFyZXJJbmZvKHRva2VuKVxuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcbiAgICAgICAgLy8gaWYgKCF1c2VyKSB7cmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpOyB9XG4gICAgICAgIGlmICh1c2VyKXtyZXR1cm4gZG9uZShudWxsLCB1c2VyLCB7IHNjb3BlOiAnYWxsJyB9KVxuICAgIH1cbiAgICB9XG4pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0ICdwYXNzcG9ydC1sb2NhbCc7XG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCAqIGFzIExvY2FsU3RyYXRlZ3kgZnJvbSAncGFzc3BvcnQtbG9jYWwnXG5pbXBvcnQgeyBjaGVja0FjY291bnQgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luL2luZGV4J1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdCdcblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cblxucGFzc3BvcnQudXNlKCBuZXcgTG9jYWxTdHJhdGVneSh7XG4gIHVzZXJuYW1lRmllbGQ6ICdlbWFpbCcsXG4gIHBhc3N3b3JkRmllbGQ6ICdwYXNzd29yZCcsXG59LCBhc3luYyBmdW5jdGlvbiB2ZXJpZnkoZW1haWwsIHBhc3N3b3JkLCBkb25lKSB7XG4gIGNvbnN0IFt1c2VyXSA9IGF3YWl0IGNoZWNrQWNjb3VudChlbWFpbClcbiAgdHJ5IHtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlLCB7IG1lc3NhZ2U6IFwiSW52YWxpZCBjcmVkZW50aWFscy5cXG5cIiB9KTtcbiAgICB9XG4gICAgaWYgKCFiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpKSB7XG4gICAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBtZXNzYWdlOiBcIkludmFsaWQgY3JlZGVudGlhbHMuXFxuXCIgfSk7XG4gICAgfVxuICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG4pKTtcblxucGFzc3BvcnQuc2VyaWFsaXplVXNlcigodXNlcjphbnksIGRvbmUpID0+IHtcbiAgY29uc29sZS5sb2coJ3NlcmlhbGl6ZSA6Jyx1c2VyKVxuXG4gIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuXG4gICAgcmV0dXJuIGRvbmUobnVsbCwge1xuICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICBmaXJzdF9uYW1lOiB1c2VyLmZpcnN0X25hbWUsXG4gICAgICBsYXN0X25hbWU6IHVzZXIubGFzdF9uYW1lLFxuICAgICAgYnVzaW5lc3NfbmFtZTogdXNlci5idXNpbmVzc19uYW1lLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyLnBob25lX251bWJlcixcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgYWNjb3VudF90eXBlOiB1c2VyLmFjY291bnRfdHlwZSxcbiAgICAgIHRva2VuOiB1c2VyLmFjY2Vzc190b2tlblxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5wYXNzcG9ydC5kZXNlcmlhbGl6ZVVzZXIoKHVzZXI6IGFueSwgZG9uZSkgPT4ge1xuICBjb25zb2xlLmxvZygnZGVzZXJpYWxpemUgOicsdXNlcilcbiAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XG4gIH0pO1xufSk7XG5cblxucm91dGVyLnBvc3QoJy9sb2dpbl92ZXJpZmljYXRpb24nLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsJyksIChyZXE6YW55LCByZXMpID0+IHtcbmNvbnNvbGUubG9nKCdvbnBvc3QgOicscmVxLnVzZXIpXG4gIGlmIChyZXEudXNlcikge1xuICAgIHJlcy5zZW5kU3RhdHVzKDIwMClcbiAgfSBlbHNlIGlmICghcmVxLnVzZXIpIHtcbiAgICByZXMuc2VuZFN0YXR1cyg0MDEpXG5cbiAgfVxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuXG5cblxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXlzcWwyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWh0dHAtYmVhcmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWxvY2FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycydcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbi8vIGltcG9ydCBIb21lcGFnZVNlcnZlciBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvSG9tZXBhZ2VfUXVlcnknO1xuLy8gaW1wb3J0IENsaWVudFBvcnRhbCBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscyc7XG4vLyBpbXBvcnQgeyBNZXNzYWdpbmdSZXNwb25zZSwgc2VuZFJlcGx5IH0gZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU01TL3NlbmRfc21zJztcbi8vIGltcG9ydCAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvUEFZTUVOVFMvYXV0aG9yaXplX2NhcmQnO1xuLy8gaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9Ib21lcGFnZS9jb250YWN0J1xuLy8gaW1wb3J0IGNsaWVudCBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnXG4vLyBpbXBvcnQgYmlsbGluZyBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRCaWxsaW5nJztcbi8vIGltcG9ydCBub3RhcnkgZnJvbSAnLi9DbGllbnRQb3J0YWwvQ2xpZW50U2VydmljZVJlcXVlc3QnO1xuaW1wb3J0IHJlZ2lzdHJhdGlvbiBmcm9tICcuL0hvbWVwYWdlL3JlZ2lzdHJhdGlvbidcbmltcG9ydCBVUFN0cmF0ZWd5IGZyb20gJy4vU2VjdXJpdHkvbG9jYWxTdHJhdGVneSdcbmltcG9ydCAqIGFzIHNlc3Npb24gZnJvbSAnZXhwcmVzcy1zZXNzaW9uJ1xuaW1wb3J0ICcuL1NlY3VyaXR5L0JlYXJlcidcbmltcG9ydCAqIGFzIGNvb2tpZXBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJ1xuaW1wb3J0ICogYXMgZGIgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9CZWFyZXJUb2tlbkRldGFpbHMnXG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoY29ycygpKVxuYXBwLnNldCgndHJ1c3QgcHJveHknLCB0cnVlKVxuYXBwLnVzZShjb29raWVwYXJzZXIoKSlcblxuYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgJyonKVxuICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJyonKVxuICBuZXh0KClcbn0pXG5cblxuXG5cbmFwcC51c2Uoc2Vzc2lvbih7XG4gIHNlY3JldDogJ2tleWJvYXJkIGNhdCcsXG4gIHJlc2F2ZTogZmFsc2UsXG4gIHNhdmVVbmluaXRpYWxpemVkOiBmYWxzZSxcbiAgY29va2llOiB7IHNlY3VyZTogZmFsc2UgfVxufSkpO1xuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xuYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpO1xuXG5cblxuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbigncHVibGljJykpKVxuYXBwLnVzZShVUFN0cmF0ZWd5KVxuXG5hcHAuZ2V0KCcvdXNlckRhdGEnLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ3Nlc3Npb24nKSwgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdvbnBvc3QtdGVzdGludXNlckRhdGEnLCByZXEudXNlcilcbiAgcmVzLnNlbmQoJ2hlbGxvJylcbn0pXG5cblxuXG5hcHAudXNlKCcvcHJpbmNpcGxlJyxcbiAgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdiZWFyZXInKSxcbiAgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKCdwdWJsaWMnKSkpXG5cblxuXG5cbi8vIGFwcC51c2UoYXV0aGVudGljYXRpb25Vc2VyKVxuYXBwLnVzZSgnL2NsaWVudF9yZWdpc3RyYXRpb24nLCByZWdpc3RyYXRpb24pXG4vLyBhcHAudXNlKCcvbWVzc2FnZScsY29udGFjdClcbi8vIGFwcC51c2UoJy9jbGllbnRfcG9ydGFsJyxjbGllbnQpXG4vLyBhcHAudXNlKCcvY2xpZW50X3BvcnRhbCcsYmlsbGluZylcbi8vIGFwcC51c2UoJy9jbGllbnRfcG9ydGFsX3NlcnZpY2VzJyxub3RhcnkpXG5cbmFwcC5saXN0ZW4oODAwMCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7ODAwMH0uLi5gKVxufSlcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==