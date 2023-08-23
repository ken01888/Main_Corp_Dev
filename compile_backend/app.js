/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/BACKEND/ClientPortal/InventoryRoutes.ts":
/*!*****************************************************!*\
  !*** ./src/BACKEND/ClientPortal/InventoryRoutes.ts ***!
  \*****************************************************/
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
var Verification_1 = __webpack_require__(/*! ../ProgramControlFlow/SQL/Query.ts/Security/Verification */ "./src/BACKEND/ProgramControlFlow/SQL/Query.ts/Security/Verification.ts");
var convert = __webpack_require__(/*! convert-units */ "convert-units");
var router = express.Router();
router.post('/createStore', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.createStore(req.body)];
            case 1:
                store = _a.sent();
                res.json('hello');
                return [2 /*return*/];
        }
    });
}); });
router.post('/insertInventoryItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req.body.total_package_weight = convert(req.body.total_package_weight).from('lb').to('g');
                req.body.price_per_gram = req.body.price / req.body.total_package_weight;
                return [4 /*yield*/, Inventory_1.default.insertInventoryItem(req.body)];
            case 1:
                current_store = _a.sent();
                res.json(current_store);
                return [2 /*return*/];
        }
    });
}); });
router.get('/getInventoryItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business_id, resultInventory;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                business_id = 80;
                return [4 /*yield*/, Inventory_1.default.getInventoryItems(business_id)];
            case 1:
                resultInventory = _a.sent();
                res.json(resultInventory);
                return [2 /*return*/];
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
router.put('/updateInventoryItem', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.updateInventoryItem(req.body.values, req.body.id)];
            case 1:
                current_store = _a.sent();
                res.json(current_store);
                return [2 /*return*/];
        }
    });
}); });
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
router.get('/inventory_reference_information', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business_id, date_of_audit, reply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                business_id = 80;
                date_of_audit = 'Sunday, July 30, 2023';
                return [4 /*yield*/, Inventory_1.default.getInventoryReference(business_id, req.query.auditDate)];
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
router.get('/inventoryPeriod', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var inventory_period;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.selectUniqueInventoryPeriod()];
            case 1:
                inventory_period = _a.sent();
                res.json(inventory_period);
                return [2 /*return*/];
        }
    });
}); });
// Add Nutrition Information
router.put('/addNutritionInformation', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        req.body.values.serving_size = convert(req.body.values.serving_size.amount).from(req.body.values.serving_size.unit).to('g');
        req.body.values.calories = req.body.values.calories.amount;
        req.body.values.total_fat = convert(req.body.values.total_fat.amount).from(req.body.values.total_fat.unit).to('g');
        req.body.values.saturated_fat = convert(req.body.values.saturated_fat.amount).from(req.body.values.saturated_fat.unit).to('g');
        req.body.values.trans_fat = convert(req.body.values.trans_fat.amount).from(req.body.values.trans_fat.unit).to('g');
        req.body.values.cholesterol = convert(req.body.values.cholesterol.amount).from(req.body.values.cholesterol.unit).to('mg');
        req.body.values.sodium = convert(req.body.values.sodium.amount).from(req.body.values.sodium.unit).to('mg');
        req.body.values.carbohydrates = convert(req.body.values.carbohydrates.amount).from(req.body.values.carbohydrates.unit).to('g');
        req.body.values.fiber = convert(req.body.values.fiber.amount).from(req.body.values.fiber.unit).to('g');
        req.body.values.sugar = convert(req.body.values.sugar.amount).from(req.body.values.sugar.unit).to('g');
        req.body.values.protein = convert(req.body.values.protein.amount).from(req.body.values.protein.unit).to('g');
        req.body.values.calcium = convert(req.body.values.calcium.amount).from(req.body.values.calcium.unit).to('mg');
        req.body.values.iron = convert(req.body.values.iron.amount).from(req.body.values.iron.unit).to('mg');
        req.body.values.potassium = convert(req.body.values.potassium.amount).from(req.body.values.potassium.unit).to('mg');
        req.body.values.added_sugar = convert(req.body.values.added_sugar.amount).from(req.body.values.added_sugar.unit).to('g');
        req.body.values.vitamin_d = convert(req.body.values.vitamin_d.amount).from(req.body.values.vitamin_d.unit).to('mcg');
        // const addedNewNutritionItem = await stores.insertNutritionalInformation(req.body.values,req.body.id)
        res.json('heelo');
        return [2 /*return*/];
    });
}); });
router.post('/insertProductName', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var insertProduct;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req.body.business_id = 80;
                return [4 /*yield*/, Inventory_1.default.insertProductRecipeName(req.body)];
            case 1:
                insertProduct = _a.sent();
                res.json('hello');
                return [2 /*return*/];
        }
    });
}); });
router.get('/getRecipeProduct', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business_id, getProducts, newProduct, getProducts_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                business_id = 80;
                return [4 /*yield*/, Inventory_1.default.getRecipeProduct(business_id)];
            case 1:
                getProducts = _a.sent();
                return [4 /*yield*/, getProducts.map(function (i, n, a) { return __awaiter(void 0, void 0, void 0, function () {
                        var getInfo;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Inventory_1.default.sumOfAllIngredients(i.id)];
                                case 1:
                                    getInfo = _a.sent();
                                    if (getInfo[0]['sum(input_cost)'] === null) {
                                        return [2 /*return*/, Inventory_1.default.insertInputItemCost(0, i.id)];
                                    }
                                    else if (getInfo[0]['sum(input_cost)'] !== null || undefined) {
                                        return [2 /*return*/, Inventory_1.default.insertInputItemCost(getInfo[0]['sum(input_cost)'], i.id)];
                                    }
                                    return [2 /*return*/, i];
                            }
                        });
                    }); })];
            case 2:
                newProduct = _a.sent();
                return [4 /*yield*/, Inventory_1.default.getRecipeProduct(business_id)];
            case 3:
                getProducts_1 = _a.sent();
                // const getInfo = await stores.sumOfAllIngredients(req.body.inputs[0].product_id)
                // const productReturned = await stores.sumOfAllIngredients(req.body.inputs[0].product_id) 
                // const data = await stores.sumOfAllIngredients(req.body.inputs[0].product_id)
                // const data = await stores.sumOfAllIngredients(req.body.inputs[0].product_id)
                // const costUpload = await stores.insertInputItemCost(data[0]['sum(input_cost)'], req.body.inputs[0].product_id)
                res.json(getProducts_1);
                return [2 /*return*/];
        }
    });
}); });
router.get('/inventoryItemsForSelectRecipes', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business_id, getProducts, selectItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                business_id = 80;
                return [4 /*yield*/, Inventory_1.default.getInventoryItemsforSelect(business_id)];
            case 1:
                getProducts = _a.sent();
                selectItem = getProducts.map(function (i, n, a) {
                    return {
                        value: i.id,
                        label: i.description
                    };
                });
                res.json(selectItem);
                return [2 /*return*/];
        }
    });
}); });
router.post('/insertProductInputs', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business_id, dataExhange, data, costUpload;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                business_id = 80;
                return [4 /*yield*/, req.body.inputs.forEach(function (i, n, a) { return __awaiter(void 0, void 0, void 0, function () {
                        var getProducts;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    i.input_weight = convert(i.input_weight).from(i.unit).to('g');
                                    return [4 /*yield*/, Inventory_1.default.getInventoryItemsforRecording(i.inventory_item_id)];
                                case 1:
                                    getProducts = _a.sent();
                                    i.input_cost = parseInt(i.input_weight) * getProducts[0].price_per_gram;
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
                return [4 /*yield*/, Inventory_1.default.sumOfAllIngredients(req.body.inputs[0].product_id)];
            case 2:
                data = _a.sent();
                return [4 /*yield*/, Inventory_1.default.insertInputItemCost(data[0]['sum(input_cost)'], req.body.inputs[0].product_id)];
            case 3:
                costUpload = _a.sent();
                res.json(costUpload);
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
    var sendTextReply, newReply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, send_sms_1.MessageResponseFromHomePage)(req.body.first_name, [req.body.phone_number])];
            case 1:
                sendTextReply = _a.sent();
                return [4 /*yield*/, Support_Database_1.default.insertMessage(req.body)];
            case 2:
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
exports.MessageResponseFromHomePage = exports.MessagingResponse = void 0;
var Twilio = __webpack_require__(/*! twilio */ "twilio");
var dotenv = __webpack_require__(/*! dotenv */ "dotenv");
dotenv.config();
// Twilio Control and Access Credential 
var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_AUTHKEY;
var sms = Twilio(accountSid, authToken);
exports.MessagingResponse = Twilio.twiml.MessagingResponse;
function MessageResponseFromHomePage(name, to) {
    var _this = this;
    to.map(function (i) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sms.messages.create({
                        body: "Dear ".concat(name.toLocaleUpperCase(), ",Thank you for contacting Kcm Inc. Rest assured that our support team will promptly respond to your query within the next 48-72 hours. "),
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
exports.MessageResponseFromHomePage = MessageResponseFromHomePage;
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
    return [2 /*return*/, (0, Conection_1.Query)("SELECT Inventory.Inventory_checklist.audit_reference_number, Inventory.Inventory_checklist.date_of_audit,Inventory.Inventory_checklist.in_stock,Inventory.Inventory_checklist.order_quantity,Inventory.Inventory_Items.supplier,Inventory.Inventory_Items.brand,Inventory.Inventory_Items.description,Inventory.Inventory_Items.category,Inventory.Inventory_Items.price,Inventory.Inventory_checklist.id,Inventory.Inventory_checklist.order_quantity FROM Inventory.Inventory_checklist INNER JOIN Inventory.Inventory_Items WHERE Inventory.Inventory_checklist.business_id = ? and Inventory.Inventory_checklist.date_of_audit = ? ORDER BY Inventory.Inventory_checklist.date_of_audit", [business_id, date_of_audit])];
}); }); };
var deleteInventoryAuditItem = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('DELETE FROM Inventory.Inventory_checklist WHERE ?', [id])];
}); }); };
var updateInventoryAuditItem = function (values, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Inventory.Inventory_checklist SET ? WHERE id = ?', [values, id])];
}); }); };
var selectUniqueInventoryPeriod = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('SELECT date_of_audit FROM Inventory.Inventory_checklist')];
}); }); };
var insertNutritionalInformation = function (values, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE  Inventory.Inventory_Items SET ? WHERE id = ?', [values, id])];
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
    return [2 /*return*/, (0, Conection_1.Query)('select total_package_weight,price_per_gram from Inventory.Inventory_Items where id = ?', [id])];
}); }); };
var insertIngredients = function (values, product_id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('INSERT Recipe.Product_Inputs SET ?  ', [values, product_id])];
}); }); };
var sumOfAllIngredients = function (productId) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('select sum(input_cost) from Recipe.Product_Inputs where product_id = ?', [productId])];
}); }); };
var insertInputItemCost = function (total_cost, product_id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Recipe.Products SET total_cost = ? WHERE id = ?', [total_cost, product_id])];
}); }); };
exports["default"] = {
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
    insertInputItemCost: insertInputItemCost,
    upDateProductRecipeCost: upDateProductRecipeCost
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
// import notary from './ClientPortal/ClientServiceRequest';
var InventoryRoutes_1 = __webpack_require__(/*! ./ClientPortal/InventoryRoutes */ "./src/BACKEND/ClientPortal/InventoryRoutes.ts");
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
    else {
        next();
    }
};
app.use('/', express.static('public'));
app.use('/signup', express.static('public'));
app.use('/store', express.static('public'));
app.use('/principle/', express.static('public'));
// app.use('/principle/', validateUser, express.static('public'))
app.use(registration_1.default);
app.use(support_1.default);
app.use(ClientPersonalDetails_1.default);
app.use(InventoryRoutes_1.default);
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});
app.listen(8080, function () {
    console.log("Server listening on port ".concat(8080, "..."));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7UUFDOUgsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ3RHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUN0RyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDNUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzdHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElB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QUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUMsQ0FBQztBQUM1QyxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpELGlFQUFpRTtBQU9qRSxHQUFHLENBQUMsR0FBRyxDQUFDLHNCQUFZLENBQUM7QUFFckIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsK0JBQU0sQ0FBQztBQUNmLEdBQUcsQ0FBQyxHQUFHLENBQUMseUJBQVMsQ0FBQztBQUlsQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQTRCLElBQUksUUFBSyxDQUFDO0FBQ3BELENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL0NsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL0ludmVudG9yeVJvdXRlcy50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Ib21lcGFnZS9yZWdpc3RyYXRpb24udHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvTUVTU0FHRV9TVVBQT1JUL3N1cHBvcnQudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcy50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML0NvbmVjdGlvbi50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luL2luZGV4LnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscy50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9JbnZlbnRvcnkudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TZWN1cml0eS9WZXJpZmljYXRpb24udHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TdXBwb3J0X0RhdGFiYXNlLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1NlY3VyaXR5L0JlYXJlci50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9TZWN1cml0eS9sb2NhbFN0cmF0ZWd5LnRzIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImJjcnlwdFwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiY29udmVydC11bml0c1wiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52L2NvbmZpZ1wiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzLXNlc3Npb25cIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJteXNxbDJcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydFwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0LWh0dHAtYmVhcmVyXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnQtbG9jYWxcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJ0d2lsaW9cIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9rY21pbmMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGNsaWVudF9hZG1pbl9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuaW1wb3J0IHtjaGVja0FjY291bnR9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4vJ1xuXG5cblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLmdldCgnL2dldFByaW5jaXBsZUluZm9ybWF0aW9uJywgYXN5bmMgKHJlcTphbnksIHJlcykgPT4ge1xuICAgIHJlcy5jb29raWUoJ3VzZXInLHJlcS51c2VyKVxuXG5cbn0pO1xuXG5yb3V0ZXIucHV0KCcvdXBkYXRlQ2xpZW50aW5mb3JtYXRpb24nLCBhc3luYyAocmVxOmFueSwgcmVzKSA9PiB7XG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBjbGllbnRfYWRtaW5fcXVlcnkudXBkYXRlUFJJTkNJUExFKHJlcS5ib2R5LHJlcS51c2VyLmlkKVxuICAgIHJlcy5qc29uKG5ld1JlcGx5KVxufSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyBcblxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IHN0b3JlcyBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9JbnZlbnRvcnknO1xuaW1wb3J0IHZlcmlmeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1NlY3VyaXR5L1ZlcmlmaWNhdGlvbidcbmltcG9ydCAqIGFzIGNvbnZlcnQgZnJvbSAnY29udmVydC11bml0cydcblxuXG5cblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5cbnJvdXRlci5wb3N0KCcvY3JlYXRlU3RvcmUnLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gYXdhaXQgc3RvcmVzLmNyZWF0ZVN0b3JlKHJlcS5ib2R5KVxuICAgIHJlcy5qc29uKCdoZWxsbycpXG59KTtcblxuXG5yb3V0ZXIucG9zdCgnL2luc2VydEludmVudG9yeUl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICByZXEuYm9keS50b3RhbF9wYWNrYWdlX3dlaWdodCA9IGNvbnZlcnQocmVxLmJvZHkudG90YWxfcGFja2FnZV93ZWlnaHQpLmZyb20oJ2xiJykudG8oJ2cnKVxuICAgIHJlcS5ib2R5LnByaWNlX3Blcl9ncmFtID0gcmVxLmJvZHkucHJpY2UgLyByZXEuYm9keS50b3RhbF9wYWNrYWdlX3dlaWdodFxuXG5cbiAgICBjb25zdCBjdXJyZW50X3N0b3JlID0gYXdhaXQgc3RvcmVzLmluc2VydEludmVudG9yeUl0ZW0ocmVxLmJvZHkpXG4gICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvZ2V0SW52ZW50b3J5SXRlbXMnLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIC8vICAgIGxldCBidXNpbmVzc19pZCA9IHJlcS5jb29raWVzLnVzZXIuaWRcbiAgICBsZXQgYnVzaW5lc3NfaWQgPSA4MFxuXG4gICAgY29uc3QgcmVzdWx0SW52ZW50b3J5ID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUl0ZW1zKGJ1c2luZXNzX2lkKVxuXG5cbiAgICByZXMuanNvbihyZXN1bHRJbnZlbnRvcnkpXG59KTtcblxuXG5yb3V0ZXIuZGVsZXRlKCcvZGVsZXRlSW52ZW50b3J5SXRlbXMnLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy5kZWxldGVJbnZlbnRvcnlJdGVtKHJlcS5ib2R5KVxuICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUuYWZmZWN0ZWRSb3dzKVxuXG59KTtcblxucm91dGVyLnB1dCgnL3VwZGF0ZUludmVudG9yeUl0ZW0nLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy51cGRhdGVJbnZlbnRvcnlJdGVtKHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG5cbiAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxuXG59KTtcblxuXG5cblxuLy9DaGVja2xpc3QgUm91dGVzXG5cbnJvdXRlci5nZXQoJy9nZXRJbnZlbnRvcnlJdGVtc0ZvckRhaWx5Q2hlY2tsaXN0LzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGJ1c2luZXNzX2lkID0gcmVxLnBhcmFtcy5pZFxuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUNoZWNrbGlzdEl0ZW1zKGJ1c2luZXNzX2lkKVxuICAgIHJlcy5qc29uKG5ld1JlcGx5KVxuXG59KTtcblxucm91dGVyLnBvc3QoJy9pbnNlcnRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcycsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICAgcmVxLmJvZHkub3JkZXJfcXVhbnRpdHkgPSByZXEuYm9keS5yZWNvbW1lbmRlZF9zdG9ja19sZXZlbCAtIHJlcS5ib2R5LmluX3N0b2NrXG5cbiAgICBpZiAocmVxLmJvZHkub3JkZXJfcXVhbnRpdHkgPD0gMCkge1xuICAgICAgICByZXEuYm9keS5vcmRlcl9xdWFudGl0eSA9IDBcbiAgICB9XG4gICAgZGVsZXRlIHJlcS5ib2R5LnJlY29tbWVuZGVkX3N0b2NrX2xldmVsXG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBzdG9yZXMuaW5zZXJ0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMocmVxLmJvZHkpXG4gICAgcmVzLmpzb24obmV3UmVwbHkpXG59KTtcblxucm91dGVyLnBvc3QoJy92ZXJpZnlfYXNzb2NpYXRlX3BpbicsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG5cbiAgICBjb25zdCBbbmV3UmVwbHksIGVycm9yXSA9IGF3YWl0IHZlcmlmeS5hc3NvY2lhdGVWZXJpZmljYXRpb24ocmVxLmJvZHkucGluLCByZXEuYm9keS5pZClcblxuXG4gICAgaWYgKG5ld1JlcGx5KSB7XG4gICAgICAgIHJlcy5qc29uKHRydWUpXG4gICAgfSBlbHNlIGlmICghbmV3UmVwbHkpIHtcbiAgICAgICAgcmVzLmpzb24oZmFsc2UpXG4gICAgfVxuXG5cbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvaW52ZW50b3J5X3JlZmVyZW5jZV9pbmZvcm1hdGlvbicsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICAgLy8gbGV0IGlkID0gcmVxLmNvb2tpZXMudXNlci5pZFxuICAgIGxldCBidXNpbmVzc19pZCA9IDgwXG4gICAgbGV0IGRhdGVfb2ZfYXVkaXQgPSAnU3VuZGF5LCBKdWx5IDMwLCAyMDIzJ1xuXG4gICAgY29uc3QgcmVwbHkgPSBhd2FpdCBzdG9yZXMuZ2V0SW52ZW50b3J5UmVmZXJlbmNlKGJ1c2luZXNzX2lkLCByZXEucXVlcnkuYXVkaXREYXRlKVxuICAgIHJlcy5qc29uKHJlcGx5KVxufSk7XG5cbnJvdXRlci5kZWxldGUoJy9kZWxldGVJbnZlbnRvcnlBdWRpdEl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zdCBjdXJyZW50X3N0b3JlOiBhbnkgPSBhd2FpdCBzdG9yZXMuZGVsZXRlSW52ZW50b3J5QXVkaXRJdGVtKHJlcS5ib2R5KVxuICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUuYWZmZWN0ZWRSb3dzKVxuXG59KTtcblxuXG5cbnJvdXRlci5wdXQoJy91cGRhdGVJbnZlbnRvcnlBdWRpdEl0ZW0nLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy51cGRhdGVJbnZlbnRvcnlBdWRpdEl0ZW0ocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxuXG59KTtcblxucm91dGVyLmdldCgnL2ludmVudG9yeVBlcmlvZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGludmVudG9yeV9wZXJpb2QgPSBhd2FpdCBzdG9yZXMuc2VsZWN0VW5pcXVlSW52ZW50b3J5UGVyaW9kKClcbiAgICByZXMuanNvbihpbnZlbnRvcnlfcGVyaW9kKVxufSlcblxuXG5cbi8vIEFkZCBOdXRyaXRpb24gSW5mb3JtYXRpb25cblxucm91dGVyLnB1dCgnL2FkZE51dHJpdGlvbkluZm9ybWF0aW9uJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZSA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZS5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZS51bml0KS50bygnZycpXG4gICAgcmVxLmJvZHkudmFsdWVzLmNhbG9yaWVzID0gcmVxLmJvZHkudmFsdWVzLmNhbG9yaWVzLmFtb3VudFxuICAgIHJlcS5ib2R5LnZhbHVlcy50b3RhbF9mYXQgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy50b3RhbF9mYXQuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy50b3RhbF9mYXQudW5pdCkudG8oJ2cnKVxuICAgIHJlcS5ib2R5LnZhbHVlcy5zYXR1cmF0ZWRfZmF0ID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc2F0dXJhdGVkX2ZhdC5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnNhdHVyYXRlZF9mYXQudW5pdCkudG8oJ2cnKVxuICAgIHJlcS5ib2R5LnZhbHVlcy50cmFuc19mYXQgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy50cmFuc19mYXQuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy50cmFuc19mYXQudW5pdCkudG8oJ2cnKVxuICAgIHJlcS5ib2R5LnZhbHVlcy5jaG9sZXN0ZXJvbCA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLmNob2xlc3Rlcm9sLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuY2hvbGVzdGVyb2wudW5pdCkudG8oJ21nJylcbiAgICByZXEuYm9keS52YWx1ZXMuc29kaXVtID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc29kaXVtLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuc29kaXVtLnVuaXQpLnRvKCdtZycpXG4gICAgcmVxLmJvZHkudmFsdWVzLmNhcmJvaHlkcmF0ZXMgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5jYXJib2h5ZHJhdGVzLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuY2FyYm9oeWRyYXRlcy51bml0KS50bygnZycpXG4gICAgcmVxLmJvZHkudmFsdWVzLmZpYmVyID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuZmliZXIuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5maWJlci51bml0KS50bygnZycpXG4gICAgcmVxLmJvZHkudmFsdWVzLnN1Z2FyID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuc3VnYXIuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5zdWdhci51bml0KS50bygnZycpXG4gICAgcmVxLmJvZHkudmFsdWVzLnByb3RlaW4gPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5wcm90ZWluLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMucHJvdGVpbi51bml0KS50bygnZycpXG4gICAgcmVxLmJvZHkudmFsdWVzLmNhbGNpdW0gPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5jYWxjaXVtLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuY2FsY2l1bS51bml0KS50bygnbWcnKVxuICAgIHJlcS5ib2R5LnZhbHVlcy5pcm9uID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuaXJvbi5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmlyb24udW5pdCkudG8oJ21nJylcbiAgICByZXEuYm9keS52YWx1ZXMucG90YXNzaXVtID0gY29udmVydChyZXEuYm9keS52YWx1ZXMucG90YXNzaXVtLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMucG90YXNzaXVtLnVuaXQpLnRvKCdtZycpXG4gICAgcmVxLmJvZHkudmFsdWVzLmFkZGVkX3N1Z2FyID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuYWRkZWRfc3VnYXIuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5hZGRlZF9zdWdhci51bml0KS50bygnZycpXG4gICAgcmVxLmJvZHkudmFsdWVzLnZpdGFtaW5fZCA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLnZpdGFtaW5fZC5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnZpdGFtaW5fZC51bml0KS50bygnbWNnJylcbiAgICAvLyBjb25zdCBhZGRlZE5ld051dHJpdGlvbkl0ZW0gPSBhd2FpdCBzdG9yZXMuaW5zZXJ0TnV0cml0aW9uYWxJbmZvcm1hdGlvbihyZXEuYm9keS52YWx1ZXMscmVxLmJvZHkuaWQpXG4gICAgcmVzLmpzb24oJ2hlZWxvJylcbn0pXG5cblxucm91dGVyLnBvc3QoJy9pbnNlcnRQcm9kdWN0TmFtZScsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcS5ib2R5LmJ1c2luZXNzX2lkID0gODBcbiAgICBjb25zdCBpbnNlcnRQcm9kdWN0ID0gYXdhaXQgc3RvcmVzLmluc2VydFByb2R1Y3RSZWNpcGVOYW1lKHJlcS5ib2R5KVxuXG4gICAgcmVzLmpzb24oJ2hlbGxvJylcbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvZ2V0UmVjaXBlUHJvZHVjdCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXG4gICAgY29uc3QgYnVzaW5lc3NfaWQgPSA4MDtcbiAgICBjb25zdCBnZXRQcm9kdWN0cyA9IGF3YWl0IHN0b3Jlcy5nZXRSZWNpcGVQcm9kdWN0KGJ1c2luZXNzX2lkKTtcbiAgICBjb25zdCBuZXdQcm9kdWN0ID0gYXdhaXQgZ2V0UHJvZHVjdHMubWFwKGFzeW5jIChpLCBuLCBhKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldEluZm8gPSBhd2FpdCBzdG9yZXMuc3VtT2ZBbGxJbmdyZWRpZW50cyhpLmlkKVxuICAgICAgICBpZiAoZ2V0SW5mb1swXVsnc3VtKGlucHV0X2Nvc3QpJ10gPT09IG51bGwpIHtcbiAgICAgICAgICAgcmV0dXJuIHN0b3Jlcy5pbnNlcnRJbnB1dEl0ZW1Db3N0KDAsIGkuaWQpXG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0SW5mb1swXVsnc3VtKGlucHV0X2Nvc3QpJ10gIT09IG51bGwgfHwgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgIHJldHVybiBzdG9yZXMuaW5zZXJ0SW5wdXRJdGVtQ29zdChnZXRJbmZvWzBdWydzdW0oaW5wdXRfY29zdCknXSwgaS5pZClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaVxuICAgIH0pO1xuICAgIGNvbnN0IGdldFByb2R1Y3RzXzEgPSBhd2FpdCBzdG9yZXMuZ2V0UmVjaXBlUHJvZHVjdChidXNpbmVzc19pZCk7XG5cblxuICAgIC8vIGNvbnN0IGdldEluZm8gPSBhd2FpdCBzdG9yZXMuc3VtT2ZBbGxJbmdyZWRpZW50cyhyZXEuYm9keS5pbnB1dHNbMF0ucHJvZHVjdF9pZClcblxuXG5cblxuXG4gICAgLy8gY29uc3QgcHJvZHVjdFJldHVybmVkID0gYXdhaXQgc3RvcmVzLnN1bU9mQWxsSW5ncmVkaWVudHMocmVxLmJvZHkuaW5wdXRzWzBdLnByb2R1Y3RfaWQpIFxuICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCBzdG9yZXMuc3VtT2ZBbGxJbmdyZWRpZW50cyhyZXEuYm9keS5pbnB1dHNbMF0ucHJvZHVjdF9pZClcblxuXG4gICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHN0b3Jlcy5zdW1PZkFsbEluZ3JlZGllbnRzKHJlcS5ib2R5LmlucHV0c1swXS5wcm9kdWN0X2lkKVxuICAgIC8vIGNvbnN0IGNvc3RVcGxvYWQgPSBhd2FpdCBzdG9yZXMuaW5zZXJ0SW5wdXRJdGVtQ29zdChkYXRhWzBdWydzdW0oaW5wdXRfY29zdCknXSwgcmVxLmJvZHkuaW5wdXRzWzBdLnByb2R1Y3RfaWQpXG5cbiAgICByZXMuanNvbihnZXRQcm9kdWN0c18xKVxufSlcblxucm91dGVyLmdldCgnL2ludmVudG9yeUl0ZW1zRm9yU2VsZWN0UmVjaXBlcycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGxldCBidXNpbmVzc19pZCA9IDgwXG4gICAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhd2FpdCBzdG9yZXMuZ2V0SW52ZW50b3J5SXRlbXNmb3JTZWxlY3QoYnVzaW5lc3NfaWQpXG4gICAgY29uc3Qgc2VsZWN0SXRlbSA9IGdldFByb2R1Y3RzLm1hcCgoaSwgbiwgYSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGkuaWQsXG5cbiAgICAgICAgICAgIGxhYmVsOiBpLmRlc2NyaXB0aW9uXG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmVzLmpzb24oc2VsZWN0SXRlbSlcbn0pXG5cblxucm91dGVyLnBvc3QoJy9pbnNlcnRQcm9kdWN0SW5wdXRzJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgbGV0IGJ1c2luZXNzX2lkID0gODBcblxuICAgIGNvbnN0IGRhdGFFeGhhbmdlID0gYXdhaXQgcmVxLmJvZHkuaW5wdXRzLmZvckVhY2goYXN5bmMgKGksIG4sIGEpID0+IHtcbiAgICAgICAgaS5pbnB1dF93ZWlnaHQgPSBjb252ZXJ0KGkuaW5wdXRfd2VpZ2h0KS5mcm9tKGkudW5pdCkudG8oJ2cnKVxuICAgICAgICBjb25zdCBnZXRQcm9kdWN0czogYW55ID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUl0ZW1zZm9yUmVjb3JkaW5nKGkuaW52ZW50b3J5X2l0ZW1faWQpXG4gICAgICAgIGkuaW5wdXRfY29zdCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnByaWNlX3Blcl9ncmFtXG4gICAgICAgIGRlbGV0ZSBpLnVuaXRcbiAgICAgICAgYXdhaXQgc3RvcmVzLmluc2VydEluZ3JlZGllbnRzKGkscmVxLmJvZHkuaW5wdXRzLnByb2R1Y3RfaWQpXG4gICAgfSlcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzdG9yZXMuc3VtT2ZBbGxJbmdyZWRpZW50cyhyZXEuYm9keS5pbnB1dHNbMF0ucHJvZHVjdF9pZClcbiAgICBjb25zdCBjb3N0VXBsb2FkID0gYXdhaXQgc3RvcmVzLmluc2VydElucHV0SXRlbUNvc3QoZGF0YVswXVsnc3VtKGlucHV0X2Nvc3QpJ10sIHJlcS5ib2R5LmlucHV0c1swXS5wcm9kdWN0X2lkKVxuICAgIHJlcy5qc29uKGNvc3RVcGxvYWQpXG59KTtcblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBkYXRhYmFzZV9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1N1cHBvcnRfRGF0YWJhc2UnO1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdCdcbmltcG9ydCAqIGFzIGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQgeyByZWdpc3RyYXRpb25JbmZvcm1hdGlvbiwgY2hlY2tBY2NvdW50IH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Mb2dpbidcbmltcG9ydCB7IFVuZGVybGluZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5jb25zdCBjaGVja0NyZWRlbnRpYWxzID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgXG4gIGNvbnN0IGNoZWNrX0RCX2FnYWluc3RfZW1haWw6IGFueVtdID0gYXdhaXQgY2hlY2tBY2NvdW50KHJlcS5ib2R5LmVtYWlsKVxuICBpZiAoY2hlY2tfREJfYWdhaW5zdF9lbWFpbC5sZW5ndGggPT09IDApIHtcbiAgICBuZXh0KClcbiAgfSBlbHNlIGlmKGNoZWNrX0RCX2FnYWluc3RfZW1haWwubGVuZ3RoID4gMCkge1xuICAgIHJlcy5qc29uKHRydWUpXG4gIH1cbn1cblxuXG5yb3V0ZXIucG9zdCgnL3JlZ2lzdHJhdGlvbicsY2hlY2tDcmVkZW50aWFscywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdFN5bmMoTnVtYmVyKHByb2Nlc3MuZW52LlNBTFRfUk9VTkQpKTtcbiAgY29uc3QgaGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoU3luYyhyZXEuYm9keS5jb25maXJtX3Bhc3N3b3JkLCBzYWx0KTtcbiAgZGVsZXRlIHJlcS5ib2R5LmNvbmZpcm1fcGFzc3dvcmRcbiAgdmFyIHRva2VuID0gand0LnNpZ24oeyB1c2VyX25hbWU6IHJlcS5ib2R5LmVtYWlsLCBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSwgcHJvY2Vzcy5lbnYuQkVBUkVSX1BSSVZBVEUpO1xuICByZXEuYm9keS5wYXNzd29yZCA9IGhhc2hcbiAgcmVxLmJvZHkuYWNjZXNzX3Rva2VuID0gdG9rZW5cbiAgcmVxLmJvZHkucGluID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTk5KSArIDExMTExMVxuICByZWdpc3RyYXRpb25JbmZvcm1hdGlvbihyZXEuYm9keSlcbiAgcmVzLmpzb24oZmFsc2UpXG59KTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG5cblxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgZGF0YWJhc2VfcXVlcnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TdXBwb3J0X0RhdGFiYXNlJztcbmltcG9ydCB7IE1lc3NhZ2VSZXNwb25zZUZyb21Ib21lUGFnZSB9IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TTVMvc2VuZF9zbXMnO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbnJvdXRlci5wb3N0KCcvc3VwcG9ydF9tZXNzYWdlJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHNlbmRUZXh0UmVwbHkgPSBhd2FpdCBNZXNzYWdlUmVzcG9uc2VGcm9tSG9tZVBhZ2UocmVxLmJvZHkuZmlyc3RfbmFtZSwgW3JlcS5ib2R5LnBob25lX251bWJlcl0pXG4gIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgZGF0YWJhc2VfcXVlcnkuaW5zZXJ0TWVzc2FnZShyZXEuYm9keSlcbiAgcmVzLmpzb24obmV3UmVwbHkpXG59KTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsIlxuaW1wb3J0ICogYXMgVHdpbGlvIGZyb20gJ3R3aWxpbydcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnXG5pbXBvcnQgKiBhcyBkYXlqcyBmcm9tICdkYXlqcydcbmRvdGVudi5jb25maWcoKVxuXG5cblxuLy8gVHdpbGlvIENvbnRyb2wgYW5kIEFjY2VzcyBDcmVkZW50aWFsIFxuY29uc3QgYWNjb3VudFNpZCA9IHByb2Nlc3MuZW52LlRXSUxJT19TSUQ7XG5jb25zdCBhdXRoVG9rZW4gPSBwcm9jZXNzLmVudi5UV0lMSU9fQVVUSEtFWTtcbmNvbnN0IHNtcyA9IFR3aWxpbyhhY2NvdW50U2lkLCBhdXRoVG9rZW4pXG5cbmV4cG9ydCBjb25zdCB7IE1lc3NhZ2luZ1Jlc3BvbnNlIH0gPSBUd2lsaW8udHdpbWwgXG5cbmV4cG9ydCBmdW5jdGlvbiBNZXNzYWdlUmVzcG9uc2VGcm9tSG9tZVBhZ2UobmFtZTpzdHJpbmcsdG8/OnN0cmluZ1tdfCBhbnkpIHtcbiAgICBcbiAgICB0by5tYXAoYXN5bmMgKGkpID0+IHtcbiAgICAgICAgYXdhaXQgc21zLm1lc3NhZ2VzLmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5OiBgRGVhciAke25hbWUudG9Mb2NhbGVVcHBlckNhc2UoKX0sVGhhbmsgeW91IGZvciBjb250YWN0aW5nIEtjbSBJbmMuIFJlc3QgYXNzdXJlZCB0aGF0IG91ciBzdXBwb3J0IHRlYW0gd2lsbCBwcm9tcHRseSByZXNwb25kIHRvIHlvdXIgcXVlcnkgd2l0aGluIHRoZSBuZXh0IDQ4LTcyIGhvdXJzLiBgLFxuICAgICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuVFdJTElPX1BIT05FLFxuICAgICAgICAgICAgc2hvcnRlblVybHM6IHRydWUsXG4gICAgICAgICAgICB0bzogaVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfSk7XG59XG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIEludmVudG9yeVJlc3BvbmNlTWVzc2FnZShyZWZlcmVuY2VfbnVtYmVyOmFueSx0bz86c3RyaW5nW118IGFueSkge1xuICAgIFxuLy8gICAgIHRvLm1hcChhc3luYyAoaSkgPT4ge1xuLy8gICAgICAgICBhd2FpdCBzbXMubWVzc2FnZXMuY3JlYXRlKHtcbi8vICAgICAgICAgICAgIGJvZHk6IGBIZWxsbyxUaGlzIGlzIGEgbWVzc2FnZSBmcm9tIEtDTSBJbmMuIFdlIHdhbnRlZCB0byBpbmZvcm0geW91IHRoYXQgYW4gaW52ZW50b3J5IHJlY29yZGluZyBmcm9tICR7ZGF5anMoKS5mb3JtYXQoJ2RkZGQsIE1NTU0gRCwgWVlZWSBoOm1tIEEnKX0gaGFzIGJlZW4gc3VibWl0dGVkIGFuZCBpdHMgcmVmZXJlbmNlIG51bWJlciBpcyAke3JlZmVyZW5jZV9udW1iZXJ9LiBUaGFuayB5b3UuYCxcbi8vICAgICAgICAgICAgIGZyb206IHByb2Nlc3MuZW52LlRXSUxJT19QSE9ORSxcbi8vICAgICAgICAgICAgIHNob3J0ZW5VcmxzOiB0cnVlLFxuLy8gICAgICAgICAgICAgdG86IGlcbi8vICAgICAgICAgfSk7XG4gICAgICAgIFxuLy8gICAgIH0pO1xuLy8gfVxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICogYXMgbXlzcWwgZnJvbSAnbXlzcWwyJztcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5cblxuXG5cblxuZXhwb3J0IGNvbnN0IG15c3FsQWNjZXNzID0gbXlzcWwuY3JlYXRlUG9vbCh7XG4gICAgdXNlcjpwcm9jZXNzLmVudi5NWVNRTF9VU0VSLFxuICAgIHBhc3N3b3JkOnByb2Nlc3MuZW52Lk1ZU1FMX1BBU1NXT1JELFxuICAgIGhvc3Q6cHJvY2Vzcy5lbnYuTVlTUUxfSE9TVCxcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcbiAgICBwb3J0OjMzMDYsXG4gICAgLy8gc29ja2V0UGF0aDpwcm9jZXNzLmVudi5JTlNUQU5DRV9VTklYX1NPQ0tFVFxufSlcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5ID0gKHF1ZXJ5OnN0cmluZyx2YWx1ZXM/OkFycmF5PHN0cmluZ3xudW1iZXI+KT0+e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxhbnk+PigocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgIG15c3FsQWNjZXNzLnF1ZXJ5KHF1ZXJ5LHZhbHVlcywoZXJyLHJlc3VsdHM6YW55KSA9PntcbiAgICAgICAgICAgIGlmKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfSlcbiAgICB9KVxufTtcblxuXG5cbiIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL0NvbmVjdGlvblwiO1xuXG5cbiBleHBvcnQgbGV0IHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFNFVCA/JywgdmFsdWVzKTtcbiBcbiBleHBvcnQgbGV0IGNoZWNrQWNjb3VudCA9IGFzeW5jIChlbWFpbDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscyBXSEVSRSBlbWFpbCA9ID8nLFtlbWFpbF0pXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCBnZXRDbGllbnRJbmZvcm1hdGlvbiA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIHdoZXJlIGlkID0gPycsW2lkXSk7XG5jb25zdCB1cGRhdGVQUklOQ0lQTEUgPSBhc3luYyAoaW5mbyxpZCk9PlF1ZXJ5KCdVUERBVEUgQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFNFVCA/IFdIRVJFIGlkID0gPycsW2luZm8saWRdKVxuXG4vLyBjb25zdCBzaW5nbGVDaGlycCA9IGFzeW5jIChpZDpzdHJpbmcpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIENoaXJwcyBXSEVSRSBpZCA9ID8nLFtpZF0pO1xuLy8gY29uc3QgZGVsZXRlTWVzc2FnZXMgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIGNvbnRhY3QgV0hFUkUgaWQgPSA/JywgW2lkXSk7XG4vLyBjb25zdCBpbnNlcnRDTElFTlQgPSBhc3luYyAoLi4udmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBLQ01fSU5DLmNsaWVudFJlZ2lzdHJhdGlvbiBTRVQgPycsIHZhbHVlcyk7XG4vLyBjb25zdCBpbnNlcnRJbnN0aXR1dGlvbiA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIE51dHJpZW50bWFwLmluc3RpdHV0aW9uIFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3QgdXBkYXRlTWVzc2FnZXMgPSBhc3luYyAobmV3Q29udGVudDogYW55LCBpZDogYW55KSA9PiBRdWVyeSgnVVBEQVRFIGNvbnRhY3QgU0VUID8gV0hFUkUgaWQgPSA/JywgW25ld0NvbnRlbnQsIGlkXSlcbi8vIGNvbnN0IGFsbFVzZXJzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gVXNlcnMnKTtcbi8vIGNvbnN0IGluc2VydFVzZXJzID0gYXN5bmModXNlciA6YW55ICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRzIFNFVCA/JyAsW3VzZXJdKTtcbi8vIGNvbnN0IGluc2VydFBoeXNpY2FsID0gYXN5bmMocGh5c2ljYWwgOmFueSxjbGllbnRpZDpudW1iZXIgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudF9saWZlc3R5bGUgU0VUID8nICxbcGh5c2ljYWxdKTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0Q2xpZW50SW5mb3JtYXRpb24sXG4gICAgdXBkYXRlUFJJTkNJUExFLFxufSIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL0NvbmVjdGlvblwiO1xuXG5cbi8vIENyZWF0ZSBTdG9yZSBcbmNvbnN0IGNyZWF0ZVN0b3JlID0gYXN5bmMgKHN0b3JlOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBJbnZlbnRvcnkuU3RvcmUgU0VUID8nLCBzdG9yZSk7XG5jb25zdCBzZWxlY3RTdG9yZSA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gSW52ZW50b3J5LlN0b3JlIFdIRVJFID87JywgW2lkXSk7XG5cblxuLy9DcmVhdGUgYW5kIEFkZCBJbnZlbnRvcnkgdG8gUHJpbmNpcGxlIERhdGFiYXNlXG5jb25zdCBpbnNlcnRJbnZlbnRvcnlJdGVtID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBTRVQgPycsIHZhbHVlcyk7XG5jb25zdCBnZXRJbnZlbnRvcnlJdGVtcyA9IGFzeW5jIChidXNpbmVzc19pZCkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBXSEVSRSBidXNpbmVzc19pZCA9ID8nLCBbYnVzaW5lc3NfaWRdKTtcbmNvbnN0IGRlbGV0ZUludmVudG9yeUl0ZW0gPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFdIRVJFID8nLCBbaWRdKTtcbmNvbnN0IHVwZGF0ZUludmVudG9yeUl0ZW0gPSBhc3luYyAodmFsdWVzLCBpZCkgPT4gUXVlcnkoJ1VQREFURSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFNFVCA/IFdIRVJFIGlkID0gPycsIFt2YWx1ZXMsIGlkXSk7XG5jb25zdCBnZXRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyA9IGFzeW5jIChidXNpbmVzc19pZCkgPT4gUXVlcnkoJ1NFTEVDVCBpZCxjYXRlZ29yeSxyZWNvbW1lbmRlZF9zdG9ja19sZXZlbCxicmFuZCxzdXBwbGllcixkZXNjcmlwdGlvbiBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgV0hFUkUgYnVzaW5lc3NfaWQgPSA/IE9SREVSIEJZIGNhdGVnb3J5JywgW2J1c2luZXNzX2lkXSk7XG5jb25zdCBpbnNlcnRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0IFNFVCA/JywgdmFsdWVzKTtcbmNvbnN0IGdldFBob25lTnVtYmVycyA9IGFzeW5jIChidXNpbmVzc19pZCkgPT4gUXVlcnkoJ1NFTEVDVCBwaG9uZV9udW1iZXIsYnVzaW5lc3NfbmFtZSBGUk9NIENyZWRlbnRpYWxzLlByaW5jaXBsZV9Mb2dpbl9DcmVkZW50aWFscyBXSEVSRSBpZCA9IDgwJywgW2J1c2luZXNzX2lkXSk7XG5jb25zdCBnZXRJbnZlbnRvcnlSZWZlcmVuY2UgPSBhc3luYyAoYnVzaW5lc3NfaWQsIGRhdGVfb2ZfYXVkaXQpID0+IFF1ZXJ5KGBTRUxFQ1QgSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QuYXVkaXRfcmVmZXJlbmNlX251bWJlciwgSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QuZGF0ZV9vZl9hdWRpdCxJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5pbl9zdG9jayxJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5vcmRlcl9xdWFudGl0eSxJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLnN1cHBsaWVyLEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuYnJhbmQsSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5kZXNjcmlwdGlvbixJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmNhdGVnb3J5LEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMucHJpY2UsSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QuaWQsSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3Qub3JkZXJfcXVhbnRpdHkgRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdCBJTk5FUiBKT0lOIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgV0hFUkUgSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QuYnVzaW5lc3NfaWQgPSA/IGFuZCBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5kYXRlX29mX2F1ZGl0ID0gPyBPUkRFUiBCWSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5kYXRlX29mX2F1ZGl0YCwgW2J1c2luZXNzX2lkLCBkYXRlX29mX2F1ZGl0XSk7XG5jb25zdCBkZWxldGVJbnZlbnRvcnlBdWRpdEl0ZW0gPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdCBXSEVSRSA/JywgW2lkXSk7XG5jb25zdCB1cGRhdGVJbnZlbnRvcnlBdWRpdEl0ZW0gPSBhc3luYyAodmFsdWVzLCBpZCkgPT4gUXVlcnkoJ1VQREFURSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbdmFsdWVzLCBpZF0pO1xuY29uc3Qgc2VsZWN0VW5pcXVlSW52ZW50b3J5UGVyaW9kID0gYXN5bmMgKCkgPT4gUXVlcnkoJ1NFTEVDVCBkYXRlX29mX2F1ZGl0IEZST00gSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QnKTtcbmNvbnN0IGluc2VydE51dHJpdGlvbmFsSW5mb3JtYXRpb24gPSBhc3luYyAodmFsdWVzLCBpZCkgPT4gUXVlcnkoJ1VQREFURSAgSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbdmFsdWVzLCBpZF0pXG5jb25zdCBpbnNlcnRQcm9kdWN0UmVjaXBlTmFtZSA9IGFzeW5jICh2YWx1ZXMpID0+IFF1ZXJ5KCdJTlNFUlQgUmVjaXBlLlByb2R1Y3RzIFNFVCA/JywgW3ZhbHVlc10pXG5jb25zdCB1cERhdGVQcm9kdWN0UmVjaXBlQ29zdCA9IGFzeW5jICh2YWx1ZXMpID0+IFF1ZXJ5KCdJTlNFUlQgUmVjaXBlLlByb2R1Y3RzIFNFVCA/JyxbdmFsdWVzXSlcbmNvbnN0IGdldFJlY2lwZVByb2R1Y3QgPSBhc3luYyAoaWQpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFJlY2lwZS5Qcm9kdWN0cyBXSEVSRSBidXNpbmVzc19pZCA9ID8nLCBbaWRdKVxuY29uc3QgZ2V0SW52ZW50b3J5SXRlbXNmb3JTZWxlY3QgPSBhc3luYyhpZCkgPT4gUXVlcnkoJ3NlbGVjdCBpZCAsZGVzY3JpcHRpb24sY2F0ZWdvcnksdG90YWxfcGFja2FnZV93ZWlnaHQscHJpY2VfcGVyX2dyYW0gZnJvbSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIHdoZXJlIGJ1c2luZXNzX2lkID0gPyBPUkRFUiBCWSBjYXRlZ29yeScsIFtpZF0pXG5jb25zdCBnZXRJbnZlbnRvcnlJdGVtc2ZvclJlY29yZGluZyA9IGFzeW5jKGlkKSA9PiBRdWVyeSgnc2VsZWN0IHRvdGFsX3BhY2thZ2Vfd2VpZ2h0LHByaWNlX3Blcl9ncmFtIGZyb20gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyB3aGVyZSBpZCA9ID8nLCBbaWRdKVxuY29uc3QgaW5zZXJ0SW5ncmVkaWVudHMgPSBhc3luYyh2YWx1ZXMscHJvZHVjdF9pZCkgPT4gUXVlcnkoJ0lOU0VSVCBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgU0VUID8gICcsIFt2YWx1ZXMscHJvZHVjdF9pZF0pXG5jb25zdCBzdW1PZkFsbEluZ3JlZGllbnRzID0gYXN5bmMocHJvZHVjdElkKSA9PlF1ZXJ5KCdzZWxlY3Qgc3VtKGlucHV0X2Nvc3QpIGZyb20gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIHdoZXJlIHByb2R1Y3RfaWQgPSA/JyxbcHJvZHVjdElkXSlcbmNvbnN0IGluc2VydElucHV0SXRlbUNvc3QgPSBhc3luYyh0b3RhbF9jb3N0LHByb2R1Y3RfaWQpID0+IFF1ZXJ5KCdVUERBVEUgUmVjaXBlLlByb2R1Y3RzIFNFVCB0b3RhbF9jb3N0ID0gPyBXSEVSRSBpZCA9ID8nLFt0b3RhbF9jb3N0LHByb2R1Y3RfaWRdKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNyZWF0ZVN0b3JlLFxuICAgIHNlbGVjdFN0b3JlLFxuICAgIGluc2VydEludmVudG9yeUl0ZW0sXG4gICAgZ2V0SW52ZW50b3J5SXRlbXMsXG4gICAgZGVsZXRlSW52ZW50b3J5SXRlbSxcbiAgICB1cGRhdGVJbnZlbnRvcnlJdGVtLFxuICAgIGdldEludmVudG9yeUNoZWNrbGlzdEl0ZW1zLFxuICAgIGluc2VydEludmVudG9yeUNoZWNrbGlzdEl0ZW1zLFxuICAgIGdldFBob25lTnVtYmVycyxcbiAgICBnZXRJbnZlbnRvcnlSZWZlcmVuY2UsXG4gICAgZGVsZXRlSW52ZW50b3J5QXVkaXRJdGVtLFxuICAgIHVwZGF0ZUludmVudG9yeUF1ZGl0SXRlbSxcbiAgICBzZWxlY3RVbmlxdWVJbnZlbnRvcnlQZXJpb2QsXG4gICAgaW5zZXJ0TnV0cml0aW9uYWxJbmZvcm1hdGlvbixcbiAgICBpbnNlcnRQcm9kdWN0UmVjaXBlTmFtZSxcbiAgICBnZXRSZWNpcGVQcm9kdWN0LFxuICAgIGdldEludmVudG9yeUl0ZW1zZm9yU2VsZWN0LFxuICAgIGdldEludmVudG9yeUl0ZW1zZm9yUmVjb3JkaW5nLFxuICAgIGluc2VydEluZ3JlZGllbnRzLFxuICAgIHN1bU9mQWxsSW5ncmVkaWVudHMsXG4gICAgaW5zZXJ0SW5wdXRJdGVtQ29zdCxcbiAgICB1cERhdGVQcm9kdWN0UmVjaXBlQ29zdFxuXG5cbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCB2ZXJpZnlJbmZvcm1hdGlvbiA9IGFzeW5jIChlbWFpbHM6IGFueSkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgV0hFUkUgZW1haWw9PycsW2VtYWlsc10pO1xuY29uc3QgdXBkYXRlQmVhcmVyVG9rZW4gPSBhc3luYyAoYmVhcmVyX3Rva2VuLGlkKT0+UXVlcnkoJ1VQREFURSBDcmVkZW50aWFscy5Mb2dpbl9DcmVkZW50aWFscyBTRVQgPyBXSEVSRSBlbWFpbCA9PyAnLFtiZWFyZXJfdG9rZW4saWRdKVxuY29uc3QgYXNzb2NpYXRlVmVyaWZpY2F0aW9uID0gYXN5bmMocGluLGlkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgV0hFUkUgcGluID0gPyBhbmQgaWQgPSA/ICcsW3BpbixpZF0pXG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuXG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHZlcmlmeUluZm9ybWF0aW9uLFxuICAgIHVwZGF0ZUJlYXJlclRva2VuLFxuICAgIGFzc29jaWF0ZVZlcmlmaWNhdGlvblxuXG59IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3Qgdmlld01lc3NhZ2VzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ3NlbGVjdCAqIGZyb20gQ29tbXVuaWNhdGlvbi5NZXNzYWdlcycpO1xuY29uc3QgaW5zZXJ0TWVzc2FnZT0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ29tbXVuaWNhdGlvbi5TdXBwb3J0IFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbi8vIGNvbnN0IGRlbGV0ZU1lc3NhZ2VzID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsIFtpZF0pO1xuLy8gY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gS0NNX0lOQy5jbGllbnRSZWdpc3RyYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuLy8gY29uc3QgaW5zZXJ0SW5zdGl0dXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5pbnN0aXR1dGlvbiBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6IGFueSwgaWQ6IGFueSkgPT4gUXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LCBpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG5cbi8vIGNvbnN0IGluc2VydFBoeXNpY2FsID0gYXN5bmMocGh5c2ljYWwgOmFueSxjbGllbnRpZDpudW1iZXIgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudF9saWZlc3R5bGUgU0VUID8nICxbcGh5c2ljYWxdKTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdmlld01lc3NhZ2VzLFxuICAgIGluc2VydE1lc3NhZ2VcblxuXG59IiwiXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgJ3Bhc3Nwb3J0LWxvY2FsJztcbmltcG9ydCAqIGFzIHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0IHtTdHJhdGVneSBhcyBCZWFyZXJTdHJhdGVneX0gZnJvbSAncGFzc3BvcnQtaHR0cC1iZWFyZXInO1xuaW1wb3J0ICogYXMgZGIgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQmVhcmVyVG9rZW5EZXRhaWxzJ1xuaW1wb3J0IHsgbXlzcWxBY2Nlc3MgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML0NvbmVjdGlvbic7XG5cblxuXG5cblxuXG5wYXNzcG9ydC51c2UobmV3IEJlYXJlclN0cmF0ZWd5KFxuICAgICAodG9rZW4sIGRvbmUpPT4ge1xuICAgICAgICBteXNxbEFjY2Vzcy5xdWVyeShgU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5Mb2dpbl9DcmVkZW50aWFscyBXaGVyZSBhY2Nlc3NfdG9rZW4gPSA/YCwgW3Rva2VuXSwgKGVycm9yLCB1c2VyKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChlcnJvcikgeyByZXR1cm4gZG9uZShlcnJvcik7IH1cbiAgICAgICAgICAgIGlmICghdXNlcikgeyByZXR1cm4gZG9uZShudWxsLCBmYWxzZSk7IH1cbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyLCB7IHNjb3BlOiAncmVhZCcgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cbikpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgJ3Bhc3Nwb3J0LWxvY2FsJztcbmltcG9ydCAqIGFzIHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0IHsgU3RyYXRlZ3kgYXMgTG9jYWxTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJ1xuaW1wb3J0IHsgY2hlY2tBY2NvdW50IH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Mb2dpbi9pbmRleCdcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHQnXG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5wYXNzcG9ydC51c2UobmV3IExvY2FsU3RyYXRlZ3koe1xuICB1c2VybmFtZUZpZWxkOiAnZW1haWwnLFxuICBwYXNzd29yZEZpZWxkOiAncGFzc3dvcmQnLFxufSwgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5KGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGRvbmU6IGFueSkge1xuICBjb25zdCBbdXNlcl0gPSBhd2FpdCBjaGVja0FjY291bnQoZW1haWwpXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlLCB7IG1lc3NhZ2U6IFwiSW52YWxpZCBjcmVkZW50aWFscy5cXG5cIiB9KTtcbiAgfVxuICBpZiAoIWJjcnlwdC5jb21wYXJlU3luYyhwYXNzd29yZCwgdXNlci5wYXNzd29yZCkpIHtcbiAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBtZXNzYWdlOiBcIkludmFsaWQgY3JlZGVudGlhbHMuXFxuXCIgfSk7XG4gIH1cbiAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XG5cbn1cbikpO1xuXG5wYXNzcG9ydC5zZXJpYWxpemVVc2VyKCh1c2VyOiBhbnksIGRvbmUpID0+IHtcbiAgZGVsZXRlIHVzZXIuZGF0ZV90aW1lXG4gIGRlbGV0ZSB1c2VyLnBhc3N3b3JkXG4gIGRlbGV0ZSB1c2VyLnRlcm1zX29mX3NlcnZpY2VcbiAgZGVsZXRlIHVzZXIucHJpdmFjeV9wb2xpY3lcbiAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwge1xuICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICBmaXJzdF9uYW1lOiB1c2VyLmZpcnN0X25hbWUsXG4gICAgICBsYXN0X25hbWU6IHVzZXIubGFzdF9uYW1lLFxuICAgICAgYnVzaW5lc3NfbmFtZTogdXNlci5idXNpbmVzc19uYW1lLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyLnBob25lX251bWJlcixcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgYWNjb3VudF90eXBlOiB1c2VyLmFjY291bnRfdHlwZSxcbiAgICAgIGFjY2Vzc190b2tlbjogdXNlci5hY2Nlc3NfdG9rZW5cbiAgICB9KTtcbiAgfSk7XG59KTtcblxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKCh1c2VyOiBhbnksIGRvbmUpID0+IHtcbiAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XG4gIH0pO1xufSk7XG5cblxucm91dGVyLnBvc3QoJy9sb2dpbl92ZXJpZmljYXRpb24nLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsJyksIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gIGlmIChyZXEudXNlcikge1xuICAgIHJlcS5sb2dJbihyZXEudXNlciwgZnVuY3Rpb24gKGVycikge1xuICAgICAgXG4gICAgICByZXR1cm4gcmVzLmNvb2tpZSgndXNlcicscmVxLnVzZXIpLmpzb24ocmVxLnVzZXIpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCFyZXEudXNlcikge1xuICAgIFxuICAgIHJlcy5zZW5kU3RhdHVzKDQwMSlcbiAgfVxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuXG5cblxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb252ZXJ0LXVuaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXlzcWwyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWh0dHAtYmVhcmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWxvY2FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR3aWxpb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuaW1wb3J0ICogYXMgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG4vLyBpbXBvcnQgSG9tZXBhZ2VTZXJ2ZXIgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5Jztcbi8vIGltcG9ydCBDbGllbnRQb3J0YWwgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuLy8gaW1wb3J0IHsgTWVzc2FnaW5nUmVzcG9uc2UsIHNlbmRSZXBseSB9IGZyb20gJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG4vLyBpbXBvcnQgJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1BBWU1FTlRTL2F1dGhvcml6ZV9jYXJkJztcbmltcG9ydCBzdXBwb3J0IGZyb20gJy4vTUVTU0FHRV9TVVBQT1JUL3N1cHBvcnQnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4vQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscydcbi8vIGltcG9ydCBiaWxsaW5nIGZyb20gJy4vQ2xpZW50UG9ydGFsL0NsaWVudEJpbGxpbmcnO1xuLy8gaW1wb3J0IG5vdGFyeSBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRTZXJ2aWNlUmVxdWVzdCc7XG5pbXBvcnQgaW52ZW50b3J5IGZyb20gJy4vQ2xpZW50UG9ydGFsL0ludmVudG9yeVJvdXRlcyc7XG5cbmltcG9ydCByZWdpc3RyYXRpb24gZnJvbSAnLi9Ib21lcGFnZS9yZWdpc3RyYXRpb24nXG5pbXBvcnQgVVBTdHJhdGVneSBmcm9tICcuL1NlY3VyaXR5L2xvY2FsU3RyYXRlZ3knXG5pbXBvcnQgKiBhcyBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbidcbmltcG9ydCAnLi9TZWN1cml0eS9CZWFyZXInXG5cbmltcG9ydCAqIGFzIGNvb2tpZXBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJ1xuXG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGNvcnMoKSlcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgcmVzLnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICcqJylcbiAgcmVzLnNldCgnQ2FjaGUtQ29udHJvbCcsJ25vLWNhY2hlJylcbiAgbmV4dCgpXG59KVxuYXBwLnNldCgndHJ1c3QgcHJveHknLCB0cnVlKVxuXG5hcHAudXNlKGNvb2tpZXBhcnNlcigpKVxuYXBwLnVzZShzZXNzaW9uKHtcbiAgc2VjcmV0OiAna2V5Ym9hcmQgY2F0JyxcbiAgcmVzYXZlOiBmYWxzZSxcbiAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICBjb29raWU6IHsgc2VjdXJlOiBmYWxzZSB9XG59KSk7XG5cblxuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xuYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpO1xuXG5cblxuYXBwLnVzZShVUFN0cmF0ZWd5KVxuY29uc3QgdmFsaWRhdGVVc2VyID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGlmICghcmVxLnVzZXIpIHtcbiAgICByZXMucmVkaXJlY3QoJy9zaWdudXAnKVxuICB9IGVsc2Uge1xuICAgIG5leHQoKVxuICB9XG59XG5cbmFwcC51c2UoJy8nLCBleHByZXNzLnN0YXRpYyggJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3NpZ251cCcsIGV4cHJlc3Muc3RhdGljKCAncHVibGljJykpXG5hcHAudXNlKCcvc3RvcmUnLCBleHByZXNzLnN0YXRpYyggJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3ByaW5jaXBsZS8nLCAgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuXG4vLyBhcHAudXNlKCcvcHJpbmNpcGxlLycsIHZhbGlkYXRlVXNlciwgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuXG5cblxuXG5cblxuYXBwLnVzZShyZWdpc3RyYXRpb24pXG5cbmFwcC51c2Uoc3VwcG9ydClcbmFwcC51c2UoY2xpZW50KVxuYXBwLnVzZShpbnZlbnRvcnkpXG5cblxuIFxuYXBwLmdldChcIipcIiwgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uL3B1YmxpY1wiLCBcImluZGV4Lmh0bWxcIikpO1xufSk7XG5hcHAubGlzdGVuKDgwODAsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAkezgwODB9Li4uYClcbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=