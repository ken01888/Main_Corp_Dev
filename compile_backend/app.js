/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/BACKEND/ClientPortal/Audits/InventoryAudits.ts":
/*!************************************************************!*\
  !*** ./src/BACKEND/ClientPortal/Audits/InventoryAudits.ts ***!
  \************************************************************/
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
var Inventory_1 = __webpack_require__(/*! ../../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory.ts");
var router = express.Router();
router.get('/inventoryPeriod', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var inventory_period;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.selectUniqueInventoryPeriod(req.cookies.user.id)];
            case 1:
                inventory_period = _a.sent();
                res.json(inventory_period);
                return [2 /*return*/];
        }
    });
}); });
router.get('/inventory_reference_information', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var reply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.getInventoryReference(req.cookies.user.id, req.query.auditDate)];
            case 1:
                reply = _a.sent();
                res.json(reply);
                return [2 /*return*/];
        }
    });
}); });
router.delete('/deleteInventoryAuditItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.deleteInventoryAuditItem(req.body)];
            case 1:
                current_store = _a.sent();
                res.json(current_store.affectedRows);
                return [2 /*return*/];
        }
    });
}); });
router.put('/updateInventoryAuditItem', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.updateInventoryAuditItem(req.body.values, req.body.id)];
            case 1:
                current_store = _a.sent();
                res.json(current_store);
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

/***/ "./src/BACKEND/ClientPortal/Nutrition.ts":
/*!***********************************************!*\
  !*** ./src/BACKEND/ClientPortal/Nutrition.ts ***!
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
var Inventory_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory.ts");
var router = express.Router();
// Add Nutrition Information
router.get('/getNutrients/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business_id, getProducts, getProducts_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                business_id = req.params.id;
                return [4 /*yield*/, Inventory_1.default.getRecipeProduct(business_id)];
            case 1:
                getProducts = _a.sent();
                getProducts.map(function (i, n, a) { return __awaiter(void 0, void 0, void 0, function () {
                    var getInputs, productMeta;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Inventory_1.default.getInputForUpdate(i.id)];
                            case 1:
                                getInputs = _a.sent();
                                getInputs.map(function (i, n, a) { return __awaiter(void 0, void 0, void 0, function () {
                                    var newReply;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, Inventory_1.default.UpdateProductInputs(i, i.id)];
                                            case 1:
                                                newReply = _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [4 /*yield*/, Inventory_1.default.inputNutritionalInformation(i.id)];
                            case 2:
                                productMeta = _a.sent();
                                Inventory_1.default.insertInputItemMeta(productMeta[0], i.id);
                                return [2 /*return*/, i];
                        }
                    });
                }); });
                return [4 /*yield*/, Inventory_1.default.getRecipeProduct(business_id)];
            case 2:
                getProducts_1 = _a.sent();
                res.json(getProducts_1);
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;


/***/ }),

/***/ "./src/BACKEND/ClientPortal/Products.ts":
/*!**********************************************!*\
  !*** ./src/BACKEND/ClientPortal/Products.ts ***!
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
var Inventory_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory.ts");
var convert = __webpack_require__(/*! convert-units */ "convert-units");
var router = express.Router();
router.get('/getRecipeProduct', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getProducts, getProducts_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.getRecipeProduct(req.cookies.user.id)];
            case 1:
                getProducts = _a.sent();
                getProducts.map(function (i, n, a) { return __awaiter(void 0, void 0, void 0, function () {
                    var getInputs, productMeta;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Inventory_1.default.getInputForUpdate(i.id)];
                            case 1:
                                getInputs = _a.sent();
                                getInputs.map(function (i, n, a) { return __awaiter(void 0, void 0, void 0, function () {
                                    var newReply;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, Inventory_1.default.UpdateProductInputs(i, i.id)];
                                            case 1:
                                                newReply = _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [4 /*yield*/, Inventory_1.default.inputNutritionalInformation(i.id)];
                            case 2:
                                productMeta = _a.sent();
                                Inventory_1.default.insertInputItemMeta(productMeta[0], i.id);
                                return [2 /*return*/, i];
                        }
                    });
                }); });
                return [4 /*yield*/, Inventory_1.default.getRecipeProduct(req.cookies.user.id)];
            case 2:
                getProducts_1 = _a.sent();
                res.json(getProducts_1);
                return [2 /*return*/];
        }
    });
}); });
router.get('/inventoryItemsForSelectRecipes', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getProducts, selectItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.getInventoryItemsforSelect(req.cookies.user.id)];
            case 1:
                getProducts = _a.sent();
                selectItem = getProducts.map(function (i, n, a) {
                    return {
                        value: i.id,
                        label: i.description,
                        price_per_gram: i.price_per_gram
                    };
                });
                res.json(selectItem);
                return [2 /*return*/];
        }
    });
}); });
router.post('/insertProductName', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var insertProduct;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req.body.business_id = req.cookies.user.id;
                req.body.serving_size = convert(req.body.serving_size.amount).from(req.body.serving_size.unit).to('g');
                return [4 /*yield*/, Inventory_1.default.insertProductRecipeName(req.body)];
            case 1:
                insertProduct = _a.sent();
                res.json('hello');
                return [2 /*return*/];
        }
    });
}); });
router.post('/insertProductInputs', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dataExhange, data_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, req.body.inputs.forEach(function (i, n, a) { return __awaiter(void 0, void 0, void 0, function () {
                    var getProducts;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                i.input_weight = convert(i.input_weight).from(i.unit).to('g');
                                return [4 /*yield*/, Inventory_1.default.getInventoryItemsforRecording(i.inventory_item_id)];
                            case 1:
                                getProducts = _a.sent();
                                i.input_cost = parseInt(i.input_weight) * getProducts[0].price_per_gram;
                                i.calories = parseInt(i.input_weight) * getProducts[0].calories;
                                i.total_fat = parseInt(i.input_weight) * getProducts[0].total_fat;
                                i.saturated_fat = parseInt(i.input_weight) * getProducts[0].saturated_fat;
                                i.trans_fat = parseInt(i.input_weight) * getProducts[0].trans_fat;
                                i.cholesterol = parseInt(i.input_weight) * getProducts[0].cholesterol;
                                i.sodium = parseInt(i.input_weight) * getProducts[0].sodium;
                                i.carbohydrates = parseInt(i.input_weight) * getProducts[0].carbohydrates;
                                i.fiber = parseInt(i.input_weight) * getProducts[0].fiber;
                                i.sugar = parseInt(i.input_weight) * getProducts[0].sugar;
                                i.added_sugar = parseInt(i.input_weight) * getProducts[0].added_sugar;
                                i.protein = parseInt(i.input_weight) * getProducts[0].protein;
                                i.calcium = parseInt(i.input_weight) * getProducts[0].calcium;
                                i.iron = parseInt(i.input_weight) * getProducts[0].iron;
                                i.potassium = parseInt(i.input_weight) * getProducts[0].potassium;
                                i.vitamin_d = parseInt(i.input_weight) * getProducts[0].vitamin_d;
                                delete i.unit;
                                return [4 /*yield*/, Inventory_1.default.insertIngredients(i, req.body.inputs.product_id)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); })];
            case 1:
                dataExhange = _a.sent();
                return [4 /*yield*/, Inventory_1.default.inputNutritionalInformation(req.body.inputs[0].product_id)];
            case 2:
                data_3 = _a.sent();
                Inventory_1.default.insertInputItemMetaFull(data_3[0], req.body.inputs[0].product_id);
                res.json('costUpload');
                return [2 /*return*/];
        }
    });
}); });
router.put('/updateProductInformation', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_store, weightGrams, current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(req.body.values.serving_size.amount == undefined && req.body.values.serving_size.unit == undefined && req.body.values.product_name == undefined && req.body.values.sales_price == undefined && req.body.values.units == undefined)) return [3 /*break*/, 1];
                res.json({ affectedRows: 1 });
                return [3 /*break*/, 5];
            case 1:
                if (!(req.body.values.serving_size.amount == undefined || req.body.values.serving_size.unit == undefined)) return [3 /*break*/, 3];
                delete req.body.values.serving_size;
                return [4 /*yield*/, Inventory_1.default.UpdateProduct(req.body.values, req.body.id)];
            case 2:
                current_store = _a.sent();
                res.json(current_store);
                return [3 /*break*/, 5];
            case 3:
                weightGrams = convert(req.body.values.serving_size.amount).from(req.body.values.serving_size.unit).to('g');
                req.body.values.serving_size = weightGrams;
                return [4 /*yield*/, Inventory_1.default.UpdateProduct(req.body.values, req.body.id)];
            case 4:
                current_store = _a.sent();
                res.json(current_store);
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
router.delete('/deleteProduct', function (req, res) {
    Inventory_1.default.deleteProduct(req.body[0]);
    Inventory_1.default.deleteInput(req.body[0]);
    res.json('success');
});
router.get('/allProductInputs', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getInputs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.selectAllInputs(req.query.product_id)];
            case 1:
                getInputs = _a.sent();
                res.json(getInputs);
                return [2 /*return*/];
        }
    });
}); });
router.put('/updateInputs', function (req, res) {
    Object.values(req.body).map(function (i, n, a) { return __awaiter(void 0, void 0, void 0, function () {
        var getProducts, input_weight, input_cost, inputId, product_id, newReply, productMeta, newReply2, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, Inventory_1.default.getInventoryItemsforRecording(i.inventory_item_id)];
                case 1:
                    getProducts = _a.sent();
                    input_weight = convert(Number(i.amount)).from(i.unit).to('g');
                    input_cost = i.price_per_gram * input_weight;
                    i.input_weight = input_weight;
                    i.input_cost = input_cost;
                    i.calories = parseInt(i.input_weight) * getProducts[0].calories;
                    i.total_fat = parseInt(i.input_weight) * getProducts[0].total_fat;
                    i.saturated_fat = parseInt(i.input_weight) * getProducts[0].saturated_fat;
                    i.trans_fat = parseInt(i.input_weight) * getProducts[0].trans_fat;
                    i.cholesterol = parseInt(i.input_weight) * getProducts[0].cholesterol;
                    i.sodium = parseInt(i.input_weight) * getProducts[0].sodium;
                    i.carbohydrates = parseInt(i.input_weight) * getProducts[0].carbohydrates;
                    i.fiber = parseInt(i.input_weight) * getProducts[0].fiber;
                    i.sugar = parseInt(i.input_weight) * getProducts[0].sugar;
                    i.added_sugar = parseInt(i.input_weight) * getProducts[0].added_sugar;
                    i.protein = parseInt(i.input_weight) * getProducts[0].protein;
                    i.calcium = parseInt(i.input_weight) * getProducts[0].calcium;
                    i.iron = parseInt(i.input_weight) * getProducts[0].iron;
                    i.potassium = parseInt(i.input_weight) * getProducts[0].potassium;
                    i.vitamin_d = parseInt(i.input_weight) * getProducts[0].vitamin_d;
                    inputId = i.id;
                    product_id = i.product_id;
                    delete i.id;
                    delete i.product_id;
                    delete i.price_per_gram;
                    delete i.description;
                    delete i.amount;
                    delete i.unit;
                    return [4 /*yield*/, Inventory_1.default.UpdateProductInputs(i, inputId)];
                case 2:
                    newReply = _a.sent();
                    return [4 /*yield*/, Inventory_1.default.inputNutritionalInformation(product_id)];
                case 3:
                    productMeta = _a.sent();
                    return [4 /*yield*/, Inventory_1.default.insertInputItemMeta(productMeta[0], product_id)];
                case 4:
                    newReply2 = _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    return [2 /*return*/, error_1];
                case 6: return [2 /*return*/];
            }
        });
    }); });
    var affectedRows = 1;
    res.json(affectedRows);
});
router.delete('/deleteInputs', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_product_inputs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.deleteInputMeta(req.body[0])];
            case 1:
                current_product_inputs = _a.sent();
                res.json(current_product_inputs);
                return [2 /*return*/];
        }
    });
}); });
router.get('/getNutrients/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business_id, getProducts, getProducts_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                business_id = req.params.id;
                return [4 /*yield*/, Inventory_1.default.getRecipeProduct(business_id)];
            case 1:
                getProducts = _a.sent();
                getProducts.map(function (i, n, a) { return __awaiter(void 0, void 0, void 0, function () {
                    var getInputs, productMeta;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Inventory_1.default.getInputForUpdate(i.id)];
                            case 1:
                                getInputs = _a.sent();
                                getInputs.map(function (i, n, a) { return __awaiter(void 0, void 0, void 0, function () {
                                    var newReply;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, Inventory_1.default.UpdateProductInputs(i, i.id)];
                                            case 1:
                                                newReply = _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [4 /*yield*/, Inventory_1.default.inputNutritionalInformation(i.id)];
                            case 2:
                                productMeta = _a.sent();
                                Inventory_1.default.insertInputItemMeta(productMeta[0], i.id);
                                return [2 /*return*/, i];
                        }
                    });
                }); });
                return [4 /*yield*/, Inventory_1.default.getRecipeProduct(business_id)];
            case 2:
                getProducts_1 = _a.sent();
                res.json(getProducts_1);
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;


/***/ }),

/***/ "./src/BACKEND/ClientPortal/QRCODE/inStoreAudits.ts":
/*!**********************************************************!*\
  !*** ./src/BACKEND/ClientPortal/QRCODE/inStoreAudits.ts ***!
  \**********************************************************/
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
var Inventory_1 = __webpack_require__(/*! ../../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/Inventory.ts");
var router = express.Router();
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
                req.body.order_quantity = req.body.recommended_stock_level - req.body.in_stock;
                if (req.body.order_quantity <= 0) {
                    req.body.order_quantity = 0;
                }
                delete req.body.recommended_stock_level;
                return [4 /*yield*/, Inventory_1.default.insertInventoryChecklistItems(req.body)];
            case 1:
                newReply = _a.sent();
                res.json(newReply);
                return [2 /*return*/];
        }
    });
}); });
router.get('/publicNutritionalInformation/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business_id, newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                business_id = req.params.id;
                return [4 /*yield*/, Inventory_1.default.getNutritionalInfoForPublic(business_id)];
            case 1:
                newReply = _a.sent();
                res.json(newReply);
                return [2 /*return*/];
        }
    });
}); });
exports["default"] = router;


/***/ }),

/***/ "./src/BACKEND/ClientPortal/Stock.ts":
/*!*******************************************!*\
  !*** ./src/BACKEND/ClientPortal/Stock.ts ***!
  \*******************************************/
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
var convert = __webpack_require__(/*! convert-units */ "convert-units");
var router = express.Router();
router.get('/getInventoryItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var resultInventory;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.getInventoryItems(req.cookies.user.id)];
            case 1:
                resultInventory = _a.sent();
                res.json(resultInventory);
                return [2 /*return*/];
        }
    });
}); });
router.post('/insertNewInventoryItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var weightGrams, current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req.body.business_id = req.cookies.user.id;
                weightGrams = convert(req.body.total_package_weight.unit).from(req.body.total_package_weight.weight).to('g');
                req.body.price_per_gram = Number(req.body.price / weightGrams).toFixed(4);
                req.body.total_package_weight = weightGrams;
                return [4 /*yield*/, Inventory_1.default.insertInventoryItem(req.body)];
            case 1:
                current_store = _a.sent();
                res.json(current_store);
                return [2 /*return*/];
        }
    });
}); });
router.put('/updateInventoryItem', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getProducts, weightGrams, price_per_gram, current_store, price_per_gram, current_store, current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.getInventoryItemsforRecording(req.body.id)];
            case 1:
                getProducts = _a.sent();
                if (!(req.body.values.total_package_weight && !req.body.values.price)) return [3 /*break*/, 3];
                weightGrams = convert(req.body.values.total_package_weight.unit).from(req.body.values.total_package_weight.weight).to('g');
                price_per_gram = Number(getProducts[0].price / weightGrams);
                req.body.values.price_per_gram = Number(price_per_gram).toFixed(4);
                req.body.values.total_package_weight = weightGrams;
                return [4 /*yield*/, Inventory_1.default.updateInventoryItem(req.body.values, req.body.id)];
            case 2:
                current_store = _a.sent();
                res.json(current_store);
                return [3 /*break*/, 7];
            case 3:
                if (!(!req.body.values.total_package_weight && req.body.values.price)) return [3 /*break*/, 5];
                price_per_gram = Number(req.body.values.price / getProducts[0].total_package_weight);
                req.body.values.price_per_gram = Number(price_per_gram).toFixed(4);
                return [4 /*yield*/, Inventory_1.default.updateInventoryItem(req.body.values, req.body.id)];
            case 4:
                current_store = _a.sent();
                res.json(current_store);
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, Inventory_1.default.updateInventoryItem(req.body.values, req.body.id)];
            case 6:
                current_store = _a.sent();
                res.json(current_store);
                _a.label = 7;
            case 7: return [2 /*return*/];
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
router.put('/addNutritionInformation', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var divider, addedNewNutritionItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                divider = 1 / req.body.values.serving_size.amount;
                req.body.values.calories = req.body.values.calories.amount * divider;
                req.body.values.total_fat = ((convert(req.body.values.total_fat.amount).from(req.body.values.total_fat.unit).to('g')) * divider);
                req.body.values.saturated_fat = convert(req.body.values.saturated_fat.amount).from(req.body.values.saturated_fat.unit).to('g') * divider;
                req.body.values.trans_fat = convert(req.body.values.trans_fat.amount).from(req.body.values.trans_fat.unit).to('g') * divider;
                req.body.values.cholesterol = convert(req.body.values.cholesterol.amount).from(req.body.values.cholesterol.unit).to('mg') * divider;
                req.body.values.sodium = convert(req.body.values.sodium.amount).from(req.body.values.sodium.unit).to('mg') * divider;
                req.body.values.carbohydrates = convert(req.body.values.carbohydrates.amount).from(req.body.values.carbohydrates.unit).to('g') * divider;
                req.body.values.fiber = convert(req.body.values.fiber.amount).from(req.body.values.fiber.unit).to('g') * divider;
                req.body.values.sugar = convert(req.body.values.sugar.amount).from(req.body.values.sugar.unit).to('g') * divider;
                req.body.values.protein = convert(req.body.values.protein.amount).from(req.body.values.protein.unit).to('g') * divider;
                req.body.values.calcium = convert(req.body.values.calcium.amount).from(req.body.values.calcium.unit).to('mg') * divider;
                req.body.values.iron = convert(req.body.values.iron.amount).from(req.body.values.iron.unit).to('mg') * divider;
                req.body.values.potassium = convert(req.body.values.potassium.amount).from(req.body.values.potassium.unit).to('mg') * divider;
                req.body.values.added_sugar = convert(req.body.values.added_sugar.amount).from(req.body.values.added_sugar.unit).to('g') * divider;
                req.body.values.vitamin_d = convert(req.body.values.vitamin_d.amount).from(req.body.values.vitamin_d.unit).to('mcg') * divider;
                req.body.values.allergies = JSON.stringify(req.body.values.allergies);
                req.body.values.serving_size = req.body.values.serving_size.amount;
                return [4 /*yield*/, Inventory_1.default.insertNutritionalInformation(req.body.values, req.body.id)];
            case 1:
                addedNewNutritionItem = _a.sent();
                res.json(addedNewNutritionItem);
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
var send_sms_1 = __webpack_require__(/*! ../ProgramControlFlow/SMS/send_sms */ "./src/BACKEND/ProgramControlFlow/SMS/send_sms.ts");
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
    var salt, hash, token;
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
                (0, send_sms_1.SignUpMessage)(req.body.business_name, req.body.phone_number, req.body.email);
                (0, Login_1.registrationInformation)(req.body);
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
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                (0, send_sms_1.MessageResponseFromHomePage)(req.body.first_name, req.body.phone_number, req.body.email);
                return [4 /*yield*/, Support_Database_1.default.insertMessage(req.body)];
            case 1:
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignUpMessage = exports.MessageResponseFromHomePage = exports.MessagingResponse = void 0;
var Twilio = __webpack_require__(/*! twilio */ "twilio");
var dotenv = __webpack_require__(/*! dotenv */ "dotenv");
var dayjs = __webpack_require__(/*! dayjs */ "dayjs");
dotenv.config();
// Twilio Control and Access Credential 
var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_AUTHKEY;
var sms = Twilio(accountSid, authToken);
exports.MessagingResponse = Twilio.twiml.MessagingResponse;
function MessageResponseFromHomePage(name, phone, email) {
    sms.messages.create({
        body: "From Kcm Inc\n\nDear ".concat(name.toLocaleUpperCase(), ", Thank you for contacting Kcm Inc. Rest assured that our support team will promptly respond to your inquire. Click here to signup for an account:\nhttps://www.kcminc.io/signup."),
        from: process.env.TWILIO_PHONE,
        messagingServiceSid: process.env.TWILIO_MESSAGE_SERVICE,
        shortenUrls: true,
        to: phone,
    });
    sms.messages.create({
        body: "Support\n\n".concat(name.toLocaleUpperCase(), ", has contacted support at:\n\tphone: ").concat(phone, " \n\temail: ").concat(email, " \n").concat(dayjs().format('dddd, MMMM D, YYYY h:mm A'), " "),
        from: process.env.TWILIO_PHONE,
        messagingServiceSid: process.env.TWILIO_MESSAGE_SERVICE,
        shortenUrls: true,
        to: '4047400093'
    });
}
exports.MessageResponseFromHomePage = MessageResponseFromHomePage;
function SignUpMessage(name, phone, email) {
    sms.messages.create({
        body: "From Kcm Inc\n\nGreat news! Your business service account has been successfully created. To get started, simply visit our homepage at https://www.kcminc.io and log in. ",
        from: process.env.TWILIO_PHONE,
        messagingServiceSid: process.env.TWILIO_MESSAGE_SERVICE,
        shortenUrls: true,
        to: phone
    });
    sms.messages.create({
        body: "Registration\n\n".concat(name.toLocaleUpperCase(), ", has registered for an account on ").concat(dayjs().format('dddd, MMMM D, YYYY h A'), " at\n\temail: ").concat(email),
        from: process.env.TWILIO_PHONE,
        messagingServiceSid: process.env.TWILIO_MESSAGE_SERVICE,
        shortenUrls: true,
        to: '4047400093'
    });
}
exports.SignUpMessage = SignUpMessage;
// export function InventoryResponceMessage(reference_number:any,to?:string[]| any) {
//     to.map(async (i) => {
//         await sms.messages.create({
//             body: `Hello,This is a message from KCM Inc. We wanted to inform you that an inventory recording from ${dayjs().format('dddd, MMMM D, YYYY h:mm A')} has been submitted and its reference number is ${reference_number}. Thank you.`,
//             from: process.env.TWILIO_PHONE,
//             shortenUrls: true,
//             to: i
//         });
//     });
// }


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
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.DB_NAME,
    port: 3306,
    // socketPath:process.env.INSTANCE_UNIX_SOCKET
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
    return [2 /*return*/, (0, Conection_1.Query)('SELECT id,category,recommended_stock_level,brand,supplier,description FROM Inventory.Inventory_Items WHERE business_id = ? ORDER BY category', [business_id])];
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
var getPhoneNumbers = function (business_id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT phone_number,business_name FROM Credentials.Principle_Login_Credentials WHERE id = 80', [business_id])];
}); }); };
var getInventoryReference = function (business_id, date_of_audit) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)("SELECT Inventory.Inventory_checklist.*, Inventory.Inventory_Items.brand,Inventory.Inventory_Items.description,Inventory.Inventory_Items.brand,Inventory.Inventory_Items.category,Inventory.Inventory_Items.recommended_stock_level, (Inventory.Inventory_Items.price * Inventory.Inventory_checklist.order_quantity) as price,Inventory.Inventory_checklist.date_of_audit FROM Inventory.Inventory_checklist JOIN Inventory.Inventory_Items ON Inventory.Inventory_Items.id = Inventory.Inventory_checklist.inventory_item_id WHERE Inventory.Inventory_checklist.business_id = ".concat(business_id, " and Inventory.Inventory_checklist.date_of_audit = '").concat(date_of_audit, "'  ORDER BY Inventory.Inventory_checklist.date_of_audit;"), [business_id, date_of_audit])];
}); }); };
var deleteInventoryAuditItem = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('DELETE FROM Inventory.Inventory_checklist WHERE ?', [id])];
}); }); };
var updateInventoryAuditItem = function (values, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Inventory.Inventory_checklist SET ? WHERE id = ?', [values, id])];
}); }); };
var selectUniqueInventoryPeriod = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT date_of_audit,audit_reference_number FROM Inventory.Inventory_checklist WHERE business_id = ?', [id])];
}); }); };
var insertProductRecipeName = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT Recipe.Products SET ?', [values])];
}); }); };
var upDateProductRecipeCost = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT Recipe.Products SET ?', [values])];
}); }); };
var getRecipeProduct = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Recipe.Products WHERE business_id = ?', [id])];
}); }); };
var getInventoryItemsforSelect = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('select id ,description,category,total_package_weight,price_per_gram from Inventory.Inventory_Items where business_id = ? ORDER BY category', [id])];
}); }); };
var getInventoryItemsforRecording = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('select * from Inventory.Inventory_Items where id = ?', [id])];
}); }); };
var insertIngredients = function (values, product_id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT Recipe.Product_Inputs SET ?  ', [values, product_id])];
}); }); };
var sumOfAllIngredients = function (productId) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('select sum(input_cost) from Recipe.Product_Inputs where product_id = ?', [productId])];
}); }); };
var insertInputItemMeta = function (values, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Recipe.Products SET ? WHERE id = ?', [values, id])];
}); }); };
var getIngredientCount = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT COUNT(inventory_item_id) FROM Recipe.Product_Inputs WHERE product_id = ?;', [id])];
}); }); };
var totalInputWeight = function (productId) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('select sum(input_weight) from Recipe.Product_Inputs where product_id = ?', [productId])];
}); }); };
var deleteProduct = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('DELETE FROM Recipe.Products WHERE id = ?', [id])];
}); }); };
var UpdateProduct = function (values, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Recipe.Products SET ? WHERE id = ?', [values, id])];
}); }); };
var deleteInput = function (productId) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('DELETE FROM Recipe.Product_Inputs WHERE product_id = ?', [productId])];
}); }); };
var insertInputItemMetaFull = function (values, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Recipe.Products SET ? WHERE id = ?', [values, id])];
}); }); };
var selectAllInputs = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)("SELECT Inventory.Inventory_Items.description,Recipe.Product_Inputs.inventory_item_id,Recipe.Product_Inputs.id,Recipe.Product_Inputs.input_weight,Recipe.Product_Inputs.input_cost,Inventory.Inventory_Items.price_per_gram,Recipe.Product_Inputs.product_id FROM Recipe.Product_Inputs INNER JOIN Inventory.Inventory_Items WHERE Recipe.Product_Inputs.inventory_item_id = Inventory.Inventory_Items.id and Recipe.Product_Inputs.product_id = ?", [id])];
}); }); };
var UpdateProductInputs = function (values, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Recipe.Product_Inputs SET ? WHERE id = ?', [values, id])];
}); }); };
var deleteInputMeta = function (productId) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('DELETE FROM Recipe.Product_Inputs WHERE id = ?', [productId])];
}); }); };
var inputNutritionalInformation = function (productId) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)("select sum(input_cost) as total_cost, sum(input_weight) as total_weight, COUNT(inventory_item_id) as total_input_count, sum(calories) as calories,sum(total_fat) as total_fat,sum(saturated_fat) as saturated_fat,sum(trans_fat) as trans_fat,sum(cholesterol) as cholesterol,sum(sodium) as sodium,sum(carbohydrates) as carbohydrates,sum(fiber) as fiber,sum(sugar) as sugar,sum(added_sugar) as added_sugar,sum(protein) as protein,sum(calcium) as calcium,sum(iron) as iron,sum(potassium) as potassium,sum(vitamin_d) as vitamin_d from Recipe.Product_Inputs where product_id = ?", [productId])];
}); }); };
var insertNutritionalInformation = function (values, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Inventory.Inventory_Items SET ? WHERE id = ?', [values, id])];
}); }); };
var getInputForUpdate = function (productId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, (0, Conection_1.Query)("SELECT \nRecipe.Product_Inputs.id,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.price_per_gram) as input_cost,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.calories) as calories,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.calories) as calories,\n  (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.total_fat) as total_fat,\n   (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.saturated_fat) as saturated_fat,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.trans_fat) as trans_fat,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.cholesterol) as cholesterol,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.sodium) as sodium,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.carbohydrates) as carbohydrates,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.fiber) as fiber,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.sugar) as sugar,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.added_sugar) as added_sugar,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.protein) as protein,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.calcium) as calcium,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.iron) as iron,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.potassium) as potassium,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.vitamin_d) as vitamin_d,\n (Recipe.Product_Inputs.input_weight*Inventory.Inventory_Items.allergies) as allergies\n FROM Recipe.Product_Inputs INNER JOIN Inventory.Inventory_Items \n WHERE Recipe.Product_Inputs.inventory_item_id = Inventory.Inventory_Items.id \n and Recipe.Product_Inputs.product_id = ?", [productId])];
    });
}); };
var getNutritionalInfoForPublic = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT Recipe.Products.*, Credentials.Principle_Login_Credentials.business_name from Recipe.Products join Credentials.Principle_Login_Credentials where Credentials.Principle_Login_Credentials.id = Recipe.Products.business_id and Credentials.Principle_Login_Credentials.id=?', [id])];
}); }); };
exports["default"] = {
    getInputForUpdate: getInputForUpdate,
    createStore: createStore,
    selectStore: selectStore,
    insertInventoryItem: insertInventoryItem,
    getInventoryItems: getInventoryItems,
    deleteInventoryItem: deleteInventoryItem,
    updateInventoryItem: updateInventoryItem,
    getInventoryChecklistItems: getInventoryChecklistItems,
    insertInventoryChecklistItems: insertInventoryChecklistItems,
    getPhoneNumbers: getPhoneNumbers,
    getInventoryReference: getInventoryReference,
    deleteInventoryAuditItem: deleteInventoryAuditItem,
    updateInventoryAuditItem: updateInventoryAuditItem,
    selectUniqueInventoryPeriod: selectUniqueInventoryPeriod,
    insertNutritionalInformation: insertNutritionalInformation,
    insertProductRecipeName: insertProductRecipeName,
    getRecipeProduct: getRecipeProduct,
    getInventoryItemsforSelect: getInventoryItemsforSelect,
    getInventoryItemsforRecording: getInventoryItemsforRecording,
    insertIngredients: insertIngredients,
    sumOfAllIngredients: sumOfAllIngredients,
    insertInputItemMeta: insertInputItemMeta,
    upDateProductRecipeCost: upDateProductRecipeCost,
    getIngredientCount: getIngredientCount,
    totalInputWeight: totalInputWeight,
    deleteInput: deleteInput,
    deleteProduct: deleteProduct,
    UpdateProduct: UpdateProduct,
    inputNutritionalInformation: inputNutritionalInformation,
    insertInputItemMetaFull: insertInputItemMetaFull,
    selectAllInputs: selectAllInputs,
    UpdateProductInputs: UpdateProductInputs,
    deleteInputMeta: deleteInputMeta,
    getNutritionalInfoForPublic: getNutritionalInfoForPublic
};


/***/ }),

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Security/Verification.ts":
/*!******************************************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Security/Verification.ts ***!
  \******************************************************************************/
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
var verifyInformation = function (emails) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Credentials.Login_Credentials WHERE email=?', [emails])];
}); }); };
var updateBearerToken = function (bearer_token, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Credentials.Login_Credentials SET ? WHERE email =? ', [bearer_token, id])];
}); }); };
var associateVerification = function (pin, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT * FROM Credentials.Principle_Login_Credentials WHERE pin = ? and id = ? ', [pin, id])
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
    verifyInformation: verifyInformation,
    updateBearerToken: updateBearerToken,
    associateVerification: associateVerification
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
var Verification_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/Security/Verification */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Security/Verification.ts");
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
router.post('/verify_associate_pin', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, newReply, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Verification_1.default.associateVerification(req.body.pin, req.body.id)];
            case 1:
                _a = _b.sent(), newReply = _a[0], error = _a[1];
                if (newReply) {
                    res.json(true);
                }
                else if (!newReply) {
                    res.json(false);
                }
                return [2 /*return*/];
        }
    });
}); });
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

/***/ "convert-units":
/*!********************************!*\
  !*** external "convert-units" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("convert-units");

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

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

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
var Stock_1 = __webpack_require__(/*! ./ClientPortal/Stock */ "./src/BACKEND/ClientPortal/Stock.ts");
var Products_1 = __webpack_require__(/*! ./ClientPortal/Products */ "./src/BACKEND/ClientPortal/Products.ts");
var inStoreAudits_1 = __webpack_require__(/*! ./ClientPortal/QRCODE/inStoreAudits */ "./src/BACKEND/ClientPortal/QRCODE/inStoreAudits.ts");
var InventoryAudits_1 = __webpack_require__(/*! ./ClientPortal/Audits/InventoryAudits */ "./src/BACKEND/ClientPortal/Audits/InventoryAudits.ts");
var Nutrition_1 = __webpack_require__(/*! ./ClientPortal/Nutrition */ "./src/BACKEND/ClientPortal/Nutrition.ts");
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
    res.set('Cache-Control', 'no-cache');
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
    else if (req.user) {
        next();
    }
};
app.use('/', express.static('public'));
app.use('/inventorycheck', express.static('public'));
app.use('/nutrients', express.static('public'));
// app.use('/principle/', validateUser, express.static('public'))
app.use('/principle/', express.static('public'));
app.use('/privacypolicy', express.static('public'));
app.use('/support', express.static('public'));
app.use('/login', express.static('public'));
app.use('/signup', express.static('public'));
app.use('/store', express.static('public'));
app.use('/termsofservice', express.static('public'));
app.use('/nutrition', express.static('public'));
app.use('/account', express.static('public'));
app.use('/bolamanual', express.static('public'));
app.use(registration_1.default);
app.use(support_1.default);
app.use(ClientPersonalDetails_1.default);
app.use(Nutrition_1.default);
app.use(Stock_1.default);
app.use(InventoryAudits_1.default);
app.use(Products_1.default);
app.use(inStoreAudits_1.default);
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public"));
});
app.listen(8080, function () {
    console.log("Server listening on port ".concat(8080, "..."));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTztnQkFDbkksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTztnQkFDcEgsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTztnQkFDeEksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTztnQkFDaEgsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTztnQkFDaEgsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTztnQkFDdEgsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTztnQkFDdkgsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTztnQkFDOUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTztnQkFDN0gsR0FBRyxDQUFDLElBQUksQ0FBQyxN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QUFDO0FBSXBELEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFL0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM3QyxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBU2hELEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQVksQ0FBQztBQUNyQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUM7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQywrQkFBTSxDQUFDO0FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBUyxDQUFDO0FBQ2xCLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBSyxDQUFDO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5QkFBTSxDQUFDO0FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDO0FBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQU8sQ0FBQztBQVFoQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFakQsQ0FBQyxDQUFDLENBQUM7QUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQTRCLElBQUksUUFBSyxDQUFDO0FBQ3BELENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9BdWRpdHMvSW52ZW50b3J5QXVkaXRzLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL051dHJpdGlvbi50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9DbGllbnRQb3J0YWwvUHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL1FSQ09ERS9pblN0b3JlQXVkaXRzLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9TdG9jay50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Ib21lcGFnZS9yZWdpc3RyYXRpb24udHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvTUVTU0FHRV9TVVBQT1JUL3N1cHBvcnQudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcy50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML0NvbmVjdGlvbi50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luL2luZGV4LnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscy50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9JbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TZWN1cml0eS9WZXJpZmljYXRpb24udHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TdXBwb3J0X0RhdGFiYXNlLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1NlY3VyaXR5L0JlYXJlci50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9TZWN1cml0eS9sb2NhbFN0cmF0ZWd5LnRzIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImJjcnlwdFwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiY29udmVydC11bml0c1wiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiZGF5anNcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnYvY29uZmlnXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3Mtc2Vzc2lvblwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcIm15c3FsMlwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnQtaHR0cC1iZWFyZXJcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1sb2NhbFwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcInR3aWxpb1wiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL2tjbWluYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uLy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeSc7XG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5cbnJvdXRlci5nZXQoJy9pbnZlbnRvcnlQZXJpb2QnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBpbnZlbnRvcnlfcGVyaW9kID0gYXdhaXQgc3RvcmVzLnNlbGVjdFVuaXF1ZUludmVudG9yeVBlcmlvZChyZXEuY29va2llcy51c2VyLmlkKVxuICAgIHJlcy5qc29uKGludmVudG9yeV9wZXJpb2QpXG59KVxuXG5cbnJvdXRlci5nZXQoJy9pbnZlbnRvcnlfcmVmZXJlbmNlX2luZm9ybWF0aW9uJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zdCByZXBseTphbnkgPSBhd2FpdCBzdG9yZXMuZ2V0SW52ZW50b3J5UmVmZXJlbmNlKHJlcS5jb29raWVzLnVzZXIuaWQsIHJlcS5xdWVyeS5hdWRpdERhdGUpXG4gICAgcmVzLmpzb24ocmVwbHkpXG59KTtcblxuXG5yb3V0ZXIuZGVsZXRlKCcvZGVsZXRlSW52ZW50b3J5QXVkaXRJdGVtcycsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLmRlbGV0ZUludmVudG9yeUF1ZGl0SXRlbShyZXEuYm9keSlcbiAgICByZXMuanNvbihjdXJyZW50X3N0b3JlLmFmZmVjdGVkUm93cylcbn0pO1xuXG5yb3V0ZXIucHV0KCcvdXBkYXRlSW52ZW50b3J5QXVkaXRJdGVtJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMudXBkYXRlSW52ZW50b3J5QXVkaXRJdGVtKHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG4gICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7IiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGNsaWVudF9hZG1pbl9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuaW1wb3J0IHtjaGVja0FjY291bnR9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4vJ1xuXG5cblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLmdldCgnL2dldFByaW5jaXBsZUluZm9ybWF0aW9uJywgYXN5bmMgKHJlcTphbnksIHJlcykgPT4ge1xuICAgIHJlcy5jb29raWUoJ3VzZXInLHJlcS51c2VyKVxuXG5cbn0pO1xuXG5yb3V0ZXIucHV0KCcvdXBkYXRlQ2xpZW50aW5mb3JtYXRpb24nLCBhc3luYyAocmVxOmFueSwgcmVzKSA9PiB7XG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBjbGllbnRfYWRtaW5fcXVlcnkudXBkYXRlUFJJTkNJUExFKHJlcS5ib2R5LHJlcS51c2VyLmlkKVxuICAgIHJlcy5qc29uKG5ld1JlcGx5KVxufSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyBcblxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IHN0b3JlcyBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9JbnZlbnRvcnknO1xuaW1wb3J0ICogYXMgY29udmVydCBmcm9tICdjb252ZXJ0LXVuaXRzJ1xuXG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cblxuXG5cblxuXG5cbi8vIEFkZCBOdXRyaXRpb24gSW5mb3JtYXRpb25cblxuXG5yb3V0ZXIuZ2V0KCcvZ2V0TnV0cmllbnRzLzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGJ1c2luZXNzX2lkID0gcmVxLnBhcmFtcy5pZFxuICAgIGNvbnN0IGdldFByb2R1Y3RzID0gYXdhaXQgc3RvcmVzLmdldFJlY2lwZVByb2R1Y3QoYnVzaW5lc3NfaWQgKTtcbiAgICBnZXRQcm9kdWN0cy5tYXAoYXN5bmMgKGksIG4sIGEpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0SW5wdXRzID0gYXdhaXQgc3RvcmVzLmdldElucHV0Rm9yVXBkYXRlKGkuaWQpXG4gICAgICAgICBnZXRJbnB1dHMubWFwKGFzeW5jIChpLG4sYSk9PntcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgc3RvcmVzLlVwZGF0ZVByb2R1Y3RJbnB1dHMoaSwgaS5pZClcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcHJvZHVjdE1ldGEgPSBhd2FpdCBzdG9yZXMuaW5wdXROdXRyaXRpb25hbEluZm9ybWF0aW9uKGkuaWQpXG4gICAgICAgIHN0b3Jlcy5pbnNlcnRJbnB1dEl0ZW1NZXRhKHByb2R1Y3RNZXRhWzBdLCBpLmlkKVxuICAgICAgICByZXR1cm4gaVxuICAgIH0pO1xuICAgIGNvbnN0IGdldFByb2R1Y3RzXzEgPSBhd2FpdCBzdG9yZXMuZ2V0UmVjaXBlUHJvZHVjdChidXNpbmVzc19pZCk7XG5cbiAgICByZXMuanNvbihnZXRQcm9kdWN0c18xKVxufSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBzdG9yZXMgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvSW52ZW50b3J5JztcbmltcG9ydCB2ZXJpZnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TZWN1cml0eS9WZXJpZmljYXRpb24nXG5pbXBvcnQgKiBhcyBjb252ZXJ0IGZyb20gJ2NvbnZlcnQtdW5pdHMnXG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnc3RyZWFtL2NvbnN1bWVycyc7XG5cblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuXG5yb3V0ZXIuZ2V0KCcvZ2V0UmVjaXBlUHJvZHVjdCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGdldFByb2R1Y3RzID0gYXdhaXQgc3RvcmVzLmdldFJlY2lwZVByb2R1Y3QocmVxLmNvb2tpZXMudXNlci5pZCk7XG4gICAgZ2V0UHJvZHVjdHMubWFwKGFzeW5jIChpLCBuLCBhKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldElucHV0cyA9IGF3YWl0IHN0b3Jlcy5nZXRJbnB1dEZvclVwZGF0ZShpLmlkKVxuICAgICAgICAgZ2V0SW5wdXRzLm1hcChhc3luYyAoaSxuLGEpPT57XG4gICAgICAgICAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5VcGRhdGVQcm9kdWN0SW5wdXRzKGksIGkuaWQpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHByb2R1Y3RNZXRhID0gYXdhaXQgc3RvcmVzLmlucHV0TnV0cml0aW9uYWxJbmZvcm1hdGlvbihpLmlkKVxuICAgICAgICBzdG9yZXMuaW5zZXJ0SW5wdXRJdGVtTWV0YShwcm9kdWN0TWV0YVswXSwgaS5pZClcbiAgICAgICAgcmV0dXJuIGlcbiAgICB9KTtcbiAgICBjb25zdCBnZXRQcm9kdWN0c18xID0gYXdhaXQgc3RvcmVzLmdldFJlY2lwZVByb2R1Y3QocmVxLmNvb2tpZXMudXNlci5pZCk7XG5cbiAgICByZXMuanNvbihnZXRQcm9kdWN0c18xKVxufSlcblxucm91dGVyLmdldCgnL2ludmVudG9yeUl0ZW1zRm9yU2VsZWN0UmVjaXBlcycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGdldFByb2R1Y3RzID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUl0ZW1zZm9yU2VsZWN0KHJlcS5jb29raWVzLnVzZXIuaWQpXG4gICAgY29uc3Qgc2VsZWN0SXRlbSA9IGdldFByb2R1Y3RzLm1hcCgoaSwgbiwgYSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGkuaWQsXG4gICAgICAgICAgICBsYWJlbDogaS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByaWNlX3Blcl9ncmFtOiBpLnByaWNlX3Blcl9ncmFtXG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmVzLmpzb24oc2VsZWN0SXRlbSlcbn0pXG5cblxucm91dGVyLnBvc3QoJy9pbnNlcnRQcm9kdWN0TmFtZScsIGFzeW5jIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcbiAgICByZXEuYm9keS5idXNpbmVzc19pZCA9IHJlcS5jb29raWVzLnVzZXIuaWRcbiAgICByZXEuYm9keS5zZXJ2aW5nX3NpemUgPSBjb252ZXJ0KHJlcS5ib2R5LnNlcnZpbmdfc2l6ZS5hbW91bnQpLmZyb20ocmVxLmJvZHkuc2VydmluZ19zaXplLnVuaXQpLnRvKCdnJylcbiAgICBjb25zdCBpbnNlcnRQcm9kdWN0ID0gYXdhaXQgc3RvcmVzLmluc2VydFByb2R1Y3RSZWNpcGVOYW1lKHJlcS5ib2R5KVxuICAgIHJlcy5qc29uKCdoZWxsbycpXG59KTtcblxuXG5cbnJvdXRlci5wb3N0KCcvaW5zZXJ0UHJvZHVjdElucHV0cycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGRhdGFFeGhhbmdlID0gYXdhaXQgcmVxLmJvZHkuaW5wdXRzLmZvckVhY2goYXN5bmMgKGksIG4sIGEpID0+IHtcbiAgICAgICAgaS5pbnB1dF93ZWlnaHQgPSBjb252ZXJ0KGkuaW5wdXRfd2VpZ2h0KS5mcm9tKGkudW5pdCkudG8oJ2cnKVxuICAgICAgICBjb25zdCBnZXRQcm9kdWN0czogYW55ID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUl0ZW1zZm9yUmVjb3JkaW5nKGkuaW52ZW50b3J5X2l0ZW1faWQpXG4gICAgICAgIGkuaW5wdXRfY29zdCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnByaWNlX3Blcl9ncmFtXG4gICAgICAgIGkuY2Fsb3JpZXMgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5jYWxvcmllc1xuICAgICAgICBpLnRvdGFsX2ZhdCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnRvdGFsX2ZhdFxuICAgICAgICBpLnNhdHVyYXRlZF9mYXQgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5zYXR1cmF0ZWRfZmF0XG4gICAgICAgIGkudHJhbnNfZmF0ID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0udHJhbnNfZmF0XG4gICAgICAgIGkuY2hvbGVzdGVyb2wgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5jaG9sZXN0ZXJvbFxuICAgICAgICBpLnNvZGl1bSA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnNvZGl1bVxuICAgICAgICBpLmNhcmJvaHlkcmF0ZXMgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5jYXJib2h5ZHJhdGVzXG4gICAgICAgIGkuZmliZXIgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5maWJlclxuICAgICAgICBpLnN1Z2FyID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uc3VnYXJcbiAgICAgICAgaS5hZGRlZF9zdWdhciA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLmFkZGVkX3N1Z2FyXG4gICAgICAgIGkucHJvdGVpbiA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnByb3RlaW5cbiAgICAgICAgaS5jYWxjaXVtID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2FsY2l1bVxuICAgICAgICBpLmlyb24gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5pcm9uXG4gICAgICAgIGkucG90YXNzaXVtID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0ucG90YXNzaXVtXG4gICAgICAgIGkudml0YW1pbl9kID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0udml0YW1pbl9kXG4gICAgICAgIGRlbGV0ZSBpLnVuaXRcbiAgICAgICAgYXdhaXQgc3RvcmVzLmluc2VydEluZ3JlZGllbnRzKGksIHJlcS5ib2R5LmlucHV0cy5wcm9kdWN0X2lkKVxuICAgIH0pXG4gICAgY29uc3QgZGF0YV8zID0gYXdhaXQgc3RvcmVzLmlucHV0TnV0cml0aW9uYWxJbmZvcm1hdGlvbihyZXEuYm9keS5pbnB1dHNbMF0ucHJvZHVjdF9pZClcbiAgICBzdG9yZXMuaW5zZXJ0SW5wdXRJdGVtTWV0YUZ1bGwoZGF0YV8zWzBdLCByZXEuYm9keS5pbnB1dHNbMF0ucHJvZHVjdF9pZClcbiAgICByZXMuanNvbignY29zdFVwbG9hZCcpXG59KTtcblxuXG5cbnJvdXRlci5wdXQoJy91cGRhdGVQcm9kdWN0SW5mb3JtYXRpb24nLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGlmIChyZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplLmFtb3VudCA9PSB1bmRlZmluZWQgJiYgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZS51bml0ID09IHVuZGVmaW5lZCAmJiByZXEuYm9keS52YWx1ZXMucHJvZHVjdF9uYW1lID09IHVuZGVmaW5lZCAmJiByZXEuYm9keS52YWx1ZXMuc2FsZXNfcHJpY2UgPT0gdW5kZWZpbmVkICYmIHJlcS5ib2R5LnZhbHVlcy51bml0cyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzLmpzb24oeyBhZmZlY3RlZFJvd3M6IDEgfSlcbiAgICB9IGVsc2UgaWYgKHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUuYW1vdW50ID09IHVuZGVmaW5lZCB8fCByZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplLnVuaXQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGV0ZSByZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy5VcGRhdGVQcm9kdWN0KHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG4gICAgICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgd2VpZ2h0R3JhbXMgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUudW5pdCkudG8oJ2cnKVxuICAgICAgICByZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplID0gd2VpZ2h0R3JhbXNcbiAgICAgICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLlVwZGF0ZVByb2R1Y3QocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICAgICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcbiAgICB9XG59KTtcblxucm91dGVyLmRlbGV0ZSgnL2RlbGV0ZVByb2R1Y3QnLCAocmVxOiBhbnksIHJlczogYW55KSA9PiB7XG4gICAgc3RvcmVzLmRlbGV0ZVByb2R1Y3QocmVxLmJvZHlbMF0pXG4gICAgc3RvcmVzLmRlbGV0ZUlucHV0KHJlcS5ib2R5WzBdKVxuICAgIHJlcy5qc29uKCdzdWNjZXNzJylcbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvYWxsUHJvZHVjdElucHV0cycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGdldElucHV0cyA9IGF3YWl0IHN0b3Jlcy5zZWxlY3RBbGxJbnB1dHMocmVxLnF1ZXJ5LnByb2R1Y3RfaWQpXG4gICAgcmVzLmpzb24oZ2V0SW5wdXRzKVxufSlcblxuXG5yb3V0ZXIucHV0KCcvdXBkYXRlSW5wdXRzJywgKHJlcSwgcmVzKSA9PiB7XG5cbiAgICBPYmplY3QudmFsdWVzKHJlcS5ib2R5KS5tYXAoYXN5bmMgKGk6IGFueSwgbiwgYSkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBnZXRQcm9kdWN0czogYW55ID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUl0ZW1zZm9yUmVjb3JkaW5nKGkuaW52ZW50b3J5X2l0ZW1faWQpXG4gICAgICAgICAgICBjb25zdCBpbnB1dF93ZWlnaHQgPSBjb252ZXJ0KE51bWJlcihpLmFtb3VudCkpLmZyb20oaS51bml0KS50bygnZycpXG4gICAgICAgICAgICBjb25zdCBpbnB1dF9jb3N0ID0gaS5wcmljZV9wZXJfZ3JhbSAqIGlucHV0X3dlaWdodFxuICAgICAgICAgICAgaS5pbnB1dF93ZWlnaHQgPSBpbnB1dF93ZWlnaHRcbiAgICAgICAgICAgIGkuaW5wdXRfY29zdCA9IGlucHV0X2Nvc3RcbiAgICAgICAgICAgIGkuY2Fsb3JpZXMgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5jYWxvcmllc1xuICAgICAgICAgICAgaS50b3RhbF9mYXQgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS50b3RhbF9mYXRcbiAgICAgICAgICAgIGkuc2F0dXJhdGVkX2ZhdCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnNhdHVyYXRlZF9mYXRcbiAgICAgICAgICAgIGkudHJhbnNfZmF0ID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0udHJhbnNfZmF0XG4gICAgICAgICAgICBpLmNob2xlc3Rlcm9sID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2hvbGVzdGVyb2xcbiAgICAgICAgICAgIGkuc29kaXVtID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uc29kaXVtXG4gICAgICAgICAgICBpLmNhcmJvaHlkcmF0ZXMgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5jYXJib2h5ZHJhdGVzXG4gICAgICAgICAgICBpLmZpYmVyID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uZmliZXJcbiAgICAgICAgICAgIGkuc3VnYXIgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5zdWdhclxuICAgICAgICAgICAgaS5hZGRlZF9zdWdhciA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLmFkZGVkX3N1Z2FyXG4gICAgICAgICAgICBpLnByb3RlaW4gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5wcm90ZWluXG4gICAgICAgICAgICBpLmNhbGNpdW0gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5jYWxjaXVtXG4gICAgICAgICAgICBpLmlyb24gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5pcm9uXG4gICAgICAgICAgICBpLnBvdGFzc2l1bSA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnBvdGFzc2l1bVxuICAgICAgICAgICAgaS52aXRhbWluX2QgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS52aXRhbWluX2RcbiAgICAgICAgICAgIGNvbnN0IGlucHV0SWQgPSBpLmlkXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0X2lkID0gaS5wcm9kdWN0X2lkXG4gICAgICAgICAgICBkZWxldGUgaS5pZFxuICAgICAgICAgICAgZGVsZXRlIGkucHJvZHVjdF9pZFxuICAgICAgICAgICAgZGVsZXRlIGkucHJpY2VfcGVyX2dyYW1cbiAgICAgICAgICAgIGRlbGV0ZSBpLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICBkZWxldGUgaS5hbW91bnRcbiAgICAgICAgICAgIGRlbGV0ZSBpLnVuaXRcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgc3RvcmVzLlVwZGF0ZVByb2R1Y3RJbnB1dHMoaSwgaW5wdXRJZClcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RNZXRhID0gYXdhaXQgc3RvcmVzLmlucHV0TnV0cml0aW9uYWxJbmZvcm1hdGlvbihwcm9kdWN0X2lkKVxuXG4gICAgICAgICAgICBjb25zdCBuZXdSZXBseTIgPSBhd2FpdCBzdG9yZXMuaW5zZXJ0SW5wdXRJdGVtTWV0YShwcm9kdWN0TWV0YVswXSwgcHJvZHVjdF9pZClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvclxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBhZmZlY3RlZFJvd3MgPSAxXG4gICAgcmVzLmpzb24oYWZmZWN0ZWRSb3dzKVxuXG5cbn0pXG5cblxucm91dGVyLmRlbGV0ZSgnL2RlbGV0ZUlucHV0cycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXG4gICAgY29uc3QgY3VycmVudF9wcm9kdWN0X2lucHV0czogYW55ID0gYXdhaXQgc3RvcmVzLmRlbGV0ZUlucHV0TWV0YShyZXEuYm9keVswXSlcblxuICAgIHJlcy5qc29uKGN1cnJlbnRfcHJvZHVjdF9pbnB1dHMpXG59KVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxucm91dGVyLmdldCgnL2dldE51dHJpZW50cy86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBidXNpbmVzc19pZCA9IHJlcS5wYXJhbXMuaWRcblxuICAgIGNvbnN0IGdldFByb2R1Y3RzID0gYXdhaXQgc3RvcmVzLmdldFJlY2lwZVByb2R1Y3QoYnVzaW5lc3NfaWQpO1xuICAgIGdldFByb2R1Y3RzLm1hcChhc3luYyAoaSwgbiwgYSkgPT4ge1xuICAgICAgICBjb25zdCBnZXRJbnB1dHMgPSBhd2FpdCBzdG9yZXMuZ2V0SW5wdXRGb3JVcGRhdGUoaS5pZClcbiAgICAgICAgIGdldElucHV0cy5tYXAoYXN5bmMgKGksbixhKT0+e1xuICAgICAgICAgICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBzdG9yZXMuVXBkYXRlUHJvZHVjdElucHV0cyhpLCBpLmlkKVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBwcm9kdWN0TWV0YSA9IGF3YWl0IHN0b3Jlcy5pbnB1dE51dHJpdGlvbmFsSW5mb3JtYXRpb24oaS5pZClcbiAgICAgICAgc3RvcmVzLmluc2VydElucHV0SXRlbU1ldGEocHJvZHVjdE1ldGFbMF0sIGkuaWQpXG4gICAgICAgIHJldHVybiBpXG4gICAgfSk7XG4gICAgY29uc3QgZ2V0UHJvZHVjdHNfMSA9IGF3YWl0IHN0b3Jlcy5nZXRSZWNpcGVQcm9kdWN0KGJ1c2luZXNzX2lkKTtcblxuICAgIHJlcy5qc29uKGdldFByb2R1Y3RzXzEpXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBzdG9yZXMgZnJvbSAnLi4vLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvSW52ZW50b3J5JztcblxuXG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cblxuXG5cblxuLy9DaGVja2xpc3QgUm91dGVzXG5cbnJvdXRlci5nZXQoJy9nZXRJbnZlbnRvcnlJdGVtc0ZvckRhaWx5Q2hlY2tsaXN0LzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGJ1c2luZXNzX2lkID0gcmVxLnBhcmFtcy5pZFxuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUNoZWNrbGlzdEl0ZW1zKGJ1c2luZXNzX2lkKVxuICAgIHJlcy5qc29uKG5ld1JlcGx5KVxufSk7XG5cbnJvdXRlci5wb3N0KCcvaW5zZXJ0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMnLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIHJlcS5ib2R5Lm9yZGVyX3F1YW50aXR5ID0gcmVxLmJvZHkucmVjb21tZW5kZWRfc3RvY2tfbGV2ZWwgLSByZXEuYm9keS5pbl9zdG9ja1xuICAgIGlmIChyZXEuYm9keS5vcmRlcl9xdWFudGl0eSA8PSAwKSB7XG4gICAgICAgIHJlcS5ib2R5Lm9yZGVyX3F1YW50aXR5ID0gMFxuICAgIH1cbiAgICBkZWxldGUgcmVxLmJvZHkucmVjb21tZW5kZWRfc3RvY2tfbGV2ZWxcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5pbnNlcnRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyhyZXEuYm9keSlcbiAgICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5cbnJvdXRlci5nZXQoJy9wdWJsaWNOdXRyaXRpb25hbEluZm9ybWF0aW9uLzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGJ1c2luZXNzX2lkID0gcmVxLnBhcmFtcy5pZFxuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgc3RvcmVzLmdldE51dHJpdGlvbmFsSW5mb0ZvclB1YmxpYyhidXNpbmVzc19pZClcbiAgICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7IFxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeSc7XG5pbXBvcnQgdmVyaWZ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU2VjdXJpdHkvVmVyaWZpY2F0aW9uJ1xuaW1wb3J0ICogYXMgY29udmVydCBmcm9tICdjb252ZXJ0LXVuaXRzJ1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ3N0cmVhbS9jb25zdW1lcnMnO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5cblxuXG5yb3V0ZXIuZ2V0KCcvZ2V0SW52ZW50b3J5SXRlbXMnLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdEludmVudG9yeSA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtcyhyZXEuY29va2llcy51c2VyLmlkKVxuICAgIHJlcy5qc29uKHJlc3VsdEludmVudG9yeSlcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2luc2VydE5ld0ludmVudG9yeUl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICByZXEuYm9keS5idXNpbmVzc19pZCA9IHJlcS5jb29raWVzLnVzZXIuaWRcbiAgICBjb25zdCB3ZWlnaHRHcmFtcyA9IGNvbnZlcnQocmVxLmJvZHkudG90YWxfcGFja2FnZV93ZWlnaHQudW5pdCkuZnJvbShyZXEuYm9keS50b3RhbF9wYWNrYWdlX3dlaWdodC53ZWlnaHQpLnRvKCdnJylcbiAgICByZXEuYm9keS5wcmljZV9wZXJfZ3JhbSA9IE51bWJlcihyZXEuYm9keS5wcmljZSAvIHdlaWdodEdyYW1zKS50b0ZpeGVkKDQpXG4gICAgcmVxLmJvZHkudG90YWxfcGFja2FnZV93ZWlnaHQgPSB3ZWlnaHRHcmFtc1xuICAgIGNvbnN0IGN1cnJlbnRfc3RvcmUgPSBhd2FpdCBzdG9yZXMuaW5zZXJ0SW52ZW50b3J5SXRlbShyZXEuYm9keSlcbiAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxufSk7XG5cbnJvdXRlci5wdXQoJy91cGRhdGVJbnZlbnRvcnlJdGVtJyxcbiAgICBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhd2FpdCBzdG9yZXMuZ2V0SW52ZW50b3J5SXRlbXNmb3JSZWNvcmRpbmcocmVxLmJvZHkuaWQpXG4gICAgICAgIGlmIChyZXEuYm9keS52YWx1ZXMudG90YWxfcGFja2FnZV93ZWlnaHQgJiYgIXJlcS5ib2R5LnZhbHVlcy5wcmljZSkge1xuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0R3JhbXMgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy50b3RhbF9wYWNrYWdlX3dlaWdodC51bml0KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy50b3RhbF9wYWNrYWdlX3dlaWdodC53ZWlnaHQpLnRvKCdnJylcbiAgICAgICAgICAgIGNvbnN0IHByaWNlX3Blcl9ncmFtID0gTnVtYmVyKGdldFByb2R1Y3RzWzBdLnByaWNlIC8gd2VpZ2h0R3JhbXMpXG4gICAgICAgICAgICByZXEuYm9keS52YWx1ZXMucHJpY2VfcGVyX2dyYW0gPSBOdW1iZXIocHJpY2VfcGVyX2dyYW0pLnRvRml4ZWQoNClcbiAgICAgICAgICAgIHJlcS5ib2R5LnZhbHVlcy50b3RhbF9wYWNrYWdlX3dlaWdodCA9IHdlaWdodEdyYW1zXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMudXBkYXRlSW52ZW50b3J5SXRlbShyZXEuYm9keS52YWx1ZXMsIHJlcS5ib2R5LmlkKVxuICAgICAgICAgICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcbiAgICAgICAgfSBlbHNlIGlmICghcmVxLmJvZHkudmFsdWVzLnRvdGFsX3BhY2thZ2Vfd2VpZ2h0ICYmIHJlcS5ib2R5LnZhbHVlcy5wcmljZSkge1xuICAgICAgICAgICAgY29uc3QgcHJpY2VfcGVyX2dyYW0gPSBOdW1iZXIocmVxLmJvZHkudmFsdWVzLnByaWNlIC8gZ2V0UHJvZHVjdHNbMF0udG90YWxfcGFja2FnZV93ZWlnaHQpXG4gICAgICAgICAgICByZXEuYm9keS52YWx1ZXMucHJpY2VfcGVyX2dyYW0gPSBOdW1iZXIocHJpY2VfcGVyX2dyYW0pLnRvRml4ZWQoNClcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy51cGRhdGVJbnZlbnRvcnlJdGVtKHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG4gICAgICAgICAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLnVwZGF0ZUludmVudG9yeUl0ZW0ocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICAgICAgICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG4gICAgICAgIH1cblxuICAgIH0pXG5cblxuXG5cbnJvdXRlci5kZWxldGUoJy9kZWxldGVJbnZlbnRvcnlJdGVtcycsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLmRlbGV0ZUludmVudG9yeUl0ZW0ocmVxLmJvZHkpXG4gICAgcmVzLmpzb24oY3VycmVudF9zdG9yZS5hZmZlY3RlZFJvd3MpXG59KTtcblxuXG5yb3V0ZXIucHV0KCcvYWRkTnV0cml0aW9uSW5mb3JtYXRpb24nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBkaXZpZGVyID0gMSAvIHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUuYW1vdW50XG4gICAgcmVxLmJvZHkudmFsdWVzLmNhbG9yaWVzID0gcmVxLmJvZHkudmFsdWVzLmNhbG9yaWVzLmFtb3VudCAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMudG90YWxfZmF0ID0gKChjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy50b3RhbF9mYXQuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy50b3RhbF9mYXQudW5pdCkudG8oJ2cnKSkgKiBkaXZpZGVyKVxuICAgIHJlcS5ib2R5LnZhbHVlcy5zYXR1cmF0ZWRfZmF0ID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc2F0dXJhdGVkX2ZhdC5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnNhdHVyYXRlZF9mYXQudW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMudHJhbnNfZmF0ID0gY29udmVydChyZXEuYm9keS52YWx1ZXMudHJhbnNfZmF0LmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMudHJhbnNfZmF0LnVuaXQpLnRvKCdnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLmNob2xlc3Rlcm9sID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuY2hvbGVzdGVyb2wuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5jaG9sZXN0ZXJvbC51bml0KS50bygnbWcnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuc29kaXVtID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc29kaXVtLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuc29kaXVtLnVuaXQpLnRvKCdtZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5jYXJib2h5ZHJhdGVzID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuY2FyYm9oeWRyYXRlcy5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmNhcmJvaHlkcmF0ZXMudW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuZmliZXIgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5maWJlci5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmZpYmVyLnVuaXQpLnRvKCdnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLnN1Z2FyID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc3VnYXIuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5zdWdhci51bml0KS50bygnZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5wcm90ZWluID0gY29udmVydChyZXEuYm9keS52YWx1ZXMucHJvdGVpbi5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnByb3RlaW4udW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuY2FsY2l1bSA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLmNhbGNpdW0uYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5jYWxjaXVtLnVuaXQpLnRvKCdtZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5pcm9uID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuaXJvbi5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmlyb24udW5pdCkudG8oJ21nJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLnBvdGFzc2l1bSA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLnBvdGFzc2l1bS5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnBvdGFzc2l1bS51bml0KS50bygnbWcnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuYWRkZWRfc3VnYXIgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5hZGRlZF9zdWdhci5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmFkZGVkX3N1Z2FyLnVuaXQpLnRvKCdnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLnZpdGFtaW5fZCA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLnZpdGFtaW5fZC5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnZpdGFtaW5fZC51bml0KS50bygnbWNnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLmFsbGVyZ2llcyA9IEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5LnZhbHVlcy5hbGxlcmdpZXMpXG4gICAgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZSA9IHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUuYW1vdW50XG4gICAgY29uc3QgYWRkZWROZXdOdXRyaXRpb25JdGVtID0gYXdhaXQgc3RvcmVzLmluc2VydE51dHJpdGlvbmFsSW5mb3JtYXRpb24ocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICByZXMuanNvbihhZGRlZE5ld051dHJpdGlvbkl0ZW0pXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgZGF0YWJhc2VfcXVlcnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TdXBwb3J0X0RhdGFiYXNlJztcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgKiBhcyBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IHsgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24sIGNoZWNrQWNjb3VudCB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4nXG5pbXBvcnQgeyBVbmRlcmxpbmVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IFNpZ25VcE1lc3NhZ2UgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU01TL3NlbmRfc21zJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuY29uc3QgY2hlY2tDcmVkZW50aWFscyA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIFxuICBjb25zdCBjaGVja19EQl9hZ2FpbnN0X2VtYWlsOiBhbnlbXSA9IGF3YWl0IGNoZWNrQWNjb3VudChyZXEuYm9keS5lbWFpbClcbiAgaWYgKGNoZWNrX0RCX2FnYWluc3RfZW1haWwubGVuZ3RoID09PSAwKSB7XG4gICAgbmV4dCgpXG4gIH0gZWxzZSBpZihjaGVja19EQl9hZ2FpbnN0X2VtYWlsLmxlbmd0aCA+IDApIHtcbiAgICByZXMuanNvbih0cnVlKVxuICB9XG59XG5cblxucm91dGVyLnBvc3QoJy9yZWdpc3RyYXRpb24nLGNoZWNrQ3JlZGVudGlhbHMsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHRTeW5jKE51bWJlcihwcm9jZXNzLmVudi5TQUxUX1JPVU5EKSk7XG4gIGNvbnN0IGhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaFN5bmMocmVxLmJvZHkuY29uZmlybV9wYXNzd29yZCwgc2FsdCk7XG4gIGRlbGV0ZSByZXEuYm9keS5jb25maXJtX3Bhc3N3b3JkXG4gIHZhciB0b2tlbiA9IGp3dC5zaWduKHsgdXNlcl9uYW1lOiByZXEuYm9keS5lbWFpbCwgZW1haWw6IHJlcS5ib2R5LmVtYWlsIH0sIHByb2Nlc3MuZW52LkJFQVJFUl9QUklWQVRFKTtcbiAgcmVxLmJvZHkucGFzc3dvcmQgPSBoYXNoXG4gIHJlcS5ib2R5LmFjY2Vzc190b2tlbiA9IHRva2VuXG4gIHJlcS5ib2R5LnBpbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSkgKyAxMTExMTFcbiAgU2lnblVwTWVzc2FnZShyZXEuYm9keS5idXNpbmVzc19uYW1lLHJlcS5ib2R5LnBob25lX251bWJlcixyZXEuYm9keS5lbWFpbClcbiAgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24ocmVxLmJvZHkpXG4gIHJlcy5qc29uKGZhbHNlKVxufSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGRhdGFiYXNlX3F1ZXJ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU3VwcG9ydF9EYXRhYmFzZSc7XG5pbXBvcnQgeyBNZXNzYWdlUmVzcG9uc2VGcm9tSG9tZVBhZ2UgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU01TL3NlbmRfc21zJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIucG9zdCgnL3N1cHBvcnRfbWVzc2FnZScsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgTWVzc2FnZVJlc3BvbnNlRnJvbUhvbWVQYWdlKHJlcS5ib2R5LmZpcnN0X25hbWUsIHJlcS5ib2R5LnBob25lX251bWJlcixyZXEuYm9keS5lbWFpbClcbiAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBkYXRhYmFzZV9xdWVyeS5pbnNlcnRNZXNzYWdlKHJlcS5ib2R5KVxuICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiXG5pbXBvcnQgKiBhcyBUd2lsaW8gZnJvbSAndHdpbGlvJ1xuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudidcbmltcG9ydCAqIGFzIGRheWpzIGZyb20gJ2RheWpzJ1xuZG90ZW52LmNvbmZpZygpXG5cblxuXG4vLyBUd2lsaW8gQ29udHJvbCBhbmQgQWNjZXNzIENyZWRlbnRpYWwgXG5jb25zdCBhY2NvdW50U2lkID0gcHJvY2Vzcy5lbnYuVFdJTElPX1NJRDtcbmNvbnN0IGF1dGhUb2tlbiA9IHByb2Nlc3MuZW52LlRXSUxJT19BVVRIS0VZO1xuY29uc3Qgc21zID0gVHdpbGlvKGFjY291bnRTaWQsIGF1dGhUb2tlbilcblxuZXhwb3J0IGNvbnN0IHsgTWVzc2FnaW5nUmVzcG9uc2UgfSA9IFR3aWxpby50d2ltbCBcblxuZXhwb3J0IGZ1bmN0aW9uIE1lc3NhZ2VSZXNwb25zZUZyb21Ib21lUGFnZShuYW1lOnN0cmluZyxwaG9uZT86c3RyaW5nW118IGFueSxlbWFpbD86YW55KSB7XG4gICAgXG4gIFxuICAgICAgICBzbXMubWVzc2FnZXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGJvZHk6IGBGcm9tIEtjbSBJbmNcXG5cXG5EZWFyICR7bmFtZS50b0xvY2FsZVVwcGVyQ2FzZSgpfSwgVGhhbmsgeW91IGZvciBjb250YWN0aW5nIEtjbSBJbmMuIFJlc3QgYXNzdXJlZCB0aGF0IG91ciBzdXBwb3J0IHRlYW0gd2lsbCBwcm9tcHRseSByZXNwb25kIHRvIHlvdXIgaW5xdWlyZS4gQ2xpY2sgaGVyZSB0byBzaWdudXAgZm9yIGFuIGFjY291bnQ6XFxuaHR0cHM6Ly93d3cua2NtaW5jLmlvL3NpZ251cC5gLFxuICAgICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuVFdJTElPX1BIT05FLFxuICAgICAgICAgICAgbWVzc2FnaW5nU2VydmljZVNpZDogcHJvY2Vzcy5lbnYuVFdJTElPX01FU1NBR0VfU0VSVklDRSxcbiAgICAgICAgICAgIHNob3J0ZW5VcmxzOiB0cnVlLFxuICAgICAgICAgICAgdG86IHBob25lLFxuICAgIFxuICAgICAgICBcbiAgICB9KTtcblxuICAgIHNtcy5tZXNzYWdlcy5jcmVhdGUoe1xuICAgICAgICBib2R5OiBgU3VwcG9ydFxcblxcbiR7bmFtZS50b0xvY2FsZVVwcGVyQ2FzZSgpfSwgaGFzIGNvbnRhY3RlZCBzdXBwb3J0IGF0OlxcblxcdHBob25lOiAke3Bob25lfSBcXG5cXHRlbWFpbDogJHtlbWFpbH0gXFxuJHtkYXlqcygpLmZvcm1hdCgnZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQScpfSBgLFxuICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5UV0lMSU9fUEhPTkUsXG4gICAgICAgIG1lc3NhZ2luZ1NlcnZpY2VTaWQ6IHByb2Nlc3MuZW52LlRXSUxJT19NRVNTQUdFX1NFUlZJQ0UsXG4gICAgICAgIHNob3J0ZW5VcmxzOiB0cnVlLFxuICAgICAgICB0bzogJzQwNDc0MDAwOTMnXG5cbiAgICBcbn0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2lnblVwTWVzc2FnZShuYW1lPzphbnkscGhvbmU/OnN0cmluZ1tdfCBhbnksZW1haWw/OmFueSkge1xuICAgIFxuICBcbiAgICBzbXMubWVzc2FnZXMuY3JlYXRlKHtcbiAgICAgICAgYm9keTogYEZyb20gS2NtIEluY1xcblxcbkdyZWF0IG5ld3MhIFlvdXIgYnVzaW5lc3Mgc2VydmljZSBhY2NvdW50IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLiBUbyBnZXQgc3RhcnRlZCwgc2ltcGx5IHZpc2l0IG91ciBob21lcGFnZSBhdCBodHRwczovL3d3dy5rY21pbmMuaW8gYW5kIGxvZyBpbi4gYCxcbiAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuVFdJTElPX1BIT05FLFxuICAgICAgICBtZXNzYWdpbmdTZXJ2aWNlU2lkOiBwcm9jZXNzLmVudi5UV0lMSU9fTUVTU0FHRV9TRVJWSUNFLFxuICAgICAgICBzaG9ydGVuVXJsczogdHJ1ZSxcbiAgICAgICAgdG86IHBob25lXG59KTtcblxuc21zLm1lc3NhZ2VzLmNyZWF0ZSh7XG4gICAgYm9keTogYFJlZ2lzdHJhdGlvblxcblxcbiR7bmFtZS50b0xvY2FsZVVwcGVyQ2FzZSgpfSwgaGFzIHJlZ2lzdGVyZWQgZm9yIGFuIGFjY291bnQgb24gJHtkYXlqcygpLmZvcm1hdCgnZGRkZCwgTU1NTSBELCBZWVlZIGggQScpfSBhdFxcblxcdGVtYWlsOiAke2VtYWlsfWAsXG4gICAgZnJvbTogcHJvY2Vzcy5lbnYuVFdJTElPX1BIT05FLFxuICAgIG1lc3NhZ2luZ1NlcnZpY2VTaWQ6IHByb2Nlc3MuZW52LlRXSUxJT19NRVNTQUdFX1NFUlZJQ0UsXG4gICAgc2hvcnRlblVybHM6IHRydWUsXG4gICAgdG86ICc0MDQ3NDAwMDkzJ1xufSk7XG59XG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIEludmVudG9yeVJlc3BvbmNlTWVzc2FnZShyZWZlcmVuY2VfbnVtYmVyOmFueSx0bz86c3RyaW5nW118IGFueSkge1xuICAgIFxuLy8gICAgIHRvLm1hcChhc3luYyAoaSkgPT4ge1xuLy8gICAgICAgICBhd2FpdCBzbXMubWVzc2FnZXMuY3JlYXRlKHtcbi8vICAgICAgICAgICAgIGJvZHk6IGBIZWxsbyxUaGlzIGlzIGEgbWVzc2FnZSBmcm9tIEtDTSBJbmMuIFdlIHdhbnRlZCB0byBpbmZvcm0geW91IHRoYXQgYW4gaW52ZW50b3J5IHJlY29yZGluZyBmcm9tICR7ZGF5anMoKS5mb3JtYXQoJ2RkZGQsIE1NTU0gRCwgWVlZWSBoOm1tIEEnKX0gaGFzIGJlZW4gc3VibWl0dGVkIGFuZCBpdHMgcmVmZXJlbmNlIG51bWJlciBpcyAke3JlZmVyZW5jZV9udW1iZXJ9LiBUaGFuayB5b3UuYCxcbi8vICAgICAgICAgICAgIGZyb206IHByb2Nlc3MuZW52LlRXSUxJT19QSE9ORSxcbi8vICAgICAgICAgICAgIHNob3J0ZW5VcmxzOiB0cnVlLFxuLy8gICAgICAgICAgICAgdG86IGlcbi8vICAgICAgICAgfSk7XG4gICAgICAgIFxuLy8gICAgIH0pO1xuLy8gfVxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICogYXMgbXlzcWwgZnJvbSAnbXlzcWwyJztcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IG15c3FsQWNjZXNzID0gbXlzcWwuY3JlYXRlUG9vbCh7XG4gICAgdXNlcjpwcm9jZXNzLmVudi5NWVNRTF9VU0VSLFxuICAgIHBhc3N3b3JkOnByb2Nlc3MuZW52Lk1ZU1FMX1BBU1NXT1JELFxuICAgIGhvc3Q6cHJvY2Vzcy5lbnYuTVlTUUxfSE9TVCxcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcbiAgICBwb3J0OjMzMDYsXG4gICAgLy8gc29ja2V0UGF0aDpwcm9jZXNzLmVudi5JTlNUQU5DRV9VTklYX1NPQ0tFVFxufSlcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gKHF1ZXJ5OnN0cmluZyx2YWx1ZXM/OkFycmF5PHN0cmluZ3xudW1iZXI+KT0+e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxhbnk+PigocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgIG15c3FsQWNjZXNzLnF1ZXJ5KHF1ZXJ5LHZhbHVlcywoZXJyLHJlc3VsdHM6YW55KSA9PntcbiAgICAgICAgICAgIGlmKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfSlcbiAgICB9KVxufTtcblxuXG5cbiIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL0NvbmVjdGlvblwiO1xuXG5cbiBleHBvcnQgbGV0IHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFNFVCA/JywgdmFsdWVzKTtcbiBcbiBleHBvcnQgbGV0IGNoZWNrQWNjb3VudCA9IGFzeW5jIChlbWFpbDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscyBXSEVSRSBlbWFpbCA9ID8nLFtlbWFpbF0pXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCBnZXRDbGllbnRJbmZvcm1hdGlvbiA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIHdoZXJlIGlkID0gPycsW2lkXSk7XG5jb25zdCB1cGRhdGVQUklOQ0lQTEUgPSBhc3luYyAoaW5mbyxpZCk9PlF1ZXJ5KCdVUERBVEUgQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFNFVCA/IFdIRVJFIGlkID0gPycsW2luZm8saWRdKVxuXG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuLy8gY29uc3QgZGVsZXRlTWVzc2FnZXMgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIGNvbnRhY3QgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG4vLyBjb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAoLi4udmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBLQ01fSU5DLmNsaWVudFJlZ2lzdHJhdGlvbiBTRVQgPycsIHZhbHVlcyk7XG4vLyBjb25zdCBpbnNlcnRJbnN0aXR1dGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmluc3RpdHV0aW9uIFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3QgdXBkYXRlTWVzc2FnZXMgPSBhc3luYyAobmV3Q29udGVudDogYW55LCBpZDogYW55KSA9PiBRdWVyeSgnVVBEQVRFIGNvbnRhY3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW25ld0NvbnRlbnQsIGlkXSlcbi8vIGNvbnN0IGFsbFVzZXJzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gVXNlcnMnKTtcbi8vIGNvbnN0IGluc2VydFVzZXJzID0gYXN5bmModXNlciA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRzIFNFVCA/JyAsW3VzZXJdKTtcbi8vIGNvbnN0IGluc2VydFBoeXNpY2FsID0gYXN5bmMocGh5c2ljYWwgOmFueSxjbGllbnRpZDpudW1iZXIgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudF9saWZlc3R5bGUgU0VUID8nICxbcGh5c2ljYWxdKTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0Q2xpZW50SW5mb3JtYXRpb24sXG4gICAgdXBkYXRlUFJJTkNJUExFLFxufSIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL0NvbmVjdGlvblwiO1xuXG5cbi8vIENyZWF0ZSBTdG9yZSBcbmNvbnN0IGNyZWF0ZVN0b3JlID0gYXN5bmMgKHN0b3JlOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBJbnZlbnRvcnkuU3RvcmUgU0VUID8nLCBzdG9yZSk7XG5jb25zdCBzZWxlY3RTdG9yZSA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gSW52ZW50b3J5LlN0b3JlIFdIRVJFID87JywgW2lkXSk7XG5cblxuLy9DcmVhdGUgYW5kIEFkZCBJbnZlbnRvcnkgdG8gUHJpbmNpcGxlIERhdGFiYXNlXG5jb25zdCBpbnNlcnRJbnZlbnRvcnlJdGVtID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBTRVQgPycsIHZhbHVlcyk7XG5jb25zdCBnZXRJbnZlbnRvcnlJdGVtcyA9IGFzeW5jIChidXNpbmVzc19pZCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBXSEVSRSBidXNpbmVzc19pZCA9ID8nLCBbYnVzaW5lc3NfaWRdKTtcbmNvbnN0IGRlbGV0ZUludmVudG9yeUl0ZW0gPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFdIRVJFID8nLCBbaWRdKTtcbmNvbnN0IHVwZGF0ZUludmVudG9yeUl0ZW0gPSBhc3luYyAodmFsdWVzLCBpZCkgPT4gUXVlcnkoJ1VQREFURSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFNFVCA/IFdIRVJFIGlkID0gPycsIFt2YWx1ZXMsIGlkXSk7XG5jb25zdCBnZXRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyA9IGFzeW5jIChidXNpbmVzc19pZCkgPT4gUXVlcnkoJ1NFTEVDVCBpZCxjYXRlZ29yeSxyZWNvbW1lbmRlZF9zdG9ja19sZXZlbCxicmFuZCxzdXBwbGllcixkZXNjcmlwdGlvbiBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgV0hFUkUgYnVzaW5lc3NfaWQgPSA/IE9SREVSIEJZIGNhdGVnb3J5JywgW2J1c2luZXNzX2lkXSk7XG5jb25zdCBpbnNlcnRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0IFNFVCA/JywgdmFsdWVzKTtcbmNvbnN0IGdldFBob25lTnVtYmVycyA9IGFzeW5jIChidXNpbmVzc19pZCkgPT4gUXVlcnkoJ1NFTEVDVCBwaG9uZV9udW1iZXIsYnVzaW5lc3NfbmFtZSBGUk9NIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscyBXSEVSRSBpZCA9IDgwJywgW2J1c2luZXNzX2lkXSk7XG5jb25zdCBnZXRJbnZlbnRvcnlSZWZlcmVuY2UgPSBhc3luYyAoYnVzaW5lc3NfaWQsIGRhdGVfb2ZfYXVkaXQpID0+IFF1ZXJ5KGBTRUxFQ1QgSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QuKiwgSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5icmFuZCxJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmRlc2NyaXB0aW9uLEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuYnJhbmQsSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5jYXRlZ29yeSxJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnJlY29tbWVuZGVkX3N0b2NrX2xldmVsLCAoSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5wcmljZSAqIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0Lm9yZGVyX3F1YW50aXR5KSBhcyBwcmljZSxJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5kYXRlX29mX2F1ZGl0IEZST00gSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QgSk9JTiBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIE9OIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuaWQgPSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5pbnZlbnRvcnlfaXRlbV9pZCBXSEVSRSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5idXNpbmVzc19pZCA9ICR7YnVzaW5lc3NfaWR9IGFuZCBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5kYXRlX29mX2F1ZGl0ID0gJyR7ZGF0ZV9vZl9hdWRpdH0nICBPUkRFUiBCWSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5kYXRlX29mX2F1ZGl0O2AsIFtidXNpbmVzc19pZCwgZGF0ZV9vZl9hdWRpdF0pO1xuY29uc3QgZGVsZXRlSW52ZW50b3J5QXVkaXRJdGVtID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnREVMRVRFIEZST00gSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QgV0hFUkUgPycsIFtpZF0pO1xuY29uc3QgdXBkYXRlSW52ZW50b3J5QXVkaXRJdGVtID0gYXN5bmMgKHZhbHVlcywgaWQpID0+IFF1ZXJ5KCdVUERBVEUgSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW3ZhbHVlcywgaWRdKTtcbmNvbnN0IHNlbGVjdFVuaXF1ZUludmVudG9yeVBlcmlvZCA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ1NFTEVDVCBkYXRlX29mX2F1ZGl0LGF1ZGl0X3JlZmVyZW5jZV9udW1iZXIgRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdCBXSEVSRSBidXNpbmVzc19pZCA9ID8nLFtpZF0pO1xuY29uc3QgaW5zZXJ0UHJvZHVjdFJlY2lwZU5hbWUgPSBhc3luYyAodmFsdWVzKSA9PiBRdWVyeSgnSU5TRVJUIFJlY2lwZS5Qcm9kdWN0cyBTRVQgPycsIFt2YWx1ZXNdKVxuY29uc3QgdXBEYXRlUHJvZHVjdFJlY2lwZUNvc3QgPSBhc3luYyAodmFsdWVzKSA9PiBRdWVyeSgnSU5TRVJUIFJlY2lwZS5Qcm9kdWN0cyBTRVQgPycsW3ZhbHVlc10pXG5jb25zdCBnZXRSZWNpcGVQcm9kdWN0ID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBSZWNpcGUuUHJvZHVjdHMgV0hFUkUgYnVzaW5lc3NfaWQgPSA/JywgW2lkXSlcbmNvbnN0IGdldEludmVudG9yeUl0ZW1zZm9yU2VsZWN0ID0gYXN5bmMoaWQpID0+IFF1ZXJ5KCdzZWxlY3QgaWQgLGRlc2NyaXB0aW9uLGNhdGVnb3J5LHRvdGFsX3BhY2thZ2Vfd2VpZ2h0LHByaWNlX3Blcl9ncmFtIGZyb20gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyB3aGVyZSBidXNpbmVzc19pZCA9ID8gT1JERVIgQlkgY2F0ZWdvcnknLCBbaWRdKVxuY29uc3QgZ2V0SW52ZW50b3J5SXRlbXNmb3JSZWNvcmRpbmcgPSBhc3luYyhpZCkgPT4gUXVlcnkoJ3NlbGVjdCAqIGZyb20gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyB3aGVyZSBpZCA9ID8nLCBbaWRdKVxuY29uc3QgaW5zZXJ0SW5ncmVkaWVudHMgPSBhc3luYyh2YWx1ZXMscHJvZHVjdF9pZCkgPT4gUXVlcnkoJ0lOU0VSVCBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgU0VUID8gICcsIFt2YWx1ZXMscHJvZHVjdF9pZF0pXG5jb25zdCBzdW1PZkFsbEluZ3JlZGllbnRzID0gYXN5bmMocHJvZHVjdElkKSA9PlF1ZXJ5KCdzZWxlY3Qgc3VtKGlucHV0X2Nvc3QpIGZyb20gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIHdoZXJlIHByb2R1Y3RfaWQgPSA/JyxbcHJvZHVjdElkXSlcbmNvbnN0IGluc2VydElucHV0SXRlbU1ldGEgPSBhc3luYyh2YWx1ZXMsaWQpID0+IFF1ZXJ5KCdVUERBVEUgUmVjaXBlLlByb2R1Y3RzIFNFVCA/IFdIRVJFIGlkID0gPycsW3ZhbHVlcyxpZF0pXG5jb25zdCBnZXRJbmdyZWRpZW50Q291bnQgPSBhc3luYyhpZCkgPT4gUXVlcnkoJ1NFTEVDVCBDT1VOVChpbnZlbnRvcnlfaXRlbV9pZCkgRlJPTSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgV0hFUkUgcHJvZHVjdF9pZCA9ID87JyxbaWRdKVxuY29uc3QgdG90YWxJbnB1dFdlaWdodCA9IGFzeW5jKHByb2R1Y3RJZCkgPT5RdWVyeSgnc2VsZWN0IHN1bShpbnB1dF93ZWlnaHQpIGZyb20gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIHdoZXJlIHByb2R1Y3RfaWQgPSA/JyxbcHJvZHVjdElkXSlcbmNvbnN0IGRlbGV0ZVByb2R1Y3QgPSBhc3luYyhpZCkgPT5RdWVyeSgnREVMRVRFIEZST00gUmVjaXBlLlByb2R1Y3RzIFdIRVJFIGlkID0gPycsW2lkXSlcbmNvbnN0IFVwZGF0ZVByb2R1Y3QgPSBhc3luYyAodmFsdWVzLCBpZCkgPT4gUXVlcnkoJ1VQREFURSBSZWNpcGUuUHJvZHVjdHMgU0VUID8gV0hFUkUgaWQgPSA/JywgW3ZhbHVlcywgaWRdKVxuY29uc3QgZGVsZXRlSW5wdXQgPSBhc3luYyhwcm9kdWN0SWQpID0+UXVlcnkoJ0RFTEVURSBGUk9NIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyBXSEVSRSBwcm9kdWN0X2lkID0gPycsW3Byb2R1Y3RJZF0pXG5jb25zdCBpbnNlcnRJbnB1dEl0ZW1NZXRhRnVsbCA9IGFzeW5jKHZhbHVlcyxpZCkgPT4gUXVlcnkoJ1VQREFURSBSZWNpcGUuUHJvZHVjdHMgU0VUID8gV0hFUkUgaWQgPSA/JyxbdmFsdWVzLGlkXSlcbmNvbnN0IHNlbGVjdEFsbElucHV0cyA9IGFzeW5jKGlkKT0+UXVlcnkoYFNFTEVDVCBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmRlc2NyaXB0aW9uLFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnZlbnRvcnlfaXRlbV9pZCxSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaWQsUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCxSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfY29zdCxJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnByaWNlX3Blcl9ncmFtLFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5wcm9kdWN0X2lkIEZST00gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIElOTkVSIEpPSU4gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBXSEVSRSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW52ZW50b3J5X2l0ZW1faWQgPSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmlkIGFuZCBSZWNpcGUuUHJvZHVjdF9JbnB1dHMucHJvZHVjdF9pZCA9ID9gLFtpZF0pXG5jb25zdCBVcGRhdGVQcm9kdWN0SW5wdXRzID0gYXN5bmModmFsdWVzLGlkKSA9PiBRdWVyeSgnVVBEQVRFIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyBTRVQgPyBXSEVSRSBpZCA9ID8nLFt2YWx1ZXMsaWRdKVxuY29uc3QgZGVsZXRlSW5wdXRNZXRhID0gYXN5bmMocHJvZHVjdElkKSA9PlF1ZXJ5KCdERUxFVEUgRlJPTSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgV0hFUkUgaWQgPSA/JyxbcHJvZHVjdElkXSlcblxuXG5cblxuY29uc3QgaW5wdXROdXRyaXRpb25hbEluZm9ybWF0aW9uID0gYXN5bmMgKHByb2R1Y3RJZCk9PlxuUXVlcnkoXCJzZWxlY3Qgc3VtKGlucHV0X2Nvc3QpIGFzIHRvdGFsX2Nvc3QsIHN1bShpbnB1dF93ZWlnaHQpIGFzIHRvdGFsX3dlaWdodCwgQ09VTlQoaW52ZW50b3J5X2l0ZW1faWQpIGFzIHRvdGFsX2lucHV0X2NvdW50LCBzdW0oY2Fsb3JpZXMpIGFzIGNhbG9yaWVzLHN1bSh0b3RhbF9mYXQpIGFzIHRvdGFsX2ZhdCxzdW0oc2F0dXJhdGVkX2ZhdCkgYXMgc2F0dXJhdGVkX2ZhdCxzdW0odHJhbnNfZmF0KSBhcyB0cmFuc19mYXQsc3VtKGNob2xlc3Rlcm9sKSBhcyBjaG9sZXN0ZXJvbCxzdW0oc29kaXVtKSBhcyBzb2RpdW0sc3VtKGNhcmJvaHlkcmF0ZXMpIGFzIGNhcmJvaHlkcmF0ZXMsc3VtKGZpYmVyKSBhcyBmaWJlcixzdW0oc3VnYXIpIGFzIHN1Z2FyLHN1bShhZGRlZF9zdWdhcikgYXMgYWRkZWRfc3VnYXIsc3VtKHByb3RlaW4pIGFzIHByb3RlaW4sc3VtKGNhbGNpdW0pIGFzIGNhbGNpdW0sc3VtKGlyb24pIGFzIGlyb24sc3VtKHBvdGFzc2l1bSkgYXMgcG90YXNzaXVtLHN1bSh2aXRhbWluX2QpIGFzIHZpdGFtaW5fZCBmcm9tIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyB3aGVyZSBwcm9kdWN0X2lkID0gP1wiLFtwcm9kdWN0SWRdKVxuY29uc3QgaW5zZXJ0TnV0cml0aW9uYWxJbmZvcm1hdGlvbiA9IGFzeW5jICh2YWx1ZXMsIGlkKSA9PiBRdWVyeSgnVVBEQVRFIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgU0VUID8gV0hFUkUgaWQgPSA/JywgW3ZhbHVlcywgaWRdKVxuXG5jb25zdCBnZXRJbnB1dEZvclVwZGF0ZSA9IGFzeW5jIChwcm9kdWN0SWQpPT5cblF1ZXJ5KGBTRUxFQ1QgXG5SZWNpcGUuUHJvZHVjdF9JbnB1dHMuaWQsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5wcmljZV9wZXJfZ3JhbSkgYXMgaW5wdXRfY29zdCxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmNhbG9yaWVzKSBhcyBjYWxvcmllcyxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmNhbG9yaWVzKSBhcyBjYWxvcmllcyxcbiAgKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy50b3RhbF9mYXQpIGFzIHRvdGFsX2ZhdCxcbiAgIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuc2F0dXJhdGVkX2ZhdCkgYXMgc2F0dXJhdGVkX2ZhdCxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnRyYW5zX2ZhdCkgYXMgdHJhbnNfZmF0LFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuY2hvbGVzdGVyb2wpIGFzIGNob2xlc3Rlcm9sLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuc29kaXVtKSBhcyBzb2RpdW0sXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5jYXJib2h5ZHJhdGVzKSBhcyBjYXJib2h5ZHJhdGVzLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuZmliZXIpIGFzIGZpYmVyLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuc3VnYXIpIGFzIHN1Z2FyLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuYWRkZWRfc3VnYXIpIGFzIGFkZGVkX3N1Z2FyLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMucHJvdGVpbikgYXMgcHJvdGVpbixcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmNhbGNpdW0pIGFzIGNhbGNpdW0sXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5pcm9uKSBhcyBpcm9uLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMucG90YXNzaXVtKSBhcyBwb3Rhc3NpdW0sXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy52aXRhbWluX2QpIGFzIHZpdGFtaW5fZCxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmFsbGVyZ2llcykgYXMgYWxsZXJnaWVzXG4gRlJPTSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgSU5ORVIgSk9JTiBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFxuIFdIRVJFIFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnZlbnRvcnlfaXRlbV9pZCA9IEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuaWQgXG4gYW5kIFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5wcm9kdWN0X2lkID0gP2AsW3Byb2R1Y3RJZF0pO1xuXG4gY29uc3QgZ2V0TnV0cml0aW9uYWxJbmZvRm9yUHVibGljID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnU0VMRUNUIFJlY2lwZS5Qcm9kdWN0cy4qLCBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMuYnVzaW5lc3NfbmFtZSBmcm9tIFJlY2lwZS5Qcm9kdWN0cyBqb2luIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscyB3aGVyZSBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMuaWQgPSBSZWNpcGUuUHJvZHVjdHMuYnVzaW5lc3NfaWQgYW5kIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscy5pZD0/JyxbaWRdKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldElucHV0Rm9yVXBkYXRlLFxuICAgIGNyZWF0ZVN0b3JlLFxuICAgIHNlbGVjdFN0b3JlLFxuICAgIGluc2VydEludmVudG9yeUl0ZW0sXG4gICAgZ2V0SW52ZW50b3J5SXRlbXMsXG4gICAgZGVsZXRlSW52ZW50b3J5SXRlbSxcbiAgICB1cGRhdGVJbnZlbnRvcnlJdGVtLFxuICAgIGdldEludmVudG9yeUNoZWNrbGlzdEl0ZW1zLFxuICAgIGluc2VydEludmVudG9yeUNoZWNrbGlzdEl0ZW1zLFxuICAgIGdldFBob25lTnVtYmVycyxcbiAgICBnZXRJbnZlbnRvcnlSZWZlcmVuY2UsXG4gICAgZGVsZXRlSW52ZW50b3J5QXVkaXRJdGVtLFxuICAgIHVwZGF0ZUludmVudG9yeUF1ZGl0SXRlbSxcbiAgICBzZWxlY3RVbmlxdWVJbnZlbnRvcnlQZXJpb2QsXG4gICAgaW5zZXJ0TnV0cml0aW9uYWxJbmZvcm1hdGlvbixcbiAgICBpbnNlcnRQcm9kdWN0UmVjaXBlTmFtZSxcbiAgICBnZXRSZWNpcGVQcm9kdWN0LFxuICAgIGdldEludmVudG9yeUl0ZW1zZm9yU2VsZWN0LFxuICAgIGdldEludmVudG9yeUl0ZW1zZm9yUmVjb3JkaW5nLFxuICAgIGluc2VydEluZ3JlZGllbnRzLFxuICAgIHN1bU9mQWxsSW5ncmVkaWVudHMsXG4gICAgaW5zZXJ0SW5wdXRJdGVtTWV0YSxcbiAgICB1cERhdGVQcm9kdWN0UmVjaXBlQ29zdCxcbiAgICBnZXRJbmdyZWRpZW50Q291bnQsXG4gICAgdG90YWxJbnB1dFdlaWdodCxcbiAgICBkZWxldGVJbnB1dCxcbiAgICBkZWxldGVQcm9kdWN0LFxuICAgIFVwZGF0ZVByb2R1Y3QsXG4gICAgaW5wdXROdXRyaXRpb25hbEluZm9ybWF0aW9uLFxuICAgIGluc2VydElucHV0SXRlbU1ldGFGdWxsLFxuICAgIHNlbGVjdEFsbElucHV0cyxcbiAgICBVcGRhdGVQcm9kdWN0SW5wdXRzLFxuICAgIGRlbGV0ZUlucHV0TWV0YSxcbiAgICBnZXROdXRyaXRpb25hbEluZm9Gb3JQdWJsaWNcbiAgICBcblxuXG59IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgdmVyaWZ5SW5mb3JtYXRpb24gPSBhc3luYyAoZW1haWxzOiBhbnkpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLkxvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIGVtYWlsPT8nLFtlbWFpbHNdKTtcbmNvbnN0IHVwZGF0ZUJlYXJlclRva2VuID0gYXN5bmMgKGJlYXJlcl90b2tlbixpZCk9PlF1ZXJ5KCdVUERBVEUgQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgU0VUID8gV0hFUkUgZW1haWwgPT8gJyxbYmVhcmVyX3Rva2VuLGlkXSlcbmNvbnN0IGFzc29jaWF0ZVZlcmlmaWNhdGlvbiA9IGFzeW5jKHBpbixpZCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIHBpbiA9ID8gYW5kIGlkID0gPyAnLFtwaW4saWRdKVxuXG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuLy8gY29uc3QgZGVsZXRlTWVzc2FnZXMgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIGNvbnRhY3QgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG4vLyBjb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAoLi4udmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBLQ01fSU5DLmNsaWVudFJlZ2lzdHJhdGlvbiBTRVQgPycsIHZhbHVlcyk7XG4vLyBjb25zdCBpbnNlcnRJbnN0aXR1dGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmluc3RpdHV0aW9uIFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3QgdXBkYXRlTWVzc2FnZXMgPSBhc3luYyAobmV3Q29udGVudDogYW55LCBpZDogYW55KSA9PiBRdWVyeSgnVVBEQVRFIGNvbnRhY3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW25ld0NvbnRlbnQsIGlkXSlcbi8vIGNvbnN0IGFsbFVzZXJzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gVXNlcnMnKTtcbi8vIGNvbnN0IGluc2VydFVzZXJzID0gYXN5bmModXNlciA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRzIFNFVCA/JyAsW3VzZXJdKTtcblxuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB2ZXJpZnlJbmZvcm1hdGlvbixcbiAgICB1cGRhdGVCZWFyZXJUb2tlbixcbiAgICBhc3NvY2lhdGVWZXJpZmljYXRpb25cblxufSIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uL0NvbmVjdGlvblwiO1xuXG5cbmNvbnN0IHZpZXdNZXNzYWdlcyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdzZWxlY3QgKiBmcm9tIENvbW11bmljYXRpb24uTWVzc2FnZXMnKTtcbmNvbnN0IGluc2VydE1lc3NhZ2U9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIENvbW11bmljYXRpb24uU3VwcG9ydCBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuXG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHZpZXdNZXNzYWdlcyxcbiAgICBpbnNlcnRNZXNzYWdlXG5cblxufSIsIlxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0ICdwYXNzcG9ydC1sb2NhbCc7XG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCB7U3RyYXRlZ3kgYXMgQmVhcmVyU3RyYXRlZ3l9IGZyb20gJ3Bhc3Nwb3J0LWh0dHAtYmVhcmVyJztcbmltcG9ydCAqIGFzIGRiIGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0JlYXJlclRva2VuRGV0YWlscydcbmltcG9ydCB7IG15c3FsQWNjZXNzIH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9Db25lY3Rpb24nO1xuXG5cblxuXG5cblxucGFzc3BvcnQudXNlKG5ldyBCZWFyZXJTdHJhdGVneShcbiAgICAgKHRva2VuLCBkb25lKT0+IHtcbiAgICAgICAgbXlzcWxBY2Nlc3MucXVlcnkoYFNFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgV2hlcmUgYWNjZXNzX3Rva2VuID0gP2AsIFt0b2tlbl0sIChlcnJvciwgdXNlcikgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHsgcmV0dXJuIGRvbmUoZXJyb3IpOyB9XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHsgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpOyB9XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlciwgeyBzY29wZTogJ3JlYWQnIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG4pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0ICdwYXNzcG9ydC1sb2NhbCc7XG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCB7IFN0cmF0ZWd5IGFzIExvY2FsU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1sb2NhbCdcbmltcG9ydCB7IGNoZWNrQWNjb3VudCB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4vaW5kZXgnXG5pbXBvcnQgdmVyaWZ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU2VjdXJpdHkvVmVyaWZpY2F0aW9uJ1xuXG5pbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucGFzc3BvcnQudXNlKG5ldyBMb2NhbFN0cmF0ZWd5KHtcbiAgdXNlcm5hbWVGaWVsZDogJ2VtYWlsJyxcbiAgcGFzc3dvcmRGaWVsZDogJ3Bhc3N3b3JkJyxcbn0sIGFzeW5jIGZ1bmN0aW9uIHZlcmlmeShlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBkb25lOiBhbnkpIHtcbiAgY29uc3QgW3VzZXJdID0gYXdhaXQgY2hlY2tBY2NvdW50KGVtYWlsKVxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBtZXNzYWdlOiBcIkludmFsaWQgY3JlZGVudGlhbHMuXFxuXCIgfSk7XG4gIH1cbiAgaWYgKCFiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpKSB7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgbWVzc2FnZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlxcblwiIH0pO1xuICB9XG4gIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuXG59XG4pKTtcblxucGFzc3BvcnQuc2VyaWFsaXplVXNlcigodXNlcjogYW55LCBkb25lKSA9PiB7XG4gIGRlbGV0ZSB1c2VyLmRhdGVfdGltZVxuICBkZWxldGUgdXNlci5wYXNzd29yZFxuICBkZWxldGUgdXNlci50ZXJtc19vZl9zZXJ2aWNlXG4gIGRlbGV0ZSB1c2VyLnByaXZhY3lfcG9saWN5XG4gIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgIHJldHVybiBkb25lKG51bGwsIHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgZmlyc3RfbmFtZTogdXNlci5maXJzdF9uYW1lLFxuICAgICAgbGFzdF9uYW1lOiB1c2VyLmxhc3RfbmFtZSxcbiAgICAgIGJ1c2luZXNzX25hbWU6IHVzZXIuYnVzaW5lc3NfbmFtZSxcbiAgICAgIHBob25lX251bWJlcjogdXNlci5waG9uZV9udW1iZXIsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGFjY291bnRfdHlwZTogdXNlci5hY2NvdW50X3R5cGUsXG4gICAgICBhY2Nlc3NfdG9rZW46IHVzZXIuYWNjZXNzX3Rva2VuXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbnBhc3Nwb3J0LmRlc2VyaWFsaXplVXNlcigodXNlcjogYW55LCBkb25lKSA9PiB7XG4gIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuICB9KTtcbn0pO1xuXG5cbnJvdXRlci5wb3N0KCcvbG9naW5fdmVyaWZpY2F0aW9uJywgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdsb2NhbCcpLCAocmVxOiBhbnksIHJlcykgPT4ge1xuICBpZiAocmVxLnVzZXIpIHtcbiAgICByZXEubG9nSW4ocmVxLnVzZXIsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuY29va2llKCd1c2VyJywgcmVxLnVzZXIpLmpzb24ocmVxLnVzZXIpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCFyZXEudXNlcikge1xuXG4gICAgcmVzLnNlbmRTdGF0dXMoNDAxKVxuICB9XG59KTtcblxucm91dGVyLnBvc3QoJy92ZXJpZnlfYXNzb2NpYXRlX3BpbicsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG5cbiAgY29uc3QgW25ld1JlcGx5LCBlcnJvcl0gPSBhd2FpdCB2ZXJpZnkuYXNzb2NpYXRlVmVyaWZpY2F0aW9uKHJlcS5ib2R5LnBpbiwgcmVxLmJvZHkuaWQpXG5cblxuICBpZiAobmV3UmVwbHkpIHtcbiAgICAgIHJlcy5qc29uKHRydWUpXG4gIH0gZWxzZSBpZiAoIW5ld1JlcGx5KSB7XG4gICAgICByZXMuanNvbihmYWxzZSlcbiAgfVxuXG5cbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cblxuXG5cblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udmVydC11bml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm15c3FsMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1odHRwLWJlYXJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1sb2NhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0d2lsaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcbmltcG9ydCAqIGFzIHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuLy8gaW1wb3J0IEhvbWVwYWdlU2VydmVyIGZyb20gJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Ib21lcGFnZV9RdWVyeSc7XG4vLyBpbXBvcnQgQ2xpZW50UG9ydGFsIGZyb20gJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzJztcbi8vIGltcG9ydCB7IE1lc3NhZ2luZ1Jlc3BvbnNlLCBzZW5kUmVwbHkgfSBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TTVMvc2VuZF9zbXMnO1xuLy8gaW1wb3J0ICcuL1Byb2dyYW1Db250cm9sRmxvdy9QQVlNRU5UUy9hdXRob3JpemVfY2FyZCc7XG5pbXBvcnQgc3VwcG9ydCBmcm9tICcuL01FU1NBR0VfU1VQUE9SVC9zdXBwb3J0J1xuaW1wb3J0IGNsaWVudCBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnXG4vLyBpbXBvcnQgYmlsbGluZyBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRCaWxsaW5nJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL0NsaWVudFBvcnRhbC9TdG9jayc7XG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9DbGllbnRQb3J0YWwvUHJvZHVjdHMnO1xuaW1wb3J0IGluc3RvcmUgZnJvbSAnLi9DbGllbnRQb3J0YWwvUVJDT0RFL2luU3RvcmVBdWRpdHMnXG5pbXBvcnQgYXVkaXRzIGZyb20gJy4vQ2xpZW50UG9ydGFsL0F1ZGl0cy9JbnZlbnRvcnlBdWRpdHMnO1xuaW1wb3J0IG51dHJpdGlvbiBmcm9tICcuL0NsaWVudFBvcnRhbC9OdXRyaXRpb24nO1xuaW1wb3J0IHJlZ2lzdHJhdGlvbiBmcm9tICcuL0hvbWVwYWdlL3JlZ2lzdHJhdGlvbidcbmltcG9ydCBVUFN0cmF0ZWd5IGZyb20gJy4vU2VjdXJpdHkvbG9jYWxTdHJhdGVneSdcbmltcG9ydCAqIGFzIHNlc3Npb24gZnJvbSAnZXhwcmVzcy1zZXNzaW9uJ1xuaW1wb3J0ICcuL1NlY3VyaXR5L0JlYXJlcidcblxuaW1wb3J0ICogYXMgY29va2llcGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInXG5pbXBvcnQgKiBhcyBjb252ZXJ0IGZyb20gJ2NvbnZlcnQtdW5pdHMnXG5cblxuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXMuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIHJlcy5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnKicpXG4gIHJlcy5zZXQoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKVxuICBuZXh0KClcbn0pXG5hcHAuc2V0KCd0cnVzdCBwcm94eScsIHRydWUpXG5cbmFwcC51c2UoY29va2llcGFyc2VyKCkpXG5hcHAudXNlKHNlc3Npb24oe1xuICBzZWNyZXQ6ICdrZXlib2FyZCBjYXQnLFxuICByZXNhdmU6IGZhbHNlLFxuICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2UsXG4gIGNvb2tpZTogeyBzZWN1cmU6IGZhbHNlIH1cbn0pKTtcblxuXG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG5cbmFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcblxuXG5cbmFwcC51c2UoVVBTdHJhdGVneSlcbmNvbnN0IHZhbGlkYXRlVXNlciA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBpZiAoIXJlcS51c2VyKSB7XG4gICAgcmVzLnJlZGlyZWN0KCcvc2lnbnVwJylcbiAgfSBlbHNlIGlmIChyZXEudXNlcikge1xuICAgIG5leHQoKVxuICB9XG59XG5cblxuXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuXG5hcHAudXNlKCcvaW52ZW50b3J5Y2hlY2snLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5hcHAudXNlKCcvbnV0cmllbnRzJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuLy8gYXBwLnVzZSgnL3ByaW5jaXBsZS8nLCB2YWxpZGF0ZVVzZXIsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy9wcmluY2lwbGUvJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuXG5hcHAudXNlKCcvcHJpdmFjeXBvbGljeScsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy9zdXBwb3J0JywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL2xvZ2luJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3NpZ251cCcsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy9zdG9yZScsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy90ZXJtc29mc2VydmljZScsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcblxuXG5cbmFwcC51c2UoJy9udXRyaXRpb24nLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5cbmFwcC51c2UoJy9hY2NvdW50JywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL2JvbGFtYW51YWwnLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5cblxuXG5cblxuXG5cblxuYXBwLnVzZShyZWdpc3RyYXRpb24pXG5hcHAudXNlKHN1cHBvcnQpXG5hcHAudXNlKGNsaWVudClcbmFwcC51c2UobnV0cml0aW9uKVxuYXBwLnVzZShzdG9yZSlcbmFwcC51c2UoYXVkaXRzKVxuYXBwLnVzZShwcm9kdWN0cylcbmFwcC51c2UoaW5zdG9yZSlcblxuXG5cblxuXG5cblxuYXBwLmdldChcIipcIiwgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uL3B1YmxpY1wiKSlcblxufSk7XG5hcHAubGlzdGVuKDgwODAsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAkezgwODB9Li4uYClcbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=