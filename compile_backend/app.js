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
                PersonalHealth = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var CalculatedBMI, StringBMIIndicator, BMR, Calories, CapturedAge, AGE, RetrieveNutrientsFromDatabase, NutritionRequirement;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                CalculatedBMI = (weight / HeightSquared * 703).toFixed(1);
                                StringBMIIndicator = function () {
                                    if (Number(CalculatedBMI) <= 18.5) {
                                        return {
                                            status: 'Underweight',
                                            color: '#E8DAC2'
                                        };
                                    }
                                    if (Number(CalculatedBMI) >= 18.5 && Number(CalculatedBMI) <= 24.9) {
                                        return {
                                            status: 'Normal',
                                            color: '#8CB1A8'
                                        };
                                    }
                                    if (Number(CalculatedBMI) >= 25.0 && Number(CalculatedBMI) <= 29.9) {
                                        return {
                                            status: 'Overweight',
                                            color: '#E5652E'
                                        };
                                    }
                                    if (Number(CalculatedBMI) >= 30.0) {
                                        return {
                                            status: 'Obese',
                                            color: '#BC4C58'
                                        };
                                    }
                                };
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
                                return [4 /*yield*/, NutritionDetails_ts_1.default.PersonalNutritionDetails(req.body.gender, req.body.age)];
                            case 1:
                                RetrieveNutrientsFromDatabase = _a.sent();
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
                                // console.log(CalculatedBMI, StringBMIIndicator(), IdealWeight, BMR(), NutritionRequirement())
                                return [2 /*return*/, [CalculatedBMI, StringBMIIndicator(), IdealWeight, BMR(), NutritionRequirement()]];
                        }
                    });
                }); };
                return [4 /*yield*/, PersonalHealth()
                    // console.log(pushDataToFrontEnd)
                ];
            case 1:
                pushDataToFrontEnd = _a.sent();
                // console.log(pushDataToFrontEnd)
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
app.use('/inventorycheck', express.static('public'));
app.use('/nutrients', express.static('public'));
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
// const test1 = []
// const tfoutput = []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUNuSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUNwSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUN4SSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUNoSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUNoSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUN0SCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUN2SCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUM5RyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJ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QUFJO0FBQ0osVUFBVTtBQU1WLDRCQUE0QjtBQUU1QixrYkFBa2I7QUFDbGIscURBQXFEO0FBQ3JELG9DQUFvQztBQUNwQyx1QkFBdUI7QUFDdkIsZ0VBQWdFO0FBQ2hFLHVCQUF1QjtBQUN2QixzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUixRQUFRO0FBQ1IsSUFBSTtBQUVKLFNBQVM7QUFrQlQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUE0QixJQUFJLFFBQUssQ0FBQztBQUNwRCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9DbGllbnRQb3J0YWwvQXVkaXRzL0ludmVudG9yeUF1ZGl0cy50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9DbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9OdXRyaXRpb24udHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL1Byb2R1Y3RzLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9RUkNPREUvaW5TdG9yZUF1ZGl0cy50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9DbGllbnRQb3J0YWwvU3RvY2sudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvSG9tZXBhZ2UvcmVnaXN0cmF0aW9uLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL01FU1NBR0VfU1VQUE9SVC9zdXBwb3J0LnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvQ29uZWN0aW9uLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9OdXRyaXRpb25EZXRhaWxzLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU2VjdXJpdHkvVmVyaWZpY2F0aW9uLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU3VwcG9ydF9EYXRhYmFzZS50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9TZWN1cml0eS9CZWFyZXIudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvU2VjdXJpdHkvbG9jYWxTdHJhdGVneS50cyIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJAdGVuc29yZmxvdy90ZmpzLWJhY2tlbmQtd2ViZ2xcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJAdGVuc29yZmxvdy90ZmpzLW5vZGUtZ3B1XCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJjb252ZXJ0LXVuaXRzXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnYvY29uZmlnXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3Mtc2Vzc2lvblwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcIm15c3FsMlwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnQtaHR0cC1iZWFyZXJcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1sb2NhbFwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL2tjbWluYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uLy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeSc7XG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5cbnJvdXRlci5nZXQoJy9pbnZlbnRvcnlQZXJpb2QnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBpbnZlbnRvcnlfcGVyaW9kID0gYXdhaXQgc3RvcmVzLnNlbGVjdFVuaXF1ZUludmVudG9yeVBlcmlvZChyZXEuY29va2llcy51c2VyLmlkKVxuICAgIHJlcy5qc29uKGludmVudG9yeV9wZXJpb2QpXG59KVxuXG5cbnJvdXRlci5nZXQoJy9pbnZlbnRvcnlfcmVmZXJlbmNlX2luZm9ybWF0aW9uJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zdCByZXBseTphbnkgPSBhd2FpdCBzdG9yZXMuZ2V0SW52ZW50b3J5UmVmZXJlbmNlKHJlcS5jb29raWVzLnVzZXIuaWQsIHJlcS5xdWVyeS5hdWRpdERhdGUpXG4gICAgcmVzLmpzb24ocmVwbHkpXG59KTtcblxuXG5yb3V0ZXIuZGVsZXRlKCcvZGVsZXRlSW52ZW50b3J5QXVkaXRJdGVtcycsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLmRlbGV0ZUludmVudG9yeUF1ZGl0SXRlbShyZXEuYm9keSlcbiAgICByZXMuanNvbihjdXJyZW50X3N0b3JlLmFmZmVjdGVkUm93cylcbn0pO1xuXG5yb3V0ZXIucHV0KCcvdXBkYXRlSW52ZW50b3J5QXVkaXRJdGVtJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMudXBkYXRlSW52ZW50b3J5QXVkaXRJdGVtKHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG4gICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7IiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGNsaWVudF9hZG1pbl9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuaW1wb3J0IHtjaGVja0FjY291bnR9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4vJ1xuXG5cblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLmdldCgnL2dldFByaW5jaXBsZUluZm9ybWF0aW9uJywgYXN5bmMgKHJlcTphbnksIHJlcykgPT4ge1xuICAgIHJlcy5jb29raWUoJ3VzZXInLHJlcS51c2VyKVxuXG5cbn0pO1xuXG5yb3V0ZXIucHV0KCcvdXBkYXRlQ2xpZW50aW5mb3JtYXRpb24nLCBhc3luYyAocmVxOmFueSwgcmVzKSA9PiB7XG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBjbGllbnRfYWRtaW5fcXVlcnkudXBkYXRlUFJJTkNJUExFKHJlcS5ib2R5LHJlcS51c2VyLmlkKVxuICAgIHJlcy5qc29uKG5ld1JlcGx5KVxufSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyBcblxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IHN0b3JlcyBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9JbnZlbnRvcnknO1xuaW1wb3J0ICogYXMgY29udmVydCBmcm9tICdjb252ZXJ0LXVuaXRzJ1xuXG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cblxuXG5cblxuXG5cbi8vIEFkZCBOdXRyaXRpb24gSW5mb3JtYXRpb25cblxuXG5yb3V0ZXIuZ2V0KCcvZ2V0TnV0cmllbnRzLzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGJ1c2luZXNzX2lkID0gcmVxLnBhcmFtcy5pZFxuICAgIGNvbnN0IGdldFByb2R1Y3RzID0gYXdhaXQgc3RvcmVzLmdldFJlY2lwZVByb2R1Y3QoYnVzaW5lc3NfaWQgKTtcbiAgICBnZXRQcm9kdWN0cy5tYXAoYXN5bmMgKGksIG4sIGEpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0SW5wdXRzID0gYXdhaXQgc3RvcmVzLmdldElucHV0Rm9yVXBkYXRlKGkuaWQpXG4gICAgICAgICBnZXRJbnB1dHMubWFwKGFzeW5jIChpLG4sYSk9PntcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgc3RvcmVzLlVwZGF0ZVByb2R1Y3RJbnB1dHMoaSwgaS5pZClcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcHJvZHVjdE1ldGEgPSBhd2FpdCBzdG9yZXMuaW5wdXROdXRyaXRpb25hbEluZm9ybWF0aW9uKGkuaWQpXG4gICAgICAgIHN0b3Jlcy5pbnNlcnRJbnB1dEl0ZW1NZXRhKHByb2R1Y3RNZXRhWzBdLCBpLmlkKVxuICAgICAgICByZXR1cm4gaVxuICAgIH0pO1xuICAgIGNvbnN0IGdldFByb2R1Y3RzXzEgPSBhd2FpdCBzdG9yZXMuZ2V0UmVjaXBlUHJvZHVjdChidXNpbmVzc19pZCk7XG5cbiAgICByZXMuanNvbihnZXRQcm9kdWN0c18xKVxufSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBzdG9yZXMgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvSW52ZW50b3J5JztcbmltcG9ydCB2ZXJpZnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TZWN1cml0eS9WZXJpZmljYXRpb24nXG5pbXBvcnQgKiBhcyBjb252ZXJ0IGZyb20gJ2NvbnZlcnQtdW5pdHMnXG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnc3RyZWFtL2NvbnN1bWVycyc7XG5cblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuXG5yb3V0ZXIuZ2V0KCcvZ2V0UmVjaXBlUHJvZHVjdCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGdldFByb2R1Y3RzID0gYXdhaXQgc3RvcmVzLmdldFJlY2lwZVByb2R1Y3QocmVxLmNvb2tpZXMudXNlci5pZCk7XG4gICAgZ2V0UHJvZHVjdHMubWFwKGFzeW5jIChpLCBuLCBhKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldElucHV0cyA9IGF3YWl0IHN0b3Jlcy5nZXRJbnB1dEZvclVwZGF0ZShpLmlkKVxuICAgICAgICAgZ2V0SW5wdXRzLm1hcChhc3luYyAoaSxuLGEpPT57XG4gICAgICAgICAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5VcGRhdGVQcm9kdWN0SW5wdXRzKGksIGkuaWQpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHByb2R1Y3RNZXRhID0gYXdhaXQgc3RvcmVzLmlucHV0TnV0cml0aW9uYWxJbmZvcm1hdGlvbihpLmlkKVxuICAgICAgICBzdG9yZXMuaW5zZXJ0SW5wdXRJdGVtTWV0YShwcm9kdWN0TWV0YVswXSwgaS5pZClcbiAgICAgICAgcmV0dXJuIGlcbiAgICB9KTtcbiAgICBjb25zdCBnZXRQcm9kdWN0c18xID0gYXdhaXQgc3RvcmVzLmdldFJlY2lwZVByb2R1Y3QocmVxLmNvb2tpZXMudXNlci5pZCk7XG4gICAgY29uc29sZS5sb2coZ2V0UHJvZHVjdHNfMSlcblxuXG4gICAgcmVzLmpzb24oZ2V0UHJvZHVjdHNfMSlcbn0pXG5cbnJvdXRlci5nZXQoJy9pbnZlbnRvcnlJdGVtc0ZvclNlbGVjdFJlY2lwZXMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBnZXRQcm9kdWN0cyA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtc2ZvclNlbGVjdChyZXEuY29va2llcy51c2VyLmlkKVxuICAgIGNvbnN0IHNlbGVjdEl0ZW0gPSBnZXRQcm9kdWN0cy5tYXAoKGksIG4sIGEpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBpLmlkLFxuICAgICAgICAgICAgbGFiZWw6IGkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmljZV9wZXJfZ3JhbTogaS5wcmljZV9wZXJfZ3JhbVxuXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJlcy5qc29uKHNlbGVjdEl0ZW0pXG59KVxuXG5cbnJvdXRlci5wb3N0KCcvaW5zZXJ0UHJvZHVjdE5hbWUnLCBhc3luYyAocmVxOiBhbnksIHJlczogYW55KSA9PiB7XG4gICAgcmVxLmJvZHkuYnVzaW5lc3NfaWQgPSByZXEuY29va2llcy51c2VyLmlkXG4gICAgcmVxLmJvZHkuc2VydmluZ19zaXplID0gY29udmVydChyZXEuYm9keS5zZXJ2aW5nX3NpemUuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnNlcnZpbmdfc2l6ZS51bml0KS50bygnZycpXG4gICAgY29uc3QgaW5zZXJ0UHJvZHVjdCA9IGF3YWl0IHN0b3Jlcy5pbnNlcnRQcm9kdWN0UmVjaXBlTmFtZShyZXEuYm9keSlcbiAgICByZXMuanNvbignaGVsbG8nKVxufSk7XG5cblxuXG5yb3V0ZXIucG9zdCgnL2luc2VydFByb2R1Y3RJbnB1dHMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBkYXRhRXhoYW5nZSA9IGF3YWl0IHJlcS5ib2R5LmlucHV0cy5mb3JFYWNoKGFzeW5jIChpLCBuLCBhKSA9PiB7XG4gICAgICAgIGkuaW5wdXRfd2VpZ2h0ID0gY29udmVydChpLmlucHV0X3dlaWdodCkuZnJvbShpLnVuaXQpLnRvKCdnJylcbiAgICAgICAgY29uc3QgZ2V0UHJvZHVjdHM6IGFueSA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtc2ZvclJlY29yZGluZyhpLmludmVudG9yeV9pdGVtX2lkKVxuICAgICAgICBpLmlucHV0X2Nvc3QgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5wcmljZV9wZXJfZ3JhbVxuICAgICAgICBpLmNhbG9yaWVzID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2Fsb3JpZXNcbiAgICAgICAgaS50b3RhbF9mYXQgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS50b3RhbF9mYXRcbiAgICAgICAgaS5zYXR1cmF0ZWRfZmF0ID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uc2F0dXJhdGVkX2ZhdFxuICAgICAgICBpLnRyYW5zX2ZhdCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnRyYW5zX2ZhdFxuICAgICAgICBpLmNob2xlc3Rlcm9sID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2hvbGVzdGVyb2xcbiAgICAgICAgaS5zb2RpdW0gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5zb2RpdW1cbiAgICAgICAgaS5jYXJib2h5ZHJhdGVzID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2FyYm9oeWRyYXRlc1xuICAgICAgICBpLmZpYmVyID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uZmliZXJcbiAgICAgICAgaS5zdWdhciA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnN1Z2FyXG4gICAgICAgIGkuYWRkZWRfc3VnYXIgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5hZGRlZF9zdWdhclxuICAgICAgICBpLnByb3RlaW4gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5wcm90ZWluXG4gICAgICAgIGkuY2FsY2l1bSA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLmNhbGNpdW1cbiAgICAgICAgaS5pcm9uID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uaXJvblxuICAgICAgICBpLnBvdGFzc2l1bSA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnBvdGFzc2l1bVxuICAgICAgICBpLnZpdGFtaW5fZCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnZpdGFtaW5fZFxuICAgICAgICBkZWxldGUgaS51bml0XG4gICAgICAgIGF3YWl0IHN0b3Jlcy5pbnNlcnRJbmdyZWRpZW50cyhpLCByZXEuYm9keS5pbnB1dHMucHJvZHVjdF9pZClcbiAgICB9KVxuICAgIGNvbnN0IGRhdGFfMyA9IGF3YWl0IHN0b3Jlcy5pbnB1dE51dHJpdGlvbmFsSW5mb3JtYXRpb24ocmVxLmJvZHkuaW5wdXRzWzBdLnByb2R1Y3RfaWQpXG4gICAgc3RvcmVzLmluc2VydElucHV0SXRlbU1ldGFGdWxsKGRhdGFfM1swXSwgcmVxLmJvZHkuaW5wdXRzWzBdLnByb2R1Y3RfaWQpXG4gICAgcmVzLmpzb24oJ2Nvc3RVcGxvYWQnKVxufSk7XG5cblxuXG5yb3V0ZXIucHV0KCcvdXBkYXRlUHJvZHVjdEluZm9ybWF0aW9uJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBpZiAocmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZS5hbW91bnQgPT0gdW5kZWZpbmVkICYmIHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUudW5pdCA9PSB1bmRlZmluZWQgJiYgcmVxLmJvZHkudmFsdWVzLnByb2R1Y3RfbmFtZSA9PSB1bmRlZmluZWQgJiYgcmVxLmJvZHkudmFsdWVzLnNhbGVzX3ByaWNlID09IHVuZGVmaW5lZCAmJiByZXEuYm9keS52YWx1ZXMudW5pdHMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlcy5qc29uKHsgYWZmZWN0ZWRSb3dzOiAxIH0pXG4gICAgfSBlbHNlIGlmIChyZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplLmFtb3VudCA9PSB1bmRlZmluZWQgfHwgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZS51bml0ID09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZVxuICAgICAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMuVXBkYXRlUHJvZHVjdChyZXEuYm9keS52YWx1ZXMsIHJlcS5ib2R5LmlkKVxuICAgICAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHdlaWdodEdyYW1zID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplLnVuaXQpLnRvKCdnJylcbiAgICAgICAgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZSA9IHdlaWdodEdyYW1zXG4gICAgICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy5VcGRhdGVQcm9kdWN0KHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG4gICAgICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG4gICAgfVxufSk7XG5cbnJvdXRlci5kZWxldGUoJy9kZWxldGVQcm9kdWN0JywgKHJlcTogYW55LCByZXM6IGFueSkgPT4ge1xuICAgIHN0b3Jlcy5kZWxldGVQcm9kdWN0KHJlcS5ib2R5WzBdKVxuICAgIHN0b3Jlcy5kZWxldGVJbnB1dChyZXEuYm9keVswXSlcbiAgICByZXMuanNvbignc3VjY2VzcycpXG59KTtcblxucm91dGVyLmdldCgnL2FsbFByb2R1Y3RJbnB1dHMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBnZXRJbnB1dHMgPSBhd2FpdCBzdG9yZXMuc2VsZWN0QWxsSW5wdXRzKHJlcS5xdWVyeS5wcm9kdWN0X2lkKVxuICAgIHJlcy5qc29uKGdldElucHV0cylcbn0pXG5cblxucm91dGVyLnB1dCgnL3VwZGF0ZUlucHV0cycsIChyZXEsIHJlcykgPT4ge1xuXG4gICAgT2JqZWN0LnZhbHVlcyhyZXEuYm9keSkubWFwKGFzeW5jIChpOiBhbnksIG4sIGEpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZ2V0UHJvZHVjdHM6IGFueSA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtc2ZvclJlY29yZGluZyhpLmludmVudG9yeV9pdGVtX2lkKVxuICAgICAgICAgICAgY29uc3QgaW5wdXRfd2VpZ2h0ID0gY29udmVydChOdW1iZXIoaS5hbW91bnQpKS5mcm9tKGkudW5pdCkudG8oJ2cnKVxuICAgICAgICAgICAgY29uc3QgaW5wdXRfY29zdCA9IGkucHJpY2VfcGVyX2dyYW0gKiBpbnB1dF93ZWlnaHRcbiAgICAgICAgICAgIGkuaW5wdXRfd2VpZ2h0ID0gaW5wdXRfd2VpZ2h0XG4gICAgICAgICAgICBpLmlucHV0X2Nvc3QgPSBpbnB1dF9jb3N0XG4gICAgICAgICAgICBpLmNhbG9yaWVzID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2Fsb3JpZXNcbiAgICAgICAgICAgIGkudG90YWxfZmF0ID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0udG90YWxfZmF0XG4gICAgICAgICAgICBpLnNhdHVyYXRlZF9mYXQgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5zYXR1cmF0ZWRfZmF0XG4gICAgICAgICAgICBpLnRyYW5zX2ZhdCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnRyYW5zX2ZhdFxuICAgICAgICAgICAgaS5jaG9sZXN0ZXJvbCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLmNob2xlc3Rlcm9sXG4gICAgICAgICAgICBpLnNvZGl1bSA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnNvZGl1bVxuICAgICAgICAgICAgaS5jYXJib2h5ZHJhdGVzID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2FyYm9oeWRyYXRlc1xuICAgICAgICAgICAgaS5maWJlciA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLmZpYmVyXG4gICAgICAgICAgICBpLnN1Z2FyID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uc3VnYXJcbiAgICAgICAgICAgIGkuYWRkZWRfc3VnYXIgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5hZGRlZF9zdWdhclxuICAgICAgICAgICAgaS5wcm90ZWluID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0ucHJvdGVpblxuICAgICAgICAgICAgaS5jYWxjaXVtID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2FsY2l1bVxuICAgICAgICAgICAgaS5pcm9uID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uaXJvblxuICAgICAgICAgICAgaS5wb3Rhc3NpdW0gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5wb3Rhc3NpdW1cbiAgICAgICAgICAgIGkudml0YW1pbl9kID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0udml0YW1pbl9kXG4gICAgICAgICAgICBjb25zdCBpbnB1dElkID0gaS5pZFxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdF9pZCA9IGkucHJvZHVjdF9pZFxuICAgICAgICAgICAgZGVsZXRlIGkuaWRcbiAgICAgICAgICAgIGRlbGV0ZSBpLnByb2R1Y3RfaWRcbiAgICAgICAgICAgIGRlbGV0ZSBpLnByaWNlX3Blcl9ncmFtXG4gICAgICAgICAgICBkZWxldGUgaS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgZGVsZXRlIGkuYW1vdW50XG4gICAgICAgICAgICBkZWxldGUgaS51bml0XG4gICAgICAgICAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5VcGRhdGVQcm9kdWN0SW5wdXRzKGksIGlucHV0SWQpXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0TWV0YSA9IGF3YWl0IHN0b3Jlcy5pbnB1dE51dHJpdGlvbmFsSW5mb3JtYXRpb24ocHJvZHVjdF9pZClcblxuICAgICAgICAgICAgY29uc3QgbmV3UmVwbHkyID0gYXdhaXQgc3RvcmVzLmluc2VydElucHV0SXRlbU1ldGEocHJvZHVjdE1ldGFbMF0sIHByb2R1Y3RfaWQpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgYWZmZWN0ZWRSb3dzID0gMVxuICAgIHJlcy5qc29uKGFmZmVjdGVkUm93cylcblxuXG59KVxuXG5cbnJvdXRlci5kZWxldGUoJy9kZWxldGVJbnB1dHMnLCBhc3luYyAocmVxLCByZXMpID0+IHtcblxuICAgIGNvbnN0IGN1cnJlbnRfcHJvZHVjdF9pbnB1dHM6IGFueSA9IGF3YWl0IHN0b3Jlcy5kZWxldGVJbnB1dE1ldGEocmVxLmJvZHlbMF0pXG5cbiAgICByZXMuanNvbihjdXJyZW50X3Byb2R1Y3RfaW5wdXRzKVxufSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnJvdXRlci5nZXQoJy9nZXROdXRyaWVudHMvOmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgYnVzaW5lc3NfaWQgPSByZXEucGFyYW1zLmlkXG5cbiAgICBjb25zdCBnZXRQcm9kdWN0cyA9IGF3YWl0IHN0b3Jlcy5nZXRSZWNpcGVQcm9kdWN0KGJ1c2luZXNzX2lkKTtcbiAgICBnZXRQcm9kdWN0cy5tYXAoYXN5bmMgKGksIG4sIGEpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0SW5wdXRzID0gYXdhaXQgc3RvcmVzLmdldElucHV0Rm9yVXBkYXRlKGkuaWQpXG4gICAgICAgICBnZXRJbnB1dHMubWFwKGFzeW5jIChpLG4sYSk9PntcbiAgICAgICAgICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgc3RvcmVzLlVwZGF0ZVByb2R1Y3RJbnB1dHMoaSwgaS5pZClcbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgcHJvZHVjdE1ldGEgPSBhd2FpdCBzdG9yZXMuaW5wdXROdXRyaXRpb25hbEluZm9ybWF0aW9uKGkuaWQpXG4gICAgICAgIHN0b3Jlcy5pbnNlcnRJbnB1dEl0ZW1NZXRhKHByb2R1Y3RNZXRhWzBdLCBpLmlkKVxuICAgICAgICByZXR1cm4gaVxuICAgIH0pO1xuICAgIGNvbnN0IGdldFByb2R1Y3RzXzEgPSBhd2FpdCBzdG9yZXMuZ2V0UmVjaXBlUHJvZHVjdChidXNpbmVzc19pZCk7XG5cbiAgICByZXMuanNvbihnZXRQcm9kdWN0c18xKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgc3RvcmVzIGZyb20gJy4uLy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeSc7XG5cblxuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5cblxuXG5cbi8vQ2hlY2tsaXN0IFJvdXRlc1xuXG5yb3V0ZXIuZ2V0KCcvZ2V0SW52ZW50b3J5SXRlbXNGb3JEYWlseUNoZWNrbGlzdC86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBidXNpbmVzc19pZCA9IHJlcS5wYXJhbXMuaWRcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyhidXNpbmVzc19pZClcbiAgICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2luc2VydEludmVudG9yeUNoZWNrbGlzdEl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICByZXEuYm9keS5vcmRlcl9xdWFudGl0eSA9IHJlcS5ib2R5LnJlY29tbWVuZGVkX3N0b2NrX2xldmVsIC0gcmVxLmJvZHkuaW5fc3RvY2tcbiAgICBpZiAocmVxLmJvZHkub3JkZXJfcXVhbnRpdHkgPD0gMCkge1xuICAgICAgICByZXEuYm9keS5vcmRlcl9xdWFudGl0eSA9IDBcbiAgICB9XG4gICAgZGVsZXRlIHJlcS5ib2R5LnJlY29tbWVuZGVkX3N0b2NrX2xldmVsXG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBzdG9yZXMuaW5zZXJ0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMocmVxLmJvZHkpXG4gICAgcmVzLmpzb24obmV3UmVwbHkpXG59KTtcblxuXG5yb3V0ZXIuZ2V0KCcvcHVibGljTnV0cml0aW9uYWxJbmZvcm1hdGlvbi86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBidXNpbmVzc19pZCA9IHJlcS5wYXJhbXMuaWRcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5nZXROdXRyaXRpb25hbEluZm9Gb3JQdWJsaWMoYnVzaW5lc3NfaWQpXG4gICAgcmVzLmpzb24obmV3UmVwbHkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyBcblxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IHN0b3JlcyBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9JbnZlbnRvcnknO1xuaW1wb3J0IHZlcmlmeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1NlY3VyaXR5L1ZlcmlmaWNhdGlvbidcbmltcG9ydCAqIGFzIGNvbnZlcnQgZnJvbSAnY29udmVydC11bml0cydcbmltcG9ydCB7IGpzb24gfSBmcm9tICdzdHJlYW0vY29uc3VtZXJzJztcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuXG5cblxucm91dGVyLmdldCgnL2dldEludmVudG9yeUl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zdCByZXN1bHRJbnZlbnRvcnkgPSBhd2FpdCBzdG9yZXMuZ2V0SW52ZW50b3J5SXRlbXMocmVxLmNvb2tpZXMudXNlci5pZClcbiAgICByZXMuanNvbihyZXN1bHRJbnZlbnRvcnkpXG59KTtcblxucm91dGVyLnBvc3QoJy9pbnNlcnROZXdJbnZlbnRvcnlJdGVtcycsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG5cbiAgICByZXEuYm9keS5idXNpbmVzc19pZCA9IHJlcS5jb29raWVzLnVzZXIuaWRcbiAgICBjb25zdCB3ZWlnaHRHcmFtcyA9IGNvbnZlcnQocmVxLmJvZHkudG90YWxfcGFja2FnZV93ZWlnaHQudW5pdCkuZnJvbShyZXEuYm9keS50b3RhbF9wYWNrYWdlX3dlaWdodC53ZWlnaHQpLnRvKCdnJylcbiAgICByZXEuYm9keS5wcmljZV9wZXJfZ3JhbSA9IE51bWJlcihyZXEuYm9keS5wcmljZSAvIHdlaWdodEdyYW1zKS50b0ZpeGVkKDQpXG4gICAgcmVxLmJvZHkudG90YWxfcGFja2FnZV93ZWlnaHQgPSB3ZWlnaHRHcmFtc1xuICAgIGNvbnN0IGN1cnJlbnRfc3RvcmUgPSBhd2FpdCBzdG9yZXMuaW5zZXJ0SW52ZW50b3J5SXRlbShyZXEuYm9keSlcbiAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxufSk7XG5cbnJvdXRlci5wdXQoJy91cGRhdGVJbnZlbnRvcnlJdGVtJyxcbiAgICBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhd2FpdCBzdG9yZXMuZ2V0SW52ZW50b3J5SXRlbXNmb3JSZWNvcmRpbmcocmVxLmJvZHkuaWQpXG4gICAgICAgIGlmIChyZXEuYm9keS52YWx1ZXMudG90YWxfcGFja2FnZV93ZWlnaHQgJiYgIXJlcS5ib2R5LnZhbHVlcy5wcmljZSkge1xuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0R3JhbXMgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy50b3RhbF9wYWNrYWdlX3dlaWdodC51bml0KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy50b3RhbF9wYWNrYWdlX3dlaWdodC53ZWlnaHQpLnRvKCdnJylcbiAgICAgICAgICAgIGNvbnN0IHByaWNlX3Blcl9ncmFtID0gTnVtYmVyKGdldFByb2R1Y3RzWzBdLnByaWNlIC8gd2VpZ2h0R3JhbXMpXG4gICAgICAgICAgICByZXEuYm9keS52YWx1ZXMucHJpY2VfcGVyX2dyYW0gPSBOdW1iZXIocHJpY2VfcGVyX2dyYW0pLnRvRml4ZWQoNClcbiAgICAgICAgICAgIHJlcS5ib2R5LnZhbHVlcy50b3RhbF9wYWNrYWdlX3dlaWdodCA9IHdlaWdodEdyYW1zXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMudXBkYXRlSW52ZW50b3J5SXRlbShyZXEuYm9keS52YWx1ZXMsIHJlcS5ib2R5LmlkKVxuICAgICAgICAgICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcbiAgICAgICAgfSBlbHNlIGlmICghcmVxLmJvZHkudmFsdWVzLnRvdGFsX3BhY2thZ2Vfd2VpZ2h0ICYmIHJlcS5ib2R5LnZhbHVlcy5wcmljZSkge1xuICAgICAgICAgICAgY29uc3QgcHJpY2VfcGVyX2dyYW0gPSBOdW1iZXIocmVxLmJvZHkudmFsdWVzLnByaWNlIC8gZ2V0UHJvZHVjdHNbMF0udG90YWxfcGFja2FnZV93ZWlnaHQpXG4gICAgICAgICAgICByZXEuYm9keS52YWx1ZXMucHJpY2VfcGVyX2dyYW0gPSBOdW1iZXIocHJpY2VfcGVyX2dyYW0pLnRvRml4ZWQoNClcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy51cGRhdGVJbnZlbnRvcnlJdGVtKHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG4gICAgICAgICAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLnVwZGF0ZUludmVudG9yeUl0ZW0ocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICAgICAgICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG4gICAgICAgIH1cblxuICAgIH0pXG5cblxuXG5cbnJvdXRlci5kZWxldGUoJy9kZWxldGVJbnZlbnRvcnlJdGVtcycsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLmRlbGV0ZUludmVudG9yeUl0ZW0ocmVxLmJvZHkpXG4gICAgcmVzLmpzb24oY3VycmVudF9zdG9yZS5hZmZlY3RlZFJvd3MpXG59KTtcblxuXG5yb3V0ZXIucHV0KCcvYWRkTnV0cml0aW9uSW5mb3JtYXRpb24nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBkaXZpZGVyID0gMSAvIHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUuYW1vdW50XG4gICAgcmVxLmJvZHkudmFsdWVzLmNhbG9yaWVzID0gcmVxLmJvZHkudmFsdWVzLmNhbG9yaWVzLmFtb3VudCAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMudG90YWxfZmF0ID0gKChjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy50b3RhbF9mYXQuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy50b3RhbF9mYXQudW5pdCkudG8oJ2cnKSkgKiBkaXZpZGVyKVxuICAgIHJlcS5ib2R5LnZhbHVlcy5zYXR1cmF0ZWRfZmF0ID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc2F0dXJhdGVkX2ZhdC5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnNhdHVyYXRlZF9mYXQudW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMudHJhbnNfZmF0ID0gY29udmVydChyZXEuYm9keS52YWx1ZXMudHJhbnNfZmF0LmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMudHJhbnNfZmF0LnVuaXQpLnRvKCdnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLmNob2xlc3Rlcm9sID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuY2hvbGVzdGVyb2wuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5jaG9sZXN0ZXJvbC51bml0KS50bygnbWcnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuc29kaXVtID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc29kaXVtLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuc29kaXVtLnVuaXQpLnRvKCdtZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5jYXJib2h5ZHJhdGVzID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuY2FyYm9oeWRyYXRlcy5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmNhcmJvaHlkcmF0ZXMudW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuZmliZXIgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5maWJlci5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmZpYmVyLnVuaXQpLnRvKCdnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLnN1Z2FyID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc3VnYXIuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5zdWdhci51bml0KS50bygnZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5wcm90ZWluID0gY29udmVydChyZXEuYm9keS52YWx1ZXMucHJvdGVpbi5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnByb3RlaW4udW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuY2FsY2l1bSA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLmNhbGNpdW0uYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5jYWxjaXVtLnVuaXQpLnRvKCdtZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5pcm9uID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuaXJvbi5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmlyb24udW5pdCkudG8oJ21nJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLnBvdGFzc2l1bSA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLnBvdGFzc2l1bS5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnBvdGFzc2l1bS51bml0KS50bygnbWcnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuYWRkZWRfc3VnYXIgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5hZGRlZF9zdWdhci5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmFkZGVkX3N1Z2FyLnVuaXQpLnRvKCdnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLnZpdGFtaW5fZCA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLnZpdGFtaW5fZC5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnZpdGFtaW5fZC51bml0KS50bygnbWNnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLmFsbGVyZ2llcyA9IEpTT04uc3RyaW5naWZ5KHJlcS5ib2R5LnZhbHVlcy5hbGxlcmdpZXMpXG4gICAgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZSA9IHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUuYW1vdW50XG4gICAgY29uc3QgYWRkZWROZXdOdXRyaXRpb25JdGVtID0gYXdhaXQgc3RvcmVzLmluc2VydE51dHJpdGlvbmFsSW5mb3JtYXRpb24ocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICByZXMuanNvbihhZGRlZE5ld051dHJpdGlvbkl0ZW0pXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuaW1wb3J0ICogYXMgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCB7IHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uLCBjaGVja0FjY291bnQgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luJ1xuaW1wb3J0ICogYXMgY29udmVydCBmcm9tICdjb252ZXJ0LXVuaXRzJ1xuaW1wb3J0IE51dHJpdGlvbiBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9OdXRyaXRpb25EZXRhaWxzLnRzJ1xuaW1wb3J0IHN0b3JlcyBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9JbnZlbnRvcnknO1xuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5jb25zdCBjaGVja0NyZWRlbnRpYWxzID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG5cbiAgY29uc3QgY2hlY2tfREJfYWdhaW5zdF9lbWFpbDogYW55W10gPSBhd2FpdCBjaGVja0FjY291bnQocmVxLmJvZHkuZW1haWwpXG4gIGlmIChjaGVja19EQl9hZ2FpbnN0X2VtYWlsLmxlbmd0aCA9PT0gMCkge1xuICAgIG5leHQoKVxuICB9IGVsc2UgaWYgKGNoZWNrX0RCX2FnYWluc3RfZW1haWwubGVuZ3RoID4gMCkge1xuICAgIHJlcy5qc29uKHRydWUpXG4gIH1cbn1cblxuXG5yb3V0ZXIucG9zdCgnL3JlZ2lzdHJhdGlvbicsIGNoZWNrQ3JlZGVudGlhbHMsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXG4gIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdFN5bmMoTnVtYmVyKHByb2Nlc3MuZW52LlNBTFRfUk9VTkQpKTtcbiAgY29uc3QgaGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoU3luYyhyZXEuYm9keS5jb25maXJtX3Bhc3N3b3JkLCBzYWx0KTtcbiAgZGVsZXRlIHJlcS5ib2R5LmNvbmZpcm1fcGFzc3dvcmRcbiAgdmFyIHRva2VuID0gand0LnNpZ24oeyB1c2VyX25hbWU6IHJlcS5ib2R5LmVtYWlsLCBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSwgcHJvY2Vzcy5lbnYuQkVBUkVSX1BSSVZBVEUpO1xuICByZXEuYm9keS5wYXNzd29yZCA9IGhhc2hcbiAgcmVxLmJvZHkuYWNjZXNzX3Rva2VuID0gdG9rZW5cbiAgcmVxLmJvZHkucGluID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KSArIDExMTExMVxuICAvLyBTaWduVXBNZXNzYWdlKHJlcS5ib2R5LmJ1c2luZXNzX25hbWUsIHJlcS5ib2R5LnBob25lX251bWJlciwgcmVxLmJvZHkuZW1haWwpXG4gIHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uKHJlcS5ib2R5KVxuICByZXMuanNvbihmYWxzZSlcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2JvbGF0ZXN0aW5ncm91dGUnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgUHJvY2Vzc2luZ0hlaWdodCA9IGNvbnZlcnQoTnVtYmVyKHJlcS5ib2R5LmhlaWdodC5mZWV0KSkuZnJvbSgnZnQnKS50bygnaW4nKVxuICBjb25zdCBQcm9jZXNzZWRIZWlnaHQgPSBQcm9jZXNzaW5nSGVpZ2h0ICsgTnVtYmVyKHJlcS5ib2R5LmhlaWdodC5pbmNoZXMpXG4gIGNvbnN0IEhlaWdodFNxdWFyZWQgPSBNYXRoLnBvdyhQcm9jZXNzZWRIZWlnaHQsIDIpXG4gIGNvbnN0IHdlaWdodCA9IHJlcS5ib2R5LndlaWdodFxuICBjb25zdCBQZXJzb25hbEhlYWx0aCA9IGFzeW5jICgpID0+IHtcblxuICAgIGNvbnN0IENhbGN1bGF0ZWRCTUkgPSAod2VpZ2h0IC8gSGVpZ2h0U3F1YXJlZCAqIDcwMykudG9GaXhlZCgxKVxuXG4gICAgY29uc3QgU3RyaW5nQk1JSW5kaWNhdG9yID0gKCkgPT4ge1xuICAgICAgaWYgKE51bWJlcihDYWxjdWxhdGVkQk1JKSA8PSAxOC41KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdHVzOiAnVW5kZXJ3ZWlnaHQnLFxuICAgICAgICAgIGNvbG9yOiAnI0U4REFDMidcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE51bWJlcihDYWxjdWxhdGVkQk1JKSA+PSAxOC41ICYmIE51bWJlcihDYWxjdWxhdGVkQk1JKSA8PSAyNC45KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdHVzOiAnTm9ybWFsJyxcbiAgICAgICAgICBjb2xvcjogJyM4Q0IxQTgnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPj0gMjUuMCAmJiBOdW1iZXIoQ2FsY3VsYXRlZEJNSSkgPD0gMjkuOSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXR1czogJ092ZXJ3ZWlnaHQnLFxuICAgICAgICAgIGNvbG9yOiAnI0U1NjUyRSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKE51bWJlcihDYWxjdWxhdGVkQk1JKSA+PSAzMC4wKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RhdHVzOiAnT2Jlc2UnLFxuICAgICAgICAgIGNvbG9yOiAnI0JDNEM1OCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBjb25zdCBCTVIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBXZWlnaHRJbktpbG9HcmFtcyA9IGNvbnZlcnQocmVxLmJvZHkud2VpZ2h0KS5mcm9tKCdsYicpLnRvKCdrZycpXG4gICAgICBjb25zdCBIZWlnaHRJbkNlbnRpbWV0ZXJzID0gY29udmVydChQcm9jZXNzZWRIZWlnaHQpLmZyb20oJ2luJykudG8oJ2NtJylcbiAgICAgIHN3aXRjaCAocmVxLmJvZHkuZ2VuZGVyKSB7XG4gICAgICAgIGNhc2UgJ21hbGUnOlxuICAgICAgICAgIGNvbnN0IE1hbGUgPSAoOS45OSAqIFdlaWdodEluS2lsb0dyYW1zKSArICgoNi4yNSAqIEhlaWdodEluQ2VudGltZXRlcnMpIC0gKDQuOTIgKiByZXEuYm9keS5hZ2UpKSArIDVcbiAgICAgICAgICByZXR1cm4gTWFsZS50b0ZpeGVkKClcbiAgICAgICAgY2FzZSAnZmVtYWxlJzpcbiAgICAgICAgICBjb25zdCBGZW1hbGUgPSAoOS45OSAqIFdlaWdodEluS2lsb0dyYW1zKSArICgoNi4yNSAqIEhlaWdodEluQ2VudGltZXRlcnMpIC0gKDQuOTIgKiByZXEuYm9keS5hZ2UpKSAtIDE2MVxuICAgICAgICAgIHJldHVybiBGZW1hbGUudG9GaXhlZCgpXG4gICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgQ2Fsb3JpZXMgPSAoKSA9PiB7XG4gICAgICBzd2l0Y2ggKHJlcS5ib2R5LmxpZmVfc3R5bGUpIHtcbiAgICAgICAgY2FzZSAnU2VkZW50YXJ5JzpcbiAgICAgICAgICBjb25zdCBTTVVMID0gMS4yO1xuICAgICAgICAgIHJldHVybiBOdW1iZXIoQk1SKCkpICogU01VTFxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0xpZ2h0IGFjdGl2aXR5JzpcbiAgICAgICAgICBjb25zdCBMQU1VTCA9IDEuMzc1XG4gICAgICAgICAgcmV0dXJuIE51bWJlcihCTVIoKSkgKiBMQU1VTFxuXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTW9kZXJhdGVseSBhY3RpdmUnOlxuICAgICAgICAgIGNvbnN0IE1BTVVMID0gMS41NVxuICAgICAgICAgIHJldHVybiBOdW1iZXIoQk1SKCkpICogTUFNVUxcblxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1ZlcnkgYWN0aXZlJzpcbiAgICAgICAgICBjb25zdCBWQU1VTCA9IDEuNzI1XG4gICAgICAgICAgcmV0dXJuIE51bWJlcihCTVIoKSkgKiBWQU1VTFxuXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRXh0cmEgYWN0aXZlJzpcbiAgICAgICAgICBjb25zdCBFQU1VTCA9IDEuOVxuICAgICAgICAgIHJldHVybiBOdW1iZXIoQk1SKCkpICogRUFNVUxcblxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgQ2FwdHVyZWRBZ2UgPSByZXEuYm9keS5hZ2VcblxuICAgIGNvbnN0IEFHRSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGRlbGV0ZSByZXEuYm9keS5oZWlnaHRcbiAgICAgIHJlcS5ib2R5LmhlaWdodCA9IFByb2Nlc3NlZEhlaWdodFxuICAgICAgYXdhaXQgTnV0cml0aW9uLkJvTEFQdWJsaWNIZWFsdGhBc3Nlc3NtZW50KHJlcS5ib2R5KVxuICAgICAgaWYgKHJlcS5ib2R5LmFnZSA8PSA3NSkge1xuICAgICAgICByZXR1cm4gcmVxLmJvZHkuYWdlXG4gICAgICB9IGVsc2UgaWYgKHJlcS5ib2R5LmFnZSA+IDc1KSB7XG4gICAgICAgIHJldHVybiByZXEuYm9keS5hZ2UgPSA3NVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBBR0UoKVxuXG4gICAgY29uc3QgUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2UgPSBhd2FpdCBOdXRyaXRpb24uUGVyc29uYWxOdXRyaXRpb25EZXRhaWxzKHJlcS5ib2R5LmdlbmRlciwgcmVxLmJvZHkuYWdlKVxuXG4gICAgY29uc3QgTnV0cml0aW9uUmVxdWlyZW1lbnQgPSAoKSA9PiB7XG4gICAgICBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5jYWxvcmllcyA9IENhbG9yaWVzKCk7XG4gICAgICBsZXQgdGVzdGluZ2RhdGE6IGFueSA9IHt9XG4gICAgICBjb25zdCByZXBseUFycmF5OiBhbnkgPSBbXVxuICAgICAgdGVzdGluZ2RhdGFbJ2FnZSddID0gQ2FwdHVyZWRBZ2VcbiAgICAgIHRlc3RpbmdkYXRhWydnZW5kZXInXSA9IFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLmdlbmRlclxuICAgICAgdGVzdGluZ2RhdGFbJ2xpZmVzdHlsZSddID0gcmVxLmJvZHkubGlmZV9zdHlsZVxuXG4gICAgICB0ZXN0aW5nZGF0YVsnQ2Fsb3JpZXMnXSA9XG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5jYWxvcmllcy50b0ZpeGVkKCksXG4gICAgICAgIHVuaXQ6ICdLY2FsJyxcbiAgICAgICAgZHY6IDIwMDAsXG4gICAgICAgIG1jOiA2M1xuICAgICAgfVxuICAgICAgdGVzdGluZ2RhdGFbJ1RvdGFsIEZhdCddID1cbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IChSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXVsndG90YWxfZmF0J10gKiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5jYWxvcmllcyAvIDkpLnRvRml4ZWQoKSxcbiAgICAgICAgdW5pdDogJ0cnLFxuICAgICAgICBkdjogNzgsXG4gICAgICAgIG1jOiA2M1xuICAgICAgfVxuICAgICAgdGVzdGluZ2RhdGFbJ1NhdHVyYXRlZCBGYXQnXSA9IHtcbiAgICAgICAgdmFsdWU6IChSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXVsnc2F0dXJhdGVkX2ZhdCddICogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uY2Fsb3JpZXMgLyA5KS50b0ZpeGVkKCksXG4gICAgICAgIHVuaXQ6ICdHJyxcbiAgICAgICAgZHY6IDIwLFxuICAgICAgICBtYzogMjRcbiAgICAgIH1cbiAgICAgIHRlc3RpbmdkYXRhWydUcmFucyBGYXQnXSA9IHtcbiAgICAgICAgdmFsdWU6IChSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXVsndHJhbnNfZmF0J10gKiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5jYWxvcmllcyAvIDkpLnRvRml4ZWQoKSxcbiAgICAgICAgdW5pdDogJ0cnLFxuICAgICAgICBkdjogMjAsXG4gICAgICAgIG1jOiAyNFxuICAgICAgfVxuICAgICAgdGVzdGluZ2RhdGFbJ0Nob2xlc3Rlcm9sJ10gPSB7XG4gICAgICAgIHZhbHVlOiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5jaG9sZXN0ZXJvbCxcbiAgICAgICAgdW5pdDogJ0cnLFxuICAgICAgICBkdjogMzAwLFxuICAgICAgICBtYzogNTI1XG4gICAgICB9XG4gICAgICB0ZXN0aW5nZGF0YVsnU29kaXVtJ10gPSB7XG4gICAgICAgIHZhbHVlOiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5zb2RpdW0sXG4gICAgICAgIHVuaXQ6IFwiTUdcIixcbiAgICAgICAgZHY6IDIzMDAsXG4gICAgICAgIG1jOiAyMDcwXG4gICAgICB9XG4gICAgICB0ZXN0aW5nZGF0YVsnQ2FyYm9oeWRyYXRlcyddID0ge1xuICAgICAgICB2YWx1ZTogKFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdWydjYXJib2h5ZHJhdGUnXSAqIFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLmNhbG9yaWVzIC8gNCkudG9GaXhlZCgpLFxuICAgICAgICB1bml0OiAnRycsXG4gICAgICAgIGR2OiAyNzUsXG4gICAgICAgIG1jOiAxNThcbiAgICAgIH1cbiAgICAgIHRlc3RpbmdkYXRhWydGaWJlciddID0ge1xuICAgICAgICB2YWx1ZTogKFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdWydkaWV0YXJ5X2ZpYmVyJ10gKiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5jYWxvcmllcykudG9GaXhlZCgpLFxuICAgICAgICB1bml0OiAnRycsXG4gICAgICB9XG4gICAgICB0ZXN0aW5nZGF0YVsnQWRkZWQgU3VnYXInXSA9IHtcbiAgICAgICAgdmFsdWU6IChSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXVsnYWRkZWRfc3VnYXJzX3BlcmNlbnRfb2ZfY2Fsb3JpZXMnXSAqIFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLmNhbG9yaWVzIC8gNCkudG9GaXhlZCgpLFxuICAgICAgICB1bml0OiAnRycsXG4gICAgICAgIGR2OiA1MCxcbiAgICAgICAgbWM6IDQxXG4gICAgICB9XG4gICAgICB0ZXN0aW5nZGF0YVsnUHJvdGVpbiddID0ge1xuICAgICAgICB2YWx1ZTogKFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdWydwcm90ZWluJ10gKiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5jYWxvcmllcyAvIDQpLnRvRml4ZWQoKSxcbiAgICAgICAgdW5pdDogXCJHXCIsXG4gICAgICAgIGR2OiA1MCxcbiAgICAgICAgbWM6IDM2XG4gICAgICB9XG4gICAgICB0ZXN0aW5nZGF0YVsnVml0YW1pbiBEJ10gPSB7XG4gICAgICAgIHZhbHVlOiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS52aXRhbWluX2QsXG4gICAgICAgIHVuaXQ6ICdNQ0cnLFxuICAgICAgICBkdjogMjAsXG4gICAgICAgIG1jOiAyXG4gICAgICB9XG4gICAgICB0ZXN0aW5nZGF0YVsnQ2FsY2l1bSddID0ge1xuICAgICAgICB2YWx1ZTogUmV0cmlldmVOdXRyaWVudHNGcm9tRGF0YWJhc2VbMF0uY2FsY2l1bSxcbiAgICAgICAgdW5pdDogJ01HJyxcbiAgICAgICAgZHY6IDEzMDAsXG4gICAgICAgIG1jOiAyODBcbiAgICAgIH1cbiAgICAgIHRlc3RpbmdkYXRhWydJcm9uJ10gPSB7XG4gICAgICAgIHZhbHVlOiBSZXRyaWV2ZU51dHJpZW50c0Zyb21EYXRhYmFzZVswXS5pcm9uLFxuICAgICAgICB1bml0OiAnTUcnLFxuICAgICAgICBkdjogMTgsXG4gICAgICAgIG1jOiA3LjVcbiAgICAgIH1cbiAgICAgIHRlc3RpbmdkYXRhWydQb3Rhc3NpdW0nXSA9IHtcbiAgICAgICAgdmFsdWU6IFJldHJpZXZlTnV0cmllbnRzRnJvbURhdGFiYXNlWzBdLnBvdGFzc2l1bSxcbiAgICAgICAgdW5pdDogJ01HJyxcbiAgICAgICAgZHY6IDQ3MDAsXG4gICAgICAgIG1jOiA5ODBcbiAgICAgIH1cblxuXG4gICAgICBmb3IgKGxldCBpdGVtcyBpbiB0ZXN0aW5nZGF0YSkge1xuICAgICAgICByZXBseUFycmF5LnB1c2goe1xuICAgICAgICAgIE5hbWU6IGl0ZW1zLFxuICAgICAgICAgIERpc3RpbmN0OiB0ZXN0aW5nZGF0YVtgJHtpdGVtc31gXS52YWx1ZSxcbiAgICAgICAgICBVbml0OiB0ZXN0aW5nZGF0YVtgJHtpdGVtc31gXS51bml0LFxuICAgICAgICAgIERWOiB0ZXN0aW5nZGF0YVtgJHtpdGVtc31gXS5kdixcbiAgICAgICAgICBNY0RvbmFsZHNCaWdCcmVha2Zhc3Q6IHRlc3RpbmdkYXRhW2Ake2l0ZW1zfWBdLm1jXG4gICAgICAgIH0pXG4gICAgICB9O1xuXG5cblxuICAgICAgcmV0dXJuIFtbdGVzdGluZ2RhdGFdLCByZXBseUFycmF5XVxuICAgIH07XG4gICAgLy8gY29uc29sZS5sb2coQ2FsY3VsYXRlZEJNSSwgU3RyaW5nQk1JSW5kaWNhdG9yKCksIElkZWFsV2VpZ2h0LCBCTVIoKSwgTnV0cml0aW9uUmVxdWlyZW1lbnQoKSlcbiAgICByZXR1cm4gW0NhbGN1bGF0ZWRCTUksIFN0cmluZ0JNSUluZGljYXRvcigpLCBJZGVhbFdlaWdodCwgQk1SKCksIE51dHJpdGlvblJlcXVpcmVtZW50KCldXG4gIH1cbiAgY29uc3QgcHVzaERhdGFUb0Zyb250RW5kID0gYXdhaXQgUGVyc29uYWxIZWFsdGgoKVxuICAvLyBjb25zb2xlLmxvZyhwdXNoRGF0YVRvRnJvbnRFbmQpXG4gIHJlcy5qc29uKHB1c2hEYXRhVG9Gcm9udEVuZClcbn0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBkYXRhYmFzZV9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1N1cHBvcnRfRGF0YWJhc2UnO1xuaW1wb3J0IHsgTWVzc2FnZVJlc3BvbnNlRnJvbUhvbWVQYWdlIH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLnBvc3QoJy9zdXBwb3J0X21lc3NhZ2UnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgLy8gIE1lc3NhZ2VSZXNwb25zZUZyb21Ib21lUGFnZShyZXEuYm9keS5maXJzdF9uYW1lLCByZXEuYm9keS5waG9uZV9udW1iZXIscmVxLmJvZHkuZW1haWwpXG4gIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgZGF0YWJhc2VfcXVlcnkuaW5zZXJ0TWVzc2FnZShyZXEuYm9keSlcbiAgcmVzLmpzb24oJ2hlZWxvJylcbn0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgIiwiaW1wb3J0ICogYXMgbXlzcWwgZnJvbSAnbXlzcWwyJztcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5pbXBvcnQgeyBlbnYgfSBmcm9tICdub2RlOnByb2Nlc3MnO1xuXG5cblxuXG5leHBvcnQgY29uc3QgbXlzcWxBY2Nlc3MgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgICB1c2VyOnByb2Nlc3MuZW52Lk1ZU1FMX1VTRVIsXG4gICAgcGFzc3dvcmQ6cHJvY2Vzcy5lbnYuTVlTUUxfUEFTU1dPUkQsXG4gICAgaG9zdDpwcm9jZXNzLmVudi5NWVNRTF9IT1NULFxuICAgIHBvcnQ6IE51bWJlcihwcm9jZXNzLmVudi5NWVNRTF9QT1JUKSxcblxuXG5cbiAgICAvLyBzb2NrZXRQYXRoOnByb2Nlc3MuZW52LklOU1RBTkNFX1VOSVhfU09DS0VUXG5cbn0pXG5cbmV4cG9ydCBjb25zdCBRdWVyeSA9IChxdWVyeTpzdHJpbmcsdmFsdWVzPzpBcnJheTxzdHJpbmd8bnVtYmVyPik9PntcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QXJyYXk8YW55Pj4oKHJlc29sdmUscmVqZWN0KT0+e1xuICAgICAgICBteXNxbEFjY2Vzcy5xdWVyeShxdWVyeSx2YWx1ZXMsKGVycixyZXN1bHRzOmFueSkgPT57XG4gICAgICAgICAgICBpZihlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuIGV4cG9ydCBsZXQgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgU0VUID8nLCB2YWx1ZXMpO1xuIFxuIGV4cG9ydCBsZXQgY2hlY2tBY2NvdW50ID0gYXN5bmMgKGVtYWlsOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIGVtYWlsID0gPycsW2VtYWlsXSlcblxuXG5cblxuXG5cbiIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL0NvbmVjdGlvblwiO1xuXG5cbmNvbnN0IGdldENsaWVudEluZm9ybWF0aW9uID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgd2hlcmUgaWQgPSA/JyxbaWRdKTtcbmNvbnN0IHVwZGF0ZVBSSU5DSVBMRSA9IGFzeW5jIChpbmZvLGlkKT0+UXVlcnkoJ1VQREFURSBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgU0VUID8gV0hFUkUgaWQgPSA/JyxbaW5mbyxpZF0pXG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRDbGllbnRJbmZvcm1hdGlvbixcbiAgICB1cGRhdGVQUklOQ0lQTEUsXG59IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuLy8gQ3JlYXRlIFN0b3JlIFxuY29uc3QgY3JlYXRlU3RvcmUgPSBhc3luYyAoc3RvcmU6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEludmVudG9yeS5TdG9yZSBTRVQgPycsIHN0b3JlKTtcbmNvbnN0IHNlbGVjdFN0b3JlID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBJbnZlbnRvcnkuU3RvcmUgV0hFUkUgPzsnLCBbaWRdKTtcblxuXG4vL0NyZWF0ZSBhbmQgQWRkIEludmVudG9yeSB0byBQcmluY2lwbGUgRGF0YWJhc2VcbmNvbnN0IGluc2VydEludmVudG9yeUl0ZW0gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFNFVCA/JywgdmFsdWVzKTtcbmNvbnN0IGdldEludmVudG9yeUl0ZW1zID0gYXN5bmMgKGJ1c2luZXNzX2lkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFdIRVJFIGJ1c2luZXNzX2lkID0gPycsIFtidXNpbmVzc19pZF0pO1xuY29uc3QgZGVsZXRlSW52ZW50b3J5SXRlbSA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgV0hFUkUgPycsIFtpZF0pO1xuY29uc3QgdXBkYXRlSW52ZW50b3J5SXRlbSA9IGFzeW5jICh2YWx1ZXMsIGlkKSA9PiBRdWVyeSgnVVBEQVRFIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgU0VUID8gV0hFUkUgaWQgPSA/JywgW3ZhbHVlcywgaWRdKTtcbmNvbnN0IGdldEludmVudG9yeUNoZWNrbGlzdEl0ZW1zID0gYXN5bmMgKGJ1c2luZXNzX2lkKSA9PiBRdWVyeSgnU0VMRUNUIGlkLGNhdGVnb3J5LHJlY29tbWVuZGVkX3N0b2NrX2xldmVsLGJyYW5kLHN1cHBsaWVyLGRlc2NyaXB0aW9uIEZST00gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBXSEVSRSBidXNpbmVzc19pZCA9ID8gT1JERVIgQlkgY2F0ZWdvcnknLCBbYnVzaW5lc3NfaWRdKTtcbmNvbnN0IGluc2VydEludmVudG9yeUNoZWNrbGlzdEl0ZW1zID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QgU0VUID8nLCB2YWx1ZXMpO1xuY29uc3QgZ2V0UGhvbmVOdW1iZXJzID0gYXN5bmMgKGJ1c2luZXNzX2lkKSA9PiBRdWVyeSgnU0VMRUNUIHBob25lX251bWJlcixidXNpbmVzc19uYW1lIEZST00gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIGlkID0gODAnLCBbYnVzaW5lc3NfaWRdKTtcbmNvbnN0IGdldEludmVudG9yeVJlZmVyZW5jZSA9IGFzeW5jIChidXNpbmVzc19pZCwgZGF0ZV9vZl9hdWRpdCkgPT4gUXVlcnkoYFNFTEVDVCBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC4qLCBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmJyYW5kLEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuZGVzY3JpcHRpb24sSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5icmFuZCxJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmNhdGVnb3J5LEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMucmVjb21tZW5kZWRfc3RvY2tfbGV2ZWwsIChJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnByaWNlICogSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3Qub3JkZXJfcXVhbnRpdHkpIGFzIHByaWNlLEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmRhdGVfb2ZfYXVkaXQgRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdCBKT0lOIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgT04gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5pZCA9IEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmludmVudG9yeV9pdGVtX2lkIFdIRVJFIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmJ1c2luZXNzX2lkID0gJHtidXNpbmVzc19pZH0gYW5kIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmRhdGVfb2ZfYXVkaXQgPSAnJHtkYXRlX29mX2F1ZGl0fScgIE9SREVSIEJZIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmRhdGVfb2ZfYXVkaXQ7YCwgW2J1c2luZXNzX2lkLCBkYXRlX29mX2F1ZGl0XSk7XG5jb25zdCBkZWxldGVJbnZlbnRvcnlBdWRpdEl0ZW0gPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdCBXSEVSRSA/JywgW2lkXSk7XG5jb25zdCB1cGRhdGVJbnZlbnRvcnlBdWRpdEl0ZW0gPSBhc3luYyAodmFsdWVzLCBpZCkgPT4gUXVlcnkoJ1VQREFURSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbdmFsdWVzLCBpZF0pO1xuY29uc3Qgc2VsZWN0VW5pcXVlSW52ZW50b3J5UGVyaW9kID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnU0VMRUNUIGRhdGVfb2ZfYXVkaXQsYXVkaXRfcmVmZXJlbmNlX251bWJlciBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0IFdIRVJFIGJ1c2luZXNzX2lkID0gPycsW2lkXSk7XG5jb25zdCBpbnNlcnRQcm9kdWN0UmVjaXBlTmFtZSA9IGFzeW5jICh2YWx1ZXMpID0+IFF1ZXJ5KCdJTlNFUlQgUmVjaXBlLlByb2R1Y3RzIFNFVCA/JywgW3ZhbHVlc10pXG5jb25zdCB1cERhdGVQcm9kdWN0UmVjaXBlQ29zdCA9IGFzeW5jICh2YWx1ZXMpID0+IFF1ZXJ5KCdJTlNFUlQgUmVjaXBlLlByb2R1Y3RzIFNFVCA/JyxbdmFsdWVzXSlcbmNvbnN0IGdldFJlY2lwZVByb2R1Y3QgPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFJlY2lwZS5Qcm9kdWN0cyBXSEVSRSBidXNpbmVzc19pZCA9ID8nLCBbaWRdKVxuY29uc3QgZ2V0SW52ZW50b3J5SXRlbXNmb3JTZWxlY3QgPSBhc3luYyhpZCkgPT4gUXVlcnkoJ3NlbGVjdCBpZCAsZGVzY3JpcHRpb24sY2F0ZWdvcnksdG90YWxfcGFja2FnZV93ZWlnaHQscHJpY2VfcGVyX2dyYW0gZnJvbSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIHdoZXJlIGJ1c2luZXNzX2lkID0gPyBPUkRFUiBCWSBjYXRlZ29yeScsIFtpZF0pXG5jb25zdCBnZXRJbnZlbnRvcnlJdGVtc2ZvclJlY29yZGluZyA9IGFzeW5jKGlkKSA9PiBRdWVyeSgnc2VsZWN0ICogZnJvbSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIHdoZXJlIGlkID0gPycsIFtpZF0pXG5jb25zdCBpbnNlcnRJbmdyZWRpZW50cyA9IGFzeW5jKHZhbHVlcyxwcm9kdWN0X2lkKSA9PiBRdWVyeSgnSU5TRVJUIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyBTRVQgPyAgJywgW3ZhbHVlcyxwcm9kdWN0X2lkXSlcbmNvbnN0IHN1bU9mQWxsSW5ncmVkaWVudHMgPSBhc3luYyhwcm9kdWN0SWQpID0+UXVlcnkoJ3NlbGVjdCBzdW0oaW5wdXRfY29zdCkgZnJvbSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgd2hlcmUgcHJvZHVjdF9pZCA9ID8nLFtwcm9kdWN0SWRdKVxuY29uc3QgaW5zZXJ0SW5wdXRJdGVtTWV0YSA9IGFzeW5jKHZhbHVlcyxpZCkgPT4gUXVlcnkoJ1VQREFURSBSZWNpcGUuUHJvZHVjdHMgU0VUID8gV0hFUkUgaWQgPSA/JyxbdmFsdWVzLGlkXSlcbmNvbnN0IGdldEluZ3JlZGllbnRDb3VudCA9IGFzeW5jKGlkKSA9PiBRdWVyeSgnU0VMRUNUIENPVU5UKGludmVudG9yeV9pdGVtX2lkKSBGUk9NIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyBXSEVSRSBwcm9kdWN0X2lkID0gPzsnLFtpZF0pXG5jb25zdCB0b3RhbElucHV0V2VpZ2h0ID0gYXN5bmMocHJvZHVjdElkKSA9PlF1ZXJ5KCdzZWxlY3Qgc3VtKGlucHV0X3dlaWdodCkgZnJvbSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgd2hlcmUgcHJvZHVjdF9pZCA9ID8nLFtwcm9kdWN0SWRdKVxuY29uc3QgZGVsZXRlUHJvZHVjdCA9IGFzeW5jKGlkKSA9PlF1ZXJ5KCdERUxFVEUgRlJPTSBSZWNpcGUuUHJvZHVjdHMgV0hFUkUgaWQgPSA/JyxbaWRdKVxuY29uc3QgVXBkYXRlUHJvZHVjdCA9IGFzeW5jICh2YWx1ZXMsIGlkKSA9PiBRdWVyeSgnVVBEQVRFIFJlY2lwZS5Qcm9kdWN0cyBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbdmFsdWVzLCBpZF0pXG5jb25zdCBkZWxldGVJbnB1dCA9IGFzeW5jKHByb2R1Y3RJZCkgPT5RdWVyeSgnREVMRVRFIEZST00gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIFdIRVJFIHByb2R1Y3RfaWQgPSA/JyxbcHJvZHVjdElkXSlcbmNvbnN0IGluc2VydElucHV0SXRlbU1ldGFGdWxsID0gYXN5bmModmFsdWVzLGlkKSA9PiBRdWVyeSgnVVBEQVRFIFJlY2lwZS5Qcm9kdWN0cyBTRVQgPyBXSEVSRSBpZCA9ID8nLFt2YWx1ZXMsaWRdKVxuY29uc3Qgc2VsZWN0QWxsSW5wdXRzID0gYXN5bmMoaWQpPT5RdWVyeShgU0VMRUNUIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuZGVzY3JpcHRpb24sUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmludmVudG9yeV9pdGVtX2lkLFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pZCxSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0LFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF9jb3N0LEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMucHJpY2VfcGVyX2dyYW0sUmVjaXBlLlByb2R1Y3RfSW5wdXRzLnByb2R1Y3RfaWQgRlJPTSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgSU5ORVIgSk9JTiBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFdIRVJFIFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnZlbnRvcnlfaXRlbV9pZCA9IEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuaWQgYW5kIFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5wcm9kdWN0X2lkID0gP2AsW2lkXSlcbmNvbnN0IFVwZGF0ZVByb2R1Y3RJbnB1dHMgPSBhc3luYyh2YWx1ZXMsaWQpID0+IFF1ZXJ5KCdVUERBVEUgUmVjaXBlLlByb2R1Y3RfSW5wdXRzIFNFVCA/IFdIRVJFIGlkID0gPycsW3ZhbHVlcyxpZF0pXG5jb25zdCBkZWxldGVJbnB1dE1ldGEgPSBhc3luYyhwcm9kdWN0SWQpID0+UXVlcnkoJ0RFTEVURSBGUk9NIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyBXSEVSRSBpZCA9ID8nLFtwcm9kdWN0SWRdKVxuXG5cblxuXG5jb25zdCBpbnB1dE51dHJpdGlvbmFsSW5mb3JtYXRpb24gPSBhc3luYyAocHJvZHVjdElkKT0+XG5RdWVyeShcInNlbGVjdCBzdW0oaW5wdXRfY29zdCkgYXMgdG90YWxfY29zdCwgc3VtKGlucHV0X3dlaWdodCkgYXMgdG90YWxfd2VpZ2h0LCBDT1VOVChpbnZlbnRvcnlfaXRlbV9pZCkgYXMgdG90YWxfaW5wdXRfY291bnQsIHN1bShjYWxvcmllcykgYXMgY2Fsb3JpZXMsc3VtKHRvdGFsX2ZhdCkgYXMgdG90YWxfZmF0LHN1bShzYXR1cmF0ZWRfZmF0KSBhcyBzYXR1cmF0ZWRfZmF0LHN1bSh0cmFuc19mYXQpIGFzIHRyYW5zX2ZhdCxzdW0oY2hvbGVzdGVyb2wpIGFzIGNob2xlc3Rlcm9sLHN1bShzb2RpdW0pIGFzIHNvZGl1bSxzdW0oY2FyYm9oeWRyYXRlcykgYXMgY2FyYm9oeWRyYXRlcyxzdW0oZmliZXIpIGFzIGZpYmVyLHN1bShzdWdhcikgYXMgc3VnYXIsc3VtKGFkZGVkX3N1Z2FyKSBhcyBhZGRlZF9zdWdhcixzdW0ocHJvdGVpbikgYXMgcHJvdGVpbixzdW0oY2FsY2l1bSkgYXMgY2FsY2l1bSxzdW0oaXJvbikgYXMgaXJvbixzdW0ocG90YXNzaXVtKSBhcyBwb3Rhc3NpdW0sc3VtKHZpdGFtaW5fZCkgYXMgdml0YW1pbl9kIGZyb20gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIHdoZXJlIHByb2R1Y3RfaWQgPSA/XCIsW3Byb2R1Y3RJZF0pXG5jb25zdCBpbnNlcnROdXRyaXRpb25hbEluZm9ybWF0aW9uID0gYXN5bmMgKHZhbHVlcywgaWQpID0+IFF1ZXJ5KCdVUERBVEUgSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbdmFsdWVzLCBpZF0pXG5cbmNvbnN0IGdldElucHV0Rm9yVXBkYXRlID0gYXN5bmMgKHByb2R1Y3RJZCk9PlxuUXVlcnkoYFNFTEVDVCBcblJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pZCxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnByaWNlX3Blcl9ncmFtKSBhcyBpbnB1dF9jb3N0LFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuY2Fsb3JpZXMpIGFzIGNhbG9yaWVzLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuY2Fsb3JpZXMpIGFzIGNhbG9yaWVzLFxuICAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnRvdGFsX2ZhdCkgYXMgdG90YWxfZmF0LFxuICAgKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5zYXR1cmF0ZWRfZmF0KSBhcyBzYXR1cmF0ZWRfZmF0LFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMudHJhbnNfZmF0KSBhcyB0cmFuc19mYXQsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5jaG9sZXN0ZXJvbCkgYXMgY2hvbGVzdGVyb2wsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5zb2RpdW0pIGFzIHNvZGl1bSxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmNhcmJvaHlkcmF0ZXMpIGFzIGNhcmJvaHlkcmF0ZXMsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5maWJlcikgYXMgZmliZXIsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5zdWdhcikgYXMgc3VnYXIsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5hZGRlZF9zdWdhcikgYXMgYWRkZWRfc3VnYXIsXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5wcm90ZWluKSBhcyBwcm90ZWluLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuY2FsY2l1bSkgYXMgY2FsY2l1bSxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmlyb24pIGFzIGlyb24sXG4gKFJlY2lwZS5Qcm9kdWN0X0lucHV0cy5pbnB1dF93ZWlnaHQqSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5wb3Rhc3NpdW0pIGFzIHBvdGFzc2l1bSxcbiAoUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmlucHV0X3dlaWdodCpJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnZpdGFtaW5fZCkgYXMgdml0YW1pbl9kLFxuIChSZWNpcGUuUHJvZHVjdF9JbnB1dHMuaW5wdXRfd2VpZ2h0KkludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuYWxsZXJnaWVzKSBhcyBhbGxlcmdpZXNcbiBGUk9NIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyBJTk5FUiBKT0lOIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgXG4gV0hFUkUgUmVjaXBlLlByb2R1Y3RfSW5wdXRzLmludmVudG9yeV9pdGVtX2lkID0gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5pZCBcbiBhbmQgUmVjaXBlLlByb2R1Y3RfSW5wdXRzLnByb2R1Y3RfaWQgPSA/YCxbcHJvZHVjdElkXSk7XG5cbiBjb25zdCBnZXROdXRyaXRpb25hbEluZm9Gb3JQdWJsaWMgPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgUmVjaXBlLlByb2R1Y3RzLiosIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscy5idXNpbmVzc19uYW1lIGZyb20gUmVjaXBlLlByb2R1Y3RzIGpvaW4gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIHdoZXJlIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscy5pZCA9IFJlY2lwZS5Qcm9kdWN0cy5idXNpbmVzc19pZCBhbmQgQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzLmlkPT8nLFtpZF0pXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0SW5wdXRGb3JVcGRhdGUsXG4gICAgY3JlYXRlU3RvcmUsXG4gICAgc2VsZWN0U3RvcmUsXG4gICAgaW5zZXJ0SW52ZW50b3J5SXRlbSxcbiAgICBnZXRJbnZlbnRvcnlJdGVtcyxcbiAgICBkZWxldGVJbnZlbnRvcnlJdGVtLFxuICAgIHVwZGF0ZUludmVudG9yeUl0ZW0sXG4gICAgZ2V0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMsXG4gICAgaW5zZXJ0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMsXG4gICAgZ2V0UGhvbmVOdW1iZXJzLFxuICAgIGdldEludmVudG9yeVJlZmVyZW5jZSxcbiAgICBkZWxldGVJbnZlbnRvcnlBdWRpdEl0ZW0sXG4gICAgdXBkYXRlSW52ZW50b3J5QXVkaXRJdGVtLFxuICAgIHNlbGVjdFVuaXF1ZUludmVudG9yeVBlcmlvZCxcbiAgICBpbnNlcnROdXRyaXRpb25hbEluZm9ybWF0aW9uLFxuICAgIGluc2VydFByb2R1Y3RSZWNpcGVOYW1lLFxuICAgIGdldFJlY2lwZVByb2R1Y3QsXG4gICAgZ2V0SW52ZW50b3J5SXRlbXNmb3JTZWxlY3QsXG4gICAgZ2V0SW52ZW50b3J5SXRlbXNmb3JSZWNvcmRpbmcsXG4gICAgaW5zZXJ0SW5ncmVkaWVudHMsXG4gICAgc3VtT2ZBbGxJbmdyZWRpZW50cyxcbiAgICBpbnNlcnRJbnB1dEl0ZW1NZXRhLFxuICAgIHVwRGF0ZVByb2R1Y3RSZWNpcGVDb3N0LFxuICAgIGdldEluZ3JlZGllbnRDb3VudCxcbiAgICB0b3RhbElucHV0V2VpZ2h0LFxuICAgIGRlbGV0ZUlucHV0LFxuICAgIGRlbGV0ZVByb2R1Y3QsXG4gICAgVXBkYXRlUHJvZHVjdCxcbiAgICBpbnB1dE51dHJpdGlvbmFsSW5mb3JtYXRpb24sXG4gICAgaW5zZXJ0SW5wdXRJdGVtTWV0YUZ1bGwsXG4gICAgc2VsZWN0QWxsSW5wdXRzLFxuICAgIFVwZGF0ZVByb2R1Y3RJbnB1dHMsXG4gICAgZGVsZXRlSW5wdXRNZXRhLFxuICAgIGdldE51dHJpdGlvbmFsSW5mb0ZvclB1YmxpY1xuICAgIFxuXG5cbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCBQZXJzb25hbE51dHJpdGlvbkRldGFpbHMgPSBhc3luYyAoZ2VuZGVyLGFnZSkgPT4gUXVlcnkoJ1NlbGVjdCAqIEZyb20gTnV0cml0aW9uYWxfSXRlbV9BbmFseXRpY3MuUG9wdWxhdGlvbl9OdXRyaWVudF9JbnRha2UgV2hlcmUgZ2VuZGVyID0gPyBhbmQgYWdlID0gPycsW2dlbmRlcixhZ2VdKTtcbmNvbnN0IEJvTEFQdWJsaWNIZWFsdGhBc3Nlc3NtZW50ID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gUHVibGljX1V0aWxpdGllcy5Cb0xBX1B1YmxpY19IZWFsdGhfQXNzZXNzbWVudCBTRVQgPycsIHZhbHVlcyk7XG5cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBQZXJzb25hbE51dHJpdGlvbkRldGFpbHMsXG4gICAgQm9MQVB1YmxpY0hlYWx0aEFzc2Vzc21lbnRcblxufSIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL0NvbmVjdGlvblwiO1xuXG5cbmNvbnN0IHZlcmlmeUluZm9ybWF0aW9uID0gYXN5bmMgKGVtYWlsczogYW55KSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5Mb2dpbl9DcmVkZW50aWFscyBXSEVSRSBlbWFpbD0/JyxbZW1haWxzXSk7XG5jb25zdCB1cGRhdGVCZWFyZXJUb2tlbiA9IGFzeW5jIChiZWFyZXJfdG9rZW4saWQpPT5RdWVyeSgnVVBEQVRFIENyZWRlbnRpYWxzLkxvZ2luX0NyZWRlbnRpYWxzIFNFVCA/IFdIRVJFIGVtYWlsID0/ICcsW2JlYXJlcl90b2tlbixpZF0pXG5jb25zdCBhc3NvY2lhdGVWZXJpZmljYXRpb24gPSBhc3luYyhwaW4saWQpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscyBXSEVSRSBwaW4gPSA/IGFuZCBpZCA9ID8gJyxbcGluLGlkXSlcblxuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbi8vIGNvbnN0IGRlbGV0ZU1lc3NhZ2VzID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsIFtpZF0pO1xuLy8gY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gS0NNX0lOQy5jbGllbnRSZWdpc3RyYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuLy8gY29uc3QgaW5zZXJ0SW5zdGl0dXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5pbnN0aXR1dGlvbiBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6IGFueSwgaWQ6IGFueSkgPT4gUXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LCBpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG5cbi8vIGNvbnN0IGluc2VydFBoeXNpY2FsID0gYXN5bmMocGh5c2ljYWwgOmFueSxjbGllbnRpZDpudW1iZXIgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudF9saWZlc3R5bGUgU0VUID8nICxbcGh5c2ljYWxdKTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdmVyaWZ5SW5mb3JtYXRpb24sXG4gICAgdXBkYXRlQmVhcmVyVG9rZW4sXG4gICAgYXNzb2NpYXRlVmVyaWZpY2F0aW9uXG5cbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCB2aWV3TWVzc2FnZXMgPSBhc3luYyAoKSA9PiBRdWVyeSgnc2VsZWN0ICogZnJvbSBDb21tdW5pY2F0aW9uLk1lc3NhZ2VzJyk7XG5jb25zdCBpbnNlcnRNZXNzYWdlPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBDb21tdW5pY2F0aW9uLlN1cHBvcnQgU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuLy8gY29uc3QgZGVsZXRlTWVzc2FnZXMgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIGNvbnRhY3QgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG4vLyBjb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAoLi4udmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBLQ01fSU5DLmNsaWVudFJlZ2lzdHJhdGlvbiBTRVQgPycsIHZhbHVlcyk7XG4vLyBjb25zdCBpbnNlcnRJbnN0aXR1dGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmluc3RpdHV0aW9uIFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3QgdXBkYXRlTWVzc2FnZXMgPSBhc3luYyAobmV3Q29udGVudDogYW55LCBpZDogYW55KSA9PiBRdWVyeSgnVVBEQVRFIGNvbnRhY3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW25ld0NvbnRlbnQsIGlkXSlcbi8vIGNvbnN0IGFsbFVzZXJzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gVXNlcnMnKTtcbi8vIGNvbnN0IGluc2VydFVzZXJzID0gYXN5bmModXNlciA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRzIFNFVCA/JyAsW3VzZXJdKTtcblxuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB2aWV3TWVzc2FnZXMsXG4gICAgaW5zZXJ0TWVzc2FnZVxuXG5cbn0iLCJcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCAncGFzc3BvcnQtbG9jYWwnO1xuaW1wb3J0ICogYXMgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnXG5pbXBvcnQge1N0cmF0ZWd5IGFzIEJlYXJlclN0cmF0ZWd5fSBmcm9tICdwYXNzcG9ydC1odHRwLWJlYXJlcic7XG5pbXBvcnQgKiBhcyBkYiBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9CZWFyZXJUb2tlbkRldGFpbHMnXG5pbXBvcnQgeyBteXNxbEFjY2VzcyB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvQ29uZWN0aW9uJztcblxuXG5cblxuXG5cbnBhc3Nwb3J0LnVzZShuZXcgQmVhcmVyU3RyYXRlZ3koXG4gICAgICh0b2tlbiwgZG9uZSk9PiB7XG4gICAgICAgIG15c3FsQWNjZXNzLnF1ZXJ5KGBTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLkxvZ2luX0NyZWRlbnRpYWxzIFdoZXJlIGFjY2Vzc190b2tlbiA9ID9gLCBbdG9rZW5dLCAoZXJyb3IsIHVzZXIpID0+IHtcblxuICAgICAgICAgICAgaWYgKGVycm9yKSB7IHJldHVybiBkb25lKGVycm9yKTsgfVxuICAgICAgICAgICAgaWYgKCF1c2VyKSB7IHJldHVybiBkb25lKG51bGwsIGZhbHNlKTsgfVxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBkb25lKG51bGwsIHVzZXIsIHsgc2NvcGU6ICdyZWFkJyB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgfVxuKSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCAncGFzc3BvcnQtbG9jYWwnO1xuaW1wb3J0ICogYXMgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnXG5pbXBvcnQgeyBTdHJhdGVneSBhcyBMb2NhbFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtbG9jYWwnXG5pbXBvcnQgeyBjaGVja0FjY291bnQgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luL2luZGV4J1xuaW1wb3J0IHZlcmlmeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1NlY3VyaXR5L1ZlcmlmaWNhdGlvbidcblxuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdCdcblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnBhc3Nwb3J0LnVzZShuZXcgTG9jYWxTdHJhdGVneSh7XG4gIHVzZXJuYW1lRmllbGQ6ICdlbWFpbCcsXG4gIHBhc3N3b3JkRmllbGQ6ICdwYXNzd29yZCcsXG59LCBhc3luYyBmdW5jdGlvbiB2ZXJpZnkoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgZG9uZTogYW55KSB7XG4gIGNvbnN0IFt1c2VyXSA9IGF3YWl0IGNoZWNrQWNjb3VudChlbWFpbClcbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHsgbWVzc2FnZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlxcblwiIH0pO1xuICB9XG4gIGlmICghYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkge1xuICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlLCB7IG1lc3NhZ2U6IFwiSW52YWxpZCBjcmVkZW50aWFscy5cXG5cIiB9KTtcbiAgfVxuICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcblxufVxuKSk7XG5cbnBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXIoKHVzZXI6IGFueSwgZG9uZSkgPT4ge1xuICBkZWxldGUgdXNlci5kYXRlX3RpbWVcbiAgZGVsZXRlIHVzZXIucGFzc3dvcmRcbiAgZGVsZXRlIHVzZXIudGVybXNfb2Zfc2VydmljZVxuICBkZWxldGUgdXNlci5wcml2YWN5X3BvbGljeVxuICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICByZXR1cm4gZG9uZShudWxsLCB7XG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIGZpcnN0X25hbWU6IHVzZXIuZmlyc3RfbmFtZSxcbiAgICAgIGxhc3RfbmFtZTogdXNlci5sYXN0X25hbWUsXG4gICAgICBidXNpbmVzc19uYW1lOiB1c2VyLmJ1c2luZXNzX25hbWUsXG4gICAgICBwaG9uZV9udW1iZXI6IHVzZXIucGhvbmVfbnVtYmVyLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICBhY2NvdW50X3R5cGU6IHVzZXIuYWNjb3VudF90eXBlLFxuICAgICAgYWNjZXNzX3Rva2VuOiB1c2VyLmFjY2Vzc190b2tlblxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5wYXNzcG9ydC5kZXNlcmlhbGl6ZVVzZXIoKHVzZXI6IGFueSwgZG9uZSkgPT4ge1xuICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyKTtcbiAgfSk7XG59KTtcblxuXG5yb3V0ZXIucG9zdCgnL2xvZ2luX3ZlcmlmaWNhdGlvbicsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwnKSwgKHJlcTogYW55LCByZXMpID0+IHtcbiAgaWYgKHJlcS51c2VyKSB7XG4gICAgcmVxLmxvZ0luKHJlcS51c2VyLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICByZXR1cm4gcmVzLmNvb2tpZSgndXNlcicsIHJlcS51c2VyKS5qc29uKHJlcS51c2VyKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICghcmVxLnVzZXIpIHtcbiAgICByZXMuc2VuZFN0YXR1cyg0MDEpXG4gIH1cbn0pO1xuXG5yb3V0ZXIucG9zdCgnL3ZlcmlmeV9hc3NvY2lhdGVfcGluJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgY29uc3QgW25ld1JlcGx5LCBlcnJvcl0gPSBhd2FpdCB2ZXJpZnkuYXNzb2NpYXRlVmVyaWZpY2F0aW9uKHJlcS5ib2R5LnBpbiwgcmVxLmJvZHkuaWQpXG4gIGlmIChuZXdSZXBseSkge1xuICAgICAgcmVzLmpzb24odHJ1ZSlcbiAgfSBlbHNlIGlmICghbmV3UmVwbHkpIHtcbiAgICAgIHJlcy5qc29uKGZhbHNlKVxuICB9XG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuXG5cblxuXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRlbnNvcmZsb3cvdGZqcy1iYWNrZW5kLXdlYmdsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0ZW5zb3JmbG93L3RmanMtbm9kZS1ncHVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbnZlcnQtdW5pdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm15c3FsMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1odHRwLWJlYXJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1sb2NhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuaW1wb3J0ICogYXMgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG4vLyBpbXBvcnQgSG9tZXBhZ2VTZXJ2ZXIgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5Jztcbi8vIGltcG9ydCBDbGllbnRQb3J0YWwgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuLy8gaW1wb3J0IHsgTWVzc2FnaW5nUmVzcG9uc2UsIHNlbmRSZXBseSB9IGZyb20gJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG4vLyBpbXBvcnQgJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1BBWU1FTlRTL2F1dGhvcml6ZV9jYXJkJztcbmltcG9ydCBzdXBwb3J0IGZyb20gJy4vTUVTU0FHRV9TVVBQT1JUL3N1cHBvcnQnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4vQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscydcbi8vIGltcG9ydCBiaWxsaW5nIGZyb20gJy4vQ2xpZW50UG9ydGFsL0NsaWVudEJpbGxpbmcnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vQ2xpZW50UG9ydGFsL1N0b2NrJztcbmltcG9ydCBwcm9kdWN0cyBmcm9tICcuL0NsaWVudFBvcnRhbC9Qcm9kdWN0cyc7XG5pbXBvcnQgaW5zdG9yZSBmcm9tICcuL0NsaWVudFBvcnRhbC9RUkNPREUvaW5TdG9yZUF1ZGl0cydcbmltcG9ydCBhdWRpdHMgZnJvbSAnLi9DbGllbnRQb3J0YWwvQXVkaXRzL0ludmVudG9yeUF1ZGl0cyc7XG5pbXBvcnQgbnV0cml0aW9uIGZyb20gJy4vQ2xpZW50UG9ydGFsL051dHJpdGlvbic7XG5pbXBvcnQgcmVnaXN0cmF0aW9uIGZyb20gJy4vSG9tZXBhZ2UvcmVnaXN0cmF0aW9uJ1xuXG5pbXBvcnQgVVBTdHJhdGVneSBmcm9tICcuL1NlY3VyaXR5L2xvY2FsU3RyYXRlZ3knXG5pbXBvcnQgKiBhcyBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbidcbmltcG9ydCAnLi9TZWN1cml0eS9CZWFyZXInXG5cbmltcG9ydCAqIGFzIGNvb2tpZXBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJ1xuaW1wb3J0ICogYXMgY29udmVydCBmcm9tICdjb252ZXJ0LXVuaXRzJ1xuaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1ub2RlLWdwdSdcbmltcG9ydCB7IFRhZ0ZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xuaW1wb3J0ICogYXMgcW5hIGZyb20gJ0B0ZW5zb3JmbG93LW1vZGVscy9xbmEnO1xuaW1wb3J0ICdAdGVuc29yZmxvdy90ZmpzLWJhY2tlbmQtd2ViZ2wnXG50Zi5iYWNrZW5kKClcblxuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShjb3JzKCkpXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICByZXMuc2V0KCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpXG4gIHJlcy5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnLCAnKicpXG4gIHJlcy5zZXQoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKVxuICBuZXh0KClcbn0pXG5hcHAuc2V0KCd0cnVzdCBwcm94eScsIHRydWUpXG5cbmFwcC51c2UoY29va2llcGFyc2VyKCkpXG5hcHAudXNlKHNlc3Npb24oe1xuICBzZWNyZXQ6ICdrZXlib2FyZCBjYXQnLFxuICByZXNhdmU6IGZhbHNlLFxuICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2UsXG4gIGNvb2tpZTogeyBzZWN1cmU6IGZhbHNlIH1cbn0pKTtcblxuXG5hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XG5cbmFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcblxuXG5cbmFwcC51c2UoVVBTdHJhdGVneSlcbmNvbnN0IHZhbGlkYXRlVXNlciA9IChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBpZiAoIXJlcS51c2VyKSB7XG4gICAgcmVzLnJlZGlyZWN0KCcvc2lnbnVwJylcbiAgfSBlbHNlIGlmIChyZXEudXNlcikge1xuICAgIG5leHQoKVxuICB9XG59XG5cblxuXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3N1cHBvcnQnLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG5hcHAudXNlKCcvYWJvdXR1cycsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy90ZXJtc29mc2VydmljZScsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbmFwcC51c2UoJy9ib2xhX292ZXJ2aWV3JywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3ByaXZhY3lwb2xpY3knLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG4vLyBhcHAudXNlKCcvc2lnbnVwJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL2hlYWx0aC1kaWFnbm9zdGljJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL2ludmVudG9yeWNoZWNrJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuYXBwLnVzZSgnL251dHJpZW50cycsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbi8vIGFwcC51c2UoJy9wcmluY2lwbGUvJywgdmFsaWRhdGVVc2VyLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG4vLyBhcHAudXNlKCcvcHJpbmNpcGxlLycsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbi8vIGFwcC51c2UoJy9wcmluY2lwbGUvYWNjb3VudCcsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcbi8vIGFwcC51c2UoJy9wcmluY2lwbGUvc3RvcmUnLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG4vLyBhcHAudXNlKCcvcHJpbmNpcGxlL3Byb2R1Y3RzJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuLy8gYXBwLnVzZSgnL3ByaW5jaXBsZS9udXRyaXRpb24nLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG4vLyBhcHAudXNlKCcvcHJpbmNpcGxlL2JvbGFtYW51YWwnLCBleHByZXNzLnN0YXRpYygncHVibGljJykpXG4vLyBhcHAudXNlKCcvcHJpbmNpcGxlL2ludmVudG9yeWF1ZGl0cycsIGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcblxuXG5cblxuYXBwLnVzZSgnL2xvZ2luJywgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuXG5cbmFwcC51c2UocmVnaXN0cmF0aW9uKVxuYXBwLnVzZShzdXBwb3J0KVxuYXBwLnVzZShjbGllbnQpXG5hcHAudXNlKG51dHJpdGlvbilcbmFwcC51c2Uoc3RvcmUpXG5hcHAudXNlKGF1ZGl0cylcbmFwcC51c2UocHJvZHVjdHMpXG5hcHAudXNlKGluc3RvcmUpXG5cbmFwcC5nZXQoXCIqXCIsIChyZXEsIHJlcykgPT4ge1xuICByZXMuc2VuZEZpbGUocGF0aC5qb2luKF9fZGlybmFtZSwgXCIuLi9wdWJsaWNcIikpXG59KTtcblxuXG5cbiBcblxuXG5cblxuXG4vLyBjb25zdCB0ZXN0MSA9IFtdXG4vLyBjb25zdCB0Zm91dHB1dCA9IFtdXG4vLyBsZXQgaW5kZXggPSAwXG4vLyAgZm9yICAoIGxldCBpbmRleCA9IDAgOyBpbmRleCA8PSA5OTkgIDsgaW5kZXgrKykge1xuLy8gIGxldCBuZXdSZXBseSA9IGluZGV4IFxuLy8gdGVzdDEucHVzaChuZXdSZXBseSxuZXdSZXBseSsxMDAsMSlcbi8vICB9XG4vLyAgZm9yICAoIGxldCBpbmRleCA9IDAgOyBpbmRleCA8PSA5OTkgIDsgaW5kZXgrKykge1xuLy8gICBsZXQgbmV3UmVwbHkgPSBpbmRleCAqIDRcbi8vICB0Zm91dHB1dC5wdXNoKG5ld1JlcGx5KVxuLy8gICB9XG5cbi8vIGNvbnN0IHRmQXJyYXkgPSB0Zi50ZW5zb3IodGVzdDEsWzEwMDAsM10pXG4vLyBjb25zdCB0ZkFycmF5T3V0cHV0ID0gdGYudGVuc29yKHRmb3V0cHV0LFsxMDAwLDFdKVxuLy8gY29uc29sZS5sb2codGZBcnJheU91dHB1dClcbi8vIHRmLnV0aWwuc2h1ZmZsZUNvbWJvKHRmQXJyYXksdGZBcnJheU91dHB1dClcblxuLy8gLy8gY29uc3QgdGZPdXRwdXQgPSB0ZkFycmF5Lm11bCgxMClcblxuLy8gY29uc3QgbW9kZWwgPSB0Zi5zZXF1ZW50aWFsKCk7XG4vLyBtb2RlbC5hZGQodGYubGF5ZXJzLmRlbnNlKHtpbnB1dFNoYXBlOlszXSx1bml0czoxMDAsYWN0aXZhdGlvbjoncmVsdSd9KSlcbi8vIG1vZGVsLmFkZCh0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOjEwMCxhY3RpdmF0aW9uOidyZWx1J30pKVxuLy8gbW9kZWwuYWRkKHRmLmxheWVycy5kZW5zZSh7dW5pdHM6MTAwMCxhY3RpdmF0aW9uOidyZWx1J30pKVxuXG5cbi8vIG1vZGVsLmFkZCh0Zi5sYXllcnMuZGVuc2Uoe3VuaXRzOjF9KSlcblxuLy8gLy8gbW9kZWwuYWRkKHRmLmxheWVycy5kZW5zZSh7dW5pdHM6MX0pKVxuXG4vLyBjb25zdCB0cmFpbiA9IGFzeW5jICgpPT57XG4vLyAgIG1vZGVsLmNvbXBpbGUoe1xuLy8gICAgIG9wdGltaXplcjp0Zi50cmFpbi5hZGFtKCksXG4vLyAgICAgbG9zczonbWVhblNxdWFyZWRFcnJvcidcbi8vICAgfSlcbi8vICAgYXdhaXQgbW9kZWwuZml0KHRmQXJyYXksdGZBcnJheU91dHB1dCx7XG4vLyAgICAgZXBvY2hzOjc1LFxuLy8gICAgIGJhdGNoU2l6ZTo1MCxcbi8vICAgICBzaHVmZmxlOnRydWUsXG4vLyAgICAgdmFsaWRhdGlvblNwbGl0Oi4xMFxuXG4vLyAgIH0pXG4vLyAgIGNvbnN0IG5ld3ByZWRpY3Rpb24gPSBtb2RlbC5wcmVkaWN0KHRmLnRlbnNvcihbWzMsMzAxLDNdXSkpXG4vLyBuZXdwcmVkaWN0aW9uLnByaW50KClcblxuXG4vLyB9XG4vLyB0cmFpbigpXG5cblxuXG5cblxuLy8gY29uc3QgUW5BID0gYXN5bmMgKCkgPT4ge1xuXG4vLyAgIGNvbnN0IHBhc3NhZ2UgPSBcIlJ1YmUgRm9zdGVyIHdhcyB0aGUgdGVhbeKAmXMgdHJhdmVsaW5nIG1hbmFnZXIgYW5kIG9uZSBvZiB0aGUgdGVhbeKAmXMgc3RhcnRpbmcgcGl0Y2hlcnMuIFRoZSBMZWxhbmQgR2lhbnRzIHdlcmUgb25lIG9mIHRoZSB0b3AgYmxhY2sgYmFzZWJhbGwgdGVhbXMgaW4gdGhlIGNvdW50cnkgYW5kIGFsc28gd29uIHRoZSBwcmVzdGlnaW91cyBDaGljYWdvIENpdHkgTGVhZ3VlIHRpdGxlLiBUaGUgTGVsYW5kIEdpYW50cyBoYWQgYSB3b24tbG9zcyByZWNvcmQgb2YgNTQtMTgtMSAoLjc1MCkgaW4gaW5kZXBlbmRlbnQgcGxheSBhbmQgd2VudCAzMS05ICguNzc1KSBpbiB0aGUgQ2hpY2FnbyBDaXR5IExlYWd1ZS4gRnJhbmsgQy4gTGVsYW5kIHdhcyBib3JuIGluIEZlYnJ1YXJ5IG9mIDE4NjkgaW4gTWVtcGhpcywgIFRlbm5lc3NlZS5cIlxuLy8gICBjb25zdCBxdWVzdGlvbiA9IFwiV2hlbiB3YXMgRnJhbmsgQyBMZWxhbmQgYm9ybj9cIlxuLy8gICBjb25zdCBtb2RlbCA9IGF3YWl0IHFuYS5sb2FkKCk7XG4vLyAgIGNvbnNvbGUubG9nKG1vZGVsKVxuLy8gICBjb25zdCBhbnN3ZXJzID0gYXdhaXQgbW9kZWwuZmluZEFuc3dlcnMocXVlc3Rpb24sIHBhc3NhZ2UpO1xuLy8gICBhbnN3ZXJzLm1hcCgoaSk9Pntcbi8vICAgICBpZihpLnNjb3JlPjE1KXtcbi8vICAgICAgIGNvbnNvbGUubG9nKGkudGV4dClcbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfVxuXG4vLyBRbkEoKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5hcHAubGlzdGVuKDgwODAsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAkezgwODB9Li4uYClcbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=