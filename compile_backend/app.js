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
var NutritionDetails_ts_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/NutritionDetails.ts */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/NutritionDetails.ts");
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
                // SignUpMessage(req.body.business_name, req.body.phone_number, req.body.email)
                (0, Login_1.registrationInformation)(req.body);
                res.json(false);
                return [2 /*return*/];
        }
    });
}); });
router.post('/bolatestingroute', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var NutritionRequirement;
    return __generator(this, function (_a) {
        NutritionRequirement = function () { return __awaiter(void 0, void 0, void 0, function () {
            var RetrieveNutrientsFromDatabase, replyArray, testingdata, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, NutritionDetails_ts_1.default.PersonalNutritionDetails(req.body.gender, req.body.age)];
                    case 1:
                        RetrieveNutrientsFromDatabase = _a.sent();
                        console.log(Login_1.registrationInformation);
                        replyArray = [];
                        testingdata = {};
                        testingdata['age'] = RetrieveNutrientsFromDatabase[0].age;
                        testingdata['gender'] = RetrieveNutrientsFromDatabase[0].gender;
                        testingdata['Calories'] =
                            {
                                value: RetrieveNutrientsFromDatabase[0].calories,
                                unit: 'Kcal',
                                dv: 2000,
                                mc: 530
                            };
                        testingdata['Total Fat'] =
                            {
                                value: (RetrieveNutrientsFromDatabase[0]['total_fat'] * RetrieveNutrientsFromDatabase[0].calories / 9).toFixed(),
                                unit: 'Grams',
                                dv: 78,
                                mc: 63
                            };
                        testingdata['Saturated Fat'] = {
                            value: (RetrieveNutrientsFromDatabase[0]['saturated_fat'] * RetrieveNutrientsFromDatabase[0].calories / 9).toFixed(),
                            unit: 'Grams',
                            dv: 20,
                            mc: 24
                        };
                        testingdata['Cholesterol'] = {
                            value: RetrieveNutrientsFromDatabase[0].cholesterol,
                            unit: 'Grams',
                            dv: 300,
                            mc: 525
                        };
                        testingdata['Sodium'] = {
                            value: RetrieveNutrientsFromDatabase[0].sodium,
                            unit: "MG",
                            dv: 2300,
                            mc: 2070
                        };
                        testingdata['Carbohydrates'] = {
                            value: (RetrieveNutrientsFromDatabase[0]['carbohydrates'] * RetrieveNutrientsFromDatabase[0].calories / 4).toFixed(),
                            unit: 'G',
                            dv: 275,
                            mc: 158
                        };
                        // testingdata['sugar'] = {
                        //   value: RetrieveNutrientsFromDatabase[0].sugar,
                        //   unit:
                        // } 
                        testingdata['Added Sugar'] = {
                            value: (RetrieveNutrientsFromDatabase[0]['added_sugar'] * RetrieveNutrientsFromDatabase[0].calories / 4).toFixed(),
                            unit: 'G',
                            dv: 50,
                            mc: 41
                        };
                        testingdata['Protein'] = {
                            value: (RetrieveNutrientsFromDatabase[0]['protein'] * RetrieveNutrientsFromDatabase[0].calories / 4).toFixed(),
                            unit: "G",
                            dv: 50,
                            mc: 36
                        };
                        testingdata['Vitamin D'] = {
                            value: RetrieveNutrientsFromDatabase[0].vitamin_d,
                            unit: 'MCG',
                            dv: 20,
                            mc: 2
                        };
                        testingdata['Calcium'] = {
                            value: RetrieveNutrientsFromDatabase[0].calcium,
                            unit: 'MG',
                            dv: 1300,
                            mc: 280
                        };
                        testingdata['Iron'] = {
                            value: RetrieveNutrientsFromDatabase[0].iron,
                            unit: 'MG',
                            dv: 18,
                            mc: 7.5
                        };
                        testingdata['Potassium'] = {
                            value: RetrieveNutrientsFromDatabase[0].potassium,
                            unit: 'MG',
                            dv: 4700,
                            mc: 980
                        };
                        for (items in testingdata) {
                            console.log(items);
                            replyArray.push({
                                Name: items,
                                Distinct: testingdata["".concat(items)].value,
                                Unit: testingdata["".concat(items)].unit,
                                DV: testingdata["".concat(items)].dv,
                                McDonaldsBigBreakfast: testingdata["".concat(items)].mc
                            });
                        }
                        console.log(replyArray);
                        res.json(replyArray);
                        return [2 /*return*/];
                }
            });
        }); };
        NutritionRequirement();
        return [2 /*return*/];
    });
}); });
// [
//   {
//     id: 1,
//     age: '2-3 years old',
//     gender: 'male',
//     calories: 1000,
//     'total_fat_percent _kcal': 0.4,
//     'saturated_fat_percent _kcal': 0.9,
//     trans_fat_percent_kcal: 0.001,
//     cholesterol: 300,
//     sodium: 1200,
//     carbohydrates_percent_kcal: 0.65,
//     fiber: 0.014,
//     sugar: null,
//     added_sugar: 0.09,
//     protein_percent_calories: 0.2,
//     vitamin_d: 20,
//     calcium: 700,
//     iron: 7,
//     potassium: 2000
//   }
// ]
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
var router = express.Router();
router.post('/support_message', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Support_Database_1.default.insertMessage(req.body)];
            case 1:
                newReply = _a.sent();
                console.log(req.body);
                res.json('heelo');
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
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
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

/***/ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/NutritionDetails.ts":
/*!***********************************************************************************************!*\
  !*** ./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/NutritionDetails.ts ***!
  \***********************************************************************************************/
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
var PersonalNutritionDetails = function (gender, age) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('Select * From Nutritional_Item_Analytics.Population_Nutrient_Intake Where gender = ? and age = ?', [gender, age])];
}); }); };
exports["default"] = {
    PersonalNutritionDetails: PersonalNutritionDetails,
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
// import * as qna from '@tensorflow-models/qna';
// import '@tensorflow/tfjs-backend-webgl'
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
app.use('/support', express.static('public'));
app.use('/aboutus', express.static('public'));
app.use('/termsofservice', express.static('public'));
app.use('/bola_overview', express.static('public'));
app.use('/privacypolicy', express.static('public'));
app.use('/inventorycheck', express.static('public'));
app.use('/nutrients', express.static('public'));
// app.use('/principle/', validateUser, express.static('public'))
app.use('/principle/', express.static('public'));
app.use('/principle/store', express.static('public'));
app.use('/principle/products', express.static('public'));
app.use('/principle/bolamanual', express.static('public'));
app.use('/login', express.static('public'));
app.use('/signup', express.static('public'));
app.use('/store', express.static('public'));
app.use('/inventoryaudits', express.static('public'));
app.use('/nutrition', express.static('public'));
app.use('/account', express.static('public'));
app.use('/products', express.static('public'));
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
app.post('/nutritionalData', function (req, res, error) { return __awaiter(void 0, void 0, void 0, function () {
    var data, foodsQuery, foodsArray, arraySort, nutrientProfile, selectedNutrients;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query=".concat(req.body.foodSelection, "&pageSize=4&dataType=Foundation&api_key=").concat(process.env.API_KEY))];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                foodsQuery = _a.sent();
                return [4 /*yield*/, foodsQuery.foods.map(function (i) {
                        return i;
                    })];
            case 3:
                foodsArray = _a.sent();
                arraySort = foodsArray[0].foodNutrients.sort(function (a, b) {
                    var nameA = a.nutrientName.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.nutrientName.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
                nutrientProfile = arraySort.map(function (data, index) {
                    if (data.nutrientId == 1003 ||
                        data.nutrientId == 1087 ||
                        data.nutrientId == 1093) {
                        return data;
                    }
                });
                selectedNutrients = nutrientProfile.filter(function (index) { return index !== undefined || null; });
                res.json([foodsArray[0].description, selectedNutrients]);
                return [2 /*return*/];
        }
    });
}); });
// const test1 = []
// const tfoutput = []
// let index = 0
//  for  ( let index = 0 ; index <= 999  ; index++) {
//  let newReply = index 
// test1.push(newReply,newReply+100,1)
//  }
//  for  ( let index = 0 ; index <= 999  ; index++) {
//   let newReply = index
//  tfoutput.push(newReply)
//   }
// const tfArray = tf.tensor(test1,[1000,3])
// const tfArrayOutput = tf.tensor(tfoutput,[1000,1])
// console.log(tfArrayOutput)
// tf.util.shuffleCombo(tfArray,tfArrayOutput)
// // const tfOutput = tfArray.mul(10)
// const model = tf.sequential();
// model.add(tf.layers.dense({inputShape:[3],units:100,activation:'relu'}))
// model.add(tf.layers.dense({units:100,activation:'relu'}))
// model.add(tf.layers.dense({units:1000,activation:'relu'}))
// model.add(tf.layers.dense({units:1}))
// // model.add(tf.layers.dense({units:1}))
// const train = async ()=>{
//   model.compile({
//     optimizer:tf.train.adam(),
//     loss:'meanSquaredError'
//   })
//   await model.fit(tfArray,tfArrayOutput,{
//     epochs:75,
//     batchSize:50,
//     shuffle:true,
//     validationSplit:.10
//   })
//   const newprediction = model.predict(tf.tensor([[3,301,3]]))
// newprediction.print()
// }
// train()
app.listen(8080, function () {
    console.log("Server listening on port ".concat(8080, "..."));
});


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/BACKEND/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU87Z0JBQ25JLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU87Z0JBQ3BILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU87Z0JBQ3hJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU87Z0JBQ2hILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU87Z0JBQ2hILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU87Z0JBQ3RILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU87Z0JBQ3ZILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU87Z0JBQzlHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU87Z0JBQzdILEdBQUcsQ0FBQyxJ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Q0FBQyxtQ0FBNEIsSUFBSSxRQUFLLENBQUM7QUFDcEQsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ3hPRjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL0F1ZGl0cy9JbnZlbnRvcnlBdWRpdHMudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscy50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9DbGllbnRQb3J0YWwvTnV0cml0aW9uLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9Qcm9kdWN0cy50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9DbGllbnRQb3J0YWwvUVJDT0RFL2luU3RvcmVBdWRpdHMudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL1N0b2NrLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL0hvbWVwYWdlL3JlZ2lzdHJhdGlvbi50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9NRVNTQUdFX1NVUFBPUlQvc3VwcG9ydC50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML0NvbmVjdGlvbi50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luL2luZGV4LnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscy50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9JbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvTnV0cml0aW9uRGV0YWlscy50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1NlY3VyaXR5L1ZlcmlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1N1cHBvcnRfRGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvU2VjdXJpdHkvQmVhcmVyLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1NlY3VyaXR5L2xvY2FsU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJjb252ZXJ0LXVuaXRzXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnYvY29uZmlnXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3Mtc2Vzc2lvblwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcIm15c3FsMlwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnQtaHR0cC1iZWFyZXJcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1sb2NhbFwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL2tjbWluYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rY21pbmMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9rY21pbmMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2tjbWluYy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IHN0b3JlcyBmcm9tICcuLi8uLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9JbnZlbnRvcnknO1xuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuXG5yb3V0ZXIuZ2V0KCcvaW52ZW50b3J5UGVyaW9kJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgaW52ZW50b3J5X3BlcmlvZCA9IGF3YWl0IHN0b3Jlcy5zZWxlY3RVbmlxdWVJbnZlbnRvcnlQZXJpb2QocmVxLmNvb2tpZXMudXNlci5pZClcbiAgICByZXMuanNvbihpbnZlbnRvcnlfcGVyaW9kKVxufSlcblxuXG5yb3V0ZXIuZ2V0KCcvaW52ZW50b3J5X3JlZmVyZW5jZV9pbmZvcm1hdGlvbicsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcmVwbHk6YW55ID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeVJlZmVyZW5jZShyZXEuY29va2llcy51c2VyLmlkLCByZXEucXVlcnkuYXVkaXREYXRlKVxuICAgIHJlcy5qc29uKHJlcGx5KVxufSk7XG5cblxucm91dGVyLmRlbGV0ZSgnL2RlbGV0ZUludmVudG9yeUF1ZGl0SXRlbXMnLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy5kZWxldGVJbnZlbnRvcnlBdWRpdEl0ZW0ocmVxLmJvZHkpXG4gICAgcmVzLmpzb24oY3VycmVudF9zdG9yZS5hZmZlY3RlZFJvd3MpXG59KTtcblxucm91dGVyLnB1dCgnL3VwZGF0ZUludmVudG9yeUF1ZGl0SXRlbScsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLnVwZGF0ZUludmVudG9yeUF1ZGl0SXRlbShyZXEuYm9keS52YWx1ZXMsIHJlcS5ib2R5LmlkKVxuICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBjbGllbnRfYWRtaW5fcXVlcnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzJztcbmltcG9ydCB7Y2hlY2tBY2NvdW50fSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luLydcblxuXG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbnJvdXRlci5nZXQoJy9nZXRQcmluY2lwbGVJbmZvcm1hdGlvbicsIGFzeW5jIChyZXE6YW55LCByZXMpID0+IHtcbiAgICByZXMuY29va2llKCd1c2VyJyxyZXEudXNlcilcblxuXG59KTtcblxucm91dGVyLnB1dCgnL3VwZGF0ZUNsaWVudGluZm9ybWF0aW9uJywgYXN5bmMgKHJlcTphbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgY2xpZW50X2FkbWluX3F1ZXJ5LnVwZGF0ZVBSSU5DSVBMRShyZXEuYm9keSxyZXEudXNlci5pZClcbiAgICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgXG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBzdG9yZXMgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvSW52ZW50b3J5JztcbmltcG9ydCAqIGFzIGNvbnZlcnQgZnJvbSAnY29udmVydC11bml0cydcblxuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5cblxuXG5cblxuXG4vLyBBZGQgTnV0cml0aW9uIEluZm9ybWF0aW9uXG5cblxucm91dGVyLmdldCgnL2dldE51dHJpZW50cy86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBidXNpbmVzc19pZCA9IHJlcS5wYXJhbXMuaWRcbiAgICBjb25zdCBnZXRQcm9kdWN0cyA9IGF3YWl0IHN0b3Jlcy5nZXRSZWNpcGVQcm9kdWN0KGJ1c2luZXNzX2lkICk7XG4gICAgZ2V0UHJvZHVjdHMubWFwKGFzeW5jIChpLCBuLCBhKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldElucHV0cyA9IGF3YWl0IHN0b3Jlcy5nZXRJbnB1dEZvclVwZGF0ZShpLmlkKVxuICAgICAgICAgZ2V0SW5wdXRzLm1hcChhc3luYyAoaSxuLGEpPT57XG4gICAgICAgICAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5VcGRhdGVQcm9kdWN0SW5wdXRzKGksIGkuaWQpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHByb2R1Y3RNZXRhID0gYXdhaXQgc3RvcmVzLmlucHV0TnV0cml0aW9uYWxJbmZvcm1hdGlvbihpLmlkKVxuICAgICAgICBzdG9yZXMuaW5zZXJ0SW5wdXRJdGVtTWV0YShwcm9kdWN0TWV0YVswXSwgaS5pZClcbiAgICAgICAgcmV0dXJuIGlcbiAgICB9KTtcbiAgICBjb25zdCBnZXRQcm9kdWN0c18xID0gYXdhaXQgc3RvcmVzLmdldFJlY2lwZVByb2R1Y3QoYnVzaW5lc3NfaWQpO1xuXG4gICAgcmVzLmpzb24oZ2V0UHJvZHVjdHNfMSlcbn0pXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeSc7XG5pbXBvcnQgdmVyaWZ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU2VjdXJpdHkvVmVyaWZpY2F0aW9uJ1xuaW1wb3J0ICogYXMgY29udmVydCBmcm9tICdjb252ZXJ0LXVuaXRzJ1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ3N0cmVhbS9jb25zdW1lcnMnO1xuXG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cblxucm91dGVyLmdldCgnL2dldFJlY2lwZVByb2R1Y3QnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBnZXRQcm9kdWN0cyA9IGF3YWl0IHN0b3Jlcy5nZXRSZWNpcGVQcm9kdWN0KHJlcS5jb29raWVzLnVzZXIuaWQpO1xuICAgIGdldFByb2R1Y3RzLm1hcChhc3luYyAoaSwgbiwgYSkgPT4ge1xuICAgICAgICBjb25zdCBnZXRJbnB1dHMgPSBhd2FpdCBzdG9yZXMuZ2V0SW5wdXRGb3JVcGRhdGUoaS5pZClcbiAgICAgICAgIGdldElucHV0cy5tYXAoYXN5bmMgKGksbixhKT0+e1xuICAgICAgICAgICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBzdG9yZXMuVXBkYXRlUHJvZHVjdElucHV0cyhpLCBpLmlkKVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBwcm9kdWN0TWV0YSA9IGF3YWl0IHN0b3Jlcy5pbnB1dE51dHJpdGlvbmFsSW5mb3JtYXRpb24oaS5pZClcbiAgICAgICAgc3RvcmVzLmluc2VydElucHV0SXRlbU1ldGEocHJvZHVjdE1ldGFbMF0sIGkuaWQpXG4gICAgICAgIHJldHVybiBpXG4gICAgfSk7XG4gICAgY29uc3QgZ2V0UHJvZHVjdHNfMSA9IGF3YWl0IHN0b3Jlcy5nZXRSZWNpcGVQcm9kdWN0KHJlcS5jb29raWVzLnVzZXIuaWQpO1xuXG4gICAgcmVzLmpzb24oZ2V0UHJvZHVjdHNfMSlcbn0pXG5cbnJvdXRlci5nZXQoJy9pbnZlbnRvcnlJdGVtc0ZvclNlbGVjdFJlY2lwZXMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBnZXRQcm9kdWN0cyA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtc2ZvclNlbGVjdChyZXEuY29va2llcy51c2VyLmlkKVxuICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBnZXRQcm9kdWN0cy5tYXAoKGksIG4sIGEpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBpLmlkLFxuICAgICAgICAgICAgbGFiZWw6IGkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmljZV9wZXJfZ3JhbTogaS5wcmljZV9wZXJfZ3JhbVxuXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJlcy5qc29uKHNlbGVjdEl0ZW0pXG59KVxuXG5cbnJvdXRlci5wb3N0KCcvaW5zZXJ0UHJvZHVjdE5hbWUnLCBhc3luYyAocmVxOiBhbnksIHJlczogYW55KSA9PiB7XG4gICAgcmVxLmJvZHkuYnVzaW5lc3NfaWQgPSByZXEuY29va2llcy51c2VyLmlkXG4gICAgcmVxLmJvZHkuc2VydmluZ19zaXplID0gY29udmVydChyZXEuYm9keS5zZXJ2aW5nX3NpemUuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnNlcnZpbmdfc2l6ZS51bml0KS50bygnZycpXG4gICAgY29uc3QgaW5zZXJ0UHJvZHVjdCA9IGF3YWl0IHN0b3Jlcy5pbnNlcnRQcm9kdWN0UmVjaXBlTmFtZShyZXEuYm9keSlcbiAgICByZXMuanNvbignaGVsbG8nKVxufSk7XG5cblxuXG5yb3V0ZXIucG9zdCgnL2luc2VydFByb2R1Y3RJbnB1dHMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBkYXRhRXhoYW5nZSA9IGF3YWl0IHJlcS5ib2R5LmlucHV0cy5mb3JFYWNoKGFzeW5jIChpLCBuLCBhKSA9PiB7XG4gICAgICAgIGkuaW5wdXRfd2VpZ2h0ID0gY29udmVydChpLmlucHV0X3dlaWdodCkuZnJvbShpLnVuaXQpLnRvKCdnJylcbiAgICAgICAgY29uc3QgZ2V0UHJvZHVjdHM6IGFueSA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtc2ZvclJlY29yZGluZyhpLmludmVudG9yeV9pdGVtX2lkKVxuICAgICAgICBpLmlucHV0X2Nvc3QgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5wcmljZV9wZXJfZ3JhbVxuICAgICAgICBpLmNhbG9yaWVzID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2Fsb3JpZXNcbiAgICAgICAgaS50b3RhbF9mYXQgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS50b3RhbF9mYXRcbiAgICAgICAgaS5zYXR1cmF0ZWRfZmF0ID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uc2F0dXJhdGVkX2ZhdFxuICAgICAgICBpLnRyYW5zX2ZhdCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnRyYW5zX2ZhdFxuICAgICAgICBpLmNob2xlc3Rlcm9sID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2hvbGVzdGVyb2xcbiAgICAgICAgaS5zb2RpdW0gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5zb2RpdW1cbiAgICAgICAgaS5jYXJib2h5ZHJhdGVzID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2FyYm9oeWRyYXRlc1xuICAgICAgICBpLmZpYmVyID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uZmliZXJcbiAgICAgICAgaS5zdWdhciA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnN1Z2FyXG4gICAgICAgIGkuYWRkZWRfc3VnYXIgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5hZGRlZF9zdWdhclxuICAgICAgICBpLnByb3RlaW4gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5wcm90ZWluXG4gICAgICAgIGkuY2FsY2l1bSA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLmNhbGNpdW1cbiAgICAgICAgaS5pcm9uID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uaXJvblxuICAgICAgICBpLnBvdGFzc2l1bSA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnBvdGFzc2l1bVxuICAgICAgICBpLnZpdGFtaW5fZCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnZpdGFtaW5fZFxuICAgICAgICBkZWxldGUgaS51bml0XG4gICAgICAgIGF3YWl0IHN0b3Jlcy5pbnNlcnRJbmdyZWRpZW50cyhpLCByZXEuYm9keS5pbnB1dHMucHJvZHVjdF9pZClcbiAgICB9KVxuICAgIGNvbnN0IGRhdGFfMyA9IGF3YWl0IHN0b3Jlcy5pbnB1dE51dHJpdGlvbmFsSW5mb3JtYXRpb24ocmVxLmJvZHkuaW5wdXRzWzBdLnByb2R1Y3RfaWQpXG4gICAgc3RvcmVzLmluc2VydElucHV0SXRlbU1ldGFGdWxsKGRhdGFfM1swXSwgcmVxLmJvZHkuaW5wdXRzWzBdLnByb2R1Y3RfaWQpXG4gICAgcmVzLmpzb24oJ2Nvc3RVcGxvYWQnKVxufSk7XG5cblxuXG5yb3V0ZXIucHV0KCcvdXBkYXRlUHJvZHVjdEluZm9ybWF0aW9uJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBpZiAocmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZS5hbW91bnQgPT0gdW5kZWZpbmVkICYmIHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUudW5pdCA9PSB1bmRlZmluZWQgJiYgcmVxLmJvZHkudmFsdWVzLnByb2R1Y3RfbmFtZSA9PSB1bmRlZmluZWQgJiYgcmVxLmJvZHkudmFsdWVzLnNhbGVzX3ByaWNlID09IHVuZGVmaW5lZCAmJiByZXEuYm9keS52YWx1ZXMudW5pdHMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlcy5qc29uKHsgYWZmZWN0ZWRSb3dzOiAxIH0pXG4gICAgfSBlbHNlIGlmIChyZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplLmFtb3VudCA9PSB1bmRlZmluZWQgfHwgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZS51bml0ID09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZVxuICAgICAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMuVXBkYXRlUHJvZHVjdChyZXEuYm9keS52YWx1ZXMsIHJlcS5ib2R5LmlkKVxuICAgICAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHdlaWdodEdyYW1zID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplLnVuaXQpLnRvKCdnJylcbiAgICAgICAgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZSA9IHdlaWdodEdyYW1zXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy5VcGRhdGVQcm9kdWN0KHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG4gICAgICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG4gICAgfVxufSk7XG5cbnJvdXRlci5kZWxldGUoJy9kZWxldGVQcm9kdWN0JywgKHJlcTogYW55LCByZXM6IGFueSkgPT4ge1xuICAgIHN0b3Jlcy5kZWxldGVQcm9kdWN0KHJlcS5ib2R5WzBdKVxuICAgIHN0b3Jlcy5kZWxldGVJbnB1dChyZXEuYm9keVswXSlcbiAgICByZXMuanNvbignc3VjY2VzcycpXG59KTtcblxucm91dGVyLmdldCgnL2FsbFByb2R1Y3RJbnB1dHMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBnZXRJbnB1dHMgPSBhd2FpdCBzdG9yZXMuc2VsZWN0QWxsSW5wdXRzKHJlcS5xdWVyeS5wcm9kdWN0X2lkKVxuICAgIHJlcy5qc29uKGdldElucHV0cylcbn0pXG5cblxucm91dGVyLnB1dCgnL3VwZGF0ZUlucHV0cycsIChyZXEsIHJlcykgPT4ge1xuXG4gICAgT2JqZWN0LnZhbHVlcyhyZXEuYm9keSkubWFwKGFzeW5jIChpOiBhbnksIG4sIGEpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZ2V0UHJvZHVjdHM6IGFueSA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtc2ZvclJlY29yZGluZyhpLmludmVudG9yeV9pdGVtX2lkKVxuICAgICAgICAgICAgY29uc3QgaW5wdXRfd2VpZ2h0ID0gY29udmVydChOdW1iZXIoaS5hbW91bnQpKS5mcm9tKGkudW5pdCkudG8oJ2cnKVxuICAgICAgICAgICAgY29uc3QgaW5wdXRfY29zdCA9IGkucHJpY2VfcGVyX2dyYW0gKiBpbnB1dF93ZWlnaHRcbiAgICAgICAgICAgIGkuaW5wdXRfd2VpZ2h0ID0gaW5wdXRfd2VpZ2h0XG4gICAgICAgICAgICBpLmlucHV0X2Nvc3QgPSBpbnB1dF9jb3N0XG4gICAgICAgICAgICBpLmNhbG9yaWVzID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2Fsb3JpZXNcbiAgICAgICAgICAgIGkudG90YWxfZmF0ID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0udG90YWxfZmF0XG4gICAgICAgICAgICBpLnNhdHVyYXRlZF9mYXQgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5zYXR1cmF0ZWRfZmF0XG4gICAgICAgICAgICBpLnRyYW5zX2ZhdCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnRyYW5zX2ZhdFxuICAgICAgICAgICAgaS5jaG9sZXN0ZXJvbCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLmNob2xlc3Rlcm9sXG4gICAgICAgICAgICBpLnNvZGl1bSA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnNvZGl1bVxuICAgICAgICAgICAgaS5jYXJib2h5ZHJhdGVzID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2FyYm9oeWRyYXRlc1xuICAgICAgICAgICAgaS5maWJlciA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLmZpYmVyXG4gICAgICAgICAgICBpLnN1Z2FyID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uc3VnYXJcbiAgICAgICAgICAgIGkuYWRkZWRfc3VnYXIgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5hZGRlZF9zdWdhclxuICAgICAgICAgICAgaS5wcm90ZWluID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0ucHJvdGVpblxuICAgICAgICAgICAgaS5jYWxjaXVtID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2FsY2l1bVxuICAgICAgICAgICAgaS5pcm9uID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uaXJvblxuICAgICAgICAgICAgaS5wb3Rhc3NpdW0gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5wb3Rhc3NpdW1cbiAgICAgICAgICAgIGkudml0YW1pbl9kID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0udml0YW1pbl9kXG4gICAgICAgICAgICBjb25zdCBpbnB1dElkID0gaS5pZFxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdF9pZCA9IGkucHJvZHVjdF9pZFxuICAgICAgICAgICAgZGVsZXRlIGkuaWRcbiAgICAgICAgICAgIGRlbGV0ZSBpLnByb2R1Y3RfaWRcbiAgICAgICAgICAgIGRlbGV0ZSBpLnByaWNlX3Blcl9ncmFtXG4gICAgICAgICAgICBkZWxldGUgaS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgZGVsZXRlIGkuYW1vdW50XG4gICAgICAgICAgICBkZWxldGUgaS51bml0XG4gICAgICAgICAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5VcGRhdGVQcm9kdWN0SW5wdXRzKGksIGlucHV0SWQpXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0TWV0YSA9IGF3YWl0IHN0b3Jlcy5pbnB1dE51dHJpdGlvbmFsSW5mb3JtYXRpb24ocHJvZHVjdF9pZClcblxuICAgICAgICAgICAgY29uc3QgbmV3UmVwbHkyID0gYXdhaXQgc3RvcmVzLmluc2VydElucHV0SXRlbU1ldGEocHJvZHVjdE1ldGFbMF0sIHByb2R1Y3RfaWQpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgYWZmZWN0ZWRSb3dzID0gMVxuICAgIHJlcy5qc29uKGFmZmVjdGVkUm93cylcblxuXG59KVxuXG5cbnJvdXRlci5kZWxldGUoJy9kZWxldGVJbnB1dHMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcblxuICAgIGNvbnN0IGN1cnJlbnRfcHJvZHVjdF9pbnB1dHM6IGFueSA9IGF3YWl0IHN0b3Jlcy5kZWxldGVJbnB1dE1ldGEocmVxLmJvZHlbMF0pXG5cbiAgICByZXMuanNvbihjdXJyZW50X3Byb2R1Y3RfaW5wdXRzKVxufSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnJvdXRlci5nZXQoJy9nZXROdXRyaWVudHMvOmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgYnVzaW5lc3NfaWQgPSByZXEucGFyYW1zLmlkXG5cbiAgICBjb25zdCBnZXRQcm9kdWN0cyA9IGF3YWl0IHN0b3Jlcy5nZXRSZWNpcGVQcm9kdWN0KGJ1c2luZXNzX2lkKTtcbiAgICBnZXRQcm9kdWN0cy5tYXAoYXN5bmMgKGksIG4sIGEpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0SW5wdXRzID0gYXdhaXQgc3RvcmVzLmdldElucHV0Rm9yVXBkYXRlKGkuaWQpXG4gICAgICAgICBnZXRJbnB1dHMubWFwKGFzeW5jIChpLG4sYSk9PntcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgc3RvcmVzLlVwZGF0ZVByb2R1Y3RJbnB1dHMoaSwgaS5pZClcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcHJvZHVjdE1ldGEgPSBhd2FpdCBzdG9yZXMuaW5wdXROdXRyaXRpb25hbEluZm9ybWF0aW9uKGkuaWQpXG4gICAgICAgIHN0b3Jlcy5pbnNlcnRJbnB1dEl0ZW1NZXRhKHByb2R1Y3RNZXRhWzBdLCBpLmlkKVxuICAgICAgICByZXR1cm4gaVxuICAgIH0pO1xuICAgIGNvbnN0IGdldFByb2R1Y3RzXzEgPSBhd2FpdCBzdG9yZXMuZ2V0UmVjaXBlUHJvZHVjdChidXNpbmVzc19pZCk7XG5cbiAgICByZXMuanNvbihnZXRQcm9kdWN0c18xKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uLy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeSc7XG5cblxuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5cblxuXG5cbi8vQ2hlY2tsaXN0IFJvdXRlc1xuXG5yb3V0ZXIuZ2V0KCcvZ2V0SW52ZW50b3J5SXRlbXNGb3JEYWlseUNoZWNrbGlzdC86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBidXNpbmVzc19pZCA9IHJlcS5wYXJhbXMuaWRcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyhidXNpbmVzc19pZClcbiAgICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2luc2VydEludmVudG9yeUNoZWNrbGlzdEl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICByZXEuYm9keS5vcmRlcl9xdWFudGl0eSA9IHJlcS5ib2R5LnJlY29tbWVuZGVkX3N0b2NrX2xldmVsIC0gcmVxLmJvZHkuaW5fc3RvY2tcbiAgICBpZiAocmVxLmJvZHkub3JkZXJfcXVhbnRpdHkgPD0gMCkge1xuICAgICAgICByZXEuYm9keS5vcmRlcl9xdWFudGl0eSA9IDBcbiAgICB9XG4gICAgZGVsZXRlIHJlcS5ib2R5LnJlY29tbWVuZGVkX3N0b2NrX2xldmVsXG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBzdG9yZXMuaW5zZXJ0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMocmVxLmJvZHkpXG4gICAgcmVzLmpzb24obmV3UmVwbHkpXG59KTtcblxuXG5yb3V0ZXIuZ2V0KCcvcHVibGljTnV0cml0aW9uYWxJbmZvcm1hdGlvbi86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBidXNpbmVzc19pZCA9IHJlcS5wYXJhbXMuaWRcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5nZXROdXRyaXRpb25hbEluZm9Gb3JQdWJsaWMoYnVzaW5lc3NfaWQpXG4gICAgcmVzLmpzb24obmV3UmVwbHkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyBcblxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IHN0b3JlcyBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9JbnZlbnRvcnknO1xuaW1wb3J0IHZlcmlmeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1NlY3VyaXR5L1ZlcmlmaWNhdGlvbidcbmltcG9ydCAqIGFzIGNvbnZlcnQgZnJvbSAnY29udmVydC11bml0cydcbmltcG9ydCB7IGpzb24gfSBmcm9tICdzdHJlYW0vY29uc3VtZXJzJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuXG5cblxucm91dGVyLmdldCgnL2dldEludmVudG9yeUl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zdCByZXN1bHRJbnZlbnRvcnkgPSBhd2FpdCBzdG9yZXMuZ2V0SW52ZW50b3J5SXRlbXMocmVxLmNvb2tpZXMudXNlci5pZClcbiAgICByZXMuanNvbihyZXN1bHRJbnZlbnRvcnkpXG59KTtcblxucm91dGVyLnBvc3QoJy9pbnNlcnROZXdJbnZlbnRvcnlJdGVtcycsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG5cbiAgICByZXEuYm9keS5idXNpbmVzc19pZCA9IHJlcS5jb29raWVzLnVzZXIuaWRcbiAgICBjb25zdCB3ZWlnaHRHcmFtcyA9IGNvbnZlcnQocmVxLmJvZHkudG90YWxfcGFja2FnZV93ZWlnaHQudW5pdCkuZnJvbShyZXEuYm9keS50b3RhbF9wYWNrYWdlX3dlaWdodC53ZWlnaHQpLnRvKCdnJylcbiAgICByZXEuYm9keS5wcmljZV9wZXJfZ3JhbSA9IE51bWJlcihyZXEuYm9keS5wcmljZSAvIHdlaWdodEdyYW1zKS50b0ZpeGVkKDQpXG4gICAgcmVxLmJvZHkudG90YWxfcGFja2FnZV93ZWlnaHQgPSB3ZWlnaHRHcmFtc1xuICAgIGNvbnN0IGN1cnJlbnRfc3RvcmUgPSBhd2FpdCBzdG9yZXMuaW5zZXJ0SW52ZW50b3J5SXRlbShyZXEuYm9keSlcbiAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxufSk7XG5cbnJvdXRlci5wdXQoJy91cGRhdGVJbnZlbnRvcnlJdGVtJyxcbiAgICBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhd2FpdCBzdG9yZXMuZ2V0SW52ZW50b3J5SXRlbXNmb3JSZWNvcmRpbmcocmVxLmJvZHkuaWQpXG4gICAgICAgIGlmIChyZXEuYm9keS52YWx1ZXMudG90YWxfcGFja2FnZV93ZWlnaHQgJiYgIXJlcS5ib2R5LnZhbHVlcy5wcmljZSkge1xuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0R3JhbXMgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy50b3RhbF9wYWNrYWdlX3dlaWdodC51bml0KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy50b3RhbF9wYWNrYWdlX3dlaWdodC53ZWlnaHQpLnRvKCdnJylcbiAgICAgICAgICAgIGNvbnN0IHByaWNlX3Blcl9ncmFtID0gTnVtYmVyKGdldFByb2R1Y3RzWzBdLnByaWNlIC8gd2VpZ2h0R3JhbXMpXG4gICAgICAgICAgICByZXEuYm9keS52YWx1ZXMucHJpY2VfcGVyX2dyYW0gPSBOdW1iZXIocHJpY2VfcGVyX2dyYW0pLnRvRml4ZWQoNClcbiAgICAgICAgICAgIHJlcS5ib2R5LnZhbHVlcy50b3RhbF9wYWNrYWdlX3dlaWdodCA9IHdlaWdodEdyYW1zXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMudXBkYXRlSW52ZW50b3J5SXRlbShyZXEuYm9keS52YWx1ZXMsIHJlcS5ib2R5LmlkKVxuICAgICAgICAgICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcbiAgICAgICAgfSBlbHNlIGlmICghcmVxLmJvZHkudmFsdWVzLnRvdGFsX3BhY2thZ2Vfd2VpZ2h0ICYmIHJlcS5ib2R5LnZhbHVlcy5wcmljZSkge1xuICAgICAgICAgICAgY29uc3QgcHJpY2VfcGVyX2dyYW0gPSBOdW1iZXIocmVxLmJvZHkudmFsdWVzLnByaWNlIC8gZ2V0UHJvZHVjdHNbMF0udG90YWxfcGFja2FnZV93ZWlnaHQpXG4gICAgICAgICAgICByZXEuYm9keS52YWx1ZXMucHJpY2VfcGVyX2dyYW0gPSBOdW1iZXIocHJpY2VfcGVyX2dyYW0pLnRvRml4ZWQoNClcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy51cGRhdGVJbnZlbnRvcnlJdGVtKHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG4gICAgICAgICAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLnVwZGF0ZUludmVudG9yeUl0ZW0ocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICAgICAgICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG4gICAgICAgIH1cblxuICAgIH0pXG5cblxuXG5cbnJvdXRlci5kZWxldGUoJy9kZWxldGVJbnZlbnRvcnlJdGVtcycsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLmRlbGV0ZUludmVudG9yeUl0ZW0ocmVxLmJvZHkpXG4gICAgcmVzLmpzb24oY3VycmVudF9zdG9yZS5hZmZlY3RlZFJvd3MpXG59KTtcblxuXG5yb3V0ZXIucHV0KCcvYWRkTnV0cml0aW9uSW5mb3JtYXRpb24nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBkaXZpZGVyID0gMSAvIHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUuYW1vdW50XG4gICAgcmVxLmJvZHkudmFsdWVzLmNhbG9yaWVzID0gcmVxLmJvZHkudmFsdWVzLmNhbG9yaWVzLmFtb3VudCAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMudG90YWxfZmF0ID0gKChjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy50b3RhbF9mYXQuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy50b3RhbF9mYXQudW5pdCkudG8oJ2cnKSkgKiBkaXZpZGVyKVxuICAgIHJlcS5ib2R5LnZhbHVlcy5zYXR1cmF0ZWRfZmF0ID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc2F0dXJhdGVkX2ZhdC5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnNhdHVyYXRlZF9mYXQudW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMudHJhbnNfZmF0ID0gY29udmVydChyZXEuYm9keS52YWx1ZXMudHJhbnNfZmF0LmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMudHJhbnNfZmF0LnVuaXQpLnRvKCdnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLmNob2xlc3Rlcm9sID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuY2hvbGVzdGVyb2wuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5jaG9sZXN0ZXJvbC51bml0KS50bygnbWcnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuc29kaXVtID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc29kaXVtLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuc29kaXVtLnVuaXQpLnRvKCdtZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5jYXJib2h5ZHJhdGVzID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuY2FyYm9oeWRyYXRlcy5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmNhcmJvaHlkcmF0ZXMudW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuZmliZXIgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5maWJlci5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmZpYmVyLnVuaXQpLnRvKCdnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLnN1Z2FyID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc3VnYXIuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5zdWdhci51bml0KS50bygnZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5wcm90ZWluID0gY29udmVydChyZXEuYm9keS52YWx1ZXMucHJvdGVpbi5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnByb3RlaW4udW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuY2FsY2l1bSA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLmNhbGNpdW0uYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5jYWxjaXVtLnVuaXQpLnRvKCdtZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5pcm9uID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuaXJvbi5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmlyb24udW5pdCkudG8oJ21nJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLnBvdGFzc2l1bSA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLnBvdGFzc2l1bS5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnBvdGFzc2l1bS51bml0KS50bygnbWcnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuYWRkZWRfc3VnYXIgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5hZGRlZF9zdWdhci5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmFkZGVkX3N1Z2FyLnVuaXQpLnRvKCdnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLnZpdGFtaW5fZCA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLnZpdGFtaW5fZC5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnZpdGFtaW5fZC51bml0KS50bygnbWNnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLmFsbGVyZ2llcyA9IEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5LnZhbHVlcy5hbGxlcmdpZXMpXG4gICAgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZSA9IHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUuYW1vdW50XG4gICAgY29uc3QgYWRkZWROZXdOdXRyaXRpb25JdGVtID0gYXdhaXQgc3RvcmVzLmluc2VydE51dHJpdGlvbmFsSW5mb3JtYXRpb24ocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICByZXMuanNvbihhZGRlZE5ld051dHJpdGlvbkl0ZW0pXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgZGF0YWJhc2VfcXVlcnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TdXBwb3J0X0RhdGFiYXNlJztcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgKiBhcyBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IHsgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24sIGNoZWNrQWNjb3VudCB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4nXG5pbXBvcnQgeyBVbmRlcmxpbmVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IFNpZ25VcE1lc3NhZ2UgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU01TL3NlbmRfc21zJztcbmltcG9ydCAqIGFzIGNvbnZlcnQgZnJvbSAnY29udmVydC11bml0cydcbmltcG9ydCBOdXRyaXRpb24gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvTnV0cml0aW9uRGV0YWlscy50cydcblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbmNvbnN0IGNoZWNrQ3JlZGVudGlhbHMgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcblxuICBjb25zdCBjaGVja19EQl9hZ2FpbnN0X2VtYWlsOiBhbnlbXSA9IGF3YWl0IGNoZWNrQWNjb3VudChyZXEuYm9keS5lbWFpbClcbiAgaWYgKGNoZWNrX0RCX2FnYWluc3RfZW1haWwubGVuZ3RoID09PSAwKSB7XG4gICAgbmV4dCgpXG4gIH0gZWxzZSBpZiAoY2hlY2tfREJfYWdhaW5zdF9lbWFpbC5sZW5ndGggPiAwKSB7XG4gICAgcmVzLmpzb24odHJ1ZSlcbiAgfVxufVxuXG5cbnJvdXRlci5wb3N0KCcvcmVnaXN0cmF0aW9uJywgY2hlY2tDcmVkZW50aWFscywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdFN5bmMoTnVtYmVyKHByb2Nlc3MuZW52LlNBTFRfUk9VTkQpKTtcbiAgY29uc3QgaGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoU3luYyhyZXEuYm9keS5jb25maXJtX3Bhc3N3b3JkLCBzYWx0KTtcbiAgZGVsZXRlIHJlcS5ib2R5LmNvbmZpcm1fcGFzc3dvcmRcbiAgdmFyIHRva2VuID0gand0LnNpZ24oeyB1c2VyX25hbWU6IHJlcS5ib2R5LmVtYWlsLCBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSwgcHJvY2Vzcy5lbnYuQkVBUkVSX1BSSVZBVEUpO1xuICByZXEuYm9keS5wYXNzd29yZCA9IGhhc2hcbiAgcmVxLmJvZHkuYWNjZXNzX3Rva2VuID0gdG9rZW5cbiAgcmVxLmJvZHkucGluID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KSArIDExMTExMVxuICAvLyBTaWduVXBNZXNzYWdlKHJlcS5ib2R5LmJ1c2luZXNzX25hbWUsIHJlcS5ib2R5LnBob25lX251bWJlciwgcmVxLmJvZHkuZW1haWwpXG4gIHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uKHJlcS5ib2R5KVxuICByZXMuanNvbihmYWxzZSlcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2JvbGF0ZXN0aW5ncm91dGUnLCBhc3luYyAocmVxLCByZXMpID0+IHtcblxuICAvLyBjb25zdCBCTUkgPSAoKSA9PiB7XG4gIC8vICAgY29uc3QgUHJvY2Vzc2luZ0hlaWdodCA9IGNvbnZlcnQoTnVtYmVyKHJlcS5ib2R5LmhlaWdodC5mZWV0KSkuZnJvbSgnZnQnKS50bygnaW4nKVxuICAvLyAgIGNvbnN0IFByb2Nlc3NlZEhlaWdodCA9IFByb2Nlc3NpbmdIZWlnaHQgKyBOdW1iZXIocmVxLmJvZHkuaGVpZ2h0LmluY2hlcylcbiAgLy8gICBjb25zdCBIZWlnaHRTcXVhcmVkID0gTWF0aC5wb3coUHJvY2Vzc2VkSGVpZ2h0LCAyKVxuICAvLyAgIGNvbnN0IHdlaWdodCA9IHJlcS5ib2R5LndlaWdodFxuICAvLyAgIGNvbnN0IENhbGN1bGF0ZWRCTUkgPSAod2VpZ2h0IC8gSGVpZ2h0U3F1YXJlZCAqIDcwMykudG9GaXhlZCgxKVxuICAvLyAgIGNvbnN0IElkZWFsV2VpZ2h0ID0ge1xuICAvLyAgICAgTWluaW11bUhlYWx0aHlXZWlnaHQ6IE51bWJlcigxOC41IC8gTnVtYmVyKENhbGN1bGF0ZWRCTUkpICogd2VpZ2h0KS50b0ZpeGVkKDIpLFxuICAvLyAgICAgTWVkaXVtSGVhbHRoeVdlaWdodDogKE51bWJlcigxOC41IC8gTnVtYmVyKENhbGN1bGF0ZWRCTUkpICogd2VpZ2h0KSArIE51bWJlcigyNC45IC8gTnVtYmVyKENhbGN1bGF0ZWRCTUkpICogd2VpZ2h0KSkgLyAyLFxuICAvLyAgICAgTWF4aW11bUhlYWx0aHlXZWlnaHQ6IE51bWJlcigyNC45IC8gTnVtYmVyKENhbGN1bGF0ZWRCTUkpICogd2VpZ2h0KS50b0ZpeGVkKDIpLFxuICAvLyAgIH1cbiAgLy8gICBjb25zdCBTdHJpbmdCTUlJbmRpY2F0b3IgPSAoKSA9PiB7XG4gIC8vICAgICBpZiAoTnVtYmVyKENhbGN1bGF0ZWRCTUkpIDw9IDE4LjQpIHtcbiAgLy8gICAgICAgcmV0dXJuICdVbmRlcndlaWdodCdcbiAgLy8gICAgIH1cbiAgLy8gICAgIGlmIChOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPj0gMTguNSAmJiBOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPD0gMjQuOSkge1xuICAvLyAgICAgICByZXR1cm4gJ05vcm1hbCdcbiAgLy8gICAgIH1cbiAgLy8gICAgIGlmIChOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPj0gMjUuMCAmJiBOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPD0gMzkuOSkge1xuICAvLyAgICAgICByZXR1cm4gJ092ZXJ3ZWlnaHQnXG4gIC8vICAgICB9XG4gIC8vICAgICBpZiAoTnVtYmVyKENhbGN1bGF0ZWRCTUkpID49IDQwLjApIHtcbiAgLy8gICAgICAgcmV0dXJuICdPYmVzZSdcbiAgLy8gICAgIH1cbiAgLy8gICB9XG5cbiAgLy8gY29uc3QgQk1SID0gKCkgPT4ge1xuICAvLyAgIGNvbnN0IFdlaWdodEluS2lsb0dyYW1zID0gY29udmVydChyZXEuYm9keS53ZWlnaHQpLmZyb20oJ2xiJykudG8oJ2tnJylcbiAgLy8gICBjb25zdCBIZWlnaHRJbkNlbnRpbWV0ZXJzID0gY29udmVydChQcm9jZXNzaW5nSGVpZ2h0KS5mcm9tKCdpbicpLnRvKCdjbScpXG4gIC8vICAgc3dpdGNoIChyZXEuYm9keS5nZW5kZXIpIHtcbiAgLy8gICAgIGNhc2UgJ21hbGUnOlxuICAvLyAgICAgICBjb25zdCBNYWxlID0gOS45OSAqIFdlaWdodEluS2lsb0dyYW1zICsgNi4yNSAqIEhlaWdodEluQ2VudGltZXRlcnMgLSA0LjkyICogcmVxLmJvZHkuTmV3YWdlICsgNVxuICAvLyAgICAgICByZXR1cm4gTWFsZVxuICAvLyAgICAgICBicmVhaztcbiAgLy8gICAgIGNhc2UgJ2ZlbWFsZSc6XG4gIC8vICAgICAgIGNvbnN0IEZlbWFsZSA9IDkuOTkgKiBXZWlnaHRJbktpbG9HcmFtcyArIDYuMjUgKiBIZWlnaHRJbkNlbnRpbWV0ZXJzIC0gNC45MiAqIHJlcS5ib2R5Lk5ld2FnZSAtIDE2MVxuICAvLyAgICAgICByZXR1cm4gRmVtYWxlXG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgZGVmYXVsdDpcblxuICAvLyAgICAgICBicmVhaztcbiAgLy8gICB9XG4gIC8vIH1cblxuXG5cbiAgLy8gY29uc3QgVERFRSA9ICgpID0+IHtcbiAgLy8gICBjb25zdCBXZWlnaHRJbktpbG9HcmFtcyA9IGNvbnZlcnQocmVxLmJvZHkud2VpZ2h0KS5mcm9tKCdsYicpLnRvKCdrZycpXG4gIC8vICAgY29uc3QgSGVpZ2h0SW5DZW50aW1ldGVycyA9IGNvbnZlcnQoUHJvY2Vzc2luZ0hlaWdodCkuZnJvbSgnaW4nKS50bygnY20nKVxuICAvLyAgIHN3aXRjaCAocmVxLmJvZHkuZ2VuZGVyKSB7XG4gIC8vICAgICBjYXNlICdtYWxlJzpcbiAgLy8gICAgICAgY29uc3QgTWFsZSA9IDkuOTkgKiBXZWlnaHRJbktpbG9HcmFtcyArIDYuMjUgKiBIZWlnaHRJbkNlbnRpbWV0ZXJzIC0gNC45MiAqIHJlcS5ib2R5Lk5ld2FnZSArIDVcbiAgLy8gICAgICAgcmV0dXJuIE1hbGVcbiAgLy8gICAgICAgYnJlYWs7XG4gIC8vICAgICBjYXNlICdmZW1hbGUnOlxuICAvLyAgICAgICBjb25zdCBGZW1hbGUgPSA5Ljk5ICogV2VpZ2h0SW5LaWxvR3JhbXMgKyA2LjI1ICogSGVpZ2h0SW5DZW50aW1ldGVycyAtIDQuOTIgKiByZXEuYm9keS5OZXdhZ2UgLSAxNjFcbiAgLy8gICAgICAgcmV0dXJuIEZlbWFsZVxuICAvLyAgICAgICBicmVhaztcbiAgLy8gICAgIGRlZmF1bHQ6XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgIH1cbiAgLy8gfSBcblxuICAvLyByZXR1cm4gTnVtYmVyKENhbGN1bGF0ZWRCTUkpXG4gIC8vIH1cbiAgLy8gQk1JKClcbiAgY29uc3QgTnV0cml0aW9uUmVxdWlyZW1lbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2UgPSBhd2FpdCBOdXRyaXRpb24uUGVyc29uYWxOdXRyaXRpb25EZXRhaWxzKHJlcS5ib2R5LmdlbmRlciwgcmVxLmJvZHkuYWdlKVxuICAgIGNvbnNvbGUubG9nKHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uKVxuICAgIGxldCByZXBseUFycmF5OiBhbnkgPSBbXVxuICAgIGxldCB0ZXN0aW5nZGF0YTogYW55ID0ge31cbiAgICB0ZXN0aW5nZGF0YVsnYWdlJ10gPSBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5hZ2VcbiAgICB0ZXN0aW5nZGF0YVsnZ2VuZGVyJ10gPSBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5nZW5kZXJcbiAgICB0ZXN0aW5nZGF0YVsnQ2Fsb3JpZXMnXSA9XG4gICAge1xuICAgICAgdmFsdWU6IFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLmNhbG9yaWVzLFxuICAgICAgdW5pdDogJ0tjYWwnLFxuICAgICAgZHY6IDIwMDAsXG4gICAgICBtYzo1MzBcblxuICAgIH1cbiAgICB0ZXN0aW5nZGF0YVsnVG90YWwgRmF0J10gPVxuICAgIHtcbiAgICAgIHZhbHVlOiAoUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF1bJ3RvdGFsX2ZhdCddICogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uY2Fsb3JpZXMgLyA5KS50b0ZpeGVkKCksXG4gICAgICB1bml0OiAnR3JhbXMnLFxuICAgICAgZHY6IDc4LFxuICAgICAgbWM6NjNcbiAgICB9XG4gICAgdGVzdGluZ2RhdGFbJ1NhdHVyYXRlZCBGYXQnXSA9IHtcbiAgICAgIHZhbHVlOiAoUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF1bJ3NhdHVyYXRlZF9mYXQnXSAqIFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLmNhbG9yaWVzIC8gOSkudG9GaXhlZCgpLFxuICAgICAgdW5pdDogJ0dyYW1zJyxcbiAgICAgIGR2OiAyMCxcbiAgICAgIG1jOjI0XG4gICAgfVxuICAgIHRlc3RpbmdkYXRhWydDaG9sZXN0ZXJvbCddID0ge1xuICAgICAgdmFsdWU6IFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLmNob2xlc3Rlcm9sLFxuICAgICAgdW5pdDogJ0dyYW1zJyxcbiAgICAgIGR2OiAzMDAsXG4gICAgICBtYzo1MjVcbiAgICB9XG4gICAgdGVzdGluZ2RhdGFbJ1NvZGl1bSddID0ge1xuICAgICAgdmFsdWU6IFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLnNvZGl1bSxcbiAgICAgIHVuaXQ6IFwiTUdcIixcbiAgICAgIGR2OiAyMzAwLFxuICAgICAgbWM6MjA3MFxuICAgIH1cbiAgICB0ZXN0aW5nZGF0YVsnQ2FyYm9oeWRyYXRlcyddID0ge1xuICAgICAgdmFsdWU6IChSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXVsnY2FyYm9oeWRyYXRlcyddICogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uY2Fsb3JpZXMgLyA0KS50b0ZpeGVkKCksXG4gICAgICB1bml0OiAnRycsXG4gICAgICBkdjogMjc1LFxuICAgICAgbWM6MTU4XG4gICAgfVxuICAgIC8vIHRlc3RpbmdkYXRhWydzdWdhciddID0ge1xuICAgIC8vICAgdmFsdWU6IFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLnN1Z2FyLFxuICAgIC8vICAgdW5pdDpcbiAgICAvLyB9IFxuICAgIHRlc3RpbmdkYXRhWydBZGRlZCBTdWdhciddID0ge1xuICAgICAgdmFsdWU6IChSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXVsnYWRkZWRfc3VnYXInXSAqIFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLmNhbG9yaWVzIC8gNCkudG9GaXhlZCgpLFxuICAgICAgdW5pdDogJ0cnLFxuICAgICAgZHY6IDUwLFxuICAgICAgbWM6NDFcbiAgICB9XG4gICAgdGVzdGluZ2RhdGFbJ1Byb3RlaW4nXSA9IHtcbiAgICAgIHZhbHVlOiAoUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF1bJ3Byb3RlaW4nXSAqIFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLmNhbG9yaWVzIC8gNCkudG9GaXhlZCgpLFxuICAgICAgdW5pdDogXCJHXCIsXG4gICAgICBkdjogNTAsXG4gICAgICBtYzozNlxuICAgIH1cbiAgICB0ZXN0aW5nZGF0YVsnVml0YW1pbiBEJ10gPSB7XG4gICAgICB2YWx1ZTogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0udml0YW1pbl9kLFxuICAgICAgdW5pdDogJ01DRycsXG4gICAgICBkdjogMjAsXG4gICAgICBtYzoyXG4gICAgfVxuICAgIHRlc3RpbmdkYXRhWydDYWxjaXVtJ10gPSB7XG4gICAgICB2YWx1ZTogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uY2FsY2l1bSxcbiAgICAgIHVuaXQ6ICdNRycsXG4gICAgICBkdjogMTMwMCxcbiAgICAgIG1jOjI4MFxuICAgIH1cbiAgICB0ZXN0aW5nZGF0YVsnSXJvbiddID0ge1xuICAgICAgdmFsdWU6IFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLmlyb24sXG4gICAgICB1bml0OiAnTUcnLFxuICAgICAgZHY6IDE4LFxuICAgICAgbWM6Ny41XG4gICAgfVxuICAgIHRlc3RpbmdkYXRhWydQb3Rhc3NpdW0nXSA9IHtcbiAgICAgIHZhbHVlOiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5wb3Rhc3NpdW0sXG4gICAgICB1bml0OiAnTUcnLFxuICAgICAgZHY6IDQ3MDAsXG4gICAgICBtYzo5ODBcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpdGVtcyBpbiB0ZXN0aW5nZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coaXRlbXMsKVxuICAgICAgcmVwbHlBcnJheS5wdXNoKHtcbiAgICAgICAgTmFtZTogaXRlbXMsXG4gICAgICAgIERpc3RpbmN0OiB0ZXN0aW5nZGF0YVtgJHtpdGVtc31gXS52YWx1ZSxcbiAgICAgICAgVW5pdDogdGVzdGluZ2RhdGFbYCR7aXRlbXN9YF0udW5pdCxcbiAgICAgICAgRFY6dGVzdGluZ2RhdGFbYCR7aXRlbXN9YF0uZHYsXG4gICAgICAgIE1jRG9uYWxkc0JpZ0JyZWFrZmFzdDp0ZXN0aW5nZGF0YVtgJHtpdGVtc31gXS5tY1xuICAgICAgfSlcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmVwbHlBcnJheSlcbiAgICByZXMuanNvbihyZXBseUFycmF5KVxuXG4gIH07XG5cbiAgTnV0cml0aW9uUmVxdWlyZW1lbnQoKVxuXG59KTtcblxuXG5cbi8vIFtcbi8vICAge1xuLy8gICAgIGlkOiAxLFxuLy8gICAgIGFnZTogJzItMyB5ZWFycyBvbGQnLFxuLy8gICAgIGdlbmRlcjogJ21hbGUnLFxuLy8gICAgIGNhbG9yaWVzOiAxMDAwLFxuLy8gICAgICd0b3RhbF9mYXRfcGVyY2VudCBfa2NhbCc6IDAuNCxcbi8vICAgICAnc2F0dXJhdGVkX2ZhdF9wZXJjZW50IF9rY2FsJzogMC45LFxuLy8gICAgIHRyYW5zX2ZhdF9wZXJjZW50X2tjYWw6IDAuMDAxLFxuLy8gICAgIGNob2xlc3Rlcm9sOiAzMDAsXG4vLyAgICAgc29kaXVtOiAxMjAwLFxuLy8gICAgIGNhcmJvaHlkcmF0ZXNfcGVyY2VudF9rY2FsOiAwLjY1LFxuLy8gICAgIGZpYmVyOiAwLjAxNCxcbi8vICAgICBzdWdhcjogbnVsbCxcbi8vICAgICBhZGRlZF9zdWdhcjogMC4wOSxcbi8vICAgICBwcm90ZWluX3BlcmNlbnRfY2Fsb3JpZXM6IDAuMixcbi8vICAgICB2aXRhbWluX2Q6IDIwLFxuLy8gICAgIGNhbGNpdW06IDcwMCxcbi8vICAgICBpcm9uOiA3LFxuLy8gICAgIHBvdGFzc2l1bTogMjAwMFxuLy8gICB9XG4vLyBdXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGRhdGFiYXNlX3F1ZXJ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU3VwcG9ydF9EYXRhYmFzZSc7XG5pbXBvcnQgeyBNZXNzYWdlUmVzcG9uc2VGcm9tSG9tZVBhZ2UgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU01TL3NlbmRfc21zJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIucG9zdCgnL3N1cHBvcnRfbWVzc2FnZScsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAvLyAgTWVzc2FnZVJlc3BvbnNlRnJvbUhvbWVQYWdlKHJlcS5ib2R5LmZpcnN0X25hbWUsIHJlcS5ib2R5LnBob25lX251bWJlcixyZXEuYm9keS5lbWFpbClcbiAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBkYXRhYmFzZV9xdWVyeS5pbnNlcnRNZXNzYWdlKHJlcS5ib2R5KVxuICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgcmVzLmpzb24oJ2hlZWxvJylcbn0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiaW1wb3J0ICogYXMgbXlzcWwgZnJvbSAnbXlzcWwyJztcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICdub2RlOnByb2Nlc3MnO1xuXG5cblxuXG5leHBvcnQgY29uc3QgbXlzcWxBY2Nlc3MgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgICB1c2VyOnByb2Nlc3MuZW52Lk1ZU1FMX1VTRVIsXG4gICAgcGFzc3dvcmQ6cHJvY2Vzcy5lbnYuTVlTUUxfUEFTU1dPUkQsXG4gICAgaG9zdDpwcm9jZXNzLmVudi5NWVNRTF9IT1NULFxuICAgIHBvcnQ6IE51bWJlcihwcm9jZXNzLmVudi5NWVNRTF9QT1JUKSxcblxuXG5cbiAgICAvLyBzb2NrZXRQYXRoOnByb2Nlc3MuZW52LklOU1RBTkNFX1VOSVhfU09DS0VUXG5cbn0pXG5cbmV4cG9ydCBjb25zdCBRdWVyeSA9IChxdWVyeTpzdHJpbmcsdmFsdWVzPzpBcnJheTxzdHJpbmd8bnVtYmVyPik9PntcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8YW55Pj4oKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICBteXNxbEFjY2Vzcy5xdWVyeShxdWVyeSx2YWx1ZXMsKGVycixyZXN1bHRzOmFueSkgPT57XG4gICAgICAgICAgICBpZihlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuIGV4cG9ydCBsZXQgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgU0VUID8nLCB2YWx1ZXMpO1xuIFxuIGV4cG9ydCBsZXQgY2hlY2tBY2NvdW50ID0gYXN5bmMgKGVtYWlsOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIGVtYWlsID0gPycsW2VtYWlsXSlcblxuXG5cblxuXG5cbiIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL0NvbmVjdGlvblwiO1xuXG5cbmNvbnN0IGdldENsaWVudEluZm9ybWF0aW9uID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgd2hlcmUgaWQgPSA/JyxbaWRdKTtcbmNvbnN0IHVwZGF0ZVBSSU5DSVBMRSA9IGFzeW5jIChpbmZvLGlkKT0+UXVlcnkoJ1VQREFURSBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgU0VUID8gV0hFUkUgaWQgPSA/JyxbaW5mbyxpZF0pXG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRDbGllbnRJbmZvcm1hdGlvbixcbiAgICB1cGRhdGVQUklOQ0lQTEUsXG59IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuLy8gQ3JlYXRlIFN0b3JlIFxuY29uc3QgY3JlYXRlU3RvcmUgPSBhc3luYyAoc3RvcmU6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEludmVudG9yeS5TdG9yZSBTRVQgPycsIHN0b3JlKTtcbmNvbnN0IHNlbGVjdFN0b3JlID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBJbnZlbnRvcnkuU3RvcmUgV0hFUkUgPzsnLCBbaWRdKTtcblxuXG4vL0NyZWF0ZSBhbmQgQWRkIEludmVudG9yeSB0byBQcmluY2lwbGUgRGF0YWJhc2VcbmNvbnN0IGluc2VydEludmVudG9yeUl0ZW0gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFNFVCA/JywgdmFsdWVzKTtcbmNvbnN0IGdldEludmVudG9yeUl0ZW1zID0gYXN5bmMgKGJ1c2luZXNzX2lkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFdIRVJFIGJ1c2luZXNzX2lkID0gPycsIFtidXNpbmVzc19pZF0pO1xuY29uc3QgZGVsZXRlSW52ZW50b3J5SXRlbSA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgV0hFUkUgPycsIFtpZF0pO1xuY29uc3QgdXBkYXRlSW52ZW50b3J5SXRlbSA9IGFzeW5jICh2YWx1ZXMsIGlkKSA9PiBRdWVyeSgnVVBEQVRFIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgU0VUID8gV0hFUkUgaWQgPSA/JywgW3ZhbHVlcywgaWRdKTtcbmNvbnN0IGdldEludmVudG9yeUNoZWNrbGlzdEl0ZW1zID0gYXN5bmMgKGJ1c2luZXNzX2lkKSA9PiBRdWVyeSgnU0VMRUNUIGlkLGNhdGVnb3J5LHJlY29tbWVuZGVkX3N0b2NrX2xldmVsLGJyYW5kLHN1cHBsaWVyLGRlc2NyaXB0aW9uIEZST00gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBXSEVSRSBidXNpbmVzc19pZCA9ID8gT1JERVIgQlkgY2F0ZWdvcnknLCBbYnVzaW5lc3NfaWRdKTtcbmNvbnN0IGluc2VydEludmVudG9yeUNoZWNrbGlzdEl0ZW1zID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QgU0VUID8nLCB2YWx1ZXMpO1xuY29uc3QgZ2V0UGhvbmVOdW1iZXJzID0gYXN5bmMgKGJ1c2luZXNzX2lkKSA9PiBRdWVyeSgnU0VMRUNUIHBob25lX251bWJlcixidXNpbmVzc19uYW1lIEZST00gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIGlkID0gODAnLCBbYnVzaW5lc3NfaWRdKTtcbmNvbnN0IGdldEludmVudG9yeVJlZmVyZW5jZSA9IGFzeW5jIChidXNpbmVzc19pZCwgZGF0ZV9vZl9hdWRpdCkgPT4gUXVlcnkoYFNFTEVDVCBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC4qLCBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmJyYW5kLEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuZGVzY3JpcHRpb24sSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5icmFuZCxJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmNhdGVnb3J5LEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMucmVjb21tZW5kZWRfc3RvY2tfbGV2ZWwsIChJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnByaWNlICogSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3Qub3JkZXJfcXVhbnRpdHkpIGFzIHByaWNlLEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmRhdGVfb2ZfYXVkaXQgRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdCBKT0lOIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgT04gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5pZCA9IEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmludmVudG9yeV9pdGVtX2lkIFdIRVJFIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmJ1c2luZXNzX2lkID0gJHtidXNpbmVzc19pZH0gYW5kIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmRhdGVfb2ZfYXVkaXQgPSAnJHtkYXRlX29mX2F1ZGl0fScgIE9SREVSIEJZIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmRhdGVfb2ZfYXVkaXQ7YCwgW2J1c2luZXNzX2lkLCBkYXRlX29mX2F1ZGl0XSk7XG5jb25zdCBkZWxldGVJbnZlbnRvcnlBdWRpdEl0ZW0gPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdCBXSEVSRSA/JywgW2lkXSk7XG5jb25zdCB1cGRhdGVJbnZlbnRvcnlBdWRpdEl0ZW0gPSBhc3luYyAodmFsdWVzLCBpZCkgPT4gUXVlcnkoJ1VQREFURSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbdmFsdWVzLCBpZF0pO1xuY29uc3Qgc2VsZWN0VW5pcXVlSW52ZW50b3J5UGVyaW9kID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnU0VMRUNUIGRhdGVfb2ZfYXVkaXQsYXVkaXRfcmVmZXJlbmNlX251bWJlciBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0IFdIRVJFIGJ1c2luZXNzX2lkID0gPycsW2lkXSk7XG5jb25zdCBpbnNlcnRQcm9kdWN0UmVjaXBlTmFtZSA9IGFzeW5jICh2YWx1ZXMpID0+IFF1ZXJ5KCdJTlNFUlQgUmVjaXBlLlByb2R1Y3RzIFNFVCA/JywgW3ZhbHVlc10pXG5jb25zdCB1cERhdGVQcm9kdWN0UmVjaXBlQ29zdCA9IGFzeW5jICh2YWx1ZXMpID0+IFF1ZXJ5KCdJTlNFUlQgUmVjaXBlLlByb2R1Y3RzIFNFVCA/JyxbdmFsdWVzXSlcbmNvbnN0IGdldFJlY2lwZVByb2R1Y3QgPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFJlY2lwZS5Qcm9kdWN0cyBXSEVSRSBidXNpbmVzc19pZCA9ID8nLCBbaWRdKVxuY29uc3QgZ2V0SW52ZW50b3J5SXRlbXNmb3JTZWxlY3QgPSBhc3luYyhpZCkgPT4gUXVlcnkoJ3NlbGVjdCBpZCAsZGVzY3JpcHRpb24sY2F0ZWdvcnksdG90YWxfcGFja2FnZV93ZWlnaHQscHJpY2VfcGVyX2dyYW0gZnJvbSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIHdoZXJlIGJ1c2luZXNzX2lkID0gPyBPUkRFUiBCWSBjYXRlZ29yeScsIFtpZF0pXG5jb25zdCBnZXRJbnZlbnRvcnlJdGVtc2ZvclJlY29yZGluZyA9IGFzeW5jKGlkKSA9PiBRdWVyeSgnc2VsZWN0ICogZnJvbSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIHdoZXJlIGlkID0gPycsIFtpZF0pXG5jb25zdCBpbnNlcnRJbmdyZWRpZW50cyA9IGFzeW5jKHZhbHVlcyxwcm9kdWN0X2lkKSA9PiBRdWVyeSgnSU5TRVJUIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyBTRVQgPyAgJywgW3ZhbHVlcyxwcm9kdWN0X2lkXSlcbmNvbnN0IHN1bU9mQWxsSW5ncmVkaWVudHMgPSBhc3luYyhwcm9kdWN0SWQpID0+UXVlcnkoJ3NlbGVjdCBzdW0oaW5wdXRfY29zdCkgZnJvbSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgd2hlcmUgcHJvZHVjdF9pZCA9ID8nLFtwcm9kdWN0SWRdKVxuY29uc3QgaW5zZXJ0SW5wdXRJdGVtTWV0YSA9IGFzeW5jKHZhbHVlcyxpZCkgPT4gUXVlcnkoJ1VQREFURSBSZWNpcGUuUHJvZHVjdHMgU0VUID8gV0hFUkUgaWQgPSA/JyxbdmFsdWVzLGlkXSlcbmNvbnN0IGdldEluZ3JlZGllbnRDb3VudCA9IGFzeW5jKGlkKSA9PiBRdWVyeSgnU0VMRUNUIENPVU5UKGludmVudG9yeV9pdGVtX2lkKSBGUk9NIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyBXSEVSRSBwcm9kdWN0X2lkID0gPzsnLFtpZF0pXG5jb25zdCB0b3RhbElucHV0V2VpZ2h0ID0gYXN5bmMocHJvZHVjdElkKSA9PlF1ZXJ5KCdzZWxlY3Qgc3VtKGlucHV0X3dlaWdodCkgZnJvbSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgd2hlcmUgcHJvZHVjdF9pZCA9ID8nLFtwcm9kdWN0SWRdKVxuY29uc3QgZGVsZXRlUHJvZHVjdCA9IGFzeW5jKGlkKSA9PlF1ZXJ5KCdERUxFVEUgRlJPTSBSZWNpcGUuUHJvZHVjdHMgV0hFUkUgaWQgPSA/JyxbaWRdKVxuY29uc3QgVXBkYXRlUHJvZHVjdCA9IGFzeW5jICh2YWx1ZXMsIGlkKSA9PiBRdWVyeSgnVVBEQVRFIFJlY2lwZS5Qcm9kdWN0cyBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbdmFsdWVzLCBpZF0pXG5jb25zdCBkZWxldGVJbnB1dCA9IGFzeW5jKHByb2R1Y3RJZCkgPT5RdWVyeSgnREVMRVRFIEZST00gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIFdIRVJFIHByb2R1Y3RfaWQgPSA/JyxbcHJvZHVjdElkXSlcbmNvbnN0IGluc2VydElucHV0SXRlbU1ldGFGdWxsID0gYXN5bmModmFsdWVzLGlkKSA9PiBRdWVyeSgnVVBEQVRFIFJlY2lwZS5Qcm9kdWN0cyBTRVQgPyBXSEVSRSBpZCA9ID8nLFt2YWx1ZXMsaWRdKVxuY29uc3Qgc2VsZWN0QWxsSW5wdXRzID0gYXN5bmMoaWQpPT5RdWVyeShgU0VMRUNUIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuZGVzY3JpcHRpb24sUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmludmVudG9yeV9pdGVtX2lkLFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pZCxSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0LFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF9jb3N0LEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMucHJpY2VfcGVyX2dyYW0sUmVjaXBlLlByb2R1Y3RfSW5wdXRzLnByb2R1Y3RfaWQgRlJPTSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgSU5ORVIgSk9JTiBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFdIRVJFIFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnZlbnRvcnlfaXRlbV9pZCA9IEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuaWQgYW5kIFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5wcm9kdWN0X2lkID0gP2AsW2lkXSlcbmNvbnN0IFVwZGF0ZVByb2R1Y3RJbnB1dHMgPSBhc3luYyh2YWx1ZXMsaWQpID0+IFF1ZXJ5KCdVUERBVEUgUmVjaXBlLlByb2R1Y3RfSW5wdXRzIFNFVCA/IFdIRVJFIGlkID0gPycsW3ZhbHVlcyxpZF0pXG5jb25zdCBkZWxldGVJbnB1dE1ldGEgPSBhc3luYyhwcm9kdWN0SWQpID0+UXVlcnkoJ0RFTEVURSBGUk9NIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyBXSEVSRSBpZCA9ID8nLFtwcm9kdWN0SWRdKVxuXG5cblxuXG5jb25zdCBpbnB1dE51dHJpdGlvbmFsSW5mb3JtYXRpb24gPSBhc3luYyAocHJvZHVjdElkKT0+XG5RdWVyeShcInNlbGVjdCBzdW0oaW5wdXRfY29zdCkgYXMgdG90YWxfY29zdCwgc3VtKGlucHV0X3dlaWdodCkgYXMgdG90YWxfd2VpZ2h0LCBDT1VOVChpbnZlbnRvcnlfaXRlbV9pZCkgYXMgdG90YWxfaW5wdXRfY291bnQsIHN1bShjYWxvcmllcykgYXMgY2Fsb3JpZXMsc3VtKHRvdGFsX2ZhdCkgYXMgdG90YWxfZmF0LHN1bShzYXR1cmF0ZWRfZmF0KSBhcyBzYXR1cmF0ZWRfZmF0LHN1bSh0cmFuc19mYXQpIGFzIHRyYW5zX2ZhdCxzdW0oY2hvbGVzdGVyb2wpIGFzIGNob2xlc3Rlcm9sLHN1bShzb2RpdW0pIGFzIHNvZGl1bSxzdW0oY2FyYm9oeWRyYXRlcykgYXMgY2FyYm9oeWRyYXRlcyxzdW0oZmliZXIpIGFzIGZpYmVyLHN1bShzdWdhcikgYXMgc3VnYXIsc3VtKGFkZGVkX3N1Z2FyKSBhcyBhZGRlZF9zdWdhcixzdW0ocHJvdGVpbikgYXMgcHJvdGVpbixzdW0oY2FsY2l1bSkgYXMgY2FsY2l1bSxzdW0oaXJvbikgYXMgaXJvbixzdW0ocG90YXNzaXVtKSBhcyBwb3Rhc3NpdW0sc3VtKHZpdGFtaW5fZCkgYXMgdml0YW1pbl9kIGZyb20gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIHdoZXJlIHByb2R1Y3RfaWQgPSA/XCIsW3Byb2R1Y3RJZF0pXG5jb25zdCBpbnNlcnROdXRyaXRpb25hbEluZm9ybWF0aW9uID0gYXN5bmMgKHZhbHVlcywgaWQpID0+IFF1ZXJ5KCdVUERBVEUgSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbdmFsdWVzLCBpZF0pXG5cbmNvbnN0IGdldElucHV0Rm9yVXBkYXRlID0gYXN5bmMgKHByb2R1Y3RJZCk9PlxuUXVlcnkoYFNFTEVDVCBcblJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pZCxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnByaWNlX3Blcl9ncmFtKSBhcyBpbnB1dF9jb3N0LFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuY2Fsb3JpZXMpIGFzIGNhbG9yaWVzLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuY2Fsb3JpZXMpIGFzIGNhbG9yaWVzLFxuICAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnRvdGFsX2ZhdCkgYXMgdG90YWxfZmF0LFxuICAgKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5zYXR1cmF0ZWRfZmF0KSBhcyBzYXR1cmF0ZWRfZmF0LFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMudHJhbnNfZmF0KSBhcyB0cmFuc19mYXQsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5jaG9sZXN0ZXJvbCkgYXMgY2hvbGVzdGVyb2wsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5zb2RpdW0pIGFzIHNvZGl1bSxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmNhcmJvaHlkcmF0ZXMpIGFzIGNhcmJvaHlkcmF0ZXMsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5maWJlcikgYXMgZmliZXIsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5zdWdhcikgYXMgc3VnYXIsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5hZGRlZF9zdWdhcikgYXMgYWRkZWRfc3VnYXIsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5wcm90ZWluKSBhcyBwcm90ZWluLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuY2FsY2l1bSkgYXMgY2FsY2l1bSxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmlyb24pIGFzIGlyb24sXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5wb3Rhc3NpdW0pIGFzIHBvdGFzc2l1bSxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnZpdGFtaW5fZCkgYXMgdml0YW1pbl9kLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuYWxsZXJnaWVzKSBhcyBhbGxlcmdpZXNcbiBGUk9NIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyBJTk5FUiBKT0lOIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgXG4gV0hFUkUgUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmludmVudG9yeV9pdGVtX2lkID0gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5pZCBcbiBhbmQgUmVjaXBlLlByb2R1Y3RfSW5wdXRzLnByb2R1Y3RfaWQgPSA/YCxbcHJvZHVjdElkXSk7XG5cbiBjb25zdCBnZXROdXRyaXRpb25hbEluZm9Gb3JQdWJsaWMgPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgUmVjaXBlLlByb2R1Y3RzLiosIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscy5idXNpbmVzc19uYW1lIGZyb20gUmVjaXBlLlByb2R1Y3RzIGpvaW4gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIHdoZXJlIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscy5pZCA9IFJlY2lwZS5Qcm9kdWN0cy5idXNpbmVzc19pZCBhbmQgQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzLmlkPT8nLFtpZF0pXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0SW5wdXRGb3JVcGRhdGUsXG4gICAgY3JlYXRlU3RvcmUsXG4gICAgc2VsZWN0U3RvcmUsXG4gICAgaW5zZXJ0SW52ZW50b3J5SXRlbSxcbiAgICBnZXRJbnZlbnRvcnlJdGVtcyxcbiAgICBkZWxldGVJbnZlbnRvcnlJdGVtLFxuICAgIHVwZGF0ZUludmVudG9yeUl0ZW0sXG4gICAgZ2V0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMsXG4gICAgaW5zZXJ0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMsXG4gICAgZ2V0UGhvbmVOdW1iZXJzLFxuICAgIGdldEludmVudG9yeVJlZmVyZW5jZSxcbiAgICBkZWxldGVJbnZlbnRvcnlBdWRpdEl0ZW0sXG4gICAgdXBkYXRlSW52ZW50b3J5QXVkaXRJdGVtLFxuICAgIHNlbGVjdFVuaXF1ZUludmVudG9yeVBlcmlvZCxcbiAgICBpbnNlcnROdXRyaXRpb25hbEluZm9ybWF0aW9uLFxuICAgIGluc2VydFByb2R1Y3RSZWNpcGVOYW1lLFxuICAgIGdldFJlY2lwZVByb2R1Y3QsXG4gICAgZ2V0SW52ZW50b3J5SXRlbXNmb3JTZWxlY3QsXG4gICAgZ2V0SW52ZW50b3J5SXRlbXNmb3JSZWNvcmRpbmcsXG4gICAgaW5zZXJ0SW5ncmVkaWVudHMsXG4gICAgc3VtT2ZBbGxJbmdyZWRpZW50cyxcbiAgICBpbnNlcnRJbnB1dEl0ZW1NZXRhLFxuICAgIHVwRGF0ZVByb2R1Y3RSZWNpcGVDb3N0LFxuICAgIGdldEluZ3JlZGllbnRDb3VudCxcbiAgICB0b3RhbElucHV0V2VpZ2h0LFxuICAgIGRlbGV0ZUlucHV0LFxuICAgIGRlbGV0ZVByb2R1Y3QsXG4gICAgVXBkYXRlUHJvZHVjdCxcbiAgICBpbnB1dE51dHJpdGlvbmFsSW5mb3JtYXRpb24sXG4gICAgaW5zZXJ0SW5wdXRJdGVtTWV0YUZ1bGwsXG4gICAgc2VsZWN0QWxsSW5wdXRzLFxuICAgIFVwZGF0ZVByb2R1Y3RJbnB1dHMsXG4gICAgZGVsZXRlSW5wdXRNZXRhLFxuICAgIGdldE51dHJpdGlvbmFsSW5mb0ZvclB1YmxpY1xuICAgIFxuXG5cbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCBQZXJzb25hbE51dHJpdGlvbkRldGFpbHMgPSBhc3luYyAoZ2VuZGVyLGFnZSkgPT4gUXVlcnkoJ1NlbGVjdCAqIEZyb20gTnV0cml0aW9uYWxfSXRlbV9BbmFseXRpY3MuUG9wdWxhdGlvbl9OdXRyaWVudF9JbnRha2UgV2hlcmUgZ2VuZGVyID0gPyBhbmQgYWdlID0gPycsW2dlbmRlcixhZ2VdKTtcblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBQZXJzb25hbE51dHJpdGlvbkRldGFpbHMsXG59IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgdmVyaWZ5SW5mb3JtYXRpb24gPSBhc3luYyAoZW1haWxzOiBhbnkpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLkxvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIGVtYWlsPT8nLFtlbWFpbHNdKTtcbmNvbnN0IHVwZGF0ZUJlYXJlclRva2VuID0gYXN5bmMgKGJlYXJlcl90b2tlbixpZCk9PlF1ZXJ5KCdVUERBVEUgQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgU0VUID8gV0hFUkUgZW1haWwgPT8gJyxbYmVhcmVyX3Rva2VuLGlkXSlcbmNvbnN0IGFzc29jaWF0ZVZlcmlmaWNhdGlvbiA9IGFzeW5jKHBpbixpZCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIHBpbiA9ID8gYW5kIGlkID0gPyAnLFtwaW4saWRdKVxuXG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuLy8gY29uc3QgZGVsZXRlTWVzc2FnZXMgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIGNvbnRhY3QgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG4vLyBjb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAoLi4udmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBLQ01fSU5DLmNsaWVudFJlZ2lzdHJhdGlvbiBTRVQgPycsIHZhbHVlcyk7XG4vLyBjb25zdCBpbnNlcnRJbnN0aXR1dGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmluc3RpdHV0aW9uIFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3QgdXBkYXRlTWVzc2FnZXMgPSBhc3luYyAobmV3Q29udGVudDogYW55LCBpZDogYW55KSA9PiBRdWVyeSgnVVBEQVRFIGNvbnRhY3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW25ld0NvbnRlbnQsIGlkXSlcbi8vIGNvbnN0IGFsbFVzZXJzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gVXNlcnMnKTtcbi8vIGNvbnN0IGluc2VydFVzZXJzID0gYXN5bmModXNlciA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRzIFNFVCA/JyAsW3VzZXJdKTtcblxuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB2ZXJpZnlJbmZvcm1hdGlvbixcbiAgICB1cGRhdGVCZWFyZXJUb2tlbixcbiAgICBhc3NvY2lhdGVWZXJpZmljYXRpb25cblxufSIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uL0NvbmVjdGlvblwiO1xuXG5cbmNvbnN0IHZpZXdNZXNzYWdlcyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdzZWxlY3QgKiBmcm9tIENvbW11bmljYXRpb24uTWVzc2FnZXMnKTtcbmNvbnN0IGluc2VydE1lc3NhZ2U9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIENvbW11bmljYXRpb24uU3VwcG9ydCBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuXG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHZpZXdNZXNzYWdlcyxcbiAgICBpbnNlcnRNZXNzYWdlXG5cblxufSIsIlxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0ICdwYXNzcG9ydC1sb2NhbCc7XG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCB7U3RyYXRlZ3kgYXMgQmVhcmVyU3RyYXRlZ3l9IGZyb20gJ3Bhc3Nwb3J0LWh0dHAtYmVhcmVyJztcbmltcG9ydCAqIGFzIGRiIGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0JlYXJlclRva2VuRGV0YWlscydcbmltcG9ydCB7IG15c3FsQWNjZXNzIH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9Db25lY3Rpb24nO1xuXG5cblxuXG5cblxucGFzc3BvcnQudXNlKG5ldyBCZWFyZXJTdHJhdGVneShcbiAgICAgKHRva2VuLCBkb25lKT0+IHtcbiAgICAgICAgbXlzcWxBY2Nlc3MucXVlcnkoYFNFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgV2hlcmUgYWNjZXNzX3Rva2VuID0gP2AsIFt0b2tlbl0sIChlcnJvciwgdXNlcikgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHsgcmV0dXJuIGRvbmUoZXJyb3IpOyB9XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHsgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpOyB9XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlciwgeyBzY29wZTogJ3JlYWQnIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG4pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0ICdwYXNzcG9ydC1sb2NhbCc7XG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCB7IFN0cmF0ZWd5IGFzIExvY2FsU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1sb2NhbCdcbmltcG9ydCB7IGNoZWNrQWNjb3VudCB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4vaW5kZXgnXG5pbXBvcnQgdmVyaWZ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU2VjdXJpdHkvVmVyaWZpY2F0aW9uJ1xuXG5pbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucGFzc3BvcnQudXNlKG5ldyBMb2NhbFN0cmF0ZWd5KHtcbiAgdXNlcm5hbWVGaWVsZDogJ2VtYWlsJyxcbiAgcGFzc3dvcmRGaWVsZDogJ3Bhc3N3b3JkJyxcbn0sIGFzeW5jIGZ1bmN0aW9uIHZlcmlmeShlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBkb25lOiBhbnkpIHtcbiAgY29uc3QgW3VzZXJdID0gYXdhaXQgY2hlY2tBY2NvdW50KGVtYWlsKVxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBtZXNzYWdlOiBcIkludmFsaWQgY3JlZGVudGlhbHMuXFxuXCIgfSk7XG4gIH1cbiAgaWYgKCFiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpKSB7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgbWVzc2FnZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlxcblwiIH0pO1xuICB9XG4gIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuXG59XG4pKTtcblxucGFzc3BvcnQuc2VyaWFsaXplVXNlcigodXNlcjogYW55LCBkb25lKSA9PiB7XG4gIGRlbGV0ZSB1c2VyLmRhdGVfdGltZVxuICBkZWxldGUgdXNlci5wYXNzd29yZFxuICBkZWxldGUgdXNlci50ZXJtc19vZl9zZXJ2aWNlXG4gIGRlbGV0ZSB1c2VyLnByaXZhY3lfcG9saWN5XG4gIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgIHJldHVybiBkb25lKG51bGwsIHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgZmlyc3RfbmFtZTogdXNlci5maXJzdF9uYW1lLFxuICAgICAgbGFzdF9uYW1lOiB1c2VyLmxhc3RfbmFtZSxcbiAgICAgIGJ1c2luZXNzX25hbWU6IHVzZXIuYnVzaW5lc3NfbmFtZSxcbiAgICAgIHBob25lX251bWJlcjogdXNlci5waG9uZV9udW1iZXIsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGFjY291bnRfdHlwZTogdXNlci5hY2NvdW50X3R5cGUsXG4gICAgICBhY2Nlc3NfdG9rZW46IHVzZXIuYWNjZXNzX3Rva2VuXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbnBhc3Nwb3J0LmRlc2VyaWFsaXplVXNlcigodXNlcjogYW55LCBkb25lKSA9PiB7XG4gIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuICB9KTtcbn0pO1xuXG5cbnJvdXRlci5wb3N0KCcvbG9naW5fdmVyaWZpY2F0aW9uJywgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdsb2NhbCcpLCAocmVxOiBhbnksIHJlcykgPT4ge1xuICBpZiAocmVxLnVzZXIpIHtcbiAgICByZXEubG9nSW4ocmVxLnVzZXIsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuY29va2llKCd1c2VyJywgcmVxLnVzZXIpLmpzb24ocmVxLnVzZXIpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCFyZXEudXNlcikge1xuICAgIHJlcy5zZW5kU3RhdHVzKDQwMSlcbiAgfVxufSk7XG5cbnJvdXRlci5wb3N0KCcvdmVyaWZ5X2Fzc29jaWF0ZV9waW4nLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICBjb25zdCBbbmV3UmVwbHksIGVycm9yXSA9IGF3YWl0IHZlcmlmeS5hc3NvY2lhdGVWZXJpZmljYXRpb24ocmVxLmJvZHkucGluLCByZXEuYm9keS5pZClcbiAgaWYgKG5ld1JlcGx5KSB7XG4gICAgICByZXMuanNvbih0cnVlKVxuICB9IGVsc2UgaWYgKCFuZXdSZXBseSkge1xuICAgICAgcmVzLmpzb24oZmFsc2UpXG4gIH1cbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuaW1wb3J0ICogYXMgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG4vLyBpbXBvcnQgSG9tZXBhZ2VTZXJ2ZXIgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5Jztcbi8vIGltcG9ydCBDbGllbnRQb3J0YWwgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuLy8gaW1wb3J0IHsgTWVzc2FnaW5nUmVzcG9uc2UsIHNlbmRSZXBseSB9IGZyb20gJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG4vLyBpbXBvcnQgJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1BBWU1FTlRTL2F1dGhvcml6ZV9jYXJkJztcbmltcG9ydCBzdXBwb3J0IGZyb20gJy4vTUVTU0FHRV9TVVBQT1JUL3N1cHBvcnQnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4vQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscydcbi8vIGltcG9ydCBiaWxsaW5nIGZyb20gJy4vQ2xpZW50UG9ydGFsL0NsaWVudEJpbGxpbmcnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vQ2xpZW50UG9ydGFsL1N0b2NrJztcbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuL0NsaWVudFBvcnRhbC9Qcm9kdWN0cyc7XG5pbXBvcnQgaW5zdG9yZSBmcm9tICcuL0NsaWVudFBvcnRhbC9RUkNPREUvaW5TdG9yZUF1ZGl0cydcbmltcG9ydCBhdWRpdHMgZnJvbSAnLi9DbGllbnRQb3J0YWwvQXVkaXRzL0ludmVudG9yeUF1ZGl0cyc7XG5pbXBvcnQgbnV0cml0aW9uIGZyb20gJy4vQ2xpZW50UG9ydGFsL051dHJpdGlvbic7XG5pbXBvcnQgcmVnaXN0cmF0aW9uIGZyb20gJy4vSG9tZXBhZ2UvcmVnaXN0cmF0aW9uJ1xuXG5pbXBvcnQgVVBTdHJhdGVneSBmcm9tICcuL1NlY3VyaXR5L2xvY2FsU3RyYXRlZ3knXG5pbXBvcnQgKiBhcyBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbidcbmltcG9ydCAnLi9TZWN1cml0eS9CZWFyZXInXG5cbmltcG9ydCAqIGFzIGNvb2tpZXBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJ1xuaW1wb3J0ICogYXMgY29udmVydCBmcm9tICdjb252ZXJ0LXVuaXRzJ1xuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdSdcbmltcG9ydCB7IFRhZ0ZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xuLy8gaW1wb3J0ICogYXMgcW5hIGZyb20gJ0B0ZW5zb3JmbG93LW1vZGVscy9xbmEnO1xuLy8gaW1wb3J0ICdAdGVuc29yZmxvdy90ZmpzLWJhY2tlbmQtd2ViZ2wnXG5cblxuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXMuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIHJlcy5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnKicpXG4gIHJlcy5zZXQoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKVxuICBuZXh0KClcbn0pXG5hcHAuc2V0KCd0cnVzdCBwcm94eScsIHRydWUpXG5cbmFwcC51c2UoY29va2llcGFyc2VyKCkpXG5hcHAudXNlKHNlc3Npb24oe1xuICBzZWNyZXQ6ICdrZXlib2FyZCBjYXQnLFxuICByZXNhdmU6IGZhbHNlLFxuICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2UsXG4gIGNvb2tpZTogeyBzZWN1cmU6IGZhbHNlIH1cbn0pKTtcblxuXG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG5cbmFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcblxuXG5cbmFwcC51c2UoVVBTdHJhdGVneSlcbmNvbnN0IHZhbGlkYXRlVXNlciA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBpZiAoIXJlcS51c2VyKSB7XG4gICAgcmVzLnJlZGlyZWN0KCcvc2lnbnVwJylcbiAgfSBlbHNlIGlmIChyZXEudXNlcikge1xuICAgIG5leHQoKVxuICB9XG59XG5cblxuXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3N1cHBvcnQnLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5hcHAudXNlKCcvYWJvdXR1cycsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy90ZXJtc29mc2VydmljZScsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy9ib2xhX292ZXJ2aWV3JywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3ByaXZhY3lwb2xpY3knLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5cblxuXG5hcHAudXNlKCcvaW52ZW50b3J5Y2hlY2snLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5hcHAudXNlKCcvbnV0cmllbnRzJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuLy8gYXBwLnVzZSgnL3ByaW5jaXBsZS8nLCB2YWxpZGF0ZVVzZXIsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy9wcmluY2lwbGUvJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3ByaW5jaXBsZS9zdG9yZScsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy9wcmluY2lwbGUvcHJvZHVjdHMnLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5hcHAudXNlKCcvcHJpbmNpcGxlL2JvbGFtYW51YWwnLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5cblxuXG5hcHAudXNlKCcvbG9naW4nLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5hcHAudXNlKCcvc2lnbnVwJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3N0b3JlJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL2ludmVudG9yeWF1ZGl0cycsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy9udXRyaXRpb24nLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5hcHAudXNlKCcvYWNjb3VudCcsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy9wcm9kdWN0cycsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcblxuYXBwLnVzZShyZWdpc3RyYXRpb24pXG5hcHAudXNlKHN1cHBvcnQpXG5hcHAudXNlKGNsaWVudClcbmFwcC51c2UobnV0cml0aW9uKVxuYXBwLnVzZShzdG9yZSlcbmFwcC51c2UoYXVkaXRzKVxuYXBwLnVzZShwcm9kdWN0cylcbmFwcC51c2UoaW5zdG9yZSlcblxuYXBwLmdldChcIipcIiwgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uL3B1YmxpY1wiKSlcbn0pO1xuXG5cblxuXG5hcHAucG9zdCgnL251dHJpdGlvbmFsRGF0YScsIGFzeW5jIChyZXEsIHJlcywgZXJyb3IpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5uYWwudXNkYS5nb3YvZmRjL3YxL2Zvb2RzL3NlYXJjaD9xdWVyeT0ke3JlcS5ib2R5LmZvb2RTZWxlY3Rpb259JnBhZ2VTaXplPTQmZGF0YVR5cGU9Rm91bmRhdGlvbiZhcGlfa2V5PSR7cHJvY2Vzcy5lbnYuQVBJX0tFWX1gXG4gIClcbiAgY29uc3QgZm9vZHNRdWVyeSA9IGF3YWl0IGRhdGEuanNvbigpXG5cbiAgY29uc3QgZm9vZHNBcnJheSA9IGF3YWl0IGZvb2RzUXVlcnkuZm9vZHMubWFwKChpOiBhbnkpID0+IHtcbiAgICByZXR1cm4gaVxuICB9KVxuICBsZXQgYXJyYXlTb3J0ID0gZm9vZHNBcnJheVswXS5mb29kTnV0cmllbnRzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgY29uc3QgbmFtZUEgPSBhLm51dHJpZW50TmFtZS50b1VwcGVyQ2FzZSgpIC8vIGlnbm9yZSB1cHBlciBhbmQgbG93ZXJjYXNlXG4gICAgY29uc3QgbmFtZUIgPSBiLm51dHJpZW50TmFtZS50b1VwcGVyQ2FzZSgpIC8vIGlnbm9yZSB1cHBlciBhbmQgbG93ZXJjYXNlXG4gICAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH1cbiAgICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG5cbiAgICAvLyBuYW1lcyBtdXN0IGJlIGVxdWFsXG4gICAgcmV0dXJuIDBcbiAgfSlcblxuXG5cbiAgY29uc3QgbnV0cmllbnRQcm9maWxlOiBbXSA9IGFycmF5U29ydC5tYXAoKGRhdGE6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGlmIChcbiAgICAgIGRhdGEubnV0cmllbnRJZCA9PSAxMDAzIHx8XG4gICAgICBkYXRhLm51dHJpZW50SWQgPT0gMTA4NyB8fFxuICAgICAgZGF0YS5udXRyaWVudElkID09IDEwOTNcblxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG4gIH0pXG4gIGxldCBzZWxlY3RlZE51dHJpZW50cyA9IG51dHJpZW50UHJvZmlsZS5maWx0ZXIoXG4gICAgaW5kZXggPT4gaW5kZXggIT09IHVuZGVmaW5lZCB8fCBudWxsXG4gIClcblxuICByZXMuanNvbihbZm9vZHNBcnJheVswXS5kZXNjcmlwdGlvbiwgc2VsZWN0ZWROdXRyaWVudHNdKVxuXG59KVxuXG4vLyBjb25zdCB0ZXN0MSA9IFtdXG4vLyBjb25zdCB0Zm91dHB1dCA9IFtdXG4vLyBsZXQgaW5kZXggPSAwXG4vLyAgZm9yICAoIGxldCBpbmRleCA9IDAgOyBpbmRleCA8PSA5OTkgIDsgaW5kZXgrKykge1xuLy8gIGxldCBuZXdSZXBseSA9IGluZGV4IFxuLy8gdGVzdDEucHVzaChuZXdSZXBseSxuZXdSZXBseSsxMDAsMSlcbi8vICB9XG4vLyAgZm9yICAoIGxldCBpbmRleCA9IDAgOyBpbmRleCA8PSA5OTkgIDsgaW5kZXgrKykge1xuLy8gICBsZXQgbmV3UmVwbHkgPSBpbmRleFxuLy8gIHRmb3V0cHV0LnB1c2gobmV3UmVwbHkpXG4vLyAgIH1cblxuLy8gY29uc3QgdGZBcnJheSA9IHRmLnRlbnNvcih0ZXN0MSxbMTAwMCwzXSlcbi8vIGNvbnN0IHRmQXJyYXlPdXRwdXQgPSB0Zi50ZW5zb3IodGZvdXRwdXQsWzEwMDAsMV0pXG4vLyBjb25zb2xlLmxvZyh0ZkFycmF5T3V0cHV0KVxuLy8gdGYudXRpbC5zaHVmZmxlQ29tYm8odGZBcnJheSx0ZkFycmF5T3V0cHV0KVxuXG4vLyAvLyBjb25zdCB0Zk91dHB1dCA9IHRmQXJyYXkubXVsKDEwKVxuXG4vLyBjb25zdCBtb2RlbCA9IHRmLnNlcXVlbnRpYWwoKTtcbi8vIG1vZGVsLmFkZCh0Zi5sYXllcnMuZGVuc2Uoe2lucHV0U2hhcGU6WzNdLHVuaXRzOjEwMCxhY3RpdmF0aW9uOidyZWx1J30pKVxuLy8gbW9kZWwuYWRkKHRmLmxheWVycy5kZW5zZSh7dW5pdHM6MTAwLGFjdGl2YXRpb246J3JlbHUnfSkpXG4vLyBtb2RlbC5hZGQodGYubGF5ZXJzLmRlbnNlKHt1bml0czoxMDAwLGFjdGl2YXRpb246J3JlbHUnfSkpXG5cblxuLy8gbW9kZWwuYWRkKHRmLmxheWVycy5kZW5zZSh7dW5pdHM6MX0pKVxuXG4vLyAvLyBtb2RlbC5hZGQodGYubGF5ZXJzLmRlbnNlKHt1bml0czoxfSkpXG5cbi8vIGNvbnN0IHRyYWluID0gYXN5bmMgKCk9Pntcbi8vICAgbW9kZWwuY29tcGlsZSh7XG4vLyAgICAgb3B0aW1pemVyOnRmLnRyYWluLmFkYW0oKSxcbi8vICAgICBsb3NzOidtZWFuU3F1YXJlZEVycm9yJ1xuLy8gICB9KVxuLy8gICBhd2FpdCBtb2RlbC5maXQodGZBcnJheSx0ZkFycmF5T3V0cHV0LHtcbi8vICAgICBlcG9jaHM6NzUsXG4vLyAgICAgYmF0Y2hTaXplOjUwLFxuLy8gICAgIHNodWZmbGU6dHJ1ZSxcbi8vICAgICB2YWxpZGF0aW9uU3BsaXQ6LjEwXG4gIFxuLy8gICB9KVxuLy8gICBjb25zdCBuZXdwcmVkaWN0aW9uID0gbW9kZWwucHJlZGljdCh0Zi50ZW5zb3IoW1szLDMwMSwzXV0pKVxuXG4vLyBuZXdwcmVkaWN0aW9uLnByaW50KClcblxuICBcbi8vIH1cbi8vIHRyYWluKClcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmFwcC5saXN0ZW4oODA4MCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7ODA4MH0uLi5gKVxufSlcblxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb252ZXJ0LXVuaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnYvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJteXNxbDJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtaHR0cC1iZWFyZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtbG9jYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvQkFDS0VORC9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==