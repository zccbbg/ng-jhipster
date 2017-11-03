(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("@angular/http"), require("rxjs/Observable"), require("rxjs/add/operator/map"), require("rxjs/Rx"), require("rxjs/add/observable/of"), require("rxjs/add/operator/concat"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/switchMap"), require("rxjs/add/operator/take"), require("rxjs/add/operator/toArray"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms", "@angular/http", "rxjs/Observable", "rxjs/add/operator/map", "rxjs/Rx", "rxjs/add/observable/of", "rxjs/add/operator/concat", "rxjs/add/operator/merge", "rxjs/add/operator/share", "rxjs/add/operator/switchMap", "rxjs/add/operator/take", "rxjs/add/operator/toArray"], factory);
	else if(typeof exports === 'object')
		exports["ng-jhipster"] = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("@angular/http"), require("rxjs/Observable"), require("rxjs/add/operator/map"), require("rxjs/Rx"), require("rxjs/add/observable/of"), require("rxjs/add/operator/concat"), require("rxjs/add/operator/merge"), require("rxjs/add/operator/share"), require("rxjs/add/operator/switchMap"), require("rxjs/add/operator/take"), require("rxjs/add/operator/toArray"));
	else
		root["ng-jhipster"] = factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"], root["@angular/http"], root["rxjs/Observable"], root["rxjs/add/operator/map"], root["rxjs/Rx"], root["rxjs/add/observable/of"], root["rxjs/add/operator/concat"], root["rxjs/add/operator/merge"], root["rxjs/add/operator/share"], root["rxjs/add/operator/switchMap"], root["rxjs/add/operator/take"], root["rxjs/add/operator/toArray"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_53__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_56__, __WEBPACK_EXTERNAL_MODULE_57__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(12);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var JhiConfigService = /** @class */ (function () {
    function JhiConfigService(moduleConfig) {
        this.CONFIG_OPTIONS = __assign({}, new __WEBPACK_IMPORTED_MODULE_1__config__["a" /* JhiModuleConfig */](), moduleConfig);
    }
    JhiConfigService.prototype.getConfig = function () {
        return this.CONFIG_OPTIONS;
    };
    JhiConfigService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config__["a" /* JhiModuleConfig */]])
    ], JhiConfigService);
    return JhiConfigService;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USE_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concat__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toArray__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__translate_store__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__translate_loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__missing_translation_handler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__translate_parser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util__ = __webpack_require__(3);















var USE_STORE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('USE_STORE');
var TranslateService = (function () {
    /**
     *
     * @param store an instance of the store (that is supposed to be unique)
     * @param currentLoader An instance of the loader currently used
     * @param parser An instance of the parser currently used
     * @param missingTranslationHandler A handler for missing translations.
     * @param isolate whether this service should use the store or not
     */
    function TranslateService(store, currentLoader, parser, missingTranslationHandler, isolate) {
        if (isolate === void 0) { isolate = false; }
        this.store = store;
        this.currentLoader = currentLoader;
        this.parser = parser;
        this.missingTranslationHandler = missingTranslationHandler;
        this.isolate = isolate;
        this.pending = false;
        this._onTranslationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._onDefaultLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._langs = [];
        this._translations = {};
        this._translationRequests = {};
    }
    Object.defineProperty(TranslateService.prototype, "onTranslationChange", {
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onLangChange", {
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onLangChange : this.store.onLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "onDefaultLangChange", {
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        get: function () {
            return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "defaultLang", {
        /**
         * The default lang to fallback when translations are missing on the current lang
         */
        get: function () {
            return this.isolate ? this._defaultLang : this.store.defaultLang;
        },
        set: function (defaultLang) {
            if (this.isolate) {
                this._defaultLang = defaultLang;
            }
            else {
                this.store.defaultLang = defaultLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "currentLang", {
        /**
         * The lang currently used
         * @type {string}
         */
        get: function () {
            return this.isolate ? this._currentLang : this.store.currentLang;
        },
        set: function (currentLang) {
            if (this.isolate) {
                this._currentLang = currentLang;
            }
            else {
                this.store.currentLang = currentLang;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "langs", {
        /**
         * an array of langs
         * @type {Array}
         */
        get: function () {
            return this.isolate ? this._langs : this.store.langs;
        },
        set: function (langs) {
            if (this.isolate) {
                this._langs = langs;
            }
            else {
                this.store.langs = langs;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "translations", {
        /**
         * a list of translations per lang
         * @type {{}}
         */
        get: function () {
            return this.isolate ? this._translations : this.store.translations;
        },
        set: function (translations) {
            if (this.isolate) {
                this._currentLang = translations;
            }
            else {
                this.store.translations = translations;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the default language to use as a fallback
     * @param lang
     */
    TranslateService.prototype.setDefaultLang = function (lang) {
        var _this = this;
        if (lang === this.defaultLang) {
            return;
        }
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the defaultLang immediately
            if (!this.defaultLang) {
                this.defaultLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeDefaultLang(lang);
            });
        }
        else {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Gets the default language used
     * @returns string
     */
    TranslateService.prototype.getDefaultLang = function () {
        return this.defaultLang;
    };
    /**
     * Changes the lang currently used
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.use = function (lang) {
        var _this = this;
        var pending = this.retrieveTranslations(lang);
        if (typeof pending !== "undefined") {
            // on init set the currentLang immediately
            if (!this.currentLang) {
                this.currentLang = lang;
            }
            pending.take(1)
                .subscribe(function (res) {
                _this.changeLang(lang);
            });
            return pending;
        }
        else {
            this.changeLang(lang);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.translations[lang]);
        }
    };
    /**
     * Retrieves the given translations
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.retrieveTranslations = function (lang) {
        var pending;
        // if this language is unavailable, ask for it
        if (typeof this.translations[lang] === "undefined") {
            this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
            pending = this._translationRequests[lang];
        }
        return pending;
    };
    /**
     * Gets an object of translations for a given language with the current loader
     * @param lang
     * @returns {Observable<*>}
     */
    TranslateService.prototype.getTranslation = function (lang) {
        var _this = this;
        this.pending = true;
        this.loadingTranslations = this.currentLoader.getTranslation(lang).share();
        this.loadingTranslations.take(1)
            .subscribe(function (res) {
            _this.translations[lang] = res;
            _this.updateLangs();
            _this.pending = false;
        }, function (err) {
            _this.pending = false;
        });
        return this.loadingTranslations;
    };
    /**
     * Manually sets an object of translations for a given language
     * @param lang
     * @param translations
     * @param shouldMerge
     */
    TranslateService.prototype.setTranslation = function (lang, translations, shouldMerge) {
        if (shouldMerge === void 0) { shouldMerge = false; }
        if (shouldMerge && this.translations[lang]) {
            this.translations[lang] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util__["c" /* mergeDeep */])(this.translations[lang], translations);
        }
        else {
            this.translations[lang] = translations;
        }
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Returns an array of currently available langs
     * @returns {any}
     */
    TranslateService.prototype.getLangs = function () {
        return this.langs;
    };
    /**
     * @param langs
     * Add available langs
     */
    TranslateService.prototype.addLangs = function (langs) {
        var _this = this;
        langs.forEach(function (lang) {
            if (_this.langs.indexOf(lang) === -1) {
                _this.langs.push(lang);
            }
        });
    };
    /**
     * Update the list of available langs
     */
    TranslateService.prototype.updateLangs = function () {
        this.addLangs(Object.keys(this.translations));
    };
    /**
     * Returns the parsed result of the translations
     * @param translations
     * @param key
     * @param interpolateParams
     * @returns {any}
     */
    TranslateService.prototype.getParsedResult = function (translations, key, interpolateParams) {
        var res;
        if (key instanceof Array) {
            var result = {}, observables = false;
            for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                var k = key_1[_i];
                result[k] = this.getParsedResult(translations, k, interpolateParams);
                if (typeof result[k].subscribe === "function") {
                    observables = true;
                }
            }
            if (observables) {
                var mergedObs = void 0;
                for (var _a = 0, key_2 = key; _a < key_2.length; _a++) {
                    var k = key_2[_a];
                    var obs = typeof result[k].subscribe === "function" ? result[k] : __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(result[k]);
                    if (typeof mergedObs === "undefined") {
                        mergedObs = obs;
                    }
                    else {
                        mergedObs = mergedObs.merge(obs);
                    }
                }
                return mergedObs.toArray().map(function (arr) {
                    var obj = {};
                    arr.forEach(function (value, index) {
                        obj[key[index]] = value;
                    });
                    return obj;
                });
            }
            return result;
        }
        if (translations) {
            res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
        }
        if (typeof res === "undefined" && this.defaultLang && this.defaultLang !== this.currentLang) {
            res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
        }
        if (typeof res === "undefined") {
            var params = { key: key, translateService: this };
            if (typeof interpolateParams !== 'undefined') {
                params.interpolateParams = interpolateParams;
            }
            res = this.missingTranslationHandler.handle(params);
        }
        return typeof res !== "undefined" ? res : key;
    };
    /**
     * Gets the translated value of a key (or an array of keys)
     * @param key
     * @param interpolateParams
     * @returns {any} the translated key, or an object of translated keys
     */
    TranslateService.prototype.get = function (key, interpolateParams) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        // check if we are loading a new translation to use
        if (this.pending) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                var onComplete = function (res) {
                    observer.next(res);
                    observer.complete();
                };
                var onError = function (err) {
                    observer.error(err);
                };
                _this.loadingTranslations.subscribe(function (res) {
                    res = _this.getParsedResult(res, key, interpolateParams);
                    if (typeof res.subscribe === "function") {
                        res.subscribe(onComplete, onError);
                    }
                    else {
                        onComplete(res);
                    }
                }, onError);
            });
        }
        else {
            var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(res);
            }
        }
    };
    /**
     * Returns a stream of translated values of a key (or an array of keys) which updates
     * whenever the language changes.
     * @param key
     * @param interpolateParams
     * @returns {any} A stream of the translated key, or an object of translated keys
     */
    TranslateService.prototype.stream = function (key, interpolateParams) {
        var _this = this;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        return this
            .get(key, interpolateParams)
            .concat(this.onLangChange.switchMap(function (event) {
            var res = _this.getParsedResult(event.translations, key, interpolateParams);
            if (typeof res.subscribe === "function") {
                return res;
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(res);
            }
        }));
    };
    /**
     * Returns a translation instantly from the internal state of loaded translation.
     * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
     * @param key
     * @param interpolateParams
     * @returns {string}
     */
    TranslateService.prototype.instant = function (key, interpolateParams) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__util__["b" /* isDefined */])(key) || !key.length) {
            throw new Error("Parameter \"key\" required");
        }
        var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
        if (typeof res.subscribe !== "undefined") {
            if (key instanceof Array) {
                var obj_1 = {};
                key.forEach(function (value, index) {
                    obj_1[key[index]] = key[index];
                });
                return obj_1;
            }
            return key;
        }
        else {
            return res;
        }
    };
    /**
     * Sets the translated value of a key
     * @param key
     * @param value
     * @param lang
     */
    TranslateService.prototype.set = function (key, value, lang) {
        if (lang === void 0) { lang = this.currentLang; }
        this.translations[lang][key] = value;
        this.updateLangs();
        this.onTranslationChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Changes the current lang
     * @param lang
     */
    TranslateService.prototype.changeLang = function (lang) {
        this.currentLang = lang;
        this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
        // if there is no default lang, use the one that we just set
        if (!this.defaultLang) {
            this.changeDefaultLang(lang);
        }
    };
    /**
     * Changes the default lang
     * @param lang
     */
    TranslateService.prototype.changeDefaultLang = function (lang) {
        this.defaultLang = lang;
        this.onDefaultLangChange.emit({ lang: lang, translations: this.translations[lang] });
    };
    /**
     * Allows to reload the lang file from the file
     * @param lang
     * @returns {Observable<any>}
     */
    TranslateService.prototype.reloadLang = function (lang) {
        this.resetLang(lang);
        return this.getTranslation(lang);
    };
    /**
     * Deletes inner translation
     * @param lang
     */
    TranslateService.prototype.resetLang = function (lang) {
        this._translationRequests[lang] = undefined;
        this.translations[lang] = undefined;
    };
    /**
     * Returns the language code name from the browser, e.g. "de"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        if (browserLang.indexOf('-') !== -1) {
            browserLang = browserLang.split('-')[0];
        }
        if (browserLang.indexOf('_') !== -1) {
            browserLang = browserLang.split('_')[0];
        }
        return browserLang;
    };
    /**
     * Returns the culture language code name from the browser, e.g. "de-DE"
     *
     * @returns string
     */
    TranslateService.prototype.getBrowserCultureLang = function () {
        if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
            return undefined;
        }
        var browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
        browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
        return browserCultureLang;
    };
    return TranslateService;
}());

TranslateService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateService.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_10__translate_store__["a" /* TranslateStore */], },
    { type: __WEBPACK_IMPORTED_MODULE_11__translate_loader__["a" /* TranslateLoader */], },
    { type: __WEBPACK_IMPORTED_MODULE_13__translate_parser__["a" /* TranslateParser */], },
    { type: __WEBPACK_IMPORTED_MODULE_12__missing_translation_handler__["a" /* MissingTranslationHandler */], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [USE_STORE,] },] },
]; };


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = equals;
/* harmony export (immutable) */ __webpack_exports__["b"] = isDefined;
/* unused harmony export isObject */
/* harmony export (immutable) */ __webpack_exports__["c"] = mergeDeep;
/* tslint:disable */
/**
 * @name equals
 *
 * @description
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {*} o1 Object or value to compare.
 * @param {*} o2 Object or value to compare.
 * @returns {boolean} True if arguments are equal.
 */
/* tslint:disable */ function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
function mergeDeep(target, source) {
    target = JSON.parse(JSON.stringify(target));
    source = JSON.parse(JSON.stringify(source));
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, (_b = {}, _b[key] = source[key], _b));
            }
            var _a, _b;
        });
    }
    return output;
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_translate_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_translate_store__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a"]; });
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */















var TranslateModule = (function () {
    function TranslateModule() {
    }
    /**
     * Use this method in your root module to provide the TranslateService
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a" /* TranslateLoader */], useClass: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["b" /* TranslateFakeLoader */] },
                config.parser || { provide: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["a" /* TranslateParser */], useClass: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["b" /* TranslateDefaultParser */] },
                config.missingTranslationHandler || { provide: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["b" /* FakeMissingTranslationHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__src_translate_store__["a" /* TranslateStore */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["a" /* USE_STORE */], useValue: config.isolate },
                __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b" /* TranslateService */]
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {TranslateModuleConfig} config
     * @returns {ModuleWithProviders}
     */
    TranslateModule.forChild = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: TranslateModule,
            providers: [
                config.loader || { provide: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["a" /* TranslateLoader */], useClass: __WEBPACK_IMPORTED_MODULE_1__src_translate_loader__["b" /* TranslateFakeLoader */] },
                config.parser || { provide: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["a" /* TranslateParser */], useClass: __WEBPACK_IMPORTED_MODULE_4__src_translate_parser__["b" /* TranslateDefaultParser */] },
                config.missingTranslationHandler || { provide: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["a" /* MissingTranslationHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3__src_missing_translation_handler__["b" /* FakeMissingTranslationHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["a" /* USE_STORE */], useValue: config.isolate },
                __WEBPACK_IMPORTED_MODULE_2__src_translate_service__["b" /* TranslateService */]
            ]
        };
    };
    return TranslateModule;
}());

TranslateModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__["a" /* TranslatePipe */],
                    __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a" /* TranslateDirective */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_6__src_translate_pipe__["a" /* TranslatePipe */],
                    __WEBPACK_IMPORTED_MODULE_5__src_translate_directive__["a" /* TranslateDirective */]
                ]
            },] },
];
/** @nocollapse */
TranslateModule.ctorParameters = function () { return []; };


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissingTranslationHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FakeMissingTranslationHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);

var MissingTranslationHandler = (function () {
    function MissingTranslationHandler() {
    }
    return MissingTranslationHandler;
}());

/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
var FakeMissingTranslationHandler = (function () {
    function FakeMissingTranslationHandler() {
    }
    FakeMissingTranslationHandler.prototype.handle = function (params) {
        return params.key;
    };
    return FakeMissingTranslationHandler;
}());

FakeMissingTranslationHandler.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
FakeMissingTranslationHandler.ctorParameters = function () { return []; };


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateFakeLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TranslateLoader = (function () {
    function TranslateLoader() {
    }
    return TranslateLoader;
}());

/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
var TranslateFakeLoader = (function (_super) {
    __extends(TranslateFakeLoader, _super);
    function TranslateFakeLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslateFakeLoader.prototype.getTranslation = function (lang) {
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of({});
    };
    return TranslateFakeLoader;
}(TranslateLoader));

TranslateFakeLoader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateFakeLoader.ctorParameters = function () { return []; };


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TranslateDefaultParser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TranslateParser = (function () {
    function TranslateParser() {
    }
    return TranslateParser;
}());

var TranslateDefaultParser = (function (_super) {
    __extends(TranslateDefaultParser, _super);
    function TranslateDefaultParser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
        return _this;
    }
    TranslateDefaultParser.prototype.interpolate = function (expr, params) {
        var _this = this;
        if (typeof expr !== 'string' || !params) {
            return expr;
        }
        return expr.replace(this.templateMatcher, function (substring, b) {
            var r = _this.getValue(params, b);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(r) ? r : substring;
        });
    };
    TranslateDefaultParser.prototype.getValue = function (target, key) {
        var keys = key.split('.');
        key = '';
        do {
            key += keys.shift();
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(target) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
                target = target[key];
                key = '';
            }
            else if (!keys.length) {
                target = undefined;
            }
            else {
                key += '.';
            }
        } while (keys.length);
        return target;
    };
    return TranslateDefaultParser;
}(TranslateParser));

TranslateDefaultParser.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TranslateDefaultParser.ctorParameters = function () { return []; };


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translate_service__ = __webpack_require__(2);



var TranslateDirective = (function () {
    function TranslateDirective(translateService, element, _ref) {
        var _this = this;
        this.translateService = translateService;
        this.element = element;
        this._ref = _ref;
        // subscribe to onTranslationChange event, in case the translations of the current lang change
        if (!this.onTranslationChangeSub) {
            this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(function (event) {
                if (event.lang === _this.translateService.currentLang) {
                    _this.checkNodes(true, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChangeSub) {
            this.onLangChangeSub = this.translateService.onLangChange.subscribe(function (event) {
                _this.checkNodes(true, event.translations);
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(function (event) {
                _this.checkNodes(true);
            });
        }
    }
    Object.defineProperty(TranslateDirective.prototype, "translate", {
        set: function (key) {
            if (key) {
                this.key = key;
                this.checkNodes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateDirective.prototype, "translateParams", {
        set: function (params) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* equals */])(this.currentParams, params)) {
                this.currentParams = params;
                this.checkNodes(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    TranslateDirective.prototype.ngAfterViewChecked = function () {
        this.checkNodes();
    };
    TranslateDirective.prototype.checkNodes = function (forceUpdate, translations) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        var nodes = this.element.nativeElement.childNodes;
        // if the element is empty
        if (!nodes.length) {
            // we add the key as content
            this.setContent(this.element.nativeElement, this.key);
            nodes = this.element.nativeElement.childNodes;
        }
        for (var i = 0; i < nodes.length; ++i) {
            var node = nodes[i];
            if (node.nodeType === 3) {
                var key = void 0;
                if (this.key) {
                    key = this.key;
                    if (forceUpdate) {
                        node.lastKey = null;
                    }
                }
                else {
                    var content = this.getContent(node).trim();
                    if (content.length) {
                        // we want to use the content as a key, not the translation value
                        if (content !== node.currentValue) {
                            key = content;
                            // the content was changed from the user, we'll use it as a reference if needed
                            node.originalContent = this.getContent(node);
                        }
                        else if (node.originalContent && forceUpdate) {
                            node.lastKey = null;
                            // the current content is the translation, not the key, use the last real content as key
                            key = node.originalContent.trim();
                        }
                    }
                }
                this.updateValue(key, node, translations);
            }
        }
    };
    TranslateDirective.prototype.updateValue = function (key, node, translations) {
        var _this = this;
        if (key) {
            if (node.lastKey === key && this.lastParams === this.currentParams) {
                return;
            }
            this.lastParams = this.currentParams;
            var onTranslation = function (res) {
                if (res !== key) {
                    node.lastKey = key;
                }
                if (!node.originalContent) {
                    node.originalContent = _this.getContent(node);
                }
                node.currentValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(res) ? res : (node.originalContent || key);
                // we replace in the original content to preserve spaces that we might have trimmed
                _this.setContent(node, _this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
                _this._ref.markForCheck();
            };
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(translations)) {
                var res = this.translateService.getParsedResult(translations, key, this.currentParams);
                if (typeof res.subscribe === "function") {
                    res.subscribe(onTranslation);
                }
                else {
                    onTranslation(res);
                }
            }
            else {
                this.translateService.get(key, this.currentParams).subscribe(onTranslation);
            }
        }
    };
    TranslateDirective.prototype.getContent = function (node) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(node.textContent) ? node.textContent : node.data;
    };
    TranslateDirective.prototype.setContent = function (node, content) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* isDefined */])(node.textContent)) {
            node.textContent = content;
        }
        else {
            node.data = content;
        }
    };
    TranslateDirective.prototype.ngOnDestroy = function () {
        if (this.onLangChangeSub) {
            this.onLangChangeSub.unsubscribe();
        }
        if (this.onDefaultLangChangeSub) {
            this.onDefaultLangChangeSub.unsubscribe();
        }
        if (this.onTranslationChangeSub) {
            this.onTranslationChangeSub.unsubscribe();
        }
    };
    return TranslateDirective;
}());

TranslateDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[translate],[ngx-translate]'
            },] },
];
/** @nocollapse */
TranslateDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__translate_service__["b" /* TranslateService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };
TranslateDirective.propDecorators = {
    'translate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'translateParams': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(3);



var TranslatePipe = (function () {
    function TranslatePipe(translate, _ref) {
        this.translate = translate;
        this._ref = _ref;
        this.value = '';
    }
    TranslatePipe.prototype.updateValue = function (key, interpolateParams, translations) {
        var _this = this;
        var onTranslation = function (res) {
            _this.value = res !== undefined ? res : key;
            _this.lastKey = key;
            _this._ref.markForCheck();
        };
        if (translations) {
            var res = this.translate.getParsedResult(translations, key, interpolateParams);
            if (typeof res.subscribe === 'function') {
                res.subscribe(onTranslation);
            }
            else {
                onTranslation(res);
            }
        }
        this.translate.get(key, interpolateParams).subscribe(onTranslation);
    };
    TranslatePipe.prototype.transform = function (query) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!query || query.length === 0) {
            return query;
        }
        // if we ask another time for the same key, return the last value
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* equals */])(query, this.lastKey) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* equals */])(args, this.lastParams)) {
            return this.value;
        }
        var interpolateParams;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* isDefined */])(args[0]) && args.length) {
            if (typeof args[0] === 'string' && args[0].length) {
                // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
                // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
                var validArgs = args[0]
                    .replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":')
                    .replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
                try {
                    interpolateParams = JSON.parse(validArgs);
                }
                catch (e) {
                    throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
                }
            }
            else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                interpolateParams = args[0];
            }
        }
        // store the query, in case it changes
        this.lastKey = query;
        // store the params, in case they change
        this.lastParams = args;
        // set the value
        this.updateValue(query, interpolateParams);
        // if there is a subscription to onLangChange, clean it
        this._dispose();
        // subscribe to onTranslationChange event, in case the translations change
        if (!this.onTranslationChange) {
            this.onTranslationChange = this.translate.onTranslationChange.subscribe(function (event) {
                if (_this.lastKey && event.lang === _this.translate.currentLang) {
                    _this.lastKey = null;
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onLangChange event, in case the language changes
        if (!this.onLangChange) {
            this.onLangChange = this.translate.onLangChange.subscribe(function (event) {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams, event.translations);
                }
            });
        }
        // subscribe to onDefaultLangChange event, in case the default language changes
        if (!this.onDefaultLangChange) {
            this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(function () {
                if (_this.lastKey) {
                    _this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
                    _this.updateValue(query, interpolateParams);
                }
            });
        }
        return this.value;
    };
    /**
     * Clean any existing subscription to change events
     * @private
     */
    TranslatePipe.prototype._dispose = function () {
        if (typeof this.onTranslationChange !== 'undefined') {
            this.onTranslationChange.unsubscribe();
            this.onTranslationChange = undefined;
        }
        if (typeof this.onLangChange !== 'undefined') {
            this.onLangChange.unsubscribe();
            this.onLangChange = undefined;
        }
        if (typeof this.onDefaultLangChange !== 'undefined') {
            this.onDefaultLangChange.unsubscribe();
            this.onDefaultLangChange = undefined;
        }
    };
    TranslatePipe.prototype.ngOnDestroy = function () {
        this._dispose();
    };
    return TranslatePipe;
}());

TranslatePipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'translate',
                pure: false // required to update the value when the promise is resolved
            },] },
];
/** @nocollapse */
TranslatePipe.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__translate_service__["b" /* TranslateService */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
]; };


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);

var TranslateStore = (function () {
    function TranslateStore() {
        /**
         * The lang currently used
         * @type {string}
         */
        this.currentLang = this.defaultLang;
        /**
         * a list of translations per lang
         * @type {{}}
         */
        this.translations = {};
        /**
         * an array of langs
         * @type {Array}
         */
        this.langs = [];
        /**
         * An EventEmitter to listen to translation change events
         * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<TranslationChangeEvent>}
         */
        this.onTranslationChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to lang change events
         * onLangChange.subscribe((params: LangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<LangChangeEvent>}
         */
        this.onLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
         * An EventEmitter to listen to default lang change events
         * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
         *     // do something
         * });
         * @type {EventEmitter<DefaultLangChangeEvent>}
         */
        this.onDefaultLangChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    return TranslateStore;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jhi_item_count_component__ = __webpack_require__(30);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__jhi_item_count_component__["a"]; });
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiModuleConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var JhiModuleConfig = /** @class */ (function () {
    function JhiModuleConfig() {
        this.sortIcon = 'fa-sort';
        this.sortAscIcon = 'fa-sort-asc';
        this.sortDescIcon = 'fa-sort-desc';
        this.sortIconSelector = 'span.fa';
        this.i18nEnabled = false;
        this.defaultI18nLang = 'en';
        this.noi18nMessage = 'translation-not-found';
        this.alertAsToast = false;
    }
    JhiModuleConfig = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], JhiModuleConfig);
    return JhiModuleConfig;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__maxbytes_directive__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__maxbytes_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__minbytes_directive__ = __webpack_require__(32);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__minbytes_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_directive__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__sort_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_by_directive__ = __webpack_require__(33);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__sort_by_directive__["a"]; });
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */






/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = numberOfBytes;
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
function numberOfBytes(base64String) {
    return base64String.length / 4 * 3 - paddingSize(base64String);
    function endsWith(suffix, str) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }
    function paddingSize(value) {
        if (endsWith('==', value)) {
            return 2;
        }
        if (endsWith('=', value)) {
            return 1;
        }
        return 0;
    }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiSortDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var JhiSortDirective = /** @class */ (function () {
    function JhiSortDirective(el, renderer, configService) {
        this.sortIcon = 'fa-sort';
        this.sortAscIcon = 'fa-sort-asc';
        this.sortDescIcon = 'fa-sort-desc';
        this.sortIconSelector = 'span.fa';
        this.predicateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ascendingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.element = el.nativeElement;
        var config = configService.getConfig();
        this.sortIcon = config.sortIcon;
        this.sortAscIcon = config.sortAscIcon;
        this.sortDescIcon = config.sortDescIcon;
        this.sortIconSelector = config.sortIconSelector;
    }
    JhiSortDirective.prototype.sort = function (field) {
        this.resetClasses();
        if (field !== this.predicate) {
            this.ascending = true;
        }
        else {
            this.ascending = !this.ascending;
        }
        this.predicate = field;
        this.predicateChange.emit(field);
        this.ascendingChange.emit(this.ascending);
        this.callback();
    };
    JhiSortDirective.prototype.resetClasses = function () {
        var allThIcons = this.element.querySelectorAll(this.sortIconSelector);
        // Use normal loop instead of forEach because IE does not support forEach on NodeList.
        for (var i = 0; i < allThIcons.length; i++) {
            allThIcons[i].classList.remove(this.sortAscIcon);
            allThIcons[i].classList.remove(this.sortDescIcon);
            allThIcons[i].classList.add(this.sortIcon);
        }
        ;
    };
    ;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], JhiSortDirective.prototype, "predicate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], JhiSortDirective.prototype, "ascending", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Function)
    ], JhiSortDirective.prototype, "callback", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], JhiSortDirective.prototype, "predicateChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], JhiSortDirective.prototype, "ascendingChange", void 0);
    JhiSortDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[jhiSort]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* JhiConfigService */]])
    ], JhiSortDirective);
    return JhiSortDirective;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiHttpInterceptor; });
/**
 * A HTTP interceptor responsibility chain member is a class, which may react on request and response of all requests
 * done by HTTP.
 */
var JhiHttpInterceptor = /** @class */ (function () {
    function JhiHttpInterceptor() {
        this._successor = null;
    }
    Object.defineProperty(JhiHttpInterceptor.prototype, "successor", {
        set: function (successor) {
            this._successor = successor;
        },
        enumerable: true,
        configurable: true
    });
    JhiHttpInterceptor.prototype.processRequestInterception = function (options) {
        return (!this._successor) ? this.requestIntercept(options) :
            this._successor.processRequestInterception(this.requestIntercept(options));
    };
    JhiHttpInterceptor.prototype.processResponseInterception = function (response) {
        return (!this._successor) ? this.responseIntercept(response) :
            this._successor.processResponseInterception(this.responseIntercept(response));
    };
    return JhiHttpInterceptor;
}());



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__language_service__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__language_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jhi_translate_directive__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__jhi_translate_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jhi_missing_translation_config__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__jhi_missing_translation_config__["a"]; });
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */





/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var JhiFilterPipe = /** @class */ (function () {
    function JhiFilterPipe() {
    }
    JhiFilterPipe.prototype.filterByStringAndField = function (filter, field) {
        return function (value) {
            return !filter || (value[field] && value[field].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        };
    };
    // adapted from https://github.com/VadimDez/ng2-filter-pipe
    JhiFilterPipe.prototype.filterByString = function (filter) {
        return function (value) {
            return !filter || value.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        };
    };
    JhiFilterPipe.prototype.filterDefault = function (filter) {
        return function (value) {
            return !filter || filter === value;
        };
    };
    JhiFilterPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            var keys = Object.keys(filter);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var type = typeof value[key];
                var isMatching = void 0;
                if (type === 'string') {
                    isMatching = _this.filterByString(filter[key])(value[key]);
                }
                else if (type === 'object') {
                    isMatching = _this.filterByObject(filter[key])(value[key]);
                }
                else {
                    isMatching = _this.filterDefault(filter[key])(value[key]);
                }
                if (!isMatching) {
                    return false;
                }
            }
            return true;
        };
    };
    JhiFilterPipe.prototype.transform = function (input, filter, field) {
        if (!filter) {
            return input;
        }
        var type = typeof filter;
        if (type === 'string') {
            if (field) {
                return input.filter(this.filterByStringAndField(filter, field));
            }
            return input.filter(this.filterByString(filter));
        }
        if (type === 'object') {
            return input.filter(this.filterByObject(filter));
        }
    };
    JhiFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'filter', pure: false })
    ], JhiFilterPipe);
    return JhiFilterPipe;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__truncate_characters_pipe__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__truncate_characters_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__truncate_words_pipe__ = __webpack_require__(45);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__truncate_words_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_by_pipe__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__order_by_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_pipe__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__filter_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pure_filter_pipe__ = __webpack_require__(43);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__pure_filter_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__capitalize_pipe__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__capitalize_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__keys_pipe__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__keys_pipe__["a"]; });
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */









/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pagination_util_service__ = __webpack_require__(51);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pagination_util_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse_links_service__ = __webpack_require__(52);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__parse_links_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_util_service__ = __webpack_require__(48);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__data_util_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_util_service__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__date_util_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_manager_service__ = __webpack_require__(50);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__event_manager_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_service__ = __webpack_require__(46);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base64_service__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__base64_service__["a"]; });
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */









/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = translatePartialLoader;
/* harmony export (immutable) */ __webpack_exports__["b"] = missingTranslationHandler;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NgJhipsterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_jhi_components__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_language__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_config_service__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_pipe__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_9__src_pipe__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__src_pipe__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_9__src_pipe__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_9__src_pipe__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__src_pipe__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__src_pipe__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__src_pipe__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_directive__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__src_directive__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_10__src_directive__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__src_directive__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_10__src_directive__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_service__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_11__src_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_11__src_service__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_11__src_service__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_11__src_service__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_11__src_service__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_11__src_service__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_11__src_service__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_component__ = __webpack_require__(11);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_12__src_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_6__src_language__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_6__src_language__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_6__src_language__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_interceptor__ = __webpack_require__(34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_13__src_interceptor__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_13__src_interceptor__["b"]; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */









// Re export the files






function translatePartialLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, 'i18n/', '.json');
}
function missingTranslationHandler(configService) {
    return new __WEBPACK_IMPORTED_MODULE_6__src_language__["c" /* JhiMissingTranslationHandler */](configService);
}
var NgJhipsterModule = /** @class */ (function () {
    function NgJhipsterModule() {
    }
    NgJhipsterModule_1 = NgJhipsterModule;
    NgJhipsterModule.forRoot = function (moduleConfig) {
        return {
            ngModule: NgJhipsterModule_1,
            providers: __WEBPACK_IMPORTED_MODULE_5__src_jhi_components__["a" /* JHI_SERVICES */].concat([
                __WEBPACK_IMPORTED_MODULE_6__src_language__["a" /* JhiLanguageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__src_config__["a" /* JhiModuleConfig */], useValue: moduleConfig },
                __WEBPACK_IMPORTED_MODULE_8__src_config_service__["a" /* JhiConfigService */]
            ])
        };
    };
    NgJhipsterModule = NgJhipsterModule_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateLoader */],
                        useFactory: translatePartialLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]]
                    },
                    missingTranslationHandler: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* MissingTranslationHandler */],
                        useFactory: missingTranslationHandler,
                        deps: [__WEBPACK_IMPORTED_MODULE_8__src_config_service__["a" /* JhiConfigService */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_5__src_jhi_components__["b" /* JHI_PIPES */].concat(__WEBPACK_IMPORTED_MODULE_5__src_jhi_components__["c" /* JHI_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_5__src_jhi_components__["d" /* JHI_COMPONENTS */], [
                __WEBPACK_IMPORTED_MODULE_6__src_language__["b" /* JhiTranslateComponent */]
            ]),
            exports: __WEBPACK_IMPORTED_MODULE_5__src_jhi_components__["b" /* JHI_PIPES */].concat(__WEBPACK_IMPORTED_MODULE_5__src_jhi_components__["c" /* JHI_DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_5__src_jhi_components__["d" /* JHI_COMPONENTS */], [
                __WEBPACK_IMPORTED_MODULE_6__src_language__["b" /* JhiTranslateComponent */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]
            ])
        })
    ], NgJhipsterModule);
    return NgJhipsterModule;
    var NgJhipsterModule_1;
}());



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_http_loader__ = __webpack_require__(28);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_http_loader__["a"]; });



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateHttpLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);

var TranslateHttpLoader = (function () {
    function TranslateHttpLoader(http, prefix, suffix) {
        if (prefix === void 0) { prefix = "/assets/i18n/"; }
        if (suffix === void 0) { suffix = ".json"; }
        this.http = http;
        this.prefix = prefix;
        this.suffix = suffix;
    }
    /**
     * Gets the translations from the server
     * @param lang
     * @returns {any}
     */
    TranslateHttpLoader.prototype.getTranslation = function (lang) {
        return this.http.get("" + this.prefix + lang + this.suffix)
            .map(function (res) { return res.json(); });
    };
    return TranslateHttpLoader;
}());



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(26);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "translatePartialLoader", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "missingTranslationHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NgJhipsterModule", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiTruncateCharactersPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiTruncateWordsPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiOrderByPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiFilterPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiPureFilterPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiCapitalizePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiKeysPipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiMaxbytesValidatorDirective", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiMinbytesValidatorDirective", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiSortDirective", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiSortByDirective", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiPaginationUtil", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiParseLinks", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiDataUtils", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiDateUtils", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiEventManager", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiAlertService", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiBase64Service", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiItemCountComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiLanguageService", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiTranslateComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiMissingTranslationHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiHttpInterceptor", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JhiInterceptableHttp", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["A"]; });
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiItemCountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


/**
 * A component that will take care of item count statistics of a pagination.
 */
var JhiItemCountComponent = /** @class */ (function () {
    function JhiItemCountComponent(config) {
        this.i18nEnabled = config.CONFIG_OPTIONS.i18nEnabled;
    }
    /**
     * "translate-values" JSON of the template
     */
    JhiItemCountComponent.prototype.i18nValues = function () {
        var first = ((this.page - 1) * this.itemsPerPage) === 0 ? 1 : ((this.page - 1) * this.itemsPerPage + 1);
        var second = (this.page * this.itemsPerPage) < this.total ? (this.page * this.itemsPerPage) : this.total;
        return '{first: \'' + first + '\', second: \'' + second + '\', total: \'' + this.total + '\'}';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], JhiItemCountComponent.prototype, "page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], JhiItemCountComponent.prototype, "total", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], JhiItemCountComponent.prototype, "itemsPerPage", void 0);
    JhiItemCountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'jhi-item-count',
            template: "\n        <div *ngIf=\"i18nEnabled; else noI18n\" class=\"info jhi-item-count\"\n            jhiTranslate=\"global.item-count\"\n            translateValues=\"{{i18nValues()}}\"\n            [attr.translateValues]=\"i18nValues()\">  /* [attr.translateValues] is used to get entire values in tests */\n        </div>\n        <ng-template #noI18n class=\"info jhi-item-count\">\n            \u663E\u793A {{((page - 1) * itemsPerPage) == 0 ? 1 : ((page - 1) * itemsPerPage + 1)}} -\n            {{(page * itemsPerPage) < total ? (page * itemsPerPage) : total}}\n            \u5171 {{total}} \u6761.\n        </ng-template>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* JhiConfigService */]])
    ], JhiItemCountComponent);
    return JhiItemCountComponent;
}());



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiMaxbytesValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number_of_bytes__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




var JhiMaxbytesValidatorDirective = /** @class */ (function () {
    function JhiMaxbytesValidatorDirective() {
    }
    JhiMaxbytesValidatorDirective_1 = JhiMaxbytesValidatorDirective;
    JhiMaxbytesValidatorDirective.prototype.validate = function (c) {
        return (c.value && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__number_of_bytes__["a" /* numberOfBytes */])(c.value) <= this.jhiMaxbytes) ? null : {
            maxbytes: {
                valid: false
            }
        };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], JhiMaxbytesValidatorDirective.prototype, "jhiMaxbytes", void 0);
    JhiMaxbytesValidatorDirective = JhiMaxbytesValidatorDirective_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[jhiMaxbytes][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return JhiMaxbytesValidatorDirective_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], JhiMaxbytesValidatorDirective);
    return JhiMaxbytesValidatorDirective;
    var JhiMaxbytesValidatorDirective_1;
}());



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiMinbytesValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number_of_bytes__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




var JhiMinbytesValidatorDirective = /** @class */ (function () {
    function JhiMinbytesValidatorDirective() {
    }
    JhiMinbytesValidatorDirective_1 = JhiMinbytesValidatorDirective;
    JhiMinbytesValidatorDirective.prototype.validate = function (c) {
        return (c.value && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__number_of_bytes__["a" /* numberOfBytes */])(c.value) >= this.jhiMinbytes) ? null : {
            minbytes: {
                valid: false
            }
        };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], JhiMinbytesValidatorDirective.prototype, "jhiMinbytes", void 0);
    JhiMinbytesValidatorDirective = JhiMinbytesValidatorDirective_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[jhiMinbytes][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return JhiMinbytesValidatorDirective_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], JhiMinbytesValidatorDirective);
    return JhiMinbytesValidatorDirective;
    var JhiMinbytesValidatorDirective_1;
}());



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiSortByDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort_directive__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var JhiSortByDirective = /** @class */ (function () {
    function JhiSortByDirective(jhiSort, el, renderer, configService) {
        this.el = el;
        this.renderer = renderer;
        this.sortAscIcon = 'fa-sort-asc';
        this.sortDescIcon = 'fa-sort-desc';
        this.jhiSort = jhiSort;
        var config = configService.getConfig();
        this.sortAscIcon = config.sortAscIcon;
        this.sortDescIcon = config.sortDescIcon;
    }
    JhiSortByDirective.prototype.onClick = function () {
        if (this.jhiSort.predicate && this.jhiSort.predicate !== '_score') {
            this.jhiSort.sort(this.jhiSortBy);
            this.applyClass();
        }
    };
    JhiSortByDirective.prototype.applyClass = function () {
        var childSpan = this.el.nativeElement.children[1];
        var add = this.sortAscIcon;
        if (!this.jhiSort.ascending) {
            add = this.sortDescIcon;
        }
        this.renderer.setElementClass(childSpan, add, true);
    };
    ;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], JhiSortByDirective.prototype, "jhiSortBy", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JhiSortByDirective.prototype, "onClick", null);
    JhiSortByDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[jhiSortBy]'
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sort_directive__["a" /* JhiSortDirective */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* JhiConfigService */]])
    ], JhiSortByDirective);
    return JhiSortByDirective;
}());



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interceptable_http__ = __webpack_require__(35);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__interceptable_http__["a"]; });
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiInterceptableHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_http__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var JhiInterceptableHttp = /** @class */ (function (_super) {
    __extends(JhiInterceptableHttp, _super);
    function JhiInterceptableHttp(backend, defaultOptions, interceptors // see the issue generator-jhipster#4794
    ) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        /**
         * building a responsibility chain of http interceptors, so when processXXXInterception is called on first interceptor,
         * all http interceptors are called in a row
         * Note: the array of interceptors are wired in customHttpProvider of the generated Jhipster app in file `http.provider.ts`
         *
        */
        if (interceptors && interceptors.length > 0) {
            interceptors.reduce(function (chain, current) {
                chain.successor = current;
                return current;
            });
            _this.firstInterceptor = interceptors[0];
        }
        return _this;
    }
    JhiInterceptableHttp.prototype.request = function (url, options) {
        // Response interceptor needs to be called only once after the final request here
        // Every HTTP method will go through this request method
        return this.interceptResponse(_super.prototype.request.call(this, url, options));
    };
    JhiInterceptableHttp.prototype.get = function (url, options) {
        return _super.prototype.get.call(this, url, this.interceptRequest(url, __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Get, options));
    };
    JhiInterceptableHttp.prototype.post = function (url, body, options) {
        return _super.prototype.post.call(this, url, body, this.interceptRequest(url, __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Post, options, body));
    };
    JhiInterceptableHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, url, body, this.interceptRequest(url, __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Put, options, body));
    };
    JhiInterceptableHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, url, this.interceptRequest(url, __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Delete, options));
    };
    JhiInterceptableHttp.prototype.patch = function (url, body, options) {
        return _super.prototype.patch.call(this, url, body, this.interceptRequest(url, __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Patch, options, body));
    };
    JhiInterceptableHttp.prototype.head = function (url, options) {
        return _super.prototype.head.call(this, url, this.interceptRequest(url, __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Head, options));
    };
    JhiInterceptableHttp.prototype.options = function (url, options) {
        return _super.prototype.options.call(this, url, this.interceptRequest(url, __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestMethod"].Options, options));
    };
    JhiInterceptableHttp.prototype.interceptRequest = function (url, method, options, body) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]();
        }
        if (!options.headers) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        }
        options.url = options.url || url;
        options.method = options.method || method;
        options.body = options.body || body;
        return !this.firstInterceptor ? options : this.firstInterceptor.processRequestInterception(options);
    };
    JhiInterceptableHttp.prototype.interceptResponse = function (observable) {
        return !this.firstInterceptor ? observable : this.firstInterceptor.processResponseInterception(observable);
    };
    JhiInterceptableHttp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a" /* JhiHttpInterceptor */]; }))),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["ConnectionBackend"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"], Array])
    ], JhiInterceptableHttp);
    return JhiInterceptableHttp;
}(__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]));



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JHI_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JHI_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return JHI_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JHI_SERVICES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipe__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directive__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__(20);
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




var JHI_PIPES = [
    __WEBPACK_IMPORTED_MODULE_0__pipe__["f" /* JhiCapitalizePipe */],
    __WEBPACK_IMPORTED_MODULE_0__pipe__["d" /* JhiFilterPipe */],
    __WEBPACK_IMPORTED_MODULE_0__pipe__["g" /* JhiKeysPipe */],
    __WEBPACK_IMPORTED_MODULE_0__pipe__["c" /* JhiOrderByPipe */],
    __WEBPACK_IMPORTED_MODULE_0__pipe__["e" /* JhiPureFilterPipe */],
    __WEBPACK_IMPORTED_MODULE_0__pipe__["a" /* JhiTruncateCharactersPipe */],
    __WEBPACK_IMPORTED_MODULE_0__pipe__["b" /* JhiTruncateWordsPipe */]
];
var JHI_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_1__directive__["a" /* JhiMaxbytesValidatorDirective */],
    __WEBPACK_IMPORTED_MODULE_1__directive__["b" /* JhiMinbytesValidatorDirective */],
    __WEBPACK_IMPORTED_MODULE_1__directive__["c" /* JhiSortDirective */],
    __WEBPACK_IMPORTED_MODULE_1__directive__["d" /* JhiSortByDirective */]
];
var JHI_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__component__["a" /* JhiItemCountComponent */]
];
var JHI_SERVICES = [
    __WEBPACK_IMPORTED_MODULE_3__service__["c" /* JhiDataUtils */],
    __WEBPACK_IMPORTED_MODULE_3__service__["d" /* JhiDateUtils */],
    __WEBPACK_IMPORTED_MODULE_3__service__["e" /* JhiEventManager */],
    __WEBPACK_IMPORTED_MODULE_3__service__["b" /* JhiParseLinks */],
    __WEBPACK_IMPORTED_MODULE_3__service__["a" /* JhiPaginationUtil */],
    __WEBPACK_IMPORTED_MODULE_3__service__["g" /* JhiBase64Service */],
    __WEBPACK_IMPORTED_MODULE_3__service__["f" /* JhiAlertService */]
];


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiMissingTranslationHandler; });
var JhiMissingTranslationHandler = /** @class */ (function () {
    function JhiMissingTranslationHandler(configService) {
        this.configService = configService;
    }
    JhiMissingTranslationHandler.prototype.handle = function (params) {
        var key = params.key;
        return this.configService.getConfig().noi18nMessage + "[" + key + "]";
    };
    return JhiMissingTranslationHandler;
}());



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiTranslateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * A wrapper directive on top of the translate pipe as the inbuilt translate directive from ngx-translate is too verbose and buggy
 */
/* tslint:disable */
var JhiTranslateComponent = /** @class */ (function () {
    function JhiTranslateComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], JhiTranslateComponent.prototype, "jhiTranslate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], JhiTranslateComponent.prototype, "translateValues", void 0);
    JhiTranslateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[jhiTranslate]',
            template: '<span [innerHTML]="jhiTranslate | translate:translateValues"></span>'
        })
    ], JhiTranslateComponent);
    return JhiTranslateComponent;
}());

/* tslint:enable */


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiLanguageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var JhiLanguageService = /** @class */ (function () {
    function JhiLanguageService(translateService, configService) {
        this.translateService = translateService;
        this.configService = configService;
        this.currentLang = 'en';
        this.init();
    }
    JhiLanguageService.prototype.init = function () {
        var config = this.configService.getConfig();
        this.currentLang = config.defaultI18nLang;
        this.translateService.setDefaultLang(this.currentLang);
        this.translateService.use(this.currentLang);
    };
    JhiLanguageService.prototype.changeLanguage = function (languageKey) {
        this.currentLang = languageKey;
        this.configService.CONFIG_OPTIONS.defaultI18nLang = languageKey;
        this.translateService.use(this.currentLang);
    };
    JhiLanguageService.prototype.getCurrent = function () {
        return Promise.resolve(this.currentLang);
    };
    JhiLanguageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["d" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* JhiConfigService */]])
    ], JhiLanguageService);
    return JhiLanguageService;
}());



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiCapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var JhiCapitalizePipe = /** @class */ (function () {
    function JhiCapitalizePipe() {
    }
    JhiCapitalizePipe.prototype.transform = function (input) {
        if (input !== null) {
            input = input.toLowerCase();
        }
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    };
    JhiCapitalizePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'capitalize' })
    ], JhiCapitalizePipe);
    return JhiCapitalizePipe;
}());



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiKeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var JhiKeysPipe = /** @class */ (function () {
    function JhiKeysPipe() {
    }
    JhiKeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        var valueKeys = Object.keys(value);
        for (var i = 0; i < valueKeys.length; i++) {
            var key = valueKeys[i];
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    JhiKeysPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
    ], JhiKeysPipe);
    return JhiKeysPipe;
}());



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiOrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var JhiOrderByPipe = /** @class */ (function () {
    function JhiOrderByPipe() {
    }
    JhiOrderByPipe.prototype.transform = function (values, predicate, reverse) {
        if (predicate === void 0) { predicate = ''; }
        if (reverse === void 0) { reverse = false; }
        if (predicate === '') {
            return reverse ? values.sort().reverse() : values.sort();
        }
        return values.sort(function (a, b) {
            if (a[predicate] < b[predicate]) {
                return reverse ? 1 : -1;
            }
            else if (b[predicate] < a[predicate]) {
                return reverse ? -1 : 1;
            }
            return 0;
        });
    };
    JhiOrderByPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderBy' })
    ], JhiOrderByPipe);
    return JhiOrderByPipe;
}());



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiPureFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter_pipe__ = __webpack_require__(18);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var JhiPureFilterPipe = /** @class */ (function (_super) {
    __extends(JhiPureFilterPipe, _super);
    function JhiPureFilterPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JhiPureFilterPipe.prototype.transform = function (input, filter, field) {
        return _super.prototype.transform.call(this, input, filter, field);
    };
    JhiPureFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'pureFilter' })
    ], JhiPureFilterPipe);
    return JhiPureFilterPipe;
}(__WEBPACK_IMPORTED_MODULE_1__filter_pipe__["a" /* JhiFilterPipe */]));



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiTruncateCharactersPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var JhiTruncateCharactersPipe = /** @class */ (function () {
    function JhiTruncateCharactersPipe() {
    }
    JhiTruncateCharactersPipe.prototype.transform = function (input, chars, breakOnWord) {
        if (isNaN(chars)) {
            return input;
        }
        if (chars <= 0) {
            return '';
        }
        if (input && input.length > chars) {
            input = input.substring(0, chars);
            if (!breakOnWord) {
                var lastspace = input.lastIndexOf(' ');
                // Get last space
                if (lastspace !== -1) {
                    input = input.substr(0, lastspace);
                }
            }
            else {
                while (input.charAt(input.length - 1) === ' ') {
                    input = input.substr(0, input.length - 1);
                }
            }
            return input + '...';
        }
        return input;
    };
    JhiTruncateCharactersPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'truncateCharacters' })
    ], JhiTruncateCharactersPipe);
    return JhiTruncateCharactersPipe;
}());



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiTruncateWordsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var JhiTruncateWordsPipe = /** @class */ (function () {
    function JhiTruncateWordsPipe() {
    }
    JhiTruncateWordsPipe.prototype.transform = function (input, words) {
        if (isNaN(words)) {
            return input;
        }
        if (words <= 0) {
            return '';
        }
        if (input) {
            var inputWords = input.split(/\s+/);
            if (inputWords.length > words) {
                input = inputWords.slice(0, words).join(' ') + '...';
            }
        }
        return input;
    };
    JhiTruncateWordsPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'truncateWords' })
    ], JhiTruncateWordsPipe);
    return JhiTruncateWordsPipe;
}());



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiAlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var JhiAlertService = /** @class */ (function () {
    function JhiAlertService(sanitizer, configService, translateService) {
        this.sanitizer = sanitizer;
        this.configService = configService;
        this.translateService = translateService;
        var config = this.configService.getConfig();
        this.toast = config.alertAsToast;
        this.i18nEnabled = config.i18nEnabled;
        this.alertId = 0; // unique id for each alert. Starts from 0.
        this.alerts = [];
        this.timeout = 5000; // default timeout in milliseconds
    }
    JhiAlertService.prototype.clear = function () {
        this.alerts.splice(0, this.alerts.length);
    };
    JhiAlertService.prototype.get = function () {
        return this.alerts;
    };
    JhiAlertService.prototype.success = function (msg, params, position) {
        return this.addAlert({
            type: 'success',
            msg: msg,
            params: params,
            timeout: this.timeout,
            toast: this.isToast(),
            position: position
        }, []);
    };
    JhiAlertService.prototype.error = function (msg, params, position) {
        return this.addAlert({
            type: 'danger',
            msg: msg,
            params: params,
            timeout: this.timeout,
            toast: this.isToast(),
            position: position
        }, []);
    };
    JhiAlertService.prototype.warning = function (msg, params, position) {
        return this.addAlert({
            type: 'warning',
            msg: msg,
            params: params,
            timeout: this.timeout,
            toast: this.isToast(),
            position: position
        }, []);
    };
    JhiAlertService.prototype.info = function (msg, params, position) {
        return this.addAlert({
            type: 'info',
            msg: msg,
            params: params,
            timeout: this.timeout,
            toast: this.isToast(),
            position: position
        }, []);
    };
    JhiAlertService.prototype.factory = function (alertOptions) {
        var _this = this;
        var alert = {
            type: alertOptions.type,
            msg: this.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SecurityContext"].HTML, alertOptions.msg),
            id: alertOptions.id,
            timeout: alertOptions.timeout,
            toast: alertOptions.toast,
            position: alertOptions.position ? alertOptions.position : 'top right',
            scoped: alertOptions.scoped,
            close: function (alerts) {
                return _this.closeAlert(alertOptions.id, alerts);
            }
        };
        if (!alert.scoped) {
            this.alerts.push(alert);
        }
        return alert;
    };
    JhiAlertService.prototype.addAlert = function (alertOptions, extAlerts) {
        var _this = this;
        alertOptions.id = this.alertId++;
        if (this.i18nEnabled && alertOptions.msg) {
            alertOptions.msg = this.translateService.instant(alertOptions.msg, alertOptions.params);
        }
        var alert = this.factory(alertOptions);
        if (alertOptions.timeout && alertOptions.timeout > 0) {
            setTimeout(function () {
                _this.closeAlert(alertOptions.id, extAlerts);
            }, alertOptions.timeout);
        }
        return alert;
    };
    JhiAlertService.prototype.closeAlert = function (id, extAlerts) {
        var thisAlerts = (extAlerts && extAlerts.length > 0) ? extAlerts : this.alerts;
        return this.closeAlertByIndex(thisAlerts.map(function (e) { return e.id; }).indexOf(id), thisAlerts);
    };
    JhiAlertService.prototype.closeAlertByIndex = function (index, thisAlerts) {
        return thisAlerts.splice(index, 1);
    };
    JhiAlertService.prototype.isToast = function () {
        return this.toast;
    };
    JhiAlertService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Sanitizer"],
            __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* JhiConfigService */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["d" /* TranslateService */]])
    ], JhiAlertService);
    return JhiAlertService;
}());



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiBase64Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
/* tslint:disable:no-bitwise */

var JhiBase64Service = /** @class */ (function () {
    function JhiBase64Service() {
        this.keyStr = 'ABCDEFGHIJKLMNOP' +
            'QRSTUVWXYZabcdef' +
            'ghijklmnopqrstuv' +
            'wxyz0123456789+/' +
            '=';
    }
    JhiBase64Service.prototype.encode = function (input) {
        var output = '';
        var enc1 = '';
        var enc2 = '';
        var enc3 = '';
        var enc4 = '';
        var chr1 = '';
        var chr2 = '';
        var chr3 = '';
        var i = 0;
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                this.keyStr.charAt(enc1) +
                this.keyStr.charAt(enc2) +
                this.keyStr.charAt(enc3) +
                this.keyStr.charAt(enc4);
            chr1 = chr2 = chr3 = '';
            enc1 = enc2 = enc3 = enc4 = '';
        }
        return output;
    };
    JhiBase64Service.prototype.decode = function (input) {
        var output = '';
        var enc1 = '';
        var enc2 = '';
        var enc3 = '';
        var enc4 = '';
        var chr1 = '';
        var chr2 = '';
        var chr3 = '';
        var i = 0;
        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
        while (i < input.length) {
            enc1 = this.keyStr.indexOf(input.charAt(i++));
            enc2 = this.keyStr.indexOf(input.charAt(i++));
            enc3 = this.keyStr.indexOf(input.charAt(i++));
            enc4 = this.keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 !== 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 !== 64) {
                output = output + String.fromCharCode(chr3);
            }
            chr1 = chr2 = chr3 = '';
            enc1 = enc2 = enc3 = enc4 = '';
        }
        return output;
    };
    JhiBase64Service = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], JhiBase64Service);
    return JhiBase64Service;
}());



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiDataUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * An utility service for data.
 */
var JhiDataUtils = /** @class */ (function () {
    function JhiDataUtils() {
    }
    /**
     * Method to abbreviate the text given
     */
    JhiDataUtils.prototype.abbreviate = function (text, append) {
        if (append === void 0) { append = '...'; }
        if (text.length < 30) {
            return text;
        }
        return text ? (text.substring(0, 15) + append + text.slice(-10)) : '';
    };
    /**
     * Method to find the byte size of the string provides
     */
    JhiDataUtils.prototype.byteSize = function (base64String) {
        return this.formatAsBytes(this.size(base64String));
    };
    /**
     * Method to open file
     */
    JhiDataUtils.prototype.openFile = function (contentType, data) {
        var fileURL = "data:" + contentType + ";base64," + data;
        var win = window.open();
        win.document.write('<iframe src="' + fileURL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    };
    /**
     * Method to convert the file to base64
     */
    JhiDataUtils.prototype.toBase64 = function (file, cb) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e) {
            var base64Data = e.target.result.substr(e.target.result.indexOf('base64,') + 'base64,'.length);
            cb(base64Data);
        };
    };
    /**
     * Method to clear the input
     */
    JhiDataUtils.prototype.clearInputImage = function (entity, elementRef, field, fieldContentType, idInput) {
        console.log(elementRef);
        console.log(entity);
        if (entity && field && fieldContentType) {
            if (entity.hasOwnProperty(field)) {
                entity[field] = null;
            }
            if (entity.hasOwnProperty(fieldContentType)) {
                entity[fieldContentType] = null;
            }
            if (elementRef && idInput && elementRef.nativeElement.querySelector('#' + idInput)) {
                elementRef.nativeElement.querySelector('#' + idInput).value = null;
            }
        }
    };
    JhiDataUtils.prototype.endsWith = function (suffix, str) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    };
    JhiDataUtils.prototype.paddingSize = function (value) {
        if (this.endsWith('==', value)) {
            return 2;
        }
        if (this.endsWith('=', value)) {
            return 1;
        }
        return 0;
    };
    JhiDataUtils.prototype.size = function (value) {
        return value.length / 4 * 3 - this.paddingSize(value);
    };
    JhiDataUtils.prototype.formatAsBytes = function (size) {
        return size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes';
    };
    JhiDataUtils.prototype.setFileData = function (event, entity, field, isImage) {
        if (event && event.target.files && event.target.files[0]) {
            var file_1 = event.target.files[0];
            if (isImage && !/^image\//.test(file_1.type)) {
                return;
            }
            this.toBase64(file_1, function (base64Data) {
                entity[field] = base64Data;
                entity[field + "ContentType"] = file_1.type;
            });
        }
    };
    JhiDataUtils = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JhiDataUtils);
    return JhiDataUtils;
}());



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiDateUtils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


/**
 * An utility service for date.
 */
var JhiDateUtils = /** @class */ (function () {
    function JhiDateUtils() {
        this.pattern = 'yyyy-MM-dd';
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"]('en');
    }
    /**
     * Method to convert the date time from server into JS date object
     */
    JhiDateUtils.prototype.convertDateTimeFromServer = function (date) {
        if (date) {
            return new Date(date);
        }
        else {
            return null;
        }
    };
    /**
     * Method to convert the date from server into JS date object
     */
    JhiDateUtils.prototype.convertLocalDateFromServer = function (date) {
        if (date) {
            var dateString = date.split('-');
            return new Date(dateString[0], dateString[1] - 1, dateString[2]);
        }
        return null;
    };
    /**
     * Method to convert the JS date object into specified date pattern
     */
    JhiDateUtils.prototype.convertLocalDateToServer = function (date, pattern) {
        if (pattern === void 0) { pattern = this.pattern; }
        if (date) {
            var newDate = new Date(date.year, date.month - 1, date.day);
            return this.datePipe.transform(newDate, pattern);
        }
        else {
            return null;
        }
    };
    /**
     * Method to get the default date pattern
     */
    JhiDateUtils.prototype.dateformat = function () {
        return this.pattern;
    };
    // TODO Change this method when moving from datetime-local input to NgbDatePicker
    JhiDateUtils.prototype.toDate = function (date) {
        if (date === undefined || date === null) {
            return null;
        }
        var dateParts = date.split(/\D+/);
        if (dateParts.length === 7) {
            return new Date(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4], dateParts[5], dateParts[6]);
        }
        if (dateParts.length === 6) {
            return new Date(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4], dateParts[5]);
        }
        return new Date(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4]);
    };
    JhiDateUtils = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JhiDateUtils);
    return JhiDateUtils;
}());



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiEventManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


/**
 * An utility class to manage RX events
 */
var JhiEventManager = /** @class */ (function () {
    function JhiEventManager() {
        var _this = this;
        this.observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
            _this.observer = observer;
        }).share();
    }
    /**
     * Method to broadcast the event to observer
     */
    JhiEventManager.prototype.broadcast = function (event) {
        if (this.observer != null) {
            this.observer.next(event);
        }
    };
    /**
     * Method to subscribe to an event with callback
     */
    JhiEventManager.prototype.subscribe = function (eventName, callback) {
        var subscriber = this.observable.filter(function (event) {
            return event.name === eventName;
        }).subscribe(callback);
        return subscriber;
    };
    /**
     * Method to unsubscribe the subscription
     */
    JhiEventManager.prototype.destroy = function (subscriber) {
        subscriber.unsubscribe();
    };
    JhiEventManager = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JhiEventManager);
    return JhiEventManager;
}());



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiPaginationUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * An utility service for pagination
 */
var JhiPaginationUtil = /** @class */ (function () {
    function JhiPaginationUtil() {
    }
    /**
     * Method to find whether the sort is defined
     */
    JhiPaginationUtil.prototype.parseAscending = function (sort) {
        var sortArray = sort.split(',');
        sortArray = sortArray.length > 1 ? sortArray : sort.split('%2C');
        if (sortArray.length > 1) {
            return sortArray.slice(-1)[0] === 'asc';
        }
        // default to true if no sort is defined
        return true;
    };
    /**
     * Method to query params are strings, and need to be parsed
     */
    JhiPaginationUtil.prototype.parsePage = function (page) {
        return parseInt(page, 10);
    };
    /**
     * Method to sort can be in the format `id,asc` or `id`
     */
    JhiPaginationUtil.prototype.parsePredicate = function (sort) {
        return sort.split(',')[0].split('%2C')[0];
    };
    JhiPaginationUtil = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JhiPaginationUtil);
    return JhiPaginationUtil;
}());



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JhiParseLinks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * An utility service for link parsing.
 */
var JhiParseLinks = /** @class */ (function () {
    function JhiParseLinks() {
    }
    /**
     * Method to parse the links
     */
    JhiParseLinks.prototype.parse = function (header) {
        if (header.length === 0) {
            throw new Error('input must not be of zero length');
        }
        // Split parts by comma
        var parts = header.split(',');
        var links = {};
        // Parse each part into a named link
        parts.forEach(function (p) {
            var section = p.split(';');
            if (section.length !== 2) {
                throw new Error('section could not be split on ";"');
            }
            var url = section[0].replace(/<(.*)>/, '$1').trim();
            var queryString = {};
            url.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), function ($0, $1, $2, $3) { return queryString[$1] = $3; });
            var page = queryString.page;
            if (typeof page === 'string') {
                page = parseInt(page, 10);
            }
            var name = section[1].replace(/rel="(.*)"/, '$1').trim();
            links[name] = page;
        });
        return links;
    };
    JhiParseLinks = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JhiParseLinks);
    return JhiParseLinks;
}());



/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_53__;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_57__;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3NTg0YzVmZGZiZTI3NTAxZTZhOSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uL34vQG5neC10cmFuc2xhdGUvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL21pc3NpbmctdHJhbnNsYXRpb24taGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL3RyYW5zbGF0ZS5sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy90cmFuc2xhdGUucGFyc2VyLmpzIiwid2VicGFjazovLy8uL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L0BuZ3gtdHJhbnNsYXRlL2NvcmUvc3JjL3RyYW5zbGF0ZS5waXBlLmpzIiwid2VicGFjazovLy8uL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLnN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmUvbnVtYmVyLW9mLWJ5dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmUvc29ydC5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9yL2h0dHAuaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmd1YWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlL2ZpbHRlci5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvT2JzZXJ2YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy8uL34vQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9Abmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlci9zcmMvaHR0cC1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbmctamhpcHN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9qaGktaXRlbS1jb3VudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZS9tYXhieXRlcy5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZS9taW5ieXRlcy5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZS9zb3J0LWJ5LmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJjZXB0b3IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyY2VwdG9yL2ludGVyY2VwdGFibGUtaHR0cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvamhpLWNvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmd1YWdlL2poaS1taXNzaW5nLXRyYW5zbGF0aW9uLmNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFuZ3VhZ2UvamhpLXRyYW5zbGF0ZS5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xhbmd1YWdlL2xhbmd1YWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpcGUvY2FwaXRhbGl6ZS5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlL2tleXMucGlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGlwZS9vcmRlci1ieS5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlL3B1cmUtZmlsdGVyLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpcGUvdHJ1bmNhdGUtY2hhcmFjdGVycy5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlL3RydW5jYXRlLXdvcmRzLnBpcGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvYWxlcnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9iYXNlNjQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9kYXRhLXV0aWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9kYXRlLXV0aWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9ldmVudC1tYW5hZ2VyLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvcGFnaW5hdGlvbi11dGlsLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvcGFyc2UtbGlua3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1J4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NvbmNhdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDd0M7QUFDQTtBQUczQztJQUdJLDBCQUFZLFlBQThCO1FBQ3RDLElBQUksQ0FBQyxjQUFjLGdCQUNaLElBQUksZ0VBQWUsRUFBRSxFQUNyQixZQUFZLENBQ2xCLENBQUM7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M0MsQ0FBQztZQUVGLElBQUksSUFBSSxHQUFRLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFakMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDOUIsQ0FBQztZQUVELElBQU0sSUFBSSxHQUFXLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25FLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUExQ1EsYUFBYTtRQUR6QixnRkFBVSxFQUFFOztPQUNBLGFBQWEsQ0EyQ3pCO0lBQUQsb0JBQUM7Q0FBQTtBQTNDeUI7Ozs7Ozs7QUN4QjFCLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSxnRCIsImZpbGUiOiJuZy1qaGlwc3Rlci51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIiksIHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpLCByZXF1aXJlKFwicnhqcy9PYnNlcnZhYmxlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpLCByZXF1aXJlKFwicnhqcy9SeFwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29ic2VydmFibGUvb2ZcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9jb25jYXRcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZVwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3NoYXJlXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdGFrZVwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvQXJyYXlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQGFuZ3VsYXIvY29yZVwiLCBcIkBhbmd1bGFyL2NvbW1vblwiLCBcIkBhbmd1bGFyL2Zvcm1zXCIsIFwiQGFuZ3VsYXIvaHR0cFwiLCBcInJ4anMvT2JzZXJ2YWJsZVwiLCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiLCBcInJ4anMvUnhcIiwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCIsIFwicnhqcy9hZGQvb3BlcmF0b3IvY29uY2F0XCIsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VcIiwgXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiLCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiLCBcInJ4anMvYWRkL29wZXJhdG9yL3Rha2VcIiwgXCJyeGpzL2FkZC9vcGVyYXRvci90b0FycmF5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nLWpoaXBzdGVyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKSwgcmVxdWlyZShcInJ4anMvT2JzZXJ2YWJsZVwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKSwgcmVxdWlyZShcInJ4anMvUnhcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL29mXCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvY29uY2F0XCIpLCByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiKSwgcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3Rha2VcIiksIHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b0FycmF5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZy1qaGlwc3RlclwiXSA9IGZhY3Rvcnkocm9vdFtcIkBhbmd1bGFyL2NvcmVcIl0sIHJvb3RbXCJAYW5ndWxhci9jb21tb25cIl0sIHJvb3RbXCJAYW5ndWxhci9mb3Jtc1wiXSwgcm9vdFtcIkBhbmd1bGFyL2h0dHBcIl0sIHJvb3RbXCJyeGpzL09ic2VydmFibGVcIl0sIHJvb3RbXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIl0sIHJvb3RbXCJyeGpzL1J4XCJdLCByb290W1wicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiXSwgcm9vdFtcInJ4anMvYWRkL29wZXJhdG9yL2NvbmNhdFwiXSwgcm9vdFtcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCJdLCByb290W1wicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIl0sIHJvb3RbXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIl0sIHJvb3RbXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCJdLCByb290W1wicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzIyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI1X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81NF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU1X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81N19fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU4X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82MF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NTg0YzVmZGZiZTI3NTAxZTZhOSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSmhpTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpQ29uZmlnU2VydmljZSB7XG4gICAgQ09ORklHX09QVElPTlM6IEpoaU1vZHVsZUNvbmZpZztcblxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZUNvbmZpZz86IEpoaU1vZHVsZUNvbmZpZykge1xuICAgICAgICB0aGlzLkNPTkZJR19PUFRJT05TID0ge1xuICAgICAgICAgICAgLi4ubmV3IEpoaU1vZHVsZUNvbmZpZygpLFxuICAgICAgICAgICAgLi4ubW9kdWxlQ29uZmlnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0Q29uZmlnKCk6IEpoaU1vZHVsZUNvbmZpZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkNPTkZJR19PUFRJT05TO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb25maWcuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBPcGFxdWVUb2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY29uY2F0XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zaGFyZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tZXJnZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90b0FycmF5XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTdG9yZSB9IGZyb20gXCIuL3RyYW5zbGF0ZS5zdG9yZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSBcIi4vdHJhbnNsYXRlLmxvYWRlclwiO1xuaW1wb3J0IHsgTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB9IGZyb20gXCIuL21pc3NpbmctdHJhbnNsYXRpb24taGFuZGxlclwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGFyc2VyIH0gZnJvbSBcIi4vdHJhbnNsYXRlLnBhcnNlclwiO1xuaW1wb3J0IHsgbWVyZ2VEZWVwLCBpc0RlZmluZWQgfSBmcm9tIFwiLi91dGlsXCI7XG5leHBvcnQgdmFyIFVTRV9TVE9SRSA9IG5ldyBPcGFxdWVUb2tlbignVVNFX1NUT1JFJyk7XG52YXIgVHJhbnNsYXRlU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RvcmUgYW4gaW5zdGFuY2Ugb2YgdGhlIHN0b3JlICh0aGF0IGlzIHN1cHBvc2VkIHRvIGJlIHVuaXF1ZSlcbiAgICAgKiBAcGFyYW0gY3VycmVudExvYWRlciBBbiBpbnN0YW5jZSBvZiB0aGUgbG9hZGVyIGN1cnJlbnRseSB1c2VkXG4gICAgICogQHBhcmFtIHBhcnNlciBBbiBpbnN0YW5jZSBvZiB0aGUgcGFyc2VyIGN1cnJlbnRseSB1c2VkXG4gICAgICogQHBhcmFtIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIgQSBoYW5kbGVyIGZvciBtaXNzaW5nIHRyYW5zbGF0aW9ucy5cbiAgICAgKiBAcGFyYW0gaXNvbGF0ZSB3aGV0aGVyIHRoaXMgc2VydmljZSBzaG91bGQgdXNlIHRoZSBzdG9yZSBvciBub3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVTZXJ2aWNlKHN0b3JlLCBjdXJyZW50TG9hZGVyLCBwYXJzZXIsIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIGlzb2xhdGUpIHtcbiAgICAgICAgaWYgKGlzb2xhdGUgPT09IHZvaWQgMCkgeyBpc29sYXRlID0gZmFsc2U7IH1cbiAgICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgICAgICB0aGlzLmN1cnJlbnRMb2FkZXIgPSBjdXJyZW50TG9hZGVyO1xuICAgICAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICAgICAgdGhpcy5taXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyID0gbWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcjtcbiAgICAgICAgdGhpcy5pc29sYXRlID0gaXNvbGF0ZTtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29uVHJhbnNsYXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuX29uTGFuZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fb25EZWZhdWx0TGFuZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5fbGFuZ3MgPSBbXTtcbiAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25zID0ge307XG4gICAgICAgIHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHMgPSB7fTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLCBcIm9uVHJhbnNsYXRpb25DaGFuZ2VcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byB0cmFuc2xhdGlvbiBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIG9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IFRyYW5zbGF0aW9uQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxUcmFuc2xhdGlvbkNoYW5nZUV2ZW50Pn1cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX29uVHJhbnNsYXRpb25DaGFuZ2UgOiB0aGlzLnN0b3JlLm9uVHJhbnNsYXRpb25DaGFuZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZSwgXCJvbkxhbmdDaGFuZ2VcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQW4gRXZlbnRFbWl0dGVyIHRvIGxpc3RlbiB0byBsYW5nIGNoYW5nZSBldmVudHNcbiAgICAgICAgICogb25MYW5nQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBMYW5nQ2hhbmdlRXZlbnQpID0+IHtcbiAgICAgICAgICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgICAgICAgKiB9KTtcbiAgICAgICAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxMYW5nQ2hhbmdlRXZlbnQ+fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fb25MYW5nQ2hhbmdlIDogdGhpcy5zdG9yZS5vbkxhbmdDaGFuZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZSwgXCJvbkRlZmF1bHRMYW5nQ2hhbmdlXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gZGVmYXVsdCBsYW5nIGNoYW5nZSBldmVudHNcbiAgICAgICAgICogb25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogRGVmYXVsdExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQ+fVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fb25EZWZhdWx0TGFuZ0NoYW5nZSA6IHRoaXMuc3RvcmUub25EZWZhdWx0TGFuZ0NoYW5nZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLCBcImRlZmF1bHRMYW5nXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IGxhbmcgdG8gZmFsbGJhY2sgd2hlbiB0cmFuc2xhdGlvbnMgYXJlIG1pc3Npbmcgb24gdGhlIGN1cnJlbnQgbGFuZ1xuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fZGVmYXVsdExhbmcgOiB0aGlzLnN0b3JlLmRlZmF1bHRMYW5nO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkZWZhdWx0TGFuZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RlZmF1bHRMYW5nID0gZGVmYXVsdExhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRlZmF1bHRMYW5nID0gZGVmYXVsdExhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZSwgXCJjdXJyZW50TGFuZ1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGFuZyBjdXJyZW50bHkgdXNlZFxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc29sYXRlID8gdGhpcy5fY3VycmVudExhbmcgOiB0aGlzLnN0b3JlLmN1cnJlbnRMYW5nO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChjdXJyZW50TGFuZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNvbGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRMYW5nID0gY3VycmVudExhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmN1cnJlbnRMYW5nID0gY3VycmVudExhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZSwgXCJsYW5nc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbiBhcnJheSBvZiBsYW5nc1xuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzb2xhdGUgPyB0aGlzLl9sYW5ncyA6IHRoaXMuc3RvcmUubGFuZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGxhbmdzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc29sYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFuZ3MgPSBsYW5ncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUubGFuZ3MgPSBsYW5ncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLCBcInRyYW5zbGF0aW9uc1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhIGxpc3Qgb2YgdHJhbnNsYXRpb25zIHBlciBsYW5nXG4gICAgICAgICAqIEB0eXBlIHt7fX1cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNvbGF0ZSA/IHRoaXMuX3RyYW5zbGF0aW9ucyA6IHRoaXMuc3RvcmUudHJhbnNsYXRpb25zO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzb2xhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50TGFuZyA9IHRyYW5zbGF0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUudHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkZWZhdWx0IGxhbmd1YWdlIHRvIHVzZSBhcyBhIGZhbGxiYWNrXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5zZXREZWZhdWx0TGFuZyA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChsYW5nID09PSB0aGlzLmRlZmF1bHRMYW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBlbmRpbmcgPSB0aGlzLnJldHJpZXZlVHJhbnNsYXRpb25zKGxhbmcpO1xuICAgICAgICBpZiAodHlwZW9mIHBlbmRpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIC8vIG9uIGluaXQgc2V0IHRoZSBkZWZhdWx0TGFuZyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRMYW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0TGFuZyA9IGxhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZW5kaW5nLnRha2UoMSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VEZWZhdWx0TGFuZyhsYW5nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZWZhdWx0TGFuZyhsYW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZGVmYXVsdCBsYW5ndWFnZSB1c2VkXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuZ2V0RGVmYXVsdExhbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRMYW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgbGFuZyBjdXJyZW50bHkgdXNlZFxuICAgICAqIEBwYXJhbSBsYW5nXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8Kj59XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHBlbmRpbmcgPSB0aGlzLnJldHJpZXZlVHJhbnNsYXRpb25zKGxhbmcpO1xuICAgICAgICBpZiAodHlwZW9mIHBlbmRpbmcgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIC8vIG9uIGluaXQgc2V0IHRoZSBjdXJyZW50TGFuZyBpbW1lZGlhdGVseVxuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRMYW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGFuZyA9IGxhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZW5kaW5nLnRha2UoMSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VMYW5nKGxhbmcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcGVuZGluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTGFuZyhsYW5nKTtcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHRoaXMudHJhbnNsYXRpb25zW2xhbmddKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBnaXZlbiB0cmFuc2xhdGlvbnNcbiAgICAgKiBAcGFyYW0gbGFuZ1xuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPCo+fVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnJldHJpZXZlVHJhbnNsYXRpb25zID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdmFyIHBlbmRpbmc7XG4gICAgICAgIC8vIGlmIHRoaXMgbGFuZ3VhZ2UgaXMgdW5hdmFpbGFibGUsIGFzayBmb3IgaXRcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXSA9IHRoaXMuX3RyYW5zbGF0aW9uUmVxdWVzdHNbbGFuZ10gfHwgdGhpcy5nZXRUcmFuc2xhdGlvbihsYW5nKTtcbiAgICAgICAgICAgIHBlbmRpbmcgPSB0aGlzLl90cmFuc2xhdGlvblJlcXVlc3RzW2xhbmddO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwZW5kaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBvYmplY3Qgb2YgdHJhbnNsYXRpb25zIGZvciBhIGdpdmVuIGxhbmd1YWdlIHdpdGggdGhlIGN1cnJlbnQgbG9hZGVyXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTwqPn1cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXRUcmFuc2xhdGlvbiA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMubG9hZGluZ1RyYW5zbGF0aW9ucyA9IHRoaXMuY3VycmVudExvYWRlci5nZXRUcmFuc2xhdGlvbihsYW5nKS5zaGFyZSgpO1xuICAgICAgICB0aGlzLmxvYWRpbmdUcmFuc2xhdGlvbnMudGFrZSgxKVxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBfdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSByZXM7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVMYW5ncygpO1xuICAgICAgICAgICAgX3RoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBfdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2FkaW5nVHJhbnNsYXRpb25zO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogTWFudWFsbHkgc2V0cyBhbiBvYmplY3Qgb2YgdHJhbnNsYXRpb25zIGZvciBhIGdpdmVuIGxhbmd1YWdlXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKiBAcGFyYW0gdHJhbnNsYXRpb25zXG4gICAgICogQHBhcmFtIHNob3VsZE1lcmdlXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuc2V0VHJhbnNsYXRpb24gPSBmdW5jdGlvbiAobGFuZywgdHJhbnNsYXRpb25zLCBzaG91bGRNZXJnZSkge1xuICAgICAgICBpZiAoc2hvdWxkTWVyZ2UgPT09IHZvaWQgMCkgeyBzaG91bGRNZXJnZSA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChzaG91bGRNZXJnZSAmJiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSkge1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSBtZXJnZURlZXAodGhpcy50cmFuc2xhdGlvbnNbbGFuZ10sIHRyYW5zbGF0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSA9IHRyYW5zbGF0aW9ucztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUxhbmdzKCk7XG4gICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZS5lbWl0KHsgbGFuZzogbGFuZywgdHJhbnNsYXRpb25zOiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IGF2YWlsYWJsZSBsYW5nc1xuICAgICAqIEByZXR1cm5zIHthbnl9XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuZ2V0TGFuZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhbmdzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGxhbmdzXG4gICAgICogQWRkIGF2YWlsYWJsZSBsYW5nc1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmFkZExhbmdzID0gZnVuY3Rpb24gKGxhbmdzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGxhbmdzLmZvckVhY2goZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5sYW5ncy5pbmRleE9mKGxhbmcpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmxhbmdzLnB1c2gobGFuZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBsYW5nc1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZUxhbmdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkZExhbmdzKE9iamVjdC5rZXlzKHRoaXMudHJhbnNsYXRpb25zKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwYXJzZWQgcmVzdWx0IG9mIHRoZSB0cmFuc2xhdGlvbnNcbiAgICAgKiBAcGFyYW0gdHJhbnNsYXRpb25zXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSBpbnRlcnBvbGF0ZVBhcmFtc1xuICAgICAqIEByZXR1cm5zIHthbnl9XG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuZ2V0UGFyc2VkUmVzdWx0ID0gZnVuY3Rpb24gKHRyYW5zbGF0aW9ucywga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykge1xuICAgICAgICB2YXIgcmVzO1xuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fSwgb2JzZXJ2YWJsZXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwga2V5XzEgPSBrZXk7IF9pIDwga2V5XzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBrZXlfMVtfaV07XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tdID0gdGhpcy5nZXRQYXJzZWRSZXN1bHQodHJhbnNsYXRpb25zLCBrLCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHRba10uc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2YWJsZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvYnNlcnZhYmxlcykge1xuICAgICAgICAgICAgICAgIHZhciBtZXJnZWRPYnMgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBrZXlfMiA9IGtleTsgX2EgPCBrZXlfMi5sZW5ndGg7IF9hKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBrZXlfMltfYV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBvYnMgPSB0eXBlb2YgcmVzdWx0W2tdLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiID8gcmVzdWx0W2tdIDogT2JzZXJ2YWJsZS5vZihyZXN1bHRba10pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lcmdlZE9icyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VkT2JzID0gb2JzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VkT2JzID0gbWVyZ2VkT2JzLm1lcmdlKG9icyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lcmdlZE9icy50b0FycmF5KCkubWFwKGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpba2V5W2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICAgIHJlcyA9IHRoaXMucGFyc2VyLmludGVycG9sYXRlKHRoaXMucGFyc2VyLmdldFZhbHVlKHRyYW5zbGF0aW9ucywga2V5KSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzID09PSBcInVuZGVmaW5lZFwiICYmIHRoaXMuZGVmYXVsdExhbmcgJiYgdGhpcy5kZWZhdWx0TGFuZyAhPT0gdGhpcy5jdXJyZW50TGFuZykge1xuICAgICAgICAgICAgcmVzID0gdGhpcy5wYXJzZXIuaW50ZXJwb2xhdGUodGhpcy5wYXJzZXIuZ2V0VmFsdWUodGhpcy50cmFuc2xhdGlvbnNbdGhpcy5kZWZhdWx0TGFuZ10sIGtleSksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHsga2V5OiBrZXksIHRyYW5zbGF0ZVNlcnZpY2U6IHRoaXMgfTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW50ZXJwb2xhdGVQYXJhbXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmludGVycG9sYXRlUGFyYW1zID0gaW50ZXJwb2xhdGVQYXJhbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXMgPSB0aGlzLm1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIuaGFuZGxlKHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiByZXMgIT09IFwidW5kZWZpbmVkXCIgPyByZXMgOiBrZXk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB0cmFuc2xhdGVkIHZhbHVlIG9mIGEga2V5IChvciBhbiBhcnJheSBvZiBrZXlzKVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gaW50ZXJwb2xhdGVQYXJhbXNcbiAgICAgKiBAcmV0dXJucyB7YW55fSB0aGUgdHJhbnNsYXRlZCBrZXksIG9yIGFuIG9iamVjdCBvZiB0cmFuc2xhdGVkIGtleXNcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWlzRGVmaW5lZChrZXkpIHx8ICFrZXkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbWV0ZXIgXFxcImtleVxcXCIgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgYXJlIGxvYWRpbmcgYSBuZXcgdHJhbnNsYXRpb24gdG8gdXNlXG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb25Db21wbGV0ZSA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2FkaW5nVHJhbnNsYXRpb25zLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF90aGlzLmdldFBhcnNlZFJlc3VsdChyZXMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN1YnNjcmliZShvbkNvbXBsZXRlLCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGUocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG9uRXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5nZXRQYXJzZWRSZXN1bHQodGhpcy50cmFuc2xhdGlvbnNbdGhpcy5jdXJyZW50TGFuZ10sIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmVhbSBvZiB0cmFuc2xhdGVkIHZhbHVlcyBvZiBhIGtleSAob3IgYW4gYXJyYXkgb2Yga2V5cykgd2hpY2ggdXBkYXRlc1xuICAgICAqIHdoZW5ldmVyIHRoZSBsYW5ndWFnZSBjaGFuZ2VzLlxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gaW50ZXJwb2xhdGVQYXJhbXNcbiAgICAgKiBAcmV0dXJucyB7YW55fSBBIHN0cmVhbSBvZiB0aGUgdHJhbnNsYXRlZCBrZXksIG9yIGFuIG9iamVjdCBvZiB0cmFuc2xhdGVkIGtleXNcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5zdHJlYW0gPSBmdW5jdGlvbiAoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWlzRGVmaW5lZChrZXkpIHx8ICFrZXkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbWV0ZXIgXFxcImtleVxcXCIgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICAgIC5nZXQoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcylcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5vbkxhbmdDaGFuZ2Uuc3dpdGNoTWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHJlcyA9IF90aGlzLmdldFBhcnNlZFJlc3VsdChldmVudC50cmFuc2xhdGlvbnMsIGtleSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRyYW5zbGF0aW9uIGluc3RhbnRseSBmcm9tIHRoZSBpbnRlcm5hbCBzdGF0ZSBvZiBsb2FkZWQgdHJhbnNsYXRpb24uXG4gICAgICogQWxsIHJ1bGVzIHJlZ2FyZGluZyB0aGUgY3VycmVudCBsYW5ndWFnZSwgdGhlIHByZWZlcnJlZCBsYW5ndWFnZSBvZiBldmVuIGZhbGxiYWNrIGxhbmd1YWdlcyB3aWxsIGJlIHVzZWQgZXhjZXB0IGFueSBwcm9taXNlIGhhbmRsaW5nLlxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gaW50ZXJwb2xhdGVQYXJhbXNcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmluc3RhbnQgPSBmdW5jdGlvbiAoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcykge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZChrZXkpIHx8ICFrZXkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbWV0ZXIgXFxcImtleVxcXCIgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcyA9IHRoaXMuZ2V0UGFyc2VkUmVzdWx0KHRoaXMudHJhbnNsYXRpb25zW3RoaXMuY3VycmVudExhbmddLCBrZXksIGludGVycG9sYXRlUGFyYW1zKTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqXzEgPSB7fTtcbiAgICAgICAgICAgICAgICBrZXkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIG9ial8xW2tleVtpbmRleF1dID0ga2V5W2luZGV4XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqXzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdHJhbnNsYXRlZCB2YWx1ZSBvZiBhIGtleVxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0gbGFuZ1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBsYW5nKSB7XG4gICAgICAgIGlmIChsYW5nID09PSB2b2lkIDApIHsgbGFuZyA9IHRoaXMuY3VycmVudExhbmc7IH1cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ11ba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhbmdzKCk7XG4gICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZS5lbWl0KHsgbGFuZzogbGFuZywgdHJhbnNsYXRpb25zOiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIGN1cnJlbnQgbGFuZ1xuICAgICAqIEBwYXJhbSBsYW5nXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuY2hhbmdlTGFuZyA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHRoaXMuY3VycmVudExhbmcgPSBsYW5nO1xuICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZS5lbWl0KHsgbGFuZzogbGFuZywgdHJhbnNsYXRpb25zOiB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXSB9KTtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gZGVmYXVsdCBsYW5nLCB1c2UgdGhlIG9uZSB0aGF0IHdlIGp1c3Qgc2V0XG4gICAgICAgIGlmICghdGhpcy5kZWZhdWx0TGFuZykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZWZhdWx0TGFuZyhsYW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgZGVmYXVsdCBsYW5nXG4gICAgICogQHBhcmFtIGxhbmdcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5jaGFuZ2VEZWZhdWx0TGFuZyA9IGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdExhbmcgPSBsYW5nO1xuICAgICAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UuZW1pdCh7IGxhbmc6IGxhbmcsIHRyYW5zbGF0aW9uczogdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBbGxvd3MgdG8gcmVsb2FkIHRoZSBsYW5nIGZpbGUgZnJvbSB0aGUgZmlsZVxuICAgICAqIEBwYXJhbSBsYW5nXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVTZXJ2aWNlLnByb3RvdHlwZS5yZWxvYWRMYW5nID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdGhpcy5yZXNldExhbmcobGFuZyk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRyYW5zbGF0aW9uKGxhbmcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVsZXRlcyBpbm5lciB0cmFuc2xhdGlvblxuICAgICAqIEBwYXJhbSBsYW5nXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUucmVzZXRMYW5nID0gZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNsYXRpb25SZXF1ZXN0c1tsYW5nXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYW5ndWFnZSBjb2RlIG5hbWUgZnJvbSB0aGUgYnJvd3NlciwgZS5nLiBcImRlXCJcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIFRyYW5zbGF0ZVNlcnZpY2UucHJvdG90eXBlLmdldEJyb3dzZXJMYW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBicm93c2VyTGFuZyA9IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXNbMF0gOiBudWxsO1xuICAgICAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci5icm93c2VyTGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2U7XG4gICAgICAgIGlmIChicm93c2VyTGFuZy5pbmRleE9mKCctJykgIT09IC0xKSB7XG4gICAgICAgICAgICBicm93c2VyTGFuZyA9IGJyb3dzZXJMYW5nLnNwbGl0KCctJylbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJyb3dzZXJMYW5nLmluZGV4T2YoJ18nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGJyb3dzZXJMYW5nID0gYnJvd3Nlckxhbmcuc3BsaXQoJ18nKVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnJvd3Nlckxhbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdWx0dXJlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZGUtREVcIlxuICAgICAqXG4gICAgICogQHJldHVybnMgc3RyaW5nXG4gICAgICovXG4gICAgVHJhbnNsYXRlU2VydmljZS5wcm90b3R5cGUuZ2V0QnJvd3NlckN1bHR1cmVMYW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBicm93c2VyQ3VsdHVyZUxhbmcgPSB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlcyA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdIDogbnVsbDtcbiAgICAgICAgYnJvd3NlckN1bHR1cmVMYW5nID0gYnJvd3NlckN1bHR1cmVMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci5icm93c2VyTGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2U7XG4gICAgICAgIHJldHVybiBicm93c2VyQ3VsdHVyZUxhbmc7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNsYXRlU2VydmljZTtcbn0oKSk7XG5leHBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH07XG5UcmFuc2xhdGVTZXJ2aWNlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5UcmFuc2xhdGVTZXJ2aWNlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogVHJhbnNsYXRlU3RvcmUsIH0sXG4gICAgeyB0eXBlOiBUcmFuc2xhdGVMb2FkZXIsIH0sXG4gICAgeyB0eXBlOiBUcmFuc2xhdGVQYXJzZXIsIH0sXG4gICAgeyB0eXBlOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCB9LFxuICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtVU0VfU1RPUkUsXSB9LF0gfSxcbl07IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLnNlcnZpY2UuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qKlxuICogQG5hbWUgZXF1YWxzXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBEZXRlcm1pbmVzIGlmIHR3byBvYmplY3RzIG9yIHR3byB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogVHdvIG9iamVjdHMgb3IgdmFsdWVzIGFyZSBjb25zaWRlcmVkIGVxdWl2YWxlbnQgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZTpcbiAqXG4gKiAqIEJvdGggb2JqZWN0cyBvciB2YWx1ZXMgcGFzcyBgPT09YCBjb21wYXJpc29uLlxuICogKiBCb3RoIG9iamVjdHMgb3IgdmFsdWVzIGFyZSBvZiB0aGUgc2FtZSB0eXBlIGFuZCBhbGwgb2YgdGhlaXIgcHJvcGVydGllcyBhcmUgZXF1YWwgYnlcbiAqICAgY29tcGFyaW5nIHRoZW0gd2l0aCBgZXF1YWxzYC5cbiAqXG4gKiBAcGFyYW0geyp9IG8xIE9iamVjdCBvciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvMiBPYmplY3Qgb3IgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIGFyZ3VtZW50cyBhcmUgZXF1YWwuXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlICovIGV4cG9ydCBmdW5jdGlvbiBlcXVhbHMobzEsIG8yKSB7XG4gICAgaWYgKG8xID09PSBvMilcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKG8xID09PSBudWxsIHx8IG8yID09PSBudWxsKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG8xICE9PSBvMSAmJiBvMiAhPT0gbzIpXG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBOYU4gPT09IE5hTlxuICAgIHZhciB0MSA9IHR5cGVvZiBvMSwgdDIgPSB0eXBlb2YgbzIsIGxlbmd0aCwga2V5LCBrZXlTZXQ7XG4gICAgaWYgKHQxID09IHQyICYmIHQxID09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG8xKSkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KG8yKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoKGxlbmd0aCA9IG8xLmxlbmd0aCkgPT0gbzIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChrZXkgPSAwOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXF1YWxzKG8xW2tleV0sIG8yW2tleV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG8yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVNldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvMSkge1xuICAgICAgICAgICAgICAgIGlmICghZXF1YWxzKG8xW2tleV0sIG8yW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAga2V5U2V0W2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChrZXkgaW4gbzIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4ga2V5U2V0KSAmJiB0eXBlb2YgbzJba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8qIHRzbGludDplbmFibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gICAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWVwKHRhcmdldCwgc291cmNlKSB7XG4gICAgdGFyZ2V0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0YXJnZXQpKTtcbiAgICBzb3VyY2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNvdXJjZSkpO1xuICAgIHZhciBvdXRwdXQgPSBPYmplY3QuYXNzaWduKHt9LCB0YXJnZXQpO1xuICAgIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwgKF9hID0ge30sIF9hW2tleV0gPSBzb3VyY2Vba2V5XSwgX2EpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gbWVyZ2VEZWVwKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIChfYiA9IHt9LCBfYltrZXldID0gc291cmNlW2tleV0sIF9iKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy91dGlsLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlRmFrZUxvYWRlciB9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUubG9hZGVyXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB9IGZyb20gXCIuL3NyYy9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXJcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVBhcnNlciwgVHJhbnNsYXRlRGVmYXVsdFBhcnNlciB9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUucGFyc2VyXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVEaXJlY3RpdmUgfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gXCIuL3NyYy90cmFuc2xhdGUucGlwZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU3RvcmUgfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnN0b3JlXCI7XG5pbXBvcnQgeyBVU0VfU1RPUkUgfSBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnNlcnZpY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUubG9hZGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLnNlcnZpY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy90cmFuc2xhdGUucGFyc2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zcmMvdHJhbnNsYXRlLmRpcmVjdGl2ZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL3RyYW5zbGF0ZS5waXBlXCI7XG52YXIgVHJhbnNsYXRlTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVNb2R1bGUoKSB7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHJvb3QgbW9kdWxlIHRvIHByb3ZpZGUgdGhlIFRyYW5zbGF0ZVNlcnZpY2VcbiAgICAgKiBAcGFyYW0ge1RyYW5zbGF0ZU1vZHVsZUNvbmZpZ30gY29uZmlnXG4gICAgICogQHJldHVybnMge01vZHVsZVdpdGhQcm92aWRlcnN9XG4gICAgICovXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFRyYW5zbGF0ZU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIGNvbmZpZy5sb2FkZXIgfHwgeyBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVGYWtlTG9hZGVyIH0sXG4gICAgICAgICAgICAgICAgY29uZmlnLnBhcnNlciB8fCB7IHByb3ZpZGU6IFRyYW5zbGF0ZVBhcnNlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIgfSxcbiAgICAgICAgICAgICAgICBjb25maWcubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB8fCB7IHByb3ZpZGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIHVzZUNsYXNzOiBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB9LFxuICAgICAgICAgICAgICAgIFRyYW5zbGF0ZVN0b3JlLFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogVVNFX1NUT1JFLCB1c2VWYWx1ZTogY29uZmlnLmlzb2xhdGUgfSxcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGVTZXJ2aWNlXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgaW4geW91ciBvdGhlciAobm9uIHJvb3QpIG1vZHVsZXMgdG8gaW1wb3J0IHRoZSBkaXJlY3RpdmUvcGlwZVxuICAgICAqIEBwYXJhbSB7VHJhbnNsYXRlTW9kdWxlQ29uZmlnfSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7TW9kdWxlV2l0aFByb3ZpZGVyc31cbiAgICAgKi9cbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yQ2hpbGQgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFRyYW5zbGF0ZU1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIGNvbmZpZy5sb2FkZXIgfHwgeyBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsIHVzZUNsYXNzOiBUcmFuc2xhdGVGYWtlTG9hZGVyIH0sXG4gICAgICAgICAgICAgICAgY29uZmlnLnBhcnNlciB8fCB7IHByb3ZpZGU6IFRyYW5zbGF0ZVBhcnNlciwgdXNlQ2xhc3M6IFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIgfSxcbiAgICAgICAgICAgICAgICBjb25maWcubWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB8fCB7IHByb3ZpZGU6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsIHVzZUNsYXNzOiBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogVVNFX1NUT1JFLCB1c2VWYWx1ZTogY29uZmlnLmlzb2xhdGUgfSxcbiAgICAgICAgICAgICAgICBUcmFuc2xhdGVTZXJ2aWNlXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNsYXRlTW9kdWxlO1xufSgpKTtcbmV4cG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9O1xuVHJhbnNsYXRlTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgVHJhbnNsYXRlUGlwZSxcbiAgICAgICAgICAgICAgICAgICAgVHJhbnNsYXRlRGlyZWN0aXZlXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiBbXG4gICAgICAgICAgICAgICAgICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgICAgICAgICAgICAgICAgIFRyYW5zbGF0ZURpcmVjdGl2ZVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuVHJhbnNsYXRlTW9kdWxlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQG5neC10cmFuc2xhdGUvY29yZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbnZhciBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyKCkge1xuICAgIH1cbiAgICByZXR1cm4gTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcjtcbn0oKSk7XG5leHBvcnQgeyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIH07XG4vKipcbiAqIFRoaXMgaGFuZGxlciBpcyBqdXN0IGEgcGxhY2Vob2xkZXIgdGhhdCBkb2VzIG5vdGhpbmcsIGluIGNhc2UgeW91IGRvbid0IG5lZWQgYSBtaXNzaW5nIHRyYW5zbGF0aW9uIGhhbmRsZXIgYXQgYWxsXG4gKi9cbnZhciBGYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIoKSB7XG4gICAgfVxuICAgIEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMua2V5O1xuICAgIH07XG4gICAgcmV0dXJuIEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyO1xufSgpKTtcbmV4cG9ydCB7IEZha2VNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIH07XG5GYWtlTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlci5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuRmFrZU1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy9taXNzaW5nLXRyYW5zbGF0aW9uLWhhbmRsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG52YXIgVHJhbnNsYXRlTG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVMb2FkZXIoKSB7XG4gICAgfVxuICAgIHJldHVybiBUcmFuc2xhdGVMb2FkZXI7XG59KCkpO1xuZXhwb3J0IHsgVHJhbnNsYXRlTG9hZGVyIH07XG4vKipcbiAqIFRoaXMgbG9hZGVyIGlzIGp1c3QgYSBwbGFjZWhvbGRlciB0aGF0IGRvZXMgbm90aGluZywgaW4gY2FzZSB5b3UgZG9uJ3QgbmVlZCBhIGxvYWRlciBhdCBhbGxcbiAqL1xudmFyIFRyYW5zbGF0ZUZha2VMb2FkZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUcmFuc2xhdGVGYWtlTG9hZGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZUZha2VMb2FkZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgVHJhbnNsYXRlRmFrZUxvYWRlci5wcm90b3R5cGUuZ2V0VHJhbnNsYXRpb24gPSBmdW5jdGlvbiAobGFuZykge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih7fSk7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNsYXRlRmFrZUxvYWRlcjtcbn0oVHJhbnNsYXRlTG9hZGVyKSk7XG5leHBvcnQgeyBUcmFuc2xhdGVGYWtlTG9hZGVyIH07XG5UcmFuc2xhdGVGYWtlTG9hZGVyLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5UcmFuc2xhdGVGYWtlTG9hZGVyLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vQG5neC10cmFuc2xhdGUvY29yZS9zcmMvdHJhbnNsYXRlLmxvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNEZWZpbmVkIH0gZnJvbSBcIi4vdXRpbFwiO1xudmFyIFRyYW5zbGF0ZVBhcnNlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJhbnNsYXRlUGFyc2VyKCkge1xuICAgIH1cbiAgICByZXR1cm4gVHJhbnNsYXRlUGFyc2VyO1xufSgpKTtcbmV4cG9ydCB7IFRyYW5zbGF0ZVBhcnNlciB9O1xudmFyIFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUcmFuc2xhdGVEZWZhdWx0UGFyc2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50ZW1wbGF0ZU1hdGNoZXIgPSAve3tcXHM/KFtee31cXHNdKilcXHM/fX0vZztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyLnByb3RvdHlwZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uIChleHByLCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBleHByICE9PSAnc3RyaW5nJyB8fCAhcGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwci5yZXBsYWNlKHRoaXMudGVtcGxhdGVNYXRjaGVyLCBmdW5jdGlvbiAoc3Vic3RyaW5nLCBiKSB7XG4gICAgICAgICAgICB2YXIgciA9IF90aGlzLmdldFZhbHVlKHBhcmFtcywgYik7XG4gICAgICAgICAgICByZXR1cm4gaXNEZWZpbmVkKHIpID8gciA6IHN1YnN0cmluZztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyLnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgICAgICB2YXIga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAga2V5ICs9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChpc0RlZmluZWQodGFyZ2V0KSAmJiBpc0RlZmluZWQodGFyZ2V0W2tleV0pICYmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICdvYmplY3QnIHx8ICFrZXlzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGtleSArPSAnLic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGtleXMubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc2xhdGVEZWZhdWx0UGFyc2VyO1xufShUcmFuc2xhdGVQYXJzZXIpKTtcbmV4cG9ydCB7IFRyYW5zbGF0ZURlZmF1bHRQYXJzZXIgfTtcblRyYW5zbGF0ZURlZmF1bHRQYXJzZXIuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cblRyYW5zbGF0ZURlZmF1bHRQYXJzZXIuY3RvclBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy90cmFuc2xhdGUucGFyc2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBlcXVhbHMsIGlzRGVmaW5lZCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG52YXIgVHJhbnNsYXRlRGlyZWN0aXZlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVEaXJlY3RpdmUodHJhbnNsYXRlU2VydmljZSwgZWxlbWVudCwgX3JlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UgPSB0cmFuc2xhdGVTZXJ2aWNlO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLl9yZWYgPSBfcmVmO1xuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb25UcmFuc2xhdGlvbkNoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgdHJhbnNsYXRpb25zIG9mIHRoZSBjdXJyZW50IGxhbmcgY2hhbmdlXG4gICAgICAgIGlmICghdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlU3ViKSB7XG4gICAgICAgICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2VTdWIgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25UcmFuc2xhdGlvbkNoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmxhbmcgPT09IF90aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tOb2Rlcyh0cnVlLCBldmVudC50cmFuc2xhdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBvbkxhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGxhbmd1YWdlIGNoYW5nZXNcbiAgICAgICAgaWYgKCF0aGlzLm9uTGFuZ0NoYW5nZVN1Yikge1xuICAgICAgICAgICAgdGhpcy5vbkxhbmdDaGFuZ2VTdWIgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGVja05vZGVzKHRydWUsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gb25EZWZhdWx0TGFuZ0NoYW5nZSBldmVudCwgaW4gY2FzZSB0aGUgZGVmYXVsdCBsYW5ndWFnZSBjaGFuZ2VzXG4gICAgICAgIGlmICghdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViKSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2VTdWIgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tOb2Rlcyh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmFuc2xhdGVEaXJlY3RpdmUucHJvdG90eXBlLCBcInRyYW5zbGF0ZVwiLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tOb2RlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZSwgXCJ0cmFuc2xhdGVQYXJhbXNcIiwge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmICghZXF1YWxzKHRoaXMuY3VycmVudFBhcmFtcywgcGFyYW1zKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrTm9kZXModHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm90b3R5cGUubmdBZnRlclZpZXdDaGVja2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoZWNrTm9kZXMoKTtcbiAgICB9O1xuICAgIFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm90b3R5cGUuY2hlY2tOb2RlcyA9IGZ1bmN0aW9uIChmb3JjZVVwZGF0ZSwgdHJhbnNsYXRpb25zKSB7XG4gICAgICAgIGlmIChmb3JjZVVwZGF0ZSA9PT0gdm9pZCAwKSB7IGZvcmNlVXBkYXRlID0gZmFsc2U7IH1cbiAgICAgICAgdmFyIG5vZGVzID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2RlcztcbiAgICAgICAgLy8gaWYgdGhlIGVsZW1lbnQgaXMgZW1wdHlcbiAgICAgICAgaWYgKCFub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIHdlIGFkZCB0aGUga2V5IGFzIGNvbnRlbnRcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5rZXkpO1xuICAgICAgICAgICAgbm9kZXMgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMua2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubGFzdEtleSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KG5vZGUpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSB3YW50IHRvIHVzZSB0aGUgY29udGVudCBhcyBhIGtleSwgbm90IHRoZSB0cmFuc2xhdGlvbiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT09IG5vZGUuY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY29udGVudCB3YXMgY2hhbmdlZCBmcm9tIHRoZSB1c2VyLCB3ZSdsbCB1c2UgaXQgYXMgYSByZWZlcmVuY2UgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5vcmlnaW5hbENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLm9yaWdpbmFsQ29udGVudCAmJiBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubGFzdEtleSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGN1cnJlbnQgY29udGVudCBpcyB0aGUgdHJhbnNsYXRpb24sIG5vdCB0aGUga2V5LCB1c2UgdGhlIGxhc3QgcmVhbCBjb250ZW50IGFzIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IG5vZGUub3JpZ2luYWxDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKGtleSwgbm9kZSwgdHJhbnNsYXRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZS51cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIG5vZGUsIHRyYW5zbGF0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAobm9kZS5sYXN0S2V5ID09PSBrZXkgJiYgdGhpcy5sYXN0UGFyYW1zID09PSB0aGlzLmN1cnJlbnRQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxhc3RQYXJhbXMgPSB0aGlzLmN1cnJlbnRQYXJhbXM7XG4gICAgICAgICAgICB2YXIgb25UcmFuc2xhdGlvbiA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sYXN0S2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUub3JpZ2luYWxDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUub3JpZ2luYWxDb250ZW50ID0gX3RoaXMuZ2V0Q29udGVudChub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbm9kZS5jdXJyZW50VmFsdWUgPSBpc0RlZmluZWQocmVzKSA/IHJlcyA6IChub2RlLm9yaWdpbmFsQ29udGVudCB8fCBrZXkpO1xuICAgICAgICAgICAgICAgIC8vIHdlIHJlcGxhY2UgaW4gdGhlIG9yaWdpbmFsIGNvbnRlbnQgdG8gcHJlc2VydmUgc3BhY2VzIHRoYXQgd2UgbWlnaHQgaGF2ZSB0cmltbWVkXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0Q29udGVudChub2RlLCBfdGhpcy5rZXkgPyBub2RlLmN1cnJlbnRWYWx1ZSA6IG5vZGUub3JpZ2luYWxDb250ZW50LnJlcGxhY2Uoa2V5LCBub2RlLmN1cnJlbnRWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGlzRGVmaW5lZCh0cmFuc2xhdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRQYXJzZWRSZXN1bHQodHJhbnNsYXRpb25zLCBrZXksIHRoaXMuY3VycmVudFBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXMuc3Vic2NyaWJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN1YnNjcmliZShvblRyYW5zbGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVHJhbnNsYXRpb24ocmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0KGtleSwgdGhpcy5jdXJyZW50UGFyYW1zKS5zdWJzY3JpYmUob25UcmFuc2xhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYW5zbGF0ZURpcmVjdGl2ZS5wcm90b3R5cGUuZ2V0Q29udGVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiBpc0RlZmluZWQobm9kZS50ZXh0Q29udGVudCkgPyBub2RlLnRleHRDb250ZW50IDogbm9kZS5kYXRhO1xuICAgIH07XG4gICAgVHJhbnNsYXRlRGlyZWN0aXZlLnByb3RvdHlwZS5zZXRDb250ZW50ID0gZnVuY3Rpb24gKG5vZGUsIGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGlzRGVmaW5lZChub2RlLnRleHRDb250ZW50KSkge1xuICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBjb250ZW50O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc2xhdGVEaXJlY3RpdmUucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vbkxhbmdDaGFuZ2VTdWIpIHtcbiAgICAgICAgICAgIHRoaXMub25MYW5nQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZVN1Yikge1xuICAgICAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZVN1Yikge1xuICAgICAgICAgICAgdGhpcy5vblRyYW5zbGF0aW9uQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBUcmFuc2xhdGVEaXJlY3RpdmU7XG59KCkpO1xuZXhwb3J0IHsgVHJhbnNsYXRlRGlyZWN0aXZlIH07XG5UcmFuc2xhdGVEaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1t0cmFuc2xhdGVdLFtuZ3gtdHJhbnNsYXRlXSdcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuVHJhbnNsYXRlRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogVHJhbnNsYXRlU2VydmljZSwgfSxcbiAgICB7IHR5cGU6IEVsZW1lbnRSZWYsIH0sXG4gICAgeyB0eXBlOiBDaGFuZ2VEZXRlY3RvclJlZiwgfSxcbl07IH07XG5UcmFuc2xhdGVEaXJlY3RpdmUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ3RyYW5zbGF0ZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAndHJhbnNsYXRlUGFyYW1zJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy90cmFuc2xhdGUuZGlyZWN0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFBpcGUsIEluamVjdGFibGUsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBlcXVhbHMsIGlzRGVmaW5lZCB9IGZyb20gJy4vdXRpbCc7XG52YXIgVHJhbnNsYXRlUGlwZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJhbnNsYXRlUGlwZSh0cmFuc2xhdGUsIF9yZWYpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUgPSB0cmFuc2xhdGU7XG4gICAgICAgIHRoaXMuX3JlZiA9IF9yZWY7XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB9XG4gICAgVHJhbnNsYXRlUGlwZS5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBpbnRlcnBvbGF0ZVBhcmFtcywgdHJhbnNsYXRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBvblRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgX3RoaXMudmFsdWUgPSByZXMgIT09IHVuZGVmaW5lZCA/IHJlcyA6IGtleTtcbiAgICAgICAgICAgIF90aGlzLmxhc3RLZXkgPSBrZXk7XG4gICAgICAgICAgICBfdGhpcy5fcmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgICB2YXIgcmVzID0gdGhpcy50cmFuc2xhdGUuZ2V0UGFyc2VkUmVzdWx0KHRyYW5zbGF0aW9ucywga2V5LCBpbnRlcnBvbGF0ZVBhcmFtcyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5zdWJzY3JpYmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXMuc3Vic2NyaWJlKG9uVHJhbnNsYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb25UcmFuc2xhdGlvbihyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNsYXRlLmdldChrZXksIGludGVycG9sYXRlUGFyYW1zKS5zdWJzY3JpYmUob25UcmFuc2xhdGlvbik7XG4gICAgfTtcbiAgICBUcmFuc2xhdGVQaXBlLnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFxdWVyeSB8fCBxdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBxdWVyeTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB3ZSBhc2sgYW5vdGhlciB0aW1lIGZvciB0aGUgc2FtZSBrZXksIHJldHVybiB0aGUgbGFzdCB2YWx1ZVxuICAgICAgICBpZiAoZXF1YWxzKHF1ZXJ5LCB0aGlzLmxhc3RLZXkpICYmIGVxdWFscyhhcmdzLCB0aGlzLmxhc3RQYXJhbXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW50ZXJwb2xhdGVQYXJhbXM7XG4gICAgICAgIGlmIChpc0RlZmluZWQoYXJnc1swXSkgJiYgYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3N0cmluZycgJiYgYXJnc1swXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBhY2NlcHQgb2JqZWN0cyB3cml0dGVuIGluIHRoZSB0ZW1wbGF0ZSBzdWNoIGFzIHtuOjF9LCB7J24nOjF9LCB7bjondid9XG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgd2h5IHdlIG1pZ2h0IG5lZWQgdG8gY2hhbmdlIGl0IHRvIHJlYWwgSlNPTiBvYmplY3RzIHN1Y2ggYXMge1wiblwiOjF9IG9yIHtcIm5cIjpcInZcIn1cbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRBcmdzID0gYXJnc1swXVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKFxcJyk/KFthLXpBLVowLTlfXSspKFxcJyk/KFxccyk/Oi9nLCAnXCIkMlwiOicpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC86KFxccyk/KFxcJykoLio/KShcXCcpL2csICc6XCIkM1wiJyk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVQYXJhbXMgPSBKU09OLnBhcnNlKHZhbGlkQXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihcIldyb25nIHBhcmFtZXRlciBpbiBUcmFuc2xhdGVQaXBlLiBFeHBlY3RlZCBhIHZhbGlkIE9iamVjdCwgcmVjZWl2ZWQ6IFwiICsgYXJnc1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVQYXJhbXMgPSBhcmdzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3JlIHRoZSBxdWVyeSwgaW4gY2FzZSBpdCBjaGFuZ2VzXG4gICAgICAgIHRoaXMubGFzdEtleSA9IHF1ZXJ5O1xuICAgICAgICAvLyBzdG9yZSB0aGUgcGFyYW1zLCBpbiBjYXNlIHRoZXkgY2hhbmdlXG4gICAgICAgIHRoaXMubGFzdFBhcmFtcyA9IGFyZ3M7XG4gICAgICAgIC8vIHNldCB0aGUgdmFsdWVcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShxdWVyeSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHN1YnNjcmlwdGlvbiB0byBvbkxhbmdDaGFuZ2UsIGNsZWFuIGl0XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2UoKTtcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9uVHJhbnNsYXRpb25DaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIHRyYW5zbGF0aW9ucyBjaGFuZ2VcbiAgICAgICAgaWYgKCF0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSA9IHRoaXMudHJhbnNsYXRlLm9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYXN0S2V5ICYmIGV2ZW50LmxhbmcgPT09IF90aGlzLnRyYW5zbGF0ZS5jdXJyZW50TGFuZykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXN0S2V5ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVmFsdWUocXVlcnksIGludGVycG9sYXRlUGFyYW1zLCBldmVudC50cmFuc2xhdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN1YnNjcmliZSB0byBvbkxhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGxhbmd1YWdlIGNoYW5nZXNcbiAgICAgICAgaWYgKCF0aGlzLm9uTGFuZ0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5vbkxhbmdDaGFuZ2UgPSB0aGlzLnRyYW5zbGF0ZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYXN0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhc3RLZXkgPSBudWxsOyAvLyB3ZSB3YW50IHRvIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IHJldHVybiB0aGUgc2FtZSB2YWx1ZSB1bnRpbCBpdCdzIGJlZW4gdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVWYWx1ZShxdWVyeSwgaW50ZXJwb2xhdGVQYXJhbXMsIGV2ZW50LnRyYW5zbGF0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIG9uRGVmYXVsdExhbmdDaGFuZ2UgZXZlbnQsIGluIGNhc2UgdGhlIGRlZmF1bHQgbGFuZ3VhZ2UgY2hhbmdlc1xuICAgICAgICBpZiAoIXRoaXMub25EZWZhdWx0TGFuZ0NoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlID0gdGhpcy50cmFuc2xhdGUub25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sYXN0S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxhc3RLZXkgPSBudWxsOyAvLyB3ZSB3YW50IHRvIG1ha2Ugc3VyZSBpdCBkb2Vzbid0IHJldHVybiB0aGUgc2FtZSB2YWx1ZSB1bnRpbCBpdCdzIGJlZW4gdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVWYWx1ZShxdWVyeSwgaW50ZXJwb2xhdGVQYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xlYW4gYW55IGV4aXN0aW5nIHN1YnNjcmlwdGlvbiB0byBjaGFuZ2UgZXZlbnRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBUcmFuc2xhdGVQaXBlLnByb3RvdHlwZS5fZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2xhdGlvbkNoYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub25MYW5nQ2hhbmdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5vbkxhbmdDaGFuZ2UudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMub25MYW5nQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLm9uRGVmYXVsdExhbmdDaGFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYW5zbGF0ZVBpcGUucHJvdG90eXBlLm5nT25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNsYXRlUGlwZTtcbn0oKSk7XG5leHBvcnQgeyBUcmFuc2xhdGVQaXBlIH07XG5UcmFuc2xhdGVQaXBlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG4gICAgeyB0eXBlOiBQaXBlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICd0cmFuc2xhdGUnLFxuICAgICAgICAgICAgICAgIHB1cmU6IGZhbHNlIC8vIHJlcXVpcmVkIHRvIHVwZGF0ZSB0aGUgdmFsdWUgd2hlbiB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZFxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5UcmFuc2xhdGVQaXBlLmN0b3JQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW1xuICAgIHsgdHlwZTogVHJhbnNsYXRlU2VydmljZSwgfSxcbiAgICB7IHR5cGU6IENoYW5nZURldGVjdG9yUmVmLCB9LFxuXTsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy90cmFuc2xhdGUucGlwZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xudmFyIFRyYW5zbGF0ZVN0b3JlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc2xhdGVTdG9yZSgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsYW5nIGN1cnJlbnRseSB1c2VkXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmN1cnJlbnRMYW5nID0gdGhpcy5kZWZhdWx0TGFuZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGEgbGlzdCBvZiB0cmFuc2xhdGlvbnMgcGVyIGxhbmdcbiAgICAgICAgICogQHR5cGUge3t9fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFuIGFycmF5IG9mIGxhbmdzXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGFuZ3MgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gdHJhbnNsYXRpb24gY2hhbmdlIGV2ZW50c1xuICAgICAgICAgKiBvblRyYW5zbGF0aW9uQ2hhbmdlLnN1YnNjcmliZSgocGFyYW1zOiBUcmFuc2xhdGlvbkNoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICAqICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqIEB0eXBlIHtFdmVudEVtaXR0ZXI8VHJhbnNsYXRpb25DaGFuZ2VFdmVudD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uVHJhbnNsYXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBFdmVudEVtaXR0ZXIgdG8gbGlzdGVuIHRvIGxhbmcgY2hhbmdlIGV2ZW50c1xuICAgICAgICAgKiBvbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChwYXJhbXM6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPExhbmdDaGFuZ2VFdmVudD59XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uTGFuZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEV2ZW50RW1pdHRlciB0byBsaXN0ZW4gdG8gZGVmYXVsdCBsYW5nIGNoYW5nZSBldmVudHNcbiAgICAgICAgICogb25EZWZhdWx0TGFuZ0NoYW5nZS5zdWJzY3JpYmUoKHBhcmFtczogRGVmYXVsdExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgKiAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPERlZmF1bHRMYW5nQ2hhbmdlRXZlbnQ+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vbkRlZmF1bHRMYW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICByZXR1cm4gVHJhbnNsYXRlU3RvcmU7XG59KCkpO1xuZXhwb3J0IHsgVHJhbnNsYXRlU3RvcmUgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9Abmd4LXRyYW5zbGF0ZS9jb3JlL3NyYy90cmFuc2xhdGUuc3RvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly9qaGlwc3Rlci5naXRodWIuaW8vXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vamhpLWl0ZW0tY291bnQuY29tcG9uZW50JztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnQvaW5kZXgudHMiLCIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKaGlNb2R1bGVDb25maWcge1xuICAgIHNvcnRJY29uPyA9ICdmYS1zb3J0JztcbiAgICBzb3J0QXNjSWNvbj8gPSAnZmEtc29ydC1hc2MnO1xuICAgIHNvcnREZXNjSWNvbj8gPSAnZmEtc29ydC1kZXNjJztcbiAgICBzb3J0SWNvblNlbGVjdG9yPyA9ICdzcGFuLmZhJztcbiAgICBpMThuRW5hYmxlZD8gPSBmYWxzZTtcbiAgICBkZWZhdWx0STE4bkxhbmc/ID0gJ2VuJztcbiAgICBub2kxOG5NZXNzYWdlPyA9ICd0cmFuc2xhdGlvbi1ub3QtZm91bmQnO1xuICAgIGFsZXJ0QXNUb2FzdD8gPSBmYWxzZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb25maWcudHMiLCIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgKiBmcm9tICcuL21heGJ5dGVzLmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL21pbmJ5dGVzLmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL3NvcnQuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vc29ydC1ieS5kaXJlY3RpdmUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2RpcmVjdGl2ZS9pbmRleC50cyIsIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly9qaGlwc3Rlci5naXRodWIuaW8vXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJPZkJ5dGVzKGJhc2U2NFN0cmluZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGJhc2U2NFN0cmluZy5sZW5ndGggLyA0ICogMyAtIHBhZGRpbmdTaXplKGJhc2U2NFN0cmluZyk7XG5cbiAgICBmdW5jdGlvbiBlbmRzV2l0aChzdWZmaXg6IHN0cmluZywgc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5pbmRleE9mKHN1ZmZpeCwgc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYWRkaW5nU2l6ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChlbmRzV2l0aCgnPT0nLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbmRzV2l0aCgnPScsIHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2RpcmVjdGl2ZS9udW1iZXItb2YtYnl0ZXMudHMiLCIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyLCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpoaUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2poaVNvcnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlTb3J0RGlyZWN0aXZlIHtcbiAgICBASW5wdXQoKSBwcmVkaWNhdGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBhc2NlbmRpbmc6IGJvb2xlYW47XG4gICAgQElucHV0KCkgY2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG4gICAgc29ydEljb24gPSAnZmEtc29ydCc7XG4gICAgc29ydEFzY0ljb24gPSAnZmEtc29ydC1hc2MnO1xuICAgIHNvcnREZXNjSWNvbiA9ICdmYS1zb3J0LWRlc2MnO1xuICAgIHNvcnRJY29uU2VsZWN0b3IgPSAnc3Bhbi5mYSc7XG5cbiAgICBAT3V0cHV0KCkgcHJlZGljYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYXNjZW5kaW5nQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGVsZW1lbnQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIsIGNvbmZpZ1NlcnZpY2U6IEpoaUNvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWwubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgY29uZmlnID0gY29uZmlnU2VydmljZS5nZXRDb25maWcoKTtcbiAgICAgICAgdGhpcy5zb3J0SWNvbiA9IGNvbmZpZy5zb3J0SWNvbjtcbiAgICAgICAgdGhpcy5zb3J0QXNjSWNvbiA9IGNvbmZpZy5zb3J0QXNjSWNvbjtcbiAgICAgICAgdGhpcy5zb3J0RGVzY0ljb24gPSBjb25maWcuc29ydERlc2NJY29uO1xuICAgICAgICB0aGlzLnNvcnRJY29uU2VsZWN0b3IgPSBjb25maWcuc29ydEljb25TZWxlY3RvcjtcbiAgICB9XG5cbiAgICBzb3J0KGZpZWxkOiBhbnkpIHtcbiAgICAgICAgdGhpcy5yZXNldENsYXNzZXMoKTtcbiAgICAgICAgaWYgKGZpZWxkICE9PSB0aGlzLnByZWRpY2F0ZSkge1xuICAgICAgICAgICAgdGhpcy5hc2NlbmRpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hc2NlbmRpbmcgPSAhdGhpcy5hc2NlbmRpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVkaWNhdGUgPSBmaWVsZDtcbiAgICAgICAgdGhpcy5wcmVkaWNhdGVDaGFuZ2UuZW1pdChmaWVsZCk7XG4gICAgICAgIHRoaXMuYXNjZW5kaW5nQ2hhbmdlLmVtaXQodGhpcy5hc2NlbmRpbmcpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldENsYXNzZXMoKSB7XG4gICAgICAgIGNvbnN0IGFsbFRoSWNvbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNvcnRJY29uU2VsZWN0b3IpO1xuICAgICAgICAvLyBVc2Ugbm9ybWFsIGxvb3AgaW5zdGVhZCBvZiBmb3JFYWNoIGJlY2F1c2UgSUUgZG9lcyBub3Qgc3VwcG9ydCBmb3JFYWNoIG9uIE5vZGVMaXN0LlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRoSWNvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFsbFRoSWNvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNvcnRBc2NJY29uKTtcbiAgICAgICAgICAgIGFsbFRoSWNvbnNbaV0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnNvcnREZXNjSWNvbik7XG4gICAgICAgICAgICBhbGxUaEljb25zW2ldLmNsYXNzTGlzdC5hZGQodGhpcy5zb3J0SWNvbik7XG4gICAgICAgIH07XG4gICAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9kaXJlY3RpdmUvc29ydC5kaXJlY3RpdmUudHMiLCIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9uc0FyZ3MgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuLyoqXG4gKiBBIEhUVFAgaW50ZXJjZXB0b3IgcmVzcG9uc2liaWxpdHkgY2hhaW4gbWVtYmVyIGlzIGEgY2xhc3MsIHdoaWNoIG1heSByZWFjdCBvbiByZXF1ZXN0IGFuZCByZXNwb25zZSBvZiBhbGwgcmVxdWVzdHNcbiAqIGRvbmUgYnkgSFRUUC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpoaUh0dHBJbnRlcmNlcHRvciB7XG4gICAgcHJpdmF0ZSBfc3VjY2Vzc29yOiBKaGlIdHRwSW50ZXJjZXB0b3IgPSBudWxsO1xuXG4gICAgc2V0IHN1Y2Nlc3NvcihzdWNjZXNzb3I6IEpoaUh0dHBJbnRlcmNlcHRvcikge1xuICAgICAgICB0aGlzLl9zdWNjZXNzb3IgPSBzdWNjZXNzb3I7XG4gICAgfVxuXG4gICAgcHJvY2Vzc1JlcXVlc3RJbnRlcmNlcHRpb24ob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIHJldHVybiAoIXRoaXMuX3N1Y2Nlc3NvcikgPyB0aGlzLnJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucykgOlxuICAgICAgICAgICAgdGhpcy5fc3VjY2Vzc29yLnByb2Nlc3NSZXF1ZXN0SW50ZXJjZXB0aW9uKHRoaXMucmVxdWVzdEludGVyY2VwdChvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc1Jlc3BvbnNlSW50ZXJjZXB0aW9uKHJlc3BvbnNlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuICghdGhpcy5fc3VjY2Vzc29yKSA/IHRoaXMucmVzcG9uc2VJbnRlcmNlcHQocmVzcG9uc2UpIDpcbiAgICAgICAgICAgIHRoaXMuX3N1Y2Nlc3Nvci5wcm9jZXNzUmVzcG9uc2VJbnRlcmNlcHRpb24odGhpcy5yZXNwb25zZUludGVyY2VwdChyZXNwb25zZSkpO1xuICAgIH1cblxuICAgIGFic3RyYWN0IHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncztcblxuICAgIGFic3RyYWN0IHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT47XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9pbnRlcmNlcHRvci9odHRwLmludGVyY2VwdG9yLnRzIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9sYW5ndWFnZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vamhpLXRyYW5zbGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9qaGktbWlzc2luZy10cmFuc2xhdGlvbi5jb25maWcnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2xhbmd1YWdlL2luZGV4LnRzIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7IG5hbWU6ICdmaWx0ZXInLCBwdXJlOiBmYWxzZSB9KVxuZXhwb3J0IGNsYXNzIEpoaUZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHByaXZhdGUgZmlsdGVyQnlTdHJpbmdBbmRGaWVsZChmaWx0ZXIsIGZpZWxkKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhZmlsdGVyIHx8ICh2YWx1ZVtmaWVsZF0gJiYgdmFsdWVbZmllbGRdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL1ZhZGltRGV6L25nMi1maWx0ZXItcGlwZVxuICAgIHByaXZhdGUgZmlsdGVyQnlTdHJpbmcoZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhZmlsdGVyIHx8IHZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZmlsdGVyRGVmYXVsdChmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFmaWx0ZXIgfHwgZmlsdGVyID09PSB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbHRlckJ5T2JqZWN0KGZpbHRlcikge1xuICAgICAgICByZXR1cm4gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZmlsdGVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZVtrZXldO1xuICAgICAgICAgICAgICAgIGxldCBpc01hdGNoaW5nO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTWF0Y2hpbmcgPSB0aGlzLmZpbHRlckJ5U3RyaW5nKGZpbHRlcltrZXldKSh2YWx1ZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTWF0Y2hpbmcgPSB0aGlzLmZpbHRlckJ5T2JqZWN0KGZpbHRlcltrZXldKSh2YWx1ZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc01hdGNoaW5nID0gdGhpcy5maWx0ZXJEZWZhdWx0KGZpbHRlcltrZXldKSh2YWx1ZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzTWF0Y2hpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdHJhbnNmb3JtKGlucHV0OiBBcnJheTxhbnk+LCBmaWx0ZXI6IHN0cmluZywgZmllbGQ6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiBmaWx0ZXI7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LmZpbHRlcih0aGlzLmZpbHRlckJ5U3RyaW5nQW5kRmllbGQoZmlsdGVyLCBmaWVsZCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlucHV0LmZpbHRlcih0aGlzLmZpbHRlckJ5U3RyaW5nKGZpbHRlcikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQuZmlsdGVyKHRoaXMuZmlsdGVyQnlPYmplY3QoZmlsdGVyKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcGlwZS9maWx0ZXIucGlwZS50cyIsIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly9qaGlwc3Rlci5naXRodWIuaW8vXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vdHJ1bmNhdGUtY2hhcmFjdGVycy5waXBlJztcbmV4cG9ydCAqIGZyb20gJy4vdHJ1bmNhdGUtd29yZHMucGlwZSc7XG5leHBvcnQgKiBmcm9tICcuL29yZGVyLWJ5LnBpcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9maWx0ZXIucGlwZSc7XG5leHBvcnQgKiBmcm9tICcuL3B1cmUtZmlsdGVyLnBpcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9jYXBpdGFsaXplLnBpcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9rZXlzLnBpcGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3BpcGUvaW5kZXgudHMiLCIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgKiBmcm9tICcuL3BhZ2luYXRpb24tdXRpbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFyc2UtbGlua3Muc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGEtdXRpbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZS11dGlsLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudC1tYW5hZ2VyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hbGVydC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYmFzZTY0LnNlcnZpY2UnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2UvaW5kZXgudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjJfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjRfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvT2JzZXJ2YWJsZVwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSwgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyLCBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xuXG5pbXBvcnQgeyBKSElfUElQRVMsIEpISV9ESVJFQ1RJVkVTLCBKSElfQ09NUE9ORU5UUywgSkhJX1NFUlZJQ0VTIH0gZnJvbSAnLi9zcmMvamhpLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgICBKaGlNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLFxuICAgIEpoaVRyYW5zbGF0ZUNvbXBvbmVudCxcbiAgICBKaGlMYW5ndWFnZVNlcnZpY2Vcbn0gZnJvbSAnLi9zcmMvbGFuZ3VhZ2UnO1xuaW1wb3J0IHsgSmhpTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9zcmMvY29uZmlnJztcbmltcG9ydCB7IEpoaUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3NyYy9jb25maWcuc2VydmljZSc7XG5cbi8vIFJlIGV4cG9ydCB0aGUgZmlsZXNcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3BpcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3NlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2xhbmd1YWdlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL2ludGVyY2VwdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVBhcnRpYWxMb2FkZXIoaHR0cDogSHR0cCkge1xuICAgIHJldHVybiBuZXcgVHJhbnNsYXRlSHR0cExvYWRlcihodHRwLCAnaTE4bi8nLCAnLmpzb24nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIoY29uZmlnU2VydmljZTogSmhpQ29uZmlnU2VydmljZSkge1xuICAgIHJldHVybiBuZXcgSmhpTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlcihjb25maWdTZXJ2aWNlKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgIGxvYWRlcjoge1xuICAgICAgICAgICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiB0cmFuc2xhdGVQYXJ0aWFsTG9hZGVyLFxuICAgICAgICAgICAgICAgIGRlcHM6IFtIdHRwXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXI6IHtcbiAgICAgICAgICAgICAgICBwcm92aWRlOiBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLFxuICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IG1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIsXG4gICAgICAgICAgICAgICAgZGVwczogW0poaUNvbmZpZ1NlcnZpY2VdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICAuLi5KSElfUElQRVMsXG4gICAgICAgIC4uLkpISV9ESVJFQ1RJVkVTLFxuICAgICAgICAuLi5KSElfQ09NUE9ORU5UUyxcbiAgICAgICAgSmhpVHJhbnNsYXRlQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIC4uLkpISV9QSVBFUyxcbiAgICAgICAgLi4uSkhJX0RJUkVDVElWRVMsXG4gICAgICAgIC4uLkpISV9DT01QT05FTlRTLFxuICAgICAgICBKaGlUcmFuc2xhdGVDb21wb25lbnQsXG4gICAgICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0poaXBzdGVyTW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChtb2R1bGVDb25maWc6IEpoaU1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IE5nSmhpcHN0ZXJNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICAuLi5KSElfU0VSVklDRVMsXG4gICAgICAgICAgICAgICAgSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSmhpTW9kdWxlQ29uZmlnLCB1c2VWYWx1ZTogbW9kdWxlQ29uZmlnIH0sXG4gICAgICAgICAgICAgICAgSmhpQ29uZmlnU2VydmljZVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL2luZGV4LnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vc3JjL2h0dHAtbG9hZGVyXCI7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9Abmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbnZhciBUcmFuc2xhdGVIdHRwTG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCwgcHJlZml4LCBzdWZmaXgpIHtcclxuICAgICAgICBpZiAocHJlZml4ID09PSB2b2lkIDApIHsgcHJlZml4ID0gXCIvYXNzZXRzL2kxOG4vXCI7IH1cclxuICAgICAgICBpZiAoc3VmZml4ID09PSB2b2lkIDApIHsgc3VmZml4ID0gXCIuanNvblwiOyB9XHJcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcclxuICAgICAgICB0aGlzLnN1ZmZpeCA9IHN1ZmZpeDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdHJhbnNsYXRpb25zIGZyb20gdGhlIHNlcnZlclxyXG4gICAgICogQHBhcmFtIGxhbmdcclxuICAgICAqIEByZXR1cm5zIHthbnl9XHJcbiAgICAgKi9cclxuICAgIFRyYW5zbGF0ZUh0dHBMb2FkZXIucHJvdG90eXBlLmdldFRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKGxhbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcIlwiICsgdGhpcy5wcmVmaXggKyBsYW5nICsgdGhpcy5zdWZmaXgpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRyYW5zbGF0ZUh0dHBMb2FkZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyL3NyYy9odHRwLWxvYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9pbmRleCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9uZy1qaGlwc3Rlci50cyIsIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly9qaGlwc3Rlci5naXRodWIuaW8vXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpoaUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcuc2VydmljZSc7XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCB3aWxsIHRha2UgY2FyZSBvZiBpdGVtIGNvdW50IHN0YXRpc3RpY3Mgb2YgYSBwYWdpbmF0aW9uLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1pdGVtLWNvdW50JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaTE4bkVuYWJsZWQ7IGVsc2Ugbm9JMThuXCIgY2xhc3M9XCJpbmZvIGpoaS1pdGVtLWNvdW50XCJcbiAgICAgICAgICAgIGpoaVRyYW5zbGF0ZT1cImdsb2JhbC5pdGVtLWNvdW50XCJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVZhbHVlcz1cInt7aTE4blZhbHVlcygpfX1cIlxuICAgICAgICAgICAgW2F0dHIudHJhbnNsYXRlVmFsdWVzXT1cImkxOG5WYWx1ZXMoKVwiPiAgLyogW2F0dHIudHJhbnNsYXRlVmFsdWVzXSBpcyB1c2VkIHRvIGdldCBlbnRpcmUgdmFsdWVzIGluIHRlc3RzICovXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmctdGVtcGxhdGUgI25vSTE4biBjbGFzcz1cImluZm8gamhpLWl0ZW0tY291bnRcIj5cbiAgICAgICAgICAgIOaYvuekuiB7eygocGFnZSAtIDEpICogaXRlbXNQZXJQYWdlKSA9PSAwID8gMSA6ICgocGFnZSAtIDEpICogaXRlbXNQZXJQYWdlICsgMSl9fSAtXG4gICAgICAgICAgICB7eyhwYWdlICogaXRlbXNQZXJQYWdlKSA8IHRvdGFsID8gKHBhZ2UgKiBpdGVtc1BlclBhZ2UpIDogdG90YWx9fVxuICAgICAgICAgICAg5YWxIHt7dG90YWx9fSDmnaEuXG4gICAgICAgIDwvbmctdGVtcGxhdGU+YFxufSlcbmV4cG9ydCBjbGFzcyBKaGlJdGVtQ291bnRDb21wb25lbnQge1xuXG4gICAvKipcbiAgICAqICBjdXJyZW50IHBhZ2UgbnVtYmVyLlxuICAgICovXG4gICAgQElucHV0KCkgcGFnZTogbnVtYmVyO1xuXG4gICAvKipcbiAgICAqICBUb3RhbCBudW1iZXIgb2YgaXRlbXMuXG4gICAgKi9cbiAgICBASW5wdXQoKSB0b3RhbDogbnVtYmVyO1xuXG4gICAvKipcbiAgICAqICBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuXG4gICAgKi9cbiAgICBASW5wdXQoKSBpdGVtc1BlclBhZ2U6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGdlbmVyYXRlZCBhcHBsaWNhdGlvbiB1c2UgaTE4blxuICAgICAqL1xuICAgIGkxOG5FbmFibGVkOiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogXCJ0cmFuc2xhdGUtdmFsdWVzXCIgSlNPTiBvZiB0aGUgdGVtcGxhdGVcbiAgICAgKi9cbiAgICBpMThuVmFsdWVzKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gKCh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMuaXRlbXNQZXJQYWdlKSA9PT0gMCA/IDEgOiAoKHRoaXMucGFnZSAtIDEpICogdGhpcy5pdGVtc1BlclBhZ2UgKyAxKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kID0gKHRoaXMucGFnZSAqIHRoaXMuaXRlbXNQZXJQYWdlKSA8IHRoaXMudG90YWwgPyAodGhpcy5wYWdlICogdGhpcy5pdGVtc1BlclBhZ2UpIDogdGhpcy50b3RhbDtcbiAgICAgICAgcmV0dXJuICd7Zmlyc3Q6IFxcJycgKyBmaXJzdCArICdcXCcsIHNlY29uZDogXFwnJyArIHNlY29uZCArICdcXCcsIHRvdGFsOiBcXCcnICsgdGhpcy50b3RhbCArICdcXCd9JztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEpoaUNvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5pMThuRW5hYmxlZCA9IGNvbmZpZy5DT05GSUdfT1BUSU9OUy5pMThuRW5hYmxlZDtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb21wb25lbnQvamhpLWl0ZW0tY291bnQuY29tcG9uZW50LnRzIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbnVtYmVyT2ZCeXRlcyB9IGZyb20gJy4vbnVtYmVyLW9mLWJ5dGVzJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbamhpTWF4Ynl0ZXNdW25nTW9kZWxdJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBKaGlNYXhieXRlc1ZhbGlkYXRvckRpcmVjdGl2ZSksIG11bHRpOiB0cnVlIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEpoaU1heGJ5dGVzVmFsaWRhdG9yRGlyZWN0aXZlIHtcbiAgICBASW5wdXQoKSBqaGlNYXhieXRlczogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgdmFsaWRhdGUoYzogRm9ybUNvbnRyb2wpIHtcbiAgICAgICAgcmV0dXJuIChjLnZhbHVlICYmIG51bWJlck9mQnl0ZXMoYy52YWx1ZSkgPD0gdGhpcy5qaGlNYXhieXRlcykgPyBudWxsIDoge1xuICAgICAgICAgICAgbWF4Ynl0ZXM6IHtcbiAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvZGlyZWN0aXZlL21heGJ5dGVzLmRpcmVjdGl2ZS50cyIsIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly9qaGlwc3Rlci5naXRodWIuaW8vXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG51bWJlck9mQnl0ZXMgfSBmcm9tICcuL251bWJlci1vZi1ieXRlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2poaU1pbmJ5dGVzXVtuZ01vZGVsXScsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSmhpTWluYnl0ZXNWYWxpZGF0b3JEaXJlY3RpdmUpLCBtdWx0aTogdHJ1ZSB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBKaGlNaW5ieXRlc1ZhbGlkYXRvckRpcmVjdGl2ZSB7XG4gICAgQElucHV0KCkgamhpTWluYnl0ZXM6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHZhbGlkYXRlKGM6IEZvcm1Db250cm9sKSB7XG4gICAgICAgIHJldHVybiAoYy52YWx1ZSAmJiBudW1iZXJPZkJ5dGVzKGMudmFsdWUpID49IHRoaXMuamhpTWluYnl0ZXMpID8gbnVsbCA6IHtcbiAgICAgICAgICAgIG1pbmJ5dGVzOiB7XG4gICAgICAgICAgICAgICAgdmFsaWQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2RpcmVjdGl2ZS9taW5ieXRlcy5kaXJlY3RpdmUudHMiLCIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKaGlTb3J0RGlyZWN0aXZlIH0gZnJvbSAnLi9zb3J0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBKaGlDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tqaGlTb3J0QnldJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlTb3J0QnlEaXJlY3RpdmUge1xuICAgIEBJbnB1dCgpIGpoaVNvcnRCeTogc3RyaW5nO1xuXG4gICAgc29ydEFzY0ljb24gPSAnZmEtc29ydC1hc2MnO1xuICAgIHNvcnREZXNjSWNvbiA9ICdmYS1zb3J0LWRlc2MnO1xuXG4gICAgamhpU29ydDogSmhpU29ydERpcmVjdGl2ZTtcblxuICAgIGNvbnN0cnVjdG9yKEBIb3N0KCkgamhpU29ydDogSmhpU29ydERpcmVjdGl2ZSwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIGNvbmZpZ1NlcnZpY2U6IEpoaUNvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5qaGlTb3J0ID0gamhpU29ydDtcbiAgICAgICAgY29uc3QgY29uZmlnID0gY29uZmlnU2VydmljZS5nZXRDb25maWcoKTtcbiAgICAgICAgdGhpcy5zb3J0QXNjSWNvbiA9IGNvbmZpZy5zb3J0QXNjSWNvbjtcbiAgICAgICAgdGhpcy5zb3J0RGVzY0ljb24gPSBjb25maWcuc29ydERlc2NJY29uO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuamhpU29ydC5wcmVkaWNhdGUgJiYgdGhpcy5qaGlTb3J0LnByZWRpY2F0ZSAhPT0gJ19zY29yZScpIHtcbiAgICAgICAgICAgIHRoaXMuamhpU29ydC5zb3J0KHRoaXMuamhpU29ydEJ5KTtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlDbGFzcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcHBseUNsYXNzKCkge1xuICAgICAgICBjb25zdCBjaGlsZFNwYW4gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIGxldCBhZGQgPSB0aGlzLnNvcnRBc2NJY29uO1xuICAgICAgICBpZiAoIXRoaXMuamhpU29ydC5hc2NlbmRpbmcpIHtcbiAgICAgICAgICAgIGFkZCA9IHRoaXMuc29ydERlc2NJY29uO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKGNoaWxkU3BhbiwgYWRkLCB0cnVlKTtcbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2RpcmVjdGl2ZS9zb3J0LWJ5LmRpcmVjdGl2ZS50cyIsIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly9qaGlwc3Rlci5naXRodWIuaW8vXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vaHR0cC5pbnRlcmNlcHRvcic7XG5leHBvcnQgKiBmcm9tICcuL2ludGVyY2VwdGFibGUtaHR0cCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvaW50ZXJjZXB0b3IvaW5kZXgudHMiLCIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBKaGlIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICcuL2h0dHAuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBDb25uZWN0aW9uQmFja2VuZCwgUmVxdWVzdE9wdGlvbnMsIFJlcXVlc3RPcHRpb25zQXJncywgUmVxdWVzdE1ldGhvZCwgUmVxdWVzdCwgUmVzcG9uc2UsIEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpSW50ZXJjZXB0YWJsZUh0dHAgZXh0ZW5kcyBIdHRwIHtcbiAgICBwcml2YXRlIGZpcnN0SW50ZXJjZXB0b3I6IEpoaUh0dHBJbnRlcmNlcHRvcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBiYWNrZW5kOiBDb25uZWN0aW9uQmFja2VuZCxcbiAgICAgICAgZGVmYXVsdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zLFxuICAgICAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gSmhpSHR0cEludGVyY2VwdG9yKSkgaW50ZXJjZXB0b3JzOiBKaGlIdHRwSW50ZXJjZXB0b3JbXSAvLyBzZWUgdGhlIGlzc3VlIGdlbmVyYXRvci1qaGlwc3RlciM0Nzk0XG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGJhY2tlbmQsIGRlZmF1bHRPcHRpb25zKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYnVpbGRpbmcgYSByZXNwb25zaWJpbGl0eSBjaGFpbiBvZiBodHRwIGludGVyY2VwdG9ycywgc28gd2hlbiBwcm9jZXNzWFhYSW50ZXJjZXB0aW9uIGlzIGNhbGxlZCBvbiBmaXJzdCBpbnRlcmNlcHRvcixcbiAgICAgICAgICogYWxsIGh0dHAgaW50ZXJjZXB0b3JzIGFyZSBjYWxsZWQgaW4gYSByb3dcbiAgICAgICAgICogTm90ZTogdGhlIGFycmF5IG9mIGludGVyY2VwdG9ycyBhcmUgd2lyZWQgaW4gY3VzdG9tSHR0cFByb3ZpZGVyIG9mIHRoZSBnZW5lcmF0ZWQgSmhpcHN0ZXIgYXBwIGluIGZpbGUgYGh0dHAucHJvdmlkZXIudHNgXG4gICAgICAgICAqXG4gICAgICAgICovXG4gICAgICAgIGlmIChpbnRlcmNlcHRvcnMgJiYgaW50ZXJjZXB0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGludGVyY2VwdG9ycy5yZWR1Y2UoKGNoYWluLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY2hhaW4uc3VjY2Vzc29yID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmZpcnN0SW50ZXJjZXB0b3IgPSBpbnRlcmNlcHRvcnNbMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0KHVybDogc3RyaW5nIHwgUmVxdWVzdCwgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgLy8gUmVzcG9uc2UgaW50ZXJjZXB0b3IgbmVlZHMgdG8gYmUgY2FsbGVkIG9ubHkgb25jZSBhZnRlciB0aGUgZmluYWwgcmVxdWVzdCBoZXJlXG4gICAgICAgIC8vIEV2ZXJ5IEhUVFAgbWV0aG9kIHdpbGwgZ28gdGhyb3VnaCB0aGlzIHJlcXVlc3QgbWV0aG9kXG4gICAgICAgIHJldHVybiB0aGlzLmludGVyY2VwdFJlc3BvbnNlKHN1cGVyLnJlcXVlc3QodXJsLCBvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KHVybCwgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0KHVybCwgUmVxdWVzdE1ldGhvZC5HZXQsIG9wdGlvbnMpKTtcbiAgICB9XG5cbiAgICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBzdXBlci5wb3N0KHVybCwgYm9keSwgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0KHVybCwgUmVxdWVzdE1ldGhvZC5Qb3N0LCBvcHRpb25zLCBib2R5KSk7XG4gICAgfVxuXG4gICAgcHV0KHVybDogc3RyaW5nLCBib2R5OiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBzdXBlci5wdXQodXJsLCBib2R5LCB0aGlzLmludGVyY2VwdFJlcXVlc3QodXJsLCBSZXF1ZXN0TWV0aG9kLlB1dCwgb3B0aW9ucywgYm9keSkpO1xuICAgIH1cblxuICAgIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmRlbGV0ZSh1cmwsIHRoaXMuaW50ZXJjZXB0UmVxdWVzdCh1cmwsIFJlcXVlc3RNZXRob2QuRGVsZXRlLCBvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnBhdGNoKHVybCwgYm9keSwgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0KHVybCwgUmVxdWVzdE1ldGhvZC5QYXRjaCwgb3B0aW9ucywgYm9keSkpO1xuICAgIH1cblxuICAgIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBzdXBlci5oZWFkKHVybCwgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0KHVybCwgUmVxdWVzdE1ldGhvZC5IZWFkLCBvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgb3B0aW9ucyh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLm9wdGlvbnModXJsLCB0aGlzLmludGVyY2VwdFJlcXVlc3QodXJsLCBSZXF1ZXN0TWV0aG9kLk9wdGlvbnMsIG9wdGlvbnMpKTtcbiAgICB9XG5cbiAgICBpbnRlcmNlcHRSZXF1ZXN0KHVybDogc3RyaW5nLCBtZXRob2Q6IFJlcXVlc3RNZXRob2QsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MsIGJvZHk/OiBhbnkpOiBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucy51cmwgPSBvcHRpb25zLnVybCB8fCB1cmw7XG4gICAgICAgIG9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgbWV0aG9kO1xuICAgICAgICBvcHRpb25zLmJvZHkgPSBvcHRpb25zLmJvZHkgfHwgYm9keTtcblxuICAgICAgICByZXR1cm4gIXRoaXMuZmlyc3RJbnRlcmNlcHRvciA/IG9wdGlvbnMgOiB0aGlzLmZpcnN0SW50ZXJjZXB0b3IucHJvY2Vzc1JlcXVlc3RJbnRlcmNlcHRpb24ob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaW50ZXJjZXB0UmVzcG9uc2Uob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiAhdGhpcy5maXJzdEludGVyY2VwdG9yID8gb2JzZXJ2YWJsZSA6IHRoaXMuZmlyc3RJbnRlcmNlcHRvci5wcm9jZXNzUmVzcG9uc2VJbnRlcmNlcHRpb24ob2JzZXJ2YWJsZSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2ludGVyY2VwdG9yL2ludGVyY2VwdGFibGUtaHR0cC50cyIsIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly9qaGlwc3Rlci5naXRodWIuaW8vXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7XG4gICAgSmhpQ2FwaXRhbGl6ZVBpcGUsXG4gICAgSmhpRmlsdGVyUGlwZSxcbiAgICBKaGlLZXlzUGlwZSxcbiAgICBKaGlPcmRlckJ5UGlwZSxcbiAgICBKaGlQdXJlRmlsdGVyUGlwZSxcbiAgICBKaGlUcnVuY2F0ZUNoYXJhY3RlcnNQaXBlLFxuICAgIEpoaVRydW5jYXRlV29yZHNQaXBlXG59IGZyb20gJy4vcGlwZSc7XG5pbXBvcnQge1xuICAgIEpoaU1heGJ5dGVzVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgIEpoaU1pbmJ5dGVzVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgIEpoaVNvcnREaXJlY3RpdmUsXG4gICAgSmhpU29ydEJ5RGlyZWN0aXZlXG59IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEpoaUl0ZW1Db3VudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7XG4gICAgSmhpRGF0YVV0aWxzLFxuICAgIEpoaURhdGVVdGlscyxcbiAgICBKaGlFdmVudE1hbmFnZXIsXG4gICAgSmhpUGFyc2VMaW5rcyxcbiAgICBKaGlQYWdpbmF0aW9uVXRpbCxcbiAgICBKaGlCYXNlNjRTZXJ2aWNlLFxuICAgIEpoaUFsZXJ0U2VydmljZVxufSBmcm9tICcuL3NlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgSkhJX1BJUEVTID0gW1xuICAgIEpoaUNhcGl0YWxpemVQaXBlLFxuICAgIEpoaUZpbHRlclBpcGUsXG4gICAgSmhpS2V5c1BpcGUsXG4gICAgSmhpT3JkZXJCeVBpcGUsXG4gICAgSmhpUHVyZUZpbHRlclBpcGUsXG4gICAgSmhpVHJ1bmNhdGVDaGFyYWN0ZXJzUGlwZSxcbiAgICBKaGlUcnVuY2F0ZVdvcmRzUGlwZVxuXTtcblxuZXhwb3J0IGNvbnN0IEpISV9ESVJFQ1RJVkVTID0gW1xuICAgIEpoaU1heGJ5dGVzVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgIEpoaU1pbmJ5dGVzVmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgIEpoaVNvcnREaXJlY3RpdmUsXG4gICAgSmhpU29ydEJ5RGlyZWN0aXZlXG5dO1xuXG5leHBvcnQgY29uc3QgSkhJX0NPTVBPTkVOVFMgPSBbXG4gICAgSmhpSXRlbUNvdW50Q29tcG9uZW50XG5dO1xuXG5leHBvcnQgY29uc3QgSkhJX1NFUlZJQ0VTID0gW1xuICAgIEpoaURhdGFVdGlscyxcbiAgICBKaGlEYXRlVXRpbHMsXG4gICAgSmhpRXZlbnRNYW5hZ2VyLFxuICAgIEpoaVBhcnNlTGlua3MsXG4gICAgSmhpUGFnaW5hdGlvblV0aWwsXG4gICAgSmhpQmFzZTY0U2VydmljZSxcbiAgICBKaGlBbGVydFNlcnZpY2Vcbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvamhpLWNvbXBvbmVudHMudHMiLCIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyLCBNaXNzaW5nVHJhbnNsYXRpb25IYW5kbGVyUGFyYW1zIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBKaGlDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgSmhpTWlzc2luZ1RyYW5zbGF0aW9uSGFuZGxlciBpbXBsZW1lbnRzIE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU2VydmljZTogSmhpQ29uZmlnU2VydmljZSkge31cblxuICAgIGhhbmRsZShwYXJhbXM6IE1pc3NpbmdUcmFuc2xhdGlvbkhhbmRsZXJQYXJhbXMpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gcGFyYW1zLmtleTtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29uZmlnU2VydmljZS5nZXRDb25maWcoKS5ub2kxOG5NZXNzYWdlfVske2tleX1dYDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbGFuZ3VhZ2UvamhpLW1pc3NpbmctdHJhbnNsYXRpb24uY29uZmlnLnRzIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgd3JhcHBlciBkaXJlY3RpdmUgb24gdG9wIG9mIHRoZSB0cmFuc2xhdGUgcGlwZSBhcyB0aGUgaW5idWlsdCB0cmFuc2xhdGUgZGlyZWN0aXZlIGZyb20gbmd4LXRyYW5zbGF0ZSBpcyB0b28gdmVyYm9zZSBhbmQgYnVnZ3lcbiAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW2poaVRyYW5zbGF0ZV0nLFxuICAgIHRlbXBsYXRlOiAnPHNwYW4gW2lubmVySFRNTF09XCJqaGlUcmFuc2xhdGUgfCB0cmFuc2xhdGU6dHJhbnNsYXRlVmFsdWVzXCI+PC9zcGFuPidcbn0pXG5leHBvcnQgY2xhc3MgSmhpVHJhbnNsYXRlQ29tcG9uZW50IHtcblxuICAgIEBJbnB1dCgpIGpoaVRyYW5zbGF0ZTogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgdHJhbnNsYXRlVmFsdWVzOiBhbnk7XG59XG4vKiB0c2xpbnQ6ZW5hYmxlICovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbGFuZ3VhZ2UvamhpLXRyYW5zbGF0ZS5kaXJlY3RpdmUudHMiLCIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IEpoaUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKaGlMYW5ndWFnZVNlcnZpY2Uge1xuXG4gICAgY3VycmVudExhbmcgPSAnZW4nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IEpoaUNvbmZpZ1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygpO1xuICAgICAgICB0aGlzLmN1cnJlbnRMYW5nID0gY29uZmlnLmRlZmF1bHRJMThuTGFuZztcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLnNldERlZmF1bHRMYW5nKHRoaXMuY3VycmVudExhbmcpO1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UudXNlKHRoaXMuY3VycmVudExhbmcpO1xuICAgIH1cblxuICAgIGNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50TGFuZyA9IGxhbmd1YWdlS2V5O1xuICAgICAgICB0aGlzLmNvbmZpZ1NlcnZpY2UuQ09ORklHX09QVElPTlMuZGVmYXVsdEkxOG5MYW5nID0gbGFuZ3VhZ2VLZXk7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS51c2UodGhpcy5jdXJyZW50TGFuZyk7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY3VycmVudExhbmcpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9sYW5ndWFnZS9sYW5ndWFnZS5zZXJ2aWNlLnRzIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6ICdjYXBpdGFsaXplJ30pXG5leHBvcnQgY2xhc3MgSmhpQ2FwaXRhbGl6ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtICB7XG5cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmIChpbnB1dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnB1dC5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIGlucHV0LnN1YnN0cmluZygxKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcGlwZS9jYXBpdGFsaXplLnBpcGUudHMiLCIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtuYW1lOiAna2V5cyd9KVxuZXhwb3J0IGNsYXNzIEpoaUtleXNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZSwgYXJnczogc3RyaW5nW10pOiBhbnkge1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBjb25zdCB2YWx1ZUtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IHZhbHVlS2V5c1tpXTtcbiAgICAgIGtleXMucHVzaCh7a2V5LCB2YWx1ZTogdmFsdWVba2V5XX0pO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3BpcGUva2V5cy5waXBlLnRzIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7bmFtZTogJ29yZGVyQnknfSlcbmV4cG9ydCBjbGFzcyBKaGlPcmRlckJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh2YWx1ZXM6IGFueVtdLCBwcmVkaWNhdGUgPSAnJywgcmV2ZXJzZSA9IGZhbHNlKTogYW55IHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiByZXZlcnNlID8gdmFsdWVzLnNvcnQoKS5yZXZlcnNlKCkgOiB2YWx1ZXMuc29ydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGFbcHJlZGljYXRlXSA8IGJbcHJlZGljYXRlXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXZlcnNlID8gMSA6IC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChiW3ByZWRpY2F0ZV0gPCBhW3ByZWRpY2F0ZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2ZXJzZSA/IC0xIDogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcGlwZS9vcmRlci1ieS5waXBlLnRzIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSmhpRmlsdGVyUGlwZSB9IGZyb20gJy4vZmlsdGVyLnBpcGUnO1xuXG5AUGlwZSh7IG5hbWU6ICdwdXJlRmlsdGVyJyB9KVxuZXhwb3J0IGNsYXNzIEpoaVB1cmVGaWx0ZXJQaXBlIGV4dGVuZHMgSmhpRmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybShpbnB1dDogQXJyYXk8YW55PiwgZmlsdGVyOiBzdHJpbmcsIGZpZWxkOiBzdHJpbmcpOiBhbnkge1xuICAgICAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKGlucHV0LCBmaWx0ZXIsIGZpZWxkKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvcGlwZS9wdXJlLWZpbHRlci5waXBlLnRzIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6ICd0cnVuY2F0ZUNoYXJhY3RlcnMnfSlcbmV4cG9ydCBjbGFzcyBKaGlUcnVuY2F0ZUNoYXJhY3RlcnNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZywgY2hhcnM6IG51bWJlciwgYnJlYWtPbldvcmQ/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGlzTmFOKGNoYXJzKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFycyA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0Lmxlbmd0aCA+IGNoYXJzKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnN1YnN0cmluZygwLCBjaGFycyk7XG5cbiAgICAgICAgICAgIGlmICghYnJlYWtPbldvcmQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0c3BhY2UgPSBpbnB1dC5sYXN0SW5kZXhPZignICcpO1xuICAgICAgICAgICAgICAgIC8vIEdldCBsYXN0IHNwYWNlXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RzcGFjZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5zdWJzdHIoMCwgbGFzdHNwYWNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChpbnB1dC5jaGFyQXQoaW5wdXQubGVuZ3RoIC0gMSkgPT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IGlucHV0LnN1YnN0cigwLCBpbnB1dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgKyAnLi4uJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3BpcGUvdHJ1bmNhdGUtY2hhcmFjdGVycy5waXBlLnRzIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6ICd0cnVuY2F0ZVdvcmRzJ30pXG5leHBvcnQgY2xhc3MgSmhpVHJ1bmNhdGVXb3Jkc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtICB7XG5cbiAgICB0cmFuc2Zvcm0oaW5wdXQ6IHN0cmluZywgd29yZHM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGlmIChpc05hTih3b3JkcykpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfVxuICAgICAgICBpZiAod29yZHMgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRXb3JkcyA9IGlucHV0LnNwbGl0KC9cXHMrLyk7XG4gICAgICAgICAgICBpZiAoaW5wdXRXb3Jkcy5sZW5ndGggPiB3b3Jkcykge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gaW5wdXRXb3Jkcy5zbGljZSgwLCB3b3Jkcykuam9pbignICcpICsgJy4uLic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3BpcGUvdHJ1bmNhdGUtd29yZHMucGlwZS50cyIsIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly9qaGlwc3Rlci5naXRodWIuaW8vXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUsIFNhbml0aXplciwgU2VjdXJpdHlDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmltcG9ydCB7IEpoaUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9jb25maWcuc2VydmljZSc7XG5cbmV4cG9ydCB0eXBlIEpoaUFsZXJ0VHlwZSA9ICAnc3VjY2VzcycgfCAnZGFuZ2VyJyB8ICd3YXJuaW5nJyB8ICdpbmZvJztcblxuZXhwb3J0IGludGVyZmFjZSBKaGlBbGVydCB7XG4gICAgaWQ/OiBudW1iZXI7XG4gICAgdHlwZTogSmhpQWxlcnRUeXBlO1xuICAgIG1zZzogc3RyaW5nO1xuICAgIHBhcmFtcz86IGFueTtcbiAgICB0aW1lb3V0PzogbnVtYmVyO1xuICAgIHRvYXN0PzogYm9vbGVhbjtcbiAgICBwb3NpdGlvbj86IHN0cmluZztcbiAgICBzY29wZWQ/OiBib29sZWFuO1xuICAgIGNsb3NlPzogKGFsZXJ0czogSmhpQWxlcnRbXSkgPT4gdm9pZDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpoaUFsZXJ0U2VydmljZSB7XG5cbiAgICBwcml2YXRlIGFsZXJ0SWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGFsZXJ0czogSmhpQWxlcnRbXTtcbiAgICBwcml2YXRlIHRpbWVvdXQ6IG51bWJlcjtcbiAgICBwcml2YXRlIHRvYXN0OiBib29sZWFuO1xuICAgIHByaXZhdGUgaTE4bkVuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IFNhbml0aXplcixcbiAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBKaGlDb25maWdTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldENvbmZpZygpO1xuICAgICAgICB0aGlzLnRvYXN0ID0gY29uZmlnLmFsZXJ0QXNUb2FzdDtcbiAgICAgICAgdGhpcy5pMThuRW5hYmxlZCA9IGNvbmZpZy5pMThuRW5hYmxlZDtcbiAgICAgICAgdGhpcy5hbGVydElkID0gMDsgLy8gdW5pcXVlIGlkIGZvciBlYWNoIGFsZXJ0LiBTdGFydHMgZnJvbSAwLlxuICAgICAgICB0aGlzLmFsZXJ0cyA9IFtdO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSA1MDAwOyAvLyBkZWZhdWx0IHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzXG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgdGhpcy5hbGVydHMuc3BsaWNlKDAsIHRoaXMuYWxlcnRzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgZ2V0KCk6IEpoaUFsZXJ0W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGVydHM7XG4gICAgfVxuXG4gICAgc3VjY2Vzcyhtc2c6IHN0cmluZywgcGFyYW1zPzogYW55LCBwb3NpdGlvbj86IHN0cmluZyk6IEpoaUFsZXJ0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQWxlcnQoe1xuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgbXNnLFxuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICAgICAgdG9hc3Q6IHRoaXMuaXNUb2FzdCgpLFxuICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIGVycm9yKG1zZzogc3RyaW5nLCBwYXJhbXM/OiBhbnksIHBvc2l0aW9uPzogc3RyaW5nKTogSmhpQWxlcnQge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgIG1zZyxcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcbiAgICAgICAgICAgIHRvYXN0OiB0aGlzLmlzVG9hc3QoKSxcbiAgICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG5cbiAgICB3YXJuaW5nKG1zZzogc3RyaW5nLCBwYXJhbXM/OiBhbnksIHBvc2l0aW9uPzogc3RyaW5nKTogSmhpQWxlcnQge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRBbGVydCh7XG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgICAgICBtc2csXG4gICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICB0aW1lb3V0OiB0aGlzLnRpbWVvdXQsXG4gICAgICAgICAgICB0b2FzdDogdGhpcy5pc1RvYXN0KCksXG4gICAgICAgICAgICBwb3NpdGlvblxuICAgICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgaW5mbyhtc2c6IHN0cmluZywgcGFyYW1zPzogYW55LCBwb3NpdGlvbj86IHN0cmluZyk6IEpoaUFsZXJ0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQWxlcnQoe1xuICAgICAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgICAgICAgbXNnLFxuICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICAgICAgdG9hc3Q6IHRoaXMuaXNUb2FzdCgpLFxuICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmFjdG9yeShhbGVydE9wdGlvbnM6IEpoaUFsZXJ0KTogSmhpQWxlcnQge1xuICAgICAgICBjb25zdCBhbGVydDogSmhpQWxlcnQgPSB7XG4gICAgICAgICAgICB0eXBlOiBhbGVydE9wdGlvbnMudHlwZSxcbiAgICAgICAgICAgIG1zZzogdGhpcy5zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIGFsZXJ0T3B0aW9ucy5tc2cpLFxuICAgICAgICAgICAgaWQ6IGFsZXJ0T3B0aW9ucy5pZCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IGFsZXJ0T3B0aW9ucy50aW1lb3V0LFxuICAgICAgICAgICAgdG9hc3Q6IGFsZXJ0T3B0aW9ucy50b2FzdCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhbGVydE9wdGlvbnMucG9zaXRpb24gPyBhbGVydE9wdGlvbnMucG9zaXRpb24gOiAndG9wIHJpZ2h0JyxcbiAgICAgICAgICAgIHNjb3BlZDogYWxlcnRPcHRpb25zLnNjb3BlZCxcbiAgICAgICAgICAgIGNsb3NlOiAoYWxlcnRzOiBKaGlBbGVydFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2VBbGVydChhbGVydE9wdGlvbnMuaWQsIGFsZXJ0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmICghYWxlcnQuc2NvcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0cy5wdXNoKGFsZXJ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxlcnQ7XG4gICAgfVxuXG4gICAgYWRkQWxlcnQoYWxlcnRPcHRpb25zOiBKaGlBbGVydCwgZXh0QWxlcnRzOiBKaGlBbGVydFtdKTogSmhpQWxlcnQge1xuICAgICAgICBhbGVydE9wdGlvbnMuaWQgPSB0aGlzLmFsZXJ0SWQrKztcbiAgICAgICAgaWYgKHRoaXMuaTE4bkVuYWJsZWQgJiYgYWxlcnRPcHRpb25zLm1zZykge1xuICAgICAgICAgICAgYWxlcnRPcHRpb25zLm1zZyA9IHRoaXMudHJhbnNsYXRlU2VydmljZS5pbnN0YW50KGFsZXJ0T3B0aW9ucy5tc2csIGFsZXJ0T3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gdGhpcy5mYWN0b3J5KGFsZXJ0T3B0aW9ucyk7XG4gICAgICAgIGlmIChhbGVydE9wdGlvbnMudGltZW91dCAmJiBhbGVydE9wdGlvbnMudGltZW91dCA+IDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VBbGVydChhbGVydE9wdGlvbnMuaWQsIGV4dEFsZXJ0cyk7XG4gICAgICAgICAgICB9LCBhbGVydE9wdGlvbnMudGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsZXJ0O1xuICAgIH1cblxuICAgIGNsb3NlQWxlcnQoaWQ6IG51bWJlciwgZXh0QWxlcnRzPzogSmhpQWxlcnRbXSk6IGFueSB7XG4gICAgICAgIGNvbnN0IHRoaXNBbGVydHM6IEpoaUFsZXJ0W10gPSAoZXh0QWxlcnRzICYmIGV4dEFsZXJ0cy5sZW5ndGggPiAwKSA/IGV4dEFsZXJ0cyA6IHRoaXMuYWxlcnRzO1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZUFsZXJ0QnlJbmRleCh0aGlzQWxlcnRzLm1hcCgoZSkgPT4gZS5pZCkuaW5kZXhPZihpZCksIHRoaXNBbGVydHMpO1xuICAgIH1cblxuICAgIGNsb3NlQWxlcnRCeUluZGV4KGluZGV4OiBudW1iZXIsIHRoaXNBbGVydHM6IEpoaUFsZXJ0W10pOiBKaGlBbGVydFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXNBbGVydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBpc1RvYXN0KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy50b2FzdDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZS9hbGVydC5zZXJ2aWNlLnRzIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyogdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpQmFzZTY0U2VydmljZSB7XG4gICAgcHJpdmF0ZSBrZXlTdHI6IHN0cmluZyA9ICdBQkNERUZHSElKS0xNTk9QJyArXG4gICAgICAgICdRUlNUVVZXWFlaYWJjZGVmJyArXG4gICAgICAgICdnaGlqa2xtbm9wcXJzdHV2JyArXG4gICAgICAgICd3eHl6MDEyMzQ1Njc4OSsvJyArXG4gICAgICAgICc9JztcblxuICAgIGVuY29kZShpbnB1dCkge1xuICAgICAgICBsZXQgb3V0cHV0ID0gJyc7XG4gICAgICAgIGxldCBlbmMxOiBhbnkgPSAnJztcbiAgICAgICAgbGV0IGVuYzI6IGFueSA9ICcnO1xuICAgICAgICBsZXQgZW5jMzogYW55ID0gJyc7XG4gICAgICAgIGxldCBlbmM0OiBhbnkgPSAnJztcbiAgICAgICAgbGV0IGNocjE6IGFueSA9ICcnO1xuICAgICAgICBsZXQgY2hyMjogYW55ID0gJyc7XG4gICAgICAgIGxldCBjaHIzOiBhbnkgPSAnJztcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuICAgICAgICAgICAgY2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgICAgICAgIGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICAgICAgICAgIGVuYzEgPSBjaHIxID4+IDI7XG4gICAgICAgICAgICBlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcbiAgICAgICAgICAgIGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcbiAgICAgICAgICAgIGVuYzQgPSBjaHIzICYgNjM7XG5cbiAgICAgICAgICAgIGlmIChpc05hTihjaHIyKSkge1xuICAgICAgICAgICAgICAgIGVuYzMgPSBlbmM0ID0gNjQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzTmFOKGNocjMpKSB7XG4gICAgICAgICAgICAgICAgZW5jNCA9IDY0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQgK1xuICAgICAgICAgICAgICAgIHRoaXMua2V5U3RyLmNoYXJBdChlbmMxKSArXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlTdHIuY2hhckF0KGVuYzIpICtcbiAgICAgICAgICAgICAgICB0aGlzLmtleVN0ci5jaGFyQXQoZW5jMykgK1xuICAgICAgICAgICAgICAgIHRoaXMua2V5U3RyLmNoYXJBdChlbmM0KTtcbiAgICAgICAgICAgIGNocjEgPSBjaHIyID0gY2hyMyA9ICcnO1xuICAgICAgICAgICAgZW5jMSA9IGVuYzIgPSBlbmMzID0gZW5jNCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cbiAgICBkZWNvZGUoaW5wdXQpIHtcbiAgICAgICAgbGV0IG91dHB1dCA9ICcnO1xuICAgICAgICBsZXQgZW5jMTogYW55ID0gJyc7XG4gICAgICAgIGxldCBlbmMyOiBhbnkgPSAnJztcbiAgICAgICAgbGV0IGVuYzM6IGFueSA9ICcnO1xuICAgICAgICBsZXQgZW5jNDogYW55ID0gJyc7XG4gICAgICAgIGxldCBjaHIxOiBhbnkgPSAnJztcbiAgICAgICAgbGV0IGNocjI6IGFueSA9ICcnO1xuICAgICAgICBsZXQgY2hyMzogYW55ID0gJyc7XG4gICAgICAgIGxldCBpID0gMDtcblxuICAgICAgICAvLyByZW1vdmUgYWxsIGNoYXJhY3RlcnMgdGhhdCBhcmUgbm90IEEtWiwgYS16LCAwLTksICssIC8sIG9yID1cbiAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgJycpO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbmMxID0gdGhpcy5rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICAgICAgICBlbmMyID0gdGhpcy5rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICAgICAgICBlbmMzID0gdGhpcy5rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICAgICAgICBlbmM0ID0gdGhpcy5rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG5cbiAgICAgICAgICAgIGNocjEgPSAoZW5jMSA8PCAyKSB8IChlbmMyID4+IDQpO1xuICAgICAgICAgICAgY2hyMiA9ICgoZW5jMiAmIDE1KSA8PCA0KSB8IChlbmMzID4+IDIpO1xuICAgICAgICAgICAgY2hyMyA9ICgoZW5jMyAmIDMpIDw8IDYpIHwgZW5jNDtcblxuICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIxKTtcblxuICAgICAgICAgICAgaWYgKGVuYzMgIT09IDY0KSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbmM0ICE9PSA2NCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNocjEgPSBjaHIyID0gY2hyMyA9ICcnO1xuICAgICAgICAgICAgZW5jMSA9IGVuYzIgPSBlbmMzID0gZW5jNCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZS9iYXNlNjQuc2VydmljZS50cyIsIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly9qaGlwc3Rlci5naXRodWIuaW8vXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBbiB1dGlsaXR5IHNlcnZpY2UgZm9yIGRhdGEuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKaGlEYXRhVXRpbHMge1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIGFiYnJldmlhdGUgdGhlIHRleHQgZ2l2ZW5cbiAgICAgKi9cbiAgICBhYmJyZXZpYXRlKHRleHQ6IHN0cmluZywgYXBwZW5kID0gJy4uLicpIHtcblxuICAgICAgICBpZiAodGV4dC5sZW5ndGggPCAzMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHQgPyAodGV4dC5zdWJzdHJpbmcoMCwgMTUpICsgYXBwZW5kICsgdGV4dC5zbGljZSgtMTApKSA6ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBmaW5kIHRoZSBieXRlIHNpemUgb2YgdGhlIHN0cmluZyBwcm92aWRlc1xuICAgICAqL1xuICAgIGJ5dGVTaXplKGJhc2U2NFN0cmluZzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdEFzQnl0ZXModGhpcy5zaXplKGJhc2U2NFN0cmluZykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBvcGVuIGZpbGVcbiAgICAgKi9cbiAgICBvcGVuRmlsZShjb250ZW50VHlwZTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZmlsZVVSTCA9IGBkYXRhOiR7Y29udGVudFR5cGV9O2Jhc2U2NCwke2RhdGF9YDtcbiAgICAgICAgY29uc3Qgd2luID0gd2luZG93Lm9wZW4oKTtcbiAgICAgICAgd2luLmRvY3VtZW50LndyaXRlKFxuICAgICAgICAgICAgJzxpZnJhbWUgc3JjPVwiJyArIGZpbGVVUkwgKyAnXCIgZnJhbWVib3JkZXI9XCIwXCIgc3R5bGU9XCJib3JkZXI6MDsgdG9wOjBweDsgbGVmdDowcHg7IGJvdHRvbTowcHg7IHJpZ2h0OjBweDsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7XCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBjb252ZXJ0IHRoZSBmaWxlIHRvIGJhc2U2NFxuICAgICAqL1xuICAgIHRvQmFzZTY0KGZpbGU6IEZpbGUsIGNiOiBGdW5jdGlvbikge1xuICAgICAgICBjb25zdCBmaWxlUmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGU6IGFueSkge1xuICAgICAgICAgICAgY29uc3QgYmFzZTY0RGF0YSA9IGUudGFyZ2V0LnJlc3VsdC5zdWJzdHIoZS50YXJnZXQucmVzdWx0LmluZGV4T2YoJ2Jhc2U2NCwnKSArICdiYXNlNjQsJy5sZW5ndGgpO1xuICAgICAgICAgICAgY2IoYmFzZTY0RGF0YSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIGNsZWFyIHRoZSBpbnB1dFxuICAgICAqL1xuICAgIGNsZWFySW5wdXRJbWFnZShlbnRpdHk6IGFueSwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgZmllbGQ6IHN0cmluZywgZmllbGRDb250ZW50VHlwZTogc3RyaW5nLCBpZElucHV0OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudFJlZik7XG4gICAgICAgIGNvbnNvbGUubG9nKGVudGl0eSk7XG4gICAgICAgIGlmIChlbnRpdHkgJiYgZmllbGQgJiYgZmllbGRDb250ZW50VHlwZSkge1xuICAgICAgICAgICAgaWYgKGVudGl0eS5oYXNPd25Qcm9wZXJ0eShmaWVsZCkpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHlbZmllbGRdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbnRpdHkuaGFzT3duUHJvcGVydHkoZmllbGRDb250ZW50VHlwZSkpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHlbZmllbGRDb250ZW50VHlwZV0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnRSZWYgJiYgaWRJbnB1dCAmJiBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBpZElucHV0KSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGlkSW5wdXQpLnZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZW5kc1dpdGgoc3VmZml4OiBzdHJpbmcsIHN0cjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBzdHIuaW5kZXhPZihzdWZmaXgsIHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwYWRkaW5nU2l6ZSh2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kc1dpdGgoJz09JywgdmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbmRzV2l0aCgnPScsIHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaXplKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoIC8gNCAqIDMgLSB0aGlzLnBhZGRpbmdTaXplKHZhbHVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvcm1hdEFzQnl0ZXMoc2l6ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHNpemUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnICcpICsgJyBieXRlcyc7XG4gICAgfVxuXG4gICAgc2V0RmlsZURhdGEoZXZlbnQsIGVudGl0eSwgZmllbGQ6IHN0cmluZywgaXNJbWFnZTogYm9vbGVhbikge1xuICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0LmZpbGVzICYmIGV2ZW50LnRhcmdldC5maWxlc1swXSkge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgICAgIGlmIChpc0ltYWdlICYmICEvXmltYWdlXFwvLy50ZXN0KGZpbGUudHlwZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRvQmFzZTY0KGZpbGUsIChiYXNlNjREYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZW50aXR5W2ZpZWxkXSA9IGJhc2U2NERhdGE7XG4gICAgICAgICAgICAgICAgZW50aXR5W2Ake2ZpZWxkfUNvbnRlbnRUeXBlYF0gPSBmaWxlLnR5cGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlL2RhdGEtdXRpbC5zZXJ2aWNlLnRzIiwiLypcbiBDb3B5cmlnaHQgMjAxMy0yMDE3IHRoZSBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyBmcm9tIHRoZSBKSGlwc3RlciBwcm9qZWN0LlxuXG4gVGhpcyBmaWxlIGlzIHBhcnQgb2YgdGhlIEpIaXBzdGVyIHByb2plY3QsIHNlZSBodHRwczovL2poaXBzdGVyLmdpdGh1Yi5pby9cbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEFuIHV0aWxpdHkgc2VydmljZSBmb3IgZGF0ZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpoaURhdGVVdGlscyB7XG5cbiAgICBwcml2YXRlIHBhdHRlcm4gPSAneXl5eS1NTS1kZCc7XG5cbiAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGVQaXBlID0gbmV3IERhdGVQaXBlKCdlbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBjb252ZXJ0IHRoZSBkYXRlIHRpbWUgZnJvbSBzZXJ2ZXIgaW50byBKUyBkYXRlIG9iamVjdFxuICAgICAqL1xuICAgIGNvbnZlcnREYXRlVGltZUZyb21TZXJ2ZXIoZGF0ZTogYW55KSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBjb252ZXJ0IHRoZSBkYXRlIGZyb20gc2VydmVyIGludG8gSlMgZGF0ZSBvYmplY3RcbiAgICAgKi9cbiAgICBjb252ZXJ0TG9jYWxEYXRlRnJvbVNlcnZlcihkYXRlOiBhbnkpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXRlLnNwbGl0KCctJyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVN0cmluZ1swXSwgZGF0ZVN0cmluZ1sxXSAtIDEsIGRhdGVTdHJpbmdbMl0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBjb252ZXJ0IHRoZSBKUyBkYXRlIG9iamVjdCBpbnRvIHNwZWNpZmllZCBkYXRlIHBhdHRlcm5cbiAgICAgKi9cbiAgICBjb252ZXJ0TG9jYWxEYXRlVG9TZXJ2ZXIoZGF0ZTogYW55LCBwYXR0ZXJuID0gdGhpcy5wYXR0ZXJuKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKG5ld0RhdGUsIHBhdHRlcm4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gZ2V0IHRoZSBkZWZhdWx0IGRhdGUgcGF0dGVyblxuICAgICAqL1xuICAgIGRhdGVmb3JtYXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdHRlcm47XG4gICAgfVxuXG4gICAgLy8gVE9ETyBDaGFuZ2UgdGhpcyBtZXRob2Qgd2hlbiBtb3ZpbmcgZnJvbSBkYXRldGltZS1sb2NhbCBpbnB1dCB0byBOZ2JEYXRlUGlja2VyXG4gICAgdG9EYXRlKGRhdGU6IGFueSk6IERhdGUge1xuICAgICAgICBpZiAoZGF0ZSA9PT0gdW5kZWZpbmVkIHx8IGRhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGVQYXJ0cyA9IGRhdGUuc3BsaXQoL1xcRCsvKTtcbiAgICAgICAgaWYgKGRhdGVQYXJ0cy5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlUGFydHNbMF0sIGRhdGVQYXJ0c1sxXSAtIDEsIGRhdGVQYXJ0c1syXSwgZGF0ZVBhcnRzWzNdLCBkYXRlUGFydHNbNF0sIGRhdGVQYXJ0c1s1XSwgZGF0ZVBhcnRzWzZdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZVBhcnRzLmxlbmd0aCA9PT0gNikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVQYXJ0c1swXSwgZGF0ZVBhcnRzWzFdIC0gMSwgZGF0ZVBhcnRzWzJdLCBkYXRlUGFydHNbM10sIGRhdGVQYXJ0c1s0XSwgZGF0ZVBhcnRzWzVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVBhcnRzWzBdLCBkYXRlUGFydHNbMV0gLSAxLCBkYXRlUGFydHNbMl0sIGRhdGVQYXJ0c1szXSwgZGF0ZVBhcnRzWzRdKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZS9kYXRlLXV0aWwuc2VydmljZS50cyIsIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly9qaGlwc3Rlci5naXRodWIuaW8vXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMvUngnO1xuXG4vKipcbiAqIEFuIHV0aWxpdHkgY2xhc3MgdG8gbWFuYWdlIFJYIGV2ZW50c1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpRXZlbnRNYW5hZ2VyIHtcblxuICAgIG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PjtcbiAgICBvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9ic2VydmFibGUgPSBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICAgICAgfSkuc2hhcmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gYnJvYWRjYXN0IHRoZSBldmVudCB0byBvYnNlcnZlclxuICAgICAqL1xuICAgIGJyb2FkY2FzdChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlciAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLm5leHQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIHN1YnNjcmliZSB0byBhbiBldmVudCB3aXRoIGNhbGxiYWNrXG4gICAgICovXG4gICAgc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlcjogU3Vic2NyaXB0aW9uID0gdGhpcy5vYnNlcnZhYmxlLmZpbHRlcigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBldmVudC5uYW1lID09PSBldmVudE5hbWU7XG4gICAgICAgIH0pLnN1YnNjcmliZShjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byB1bnN1YnNjcmliZSB0aGUgc3Vic2NyaXB0aW9uXG4gICAgICovXG4gICAgZGVzdHJveShzdWJzY3JpYmVyOiBTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgc3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlL2V2ZW50LW1hbmFnZXIuc2VydmljZS50cyIsIi8qXG4gQ29weXJpZ2h0IDIwMTMtMjAxNyB0aGUgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgZnJvbSB0aGUgSkhpcHN0ZXIgcHJvamVjdC5cblxuIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIHRoZSBKSGlwc3RlciBwcm9qZWN0LCBzZWUgaHR0cHM6Ly9qaGlwc3Rlci5naXRodWIuaW8vXG4gZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBBbiB1dGlsaXR5IHNlcnZpY2UgZm9yIHBhZ2luYXRpb25cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEpoaVBhZ2luYXRpb25VdGlsICB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gZmluZCB3aGV0aGVyIHRoZSBzb3J0IGlzIGRlZmluZWRcbiAgICAgKi9cbiAgICBwYXJzZUFzY2VuZGluZyhzb3J0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHNvcnRBcnJheSA9IHNvcnQuc3BsaXQoJywnKTtcbiAgICAgICAgc29ydEFycmF5ID0gc29ydEFycmF5Lmxlbmd0aCA+IDEgPyBzb3J0QXJyYXkgOiBzb3J0LnNwbGl0KCclMkMnKTtcbiAgICAgICAgaWYgKHNvcnRBcnJheS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydEFycmF5LnNsaWNlKC0xKVswXSA9PT0gJ2FzYyc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZGVmYXVsdCB0byB0cnVlIGlmIG5vIHNvcnQgaXMgZGVmaW5lZFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gcXVlcnkgcGFyYW1zIGFyZSBzdHJpbmdzLCBhbmQgbmVlZCB0byBiZSBwYXJzZWRcbiAgICAgKi9cbiAgICBwYXJzZVBhZ2UocGFnZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHBhZ2UsIDEwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNZXRob2QgdG8gc29ydCBjYW4gYmUgaW4gdGhlIGZvcm1hdCBgaWQsYXNjYCBvciBgaWRgXG4gICAgICovXG4gICAgcGFyc2VQcmVkaWNhdGUoc29ydDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHNvcnQuc3BsaXQoJywnKVswXS5zcGxpdCgnJTJDJylbMF07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2UvcGFnaW5hdGlvbi11dGlsLnNlcnZpY2UudHMiLCIvKlxuIENvcHlyaWdodCAyMDEzLTIwMTcgdGhlIG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzIGZyb20gdGhlIEpIaXBzdGVyIHByb2plY3QuXG5cbiBUaGlzIGZpbGUgaXMgcGFydCBvZiB0aGUgSkhpcHN0ZXIgcHJvamVjdCwgc2VlIGh0dHBzOi8vamhpcHN0ZXIuZ2l0aHViLmlvL1xuIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQW4gdXRpbGl0eSBzZXJ2aWNlIGZvciBsaW5rIHBhcnNpbmcuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKaGlQYXJzZUxpbmtzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIC8qKlxuICAgICAqIE1ldGhvZCB0byBwYXJzZSB0aGUgbGlua3NcbiAgICAgKi9cbiAgICBwYXJzZShoZWFkZXI6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGlmIChoZWFkZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lucHV0IG11c3Qgbm90IGJlIG9mIHplcm8gbGVuZ3RoJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTcGxpdCBwYXJ0cyBieSBjb21tYVxuICAgICAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBoZWFkZXIuc3BsaXQoJywnKTtcbiAgICAgICAgY29uc3QgbGlua3M6IGFueSA9IHt9O1xuXG4gICAgICAgIC8vIFBhcnNlIGVhY2ggcGFydCBpbnRvIGEgbmFtZWQgbGlua1xuICAgICAgICBwYXJ0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uOiBzdHJpbmdbXSA9IHAuc3BsaXQoJzsnKTtcblxuICAgICAgICAgICAgaWYgKHNlY3Rpb24ubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZWN0aW9uIGNvdWxkIG5vdCBiZSBzcGxpdCBvbiBcIjtcIicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB1cmw6IHN0cmluZyA9IHNlY3Rpb25bMF0ucmVwbGFjZSgvPCguKik+LywgJyQxJykudHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcXVlcnlTdHJpbmc6IGFueSA9IHt9O1xuXG4gICAgICAgICAgICB1cmwucmVwbGFjZShcbiAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKCcoW14/PSZdKykoPShbXiZdKikpPycsICdnJyksXG4gICAgICAgICAgICAgICAgKCQwLCAkMSwgJDIsICQzKSA9PiBxdWVyeVN0cmluZ1skMV0gPSAkM1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbGV0IHBhZ2U6IGFueSA9IHF1ZXJ5U3RyaW5nLnBhZ2U7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBwYWdlID0gcGFyc2VJbnQocGFnZSwgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSBzZWN0aW9uWzFdLnJlcGxhY2UoL3JlbD1cIiguKilcIi8sICckMScpLnRyaW0oKTtcbiAgICAgICAgICAgIGxpbmtzW25hbWVdID0gcGFnZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaW5rcztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZS9wYXJzZS1saW5rcy5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzUzX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81NF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9vZlwiXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NvbmNhdFwiXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTZfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21lcmdlXCJcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81N19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIlxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU4X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIlxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzU5X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90YWtlXCJcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82MF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheVwiXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9