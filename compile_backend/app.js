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
// Inventory Item Routes
router.post('/insertInventoryItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var weightGrams, current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req);
                weightGrams = convert(req.body.total_package_weight.unit).from(req.body.total_package_weight.weight).to('g');
                req.body.price_per_gram = req.body.price / weightGrams;
                req.body.total_package_weight = weightGrams;
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
router.put('/updateInventoryItem', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var getProducts, weightGrams, price_per_gram, current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.getInventoryItemsforRecording(req.body.id)];
            case 1:
                getProducts = _a.sent();
                if (!(req.body.values.price && req.body.values.total_package_weight !== undefined)) return [3 /*break*/, 3];
                weightGrams = convert(req.body.values.total_package_weight.unit).from(req.body.values.total_package_weight.weight).to('g');
                console.log('here at middle ware 1');
                price_per_gram = Number(req.body.values.price / weightGrams).toFixed(2);
                req.body.values.price_per_gram = price_per_gram;
                req.body.values.total_package_weight = req.body.values.total_package_weight.unit;
                console.log(req.body);
                return [4 /*yield*/, Inventory_1.default.updateInventoryItem(req.body.values, req.body.id)];
            case 2:
                current_store = _a.sent();
                res.json(current_store);
                return [3 /*break*/, 4];
            case 3:
                next();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); }, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newData, getProducts, newMap;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newData = Object.entries(req.body.values);
                return [4 /*yield*/, Inventory_1.default.getInventoryItemsforRecording(req.body.id)];
            case 1:
                getProducts = _a.sent();
                newMap = newData.forEach(function (i, n, a) { return __awaiter(void 0, void 0, void 0, function () {
                    var weightGrams, price_per_gram, current_store, weightGrams, price_per_gram, current_store;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(i[0] === 'price' && i[1] != getProducts[0].price || undefined)) return [3 /*break*/, 2];
                                weightGrams = convert(getProducts[0].total_package_weight).from(req.body.values.total_package_weight.unit).to('g');
                                price_per_gram = i[1] / weightGrams;
                                req.body.values.price_per_gram = Number(price_per_gram).toFixed(2);
                                return [4 /*yield*/, Inventory_1.default.updateInventoryItem(req.body.values, req.body.id)];
                            case 1:
                                current_store = _a.sent();
                                res.json(current_store);
                                return [3 /*break*/, 4];
                            case 2:
                                if (!(i[0] === 'total_package_weight' && i[1]['total_package_weight'] != getProducts[0].total_package_weight || undefined)) return [3 /*break*/, 4];
                                weightGrams = convert(i[1].unit).from(i[1].weight).to('g');
                                price_per_gram = getProducts[0].price / weightGrams;
                                req.body.values.price_per_gram = Number(price_per_gram).toFixed(2);
                                req.body.values.total_package_weight = i[1].unit;
                                return [4 /*yield*/, Inventory_1.default.updateInventoryItem(req.body.values, req.body.id)];
                            case 3:
                                current_store = _a.sent();
                                res.json(current_store);
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
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
    var divider, addedNewNutritionItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body.values.total_fat.unit);
                divider = 1 / req.body.values.serving_size;
                req.body.values.calories = req.body.values.calories.amount;
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
                return [4 /*yield*/, Inventory_1.default.insertNutritionalInformation(req.body.values, req.body.id)];
            case 1:
                addedNewNutritionItem = _a.sent();
                res.json(addedNewNutritionItem);
                return [2 /*return*/];
        }
    });
}); });
router.post('/insertProductName', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var insertProduct;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req.body.business_id = 80;
                req.body.serving_size = convert(req.body.serving_size.amount).from(req.body.serving_size.unit).to('g');
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
                        var getInfo, getProducts_2, data_2;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Inventory_1.default.sumOfAllIngredients(i.id)];
                                case 1:
                                    getInfo = _a.sent();
                                    if (!(getInfo[0]['sum(input_cost)'] === null)) return [3 /*break*/, 2];
                                    return [2 /*return*/, Inventory_1.default.insertInputItemMeta(0, 0, 0, i.id)];
                                case 2:
                                    if (!(getInfo[0]['sum(input_cost)'] !== null || undefined)) return [3 /*break*/, 5];
                                    return [4 /*yield*/, Inventory_1.default.getIngredientCount(i.id)];
                                case 3:
                                    getProducts_2 = _a.sent();
                                    return [4 /*yield*/, Inventory_1.default.totalInputWeight(i.id)];
                                case 4:
                                    data_2 = _a.sent();
                                    return [2 /*return*/, Inventory_1.default.insertInputItemMeta(getInfo[0]['sum(input_cost)'], getProducts_2[0]['COUNT(inventory_item_id)'], data_2[0]['sum(input_weight)'], i.id)];
                                case 5: return [2 /*return*/, i];
                            }
                        });
                    }); })];
            case 2:
                newProduct = _a.sent();
                return [4 /*yield*/, Inventory_1.default.getRecipeProduct(business_id)];
            case 3:
                getProducts_1 = _a.sent();
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
                        label: i.description,
                        price_per_gram: i.price_per_gram
                    };
                });
                res.json(selectItem);
                return [2 /*return*/];
        }
    });
}); });
router.post('/insertProductInputs', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business_id, dataExhange, data_3, costUpload;
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
                                    console.log(getProducts);
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
                console.log(data_3);
                return [4 /*yield*/, Inventory_1.default.insertInputItemMetaFull(data_3[0], req.body.inputs[0].product_id)];
            case 3:
                costUpload = _a.sent();
                console.log(costUpload);
                res.json('costUpload');
                return [2 /*return*/];
        }
    });
}); });
router.delete('/deleteProduct', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_product, current_product_inputs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Inventory_1.default.deleteProduct(req.body[0])];
            case 1:
                current_product = _a.sent();
                return [4 /*yield*/, Inventory_1.default.deleteInput(req.body[0])];
            case 2:
                current_product_inputs = _a.sent();
                res.json('success');
                return [2 /*return*/];
        }
    });
}); });
router.put('/updateProductInformation', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var current_store;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(req.body);
                if (!(req.body.values.serving_size.amount == undefined && req.body.values.serving_size.unit == undefined && req.body.values.product_name == undefined && req.body.values.sales_price == undefined && req.body.values.units == undefined)) return [3 /*break*/, 1];
                console.log('all off:', req.body);
                res.json({ affectedRows: 1 });
                return [3 /*break*/, 3];
            case 1:
                if (!(req.body.values.serving_size.amount == undefined || req.body.values.serving_size.unit == undefined)) return [3 /*break*/, 3];
                delete req.body.values.serving_size;
                console.log('delete serving_size:', req.body);
                return [4 /*yield*/, Inventory_1.default.UpdateProduct(req.body.values, req.body.id)];
            case 2:
                current_store = _a.sent();
                res.json(current_store);
                _a.label = 3;
            case 3: return [2 /*return*/];
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
                console.log(req.body);
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
        mediaUrl: 'https://www.kcminc.io/Large512x512.png'
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
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Inventory.Inventory_Items SET ? WHERE id = ?', [values, id])];
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
var insertInputItemMeta = function (total_cost, total_input_count, total_weight, id) {
    if (total_cost === void 0) { total_cost = 0; }
    if (total_input_count === void 0) { total_input_count = 0; }
    if (total_weight === void 0) { total_weight = 0; }
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, (0, Conection_1.Query)('UPDATE Recipe.Products SET total_cost = ?, total_input_count = ?, total_weight = ? WHERE id = ?', [total_cost, total_input_count, total_weight, id])];
    }); });
};
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
var inputNutritionalInformation = function (productId) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('select sum(input_cost) as total_cost, sum(input_weight) as total_weight, COUNT(inventory_item_id) as total_input_count, sum(calories) as calories,sum(total_fat) as total_fat,sum(saturated_fat) as saturated_fat,sum(trans_fat) as trans_fat,sum(cholesterol) as cholesterol,sum(sodium) as sodium,sum(carbohydrates) as carbohydrates,sum(fiber) as fiber,sum(sugar) as sugar,sum(added_sugar) added_sugar,sum(protein) as protein,sum(calcium) as calcium,sum(iron) as iron,sum(potassium) as potassium,sum(vitamin_d) as vitamin_d from Recipe.Product_Inputs where product_id = ?', [productId])];
}); }); };
var deleteInput = function (productId) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('DELETE FROM Recipe.Product_Inputs WHERE product_id = ?', [productId])];
}); }); };
var insertInputItemMetaFull = function (values, id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, (0, Conection_1.Query)('UPDATE Recipe.Products SET ? WHERE id = ?', [values, id])];
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
    insertInputItemMeta: insertInputItemMeta,
    upDateProductRecipeCost: upDateProductRecipeCost,
    getIngredientCount: getIngredientCount,
    totalInputWeight: totalInputWeight,
    deleteInput: deleteInput,
    deleteProduct: deleteProduct,
    UpdateProduct: UpdateProduct,
    inputNutritionalInformation: inputNutritionalInformation,
    insertInputItemMetaFull: insertInputItemMetaFull
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTTtnQkFDMUQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUNoSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUN4SSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUM1SCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUNuSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUNwSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUN4SSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUNoSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUNoSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPO2dCQUN0SCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUN2SCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUM5RyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPO2dCQUM3SCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElB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Q2xDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO1FBQ2IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7S0FDeEI7U0FBTTtRQUNMLElBQUksRUFBRTtLQUNQO0FBQ0gsQ0FBQztBQUVELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUUsUUFBUSxDQUFDLENBQUM7QUFDdkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBRSxRQUFRLENBQUMsQ0FBQztBQUM3QyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakQsaUVBQWlFO0FBT2pFLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQVksQ0FBQztBQUVyQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUM7QUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQywrQkFBTSxDQUFDO0FBQ2YsR0FBRyxDQUFDLEdBQUcsQ0FBQyx5QkFBUyxDQUFDO0FBSWxCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUMsQ0FBQztBQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBNEIsSUFBSSxRQUFLLENBQUM7QUFDcEQsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscy50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9DbGllbnRQb3J0YWwvSW52ZW50b3J5Um91dGVzLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL0hvbWVwYWdlL3JlZ2lzdHJhdGlvbi50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9NRVNTQUdFX1NVUFBPUlQvc3VwcG9ydC50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU01TL3NlbmRfc21zLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvQ29uZWN0aW9uLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvTG9naW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvUHJpbmNpcGxlQ2xpZW50UG9ydGFsL0ludmVudG9yeS50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1NlY3VyaXR5L1ZlcmlmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly9rY21pbmMvLi9zcmMvQkFDS0VORC9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1N1cHBvcnRfRGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8va2NtaW5jLy4vc3JjL0JBQ0tFTkQvU2VjdXJpdHkvQmVhcmVyLnRzIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL1NlY3VyaXR5L2xvY2FsU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiYm9keS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJjb252ZXJ0LXVuaXRzXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJkYXlqc1wiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudi9jb25maWdcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwibXlzcWwyXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnRcIiIsIndlYnBhY2s6Ly9rY21pbmMvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1odHRwLWJlYXJlclwiIiwid2VicGFjazovL2tjbWluYy9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0LWxvY2FsXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIGNvbW1vbmpzIFwidHdpbGlvXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8va2NtaW5jL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tjbWluYy8uL3NyYy9CQUNLRU5EL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBjbGllbnRfYWRtaW5fcXVlcnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQ2xpZW50UGVyc29uYWxEZXRhaWxzJztcbmltcG9ydCB7Y2hlY2tBY2NvdW50fSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luLydcblxuXG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbnJvdXRlci5nZXQoJy9nZXRQcmluY2lwbGVJbmZvcm1hdGlvbicsIGFzeW5jIChyZXE6YW55LCByZXMpID0+IHtcbiAgICByZXMuY29va2llKCd1c2VyJyxyZXEudXNlcilcblxuXG59KTtcblxucm91dGVyLnB1dCgnL3VwZGF0ZUNsaWVudGluZm9ybWF0aW9uJywgYXN5bmMgKHJlcTphbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IG5ld1JlcGx5ID0gYXdhaXQgY2xpZW50X2FkbWluX3F1ZXJ5LnVwZGF0ZVBSSU5DSVBMRShyZXEuYm9keSxyZXEudXNlci5pZClcbiAgICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsgXG5cbiIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBzdG9yZXMgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvSW52ZW50b3J5JztcbmltcG9ydCB2ZXJpZnkgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9TZWN1cml0eS9WZXJpZmljYXRpb24nXG5pbXBvcnQgKiBhcyBjb252ZXJ0IGZyb20gJ2NvbnZlcnQtdW5pdHMnXG5cblxuXG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxuXG4vLyBJbnZlbnRvcnkgSXRlbSBSb3V0ZXNcblxucm91dGVyLnBvc3QoJy9pbnNlcnRJbnZlbnRvcnlJdGVtcycsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhyZXEpXG4gICAgY29uc3Qgd2VpZ2h0R3JhbXMgPSBjb252ZXJ0KHJlcS5ib2R5LnRvdGFsX3BhY2thZ2Vfd2VpZ2h0LnVuaXQpLmZyb20ocmVxLmJvZHkudG90YWxfcGFja2FnZV93ZWlnaHQud2VpZ2h0KS50bygnZycpXG4gICAgcmVxLmJvZHkucHJpY2VfcGVyX2dyYW0gPSByZXEuYm9keS5wcmljZSAvIHdlaWdodEdyYW1zXG4gICAgcmVxLmJvZHkudG90YWxfcGFja2FnZV93ZWlnaHQgPSB3ZWlnaHRHcmFtc1xuXG5cbiAgICBjb25zdCBjdXJyZW50X3N0b3JlID0gYXdhaXQgc3RvcmVzLmluc2VydEludmVudG9yeUl0ZW0ocmVxLmJvZHkpXG4gICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvZ2V0SW52ZW50b3J5SXRlbXMnLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuXG5cbiAgICAvLyAgICBsZXQgYnVzaW5lc3NfaWQgPSByZXEuY29va2llcy51c2VyLmlkXG4gICAgbGV0IGJ1c2luZXNzX2lkID0gODBcblxuICAgIGNvbnN0IHJlc3VsdEludmVudG9yeSA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtcyhidXNpbmVzc19pZClcblxuICAgIHJlcy5qc29uKHJlc3VsdEludmVudG9yeSlcbn0pO1xuXG5cbnJvdXRlci5kZWxldGUoJy9kZWxldGVJbnZlbnRvcnlJdGVtcycsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLmRlbGV0ZUludmVudG9yeUl0ZW0ocmVxLmJvZHkpXG4gICAgcmVzLmpzb24oY3VycmVudF9zdG9yZS5hZmZlY3RlZFJvd3MpXG5cbn0pO1xuXG5cblxucm91dGVyLnB1dCgnL3VwZGF0ZUludmVudG9yeUl0ZW0nLFxuXG4gICAgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFByb2R1Y3RzID0gYXdhaXQgc3RvcmVzLmdldEludmVudG9yeUl0ZW1zZm9yUmVjb3JkaW5nKHJlcS5ib2R5LmlkKVxuICAgICAgICBpZiAocmVxLmJvZHkudmFsdWVzLnByaWNlICYmIHJlcS5ib2R5LnZhbHVlcy50b3RhbF9wYWNrYWdlX3dlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWlnaHRHcmFtcyA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLnRvdGFsX3BhY2thZ2Vfd2VpZ2h0LnVuaXQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnRvdGFsX3BhY2thZ2Vfd2VpZ2h0LndlaWdodCkudG8oJ2cnKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUgYXQgbWlkZGxlIHdhcmUgMScpXG5cbiAgICAgICAgICAgIGNvbnN0IHByaWNlX3Blcl9ncmFtID0gTnVtYmVyKHJlcS5ib2R5LnZhbHVlcy5wcmljZSAvIHdlaWdodEdyYW1zKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICByZXEuYm9keS52YWx1ZXMucHJpY2VfcGVyX2dyYW0gPSBwcmljZV9wZXJfZ3JhbVxuICAgICAgICAgICAgcmVxLmJvZHkudmFsdWVzLnRvdGFsX3BhY2thZ2Vfd2VpZ2h0ID0gcmVxLmJvZHkudmFsdWVzLnRvdGFsX3BhY2thZ2Vfd2VpZ2h0LnVuaXRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICAgICAgICAgICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLnVwZGF0ZUludmVudG9yeUl0ZW0ocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICAgICAgICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmVudHJpZXMocmVxLmJvZHkudmFsdWVzKVxuICAgICAgICBjb25zdCBnZXRQcm9kdWN0cyA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtc2ZvclJlY29yZGluZyhyZXEuYm9keS5pZClcbiAgICAgICAgY29uc3QgbmV3TWFwID0gbmV3RGF0YS5mb3JFYWNoKGFzeW5jIChpOiBhbnksIG4sIGEpID0+IHtcbiAgICAgICAgICAgIGlmICgoaVswXSA9PT0gJ3ByaWNlJyAmJiBpWzFdICE9IGdldFByb2R1Y3RzWzBdLnByaWNlIHx8IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3ZWlnaHRHcmFtcyA9IGNvbnZlcnQoZ2V0UHJvZHVjdHNbMF0udG90YWxfcGFja2FnZV93ZWlnaHQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnRvdGFsX3BhY2thZ2Vfd2VpZ2h0LnVuaXQpLnRvKCdnJylcbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZV9wZXJfZ3JhbSA9IGlbMV0gLyB3ZWlnaHRHcmFtc1xuICAgICAgICAgICAgICAgIHJlcS5ib2R5LnZhbHVlcy5wcmljZV9wZXJfZ3JhbSA9IE51bWJlcihwcmljZV9wZXJfZ3JhbSkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy51cGRhdGVJbnZlbnRvcnlJdGVtKHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG5cbiAgICAgICAgICAgICAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpWzBdID09PSAndG90YWxfcGFja2FnZV93ZWlnaHQnICYmIGlbMV1bJ3RvdGFsX3BhY2thZ2Vfd2VpZ2h0J10gIT0gZ2V0UHJvZHVjdHNbMF0udG90YWxfcGFja2FnZV93ZWlnaHQgfHwgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2VpZ2h0R3JhbXMgPSBjb252ZXJ0KGlbMV0udW5pdCkuZnJvbShpWzFdLndlaWdodCkudG8oJ2cnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlX3Blcl9ncmFtID0gZ2V0UHJvZHVjdHNbMF0ucHJpY2UgLyB3ZWlnaHRHcmFtc1xuICAgICAgICAgICAgICAgIHJlcS5ib2R5LnZhbHVlcy5wcmljZV9wZXJfZ3JhbSA9IE51bWJlcihwcmljZV9wZXJfZ3JhbSkudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgIHJlcS5ib2R5LnZhbHVlcy50b3RhbF9wYWNrYWdlX3dlaWdodCA9IGlbMV0udW5pdFxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy51cGRhdGVJbnZlbnRvcnlJdGVtKHJlcS5ib2R5LnZhbHVlcywgcmVxLmJvZHkuaWQpXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oY3VycmVudF9zdG9yZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH0pO1xuXG5cblxuXG4vL0NoZWNrbGlzdCBSb3V0ZXNcblxucm91dGVyLmdldCgnL2dldEludmVudG9yeUl0ZW1zRm9yRGFpbHlDaGVja2xpc3QvOmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgYnVzaW5lc3NfaWQgPSByZXEucGFyYW1zLmlkXG4gICAgY29uc3QgbmV3UmVwbHkgPSBhd2FpdCBzdG9yZXMuZ2V0SW52ZW50b3J5Q2hlY2tsaXN0SXRlbXMoYnVzaW5lc3NfaWQpXG4gICAgcmVzLmpzb24obmV3UmVwbHkpXG5cbn0pO1xuXG5yb3V0ZXIucG9zdCgnL2luc2VydEludmVudG9yeUNoZWNrbGlzdEl0ZW1zJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICByZXEuYm9keS5vcmRlcl9xdWFudGl0eSA9IHJlcS5ib2R5LnJlY29tbWVuZGVkX3N0b2NrX2xldmVsIC0gcmVxLmJvZHkuaW5fc3RvY2tcblxuICAgIGlmIChyZXEuYm9keS5vcmRlcl9xdWFudGl0eSA8PSAwKSB7XG4gICAgICAgIHJlcS5ib2R5Lm9yZGVyX3F1YW50aXR5ID0gMFxuICAgIH1cbiAgICBkZWxldGUgcmVxLmJvZHkucmVjb21tZW5kZWRfc3RvY2tfbGV2ZWxcbiAgICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IHN0b3Jlcy5pbnNlcnRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyhyZXEuYm9keSlcbiAgICByZXMuanNvbihuZXdSZXBseSlcbn0pO1xuXG5yb3V0ZXIucG9zdCgnL3ZlcmlmeV9hc3NvY2lhdGVfcGluJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcblxuICAgIGNvbnN0IFtuZXdSZXBseSwgZXJyb3JdID0gYXdhaXQgdmVyaWZ5LmFzc29jaWF0ZVZlcmlmaWNhdGlvbihyZXEuYm9keS5waW4sIHJlcS5ib2R5LmlkKVxuXG5cbiAgICBpZiAobmV3UmVwbHkpIHtcbiAgICAgICAgcmVzLmpzb24odHJ1ZSlcbiAgICB9IGVsc2UgaWYgKCFuZXdSZXBseSkge1xuICAgICAgICByZXMuanNvbihmYWxzZSlcbiAgICB9XG5cblxufSk7XG5cbnJvdXRlci5nZXQoJy9pbnZlbnRvcnlfcmVmZXJlbmNlX2luZm9ybWF0aW9uJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICAvLyBsZXQgaWQgPSByZXEuY29va2llcy51c2VyLmlkXG4gICAgbGV0IGJ1c2luZXNzX2lkID0gODBcbiAgICBsZXQgZGF0ZV9vZl9hdWRpdCA9ICdTdW5kYXksIEp1bHkgMzAsIDIwMjMnXG5cbiAgICBjb25zdCByZXBseSA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlSZWZlcmVuY2UoYnVzaW5lc3NfaWQsIHJlcS5xdWVyeS5hdWRpdERhdGUpXG4gICAgcmVzLmpzb24ocmVwbHkpXG59KTtcblxucm91dGVyLmRlbGV0ZSgnL2RlbGV0ZUludmVudG9yeUF1ZGl0SXRlbXMnLCBhc3luYyAocmVxOiBhbnksIHJlcykgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRfc3RvcmU6IGFueSA9IGF3YWl0IHN0b3Jlcy5kZWxldGVJbnZlbnRvcnlBdWRpdEl0ZW0ocmVxLmJvZHkpXG4gICAgcmVzLmpzb24oY3VycmVudF9zdG9yZS5hZmZlY3RlZFJvd3MpXG5cbn0pO1xuXG5cblxucm91dGVyLnB1dCgnL3VwZGF0ZUludmVudG9yeUF1ZGl0SXRlbScsIGFzeW5jIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLnVwZGF0ZUludmVudG9yeUF1ZGl0SXRlbShyZXEuYm9keS52YWx1ZXMsIHJlcS5ib2R5LmlkKVxuICAgIHJlcy5qc29uKGN1cnJlbnRfc3RvcmUpXG5cbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvaW52ZW50b3J5UGVyaW9kJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgaW52ZW50b3J5X3BlcmlvZCA9IGF3YWl0IHN0b3Jlcy5zZWxlY3RVbmlxdWVJbnZlbnRvcnlQZXJpb2QoKVxuICAgIHJlcy5qc29uKGludmVudG9yeV9wZXJpb2QpXG59KVxuXG5cblxuLy8gQWRkIE51dHJpdGlvbiBJbmZvcm1hdGlvblxuXG5yb3V0ZXIucHV0KCcvYWRkTnV0cml0aW9uSW5mb3JtYXRpb24nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keS52YWx1ZXMudG90YWxfZmF0LnVuaXQpXG5cbiAgICBjb25zdCBkaXZpZGVyID0gMSAvIHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemVcblxuXG4gICAgcmVxLmJvZHkudmFsdWVzLmNhbG9yaWVzID0gcmVxLmJvZHkudmFsdWVzLmNhbG9yaWVzLmFtb3VudFxuICAgIHJlcS5ib2R5LnZhbHVlcy50b3RhbF9mYXQgPSAoKGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLnRvdGFsX2ZhdC5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnRvdGFsX2ZhdC51bml0KS50bygnZycpKSAqIGRpdmlkZXIpXG4gICAgcmVxLmJvZHkudmFsdWVzLnNhdHVyYXRlZF9mYXQgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5zYXR1cmF0ZWRfZmF0LmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuc2F0dXJhdGVkX2ZhdC51bml0KS50bygnZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy50cmFuc19mYXQgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy50cmFuc19mYXQuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy50cmFuc19mYXQudW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuY2hvbGVzdGVyb2wgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5jaG9sZXN0ZXJvbC5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmNob2xlc3Rlcm9sLnVuaXQpLnRvKCdtZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5zb2RpdW0gPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5zb2RpdW0uYW1vdW50KS5mcm9tKHJlcS5ib2R5LnZhbHVlcy5zb2RpdW0udW5pdCkudG8oJ21nJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLmNhcmJvaHlkcmF0ZXMgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5jYXJib2h5ZHJhdGVzLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuY2FyYm9oeWRyYXRlcy51bml0KS50bygnZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5maWJlciA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLmZpYmVyLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuZmliZXIudW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuc3VnYXIgPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5zdWdhci5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLnN1Z2FyLnVuaXQpLnRvKCdnJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLnByb3RlaW4gPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5wcm90ZWluLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMucHJvdGVpbi51bml0KS50bygnZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5jYWxjaXVtID0gY29udmVydChyZXEuYm9keS52YWx1ZXMuY2FsY2l1bS5hbW91bnQpLmZyb20ocmVxLmJvZHkudmFsdWVzLmNhbGNpdW0udW5pdCkudG8oJ21nJykgKiBkaXZpZGVyXG4gICAgcmVxLmJvZHkudmFsdWVzLmlyb24gPSBjb252ZXJ0KHJlcS5ib2R5LnZhbHVlcy5pcm9uLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuaXJvbi51bml0KS50bygnbWcnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMucG90YXNzaXVtID0gY29udmVydChyZXEuYm9keS52YWx1ZXMucG90YXNzaXVtLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMucG90YXNzaXVtLnVuaXQpLnRvKCdtZycpICogZGl2aWRlclxuICAgIHJlcS5ib2R5LnZhbHVlcy5hZGRlZF9zdWdhciA9IGNvbnZlcnQocmVxLmJvZHkudmFsdWVzLmFkZGVkX3N1Z2FyLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMuYWRkZWRfc3VnYXIudW5pdCkudG8oJ2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMudml0YW1pbl9kID0gY29udmVydChyZXEuYm9keS52YWx1ZXMudml0YW1pbl9kLmFtb3VudCkuZnJvbShyZXEuYm9keS52YWx1ZXMudml0YW1pbl9kLnVuaXQpLnRvKCdtY2cnKSAqIGRpdmlkZXJcbiAgICByZXEuYm9keS52YWx1ZXMuYWxsZXJnaWVzID0gSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkudmFsdWVzLmFsbGVyZ2llcylcbiAgICBjb25zdCBhZGRlZE5ld051dHJpdGlvbkl0ZW0gPSBhd2FpdCBzdG9yZXMuaW5zZXJ0TnV0cml0aW9uYWxJbmZvcm1hdGlvbihyZXEuYm9keS52YWx1ZXMsIHJlcS5ib2R5LmlkKVxuICAgIHJlcy5qc29uKGFkZGVkTmV3TnV0cml0aW9uSXRlbSlcbn0pXG5cblxucm91dGVyLnBvc3QoJy9pbnNlcnRQcm9kdWN0TmFtZScsIGFzeW5jIChyZXE6IGFueSwgcmVzOiBhbnkpID0+IHtcbiAgICByZXEuYm9keS5idXNpbmVzc19pZCA9IDgwXG4gICAgcmVxLmJvZHkuc2VydmluZ19zaXplID0gY29udmVydChyZXEuYm9keS5zZXJ2aW5nX3NpemUuYW1vdW50KS5mcm9tKHJlcS5ib2R5LnNlcnZpbmdfc2l6ZS51bml0KS50bygnZycpXG5cblxuICAgIGNvbnN0IGluc2VydFByb2R1Y3QgPSBhd2FpdCBzdG9yZXMuaW5zZXJ0UHJvZHVjdFJlY2lwZU5hbWUocmVxLmJvZHkpXG5cbiAgICByZXMuanNvbignaGVsbG8nKVxufSk7XG5cbnJvdXRlci5nZXQoJy9nZXRSZWNpcGVQcm9kdWN0JywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5cbiAgICBjb25zdCBidXNpbmVzc19pZCA9IDgwO1xuICAgIGNvbnN0IGdldFByb2R1Y3RzID0gYXdhaXQgc3RvcmVzLmdldFJlY2lwZVByb2R1Y3QoYnVzaW5lc3NfaWQpO1xuICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSBhd2FpdCBnZXRQcm9kdWN0cy5tYXAoYXN5bmMgKGksIG4sIGEpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0SW5mbyA9IGF3YWl0IHN0b3Jlcy5zdW1PZkFsbEluZ3JlZGllbnRzKGkuaWQpXG4gICAgICAgIGlmIChnZXRJbmZvWzBdWydzdW0oaW5wdXRfY29zdCknXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3Jlcy5pbnNlcnRJbnB1dEl0ZW1NZXRhKDAsIDAsIDAsIGkuaWQpXG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0SW5mb1swXVsnc3VtKGlucHV0X2Nvc3QpJ10gIT09IG51bGwgfHwgdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBnZXRQcm9kdWN0c18yID0gYXdhaXQgc3RvcmVzLmdldEluZ3JlZGllbnRDb3VudChpLmlkKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFfMiA9IGF3YWl0IHN0b3Jlcy50b3RhbElucHV0V2VpZ2h0KGkuaWQpXG4gICAgICAgICAgICByZXR1cm4gc3RvcmVzLmluc2VydElucHV0SXRlbU1ldGEoZ2V0SW5mb1swXVsnc3VtKGlucHV0X2Nvc3QpJ10sIGdldFByb2R1Y3RzXzJbMF1bJ0NPVU5UKGludmVudG9yeV9pdGVtX2lkKSddLCBkYXRhXzJbMF1bJ3N1bShpbnB1dF93ZWlnaHQpJ10sIGkuaWQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlcbiAgICB9KTtcbiAgICBjb25zdCBnZXRQcm9kdWN0c18xID0gYXdhaXQgc3RvcmVzLmdldFJlY2lwZVByb2R1Y3QoYnVzaW5lc3NfaWQpO1xuXG4gICAgcmVzLmpzb24oZ2V0UHJvZHVjdHNfMSlcblxufSlcblxucm91dGVyLmdldCgnL2ludmVudG9yeUl0ZW1zRm9yU2VsZWN0UmVjaXBlcycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGxldCBidXNpbmVzc19pZCA9IDgwXG4gICAgY29uc3QgZ2V0UHJvZHVjdHMgPSBhd2FpdCBzdG9yZXMuZ2V0SW52ZW50b3J5SXRlbXNmb3JTZWxlY3QoYnVzaW5lc3NfaWQpXG4gICAgY29uc3Qgc2VsZWN0SXRlbSA9IGdldFByb2R1Y3RzLm1hcCgoaSwgbiwgYSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGkuaWQsXG4gICAgICAgICAgICBsYWJlbDogaS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByaWNlX3Blcl9ncmFtOiBpLnByaWNlX3Blcl9ncmFtXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJlcy5qc29uKHNlbGVjdEl0ZW0pXG59KVxuXG5cbnJvdXRlci5wb3N0KCcvaW5zZXJ0UHJvZHVjdElucHV0cycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGxldCBidXNpbmVzc19pZCA9IDgwXG5cbiAgICBjb25zdCBkYXRhRXhoYW5nZSA9IGF3YWl0IHJlcS5ib2R5LmlucHV0cy5mb3JFYWNoKGFzeW5jIChpLCBuLCBhKSA9PiB7XG4gICAgICAgIGkuaW5wdXRfd2VpZ2h0ID0gY29udmVydChpLmlucHV0X3dlaWdodCkuZnJvbShpLnVuaXQpLnRvKCdnJylcbiAgICAgICAgY29uc3QgZ2V0UHJvZHVjdHM6IGFueSA9IGF3YWl0IHN0b3Jlcy5nZXRJbnZlbnRvcnlJdGVtc2ZvclJlY29yZGluZyhpLmludmVudG9yeV9pdGVtX2lkKVxuICAgICAgICBjb25zb2xlLmxvZyhnZXRQcm9kdWN0cylcblxuICAgICAgICBpLmlucHV0X2Nvc3QgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5wcmljZV9wZXJfZ3JhbVxuICAgICAgICBpLmNhbG9yaWVzID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2Fsb3JpZXNcbiAgICAgICAgaS50b3RhbF9mYXQgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS50b3RhbF9mYXRcbiAgICAgICAgaS5zYXR1cmF0ZWRfZmF0ID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uc2F0dXJhdGVkX2ZhdFxuICAgICAgICBpLnRyYW5zX2ZhdCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnRyYW5zX2ZhdFxuICAgICAgICBpLmNob2xlc3Rlcm9sID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2hvbGVzdGVyb2xcbiAgICAgICAgaS5zb2RpdW0gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5zb2RpdW1cbiAgICAgICAgaS5jYXJib2h5ZHJhdGVzID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uY2FyYm9oeWRyYXRlc1xuICAgICAgICBpLmZpYmVyID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uZmliZXJcbiAgICAgICAgaS5zdWdhciA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnN1Z2FyXG4gICAgICAgIGkuYWRkZWRfc3VnYXIgPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5hZGRlZF9zdWdhclxuICAgICAgICBpLnByb3RlaW4gPSBwYXJzZUludChpLmlucHV0X3dlaWdodCkgKiBnZXRQcm9kdWN0c1swXS5wcm90ZWluXG4gICAgICAgIGkuY2FsY2l1bSA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLmNhbGNpdW1cbiAgICAgICAgaS5pcm9uID0gcGFyc2VJbnQoaS5pbnB1dF93ZWlnaHQpICogZ2V0UHJvZHVjdHNbMF0uaXJvblxuICAgICAgICBpLnBvdGFzc2l1bSA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnBvdGFzc2l1bVxuICAgICAgICBpLnZpdGFtaW5fZCA9IHBhcnNlSW50KGkuaW5wdXRfd2VpZ2h0KSAqIGdldFByb2R1Y3RzWzBdLnZpdGFtaW5fZFxuXG5cblxuXG5cbiAgICAgICAgZGVsZXRlIGkudW5pdFxuICAgICAgICBhd2FpdCBzdG9yZXMuaW5zZXJ0SW5ncmVkaWVudHMoaSwgcmVxLmJvZHkuaW5wdXRzLnByb2R1Y3RfaWQpXG4gICAgfSlcblxuXG4gICAgY29uc3QgZGF0YV8zID0gYXdhaXQgc3RvcmVzLmlucHV0TnV0cml0aW9uYWxJbmZvcm1hdGlvbihyZXEuYm9keS5pbnB1dHNbMF0ucHJvZHVjdF9pZClcbiAgICBjb25zb2xlLmxvZyhkYXRhXzMpXG5cblxuXG4gICAgY29uc3QgY29zdFVwbG9hZCA9IGF3YWl0IHN0b3Jlcy5pbnNlcnRJbnB1dEl0ZW1NZXRhRnVsbChkYXRhXzNbMF0sIHJlcS5ib2R5LmlucHV0c1swXS5wcm9kdWN0X2lkKVxuICAgIGNvbnNvbGUubG9nKGNvc3RVcGxvYWQpXG4gICAgcmVzLmpzb24oJ2Nvc3RVcGxvYWQnKVxufSk7XG5cbnJvdXRlci5kZWxldGUoJy9kZWxldGVQcm9kdWN0JywgYXN5bmMgKHJlcTogYW55LCByZXM6IGFueSkgPT4ge1xuXG4gICAgY29uc3QgY3VycmVudF9wcm9kdWN0OiBhbnkgPSBhd2FpdCBzdG9yZXMuZGVsZXRlUHJvZHVjdChyZXEuYm9keVswXSlcblxuICAgIGNvbnN0IGN1cnJlbnRfcHJvZHVjdF9pbnB1dHM6IGFueSA9IGF3YWl0IHN0b3Jlcy5kZWxldGVJbnB1dChyZXEuYm9keVswXSlcblxuXG5cbiAgICByZXMuanNvbignc3VjY2VzcycpXG5cbn0pO1xuXG5yb3V0ZXIucHV0KCcvdXBkYXRlUHJvZHVjdEluZm9ybWF0aW9uJywgYXN5bmMgKHJlcTogYW55LCByZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcblxuICAgIGlmIChyZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplLmFtb3VudCA9PSB1bmRlZmluZWQgJiYgcmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZS51bml0ID09IHVuZGVmaW5lZCAmJiByZXEuYm9keS52YWx1ZXMucHJvZHVjdF9uYW1lID09IHVuZGVmaW5lZCAmJiByZXEuYm9keS52YWx1ZXMuc2FsZXNfcHJpY2UgPT0gdW5kZWZpbmVkICYmIHJlcS5ib2R5LnZhbHVlcy51bml0cyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FsbCBvZmY6JywgcmVxLmJvZHkpXG4gICAgICAgIHJlcy5qc29uKHsgYWZmZWN0ZWRSb3dzOiAxfSlcbiAgICB9ZWxzZSBpZiAocmVxLmJvZHkudmFsdWVzLnNlcnZpbmdfc2l6ZS5hbW91bnQgPT0gdW5kZWZpbmVkIHx8IHJlcS5ib2R5LnZhbHVlcy5zZXJ2aW5nX3NpemUudW5pdCA9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXEuYm9keS52YWx1ZXMuc2VydmluZ19zaXplXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBzZXJ2aW5nX3NpemU6JywgcmVxLmJvZHkpXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudF9zdG9yZTogYW55ID0gYXdhaXQgc3RvcmVzLlVwZGF0ZVByb2R1Y3QocmVxLmJvZHkudmFsdWVzLCByZXEuYm9keS5pZClcbiAgICAgICAgICAgICAgICByZXMuanNvbihjdXJyZW50X3N0b3JlKVxuICAgICAgICAgICAgfSBcbn0pO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7ICIsImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJ1xuaW1wb3J0IGRhdGFiYXNlX3F1ZXJ5IGZyb20gJy4uL1Byb2dyYW1Db250cm9sRmxvdy9TUUwvUXVlcnkudHMvU3VwcG9ydF9EYXRhYmFzZSc7XG5pbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSAnYmNyeXB0J1xuaW1wb3J0ICogYXMgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCB7IHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uLCBjaGVja0FjY291bnQgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0xvZ2luJ1xuaW1wb3J0IHsgVW5kZXJsaW5lT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBTaWduVXBNZXNzYWdlIH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5cbmNvbnN0IGNoZWNrQ3JlZGVudGlhbHMgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBcbiAgY29uc3QgY2hlY2tfREJfYWdhaW5zdF9lbWFpbDogYW55W10gPSBhd2FpdCBjaGVja0FjY291bnQocmVxLmJvZHkuZW1haWwpXG4gIGlmIChjaGVja19EQl9hZ2FpbnN0X2VtYWlsLmxlbmd0aCA9PT0gMCkge1xuICAgIG5leHQoKVxuICB9IGVsc2UgaWYoY2hlY2tfREJfYWdhaW5zdF9lbWFpbC5sZW5ndGggPiAwKSB7XG4gICAgcmVzLmpzb24odHJ1ZSlcbiAgfVxufVxuXG5cbnJvdXRlci5wb3N0KCcvcmVnaXN0cmF0aW9uJyxjaGVja0NyZWRlbnRpYWxzLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0U3luYyhOdW1iZXIocHJvY2Vzcy5lbnYuU0FMVF9ST1VORCkpO1xuICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2hTeW5jKHJlcS5ib2R5LmNvbmZpcm1fcGFzc3dvcmQsIHNhbHQpO1xuICBkZWxldGUgcmVxLmJvZHkuY29uZmlybV9wYXNzd29yZFxuICB2YXIgdG9rZW4gPSBqd3Quc2lnbih7IHVzZXJfbmFtZTogcmVxLmJvZHkuZW1haWwsIGVtYWlsOiByZXEuYm9keS5lbWFpbCB9LCBwcm9jZXNzLmVudi5CRUFSRVJfUFJJVkFURSk7XG4gIHJlcS5ib2R5LnBhc3N3b3JkID0gaGFzaFxuICByZXEuYm9keS5hY2Nlc3NfdG9rZW4gPSB0b2tlblxuICByZXEuYm9keS5waW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpICsgMTExMTExXG4gIFNpZ25VcE1lc3NhZ2UocmVxLmJvZHkuYnVzaW5lc3NfbmFtZSxyZXEuYm9keS5waG9uZV9udW1iZXIscmVxLmJvZHkuZW1haWwpXG4gIHJlZ2lzdHJhdGlvbkluZm9ybWF0aW9uKHJlcS5ib2R5KVxuICByZXMuanNvbihmYWxzZSlcbn0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5cbmltcG9ydCAnZG90ZW52L2NvbmZpZydcbmltcG9ydCBkYXRhYmFzZV9xdWVyeSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1N1cHBvcnRfRGF0YWJhc2UnO1xuaW1wb3J0IHsgTWVzc2FnZVJlc3BvbnNlRnJvbUhvbWVQYWdlIH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcblxucm91dGVyLnBvc3QoJy9zdXBwb3J0X21lc3NhZ2UnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc29sZS5sb2cocmVxLmJvZHkpXG4gICBNZXNzYWdlUmVzcG9uc2VGcm9tSG9tZVBhZ2UocmVxLmJvZHkuZmlyc3RfbmFtZSwgcmVxLmJvZHkucGhvbmVfbnVtYmVyLHJlcS5ib2R5LmVtYWlsKVxuICBjb25zdCBuZXdSZXBseSA9IGF3YWl0IGRhdGFiYXNlX3F1ZXJ5Lmluc2VydE1lc3NhZ2UocmVxLmJvZHkpXG4gIHJlcy5qc29uKG5ld1JlcGx5KVxufSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyAiLCJcbmltcG9ydCAqIGFzIFR3aWxpbyBmcm9tICd0d2lsaW8nXG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52J1xuaW1wb3J0ICogYXMgZGF5anMgZnJvbSAnZGF5anMnXG5kb3RlbnYuY29uZmlnKClcblxuXG5cbi8vIFR3aWxpbyBDb250cm9sIGFuZCBBY2Nlc3MgQ3JlZGVudGlhbCBcbmNvbnN0IGFjY291bnRTaWQgPSBwcm9jZXNzLmVudi5UV0lMSU9fU0lEO1xuY29uc3QgYXV0aFRva2VuID0gcHJvY2Vzcy5lbnYuVFdJTElPX0FVVEhLRVk7XG5jb25zdCBzbXMgPSBUd2lsaW8oYWNjb3VudFNpZCwgYXV0aFRva2VuKVxuXG5leHBvcnQgY29uc3QgeyBNZXNzYWdpbmdSZXNwb25zZSB9ID0gVHdpbGlvLnR3aW1sIFxuXG5leHBvcnQgZnVuY3Rpb24gTWVzc2FnZVJlc3BvbnNlRnJvbUhvbWVQYWdlKG5hbWU6c3RyaW5nLHBob25lPzpzdHJpbmdbXXwgYW55LGVtYWlsPzphbnkpIHtcbiAgICBcbiAgXG4gICAgICAgIHNtcy5tZXNzYWdlcy5jcmVhdGUoe1xuICAgICAgICAgICAgYm9keTogYEZyb20gS2NtIEluY1xcblxcbkRlYXIgJHtuYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCl9LCBUaGFuayB5b3UgZm9yIGNvbnRhY3RpbmcgS2NtIEluYy4gUmVzdCBhc3N1cmVkIHRoYXQgb3VyIHN1cHBvcnQgdGVhbSB3aWxsIHByb21wdGx5IHJlc3BvbmQgdG8geW91ciBpbnF1aXJlLiBDbGljayBoZXJlIHRvIHNpZ251cCBmb3IgYW4gYWNjb3VudDpcXG5odHRwczovL3d3dy5rY21pbmMuaW8vc2lnbnVwLmAsXG4gICAgICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5UV0lMSU9fUEhPTkUsXG4gICAgICAgICAgICBtZXNzYWdpbmdTZXJ2aWNlU2lkOiBwcm9jZXNzLmVudi5UV0lMSU9fTUVTU0FHRV9TRVJWSUNFLFxuICAgICAgICAgICAgc2hvcnRlblVybHM6IHRydWUsXG4gICAgICAgICAgICB0bzogcGhvbmUsXG4gICAgICAgICAgICBtZWRpYVVybDonaHR0cHM6Ly93d3cua2NtaW5jLmlvL0xhcmdlNTEyeDUxMi5wbmcnXG4gICAgXG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgc21zLm1lc3NhZ2VzLmNyZWF0ZSh7XG4gICAgICAgIGJvZHk6IGBTdXBwb3J0XFxuXFxuJHtuYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCl9LCBoYXMgY29udGFjdGVkIHN1cHBvcnQgYXQ6XFxuXFx0cGhvbmU6ICR7cGhvbmV9IFxcblxcdGVtYWlsOiAke2VtYWlsfSBcXG4ke2RheWpzKCkuZm9ybWF0KCdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJyl9IGAsXG4gICAgICAgIGZyb206IHByb2Nlc3MuZW52LlRXSUxJT19QSE9ORSxcbiAgICAgICAgbWVzc2FnaW5nU2VydmljZVNpZDogcHJvY2Vzcy5lbnYuVFdJTElPX01FU1NBR0VfU0VSVklDRSxcbiAgICAgICAgc2hvcnRlblVybHM6IHRydWUsXG4gICAgICAgIHRvOiAnNDA0NzQwMDA5MydcblxuICAgIFxufSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTaWduVXBNZXNzYWdlKG5hbWU/OmFueSxwaG9uZT86c3RyaW5nW118IGFueSxlbWFpbD86YW55KSB7XG4gICAgXG4gIFxuICAgIHNtcy5tZXNzYWdlcy5jcmVhdGUoe1xuICAgICAgICBib2R5OiBgRnJvbSBLY20gSW5jXFxuXFxuR3JlYXQgbmV3cyEgWW91ciBidXNpbmVzcyBzZXJ2aWNlIGFjY291bnQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuIFRvIGdldCBzdGFydGVkLCBzaW1wbHkgdmlzaXQgb3VyIGhvbWVwYWdlIGF0IGh0dHBzOi8vd3d3LmtjbWluYy5pbyBhbmQgbG9nIGluLiBgLFxuICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5UV0lMSU9fUEhPTkUsXG4gICAgICAgIG1lc3NhZ2luZ1NlcnZpY2VTaWQ6IHByb2Nlc3MuZW52LlRXSUxJT19NRVNTQUdFX1NFUlZJQ0UsXG4gICAgICAgIHNob3J0ZW5VcmxzOiB0cnVlLFxuICAgICAgICB0bzogcGhvbmVcbn0pO1xuXG5zbXMubWVzc2FnZXMuY3JlYXRlKHtcbiAgICBib2R5OiBgUmVnaXN0cmF0aW9uXFxuXFxuJHtuYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCl9LCBoYXMgcmVnaXN0ZXJlZCBmb3IgYW4gYWNjb3VudCBvbiAke2RheWpzKCkuZm9ybWF0KCdkZGRkLCBNTU1NIEQsIFlZWVkgaCBBJyl9IGF0XFxuXFx0ZW1haWw6ICR7ZW1haWx9YCxcbiAgICBmcm9tOiBwcm9jZXNzLmVudi5UV0lMSU9fUEhPTkUsXG4gICAgbWVzc2FnaW5nU2VydmljZVNpZDogcHJvY2Vzcy5lbnYuVFdJTElPX01FU1NBR0VfU0VSVklDRSxcbiAgICBzaG9ydGVuVXJsczogdHJ1ZSxcbiAgICB0bzogJzQwNDc0MDAwOTMnXG59KTtcbn1cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gSW52ZW50b3J5UmVzcG9uY2VNZXNzYWdlKHJlZmVyZW5jZV9udW1iZXI6YW55LHRvPzpzdHJpbmdbXXwgYW55KSB7XG4gICAgXG4vLyAgICAgdG8ubWFwKGFzeW5jIChpKSA9PiB7XG4vLyAgICAgICAgIGF3YWl0IHNtcy5tZXNzYWdlcy5jcmVhdGUoe1xuLy8gICAgICAgICAgICAgYm9keTogYEhlbGxvLFRoaXMgaXMgYSBtZXNzYWdlIGZyb20gS0NNIEluYy4gV2Ugd2FudGVkIHRvIGluZm9ybSB5b3UgdGhhdCBhbiBpbnZlbnRvcnkgcmVjb3JkaW5nIGZyb20gJHtkYXlqcygpLmZvcm1hdCgnZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQScpfSBoYXMgYmVlbiBzdWJtaXR0ZWQgYW5kIGl0cyByZWZlcmVuY2UgbnVtYmVyIGlzICR7cmVmZXJlbmNlX251bWJlcn0uIFRoYW5rIHlvdS5gLFxuLy8gICAgICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuVFdJTElPX1BIT05FLFxuLy8gICAgICAgICAgICAgc2hvcnRlblVybHM6IHRydWUsXG4vLyAgICAgICAgICAgICB0bzogaVxuLy8gICAgICAgICB9KTtcbiAgICAgICAgXG4vLyAgICAgfSk7XG4vLyB9XG5cblxuXG5cblxuXG4iLCJpbXBvcnQgKiBhcyBteXNxbCBmcm9tICdteXNxbDInO1xuaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcblxuXG5cblxuXG5leHBvcnQgY29uc3QgbXlzcWxBY2Nlc3MgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgICB1c2VyOnByb2Nlc3MuZW52Lk1ZU1FMX1VTRVIsXG4gICAgcGFzc3dvcmQ6cHJvY2Vzcy5lbnYuTVlTUUxfUEFTU1dPUkQsXG4gICAgaG9zdDpwcm9jZXNzLmVudi5NWVNRTF9IT1NULFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICAgIHBvcnQ6MzMwNixcbiAgICAvLyBzb2NrZXRQYXRoOnByb2Nlc3MuZW52LklOU1RBTkNFX1VOSVhfU09DS0VUXG59KVxuXG5leHBvcnQgY29uc3QgUXVlcnkgPSAocXVlcnk6c3RyaW5nLHZhbHVlcz86QXJyYXk8c3RyaW5nfG51bWJlcj4pPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFycmF5PGFueT4+KChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgbXlzcWxBY2Nlc3MucXVlcnkocXVlcnksdmFsdWVzLChlcnIscmVzdWx0czphbnkpID0+e1xuICAgICAgICAgICAgaWYoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5cblxuIiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuIGV4cG9ydCBsZXQgcmVnaXN0cmF0aW9uSW5mb3JtYXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgU0VUID8nLCB2YWx1ZXMpO1xuIFxuIGV4cG9ydCBsZXQgY2hlY2tBY2NvdW50ID0gYXN5bmMgKGVtYWlsOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIGVtYWlsID0gPycsW2VtYWlsXSlcblxuXG5cblxuXG5cbiIsImltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIi4uLy4uL0NvbmVjdGlvblwiO1xuXG5cbmNvbnN0IGdldENsaWVudEluZm9ybWF0aW9uID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgd2hlcmUgaWQgPSA/JyxbaWRdKTtcbmNvbnN0IHVwZGF0ZVBSSU5DSVBMRSA9IGFzeW5jIChpbmZvLGlkKT0+UXVlcnkoJ1VQREFURSBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgU0VUID8gV0hFUkUgaWQgPSA/JyxbaW5mbyxpZF0pXG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuLy8gY29uc3QgaW5zZXJ0UGh5c2ljYWwgPSBhc3luYyhwaHlzaWNhbCA6YW55LGNsaWVudGlkOm51bWJlciApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50X2xpZmVzdHlsZSBTRVQgPycgLFtwaHlzaWNhbF0pO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXRDbGllbnRJbmZvcm1hdGlvbixcbiAgICB1cGRhdGVQUklOQ0lQTEUsXG59IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vLi4vQ29uZWN0aW9uXCI7XG5cblxuLy8gQ3JlYXRlIFN0b3JlIFxuY29uc3QgY3JlYXRlU3RvcmUgPSBhc3luYyAoc3RvcmU6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEludmVudG9yeS5TdG9yZSBTRVQgPycsIHN0b3JlKTtcbmNvbnN0IHNlbGVjdFN0b3JlID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBJbnZlbnRvcnkuU3RvcmUgV0hFUkUgPzsnLCBbaWRdKTtcblxuXG4vL0NyZWF0ZSBhbmQgQWRkIEludmVudG9yeSB0byBQcmluY2lwbGUgRGF0YWJhc2VcbmNvbnN0IGluc2VydEludmVudG9yeUl0ZW0gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFNFVCA/JywgdmFsdWVzKTtcbmNvbnN0IGdldEludmVudG9yeUl0ZW1zID0gYXN5bmMgKGJ1c2luZXNzX2lkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zIFdIRVJFIGJ1c2luZXNzX2lkID0gPycsIFtidXNpbmVzc19pZF0pO1xuY29uc3QgZGVsZXRlSW52ZW50b3J5SXRlbSA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgV0hFUkUgPycsIFtpZF0pO1xuY29uc3QgdXBkYXRlSW52ZW50b3J5SXRlbSA9IGFzeW5jICh2YWx1ZXMsIGlkKSA9PiBRdWVyeSgnVVBEQVRFIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgU0VUID8gV0hFUkUgaWQgPSA/JywgW3ZhbHVlcywgaWRdKTtcbmNvbnN0IGdldEludmVudG9yeUNoZWNrbGlzdEl0ZW1zID0gYXN5bmMgKGJ1c2luZXNzX2lkKSA9PiBRdWVyeSgnU0VMRUNUIGlkLGNhdGVnb3J5LHJlY29tbWVuZGVkX3N0b2NrX2xldmVsLGJyYW5kLHN1cHBsaWVyLGRlc2NyaXB0aW9uIEZST00gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBXSEVSRSBidXNpbmVzc19pZCA9ID8gT1JERVIgQlkgY2F0ZWdvcnknLCBbYnVzaW5lc3NfaWRdKTtcbmNvbnN0IGluc2VydEludmVudG9yeUNoZWNrbGlzdEl0ZW1zID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gSW52ZW50b3J5LkludmVudG9yeV9jaGVja2xpc3QgU0VUID8nLCB2YWx1ZXMpO1xuY29uc3QgZ2V0UGhvbmVOdW1iZXJzID0gYXN5bmMgKGJ1c2luZXNzX2lkKSA9PiBRdWVyeSgnU0VMRUNUIHBob25lX251bWJlcixidXNpbmVzc19uYW1lIEZST00gQ3JlZGVudGlhbHMuUHJpbmNpcGxlX0xvZ2luX0NyZWRlbnRpYWxzIFdIRVJFIGlkID0gODAnLCBbYnVzaW5lc3NfaWRdKTtcbmNvbnN0IGdldEludmVudG9yeVJlZmVyZW5jZSA9IGFzeW5jIChidXNpbmVzc19pZCwgZGF0ZV9vZl9hdWRpdCkgPT4gUXVlcnkoYFNFTEVDVCBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5hdWRpdF9yZWZlcmVuY2VfbnVtYmVyLCBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5kYXRlX29mX2F1ZGl0LEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmluX3N0b2NrLEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0Lm9yZGVyX3F1YW50aXR5LEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuc3VwcGxpZXIsSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5icmFuZCxJbnZlbnRvcnkuSW52ZW50b3J5X0l0ZW1zLmRlc2NyaXB0aW9uLEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMuY2F0ZWdvcnksSW52ZW50b3J5LkludmVudG9yeV9JdGVtcy5wcmljZSxJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5pZCxJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5vcmRlcl9xdWFudGl0eSBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0IElOTkVSIEpPSU4gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyBXSEVSRSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdC5idXNpbmVzc19pZCA9ID8gYW5kIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmRhdGVfb2ZfYXVkaXQgPSA/IE9SREVSIEJZIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0LmRhdGVfb2ZfYXVkaXRgLCBbYnVzaW5lc3NfaWQsIGRhdGVfb2ZfYXVkaXRdKTtcbmNvbnN0IGRlbGV0ZUludmVudG9yeUF1ZGl0SXRlbSA9IGFzeW5jIChpZCkgPT4gUXVlcnkoJ0RFTEVURSBGUk9NIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0IFdIRVJFID8nLCBbaWRdKTtcbmNvbnN0IHVwZGF0ZUludmVudG9yeUF1ZGl0SXRlbSA9IGFzeW5jICh2YWx1ZXMsIGlkKSA9PiBRdWVyeSgnVVBEQVRFIEludmVudG9yeS5JbnZlbnRvcnlfY2hlY2tsaXN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFt2YWx1ZXMsIGlkXSk7XG5jb25zdCBzZWxlY3RVbmlxdWVJbnZlbnRvcnlQZXJpb2QgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUIGRhdGVfb2ZfYXVkaXQgRlJPTSBJbnZlbnRvcnkuSW52ZW50b3J5X2NoZWNrbGlzdCcpO1xuY29uc3QgaW5zZXJ0TnV0cml0aW9uYWxJbmZvcm1hdGlvbiA9IGFzeW5jICh2YWx1ZXMsIGlkKSA9PiBRdWVyeSgnVVBEQVRFIEludmVudG9yeS5JbnZlbnRvcnlfSXRlbXMgU0VUID8gV0hFUkUgaWQgPSA/JywgW3ZhbHVlcywgaWRdKVxuY29uc3QgaW5zZXJ0UHJvZHVjdFJlY2lwZU5hbWUgPSBhc3luYyAodmFsdWVzKSA9PiBRdWVyeSgnSU5TRVJUIFJlY2lwZS5Qcm9kdWN0cyBTRVQgPycsIFt2YWx1ZXNdKVxuY29uc3QgdXBEYXRlUHJvZHVjdFJlY2lwZUNvc3QgPSBhc3luYyAodmFsdWVzKSA9PiBRdWVyeSgnSU5TRVJUIFJlY2lwZS5Qcm9kdWN0cyBTRVQgPycsW3ZhbHVlc10pXG5jb25zdCBnZXRSZWNpcGVQcm9kdWN0ID0gYXN5bmMgKGlkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBSZWNpcGUuUHJvZHVjdHMgV0hFUkUgYnVzaW5lc3NfaWQgPSA/JywgW2lkXSlcbmNvbnN0IGdldEludmVudG9yeUl0ZW1zZm9yU2VsZWN0ID0gYXN5bmMoaWQpID0+IFF1ZXJ5KCdzZWxlY3QgaWQgLGRlc2NyaXB0aW9uLGNhdGVnb3J5LHRvdGFsX3BhY2thZ2Vfd2VpZ2h0LHByaWNlX3Blcl9ncmFtIGZyb20gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyB3aGVyZSBidXNpbmVzc19pZCA9ID8gT1JERVIgQlkgY2F0ZWdvcnknLCBbaWRdKVxuY29uc3QgZ2V0SW52ZW50b3J5SXRlbXNmb3JSZWNvcmRpbmcgPSBhc3luYyhpZCkgPT4gUXVlcnkoJ3NlbGVjdCAqIGZyb20gSW52ZW50b3J5LkludmVudG9yeV9JdGVtcyB3aGVyZSBpZCA9ID8nLCBbaWRdKVxuY29uc3QgaW5zZXJ0SW5ncmVkaWVudHMgPSBhc3luYyh2YWx1ZXMscHJvZHVjdF9pZCkgPT4gUXVlcnkoJ0lOU0VSVCBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgU0VUID8gICcsIFt2YWx1ZXMscHJvZHVjdF9pZF0pXG5jb25zdCBzdW1PZkFsbEluZ3JlZGllbnRzID0gYXN5bmMocHJvZHVjdElkKSA9PlF1ZXJ5KCdzZWxlY3Qgc3VtKGlucHV0X2Nvc3QpIGZyb20gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIHdoZXJlIHByb2R1Y3RfaWQgPSA/JyxbcHJvZHVjdElkXSlcbmNvbnN0IGluc2VydElucHV0SXRlbU1ldGEgPSBhc3luYyh0b3RhbF9jb3N0ID0gMCx0b3RhbF9pbnB1dF9jb3VudCA9IDAsdG90YWxfd2VpZ2h0PTAsaWQpID0+IFF1ZXJ5KCdVUERBVEUgUmVjaXBlLlByb2R1Y3RzIFNFVCB0b3RhbF9jb3N0ID0gPywgdG90YWxfaW5wdXRfY291bnQgPSA/LCB0b3RhbF93ZWlnaHQgPSA/IFdIRVJFIGlkID0gPycsW3RvdGFsX2Nvc3QsIHRvdGFsX2lucHV0X2NvdW50LHRvdGFsX3dlaWdodCxpZF0pXG5jb25zdCBnZXRJbmdyZWRpZW50Q291bnQgPSBhc3luYyhpZCkgPT4gUXVlcnkoJ1NFTEVDVCBDT1VOVChpbnZlbnRvcnlfaXRlbV9pZCkgRlJPTSBSZWNpcGUuUHJvZHVjdF9JbnB1dHMgV0hFUkUgcHJvZHVjdF9pZCA9ID87JyxbaWRdKVxuY29uc3QgdG90YWxJbnB1dFdlaWdodCA9IGFzeW5jKHByb2R1Y3RJZCkgPT5RdWVyeSgnc2VsZWN0IHN1bShpbnB1dF93ZWlnaHQpIGZyb20gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIHdoZXJlIHByb2R1Y3RfaWQgPSA/JyxbcHJvZHVjdElkXSlcbmNvbnN0IGRlbGV0ZVByb2R1Y3QgPSBhc3luYyhpZCkgPT5RdWVyeSgnREVMRVRFIEZST00gUmVjaXBlLlByb2R1Y3RzIFdIRVJFIGlkID0gPycsW2lkXSlcbmNvbnN0IFVwZGF0ZVByb2R1Y3QgPSBhc3luYyAodmFsdWVzLCBpZCkgPT4gUXVlcnkoJ1VQREFURSBSZWNpcGUuUHJvZHVjdHMgU0VUID8gV0hFUkUgaWQgPSA/JywgW3ZhbHVlcywgaWRdKVxuY29uc3QgaW5wdXROdXRyaXRpb25hbEluZm9ybWF0aW9uID0gYXN5bmMgKHByb2R1Y3RJZCk9PlF1ZXJ5KCdzZWxlY3Qgc3VtKGlucHV0X2Nvc3QpIGFzIHRvdGFsX2Nvc3QsIHN1bShpbnB1dF93ZWlnaHQpIGFzIHRvdGFsX3dlaWdodCwgQ09VTlQoaW52ZW50b3J5X2l0ZW1faWQpIGFzIHRvdGFsX2lucHV0X2NvdW50LCBzdW0oY2Fsb3JpZXMpIGFzIGNhbG9yaWVzLHN1bSh0b3RhbF9mYXQpIGFzIHRvdGFsX2ZhdCxzdW0oc2F0dXJhdGVkX2ZhdCkgYXMgc2F0dXJhdGVkX2ZhdCxzdW0odHJhbnNfZmF0KSBhcyB0cmFuc19mYXQsc3VtKGNob2xlc3Rlcm9sKSBhcyBjaG9sZXN0ZXJvbCxzdW0oc29kaXVtKSBhcyBzb2RpdW0sc3VtKGNhcmJvaHlkcmF0ZXMpIGFzIGNhcmJvaHlkcmF0ZXMsc3VtKGZpYmVyKSBhcyBmaWJlcixzdW0oc3VnYXIpIGFzIHN1Z2FyLHN1bShhZGRlZF9zdWdhcikgYWRkZWRfc3VnYXIsc3VtKHByb3RlaW4pIGFzIHByb3RlaW4sc3VtKGNhbGNpdW0pIGFzIGNhbGNpdW0sc3VtKGlyb24pIGFzIGlyb24sc3VtKHBvdGFzc2l1bSkgYXMgcG90YXNzaXVtLHN1bSh2aXRhbWluX2QpIGFzIHZpdGFtaW5fZCBmcm9tIFJlY2lwZS5Qcm9kdWN0X0lucHV0cyB3aGVyZSBwcm9kdWN0X2lkID0gPycsW3Byb2R1Y3RJZF0pXG5jb25zdCBkZWxldGVJbnB1dCA9IGFzeW5jKHByb2R1Y3RJZCkgPT5RdWVyeSgnREVMRVRFIEZST00gUmVjaXBlLlByb2R1Y3RfSW5wdXRzIFdIRVJFIHByb2R1Y3RfaWQgPSA/JyxbcHJvZHVjdElkXSlcbmNvbnN0IGluc2VydElucHV0SXRlbU1ldGFGdWxsID0gYXN5bmModmFsdWVzLGlkKSA9PiBRdWVyeSgnVVBEQVRFIFJlY2lwZS5Qcm9kdWN0cyBTRVQgPyBXSEVSRSBpZCA9ID8nLFt2YWx1ZXMsaWRdKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjcmVhdGVTdG9yZSxcbiAgICBzZWxlY3RTdG9yZSxcbiAgICBpbnNlcnRJbnZlbnRvcnlJdGVtLFxuICAgIGdldEludmVudG9yeUl0ZW1zLFxuICAgIGRlbGV0ZUludmVudG9yeUl0ZW0sXG4gICAgdXBkYXRlSW52ZW50b3J5SXRlbSxcbiAgICBnZXRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyxcbiAgICBpbnNlcnRJbnZlbnRvcnlDaGVja2xpc3RJdGVtcyxcbiAgICBnZXRQaG9uZU51bWJlcnMsXG4gICAgZ2V0SW52ZW50b3J5UmVmZXJlbmNlLFxuICAgIGRlbGV0ZUludmVudG9yeUF1ZGl0SXRlbSxcbiAgICB1cGRhdGVJbnZlbnRvcnlBdWRpdEl0ZW0sXG4gICAgc2VsZWN0VW5pcXVlSW52ZW50b3J5UGVyaW9kLFxuICAgIGluc2VydE51dHJpdGlvbmFsSW5mb3JtYXRpb24sXG4gICAgaW5zZXJ0UHJvZHVjdFJlY2lwZU5hbWUsXG4gICAgZ2V0UmVjaXBlUHJvZHVjdCxcbiAgICBnZXRJbnZlbnRvcnlJdGVtc2ZvclNlbGVjdCxcbiAgICBnZXRJbnZlbnRvcnlJdGVtc2ZvclJlY29yZGluZyxcbiAgICBpbnNlcnRJbmdyZWRpZW50cyxcbiAgICBzdW1PZkFsbEluZ3JlZGllbnRzLFxuICAgIGluc2VydElucHV0SXRlbU1ldGEsXG4gICAgdXBEYXRlUHJvZHVjdFJlY2lwZUNvc3QsXG4gICAgZ2V0SW5ncmVkaWVudENvdW50LFxuICAgIHRvdGFsSW5wdXRXZWlnaHQsXG4gICAgZGVsZXRlSW5wdXQsXG4gICAgZGVsZXRlUHJvZHVjdCxcbiAgICBVcGRhdGVQcm9kdWN0LFxuICAgIGlucHV0TnV0cml0aW9uYWxJbmZvcm1hdGlvbixcbiAgICBpbnNlcnRJbnB1dEl0ZW1NZXRhRnVsbFxuXG5cbn0iLCJpbXBvcnQgeyBRdWVyeSB9IGZyb20gXCIuLi8uLi9Db25lY3Rpb25cIjtcblxuXG5jb25zdCB2ZXJpZnlJbmZvcm1hdGlvbiA9IGFzeW5jIChlbWFpbHM6IGFueSkgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ3JlZGVudGlhbHMuTG9naW5fQ3JlZGVudGlhbHMgV0hFUkUgZW1haWw9PycsW2VtYWlsc10pO1xuY29uc3QgdXBkYXRlQmVhcmVyVG9rZW4gPSBhc3luYyAoYmVhcmVyX3Rva2VuLGlkKT0+UXVlcnkoJ1VQREFURSBDcmVkZW50aWFscy5Mb2dpbl9DcmVkZW50aWFscyBTRVQgPyBXSEVSRSBlbWFpbCA9PyAnLFtiZWFyZXJfdG9rZW4saWRdKVxuY29uc3QgYXNzb2NpYXRlVmVyaWZpY2F0aW9uID0gYXN5bmMocGluLGlkKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5QcmluY2lwbGVfTG9naW5fQ3JlZGVudGlhbHMgV0hFUkUgcGluID0gPyBhbmQgaWQgPSA/ICcsW3BpbixpZF0pXG5cbi8vIGNvbnN0IHNpbmdsZUNoaXJwID0gYXN5bmMgKGlkOnN0cmluZykgPT4gUXVlcnkoJ1NFTEVDVCAqIEZST00gQ2hpcnBzIFdIRVJFIGlkID0gPycsW2lkXSk7XG4vLyBjb25zdCBkZWxldGVNZXNzYWdlcyA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiBRdWVyeSgnREVMRVRFIEZST00gY29udGFjdCBXSEVSRSBpZCA9ID8nLCBbaWRdKTtcbi8vIGNvbnN0IGluc2VydENMSUVOVCA9IGFzeW5jICguLi52YWx1ZXM6IGFueSkgPT4gUXVlcnkoJ0lOU0VSVCBJTlRPIEtDTV9JTkMuY2xpZW50UmVnaXN0cmF0aW9uIFNFVCA/JywgdmFsdWVzKTtcbi8vIGNvbnN0IGluc2VydEluc3RpdHV0aW9uID0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gTnV0cmllbnRtYXAuaW5zdGl0dXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuXG4vLyBjb25zdCB1cGRhdGVNZXNzYWdlcyA9IGFzeW5jIChuZXdDb250ZW50OiBhbnksIGlkOiBhbnkpID0+IFF1ZXJ5KCdVUERBVEUgY29udGFjdCBTRVQgPyBXSEVSRSBpZCA9ID8nLCBbbmV3Q29udGVudCwgaWRdKVxuLy8gY29uc3QgYWxsVXNlcnMgPSBhc3luYyAoKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBVc2VycycpO1xuLy8gY29uc3QgaW5zZXJ0VXNlcnMgPSBhc3luYyh1c2VyIDphbnkgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudHMgU0VUID8nICxbdXNlcl0pO1xuXG4vLyBjb25zdCBpbnNlcnRQaHlzaWNhbCA9IGFzeW5jKHBoeXNpY2FsIDphbnksY2xpZW50aWQ6bnVtYmVyICk9PlF1ZXJ5KCdJTlNFUlQgSU5UTyBjbGllbnRfbGlmZXN0eWxlIFNFVCA/JyAsW3BoeXNpY2FsXSk7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHZlcmlmeUluZm9ybWF0aW9uLFxuICAgIHVwZGF0ZUJlYXJlclRva2VuLFxuICAgIGFzc29jaWF0ZVZlcmlmaWNhdGlvblxuXG59IiwiaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwiLi4vQ29uZWN0aW9uXCI7XG5cblxuY29uc3Qgdmlld01lc3NhZ2VzID0gYXN5bmMgKCkgPT4gUXVlcnkoJ3NlbGVjdCAqIGZyb20gQ29tbXVuaWNhdGlvbi5NZXNzYWdlcycpO1xuY29uc3QgaW5zZXJ0TWVzc2FnZT0gYXN5bmMgKHZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gQ29tbXVuaWNhdGlvbi5TdXBwb3J0IFNFVCA/JywgdmFsdWVzKTtcblxuLy8gY29uc3Qgc2luZ2xlQ2hpcnAgPSBhc3luYyAoaWQ6c3RyaW5nKSA9PiBRdWVyeSgnU0VMRUNUICogRlJPTSBDaGlycHMgV0hFUkUgaWQgPSA/JyxbaWRdKTtcbi8vIGNvbnN0IGRlbGV0ZU1lc3NhZ2VzID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IFF1ZXJ5KCdERUxFVEUgRlJPTSBjb250YWN0IFdIRVJFIGlkID0gPycsIFtpZF0pO1xuLy8gY29uc3QgaW5zZXJ0Q0xJRU5UID0gYXN5bmMgKC4uLnZhbHVlczogYW55KSA9PiBRdWVyeSgnSU5TRVJUIElOVE8gS0NNX0lOQy5jbGllbnRSZWdpc3RyYXRpb24gU0VUID8nLCB2YWx1ZXMpO1xuLy8gY29uc3QgaW5zZXJ0SW5zdGl0dXRpb24gPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IFF1ZXJ5KCdJTlNFUlQgSU5UTyBOdXRyaWVudG1hcC5pbnN0aXR1dGlvbiBTRVQgPycsIHZhbHVlcyk7XG5cbi8vIGNvbnN0IHVwZGF0ZU1lc3NhZ2VzID0gYXN5bmMgKG5ld0NvbnRlbnQ6IGFueSwgaWQ6IGFueSkgPT4gUXVlcnkoJ1VQREFURSBjb250YWN0IFNFVCA/IFdIRVJFIGlkID0gPycsIFtuZXdDb250ZW50LCBpZF0pXG4vLyBjb25zdCBhbGxVc2VycyA9IGFzeW5jICgpID0+IFF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVzZXJzJyk7XG4vLyBjb25zdCBpbnNlcnRVc2VycyA9IGFzeW5jKHVzZXIgOmFueSApPT5RdWVyeSgnSU5TRVJUIElOVE8gY2xpZW50cyBTRVQgPycgLFt1c2VyXSk7XG5cbi8vIGNvbnN0IGluc2VydFBoeXNpY2FsID0gYXN5bmMocGh5c2ljYWwgOmFueSxjbGllbnRpZDpudW1iZXIgKT0+UXVlcnkoJ0lOU0VSVCBJTlRPIGNsaWVudF9saWZlc3R5bGUgU0VUID8nICxbcGh5c2ljYWxdKTtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdmlld01lc3NhZ2VzLFxuICAgIGluc2VydE1lc3NhZ2VcblxuXG59IiwiXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgJ3Bhc3Nwb3J0LWxvY2FsJztcbmltcG9ydCAqIGFzIHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0IHtTdHJhdGVneSBhcyBCZWFyZXJTdHJhdGVneX0gZnJvbSAncGFzc3BvcnQtaHR0cC1iZWFyZXInO1xuaW1wb3J0ICogYXMgZGIgZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9QcmluY2lwbGVDbGllbnRQb3J0YWwvQmVhcmVyVG9rZW5EZXRhaWxzJ1xuaW1wb3J0IHsgbXlzcWxBY2Nlc3MgfSBmcm9tICcuLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML0NvbmVjdGlvbic7XG5cblxuXG5cblxuXG5wYXNzcG9ydC51c2UobmV3IEJlYXJlclN0cmF0ZWd5KFxuICAgICAodG9rZW4sIGRvbmUpPT4ge1xuICAgICAgICBteXNxbEFjY2Vzcy5xdWVyeShgU0VMRUNUICogRlJPTSBDcmVkZW50aWFscy5Mb2dpbl9DcmVkZW50aWFscyBXaGVyZSBhY2Nlc3NfdG9rZW4gPSA/YCwgW3Rva2VuXSwgKGVycm9yLCB1c2VyKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChlcnJvcikgeyByZXR1cm4gZG9uZShlcnJvcik7IH1cbiAgICAgICAgICAgIGlmICghdXNlcikgeyByZXR1cm4gZG9uZShudWxsLCBmYWxzZSk7IH1cbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9uZShudWxsLCB1c2VyLCB7IHNjb3BlOiAncmVhZCcgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cbikpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5pbXBvcnQgJ3Bhc3Nwb3J0LWxvY2FsJztcbmltcG9ydCAqIGFzIHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0J1xuaW1wb3J0IHsgU3RyYXRlZ3kgYXMgTG9jYWxTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJ1xuaW1wb3J0IHsgY2hlY2tBY2NvdW50IH0gZnJvbSAnLi4vUHJvZ3JhbUNvbnRyb2xGbG93L1NRTC9RdWVyeS50cy9Mb2dpbi9pbmRleCdcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHQnXG5cblxuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5wYXNzcG9ydC51c2UobmV3IExvY2FsU3RyYXRlZ3koe1xuICB1c2VybmFtZUZpZWxkOiAnZW1haWwnLFxuICBwYXNzd29yZEZpZWxkOiAncGFzc3dvcmQnLFxufSwgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5KGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGRvbmU6IGFueSkge1xuICBjb25zdCBbdXNlcl0gPSBhd2FpdCBjaGVja0FjY291bnQoZW1haWwpXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlLCB7IG1lc3NhZ2U6IFwiSW52YWxpZCBjcmVkZW50aWFscy5cXG5cIiB9KTtcbiAgfVxuICBpZiAoIWJjcnlwdC5jb21wYXJlU3luYyhwYXNzd29yZCwgdXNlci5wYXNzd29yZCkpIHtcbiAgICByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwgeyBtZXNzYWdlOiBcIkludmFsaWQgY3JlZGVudGlhbHMuXFxuXCIgfSk7XG4gIH1cbiAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XG5cbn1cbikpO1xuXG5wYXNzcG9ydC5zZXJpYWxpemVVc2VyKCh1c2VyOiBhbnksIGRvbmUpID0+IHtcbiAgZGVsZXRlIHVzZXIuZGF0ZV90aW1lXG4gIGRlbGV0ZSB1c2VyLnBhc3N3b3JkXG4gIGRlbGV0ZSB1c2VyLnRlcm1zX29mX3NlcnZpY2VcbiAgZGVsZXRlIHVzZXIucHJpdmFjeV9wb2xpY3lcbiAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwge1xuICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICBmaXJzdF9uYW1lOiB1c2VyLmZpcnN0X25hbWUsXG4gICAgICBsYXN0X25hbWU6IHVzZXIubGFzdF9uYW1lLFxuICAgICAgYnVzaW5lc3NfbmFtZTogdXNlci5idXNpbmVzc19uYW1lLFxuICAgICAgcGhvbmVfbnVtYmVyOiB1c2VyLnBob25lX251bWJlcixcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgYWNjb3VudF90eXBlOiB1c2VyLmFjY291bnRfdHlwZSxcbiAgICAgIGFjY2Vzc190b2tlbjogdXNlci5hY2Nlc3NfdG9rZW5cbiAgICB9KTtcbiAgfSk7XG59KTtcblxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKCh1c2VyOiBhbnksIGRvbmUpID0+IHtcbiAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgcmV0dXJuIGRvbmUobnVsbCwgdXNlcik7XG4gIH0pO1xufSk7XG5cblxucm91dGVyLnBvc3QoJy9sb2dpbl92ZXJpZmljYXRpb24nLCBwYXNzcG9ydC5hdXRoZW50aWNhdGUoJ2xvY2FsJyksIChyZXE6IGFueSwgcmVzKSA9PiB7XG4gIGlmIChyZXEudXNlcikge1xuICAgIHJlcS5sb2dJbihyZXEudXNlciwgZnVuY3Rpb24gKGVycikge1xuICAgICAgXG4gICAgICByZXR1cm4gcmVzLmNvb2tpZSgndXNlcicscmVxLnVzZXIpLmpzb24ocmVxLnVzZXIpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCFyZXEudXNlcikge1xuICAgIFxuICAgIHJlcy5zZW5kU3RhdHVzKDQwMSlcbiAgfVxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cblxuXG5cblxuXG5cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb252ZXJ0LXVuaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXlqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3Mtc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXlzcWwyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWh0dHAtYmVhcmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWxvY2FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR3aWxpb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgKiBhcyBjb3JzIGZyb20gJ2NvcnMnXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuaW1wb3J0ICogYXMgcGFzc3BvcnQgZnJvbSAncGFzc3BvcnQnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG4vLyBpbXBvcnQgSG9tZXBhZ2VTZXJ2ZXIgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL0hvbWVwYWdlX1F1ZXJ5Jztcbi8vIGltcG9ydCBDbGllbnRQb3J0YWwgZnJvbSAnLi9Qcm9ncmFtQ29udHJvbEZsb3cvU1FML1F1ZXJ5LnRzL1ByaW5jaXBsZUNsaWVudFBvcnRhbC9DbGllbnRQZXJzb25hbERldGFpbHMnO1xuLy8gaW1wb3J0IHsgTWVzc2FnaW5nUmVzcG9uc2UsIHNlbmRSZXBseSB9IGZyb20gJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1NNUy9zZW5kX3Ntcyc7XG4vLyBpbXBvcnQgJy4vUHJvZ3JhbUNvbnRyb2xGbG93L1BBWU1FTlRTL2F1dGhvcml6ZV9jYXJkJztcbmltcG9ydCBzdXBwb3J0IGZyb20gJy4vTUVTU0FHRV9TVVBQT1JUL3N1cHBvcnQnXG5pbXBvcnQgY2xpZW50IGZyb20gJy4vQ2xpZW50UG9ydGFsL0NsaWVudFBlcnNvbmFsRGV0YWlscydcbi8vIGltcG9ydCBiaWxsaW5nIGZyb20gJy4vQ2xpZW50UG9ydGFsL0NsaWVudEJpbGxpbmcnO1xuLy8gaW1wb3J0IG5vdGFyeSBmcm9tICcuL0NsaWVudFBvcnRhbC9DbGllbnRTZXJ2aWNlUmVxdWVzdCc7XG5pbXBvcnQgaW52ZW50b3J5IGZyb20gJy4vQ2xpZW50UG9ydGFsL0ludmVudG9yeVJvdXRlcyc7XG5cbmltcG9ydCByZWdpc3RyYXRpb24gZnJvbSAnLi9Ib21lcGFnZS9yZWdpc3RyYXRpb24nXG5pbXBvcnQgVVBTdHJhdGVneSBmcm9tICcuL1NlY3VyaXR5L2xvY2FsU3RyYXRlZ3knXG5pbXBvcnQgKiBhcyBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbidcbmltcG9ydCAnLi9TZWN1cml0eS9CZWFyZXInXG5cbmltcG9ydCAqIGFzIGNvb2tpZXBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJ1xuXG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGNvcnMoKSlcbmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHJlcy5zZXQoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJylcbiAgcmVzLnNldCgnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICcqJylcbiAgcmVzLnNldCgnQ2FjaGUtQ29udHJvbCcsJ25vLWNhY2hlJylcbiAgbmV4dCgpXG59KVxuYXBwLnNldCgndHJ1c3QgcHJveHknLCB0cnVlKVxuXG5hcHAudXNlKGNvb2tpZXBhcnNlcigpKVxuYXBwLnVzZShzZXNzaW9uKHtcbiAgc2VjcmV0OiAna2V5Ym9hcmQgY2F0JyxcbiAgcmVzYXZlOiBmYWxzZSxcbiAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICBjb29raWU6IHsgc2VjdXJlOiBmYWxzZSB9XG59KSk7XG5cblxuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xuYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpO1xuXG5cblxuYXBwLnVzZShVUFN0cmF0ZWd5KVxuY29uc3QgdmFsaWRhdGVVc2VyID0gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGlmICghcmVxLnVzZXIpIHtcbiAgICByZXMucmVkaXJlY3QoJy9zaWdudXAnKVxuICB9IGVsc2Uge1xuICAgIG5leHQoKVxuICB9XG59XG5cbmFwcC51c2UoJy8nLCBleHByZXNzLnN0YXRpYyggJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3NpZ251cCcsIGV4cHJlc3Muc3RhdGljKCAncHVibGljJykpXG5hcHAudXNlKCcvc3RvcmUnLCBleHByZXNzLnN0YXRpYyggJ3B1YmxpYycpKVxuYXBwLnVzZSgnL3ByaW5jaXBsZS8nLCAgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuXG4vLyBhcHAudXNlKCcvcHJpbmNpcGxlLycsIHZhbGlkYXRlVXNlciwgZXhwcmVzcy5zdGF0aWMoJ3B1YmxpYycpKVxuXG5cblxuXG5cblxuYXBwLnVzZShyZWdpc3RyYXRpb24pXG5cbmFwcC51c2Uoc3VwcG9ydClcbmFwcC51c2UoY2xpZW50KVxuYXBwLnVzZShpbnZlbnRvcnkpXG5cblxuIFxuYXBwLmdldChcIipcIiwgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uL3B1YmxpY1wiLCBcImluZGV4Lmh0bWxcIikpO1xufSk7XG5hcHAubGlzdGVuKDgwODAsICgpID0+IHtcbiAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gcG9ydCAkezgwODB9Li4uYClcbn0pXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=