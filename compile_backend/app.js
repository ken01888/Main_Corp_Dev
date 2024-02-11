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
                console.log(getProducts_1);
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
var convert = __webpack_require__(/*! convert-units */ "convert-units");
var NutritionDetails_ts_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/NutritionDetails.ts */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/PrincipleClientPortal/NutritionDetails.ts");
var tf = __webpack_require__(/*! @tensorflow/tfjs-node-gpu */ "@tensorflow/tfjs-node-gpu");
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
    var ProcessingHeight, ProcessedHeight, HeightSquared, weight, PersonalHealth, pushDataToFrontEnd;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ProcessingHeight = convert(Number(req.body.height.feet)).from('ft').to('in');
                ProcessedHeight = ProcessingHeight + Number(req.body.height.inches);
                HeightSquared = Math.pow(ProcessedHeight, 2);
                weight = req.body.weight;
                console.log(req);
                PersonalHealth = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var CalculatedBMI, BMR, StringBMIIndicator, Calories, IdealWeight, CapturedAge, AGE, finalEnergy, initialEnergy, EnergyChange, activeEnergy, restingEnergy, energyDifference, EnergyPlanDays, DLPLan, semiAnnualPlan, monthofPlan, monthofPlan, RetrieveNutrientsFromDatabase, NutritionRequirement;
                    var _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                CalculatedBMI = (weight / HeightSquared * 703).toFixed(1);
                                BMR = function () {
                                    var WeightInKiloGrams = convert(req.body.weight).from('lb').to('kg');
                                    var HeightInCentimeters = convert(ProcessedHeight).from('in').to('cm');
                                    switch (req.body.gender) {
                                        case 'male':
                                            var Male = (9.99 * WeightInKiloGrams) + ((6.25 * HeightInCentimeters) - (4.92 * req.body.age)) + 5;
                                            return Male.toFixed();
                                        case 'female':
                                            var Female = (9.99 * WeightInKiloGrams) + ((6.25 * HeightInCentimeters) - (4.92 * req.body.age)) - 161;
                                            return Female.toFixed();
                                        default:
                                            break;
                                    }
                                };
                                StringBMIIndicator = function () {
                                    if (Number(CalculatedBMI) <= 18.4) {
                                        return {
                                            status: 'Underweight',
                                            color: '#E8DAC2',
                                            indicator: '+'
                                        };
                                    }
                                    if (Number(CalculatedBMI) >= 18.5 && Number(CalculatedBMI) <= 24.9) {
                                        return {
                                            status: 'Normal',
                                            color: '#8CB1A8',
                                            indicator: '*'
                                        };
                                    }
                                    if (Number(CalculatedBMI) >= 25.0 && Number(CalculatedBMI) <= 29.9) {
                                        return {
                                            status: 'Overweight',
                                            color: '#E5652E',
                                            indicator: '-'
                                        };
                                    }
                                    if (Number(CalculatedBMI) >= 30.0) {
                                        return {
                                            status: 'Obese',
                                            color: '#BC4C58',
                                            indicator: '-'
                                        };
                                    }
                                };
                                Calories = function () {
                                    switch (req.body.life_style) {
                                        case 'Sedentary':
                                            var SMUL = 1.2;
                                            return Number(BMR()) * SMUL;
                                            break;
                                        case 'Light activity':
                                            var LAMUL = 1.375;
                                            return Number(BMR()) * LAMUL;
                                            break;
                                        case 'Moderately active':
                                            var MAMUL = 1.55;
                                            return Number(BMR()) * MAMUL;
                                            break;
                                        case 'Very active':
                                            var VAMUL = 1.725;
                                            return Number(BMR()) * VAMUL;
                                            break;
                                        case 'Extra active':
                                            var EAMUL = 1.9;
                                            return Number(BMR()) * EAMUL;
                                            break;
                                        default:
                                            break;
                                    }
                                };
                                IdealWeight = {
                                    CurrentWeight: weight,
                                    MinimumHealthyWeight: [((18.5 / Number(CalculatedBMI)) * req.body.weight).toFixed(), (((18.5 / Number(CalculatedBMI)) * req.body.weight) - weight).toFixed()],
                                    MediumHealthyWeight: ((21.7 / Number(CalculatedBMI)) * req.body.weight).toFixed(),
                                    MaximumHealthyWeight: [((24.9 / Number(CalculatedBMI)) * req.body.weight).toFixed(), ((24.9 / Number(CalculatedBMI) * req.body.weight) - weight).toFixed()],
                                };
                                CapturedAge = req.body.age;
                                AGE = function () { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                delete req.body.height;
                                                req.body.height = ProcessedHeight;
                                                return [4 /*yield*/, NutritionDetails_ts_1.default.BoLAPublicHealthAssessment(req.body)];
                                            case 1:
                                                _a.sent();
                                                if (req.body.age <= 75) {
                                                    return [2 /*return*/, req.body.age];
                                                }
                                                else if (req.body.age > 75) {
                                                    return [2 /*return*/, req.body.age = 75];
                                                }
                                                ;
                                                return [2 /*return*/];
                                        }
                                    });
                                }); };
                                AGE();
                                return [4 /*yield*/, Calories()];
                            case 1:
                                finalEnergy = _c.sent();
                                return [4 /*yield*/, BMR()];
                            case 2:
                                initialEnergy = _c.sent();
                                EnergyChange = (Number(finalEnergy) - Number(initialEnergy)).toFixed();
                                return [4 /*yield*/, Calories()];
                            case 3:
                                activeEnergy = _c.sent();
                                return [4 /*yield*/, BMR()];
                            case 4:
                                restingEnergy = _c.sent();
                                energyDifference = (Number(activeEnergy) - Number(restingEnergy));
                                EnergyPlanDays = [30, 60, 90, 120, 150, 180];
                                DLPLan = tf.tensor(EnergyPlanDays, [6]);
                                semiAnnualPlan = [];
                                if (!(((_a = StringBMIIndicator()) === null || _a === void 0 ? void 0 : _a.color) === '#E8DAC2')) return [3 /*break*/, 6];
                                return [4 /*yield*/, DLPLan.mul(energyDifference).div(3500).add(req.body.weight).abs().ceil().array()];
                            case 5:
                                monthofPlan = _c.sent();
                                semiAnnualPlan.push(monthofPlan);
                                return [3 /*break*/, 8];
                            case 6:
                                if (!(((_b = StringBMIIndicator()) === null || _b === void 0 ? void 0 : _b.color) !== '#E8DAC2')) return [3 /*break*/, 8];
                                return [4 /*yield*/, DLPLan.mul(energyDifference).div(3500).sub(req.body.weight).abs().ceil().array()];
                            case 7:
                                monthofPlan = _c.sent();
                                semiAnnualPlan.push(monthofPlan);
                                _c.label = 8;
                            case 8: return [4 /*yield*/, NutritionDetails_ts_1.default.PersonalNutritionDetails(req.body.gender, req.body.age)];
                            case 9:
                                RetrieveNutrientsFromDatabase = _c.sent();
                                NutritionRequirement = function () {
                                    RetrieveNutrientsFromDatabase[0].calories = Calories();
                                    var testingdata = {};
                                    var replyArray = [];
                                    testingdata['age'] = CapturedAge;
                                    testingdata['gender'] = RetrieveNutrientsFromDatabase[0].gender;
                                    testingdata['lifestyle'] = req.body.life_style;
                                    testingdata['Calories'] =
                                        {
                                            value: RetrieveNutrientsFromDatabase[0].calories.toFixed(),
                                            unit: 'Kcal',
                                            dv: 2000,
                                            mc: 63
                                        };
                                    testingdata['Total Fat'] =
                                        {
                                            value: (RetrieveNutrientsFromDatabase[0]['total_fat'] * RetrieveNutrientsFromDatabase[0].calories / 9).toFixed(),
                                            unit: 'G',
                                            dv: 78,
                                            mc: 63
                                        };
                                    testingdata['Saturated Fat'] = {
                                        value: (RetrieveNutrientsFromDatabase[0]['saturated_fat'] * RetrieveNutrientsFromDatabase[0].calories / 9).toFixed(),
                                        unit: 'G',
                                        dv: 20,
                                        mc: 24
                                    };
                                    testingdata['Trans Fat'] = {
                                        value: (RetrieveNutrientsFromDatabase[0]['trans_fat'] * RetrieveNutrientsFromDatabase[0].calories / 9).toFixed(),
                                        unit: 'G',
                                        dv: 20,
                                        mc: 24
                                    };
                                    testingdata['Cholesterol'] = {
                                        value: RetrieveNutrientsFromDatabase[0].cholesterol,
                                        unit: 'G',
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
                                        value: (RetrieveNutrientsFromDatabase[0]['carbohydrate'] * RetrieveNutrientsFromDatabase[0].calories / 4).toFixed(),
                                        unit: 'G',
                                        dv: 275,
                                        mc: 158
                                    };
                                    testingdata['Fiber'] = {
                                        value: (RetrieveNutrientsFromDatabase[0]['dietary_fiber'] * RetrieveNutrientsFromDatabase[0].calories).toFixed(),
                                        unit: 'G',
                                    };
                                    testingdata['Added Sugar'] = {
                                        value: (RetrieveNutrientsFromDatabase[0]['added_sugars_percent_of_calories'] * RetrieveNutrientsFromDatabase[0].calories / 4).toFixed(),
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
                                    for (var items in testingdata) {
                                        replyArray.push({
                                            Name: items,
                                            Distinct: testingdata["".concat(items)].value,
                                            Unit: testingdata["".concat(items)].unit,
                                            DV: testingdata["".concat(items)].dv,
                                            McDonaldsBigBreakfast: testingdata["".concat(items)].mc
                                        });
                                    }
                                    ;
                                    return [[testingdata], replyArray];
                                };
                                return [2 /*return*/, [CalculatedBMI, StringBMIIndicator(), IdealWeight, BMR(), NutritionRequirement(), EnergyChange, semiAnnualPlan]];
                        }
                    });
                }); };
                return [4 /*yield*/, PersonalHealth()];
            case 1:
                pushDataToFrontEnd = _a.sent();
                res.json(pushDataToFrontEnd);
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
var router = express.Router();
router.post('/support_message', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Support_Database_1.default.insertMessage(req.body)];
            case 1:
                newReply = _a.sent();
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
var BoLAPublicHealthAssessment = function (values) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT INTO Public_Utilities.BoLA_Public_Health_Assessment SET ?', values)];
}); }); };
exports["default"] = {
    PersonalNutritionDetails: PersonalNutritionDetails,
    BoLAPublicHealthAssessment: BoLAPublicHealthAssessment
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

/***/ "@tensorflow/tfjs-backend-webgl":
/*!*************************************************!*\
  !*** external "@tensorflow/tfjs-backend-webgl" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@tensorflow/tfjs-backend-webgl");

/***/ }),

/***/ "@tensorflow/tfjs-node-gpu":
/*!********************************************!*\
  !*** external "@tensorflow/tfjs-node-gpu" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@tensorflow/tfjs-node-gpu");

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
var tf = __webpack_require__(/*! @tensorflow/tfjs-node-gpu */ "@tensorflow/tfjs-node-gpu");
__webpack_require__(/*! @tensorflow/tfjs-backend-webgl */ "@tensorflow/tfjs-backend-webgl");
tf.backend();
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
// app.use('/signup', express.static('public'))
app.use('/health-diagnostic', express.static('public'));
// app.use('/inventorycheck', express.static('public'))
// app.use('/nutrients', express.static('public'))
// app.use('/principle/', validateUser, express.static('public'))
// app.use('/principle/', express.static('public'))
// app.use('/principle/account', express.static('public'))
// app.use('/principle/store', express.static('public'))
// app.use('/principle/products', express.static('public'))
// app.use('/principle/nutrition', express.static('public'))
// app.use('/principle/bolamanual', express.static('public'))
// app.use('/principle/inventoryaudits', express.static('public'))
app.use('/login', express.static('public'));
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
var test1 = [];
var tfoutput = [];
// let index = 0
//  for  ( let index = 0 ; index <= 999  ; index++) {
//  let newReply = index 
// test1.push(newReply,newReply+100,1)
//  }
//  for  ( let index = 0 ; index <= 999  ; index++) {
//   let newReply = index * 4
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
// const QnA = async () => {
//   const passage = "Rube Foster was the team’s traveling manager and one of the team’s starting pitchers. The Leland Giants were one of the top black baseball teams in the country and also won the prestigious Chicago City League title. The Leland Giants had a won-loss record of 54-18-1 (.750) in independent play and went 31-9 (.775) in the Chicago City League. Frank C. Leland was born in February of 1869 in Memphis,  Tennessee."
//   const question = "When was Frank C Leland born?"
//   const model = await qna.load();
//   console.log(model)
//   const answers = await model.findAnswers(question, passage);
//   answers.map((i)=>{
//     if(i.score>15){
//       console.log(i.text)
//     }
//   });
// }
// QnA();
app.listen(8080, function () {
    console.log("Server listening on port ".concat(8080, "..."));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUNuSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUNwSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUN4SSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUNoSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUNoSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUN0SCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUN2SCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUM5RyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJ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QUF1QjtBQUN2QixnRUFBZ0U7QUFDaEUsdUJBQXVCO0FBQ3ZCLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIsUUFBUTtBQUNSLFFBQVE7QUFDUixJQUFJO0FBRUosU0FBUztBQWtCVCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQTRCLElBQUksUUFBSyxDQUFDO0FBQ3BELENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9BdWRpdHMvSW52ZW50b3J5QXVkaXRzLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL051dHJpdGlvbi50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9DbGllbnRQb3J0YWwvUHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL1FSQ09ERS9pblN0b3JlQXVkaXRzLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9TdG9jay50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Ib21lcGFnZS9yZWdpc3RyYXRpb24udHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvTUVTU0FHRV9TVVBQT1JUL3N1cHBvcnQudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9Db25lY3Rpb24udHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Mb2dpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvSW52ZW50b3J5LnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL051dHJpdGlvbkRldGFpbHMudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TZWN1cml0eS9WZXJpZmljYXRpb24udHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TdXBwb3J0X0RhdGFiYXNlLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1NlY3VyaXR5L0JlYXJlci50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9TZWN1cml0eS9sb2NhbFN0cmF0ZWd5LnRzIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcIkB0ZW5zb3JmbG93L3RmanMtYmFja2VuZC13ZWJnbFwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImNvbnZlcnQtdW5pdHNcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudi9jb25maWdcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwibXlzcWwyXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnRcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1odHRwLWJlYXJlclwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0LWxvY2FsXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBzdG9yZXMgZnJvbSAnLi4vLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvSW52ZW50b3J5JztcblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cblxucm91dGVyLmdldCgnL2ludmVudG9yeVBlcmlvZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGludmVudG9yeV9wZXJpb2QgPSBhd2FpdCBzdG9yZXMuc2VsZWN0VW5pcXVlSW52ZW50b3J5UGVyaW9kKHJlcS5jb29raWVzLnVzZXIuaWQpXG4gICAgcmVzLmpzb24oaW52ZW50b3J5X3BlcmlvZClcbn0pXG5cblxucm91dGVyLmdldCgnL2ludmVudG9yeV9yZWZlcmVuY2VfaW5mb3JtYXRpb24nLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IHJlcGx5OmFueSA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlSZWZlcmVuY2UocmVxLmNvb2tpZXMudXNlci5pZCwgcmVxLnF1ZXJ5LmF1ZGl0RGF0ZSlcbiAgICByZXMuanNvbihyZXBseSlcbn0pO1xuXG5cbnJvdXRlci5kZWxldGUoJy9kZWxldGVJbnZlbnRvcnlBdWRpdEl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMuZGVsZXRlSW52ZW50b3J5QXVkaXRJdGVtKHJlcS5ib2R5KVxuICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUuYWZmZWN0ZWRSb3dzKVxufSk7XG5cbnJvdXRlci5wdXQoJy91cGRhdGVJbnZlbnRvcnlBdWRpdEl0ZW0nLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy51cGRhdGVJbnZlbnRvcnlBdWRpdEl0ZW0ocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgY2xpZW50X2FkbWluX3F1ZXJ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscyc7XG5pbXBvcnQge2NoZWNrQWNjb3VudH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Mb2dpbi8nXG5cblxuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIuZ2V0KCcvZ2V0UHJpbmNpcGxlSW5mb3JtYXRpb24nLCBhc3luYyAocmVxOmFueSwgcmVzKSA9PiB7XG4gICAgcmVzLmNvb2tpZSgndXNlcicscmVxLnVzZXIpXG5cblxufSk7XG5cbnJvdXRlci5wdXQoJy91cGRhdGVDbGllbnRpbmZvcm1hdGlvbicsIGFzeW5jIChyZXE6YW55LCByZXMpID0+IHtcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IGNsaWVudF9hZG1pbl9xdWVyeS51cGRhdGVQUklOQ0lQTEUocmVxLmJvZHkscmVxLnVzZXIuaWQpXG4gICAgcmVzLmpzb24obmV3UmVwbHkpXG59KTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7IFxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeSc7XG5pbXBvcnQgKiBhcyBjb252ZXJ0IGZyb20gJ2NvbnZlcnQtdW5pdHMnXG5cblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuXG5cblxuXG5cblxuLy8gQWRkIE51dHJpdGlvbiBJbmZvcm1hdGlvblxuXG5cbnJvdXRlci5nZXQoJy9nZXROdXRyaWVudHMvOmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgYnVzaW5lc3NfaWQgPSByZXEucGFyYW1zLmlkXG4gICAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhd2FpdCBzdG9yZXMuZ2V0UmVjaXBlUHJvZHVjdChidXNpbmVzc19pZCApO1xuICAgIGdldFByb2R1Y3RzLm1hcChhc3luYyAoaSwgbiwgYSkgPT4ge1xuICAgICAgICBjb25zdCBnZXRJbnB1dHMgPSBhd2FpdCBzdG9yZXMuZ2V0SW5wdXRGb3JVcGRhdGUoaS5pZClcbiAgICAgICAgIGdldElucHV0cy5tYXAoYXN5bmMgKGksbixhKT0+e1xuICAgICAgICAgICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBzdG9yZXMuVXBkYXRlUHJvZHVjdElucHV0cyhpLCBpLmlkKVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBwcm9kdWN0TWV0YSA9IGF3YWl0IHN0b3Jlcy5pbnB1dE51dHJpdGlvbmFsSW5mb3JtYXRpb24oaS5pZClcbiAgICAgICAgc3RvcmVzLmluc2VydElucHV0SXRlbU1ldGEocHJvZHVjdE1ldGFbMF0sIGkuaWQpXG4gICAgICAgIHJldHVybiBpXG4gICAgfSk7XG4gICAgY29uc3QgZ2V0UHJvZHVjdHNfMSA9IGF3YWl0IHN0b3Jlcy5nZXRSZWNpcGVQcm9kdWN0KGJ1c2luZXNzX2lkKTtcblxuICAgIHJlcy5qc29uKGdldFByb2R1Y3RzXzEpXG59KVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IHN0b3JlcyBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9JbnZlbnRvcnknO1xuaW1wb3J0IHZlcmlmeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1NlY3VyaXR5L1ZlcmlmaWNhdGlvbidcbmltcG9ydCAqIGFzIGNvbnZlcnQgZnJvbSAnY29udmVydC11bml0cydcbmltcG9ydCB7IGpzb24gfSBmcm9tICdzdHJlYW0vY29uc3VtZXJzJztcblxuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5cbnJvdXRlci5nZXQoJy9nZXRSZWNpcGVQcm9kdWN0JywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhd2FpdCBzdG9yZXMuZ2V0UmVjaXBlUHJvZHVjdChyZXEuY29va2llcy51c2VyLmlkKTtcbiAgICBnZXRQcm9kdWN0cy5tYXAoYXN5bmMgKGksIG4sIGEpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0SW5wdXRzID0gYXdhaXQgc3RvcmVzLmdldElucHV0Rm9yVXBkYXRlKGkuaWQpXG4gICAgICAgICBnZXRJbnB1dHMubWFwKGFzeW5jIChpLG4sYSk9PntcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgc3RvcmVzLlVwZGF0ZVByb2R1Y3RJbnB1dHMoaSwgaS5pZClcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcHJvZHVjdE1ldGEgPSBhd2FpdCBzdG9yZXMuaW5wdXROdXRyaXRpb25hbEluZm9ybWF0aW9uKGkuaWQpXG4gICAgICAgIHN0b3Jlcy5pbnNlcnRJbnB1dEl0ZW1NZXRhKHByb2R1Y3RNZXRhWzBdLCBpLmlkKVxuICAgICAgICByZXR1cm4gaVxuICAgIH0pO1xuICAgIGNvbnN0IGdldFByb2R1Y3RzXzEgPSBhd2FpdCBzdG9yZXMuZ2V0UmVjaXBlUHJvZHVjdChyZXEuY29va2llcy51c2VyLmlkKTtcbiAgICBjb25zb2xlLmxvZyhnZXRQcm9kdWN0c18xKVxuXG5cbiAgICByZXMuanNvbihnZXRQcm9kdWN0c18xKVxufSlcblxucm91dGVyLmdldCgnL2ludmVudG9yeUl0ZW1zRm9yU2VsZWN0UmVjaXBlcycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGdldFByb2R1Y3RzID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUl0ZW1zZm9yU2VsZWN0KHJlcS5jb29raWVzLnVzZXIuaWQpXG4gICAgY29uc3Qgc2VsZWN0SXRlbSA9IGdldFByb2R1Y3RzLm1hcCgoaSwgbiwgYSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGkuaWQsXG4gICAgICAgICAgICBsYWJlbDogaS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByaWNlX3Blcl9ncmFtOiBpLnByaWNlX3Blcl9ncmFtXG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmVzLmpzb24oc2VsZWN0SXRlbSlcbn0pXG5cblxucm91dGVyLnBvc3QoJy9pbnNlcnRQcm9kdWN0TmFtZScsIGFzeW5jIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcbiAgICByZXEuYm9keS5idXNpbmVzc19pZCA9IHJlcS5jb29raWVzLnVzZXIuaWRcbiAgICByZXEuYm9keS5zZXJ2aW5nX3NpemUgPSBjb252ZXJ0KHJlcS5ib2R5LnNlcnZpbmdfc2l6ZS5hbW91bnQpLmZyb20ocmVxLmJvZHkuc2VydmluZ19zaXplLnVuaXQpLnRvKCdnJylcbiAgICBjb25zdCBpbnNlcnRQcm9kdWN0ID0gYXdhaXQgc3RvcmVzLmluc2VydFByb2R1Y3RSZWNpcGVOYW1lKHJlcS5ib2R5KVxuICAgIHJlcy5qc29uKCdoZWxsbycpXG59KTtcblxuXG5cbnJvdXRlci5wb3N0KCcvaW5zZXJ0UHJvZHVjdElucHV0cycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGRhdGFFeGhhbmdlID0gYXdhaXQgcmVxLmJvZHkuaW5wdXRzLmZvckVhY2goYXN5bmMgKGksIG4sIGEpID0+IHtcbiAgICAgICAgaS5pbnB1dF93ZWlnaHQgPSBjb252ZXJ0KGkuaW5wdXRfd2VpZ2h0KS5mcm9tKGkudW5pdCkudG8oJ2cnKVxuICAgICAgICBjb25zdCBnZXRQcm9kdWN0czogYW55ID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUl0ZW1zZm9yUmVjb3JkaW5nKGkuaW52ZW50b3J5X2l0ZW1faWQpXG4gICAgICAgIGkuaW5wdXRfY29zdCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnByaWNlX3Blcl9ncmFtXG4gICAgICAgIGkuY2Fsb3JpZXMgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5jYWxvcmllc1xuICAgICAgICBpLnRvdGFsX2ZhdCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnRvdGFsX2ZhdFxuICAgICAgICBpLnNhdHVyYXRlZF9mYXQgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5zYXR1cmF0ZWRfZmF0XG4gICAgICAgIGkudHJhbnNfZmF0ID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0udHJhbnNfZmF0XG4gICAgICAgIGkuY2hvbGVzdGVyb2wgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5jaG9sZXN0ZXJvbFxuICAgICAgICBpLnNvZGl1bSA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnNvZGl1bVxuICAgICAgICBpLmNhcmJvaHlkcmF0ZXMgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5jYXJib2h5ZHJhdGVzXG4gICAgICAgIGkuZmliZXIgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5maWJlclxuICAgICAgICBpLnN1Z2FyID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uc3VnYXJcbiAgICAgICAgaS5hZGRlZF9zdWdhciA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLmFkZGVkX3N1Z2FyXG4gICAgICAgIGkucHJvdGVpbiA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnByb3RlaW5cbiAgICAgICAgaS5jYWxjaXVtID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2FsY2l1bVxuICAgICAgICBpLmlyb24gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5pcm9uXG4gICAgICAgIGkucG90YXNzaXVtID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0ucG90YXNzaXVtXG4gICAgICAgIGkudml0YW1pbl9kID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0udml0YW1pbl9kXG4gICAgICAgIGRlbGV0ZSBpLnVuaXRcbiAgICAgICAgYXdhaXQgc3RvcmVzLmluc2VydEluZ3JlZGllbnRzKGksIHJlcS5ib2R5LmlucHV0cy5wcm9kdWN0X2lkKVxuICAgIH0pXG4gICAgY29uc3QgZGF0YV8zID0gYXdhaXQgc3RvcmVzLmlucHV0TnV0cml0aW9uYWxJbmZvcm1hdGlvbihyZXEuYm9keS5pbnB1dHNbMF0ucHJvZHVjdF9pZClcbiAgICBzdG9yZXMuaW5zZXJ0SW5wdXRJdGVtTWV0YUZ1bGwoZGF0YV8zWzBdLCByZXEuYm9keS5pbnB1dHNbMF0ucHJvZHVjdF9pZClcbiAgICByZXMuanNvbignY29zdFVwbG9hZCcpXG59KTtcblxuXG5cbnJvdXRlci5wdXQoJy91cGRhdGVQcm9kdWN0SW5mb3JtYXRpb24nLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGlmIChyZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplLmFtb3VudCA9PSB1bmRlZmluZWQgJiYgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZS51bml0ID09IHVuZGVmaW5lZCAmJiByZXEuYm9keS52YWx1ZXMucHJvZHVjdF9uYW1lID09IHVuZGVmaW5lZCAmJiByZXEuYm9keS52YWx1ZXMuc2FsZXNfcHJpY2UgPT0gdW5kZWZpbmVkICYmIHJlcS5ib2R5LnZhbHVlcy51bml0cyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzLmpzb24oeyBhZmZlY3RlZFJvd3M6IDEgfSlcbiAgICB9IGVsc2UgaWYgKHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUuYW1vdW50ID09IHVuZGVmaW5lZCB8fCByZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplLnVuaXQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGV0ZSByZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy5VcGRhdGVQcm9kdWN0KHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG4gICAgICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgd2VpZ2h0R3JhbXMgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUudW5pdCkudG8oJ2cnKVxuICAgICAgICByZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplID0gd2VpZ2h0R3JhbXNcbiAgICAgICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLlVwZGF0ZVByb2R1Y3QocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICAgICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcbiAgICB9XG59KTtcblxucm91dGVyLmRlbGV0ZSgnL2RlbGV0ZVByb2R1Y3QnLCAocmVxOiBhbnksIHJlczogYW55KSA9PiB7XG4gICAgc3RvcmVzLmRlbGV0ZVByb2R1Y3QocmVxLmJvZHlbMF0pXG4gICAgc3RvcmVzLmRlbGV0ZUlucHV0KHJlcS5ib2R5WzBdKVxuICAgIHJlcy5qc29uKCdzdWNjZXNzJylcbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvYWxsUHJvZHVjdElucHV0cycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGdldElucHV0cyA9IGF3YWl0IHN0b3Jlcy5zZWxlY3RBbGxJbnB1dHMocmVxLnF1ZXJ5LnByb2R1Y3RfaWQpXG4gICAgcmVzLmpzb24oZ2V0SW5wdXRzKVxufSlcblxuXG5yb3V0ZXIucHV0KCcvdXBkYXRlSW5wdXRzJywgKHJlcSwgcmVzKSA9PiB7XG5cbiAgICBPYmplY3QudmFsdWVzKHJlcS5ib2R5KS5tYXAoYXN5bmMgKGk6IGFueSwgbiwgYSkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBnZXRQcm9kdWN0czogYW55ID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUl0ZW1zZm9yUmVjb3JkaW5nKGkuaW52ZW50b3J5X2l0ZW1faWQpXG4gICAgICAgICAgICBjb25zdCBpbnB1dF93ZWlnaHQgPSBjb252ZXJ0KE51bWJlcihpLmFtb3VudCkpLmZyb20oaS51bml0KS50bygnZycpXG4gICAgICAgICAgICBjb25zdCBpbnB1dF9jb3N0ID0gaS5wcmljZV9wZXJfZ3JhbSAqIGlucHV0X3dlaWdodFxuICAgICAgICAgICAgaS5pbnB1dF93ZWlnaHQgPSBpbnB1dF93ZWlnaHRcbiAgICAgICAgICAgIGkuaW5wdXRfY29zdCA9IGlucHV0X2Nvc3RcbiAgICAgICAgICAgIGkuY2Fsb3JpZXMgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5jYWxvcmllc1xuICAgICAgICAgICAgaS50b3RhbF9mYXQgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS50b3RhbF9mYXRcbiAgICAgICAgICAgIGkuc2F0dXJhdGVkX2ZhdCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnNhdHVyYXRlZF9mYXRcbiAgICAgICAgICAgIGkudHJhbnNfZmF0ID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0udHJhbnNfZmF0XG4gICAgICAgICAgICBpLmNob2xlc3Rlcm9sID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2hvbGVzdGVyb2xcbiAgICAgICAgICAgIGkuc29kaXVtID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uc29kaXVtXG4gICAgICAgICAgICBpLmNhcmJvaHlkcmF0ZXMgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5jYXJib2h5ZHJhdGVzXG4gICAgICAgICAgICBpLmZpYmVyID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uZmliZXJcbiAgICAgICAgICAgIGkuc3VnYXIgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5zdWdhclxuICAgICAgICAgICAgaS5hZGRlZF9zdWdhciA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLmFkZGVkX3N1Z2FyXG4gICAgICAgICAgICBpLnByb3RlaW4gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5wcm90ZWluXG4gICAgICAgICAgICBpLmNhbGNpdW0gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5jYWxjaXVtXG4gICAgICAgICAgICBpLmlyb24gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5pcm9uXG4gICAgICAgICAgICBpLnBvdGFzc2l1bSA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnBvdGFzc2l1bVxuICAgICAgICAgICAgaS52aXRhbWluX2QgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS52aXRhbWluX2RcbiAgICAgICAgICAgIGNvbnN0IGlucHV0SWQgPSBpLmlkXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0X2lkID0gaS5wcm9kdWN0X2lkXG4gICAgICAgICAgICBkZWxldGUgaS5pZFxuICAgICAgICAgICAgZGVsZXRlIGkucHJvZHVjdF9pZFxuICAgICAgICAgICAgZGVsZXRlIGkucHJpY2VfcGVyX2dyYW1cbiAgICAgICAgICAgIGRlbGV0ZSBpLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICBkZWxldGUgaS5hbW91bnRcbiAgICAgICAgICAgIGRlbGV0ZSBpLnVuaXRcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgc3RvcmVzLlVwZGF0ZVByb2R1Y3RJbnB1dHMoaSwgaW5wdXRJZClcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RNZXRhID0gYXdhaXQgc3RvcmVzLmlucHV0TnV0cml0aW9uYWxJbmZvcm1hdGlvbihwcm9kdWN0X2lkKVxuXG4gICAgICAgICAgICBjb25zdCBuZXdSZXBseTIgPSBhd2FpdCBzdG9yZXMuaW5zZXJ0SW5wdXRJdGVtTWV0YShwcm9kdWN0TWV0YVswXSwgcHJvZHVjdF9pZClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvclxuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBhZmZlY3RlZFJvd3MgPSAxXG4gICAgcmVzLmpzb24oYWZmZWN0ZWRSb3dzKVxuXG5cbn0pXG5cblxucm91dGVyLmRlbGV0ZSgnL2RlbGV0ZUlucHV0cycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXG4gICAgY29uc3QgY3VycmVudF9wcm9kdWN0X2lucHV0czogYW55ID0gYXdhaXQgc3RvcmVzLmRlbGV0ZUlucHV0TWV0YShyZXEuYm9keVswXSlcblxuICAgIHJlcy5qc29uKGN1cnJlbnRfcHJvZHVjdF9pbnB1dHMpXG59KVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxucm91dGVyLmdldCgnL2dldE51dHJpZW50cy86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBidXNpbmVzc19pZCA9IHJlcS5wYXJhbXMuaWRcblxuICAgIGNvbnN0IGdldFByb2R1Y3RzID0gYXdhaXQgc3RvcmVzLmdldFJlY2lwZVByb2R1Y3QoYnVzaW5lc3NfaWQpO1xuICAgIGdldFByb2R1Y3RzLm1hcChhc3luYyAoaSwgbiwgYSkgPT4ge1xuICAgICAgICBjb25zdCBnZXRJbnB1dHMgPSBhd2FpdCBzdG9yZXMuZ2V0SW5wdXRGb3JVcGRhdGUoaS5pZClcbiAgICAgICAgIGdldElucHV0cy5tYXAoYXN5bmMgKGksbixhKT0+e1xuICAgICAgICAgICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBzdG9yZXMuVXBkYXRlUHJvZHVjdElucHV0cyhpLCBpLmlkKVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBwcm9kdWN0TWV0YSA9IGF3YWl0IHN0b3Jlcy5pbnB1dE51dHJpdGlvbmFsSW5mb3JtYXRpb24oaS5pZClcbiAgICAgICAgc3RvcmVzLmluc2VydElucHV0SXRlbU1ldGEocHJvZHVjdE1ldGFbMF0sIGkuaWQpXG4gICAgICAgIHJldHVybiBpXG4gICAgfSk7XG4gICAgY29uc3QgZ2V0UHJvZHVjdHNfMSA9IGF3YWl0IHN0b3Jlcy5nZXRSZWNpcGVQcm9kdWN0KGJ1c2luZXNzX2lkKTtcblxuICAgIHJlcy5qc29uKGdldFByb2R1Y3RzXzEpXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBzdG9yZXMgZnJvbSAnLi4vLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvSW52ZW50b3J5JztcblxuXG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cblxuXG5cblxuLy9DaGVja2xpc3QgUm91dGVzXG5cbnJvdXRlci5nZXQoJy9nZXRJbnZlbnRvcnlJdGVtc0ZvckRhaWx5Q2hlY2tsaXN0LzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGJ1c2luZXNzX2lkID0gcmVxLnBhcmFtcy5pZFxuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUNoZWNrbGlzdEl0ZW1zKGJ1c2luZXNzX2lkKVxuICAgIHJlcy5qc29uKG5ld1JlcGx5KVxufSk7XG5cbnJvdXRlci5wb3N0KCcvaW5zZXJ0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMnLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIHJlcS5ib2R5Lm9yZGVyX3F1YW50aXR5ID0gcmVxLmJvZHkucmVjb21tZW5kZWRfc3RvY2tfbGV2ZWwgLSByZXEuYm9keS5pbl9zdG9ja1xuICAgIGlmIChyZXEuYm9keS5vcmRlcl9xdWFudGl0eSA8PSAwKSB7XG4gICAgICAgIHJlcS5ib2R5Lm9yZGVyX3F1YW50aXR5ID0gMFxuICAgIH1cbiAgICBkZWxldGUgcmVxLmJvZHkucmVjb21tZW5kZWRfc3RvY2tfbGV2ZWxcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5pbnNlcnRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyhyZXEuYm9keSlcbiAgICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5cbnJvdXRlci5nZXQoJy9wdWJsaWNOdXRyaXRpb25hbEluZm9ybWF0aW9uLzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGJ1c2luZXNzX2lkID0gcmVxLnBhcmFtcy5pZFxuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgc3RvcmVzLmdldE51dHJpdGlvbmFsSW5mb0ZvclB1YmxpYyhidXNpbmVzc19pZClcbiAgICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7IFxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeSc7XG5pbXBvcnQgdmVyaWZ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU2VjdXJpdHkvVmVyaWZpY2F0aW9uJ1xuaW1wb3J0ICogYXMgY29udmVydCBmcm9tICdjb252ZXJ0LXVuaXRzJ1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ3N0cmVhbS9jb25zdW1lcnMnO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5cblxuXG5yb3V0ZXIuZ2V0KCcvZ2V0SW52ZW50b3J5SXRlbXMnLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdEludmVudG9yeSA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtcyhyZXEuY29va2llcy51c2VyLmlkKVxuICAgIHJlcy5qc29uKHJlc3VsdEludmVudG9yeSlcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2luc2VydE5ld0ludmVudG9yeUl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcblxuICAgIHJlcS5ib2R5LmJ1c2luZXNzX2lkID0gcmVxLmNvb2tpZXMudXNlci5pZFxuICAgIGNvbnN0IHdlaWdodEdyYW1zID0gY29udmVydChyZXEuYm9keS50b3RhbF9wYWNrYWdlX3dlaWdodC51bml0KS5mcm9tKHJlcS5ib2R5LnRvdGFsX3BhY2thZ2Vfd2VpZ2h0LndlaWdodCkudG8oJ2cnKVxuICAgIHJlcS5ib2R5LnByaWNlX3Blcl9ncmFtID0gTnVtYmVyKHJlcS5ib2R5LnByaWNlIC8gd2VpZ2h0R3JhbXMpLnRvRml4ZWQoNClcbiAgICByZXEuYm9keS50b3RhbF9wYWNrYWdlX3dlaWdodCA9IHdlaWdodEdyYW1zXG4gICAgY29uc3QgY3VycmVudF9zdG9yZSA9IGF3YWl0IHN0b3Jlcy5pbnNlcnRJbnZlbnRvcnlJdGVtKHJlcS5ib2R5KVxuICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG59KTtcblxucm91dGVyLnB1dCgnL3VwZGF0ZUludmVudG9yeUl0ZW0nLFxuICAgIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBnZXRQcm9kdWN0cyA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtc2ZvclJlY29yZGluZyhyZXEuYm9keS5pZClcbiAgICAgICAgaWYgKHJlcS5ib2R5LnZhbHVlcy50b3RhbF9wYWNrYWdlX3dlaWdodCAmJiAhcmVxLmJvZHkudmFsdWVzLnByaWNlKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWlnaHRHcmFtcyA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLnRvdGFsX3BhY2thZ2Vfd2VpZ2h0LnVuaXQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnRvdGFsX3BhY2thZ2Vfd2VpZ2h0LndlaWdodCkudG8oJ2cnKVxuICAgICAgICAgICAgY29uc3QgcHJpY2VfcGVyX2dyYW0gPSBOdW1iZXIoZ2V0UHJvZHVjdHNbMF0ucHJpY2UgLyB3ZWlnaHRHcmFtcylcbiAgICAgICAgICAgIHJlcS5ib2R5LnZhbHVlcy5wcmljZV9wZXJfZ3JhbSA9IE51bWJlcihwcmljZV9wZXJfZ3JhbSkudG9GaXhlZCg0KVxuICAgICAgICAgICAgcmVxLmJvZHkudmFsdWVzLnRvdGFsX3BhY2thZ2Vfd2VpZ2h0ID0gd2VpZ2h0R3JhbXNcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy51cGRhdGVJbnZlbnRvcnlJdGVtKHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG4gICAgICAgICAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxuICAgICAgICB9IGVsc2UgaWYgKCFyZXEuYm9keS52YWx1ZXMudG90YWxfcGFja2FnZV93ZWlnaHQgJiYgcmVxLmJvZHkudmFsdWVzLnByaWNlKSB7XG4gICAgICAgICAgICBjb25zdCBwcmljZV9wZXJfZ3JhbSA9IE51bWJlcihyZXEuYm9keS52YWx1ZXMucHJpY2UgLyBnZXRQcm9kdWN0c1swXS50b3RhbF9wYWNrYWdlX3dlaWdodClcbiAgICAgICAgICAgIHJlcS5ib2R5LnZhbHVlcy5wcmljZV9wZXJfZ3JhbSA9IE51bWJlcihwcmljZV9wZXJfZ3JhbSkudG9GaXhlZCg0KVxuICAgICAgICAgICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLnVwZGF0ZUludmVudG9yeUl0ZW0ocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICAgICAgICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMudXBkYXRlSW52ZW50b3J5SXRlbShyZXEuYm9keS52YWx1ZXMsIHJlcS5ib2R5LmlkKVxuICAgICAgICAgICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcbiAgICAgICAgfVxuXG4gICAgfSlcblxuXG5cblxucm91dGVyLmRlbGV0ZSgnL2RlbGV0ZUludmVudG9yeUl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMuZGVsZXRlSW52ZW50b3J5SXRlbShyZXEuYm9keSlcbiAgICByZXMuanNvbihjdXJyZW50X3N0b3JlLmFmZmVjdGVkUm93cylcbn0pO1xuXG5cbnJvdXRlci5wdXQoJy9hZGROdXRyaXRpb25JbmZvcm1hdGlvbicsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGRpdmlkZXIgPSAxIC8gcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZS5hbW91bnRcbiAgICByZXEuYm9keS52YWx1ZXMuY2Fsb3JpZXMgPSByZXEuYm9keS52YWx1ZXMuY2Fsb3JpZXMuYW1vdW50ICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy50b3RhbF9mYXQgPSAoKGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLnRvdGFsX2ZhdC5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnRvdGFsX2ZhdC51bml0KS50bygnZycpKSAqIGRpdmlkZXIpXG4gICAgcmVxLmJvZHkudmFsdWVzLnNhdHVyYXRlZF9mYXQgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5zYXR1cmF0ZWRfZmF0LmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuc2F0dXJhdGVkX2ZhdC51bml0KS50bygnZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy50cmFuc19mYXQgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy50cmFuc19mYXQuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy50cmFuc19mYXQudW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuY2hvbGVzdGVyb2wgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5jaG9sZXN0ZXJvbC5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmNob2xlc3Rlcm9sLnVuaXQpLnRvKCdtZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5zb2RpdW0gPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5zb2RpdW0uYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5zb2RpdW0udW5pdCkudG8oJ21nJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLmNhcmJvaHlkcmF0ZXMgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5jYXJib2h5ZHJhdGVzLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuY2FyYm9oeWRyYXRlcy51bml0KS50bygnZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5maWJlciA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLmZpYmVyLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuZmliZXIudW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuc3VnYXIgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5zdWdhci5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnN1Z2FyLnVuaXQpLnRvKCdnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLnByb3RlaW4gPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5wcm90ZWluLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMucHJvdGVpbi51bml0KS50bygnZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5jYWxjaXVtID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuY2FsY2l1bS5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmNhbGNpdW0udW5pdCkudG8oJ21nJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLmlyb24gPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5pcm9uLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuaXJvbi51bml0KS50bygnbWcnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMucG90YXNzaXVtID0gY29udmVydChyZXEuYm9keS52YWx1ZXMucG90YXNzaXVtLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMucG90YXNzaXVtLnVuaXQpLnRvKCdtZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5hZGRlZF9zdWdhciA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLmFkZGVkX3N1Z2FyLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuYWRkZWRfc3VnYXIudW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMudml0YW1pbl9kID0gY29udmVydChyZXEuYm9keS52YWx1ZXMudml0YW1pbl9kLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMudml0YW1pbl9kLnVuaXQpLnRvKCdtY2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuYWxsZXJnaWVzID0gSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkudmFsdWVzLmFsbGVyZ2llcylcbiAgICByZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplID0gcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZS5hbW91bnRcbiAgICBjb25zdCBhZGRlZE5ld051dHJpdGlvbkl0ZW0gPSBhd2FpdCBzdG9yZXMuaW5zZXJ0TnV0cml0aW9uYWxJbmZvcm1hdGlvbihyZXEuYm9keS52YWx1ZXMsIHJlcS5ib2R5LmlkKVxuICAgIHJlcy5qc29uKGFkZGVkTmV3TnV0cml0aW9uSXRlbSlcbn0pXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHQnXG5pbXBvcnQgKiBhcyBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IHsgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24sIGNoZWNrQWNjb3VudCB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4nXG5pbXBvcnQgKiBhcyBjb252ZXJ0IGZyb20gJ2NvbnZlcnQtdW5pdHMnXG5pbXBvcnQgTnV0cml0aW9uIGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL051dHJpdGlvbkRldGFpbHMudHMnXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeSc7XG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzLW5vZGUtZ3B1J1xuXG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbmNvbnN0IGNoZWNrQ3JlZGVudGlhbHMgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcblxuICBjb25zdCBjaGVja19EQl9hZ2FpbnN0X2VtYWlsOiBhbnlbXSA9IGF3YWl0IGNoZWNrQWNjb3VudChyZXEuYm9keS5lbWFpbClcbiAgaWYgKGNoZWNrX0RCX2FnYWluc3RfZW1haWwubGVuZ3RoID09PSAwKSB7XG4gICAgbmV4dCgpXG4gIH0gZWxzZSBpZiAoY2hlY2tfREJfYWdhaW5zdF9lbWFpbC5sZW5ndGggPiAwKSB7XG4gICAgcmVzLmpzb24odHJ1ZSlcbiAgfVxufVxuXG5cbnJvdXRlci5wb3N0KCcvcmVnaXN0cmF0aW9uJywgY2hlY2tDcmVkZW50aWFscywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5cbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0U3luYyhOdW1iZXIocHJvY2Vzcy5lbnYuU0FMVF9ST1VORCkpO1xuICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2hTeW5jKHJlcS5ib2R5LmNvbmZpcm1fcGFzc3dvcmQsIHNhbHQpO1xuICBkZWxldGUgcmVxLmJvZHkuY29uZmlybV9wYXNzd29yZFxuICB2YXIgdG9rZW4gPSBqd3Quc2lnbih7IHVzZXJfbmFtZTogcmVxLmJvZHkuZW1haWwsIGVtYWlsOiByZXEuYm9keS5lbWFpbCB9LCBwcm9jZXNzLmVudi5CRUFSRVJfUFJJVkFURSk7XG4gIHJlcS5ib2R5LnBhc3N3b3JkID0gaGFzaFxuICByZXEuYm9keS5hY2Nlc3NfdG9rZW4gPSB0b2tlblxuICByZXEuYm9keS5waW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpICsgMTExMTExXG4gIC8vIFNpZ25VcE1lc3NhZ2UocmVxLmJvZHkuYnVzaW5lc3NfbmFtZSwgcmVxLmJvZHkucGhvbmVfbnVtYmVyLCByZXEuYm9keS5lbWFpbClcbiAgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24ocmVxLmJvZHkpXG4gIHJlcy5qc29uKGZhbHNlKVxufSk7XG5cbnJvdXRlci5wb3N0KCcvYm9sYXRlc3Rpbmdyb3V0ZScsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBQcm9jZXNzaW5nSGVpZ2h0ID0gY29udmVydChOdW1iZXIocmVxLmJvZHkuaGVpZ2h0LmZlZXQpKS5mcm9tKCdmdCcpLnRvKCdpbicpXG4gIGNvbnN0IFByb2Nlc3NlZEhlaWdodCA9IFByb2Nlc3NpbmdIZWlnaHQgKyBOdW1iZXIocmVxLmJvZHkuaGVpZ2h0LmluY2hlcylcbiAgY29uc3QgSGVpZ2h0U3F1YXJlZCA9IE1hdGgucG93KFByb2Nlc3NlZEhlaWdodCwgMilcbiAgY29uc3Qgd2VpZ2h0ID0gcmVxLmJvZHkud2VpZ2h0XG4gIGNvbnNvbGUubG9nKHJlcSlcbiAgY29uc3QgUGVyc29uYWxIZWFsdGggPSBhc3luYyAoKSA9PiB7XG5cbiAgICBjb25zdCBDYWxjdWxhdGVkQk1JID0gKHdlaWdodCAvIEhlaWdodFNxdWFyZWQgKiA3MDMpLnRvRml4ZWQoMSlcbiAgICBjb25zdCBCTVIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBXZWlnaHRJbktpbG9HcmFtcyA9IGNvbnZlcnQocmVxLmJvZHkud2VpZ2h0KS5mcm9tKCdsYicpLnRvKCdrZycpXG4gICAgICBjb25zdCBIZWlnaHRJbkNlbnRpbWV0ZXJzID0gY29udmVydChQcm9jZXNzZWRIZWlnaHQpLmZyb20oJ2luJykudG8oJ2NtJylcbiAgICAgIHN3aXRjaCAocmVxLmJvZHkuZ2VuZGVyKSB7XG4gICAgICAgIGNhc2UgJ21hbGUnOlxuICAgICAgICAgIGNvbnN0IE1hbGUgPSAoOS45OSAqIFdlaWdodEluS2lsb0dyYW1zKSArICgoNi4yNSAqIEhlaWdodEluQ2VudGltZXRlcnMpIC0gKDQuOTIgKiByZXEuYm9keS5hZ2UpKSArIDVcbiAgICAgICAgICByZXR1cm4gTWFsZS50b0ZpeGVkKClcbiAgICAgICAgY2FzZSAnZmVtYWxlJzpcbiAgICAgICAgICBjb25zdCBGZW1hbGUgPSAoOS45OSAqIFdlaWdodEluS2lsb0dyYW1zKSArICgoNi4yNSAqIEhlaWdodEluQ2VudGltZXRlcnMpIC0gKDQuOTIgKiByZXEuYm9keS5hZ2UpKSAtIDE2MVxuICAgICAgICAgIHJldHVybiBGZW1hbGUudG9GaXhlZCgpXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgY29uc3QgU3RyaW5nQk1JSW5kaWNhdG9yID0gKCkgPT4ge1xuICAgICAgaWYgKE51bWJlcihDYWxjdWxhdGVkQk1JKSA8PSAxOC40KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdHVzOiAnVW5kZXJ3ZWlnaHQnLFxuICAgICAgICAgIGNvbG9yOiAnI0U4REFDMicsXG4gICAgICAgICAgaW5kaWNhdG9yOiAnKydcblxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPj0gMTguNSAmJiBOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPD0gMjQuOSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXR1czogJ05vcm1hbCcsXG4gICAgICAgICAgY29sb3I6ICcjOENCMUE4JyxcbiAgICAgICAgICBpbmRpY2F0b3I6ICcqJ1xuXG5cblxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPj0gMjUuMCAmJiBOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPD0gMjkuOSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXR1czogJ092ZXJ3ZWlnaHQnLFxuICAgICAgICAgIGNvbG9yOiAnI0U1NjUyRScsXG4gICAgICAgICAgaW5kaWNhdG9yOiAnLSdcblxuXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE51bWJlcihDYWxjdWxhdGVkQk1JKSA+PSAzMC4wKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdHVzOiAnT2Jlc2UnLFxuICAgICAgICAgIGNvbG9yOiAnI0JDNEM1OCcsXG4gICAgICAgICAgaW5kaWNhdG9yOiAnLSdcblxuXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zdCBTdHJpbmdCTUlJbmRpY2F0b3IgPSAoKSA9PiB7XG4gICAgLy8gICBpZiAoTnVtYmVyKENhbGN1bGF0ZWRCTUkpIDw9IDE4LjQpIHtcbiAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICBzdGF0dXM6ICdVbmRlcndlaWdodCAtIG1heSByZXN1bHQgaW4gdmFyaW91cyBoZWFsdGggaXNzdWVzLCBpbmNsdWRpbmcgbnV0cml0aW9uYWwgZGVmaWNpZW5jaWVzLCB3ZWFrZW5lZCBpbW11bml0eSwgYm9uZSBhbmQgIG11c2NsZSBwcm9ibGVtcywgaG9ybW9uYWwgaW1iYWxhbmNlcywgYW5kIG5lZ2F0aXZlIGltcGFjdHMgb24gbWVudGFsIGhlYWx0aC4nLFxuICAgIC8vICAgICAgIGNvbG9yOiAnI0U4REFDMicsXG4gICAgLy8gICAgICAgaW5kaWNhdG9yOiAnKydcblxuXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmIChOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPj0gMTguNSAmJiBOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPD0gMjQuOSkge1xuICAgIC8vICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgIHN0YXR1czogJ05vcm1hbCAtIGlzIGEgcG9zaXRpdmUgaGVhbHRoIGluZGljYXRvciBhbmQgcHJvZHVjZXMgcmVkdWN0aW9ucyBpbiB0aGUgZm9sbG93aW5nOiAgcmlzayBvZiBjYXJkaW92YXNjdWxhciBkaXNlYXNlcywgdHlwZSAyIGRpYWJldGVzLCBqb2ludCBwcm9ibGVtcywgcmVzcGlyYXRvcnkgY29tcGxpY2F0aW9ucywgYW5kIG1lbnRhbCBoZWFsdGggaXNzdWVzLiAnLFxuICAgIC8vICAgICAgIGNvbG9yOiAnIzhDQjFBOCcsXG4gICAgLy8gICAgICAgaW5kaWNhdG9yOiAnKidcblxuXG5cblxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICBpZiAoTnVtYmVyKENhbGN1bGF0ZWRCTUkpID49IDI1LjAgJiYgTnVtYmVyKENhbGN1bGF0ZWRCTUkpIDw9IDI5LjkpIHtcbiAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICBzdGF0dXM6ICdPdmVyd2VpZ2h0IC0gbWF5IHJlc3VsdCBpbiB2YXJpb3VzIGhlYWx0aCBpc3N1ZXM7IGluY2x1ZGluZyBoZWlnaHRlbmVkIHJpc2tzIG9mIGNhcmRpb3Zhc2N1bGFyIHByb2JsZW1zLCBkaWFiZXRlcywgam9pbnQgaXNzdWVzLCByZXNwaXJhdG9yeSBjb21wbGljYXRpb25zLCBsaXZlciBkaXNlYXNlLCBjYW5jZXIsIG1lbnRhbCBpc3N1ZXMsIHJlZHVjZWQgbW9iaWxpdHksIHNsZWVwIGRpc29yZGVycywgZmVydGlsaXR5IGNoYWxsZW5nZXMsIGFuZCBwb3RlbnRpYWxseSBsb3dlcmVkIGxpZmUgZXhwZWN0YW5jeS4gICAgICAgICAgJyxcbiAgICAvLyAgICAgICBjb2xvcjogJyNFNTY1MkUnLFxuICAgIC8vICAgICAgIGluZGljYXRvcjogJy0nXG5cblxuXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmIChOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPj0gMzAuMCkge1xuICAgIC8vICAgICByZXR1cm4ge1xuICAgIC8vICAgICAgIHN0YXR1czogJ09iZXNlIC1pcyBhbiB1cmdlbnQgaGVhbHRoIHJpc2ssIGluY3JlYXNpbmcgc3VzY2VwdGliaWxpdHkgdG8gY2FyZGlvdmFzY3VsYXIgZGlzZWFzZXMsIGRpYWJldGVzLCBqb2ludCBpc3N1ZXMsIHJlc3BpcmF0b3J5IGNvbXBsaWNhdGlvbnMsIGxpdmVyIGRpc2Vhc2UsIGNhbmNlcnMsIHBzeWNob2xvZ2ljYWwgaW1wYWN0LCByZWR1Y2VkIG1vYmlsaXR5LCBzbGVlcCBkaXNvcmRlcnMsIGZlcnRpbGl0eSBjaGFsbGVuZ2VzLCBhbmQgcG90ZW50aWFsbHkgc2hvcnRlbmVkIGxpZmUgZXhwZWN0YW5jeS4nLFxuICAgIC8vICAgICAgIGNvbG9yOiAnI0JDNEM1OCcsXG4gICAgLy8gICAgICAgaW5kaWNhdG9yOiAnLSdcblxuXG5cbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cblxuXG4gICAgY29uc3QgQ2Fsb3JpZXMgPSAoKSA9PiB7XG4gICAgICBzd2l0Y2ggKHJlcS5ib2R5LmxpZmVfc3R5bGUpIHtcbiAgICAgICAgY2FzZSAnU2VkZW50YXJ5JzpcbiAgICAgICAgICBjb25zdCBTTVVMID0gMS4yO1xuICAgICAgICAgIHJldHVybiBOdW1iZXIoQk1SKCkpICogU01VTFxuXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTGlnaHQgYWN0aXZpdHknOlxuICAgICAgICAgIGNvbnN0IExBTVVMID0gMS4zNzVcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKEJNUigpKSAqIExBTVVMXG5cblxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01vZGVyYXRlbHkgYWN0aXZlJzpcbiAgICAgICAgICBjb25zdCBNQU1VTCA9IDEuNTVcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKEJNUigpKSAqIE1BTVVMXG5cblxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1ZlcnkgYWN0aXZlJzpcbiAgICAgICAgICBjb25zdCBWQU1VTCA9IDEuNzI1XG4gICAgICAgICAgcmV0dXJuIE51bWJlcihCTVIoKSkgKiBWQU1VTFxuXG5cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFeHRyYSBhY3RpdmUnOlxuICAgICAgICAgIGNvbnN0IEVBTVVMID0gMS45XG4gICAgICAgICAgcmV0dXJuIE51bWJlcihCTVIoKSkgKiBFQU1VTFxuXG5cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfTtcblxuXG5cbiAgICBsZXQgSWRlYWxXZWlnaHQgPSB7XG4gICAgICBDdXJyZW50V2VpZ2h0OiB3ZWlnaHQsXG4gICAgICBNaW5pbXVtSGVhbHRoeVdlaWdodDogWygoMTguNSAvIE51bWJlcihDYWxjdWxhdGVkQk1JKSkgKiByZXEuYm9keS53ZWlnaHQpLnRvRml4ZWQoKSwgKCgoMTguNSAvIE51bWJlcihDYWxjdWxhdGVkQk1JKSkgKiByZXEuYm9keS53ZWlnaHQpIC0gd2VpZ2h0KS50b0ZpeGVkKCldLFxuICAgICAgTWVkaXVtSGVhbHRoeVdlaWdodDogKCgyMS43IC8gTnVtYmVyKENhbGN1bGF0ZWRCTUkpKSAqIHJlcS5ib2R5LndlaWdodCkudG9GaXhlZCgpLFxuICAgICAgTWF4aW11bUhlYWx0aHlXZWlnaHQ6IFsoKDI0LjkgLyBOdW1iZXIoQ2FsY3VsYXRlZEJNSSkpICogcmVxLmJvZHkud2VpZ2h0KS50b0ZpeGVkKCksICgoMjQuOSAvIE51bWJlcihDYWxjdWxhdGVkQk1JKSAqIHJlcS5ib2R5LndlaWdodCkgLSB3ZWlnaHQpLnRvRml4ZWQoKV0sXG5cbiAgICB9XG5cbiAgICBjb25zdCBDYXB0dXJlZEFnZSA9IHJlcS5ib2R5LmFnZVxuXG5cbiAgICBjb25zdCBBR0UgPSBhc3luYyAoKSA9PiB7XG4gICAgICBkZWxldGUgcmVxLmJvZHkuaGVpZ2h0XG4gICAgICByZXEuYm9keS5oZWlnaHQgPSBQcm9jZXNzZWRIZWlnaHRcbiAgICAgIGF3YWl0IE51dHJpdGlvbi5Cb0xBUHVibGljSGVhbHRoQXNzZXNzbWVudChyZXEuYm9keSlcbiAgICAgIGlmIChyZXEuYm9keS5hZ2UgPD0gNzUpIHtcbiAgICAgICAgcmV0dXJuIHJlcS5ib2R5LmFnZVxuICAgICAgfSBlbHNlIGlmIChyZXEuYm9keS5hZ2UgPiA3NSkge1xuICAgICAgICByZXR1cm4gcmVxLmJvZHkuYWdlID0gNzVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgQUdFKClcbiAgICBjb25zdCBmaW5hbEVuZXJneSA9IGF3YWl0IENhbG9yaWVzKCk7XG4gICAgY29uc3QgaW5pdGlhbEVuZXJneSA9IGF3YWl0IEJNUigpXG4gICAgY29uc3QgRW5lcmd5Q2hhbmdlID0gKE51bWJlcihmaW5hbEVuZXJneSkgLSBOdW1iZXIoaW5pdGlhbEVuZXJneSkpLnRvRml4ZWQoKTtcblxuICAgICAgY29uc3QgYWN0aXZlRW5lcmd5ID0gYXdhaXQgQ2Fsb3JpZXMoKTtcbiAgICAgIGNvbnN0IHJlc3RpbmdFbmVyZ3kgPSBhd2FpdCBCTVIoKVxuICAgICAgY29uc3QgZW5lcmd5RGlmZmVyZW5jZSA9IChOdW1iZXIoYWN0aXZlRW5lcmd5KSAtIE51bWJlcihyZXN0aW5nRW5lcmd5KSk7XG5cbiAgICAgIGNvbnN0IEVuZXJneVBsYW5EYXlzID0gWzMwLCA2MCwgOTAsIDEyMCwgMTUwLCAxODBdXG5cbiAgICAgIGNvbnN0IERMUExhbiA9IHRmLnRlbnNvcihFbmVyZ3lQbGFuRGF5cywgWzZdKVxuICAgICAgY29uc3Qgc2VtaUFubnVhbFBsYW4gPSBbXVxuICAgICAgaWYgKFN0cmluZ0JNSUluZGljYXRvcigpPy5jb2xvciA9PT0gJyNFOERBQzInKSB7XG4gICAgICAgIGNvbnN0IG1vbnRob2ZQbGFuID0gYXdhaXQgRExQTGFuLm11bChlbmVyZ3lEaWZmZXJlbmNlKS5kaXYoMzUwMCkuYWRkKHJlcS5ib2R5LndlaWdodCkuYWJzKCkuY2VpbCgpLmFycmF5KCk7XG4gICAgICAgIHNlbWlBbm51YWxQbGFuLnB1c2gobW9udGhvZlBsYW4pIFxuICAgICAgfSBlbHNlIGlmIChTdHJpbmdCTUlJbmRpY2F0b3IoKT8uY29sb3IgIT09ICcjRThEQUMyJykge1xuICAgICAgICBjb25zdCBtb250aG9mUGxhbiA9IGF3YWl0IERMUExhbi5tdWwoZW5lcmd5RGlmZmVyZW5jZSkuZGl2KDM1MDApLnN1YihyZXEuYm9keS53ZWlnaHQpLmFicygpLmNlaWwoKS5hcnJheSgpO1xuICAgICAgICBzZW1pQW5udWFsUGxhbi5wdXNoKG1vbnRob2ZQbGFuKSBcblxuXG4gICAgICB9XG5cblxuXG5cbiAgICBjb25zdCBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZSA9IGF3YWl0IE51dHJpdGlvbi5QZXJzb25hbE51dHJpdGlvbkRldGFpbHMocmVxLmJvZHkuZ2VuZGVyLCByZXEuYm9keS5hZ2UpXG5cbiAgICBjb25zdCBOdXRyaXRpb25SZXF1aXJlbWVudCA9ICgpID0+IHtcblxuICAgICAgUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uY2Fsb3JpZXMgPSBDYWxvcmllcygpO1xuICAgICAgbGV0IHRlc3RpbmdkYXRhOiBhbnkgPSB7fVxuICAgICAgY29uc3QgcmVwbHlBcnJheTogYW55ID0gW11cbiAgICAgIHRlc3RpbmdkYXRhWydhZ2UnXSA9IENhcHR1cmVkQWdlXG4gICAgICB0ZXN0aW5nZGF0YVsnZ2VuZGVyJ10gPSBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5nZW5kZXJcbiAgICAgIHRlc3RpbmdkYXRhWydsaWZlc3R5bGUnXSA9IHJlcS5ib2R5LmxpZmVfc3R5bGVcblxuICAgICAgdGVzdGluZ2RhdGFbJ0NhbG9yaWVzJ10gPVxuICAgICAge1xuICAgICAgICB2YWx1ZTogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uY2Fsb3JpZXMudG9GaXhlZCgpLFxuICAgICAgICB1bml0OiAnS2NhbCcsXG4gICAgICAgIGR2OiAyMDAwLFxuICAgICAgICBtYzogNjNcbiAgICAgIH1cbiAgICAgIHRlc3RpbmdkYXRhWydUb3RhbCBGYXQnXSA9XG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAoUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF1bJ3RvdGFsX2ZhdCddICogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uY2Fsb3JpZXMgLyA5KS50b0ZpeGVkKCksXG4gICAgICAgIHVuaXQ6ICdHJyxcbiAgICAgICAgZHY6IDc4LFxuICAgICAgICBtYzogNjNcbiAgICAgIH1cbiAgICAgIHRlc3RpbmdkYXRhWydTYXR1cmF0ZWQgRmF0J10gPSB7XG4gICAgICAgIHZhbHVlOiAoUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF1bJ3NhdHVyYXRlZF9mYXQnXSAqIFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLmNhbG9yaWVzIC8gOSkudG9GaXhlZCgpLFxuICAgICAgICB1bml0OiAnRycsXG4gICAgICAgIGR2OiAyMCxcbiAgICAgICAgbWM6IDI0XG4gICAgICB9XG4gICAgICB0ZXN0aW5nZGF0YVsnVHJhbnMgRmF0J10gPSB7XG4gICAgICAgIHZhbHVlOiAoUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF1bJ3RyYW5zX2ZhdCddICogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uY2Fsb3JpZXMgLyA5KS50b0ZpeGVkKCksXG4gICAgICAgIHVuaXQ6ICdHJyxcbiAgICAgICAgZHY6IDIwLFxuICAgICAgICBtYzogMjRcbiAgICAgIH1cbiAgICAgIHRlc3RpbmdkYXRhWydDaG9sZXN0ZXJvbCddID0ge1xuICAgICAgICB2YWx1ZTogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uY2hvbGVzdGVyb2wsXG4gICAgICAgIHVuaXQ6ICdHJyxcbiAgICAgICAgZHY6IDMwMCxcbiAgICAgICAgbWM6IDUyNVxuICAgICAgfVxuICAgICAgdGVzdGluZ2RhdGFbJ1NvZGl1bSddID0ge1xuICAgICAgICB2YWx1ZTogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uc29kaXVtLFxuICAgICAgICB1bml0OiBcIk1HXCIsXG4gICAgICAgIGR2OiAyMzAwLFxuICAgICAgICBtYzogMjA3MFxuICAgICAgfVxuICAgICAgdGVzdGluZ2RhdGFbJ0NhcmJvaHlkcmF0ZXMnXSA9IHtcbiAgICAgICAgdmFsdWU6IChSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXVsnY2FyYm9oeWRyYXRlJ10gKiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5jYWxvcmllcyAvIDQpLnRvRml4ZWQoKSxcbiAgICAgICAgdW5pdDogJ0cnLFxuICAgICAgICBkdjogMjc1LFxuICAgICAgICBtYzogMTU4XG4gICAgICB9XG4gICAgICB0ZXN0aW5nZGF0YVsnRmliZXInXSA9IHtcbiAgICAgICAgdmFsdWU6IChSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXVsnZGlldGFyeV9maWJlciddICogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uY2Fsb3JpZXMpLnRvRml4ZWQoKSxcbiAgICAgICAgdW5pdDogJ0cnLFxuICAgICAgfVxuICAgICAgdGVzdGluZ2RhdGFbJ0FkZGVkIFN1Z2FyJ10gPSB7XG4gICAgICAgIHZhbHVlOiAoUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF1bJ2FkZGVkX3N1Z2Fyc19wZXJjZW50X29mX2NhbG9yaWVzJ10gKiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5jYWxvcmllcyAvIDQpLnRvRml4ZWQoKSxcbiAgICAgICAgdW5pdDogJ0cnLFxuICAgICAgICBkdjogNTAsXG4gICAgICAgIG1jOiA0MVxuICAgICAgfVxuICAgICAgdGVzdGluZ2RhdGFbJ1Byb3RlaW4nXSA9IHtcbiAgICAgICAgdmFsdWU6IChSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXVsncHJvdGVpbiddICogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uY2Fsb3JpZXMgLyA0KS50b0ZpeGVkKCksXG4gICAgICAgIHVuaXQ6IFwiR1wiLFxuICAgICAgICBkdjogNTAsXG4gICAgICAgIG1jOiAzNlxuICAgICAgfVxuICAgICAgdGVzdGluZ2RhdGFbJ1ZpdGFtaW4gRCddID0ge1xuICAgICAgICB2YWx1ZTogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0udml0YW1pbl9kLFxuICAgICAgICB1bml0OiAnTUNHJyxcbiAgICAgICAgZHY6IDIwLFxuICAgICAgICBtYzogMlxuICAgICAgfVxuICAgICAgdGVzdGluZ2RhdGFbJ0NhbGNpdW0nXSA9IHtcbiAgICAgICAgdmFsdWU6IFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLmNhbGNpdW0sXG4gICAgICAgIHVuaXQ6ICdNRycsXG4gICAgICAgIGR2OiAxMzAwLFxuICAgICAgICBtYzogMjgwXG4gICAgICB9XG4gICAgICB0ZXN0aW5nZGF0YVsnSXJvbiddID0ge1xuICAgICAgICB2YWx1ZTogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uaXJvbixcbiAgICAgICAgdW5pdDogJ01HJyxcbiAgICAgICAgZHY6IDE4LFxuICAgICAgICBtYzogNy41XG4gICAgICB9XG4gICAgICB0ZXN0aW5nZGF0YVsnUG90YXNzaXVtJ10gPSB7XG4gICAgICAgIHZhbHVlOiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5wb3Rhc3NpdW0sXG4gICAgICAgIHVuaXQ6ICdNRycsXG4gICAgICAgIGR2OiA0NzAwLFxuICAgICAgICBtYzogOTgwXG4gICAgICB9XG5cblxuICAgICAgZm9yIChsZXQgaXRlbXMgaW4gdGVzdGluZ2RhdGEpIHtcbiAgICAgICAgcmVwbHlBcnJheS5wdXNoKHtcbiAgICAgICAgICBOYW1lOiBpdGVtcyxcbiAgICAgICAgICBEaXN0aW5jdDogdGVzdGluZ2RhdGFbYCR7aXRlbXN9YF0udmFsdWUsXG4gICAgICAgICAgVW5pdDogdGVzdGluZ2RhdGFbYCR7aXRlbXN9YF0udW5pdCxcbiAgICAgICAgICBEVjogdGVzdGluZ2RhdGFbYCR7aXRlbXN9YF0uZHYsXG4gICAgICAgICAgTWNEb25hbGRzQmlnQnJlYWtmYXN0OiB0ZXN0aW5nZGF0YVtgJHtpdGVtc31gXS5tY1xuICAgICAgICB9KVxuICAgICAgfTtcblxuXG5cbiAgICAgIHJldHVybiBbW3Rlc3RpbmdkYXRhXSwgcmVwbHlBcnJheV1cbiAgICB9O1xuICAgIHJldHVybiBbQ2FsY3VsYXRlZEJNSSwgU3RyaW5nQk1JSW5kaWNhdG9yKCksIElkZWFsV2VpZ2h0LCBCTVIoKSwgTnV0cml0aW9uUmVxdWlyZW1lbnQoKSwgRW5lcmd5Q2hhbmdlLHNlbWlBbm51YWxQbGFuXVxuICB9XG4gIGNvbnN0IHB1c2hEYXRhVG9Gcm9udEVuZCA9IGF3YWl0IFBlcnNvbmFsSGVhbHRoKClcbiAgcmVzLmpzb24ocHVzaERhdGFUb0Zyb250RW5kKVxufSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGRhdGFiYXNlX3F1ZXJ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU3VwcG9ydF9EYXRhYmFzZSc7XG5pbXBvcnQgeyBNZXNzYWdlUmVzcG9uc2VGcm9tSG9tZVBhZ2UgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU01TL3NlbmRfc21zJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIucG9zdCgnL3N1cHBvcnRfbWVzc2FnZScsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAvLyAgTWVzc2FnZVJlc3BvbnNlRnJvbUhvbWVQYWdlKHJlcS5ib2R5LmZpcnN0X25hbWUsIHJlcS5ib2R5LnBob25lX251bWJlcixyZXEuYm9keS5lbWFpbClcbiAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBkYXRhYmFzZV9xdWVyeS5pbnNlcnRNZXNzYWdlKHJlcS5ib2R5KVxuICByZXMuanNvbignaGVlbG8nKVxufSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJpbXBvcnQgKiBhcyBteXNxbCBmcm9tICdteXNxbDInO1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcbmltcG9ydCB7IGVudiB9IGZyb20gJ25vZGU6cHJvY2Vzcyc7XG5cblxuXG5cbmV4cG9ydCBjb25zdCBteXNxbEFjY2VzcyA9IG15c3FsLmNyZWF0ZVBvb2woe1xuICAgIHVzZXI6cHJvY2Vzcy5lbnYuTVlTUUxfVVNFUixcbiAgICBwYXNzd29yZDpwcm9jZXNzLmVudi5NWVNRTF9QQVNTV09SRCxcbiAgICBob3N0OnByb2Nlc3MuZW52Lk1ZU1FMX0hPU1QsXG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52Lk1ZU1FMX1BPUlQpLFxuXG5cblxuICAgIC8vIHNvY2tldFBhdGg6cHJvY2Vzcy5lbnYuSU5TVEFOQ0VfVU5JWF9TT0NLRVRcblxufSlcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gKHF1ZXJ5OnN0cmluZyx2YWx1ZXM/OkFycmF5PHN0cmluZ3xudW1iZXI+KT0+e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxhbnk+PigocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgIG15c3FsQWNjZXNzLnF1ZXJ5KHF1ZXJ5LHZhbHVlcywoZXJyLHJlc3VsdHM6YW55KSA9PntcbiAgICAgICAgICAgIGlmKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfSlcbn07XG5cblxuXG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG4gZXhwb3J0IGxldCByZWdpc3RyYXRpb25JbmZvcm1hdGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscyBTRVQgPycsIHZhbHVlcyk7XG4gXG4gZXhwb3J0IGxldCBjaGVja0FjY291bnQgPSBhc3luYyAoZW1haWw6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgV0hFUkUgZW1haWwgPSA/JyxbZW1haWxdKVxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgZ2V0Q2xpZW50SW5mb3JtYXRpb24gPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscyB3aGVyZSBpZCA9ID8nLFtpZF0pO1xuY29uc3QgdXBkYXRlUFJJTkNJUExFID0gYXN5bmMgKGluZm8saWQpPT5RdWVyeSgnVVBEQVRFIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscyBTRVQgPyBXSEVSRSBpZCA9ID8nLFtpbmZvLGlkXSlcblxuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbi8vIGNvbnN0IGRlbGV0ZU1lc3NhZ2VzID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsIFtpZF0pO1xuLy8gY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gS0NNX0lOQy5jbGllbnRSZWdpc3RyYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuLy8gY29uc3QgaW5zZXJ0SW5zdGl0dXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5pbnN0aXR1dGlvbiBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6IGFueSwgaWQ6IGFueSkgPT4gUXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LCBpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldENsaWVudEluZm9ybWF0aW9uLFxuICAgIHVwZGF0ZVBSSU5DSVBMRSxcbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG4vLyBDcmVhdGUgU3RvcmUgXG5jb25zdCBjcmVhdGVTdG9yZSA9IGFzeW5jIChzdG9yZTogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gSW52ZW50b3J5LlN0b3JlIFNFVCA/Jywgc3RvcmUpO1xuY29uc3Qgc2VsZWN0U3RvcmUgPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIEludmVudG9yeS5TdG9yZSBXSEVSRSA/OycsIFtpZF0pO1xuXG5cbi8vQ3JlYXRlIGFuZCBBZGQgSW52ZW50b3J5IHRvIFByaW5jaXBsZSBEYXRhYmFzZVxuY29uc3QgaW5zZXJ0SW52ZW50b3J5SXRlbSA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgU0VUID8nLCB2YWx1ZXMpO1xuY29uc3QgZ2V0SW52ZW50b3J5SXRlbXMgPSBhc3luYyAoYnVzaW5lc3NfaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgV0hFUkUgYnVzaW5lc3NfaWQgPSA/JywgW2J1c2luZXNzX2lkXSk7XG5jb25zdCBkZWxldGVJbnZlbnRvcnlJdGVtID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnREVMRVRFIEZST00gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBXSEVSRSA/JywgW2lkXSk7XG5jb25zdCB1cGRhdGVJbnZlbnRvcnlJdGVtID0gYXN5bmMgKHZhbHVlcywgaWQpID0+IFF1ZXJ5KCdVUERBVEUgSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbdmFsdWVzLCBpZF0pO1xuY29uc3QgZ2V0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMgPSBhc3luYyAoYnVzaW5lc3NfaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgaWQsY2F0ZWdvcnkscmVjb21tZW5kZWRfc3RvY2tfbGV2ZWwsYnJhbmQsc3VwcGxpZXIsZGVzY3JpcHRpb24gRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFdIRVJFIGJ1c2luZXNzX2lkID0gPyBPUkRFUiBCWSBjYXRlZ29yeScsIFtidXNpbmVzc19pZF0pO1xuY29uc3QgaW5zZXJ0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMgPSBhc3luYyAoLi4udmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdCBTRVQgPycsIHZhbHVlcyk7XG5jb25zdCBnZXRQaG9uZU51bWJlcnMgPSBhc3luYyAoYnVzaW5lc3NfaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgcGhvbmVfbnVtYmVyLGJ1c2luZXNzX25hbWUgRlJPTSBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgV0hFUkUgaWQgPSA4MCcsIFtidXNpbmVzc19pZF0pO1xuY29uc3QgZ2V0SW52ZW50b3J5UmVmZXJlbmNlID0gYXN5bmMgKGJ1c2luZXNzX2lkLCBkYXRlX29mX2F1ZGl0KSA9PiBRdWVyeShgU0VMRUNUIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LiosIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuYnJhbmQsSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5kZXNjcmlwdGlvbixJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmJyYW5kLEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuY2F0ZWdvcnksSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5yZWNvbW1lbmRlZF9zdG9ja19sZXZlbCwgKEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMucHJpY2UgKiBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5vcmRlcl9xdWFudGl0eSkgYXMgcHJpY2UsSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QuZGF0ZV9vZl9hdWRpdCBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0IEpPSU4gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBPTiBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmlkID0gSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QuaW52ZW50b3J5X2l0ZW1faWQgV0hFUkUgSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QuYnVzaW5lc3NfaWQgPSAke2J1c2luZXNzX2lkfSBhbmQgSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QuZGF0ZV9vZl9hdWRpdCA9ICcke2RhdGVfb2ZfYXVkaXR9JyAgT1JERVIgQlkgSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QuZGF0ZV9vZl9hdWRpdDtgLCBbYnVzaW5lc3NfaWQsIGRhdGVfb2ZfYXVkaXRdKTtcbmNvbnN0IGRlbGV0ZUludmVudG9yeUF1ZGl0SXRlbSA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0IFdIRVJFID8nLCBbaWRdKTtcbmNvbnN0IHVwZGF0ZUludmVudG9yeUF1ZGl0SXRlbSA9IGFzeW5jICh2YWx1ZXMsIGlkKSA9PiBRdWVyeSgnVVBEQVRFIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFt2YWx1ZXMsIGlkXSk7XG5jb25zdCBzZWxlY3RVbmlxdWVJbnZlbnRvcnlQZXJpb2QgPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgZGF0ZV9vZl9hdWRpdCxhdWRpdF9yZWZlcmVuY2VfbnVtYmVyIEZST00gSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QgV0hFUkUgYnVzaW5lc3NfaWQgPSA/JyxbaWRdKTtcbmNvbnN0IGluc2VydFByb2R1Y3RSZWNpcGVOYW1lID0gYXN5bmMgKHZhbHVlcykgPT4gUXVlcnkoJ0lOU0VSVCBSZWNpcGUuUHJvZHVjdHMgU0VUID8nLCBbdmFsdWVzXSlcbmNvbnN0IHVwRGF0ZVByb2R1Y3RSZWNpcGVDb3N0ID0gYXN5bmMgKHZhbHVlcykgPT4gUXVlcnkoJ0lOU0VSVCBSZWNpcGUuUHJvZHVjdHMgU0VUID8nLFt2YWx1ZXNdKVxuY29uc3QgZ2V0UmVjaXBlUHJvZHVjdCA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gUmVjaXBlLlByb2R1Y3RzIFdIRVJFIGJ1c2luZXNzX2lkID0gPycsIFtpZF0pXG5jb25zdCBnZXRJbnZlbnRvcnlJdGVtc2ZvclNlbGVjdCA9IGFzeW5jKGlkKSA9PiBRdWVyeSgnc2VsZWN0IGlkICxkZXNjcmlwdGlvbixjYXRlZ29yeSx0b3RhbF9wYWNrYWdlX3dlaWdodCxwcmljZV9wZXJfZ3JhbSBmcm9tIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgd2hlcmUgYnVzaW5lc3NfaWQgPSA/IE9SREVSIEJZIGNhdGVnb3J5JywgW2lkXSlcbmNvbnN0IGdldEludmVudG9yeUl0ZW1zZm9yUmVjb3JkaW5nID0gYXN5bmMoaWQpID0+IFF1ZXJ5KCdzZWxlY3QgKiBmcm9tIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgd2hlcmUgaWQgPSA/JywgW2lkXSlcbmNvbnN0IGluc2VydEluZ3JlZGllbnRzID0gYXN5bmModmFsdWVzLHByb2R1Y3RfaWQpID0+IFF1ZXJ5KCdJTlNFUlQgUmVjaXBlLlByb2R1Y3RfSW5wdXRzIFNFVCA/ICAnLCBbdmFsdWVzLHByb2R1Y3RfaWRdKVxuY29uc3Qgc3VtT2ZBbGxJbmdyZWRpZW50cyA9IGFzeW5jKHByb2R1Y3RJZCkgPT5RdWVyeSgnc2VsZWN0IHN1bShpbnB1dF9jb3N0KSBmcm9tIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyB3aGVyZSBwcm9kdWN0X2lkID0gPycsW3Byb2R1Y3RJZF0pXG5jb25zdCBpbnNlcnRJbnB1dEl0ZW1NZXRhID0gYXN5bmModmFsdWVzLGlkKSA9PiBRdWVyeSgnVVBEQVRFIFJlY2lwZS5Qcm9kdWN0cyBTRVQgPyBXSEVSRSBpZCA9ID8nLFt2YWx1ZXMsaWRdKVxuY29uc3QgZ2V0SW5ncmVkaWVudENvdW50ID0gYXN5bmMoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgQ09VTlQoaW52ZW50b3J5X2l0ZW1faWQpIEZST00gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIFdIRVJFIHByb2R1Y3RfaWQgPSA/OycsW2lkXSlcbmNvbnN0IHRvdGFsSW5wdXRXZWlnaHQgPSBhc3luYyhwcm9kdWN0SWQpID0+UXVlcnkoJ3NlbGVjdCBzdW0oaW5wdXRfd2VpZ2h0KSBmcm9tIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyB3aGVyZSBwcm9kdWN0X2lkID0gPycsW3Byb2R1Y3RJZF0pXG5jb25zdCBkZWxldGVQcm9kdWN0ID0gYXN5bmMoaWQpID0+UXVlcnkoJ0RFTEVURSBGUk9NIFJlY2lwZS5Qcm9kdWN0cyBXSEVSRSBpZCA9ID8nLFtpZF0pXG5jb25zdCBVcGRhdGVQcm9kdWN0ID0gYXN5bmMgKHZhbHVlcywgaWQpID0+IFF1ZXJ5KCdVUERBVEUgUmVjaXBlLlByb2R1Y3RzIFNFVCA/IFdIRVJFIGlkID0gPycsIFt2YWx1ZXMsIGlkXSlcbmNvbnN0IGRlbGV0ZUlucHV0ID0gYXN5bmMocHJvZHVjdElkKSA9PlF1ZXJ5KCdERUxFVEUgRlJPTSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgV0hFUkUgcHJvZHVjdF9pZCA9ID8nLFtwcm9kdWN0SWRdKVxuY29uc3QgaW5zZXJ0SW5wdXRJdGVtTWV0YUZ1bGwgPSBhc3luYyh2YWx1ZXMsaWQpID0+IFF1ZXJ5KCdVUERBVEUgUmVjaXBlLlByb2R1Y3RzIFNFVCA/IFdIRVJFIGlkID0gPycsW3ZhbHVlcyxpZF0pXG5jb25zdCBzZWxlY3RBbGxJbnB1dHMgPSBhc3luYyhpZCk9PlF1ZXJ5KGBTRUxFQ1QgSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5kZXNjcmlwdGlvbixSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW52ZW50b3J5X2l0ZW1faWQsUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlkLFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQsUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X2Nvc3QsSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5wcmljZV9wZXJfZ3JhbSxSZWNpcGUuUHJvZHVjdF9JbnB1dHMucHJvZHVjdF9pZCBGUk9NIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyBJTk5FUiBKT0lOIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgV0hFUkUgUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmludmVudG9yeV9pdGVtX2lkID0gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5pZCBhbmQgUmVjaXBlLlByb2R1Y3RfSW5wdXRzLnByb2R1Y3RfaWQgPSA/YCxbaWRdKVxuY29uc3QgVXBkYXRlUHJvZHVjdElucHV0cyA9IGFzeW5jKHZhbHVlcyxpZCkgPT4gUXVlcnkoJ1VQREFURSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgU0VUID8gV0hFUkUgaWQgPSA/JyxbdmFsdWVzLGlkXSlcbmNvbnN0IGRlbGV0ZUlucHV0TWV0YSA9IGFzeW5jKHByb2R1Y3RJZCkgPT5RdWVyeSgnREVMRVRFIEZST00gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIFdIRVJFIGlkID0gPycsW3Byb2R1Y3RJZF0pXG5cblxuXG5cbmNvbnN0IGlucHV0TnV0cml0aW9uYWxJbmZvcm1hdGlvbiA9IGFzeW5jIChwcm9kdWN0SWQpPT5cblF1ZXJ5KFwic2VsZWN0IHN1bShpbnB1dF9jb3N0KSBhcyB0b3RhbF9jb3N0LCBzdW0oaW5wdXRfd2VpZ2h0KSBhcyB0b3RhbF93ZWlnaHQsIENPVU5UKGludmVudG9yeV9pdGVtX2lkKSBhcyB0b3RhbF9pbnB1dF9jb3VudCwgc3VtKGNhbG9yaWVzKSBhcyBjYWxvcmllcyxzdW0odG90YWxfZmF0KSBhcyB0b3RhbF9mYXQsc3VtKHNhdHVyYXRlZF9mYXQpIGFzIHNhdHVyYXRlZF9mYXQsc3VtKHRyYW5zX2ZhdCkgYXMgdHJhbnNfZmF0LHN1bShjaG9sZXN0ZXJvbCkgYXMgY2hvbGVzdGVyb2wsc3VtKHNvZGl1bSkgYXMgc29kaXVtLHN1bShjYXJib2h5ZHJhdGVzKSBhcyBjYXJib2h5ZHJhdGVzLHN1bShmaWJlcikgYXMgZmliZXIsc3VtKHN1Z2FyKSBhcyBzdWdhcixzdW0oYWRkZWRfc3VnYXIpIGFzIGFkZGVkX3N1Z2FyLHN1bShwcm90ZWluKSBhcyBwcm90ZWluLHN1bShjYWxjaXVtKSBhcyBjYWxjaXVtLHN1bShpcm9uKSBhcyBpcm9uLHN1bShwb3Rhc3NpdW0pIGFzIHBvdGFzc2l1bSxzdW0odml0YW1pbl9kKSBhcyB2aXRhbWluX2QgZnJvbSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgd2hlcmUgcHJvZHVjdF9pZCA9ID9cIixbcHJvZHVjdElkXSlcbmNvbnN0IGluc2VydE51dHJpdGlvbmFsSW5mb3JtYXRpb24gPSBhc3luYyAodmFsdWVzLCBpZCkgPT4gUXVlcnkoJ1VQREFURSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFNFVCA/IFdIRVJFIGlkID0gPycsIFt2YWx1ZXMsIGlkXSlcblxuY29uc3QgZ2V0SW5wdXRGb3JVcGRhdGUgPSBhc3luYyAocHJvZHVjdElkKT0+XG5RdWVyeShgU0VMRUNUIFxuUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlkLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMucHJpY2VfcGVyX2dyYW0pIGFzIGlucHV0X2Nvc3QsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5jYWxvcmllcykgYXMgY2Fsb3JpZXMsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5jYWxvcmllcykgYXMgY2Fsb3JpZXMsXG4gIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMudG90YWxfZmF0KSBhcyB0b3RhbF9mYXQsXG4gICAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnNhdHVyYXRlZF9mYXQpIGFzIHNhdHVyYXRlZF9mYXQsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy50cmFuc19mYXQpIGFzIHRyYW5zX2ZhdCxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmNob2xlc3Rlcm9sKSBhcyBjaG9sZXN0ZXJvbCxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnNvZGl1bSkgYXMgc29kaXVtLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuY2FyYm9oeWRyYXRlcykgYXMgY2FyYm9oeWRyYXRlcyxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmZpYmVyKSBhcyBmaWJlcixcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnN1Z2FyKSBhcyBzdWdhcixcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmFkZGVkX3N1Z2FyKSBhcyBhZGRlZF9zdWdhcixcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnByb3RlaW4pIGFzIHByb3RlaW4sXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5jYWxjaXVtKSBhcyBjYWxjaXVtLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuaXJvbikgYXMgaXJvbixcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnBvdGFzc2l1bSkgYXMgcG90YXNzaXVtLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMudml0YW1pbl9kKSBhcyB2aXRhbWluX2QsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5hbGxlcmdpZXMpIGFzIGFsbGVyZ2llc1xuIEZST00gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIElOTkVSIEpPSU4gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBcbiBXSEVSRSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW52ZW50b3J5X2l0ZW1faWQgPSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmlkIFxuIGFuZCBSZWNpcGUuUHJvZHVjdF9JbnB1dHMucHJvZHVjdF9pZCA9ID9gLFtwcm9kdWN0SWRdKTtcblxuIGNvbnN0IGdldE51dHJpdGlvbmFsSW5mb0ZvclB1YmxpYyA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ1NFTEVDVCBSZWNpcGUuUHJvZHVjdHMuKiwgQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzLmJ1c2luZXNzX25hbWUgZnJvbSBSZWNpcGUuUHJvZHVjdHMgam9pbiBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgd2hlcmUgQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzLmlkID0gUmVjaXBlLlByb2R1Y3RzLmJ1c2luZXNzX2lkIGFuZCBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMuaWQ9PycsW2lkXSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRJbnB1dEZvclVwZGF0ZSxcbiAgICBjcmVhdGVTdG9yZSxcbiAgICBzZWxlY3RTdG9yZSxcbiAgICBpbnNlcnRJbnZlbnRvcnlJdGVtLFxuICAgIGdldEludmVudG9yeUl0ZW1zLFxuICAgIGRlbGV0ZUludmVudG9yeUl0ZW0sXG4gICAgdXBkYXRlSW52ZW50b3J5SXRlbSxcbiAgICBnZXRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyxcbiAgICBpbnNlcnRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyxcbiAgICBnZXRQaG9uZU51bWJlcnMsXG4gICAgZ2V0SW52ZW50b3J5UmVmZXJlbmNlLFxuICAgIGRlbGV0ZUludmVudG9yeUF1ZGl0SXRlbSxcbiAgICB1cGRhdGVJbnZlbnRvcnlBdWRpdEl0ZW0sXG4gICAgc2VsZWN0VW5pcXVlSW52ZW50b3J5UGVyaW9kLFxuICAgIGluc2VydE51dHJpdGlvbmFsSW5mb3JtYXRpb24sXG4gICAgaW5zZXJ0UHJvZHVjdFJlY2lwZU5hbWUsXG4gICAgZ2V0UmVjaXBlUHJvZHVjdCxcbiAgICBnZXRJbnZlbnRvcnlJdGVtc2ZvclNlbGVjdCxcbiAgICBnZXRJbnZlbnRvcnlJdGVtc2ZvclJlY29yZGluZyxcbiAgICBpbnNlcnRJbmdyZWRpZW50cyxcbiAgICBzdW1PZkFsbEluZ3JlZGllbnRzLFxuICAgIGluc2VydElucHV0SXRlbU1ldGEsXG4gICAgdXBEYXRlUHJvZHVjdFJlY2lwZUNvc3QsXG4gICAgZ2V0SW5ncmVkaWVudENvdW50LFxuICAgIHRvdGFsSW5wdXRXZWlnaHQsXG4gICAgZGVsZXRlSW5wdXQsXG4gICAgZGVsZXRlUHJvZHVjdCxcbiAgICBVcGRhdGVQcm9kdWN0LFxuICAgIGlucHV0TnV0cml0aW9uYWxJbmZvcm1hdGlvbixcbiAgICBpbnNlcnRJbnB1dEl0ZW1NZXRhRnVsbCxcbiAgICBzZWxlY3RBbGxJbnB1dHMsXG4gICAgVXBkYXRlUHJvZHVjdElucHV0cyxcbiAgICBkZWxldGVJbnB1dE1ldGEsXG4gICAgZ2V0TnV0cml0aW9uYWxJbmZvRm9yUHVibGljXG4gICAgXG5cblxufSIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL0NvbmVjdGlvblwiO1xuXG5cbmNvbnN0IFBlcnNvbmFsTnV0cml0aW9uRGV0YWlscyA9IGFzeW5jIChnZW5kZXIsYWdlKSA9PiBRdWVyeSgnU2VsZWN0ICogRnJvbSBOdXRyaXRpb25hbF9JdGVtX0FuYWx5dGljcy5Qb3B1bGF0aW9uX051dHJpZW50X0ludGFrZSBXaGVyZSBnZW5kZXIgPSA/IGFuZCBhZ2UgPSA/JyxbZ2VuZGVyLGFnZV0pO1xuY29uc3QgQm9MQVB1YmxpY0hlYWx0aEFzc2Vzc21lbnQgPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBQdWJsaWNfVXRpbGl0aWVzLkJvTEFfUHVibGljX0hlYWx0aF9Bc3Nlc3NtZW50IFNFVCA/JywgdmFsdWVzKTtcblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIFBlcnNvbmFsTnV0cml0aW9uRGV0YWlscyxcbiAgICBCb0xBUHVibGljSGVhbHRoQXNzZXNzbWVudFxuXG59IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3QgdmVyaWZ5SW5mb3JtYXRpb24gPSBhc3luYyAoZW1haWxzOiBhbnkpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLkxvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIGVtYWlsPT8nLFtlbWFpbHNdKTtcbmNvbnN0IHVwZGF0ZUJlYXJlclRva2VuID0gYXN5bmMgKGJlYXJlcl90b2tlbixpZCk9PlF1ZXJ5KCdVUERBVEUgQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgU0VUID8gV0hFUkUgZW1haWwgPT8gJyxbYmVhcmVyX3Rva2VuLGlkXSlcbmNvbnN0IGFzc29jaWF0ZVZlcmlmaWNhdGlvbiA9IGFzeW5jKHBpbixpZCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIHBpbiA9ID8gYW5kIGlkID0gPyAnLFtwaW4saWRdKVxuXG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuLy8gY29uc3QgZGVsZXRlTWVzc2FnZXMgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIGNvbnRhY3QgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG4vLyBjb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAoLi4udmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBLQ01fSU5DLmNsaWVudFJlZ2lzdHJhdGlvbiBTRVQgPycsIHZhbHVlcyk7XG4vLyBjb25zdCBpbnNlcnRJbnN0aXR1dGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmluc3RpdHV0aW9uIFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3QgdXBkYXRlTWVzc2FnZXMgPSBhc3luYyAobmV3Q29udGVudDogYW55LCBpZDogYW55KSA9PiBRdWVyeSgnVVBEQVRFIGNvbnRhY3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW25ld0NvbnRlbnQsIGlkXSlcbi8vIGNvbnN0IGFsbFVzZXJzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gVXNlcnMnKTtcbi8vIGNvbnN0IGluc2VydFVzZXJzID0gYXN5bmModXNlciA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRzIFNFVCA/JyAsW3VzZXJdKTtcblxuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB2ZXJpZnlJbmZvcm1hdGlvbixcbiAgICB1cGRhdGVCZWFyZXJUb2tlbixcbiAgICBhc3NvY2lhdGVWZXJpZmljYXRpb25cblxufSIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uL0NvbmVjdGlvblwiO1xuXG5cbmNvbnN0IHZpZXdNZXNzYWdlcyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdzZWxlY3QgKiBmcm9tIENvbW11bmljYXRpb24uTWVzc2FnZXMnKTtcbmNvbnN0IGluc2VydE1lc3NhZ2U9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIENvbW11bmljYXRpb24uU3VwcG9ydCBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuXG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHZpZXdNZXNzYWdlcyxcbiAgICBpbnNlcnRNZXNzYWdlXG5cblxufSIsIlxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0ICdwYXNzcG9ydC1sb2NhbCc7XG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCB7U3RyYXRlZ3kgYXMgQmVhcmVyU3RyYXRlZ3l9IGZyb20gJ3Bhc3Nwb3J0LWh0dHAtYmVhcmVyJztcbmltcG9ydCAqIGFzIGRiIGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0JlYXJlclRva2VuRGV0YWlscydcbmltcG9ydCB7IG15c3FsQWNjZXNzIH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9Db25lY3Rpb24nO1xuXG5cblxuXG5cblxucGFzc3BvcnQudXNlKG5ldyBCZWFyZXJTdHJhdGVneShcbiAgICAgKHRva2VuLCBkb25lKT0+IHtcbiAgICAgICAgbXlzcWxBY2Nlc3MucXVlcnkoYFNFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgV2hlcmUgYWNjZXNzX3Rva2VuID0gP2AsIFt0b2tlbl0sIChlcnJvciwgdXNlcikgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHsgcmV0dXJuIGRvbmUoZXJyb3IpOyB9XG4gICAgICAgICAgICBpZiAoIXVzZXIpIHsgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpOyB9XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlciwgeyBzY29wZTogJ3JlYWQnIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9XG4pKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0ICdwYXNzcG9ydC1sb2NhbCc7XG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCB7IFN0cmF0ZWd5IGFzIExvY2FsU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1sb2NhbCdcbmltcG9ydCB7IGNoZWNrQWNjb3VudCB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4vaW5kZXgnXG5pbXBvcnQgdmVyaWZ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU2VjdXJpdHkvVmVyaWZpY2F0aW9uJ1xuXG5pbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucGFzc3BvcnQudXNlKG5ldyBMb2NhbFN0cmF0ZWd5KHtcbiAgdXNlcm5hbWVGaWVsZDogJ2VtYWlsJyxcbiAgcGFzc3dvcmRGaWVsZDogJ3Bhc3N3b3JkJyxcbn0sIGFzeW5jIGZ1bmN0aW9uIHZlcmlmeShlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBkb25lOiBhbnkpIHtcbiAgY29uc3QgW3VzZXJdID0gYXdhaXQgY2hlY2tBY2NvdW50KGVtYWlsKVxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBtZXNzYWdlOiBcIkludmFsaWQgY3JlZGVudGlhbHMuXFxuXCIgfSk7XG4gIH1cbiAgaWYgKCFiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpKSB7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgbWVzc2FnZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlxcblwiIH0pO1xuICB9XG4gIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuXG59XG4pKTtcblxucGFzc3BvcnQuc2VyaWFsaXplVXNlcigodXNlcjogYW55LCBkb25lKSA9PiB7XG4gIGRlbGV0ZSB1c2VyLmRhdGVfdGltZVxuICBkZWxldGUgdXNlci5wYXNzd29yZFxuICBkZWxldGUgdXNlci50ZXJtc19vZl9zZXJ2aWNlXG4gIGRlbGV0ZSB1c2VyLnByaXZhY3lfcG9saWN5XG4gIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgIHJldHVybiBkb25lKG51bGwsIHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgZmlyc3RfbmFtZTogdXNlci5maXJzdF9uYW1lLFxuICAgICAgbGFzdF9uYW1lOiB1c2VyLmxhc3RfbmFtZSxcbiAgICAgIGJ1c2luZXNzX25hbWU6IHVzZXIuYnVzaW5lc3NfbmFtZSxcbiAgICAgIHBob25lX251bWJlcjogdXNlci5waG9uZV9udW1iZXIsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGFjY291bnRfdHlwZTogdXNlci5hY2NvdW50X3R5cGUsXG4gICAgICBhY2Nlc3NfdG9rZW46IHVzZXIuYWNjZXNzX3Rva2VuXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbnBhc3Nwb3J0LmRlc2VyaWFsaXplVXNlcigodXNlcjogYW55LCBkb25lKSA9PiB7XG4gIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIpO1xuICB9KTtcbn0pO1xuXG5cbnJvdXRlci5wb3N0KCcvbG9naW5fdmVyaWZpY2F0aW9uJywgcGFzc3BvcnQuYXV0aGVudGljYXRlKCdsb2NhbCcpLCAocmVxOiBhbnksIHJlcykgPT4ge1xuICBpZiAocmVxLnVzZXIpIHtcbiAgICByZXEubG9nSW4ocmVxLnVzZXIsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHJldHVybiByZXMuY29va2llKCd1c2VyJywgcmVxLnVzZXIpLmpzb24ocmVxLnVzZXIpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCFyZXEudXNlcikge1xuICAgIHJlcy5zZW5kU3RhdHVzKDQwMSlcbiAgfVxufSk7XG5cbnJvdXRlci5wb3N0KCcvdmVyaWZ5X2Fzc29jaWF0ZV9waW4nLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICBjb25zdCBbbmV3UmVwbHksIGVycm9yXSA9IGF3YWl0IHZlcmlmeS5hc3NvY2lhdGVWZXJpZmljYXRpb24ocmVxLmJvZHkucGluLCByZXEuYm9keS5pZClcbiAgaWYgKG5ld1JlcGx5KSB7XG4gICAgICByZXMuanNvbih0cnVlKVxuICB9IGVsc2UgaWYgKCFuZXdSZXBseSkge1xuICAgICAgcmVzLmpzb24oZmFsc2UpXG4gIH1cbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG5cblxuXG5cblxuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdGVuc29yZmxvdy90ZmpzLWJhY2tlbmQtd2ViZ2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udmVydC11bml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXlzcWwyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWh0dHAtYmVhcmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWxvY2FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAqIGFzIGNvcnMgZnJvbSAnY29ycydcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgKiBhcyBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbi8vIGltcG9ydCBIb21lcGFnZVNlcnZlciBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvSG9tZXBhZ2VfUXVlcnknO1xuLy8gaW1wb3J0IENsaWVudFBvcnRhbCBmcm9tICcuL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscyc7XG4vLyBpbXBvcnQgeyBNZXNzYWdpbmdSZXNwb25zZSwgc2VuZFJlcGx5IH0gZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU01TL3NlbmRfc21zJztcbi8vIGltcG9ydCAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvUEFZTUVOVFMvYXV0aG9yaXplX2NhcmQnO1xuaW1wb3J0IHN1cHBvcnQgZnJvbSAnLi9NRVNTQUdFX1NVUFBPUlQvc3VwcG9ydCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi9DbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzJ1xuLy8gaW1wb3J0IGJpbGxpbmcgZnJvbSAnLi9DbGllbnRQb3J0YWwvQ2xpZW50QmlsbGluZyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9DbGllbnRQb3J0YWwvU3RvY2snO1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vQ2xpZW50UG9ydGFsL1Byb2R1Y3RzJztcbmltcG9ydCBpbnN0b3JlIGZyb20gJy4vQ2xpZW50UG9ydGFsL1FSQ09ERS9pblN0b3JlQXVkaXRzJ1xuaW1wb3J0IGF1ZGl0cyBmcm9tICcuL0NsaWVudFBvcnRhbC9BdWRpdHMvSW52ZW50b3J5QXVkaXRzJztcbmltcG9ydCBudXRyaXRpb24gZnJvbSAnLi9DbGllbnRQb3J0YWwvTnV0cml0aW9uJztcbmltcG9ydCByZWdpc3RyYXRpb24gZnJvbSAnLi9Ib21lcGFnZS9yZWdpc3RyYXRpb24nXG5cbmltcG9ydCBVUFN0cmF0ZWd5IGZyb20gJy4vU2VjdXJpdHkvbG9jYWxTdHJhdGVneSdcbmltcG9ydCAqIGFzIHNlc3Npb24gZnJvbSAnZXhwcmVzcy1zZXNzaW9uJ1xuaW1wb3J0ICcuL1NlY3VyaXR5L0JlYXJlcidcblxuaW1wb3J0ICogYXMgY29va2llcGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInXG5pbXBvcnQgKiBhcyBjb252ZXJ0IGZyb20gJ2NvbnZlcnQtdW5pdHMnXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzLW5vZGUtZ3B1J1xuaW1wb3J0IHsgVGFnRmlsbGVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnXG5pbXBvcnQgKiBhcyBxbmEgZnJvbSAnQHRlbnNvcmZsb3ctbW9kZWxzL3FuYSc7XG5pbXBvcnQgJ0B0ZW5zb3JmbG93L3RmanMtYmFja2VuZC13ZWJnbCdcbnRmLmJhY2tlbmQoKVxuXG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGNvcnMoKSlcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgcmVzLnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICcqJylcbiAgcmVzLnNldCgnQ2FjaGUtQ29udHJvbCcsICduby1jYWNoZScpXG4gIG5leHQoKVxufSlcbmFwcC5zZXQoJ3RydXN0IHByb3h5JywgdHJ1ZSlcblxuYXBwLnVzZShjb29raWVwYXJzZXIoKSlcbmFwcC51c2Uoc2Vzc2lvbih7XG4gIHNlY3JldDogJ2tleWJvYXJkIGNhdCcsXG4gIHJlc2F2ZTogZmFsc2UsXG4gIHNhdmVVbmluaXRpYWxpemVkOiBmYWxzZSxcbiAgY29va2llOiB7IHNlY3VyZTogZmFsc2UgfVxufSkpO1xuXG5cbmFwcC51c2UocGFzc3BvcnQuaW5pdGlhbGl6ZSgpKTtcblxuYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpO1xuXG5cblxuYXBwLnVzZShVUFN0cmF0ZWd5KVxuY29uc3QgdmFsaWRhdGVVc2VyID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGlmICghcmVxLnVzZXIpIHtcbiAgICByZXMucmVkaXJlY3QoJy9zaWdudXAnKVxuICB9IGVsc2UgaWYgKHJlcS51c2VyKSB7XG4gICAgbmV4dCgpXG4gIH1cbn1cblxuXG5cbmFwcC51c2UoJy8nLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5hcHAudXNlKCcvc3VwcG9ydCcsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy9hYm91dHVzJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3Rlcm1zb2ZzZXJ2aWNlJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL2JvbGFfb3ZlcnZpZXcnLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5hcHAudXNlKCcvcHJpdmFjeXBvbGljeScsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbi8vIGFwcC51c2UoJy9zaWdudXAnLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5hcHAudXNlKCcvaGVhbHRoLWRpYWdub3N0aWMnLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG4vLyBhcHAudXNlKCcvaW52ZW50b3J5Y2hlY2snLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG4vLyBhcHAudXNlKCcvbnV0cmllbnRzJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuLy8gYXBwLnVzZSgnL3ByaW5jaXBsZS8nLCB2YWxpZGF0ZVVzZXIsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbi8vIGFwcC51c2UoJy9wcmluY2lwbGUvJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuLy8gYXBwLnVzZSgnL3ByaW5jaXBsZS9hY2NvdW50JywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuLy8gYXBwLnVzZSgnL3ByaW5jaXBsZS9zdG9yZScsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbi8vIGFwcC51c2UoJy9wcmluY2lwbGUvcHJvZHVjdHMnLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG4vLyBhcHAudXNlKCcvcHJpbmNpcGxlL251dHJpdGlvbicsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbi8vIGFwcC51c2UoJy9wcmluY2lwbGUvYm9sYW1hbnVhbCcsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbi8vIGFwcC51c2UoJy9wcmluY2lwbGUvaW52ZW50b3J5YXVkaXRzJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuXG5cblxuXG5hcHAudXNlKCcvbG9naW4nLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5cblxuYXBwLnVzZShyZWdpc3RyYXRpb24pXG5hcHAudXNlKHN1cHBvcnQpXG5hcHAudXNlKGNsaWVudClcbmFwcC51c2UobnV0cml0aW9uKVxuYXBwLnVzZShzdG9yZSlcbmFwcC51c2UoYXVkaXRzKVxuYXBwLnVzZShwcm9kdWN0cylcbmFwcC51c2UoaW5zdG9yZSlcblxuYXBwLmdldChcIipcIiwgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uL3B1YmxpY1wiKSlcbn0pO1xuXG5cblxuIFxuXG5cblxuXG5cbmNvbnN0IHRlc3QxID0gW11cbmNvbnN0IHRmb3V0cHV0ID0gW11cbi8vIGxldCBpbmRleCA9IDBcbi8vICBmb3IgICggbGV0IGluZGV4ID0gMCA7IGluZGV4IDw9IDk5OSAgOyBpbmRleCsrKSB7XG4vLyAgbGV0IG5ld1JlcGx5ID0gaW5kZXggXG4vLyB0ZXN0MS5wdXNoKG5ld1JlcGx5LG5ld1JlcGx5KzEwMCwxKVxuLy8gIH1cbi8vICBmb3IgICggbGV0IGluZGV4ID0gMCA7IGluZGV4IDw9IDk5OSAgOyBpbmRleCsrKSB7XG4vLyAgIGxldCBuZXdSZXBseSA9IGluZGV4ICogNFxuLy8gIHRmb3V0cHV0LnB1c2gobmV3UmVwbHkpXG4vLyAgIH1cblxuLy8gY29uc3QgdGZBcnJheSA9IHRmLnRlbnNvcih0ZXN0MSxbMTAwMCwzXSlcbi8vIGNvbnN0IHRmQXJyYXlPdXRwdXQgPSB0Zi50ZW5zb3IodGZvdXRwdXQsWzEwMDAsMV0pXG4vLyBjb25zb2xlLmxvZyh0ZkFycmF5T3V0cHV0KVxuLy8gdGYudXRpbC5zaHVmZmxlQ29tYm8odGZBcnJheSx0ZkFycmF5T3V0cHV0KVxuXG4vLyAvLyBjb25zdCB0Zk91dHB1dCA9IHRmQXJyYXkubXVsKDEwKVxuXG4vLyBjb25zdCBtb2RlbCA9IHRmLnNlcXVlbnRpYWwoKTtcbi8vIG1vZGVsLmFkZCh0Zi5sYXllcnMuZGVuc2Uoe2lucHV0U2hhcGU6WzNdLHVuaXRzOjEwMCxhY3RpdmF0aW9uOidyZWx1J30pKVxuLy8gbW9kZWwuYWRkKHRmLmxheWVycy5kZW5zZSh7dW5pdHM6MTAwLGFjdGl2YXRpb246J3JlbHUnfSkpXG4vLyBtb2RlbC5hZGQodGYubGF5ZXJzLmRlbnNlKHt1bml0czoxMDAwLGFjdGl2YXRpb246J3JlbHUnfSkpXG5cblxuLy8gbW9kZWwuYWRkKHRmLmxheWVycy5kZW5zZSh7dW5pdHM6MX0pKVxuXG4vLyAvLyBtb2RlbC5hZGQodGYubGF5ZXJzLmRlbnNlKHt1bml0czoxfSkpXG5cbi8vIGNvbnN0IHRyYWluID0gYXN5bmMgKCk9Pntcbi8vICAgbW9kZWwuY29tcGlsZSh7XG4vLyAgICAgb3B0aW1pemVyOnRmLnRyYWluLmFkYW0oKSxcbi8vICAgICBsb3NzOidtZWFuU3F1YXJlZEVycm9yJ1xuLy8gICB9KVxuLy8gICBhd2FpdCBtb2RlbC5maXQodGZBcnJheSx0ZkFycmF5T3V0cHV0LHtcbi8vICAgICBlcG9jaHM6NzUsXG4vLyAgICAgYmF0Y2hTaXplOjUwLFxuLy8gICAgIHNodWZmbGU6dHJ1ZSxcbi8vICAgICB2YWxpZGF0aW9uU3BsaXQ6LjEwXG5cbi8vICAgfSlcbi8vICAgY29uc3QgbmV3cHJlZGljdGlvbiA9IG1vZGVsLnByZWRpY3QodGYudGVuc29yKFtbMywzMDEsM11dKSlcbi8vIG5ld3ByZWRpY3Rpb24ucHJpbnQoKVxuXG5cbi8vIH1cbi8vIHRyYWluKClcblxuXG5cblxuXG4vLyBjb25zdCBRbkEgPSBhc3luYyAoKSA9PiB7XG5cbi8vICAgY29uc3QgcGFzc2FnZSA9IFwiUnViZSBGb3N0ZXIgd2FzIHRoZSB0ZWFt4oCZcyB0cmF2ZWxpbmcgbWFuYWdlciBhbmQgb25lIG9mIHRoZSB0ZWFt4oCZcyBzdGFydGluZyBwaXRjaGVycy4gVGhlIExlbGFuZCBHaWFudHMgd2VyZSBvbmUgb2YgdGhlIHRvcCBibGFjayBiYXNlYmFsbCB0ZWFtcyBpbiB0aGUgY291bnRyeSBhbmQgYWxzbyB3b24gdGhlIHByZXN0aWdpb3VzIENoaWNhZ28gQ2l0eSBMZWFndWUgdGl0bGUuIFRoZSBMZWxhbmQgR2lhbnRzIGhhZCBhIHdvbi1sb3NzIHJlY29yZCBvZiA1NC0xOC0xICguNzUwKSBpbiBpbmRlcGVuZGVudCBwbGF5IGFuZCB3ZW50IDMxLTkgKC43NzUpIGluIHRoZSBDaGljYWdvIENpdHkgTGVhZ3VlLiBGcmFuayBDLiBMZWxhbmQgd2FzIGJvcm4gaW4gRmVicnVhcnkgb2YgMTg2OSBpbiBNZW1waGlzLCAgVGVubmVzc2VlLlwiXG4vLyAgIGNvbnN0IHF1ZXN0aW9uID0gXCJXaGVuIHdhcyBGcmFuayBDIExlbGFuZCBib3JuP1wiXG4vLyAgIGNvbnN0IG1vZGVsID0gYXdhaXQgcW5hLmxvYWQoKTtcbi8vICAgY29uc29sZS5sb2cobW9kZWwpXG4vLyAgIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBtb2RlbC5maW5kQW5zd2VycyhxdWVzdGlvbiwgcGFzc2FnZSk7XG4vLyAgIGFuc3dlcnMubWFwKChpKT0+e1xuLy8gICAgIGlmKGkuc2NvcmU+MTUpe1xuLy8gICAgICAgY29uc29sZS5sb2coaS50ZXh0KVxuLy8gICAgIH1cbi8vICAgfSk7XG4vLyB9XG5cbi8vIFFuQSgpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmFwcC5saXN0ZW4oODA4MCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7ODA4MH0uLi5gKVxufSlcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==