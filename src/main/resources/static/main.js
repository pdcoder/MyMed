(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animate/animate.component.css":
/*!***********************************************!*\
  !*** ./src/app/animate/animate.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/animate/animate.component.html":
/*!************************************************!*\
  !*** ./src/app/animate/animate.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  animate works!\n</p>\n"

/***/ }),

/***/ "./src/app/animate/animate.component.ts":
/*!**********************************************!*\
  !*** ./src/app/animate/animate.component.ts ***!
  \**********************************************/
/*! exports provided: AnimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateComponent", function() { return AnimateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimateComponent = /** @class */ (function () {
    function AnimateComponent(el) {
        this.el = el;
        this.currentstate = '';
    }
    AnimateComponent.prototype.ngOnInit = function () {
        this.currentstate = 'initial';
    };
    AnimateComponent.prototype.onMouseOver = function () {
        this.currentstate = 'initial';
    };
    AnimateComponent.prototype.onMouseOut = function () {
        this.currentstate = 'final';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AnimateComponent.prototype, "onMouseOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AnimateComponent.prototype, "onMouseOut", null);
    AnimateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animate',
            template: __webpack_require__(/*! ./animate.component.html */ "./src/app/animate/animate.component.html"),
            styles: [__webpack_require__(/*! ./animate.component.css */ "./src/app/animate/animate.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('hover', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        boxShadow: 'none'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        boxShadow: '1px 1px 2px black, 0 0 10px blue, 0 0 5px darkblue'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0ms ease')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0ms 200ms ease'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AnimateComponent);
    return AnimateComponent;
}());



/***/ }),

/***/ "./src/app/app-error-handler.ts":
/*!**************************************!*\
  !*** ./src/app/app-error-handler.ts ***!
  \**************************************/
/*! exports provided: AppErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function() { return AppErrorHandler; });
var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        console.log(error);
    };
    return AppErrorHandler;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _individual_med_individual_med_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./individual-med/individual-med.component */ "./src/app/individual-med/individual-med.component.ts");
/* harmony import */ var _doc_list_doc_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doc-list/doc-list.component */ "./src/app/doc-list/doc-list.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'medicine/:id', component: _individual_med_individual_med_component__WEBPACK_IMPORTED_MODULE_6__["IndividualMedComponent"] },
    { path: 'doclist', component: _doc_list_doc_list_component__WEBPACK_IMPORTED_MODULE_7__["DocListComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: 'home', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  padding: 0;\n}\n.example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.sidenav{\n  width: 65%;\n}\n.cart{\n  float: right;\n  margin-bottom: 20px;\n}\n.sidenav::after {\n  content: \"\";\n  background: url('medicalDirectors.jpg');\n  background-position: center;\n  background-size: cover;\n  opacity: 0.3;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  z-index: -1;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav mode=\"over\" class=\"sidenav\"\n             >\n    <mat-list>\n        <mat-list-item *ngIf=\"isAuthenticated\">\n          <a mat-button routerLink=\"/home\" routerLinkActive=\"mat-accent\">My Account</a>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"isAuthenticated\">\n          <a mat-button routerLink=\"/doclist\" routerLinkActive=\"mat-accent\">Book Doc</a>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"!isAuthenticated\">\n          <a mat-button routerLink=\"/login\" routerLinkActive=\"mat-accent\">Login</a>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"!isAuthenticated\">\n          <a mat-button routerLink=\"/signup\" routerLinkActive=\"mat-accent\">Signup</a>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"isAuthenticated\">\n          <button mat-button (click)=\"logout()\">Logout</button>\n        </mat-list-item>\n        <mat-list-item *ngIf=\"isAuthenticated\">\n          <app-cart></app-cart>\n        </mat-list-item>\n    </mat-list>\n  </mat-sidenav>\n\n\n  <mat-sidenav-content>\n    <app-header (clickEvent)=\"sidenav.toggle()\"></app-header>\n    <router-outlet>\n      <ng4-loading-spinner> </ng4-loading-spinner>\n\n    </router-outlet>\n    <app-footer></app-footer>\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.error.ts":
/*!******************************!*\
  !*** ./src/app/app.error.ts ***!
  \******************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
var AppError = /** @class */ (function () {
    function AppError(originalerror) {
        this.originalerror = originalerror;
        this.message = originalerror.error.message;
    }
    return AppError;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _cardlist_cardlist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cardlist/cardlist.component */ "./src/app/cardlist/cardlist.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _individual_med_individual_med_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./individual-med/individual-med.component */ "./src/app/individual-med/individual-med.component.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _app_error_handler__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-error-handler */ "./src/app/app-error-handler.ts");
/* harmony import */ var _doc_list_doc_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./doc-list/doc-list.component */ "./src/app/doc-list/doc-list.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _hoverover_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./hoverover.directive */ "./src/app/hoverover.directive.ts");
/* harmony import */ var _med_list_med_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./med-list/med-list.component */ "./src/app/med-list/med-list.component.ts");
/* harmony import */ var _limit_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./limit.pipe */ "./src/app/limit.pipe.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _searchd_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./searchd.directive */ "./src/app/searchd.directive.ts");
/* harmony import */ var _chkout_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./chkout.directive */ "./src/app/chkout.directive.ts");
/* harmony import */ var _cartanimation_cartanimation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./cartanimation/cartanimation.component */ "./src/app/cartanimation/cartanimation.component.ts");
/* harmony import */ var _animate_animate_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./animate/animate.component */ "./src/app/animate/animate.component.ts");
/* harmony import */ var angular_instantsearch__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angular-instantsearch */ "./node_modules/angular-instantsearch/fesm5/angular-instantsearch.js");
/* harmony import */ var _srch_srch_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./srch/srch.component */ "./src/app/srch/srch.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _cardlist_cardlist_component__WEBPACK_IMPORTED_MODULE_15__["CardlistComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_16__["ErrorComponent"],
                _individual_med_individual_med_component__WEBPACK_IMPORTED_MODULE_19__["IndividualMedComponent"],
                _doc_list_doc_list_component__WEBPACK_IMPORTED_MODULE_22__["DocListComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_24__["CartComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_25__["CheckoutComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"],
                _hoverover_directive__WEBPACK_IMPORTED_MODULE_29__["HoveroverDirective"],
                _med_list_med_list_component__WEBPACK_IMPORTED_MODULE_30__["MedListComponent"],
                _limit_pipe__WEBPACK_IMPORTED_MODULE_31__["LimitPipe"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_32__["SearchComponent"],
                _searchd_directive__WEBPACK_IMPORTED_MODULE_33__["SearchdDirective"],
                _chkout_directive__WEBPACK_IMPORTED_MODULE_34__["ChkoutDirective"],
                _cartanimation_cartanimation_component__WEBPACK_IMPORTED_MODULE_35__["CartanimationComponent"],
                _animate_animate_component__WEBPACK_IMPORTED_MODULE_36__["AnimateComponent"],
                _srch_srch_component__WEBPACK_IMPORTED_MODULE_38__["SrchComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_39__["DialogComponent"],
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_40__["UploadComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_27__["FontAwesomeModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                angular_instantsearch__WEBPACK_IMPORTED_MODULE_37__["NgAisModule"].forRoot(),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_20__["LoginService"], _auth_guard__WEBPACK_IMPORTED_MODULE_28__["AuthGuard"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _app_error_handler__WEBPACK_IMPORTED_MODULE_21__["AppErrorHandler"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
            entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_39__["DialogComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, myRoute) {
        this.auth = auth;
        this.myRoute = myRoute;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        else {
            this.myRoute.navigate(["login"]);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/cardlist/cardlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/cardlist/cardlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n    display: inline-block;\n    margin: 10px 30px;\n    height: auto;\n\n  }\n.select{\n  margin: 10px 0px;\n  border: 2px dashed darkblue;\n  width: 100%;\n  height: 30px;\n  padding-top: 7px;\n  padding-left: 5px;\n  border-radius: 10px;\n\n}\n@media screen and (min-width : 600px) {\n  mat-card{\n    width: 20%; /* Here you can use wherever you want to specify the width and also the height of the <img>*/\n  }\n  .center{\n    margin: 0px 30px;\n  }\n}\n@media screen and (max-width : 600px) {\n  mat-card {\n    width: 80%; /* Here you can use wherever you want to specify the width and also the height of the <img>*/\n  }\n}\n.example-header-image {\n    background-image: url('https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png');\n    background-size: cover;\n  }\nh2{\n  color: grey;\n  text-align: center;\n  padding: 20px ;\n}\na{\n  color:green;\n}\n#scene{\n  background-image: url(\"https://www.quickanddirtytips.com/sites/default/files/styles/insert_large/public/images/12031/choosing-a-doctor.png?itok=o5HdM8kT\");\n  background-size: cover ;\n  height: 100%;\n  width: 100%;\n  margin-top: 50px;\n}\n#more{\n  margin-right: 20px;\n}\n"

/***/ }),

/***/ "./src/app/cardlist/cardlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/cardlist/cardlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Get a Glimpse of our collection</h2>\n<div class=\"center\">\n<mat-card  *ngFor=\"let medicine of medicines\">\n  <mat-card-title>{{medicine.name | uppercase}}</mat-card-title>\n<img mat-card-image src={{medicine.image}}>\n<mat-card-content>\n<span>{{medicine.price | currency : 'INR'}}</span>\n<p>{{medicine.desc}}</p>\n  <a [routerLink]=\"['/medicine',medicine.id]\"><button mat-button (click)=\"changeMed(medicine)\">Buy Now</button></a>\n  <button mat-button (click)=\"addMed(medicine)\">Add to cart</button>\n</mat-card-content>\n</mat-card>\n<br/>\n</div>\n<a routerLink=\"/medlist\"><button mat-raised-button id=\"more\" [style.float]=\"'right'\">SEE MORE</button></a>\n\n<div id=\"scene\">\n</div>\n\n<h2>Book an Appointment</h2>\n<div class=\"center\">\n  <mat-card  *ngFor=\"let doctor of doctors | slice:0:3\" [ngStyle] = \"{'box-shadow': '2px 2px 2px 2px grey'}\" [@hover]=\"currentstate\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Dr. {{doctor.name}}</mat-card-title>\n      <mat-card-subtitle>{{doctor.speciality}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <span>Visit : {{doctor.visit | currency : 'INR'}}</span>\n      <p  >{{doctor.description}}</p>\n      <mat-form-field [ngStyle] = \"{'width': '100%'}\">\n        <mat-label>Select Date</mat-label>\n        <mat-select #date>\n      <mat-option *ngFor=\"let days of doctor.apptdate; let i = index\" [value]=\"days\">\n        {{days}}\n      </mat-option>\n      </mat-select>\n      </mat-form-field>\n      <button (click)=\"bookDoc(doctor.id, date.value)\" [ngStyle] = \"{'width': '100%', 'background-color' : 'blue', 'color' : 'white'}\" mat-raised-button>Book</button>\n    </mat-card-content>\n  </mat-card>\n</div>\n<br/>\n<a routerLink=\"/doclist\"><button id=\"more\" mat-raised-button [style.float]=\"'right'\">SEE MORE</button></a>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n\n"

/***/ }),

/***/ "./src/app/cardlist/cardlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/cardlist/cardlist.component.ts ***!
  \************************************************/
/*! exports provided: CardlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardlistComponent", function() { return CardlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _medicine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medicine.service */ "./src/app/cardlist/medicine.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _doctor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../doctor.service */ "./src/app/doctor.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.error */ "./src/app/app.error.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CardlistComponent = /** @class */ (function () {
    function CardlistComponent(http, authService, router, cartservice, medicineservice, doctorService, data) {
        var _this = this;
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.cartservice = cartservice;
        this.medicineservice = medicineservice;
        this.doctorService = doctorService;
        this.data = data;
        this.cardimage = '';
        this.medicines = {};
        this.doctors = {};
        this.currentstate = '';
        this.cardimage = '/assets/images/medical.jpg';
        this.medicineservice.getMedicines()
            .subscribe(function (datas) {
            console.log(datas);
            _this.medicines = datas;
        }, function (error) { return console.log(error); });
        this.doctorService.getDoctors()
            .subscribe(function (data) {
            _this.doctors = data;
            console.log(_this.doctors);
        }, function (error) { return console.log(error); });
    }
    CardlistComponent.prototype.changeMed = function (med) {
        this.data.changeMessage(med);
    };
    CardlistComponent.prototype.addMed = function (med) {
        this.cartservice.addToCart(med);
    };
    CardlistComponent.prototype.ngOnInit = function () {
        this.medicineservice.getMedicines()
            .subscribe(function (data) {
            console.log("fetching");
        }, function (error) { return console.log(error); });
        this.currentstate = 'initial';
    };
    CardlistComponent.prototype.bookDoc = function (id, date) {
        var _this = this;
        console.log(date);
        this.http.post('/api/bookdoc', {
            docid: id,
            date: date,
            email: this.authService.getEmail()
        }).catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"].throwError(new _app_error__WEBPACK_IMPORTED_MODULE_8__["AppError"](error));
        })
            .subscribe(function (response) {
            _this.errors = response.message;
            if (_this.errors === 'Appointment reserved') {
                alert("Sucessfull");
            }
            else {
                alert("failed");
                _this.errors = response.message;
            }
        }, function (err) {
            console.log("sub error");
            _this.errors = err.message;
            throw err;
        });
    };
    CardlistComponent.prototype.onMouseOver = function () {
        this.currentstate = 'final';
        console.log("Prakash");
    };
    CardlistComponent.prototype.onMouseOut = function () {
        this.currentstate = 'initial';
        console.log("Prakash");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CardlistComponent.prototype, "onMouseOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CardlistComponent.prototype, "onMouseOut", null);
    CardlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cardlist',
            template: __webpack_require__(/*! ./cardlist.component.html */ "./src/app/cardlist/cardlist.component.html"),
            styles: [__webpack_require__(/*! ./cardlist.component.css */ "./src/app/cardlist/cardlist.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('hover', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        boxShadow: 'none'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        boxShadow: '1px 1px 2px black, 0 0 10px blue, 0 0 5px lightblue'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0ms ease')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0ms 1000ms ease'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _medicine_service__WEBPACK_IMPORTED_MODULE_2__["MedicineService"], _doctor_service__WEBPACK_IMPORTED_MODULE_5__["DoctorService"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], CardlistComponent);
    return CardlistComponent;
}());



/***/ }),

/***/ "./src/app/cardlist/medicine.model.ts":
/*!********************************************!*\
  !*** ./src/app/cardlist/medicine.model.ts ***!
  \********************************************/
/*! exports provided: Medicine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Medicine", function() { return Medicine; });
var Medicine = /** @class */ (function () {
    function Medicine(id, name, price, desc, image, qty, nmbr) {
        if (nmbr === void 0) { nmbr = 1; }
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.image = image;
        this.qty = qty;
        this.nmbr = nmbr;
    }
    return Medicine;
}());



/***/ }),

/***/ "./src/app/cardlist/medicine.service.ts":
/*!**********************************************!*\
  !*** ./src/app/cardlist/medicine.service.ts ***!
  \**********************************************/
/*! exports provided: MedicineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineService", function() { return MedicineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MedicineService = /** @class */ (function () {
    function MedicineService(router, http) {
        this.router = router;
        this.http = http;
    }
    MedicineService.prototype.getMedicines = function () {
        return this.http.get('/api/');
    };
    MedicineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MedicineService);
    return MedicineService;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\n  width:100%\n}\nimg{\n  margin: 0 auto;\n  height: auto;\n  width:100%;\n}\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <img [src]=\"imagepath\" [alt]=\"Home\">\n</div>\n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.imagepath = '';
        this.imagepath = '/assets/images/medical.jpg';
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _cardlist_medicine_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardlist/medicine.model */ "./src/app/cardlist/medicine.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = /** @class */ (function () {
    function CartService(http) {
        var _this = this;
        this.http = http;
        this.itemsInCartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.itemsInCart = [];
        this.flg = 0;
        this.itemsInCartSubject.subscribe(function (_) { return _this.itemsInCart = _; });
        this.flg = 0;
    }
    CartService.prototype.addToCart = function (item) {
        var _this = this;
        item = new _cardlist_medicine_model__WEBPACK_IMPORTED_MODULE_2__["Medicine"](item.id, item.name, item.price, item.desc, item.image, item.qty);
        //  item.nmbr = 1;
        var currentItems = this.itemsInCart.slice();
        var itemsModified = currentItems.map(function (_) {
            if (_.id === item.id) {
                _.nmbr++;
                _this.flg = 1;
                return _;
            }
        });
        if (this.flg === 1) {
            this.flg = 0;
            this.itemsInCartSubject.next(itemsModified);
        }
        else
            this.itemsInCartSubject.next(this.itemsInCart.concat([item]));
    };
    CartService.prototype.incQty = function (id, qty) {
        var currentItems = this.itemsInCart.slice();
        var itemsModified = currentItems.map(function (_) {
            if (_.id == id) {
                _.nmbr = qty;
                if (_.nmbr < 0)
                    _.nmbr = 0;
            }
            return _;
        });
        console.log(itemsModified);
        this.itemsInCartSubject.next(itemsModified);
    };
    CartService.prototype.incQtyByOne = function (id) {
        var currentItems = this.itemsInCart.slice();
        var itemsModified = currentItems.map(function (_) {
            if (_.id == id) {
                _.nmbr++;
            }
            return _;
        });
        this.itemsInCartSubject.next(itemsModified);
    };
    CartService.prototype.decQtyByOne = function (id) {
        var currentItems = this.itemsInCart.slice();
        var itemsModified = currentItems.map(function (_) {
            if (_.id == id) {
                _.nmbr--;
                if (_.nmbr < 0)
                    _.nmbr = 0;
            }
            return _;
        });
        this.itemsInCartSubject.next(itemsModified);
    };
    CartService.prototype.remove = function (item) {
        var currentItems = this.itemsInCart.slice();
        var itemsWithoutRemoved = currentItems.filter(function (_) { return _.id !== item.id; });
        this.itemsInCartSubject.next(itemsWithoutRemoved);
    };
    CartService.prototype.getItems = function () {
        return this.itemsInCartSubject;
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart{\n  color: white;\n  background-color: gold;\n  border-radius: 40%;\n  font-size: small;\n  padding: 3px 5px;\n}\na{\n  text-decoration: none;\n  color: white;\n}\n"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/checkout\"><mat-icon matBadgeColor=\"accent\" matBadge=\"{{(shoppingCartItems$ | async).length}}\" matBadgePosition=\"above after\"><fa-icon [icon]=\"faCartPlus\"></fa-icon>\n</mat-icon></a>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartComponent = /** @class */ (function () {
    function CartComponent(http, cartService) {
        var _this = this;
        this.http = http;
        this.cartService = cartService;
        this.shoppingCartItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        this.shoppingCartItems = [];
        this.faCartPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCartPlus"];
        this.shoppingCartItems$ = this
            .cartService
            .getItems();
        this.shoppingCartItems$.subscribe(function (_) { return _this.shoppingCartItems = _; });
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.getDecodedAccessToken = function (token) {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(token);
        }
        catch (Error) {
            return null;
        }
    };
    CartComponent.prototype.ngAfterViewChecked = function () {
        var token = localStorage.getItem('token');
        var tokenInfo = this.getDecodedAccessToken(token);
        var id = tokenInfo.userId;
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/cartanimation/cartanimation.component.css":
/*!***********************************************************!*\
  !*** ./src/app/cartanimation/cartanimation.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:700);\n* {\n  font-family: \"Roboto\", sans-serif;\n  margin: 0;\n  padding: 0;\n  outline: none;\n}\ndiv {\n  width: 360px;\n  height: 72px;\n  margin: auto;\n  background: #ececec;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: block;\n  border-radius: 6px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\na.add-to-cart {\n  width: 216px;\n  height: 48px;\n  background: #ffab00;\n  font-size: 18px;\n  line-height: 48px;\n  letter-spacing: 2px;\n  color: rgb(255, 255, 255);\n  text-transform: uppercase;\n  border-radius: 24px;\n  text-decoration: none;\n  text-align: center;\n  left: 24px;\n  position: absolute;\n  top: 48px;\n  display: block;\n  box-shadow: 0 3px 6px rgba(255, 171, 0, 0.16), 0 3px 6px rgba(255, 171, 0, 0.23);\n  -moz-box-shadow: 0 3px 6px rgba(255, 171, 0, 0.16), 0 3px 6px rgba(255, 171, 0, 0.23);\n  -webkit-box-shadow: 0 3px 6px rgba(255, 171, 0, 0.16), 0 3px 6px rgba(255, 171, 0, 0.23);\n}\na.add-to-cart.size {\n  width: 48px;\n  left: 108px;\n  font-size: 0;\n  color: #e7bb45;\n  letter-spacing: 0;\n  transition: .2s linear;\n}\na.add-to-cart.hover {\n  transition: .2s linear;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  -webkit-transform-origin: 108px 24px;\n  transform-origin: 108px 24px;\n}\na.cart {\n  width: 72px;\n  height: 72px;\n  border-radius: 36px;\n  font-size: 18px;\n  text-align: center;\n  color: #616161;\n  text-decoration: none;\n  position: absolute;\n  right: 24px;\n  top: 36px;\n  display: block;\n  background: #535558 url(http://images.vfl.ru/ii/1484930184/14435803/15757225.png\n  ) center no-repeat;\n  background-size: 36px;\n  box-shadow: 0 3px 6px rgba(97, 97, 97 0.16), 0 3px 6px rgba(97, 97, 97 0.23);\n  -moz-box-shadow: 0 3px 6px rgba(97, 97, 97 0.16), 0 3px 6px rgba(97, 97, 97 0.23);\n  -webkit-box-shadow: 0 3px 6px rgba(97, 97, 97 0.16), 0 3px 6px rgba(97, 97, 97 0.23);\n}\na.cart > span {\n  width: 24px;\n  height: 24px;\n  font-size: 16px;\n  color: #fff;\n  line-height: 24px;\n  position: absolute;\n  border-radius: 12px;\n  display: block;\n  transform: scale(0);\n  -o-transform: scale(0);\n  -ms-transform: scale(0);\n  -moz-transform: scale(0);\n  -webkit-transform: scale(0);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  background: #ffab00;\n  box-shadow: 0 3px 6px rgba(255, 171, 0, 0.16), 0 3px 6px rgba(255, 171, 0, 0.23);\n  -moz-box-shadow: 0 3px 6px rgba(255, 171, 0, 0.16), 0 3px 6px rgba(255, 171, 0, 0.23);\n  -webkit-box-shadow: 0 3px 6px rgba(255, 171, 0, 0.16), 0 3px 6px rgba(255, 171, 0, 0.23);\n}\na.cart > span.counter {\n  left: 48px;\n  bottom: 48px;\n  transition: .2s linear;\n  transform: scale(1);\n  -o-transform: scale(1);\n  -ms-transform: scale(1);\n  -moz-transform: scale(1);\n  -webkit-transform: scale(1);\n}\n"

/***/ }),

/***/ "./src/app/cartanimation/cartanimation.component.html":
/*!************************************************************!*\
  !*** ./src/app/cartanimation/cartanimation.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <a href=\"#\" class=\"add-to-cart\">add to cart</a>\n  <a href=\"#\" class=\"cart\"><span></span></a>\n</div>\n"

/***/ }),

/***/ "./src/app/cartanimation/cartanimation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cartanimation/cartanimation.component.ts ***!
  \**********************************************************/
/*! exports provided: CartanimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartanimationComponent", function() { return CartanimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartanimationComponent = /** @class */ (function () {
    function CartanimationComponent() {
    }
    CartanimationComponent.prototype.ngOnInit = function () {
    };
    CartanimationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cartanimation',
            template: __webpack_require__(/*! ./cartanimation.component.html */ "./src/app/cartanimation/cartanimation.component.html"),
            styles: [__webpack_require__(/*! ./cartanimation.component.css */ "./src/app/cartanimation/cartanimation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartanimationComponent);
    return CartanimationComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n<h1>Shopping Cart</h1>\n\n<div class=\"shopping-cart\">\n\n  <div class=\"column-labels\">\n    <label class=\"product-image\">Image</label>\n    <label class=\"product-details\">Product</label>\n    <label class=\"product-price\">Price</label>\n    <label class=\"product-quantity\">Quantity</label>\n    <label class=\"product-removal\">Remove</label>\n    <label class=\"product-line-price\">Total</label>\n  </div>\n\n  <div class=\"product\" *ngFor=\"let items of shoppingCartItems\">\n    <div class=\"product-image\">\n      <img src={{items.image}}>\n\n    </div>\n    <div class=\"product-details\">\n      <div class=\"product-title\">{{items.name}}</div>\n      <p class=\"product-description\">{{items.desc}}.</p>\n    </div>\n    <div class=\"product-price\">{{items.price | currency: 'INR'}}</div>\n\n    <div class=\"product-quantity\">\n      <mat-grid-list cols=\"3\" rowHeight=\"1:1\">\n<mat-grid-tile>\n      <button  isIconButton=\"true\" mat-icon-button color=\"warn\" (click)=\"add(items.id)\">\n        <mat-icon svgIcon=\"plus\"></mat-icon>\n      </button>\n</mat-grid-tile>\n        <mat-grid-tile>\n          <input type=\"number\" appChkout #qty1 (input)=\"addQty(items.id,qty1.value)\" [(ngModel)]=\"items.nmbr\" [ngStyle]=\"{'width' : '50px','height': '20px'}\">\n        </mat-grid-tile>\n        <mat-grid-tile>\n      <button mat-icon-button color=\"warn\" (click)=\"sub(items.id)\">\n        <mat-icon svgIcon=\"subtract\"></mat-icon>\n      </button>\n          </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n\n    <div class=\"product-removal\">\n      <button mat-raised-button color=\"warn\"  (click)=\"remove(items)\">Remove</button>\n    </div>\n    <div class=\"product-line-price\" ngModel #ind=\"ngModel\">{{items.price * qty1.value | currency : 'INR'}}</div>\n  </div>\n\n<div *ngIf=\"shoppingCartItems.length > 0 ; else nocomp\">\n  <div class=\"totals\">\n    <div class=\"totals-item\">\n      <label>Subtotal</label>\n      <div  class=\"totals-value\" id=\"cart-subtotal\">\n        <div class=\"subtotals-value\">{{sum | currency : 'INR'}}</div>\n      </div>\n    </div>\n    <div class=\"totals-item\">\n      <label>Tax (5%)</label>\n      <div class=\"totals-value\" ngModel  #tx id=\"cart-tax\">{{ sum * 0.02 | currency : 'INR'}}</div>\n    </div>\n    <div class=\"totals-item\">\n      <label>Shipping</label>\n      <div class=\"totals-value\" #sh id=\"cart-shipping\">{{ sum * 0.05 | currency : 'INR' }}</div>\n    </div>\n    <div class=\"totals-item totals-item-total\">\n      <label>Grand Total</label>\n      <div class=\"totals-value\" #totalsum id=\"cart-total\">{{ (sum * 0.02) + (sum * 0.05) + sum | currency : 'INR'}}</div>\n    </div>\n  </div>\n  <button (click)=\"order()\" class=\"checkout\" mat-raised-button color=\"success\">Checkout</button>\n</div>\n  <ng-template #nocomp>\n    <h2>Your Cart is empty right now!</h2>\n  </ng-template>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.scss":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Global settings */\n/* Global \"table\" column settings */\n.product-image {\n  float: left;\n  width: 20%; }\n.product-details {\n  float: left;\n  width: 25%; }\n.product-price {\n  float: left;\n  width: 12%; }\n.product-quantity {\n  float: left;\n  width: 16%; }\n.product-removal {\n  float: left;\n  width: 15%; }\n.product-line-price {\n  float: left;\n  width: 12%;\n  text-align: right; }\n/* This is used as the traditional .clearfix class */\n.group:before, .shopping-cart:before, .column-labels:before, .product:before, .totals-item:before,\n.group:after,\n.shopping-cart:after,\n.column-labels:after,\n.product:after,\n.totals-item:after {\n  content: '';\n  display: table; }\n.group:after,\n.shopping-cart:after,\n.column-labels:after,\n.product:after,\n.totals-item:after {\n  clear: both; }\n.group, .shopping-cart, .column-labels, .product, .totals-item {\n  zoom: 1; }\n/* Apply clearfix in a few places */\n/* Body/Header stuff */\nbody {\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 100; }\nh1 {\n  font-weight: 100; }\nlabel {\n  color: #aaa; }\n.shopping-cart {\n  margin-top: -45px;\n  padding: 0 30px; }\n/* Column headers */\n.column-labels label {\n  padding-bottom: 15px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #eee; }\n.column-labels .product-image, .column-labels .product-details, .column-labels .product-removal {\n  text-indent: -9999px; }\n/* Product entries */\n.product {\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #eee; }\n.product .product-image {\n    text-align: center; }\n.product .product-image img {\n      width: 100px; }\n.product .product-details .product-title {\n    margin-right: 20px;\n    font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\"; }\n.product .product-details .product-description {\n    margin: 5px 20px 5px 0;\n    line-height: 1.4em; }\n.product .product-quantity input {\n    width: 40px; }\n.product .remove-product {\n    border: 0;\n    padding: 4px 8px;\n    background-color: #c66;\n    color: #fff;\n    font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\";\n    font-size: 12px;\n    border-radius: 3px; }\n.product .remove-product:hover {\n    background-color: #a44; }\n/* Totals section */\n.totals .totals-item {\n  float: right;\n  clear: both;\n  width: 100%;\n  margin-bottom: 10px; }\n.totals .totals-item label {\n    float: left;\n    clear: both;\n    width: 79%;\n    text-align: right; }\n.totals .totals-item .totals-value {\n    float: right;\n    width: 21%;\n    text-align: right; }\n.totals .totals-item-total {\n  font-family: \"HelveticaNeue-Medium\", \"Helvetica Neue Medium\"; }\n.checkout {\n  float: right;\n  border: 0;\n  margin-top: 20px;\n  padding: 6px 25px;\n  background-color: #6b6;\n  color: #fff;\n  font-size: 25px;\n  border-radius: 3px; }\n.checkout:hover {\n  background-color: #494; }\n/* Make adjustments for tablet */\n@media screen and (max-width: 650px) {\n  .shopping-cart {\n    margin: 0;\n    padding-top: 20px;\n    border-top: 1px solid #eee; }\n  .column-labels {\n    display: none; }\n  .product-image {\n    float: right;\n    width: auto; }\n    .product-image img {\n      margin: 0 0 10px 10px; }\n  .product-details {\n    float: none;\n    margin-bottom: 10px;\n    width: auto; }\n  .product-price {\n    clear: both;\n    width: 70px; }\n  .product-quantity {\n    width: 100px; }\n    .product-quantity input {\n      margin-left: 0px;\n      border: 1px solid greenyellow; }\n  .product-quantity:before {\n    content: 'x'; }\n  .product-removal {\n    width: auto; }\n  .product-line-price {\n    float: right;\n    width: 70px; } }\n/* Make more adjustments for phone */\n@media screen and (max-width: 350px) {\n  .product-removal {\n    float: right; }\n  .product-line-price {\n    float: right;\n    clear: left;\n    width: auto;\n    margin-top: 10px; }\n  .product .product-line-price:before {\n    content: 'Item Total: '; }\n  .totals .totals-item label {\n    width: 60%; }\n  .totals .totals-item .totals-value {\n    width: 40%; } }\n.body {\n  padding: 0 30px; }\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.error */ "./src/app/app.error.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(dialog, authService, cartService, http, iconRegistry, sanitizer, spinnerService) {
        this.dialog = dialog;
        this.authService = authService;
        this.cartService = cartService;
        this.http = http;
        this.spinnerService = spinnerService;
        this.shoppingCartItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        this.shoppingCartItems = [];
        this.sum = 0;
        this.names = [];
        this.qty = [];
        this.errors = '';
        iconRegistry.addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/plus.svg'));
        iconRegistry.addSvgIcon('subtract', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/negative.svg'));
        this.shoppingCartItems$ = this
            .cartService
            .getItems();
    }
    CheckoutComponent.prototype.order = function () {
        var _this = this;
        this.spinnerService.show();
        this.shoppingCartItems.map(function (_) {
            _this.names.push(_.name);
            _this.qty.push(_.nmbr);
        });
        this.http.post('/api/order', {
            names: this.names,
            qty: this.qty,
            sum: parseFloat((this.total.nativeElement.innerText).substr(1)),
            email: this.authService.getEmail()
        }).catch(function (error) {
            _this.spinnerService.hide();
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throwError(new _app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
        })
            .subscribe(function (response) {
            _this.errors = response.message;
            _this.spinnerService.hide();
        });
    };
    CheckoutComponent.prototype.addQty = function (id, qty) {
        var _this = this;
        this.spinnerService.show();
        this.cartService.incQty(id, qty);
        this.sum = 0;
        this.shoppingCartItems$.subscribe(function (_) { return _this.shoppingCartItems = _; });
        this.shoppingCartItems.map(function (_) {
            _this.sum += (_.price * _.nmbr);
        });
        this.spinnerService.hide();
    };
    CheckoutComponent.prototype.add = function (id) {
        var _this = this;
        this.spinnerService.show();
        var qnt = 1;
        this.cartService.incQtyByOne(id);
        this.sum = 0;
        this.shoppingCartItems$.subscribe(function (_) { return _this.shoppingCartItems = _; });
        this.shoppingCartItems.map(function (_) {
            _this.sum += (_.price * _.nmbr);
        });
        this.spinnerService.hide();
    };
    CheckoutComponent.prototype.remove = function (items) {
        var _this = this;
        this.spinnerService.show();
        this.cartService.remove(items);
        this.sum = 0;
        this.shoppingCartItems$.subscribe(function (_) { return _this.shoppingCartItems = _; });
        this.shoppingCartItems.map(function (_) {
            _this.sum += (_.price * _.nmbr);
        });
        this.spinnerService.hide();
    };
    CheckoutComponent.prototype.sub = function (id) {
        var _this = this;
        this.spinnerService.show();
        var qnt = 1;
        this.cartService.decQtyByOne(id);
        this.sum = 0;
        this.shoppingCartItems$.subscribe(function (_) { return _this.shoppingCartItems = _; });
        this.shoppingCartItems.map(function (_) {
            _this.sum += (_.price * _.nmbr);
        });
        this.spinnerService.hide();
    };
    CheckoutComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingCartItems$.subscribe(function (_) { return _this.shoppingCartItems = _; });
        this.shoppingCartItems.map(function (_) {
            _this.sum += (_.price * _.nmbr);
        });
        this.names = [];
        this.qty = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('totalsum'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CheckoutComponent.prototype, "total", void 0);
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/checkout/checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_9__["Ng4LoadingSpinnerService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/chkout.directive.ts":
/*!*************************************!*\
  !*** ./src/app/chkout.directive.ts ***!
  \*************************************/
/*! exports provided: ChkoutDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChkoutDirective", function() { return ChkoutDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChkoutDirective = /** @class */ (function () {
    function ChkoutDirective() {
    }
    ChkoutDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appChkout]'
        }),
        __metadata("design:paramtypes", [])
    ], ChkoutDirective);
    return ChkoutDirective;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dialog/dialog.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Finalize your order</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Review Your Order</h3>\n  <div *ngFor=\"let items of shoppingCartItems\">\n  <div>\n      {{items.name}}rr\n  </div>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial (click)=\"order()\">Order</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.error */ "./src/app/app.error.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DialogComponent = /** @class */ (function () {
    function DialogComponent(authService, http) {
        this.authService = authService;
        this.http = http;
        this.shoppingCartItems$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        this.shoppingCartItems = [];
        this.sum = 0;
        this.names = [];
        this.qty = [];
        this.errors = '';
    }
    DialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shoppingCartItems$.subscribe(function (_) { return _this.shoppingCartItems = _; });
        this.shoppingCartItems.map(function (_) {
            _this.sum += (_.price * _.nmbr);
            console.log(_this.sum);
        });
        console.log(this.shoppingCartItems + "PD");
    };
    DialogComponent.prototype.order = function () {
        var _this = this;
        console.log((this.total.nativeElement.innerText).substr(1));
        this.shoppingCartItems.map(function (_) {
            _this.names.push(_.name);
            _this.qty.push(_.nmbr);
        });
        this.http.post('/api/order', {
            names: this.names,
            qty: this.qty,
            sum: parseFloat((this.total.nativeElement.innerText).substr(1)),
            email: this.authService.getEmail()
        }).catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throwError(new _app_error__WEBPACK_IMPORTED_MODULE_2__["AppError"](error));
        })
            .subscribe(function (response) {
            _this.errors = response.message;
            console.log(_this.errors);
        });
    };
    DialogComponent.prototype.ngOnChanges = function () {
        console.log(this.shoppingCartItems + "PDAS");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('totalsum'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DialogComponent.prototype, "total", void 0);
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/dialog/dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/doc-list/doc-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/doc-list/doc-list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n  display: inline-block;\n  margin: 10px 30px;\n  height: auto;\n\n}\n\n@media screen and (min-width : 600px) {\n  mat-card{\n    width: 20%; /* Here you can use wherever you want to specify the width and also the height of the <img>*/\n  }\n}\n\n@media screen and (max-width : 600px) {\n  mat-card {\n    width: 80%; /* Here you can use wherever you want to specify the width and also the height of the <img>*/\n  }\n}\n\n.example-header-image {\n  background-image: url('https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png');\n  background-size: cover;\n}\n\nh2{\n  color: grey;\n  text-align: center;\n  padding: 20px ;\n}\n"

/***/ }),

/***/ "./src/app/doc-list/doc-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/doc-list/doc-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>List of all our Doctors</h2>\n<mat-card  [@hover]=\"currentstate\" *ngFor=\"let doctor of doctors\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Dr. {{doctor.name}}</mat-card-title>\n    <mat-card-subtitle>{{doctor.specialty}}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content >\n    <p>{{doctor.description}}</p>\n    <span>Visit : {{doctor.visit | currency : 'INR'}}</span>\n<p [style.display]=\"'none'\" class=\"card\">{{doctor.description}}</p>\n    <mat-form-field [ngStyle] = \"{'width': '100%'}\">\n      <mat-label>Select Date</mat-label>\n      <mat-select #select>\n        <mat-option  *ngFor=\"let days of doctor.apptdate; let i = index\" [value]=\"days\">\n          {{days}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button (click)=\"bookDoc(doctor.id,select.value)\" [ngStyle] = \"{'width': '100%', 'background-color' : 'blue', 'color' : 'white'}\" mat-raised-button>Book</button>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/doc-list/doc-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/doc-list/doc-list.component.ts ***!
  \************************************************/
/*! exports provided: DocListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocListComponent", function() { return DocListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../doctor.service */ "./src/app/doctor.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.error */ "./src/app/app.error.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DocListComponent = /** @class */ (function () {
    function DocListComponent(http, docService, authService) {
        var _this = this;
        this.http = http;
        this.docService = docService;
        this.authService = authService;
        this.doctors = {};
        this.docService.getDoctors().subscribe(function (data) {
            _this.doctors = data;
        }, function (error) { return console.log(error); });
    }
    DocListComponent.prototype.ngOnInit = function () {
    };
    DocListComponent.prototype.bookDoc = function (id, date) {
        var _this = this;
        console.log("ddd");
        this.http.post('/api/bookdoc', {
            docid: id,
            date: date,
            email: this.authService.getEmail()
        }).catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throwError(new _app_error__WEBPACK_IMPORTED_MODULE_3__["AppError"](error));
        })
            .subscribe(function (response) {
            _this.errors = response.message;
            if (_this.errors === 'Appointment reserved') {
                _this.authService.checkAuth();
                _this.authService.sendToken(response.details);
            }
            else {
                alert("failed");
                _this.errors = response.message;
            }
        }, function (err) {
            console.log("sub error");
            _this.errors = err.message;
            throw err;
        });
    };
    DocListComponent.prototype.onMouseOver = function () {
        this.currentstate = 'final';
    };
    DocListComponent.prototype.onMouseOut = function () {
        this.currentstate = 'initial';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DocListComponent.prototype, "onMouseOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DocListComponent.prototype, "onMouseOut", null);
    DocListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doc-list',
            template: __webpack_require__(/*! ./doc-list.component.html */ "./src/app/doc-list/doc-list.component.html"),
            styles: [__webpack_require__(/*! ./doc-list.component.css */ "./src/app/doc-list/doc-list.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('hover', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        boxShadow: 'none'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        boxShadow: '1px 1px 2px black, 0 0 10px blue, 0 0 5px lightblue'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0ms ease')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0ms 500ms ease'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"], _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], DocListComponent);
    return DocListComponent;
}());



/***/ }),

/***/ "./src/app/doctor.service.ts":
/*!***********************************!*\
  !*** ./src/app/doctor.service.ts ***!
  \***********************************/
/*! exports provided: DoctorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorService", function() { return DoctorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DoctorService = /** @class */ (function () {
    function DoctorService(router, http) {
        this.router = router;
        this.http = http;
    }
    DoctorService.prototype.getDoctors = function () {
        return this.http.get('/api/doclist');
    };
    DoctorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DoctorService);
    return DoctorService;
}());



/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"error-template\">\n        <h1>\n          Oops!</h1>\n        <h2>\n          404 Page Not Found</h2>\n        <div class=\"error-details\">\n          Sorry, an error has occured, Requested page not found!\n        </div>\n        <div class=\"error-actions\">\n          <a routerLink=\"/\" class=\"btn btn-primary btn-lg\">\n            <span class=\"glyphicon glyphicon-home\"></span>\n            Take Me Home </a>\n          <a routerLink=\"/\" class=\"btn btn-default btn-lg\">\n            <span class=\"glyphicon glyphicon-envelope\"></span> Contact Support </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error.component.scss":
/*!********************************************!*\
  !*** ./src/app/error/error.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==); }\n\n.error-template {\n  padding: 40px 15px;\n  text-align: center; }\n\n.error-actions {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.error-actions .btn {\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #a7adba;\n  color: white;\n  border-top: 1px solid #E7E7E7;\n  text-align:center;\n  padding:15px 0 15px 0 ;\n  left: 0;\n  bottom: 0;\n  position: fixed;\n  height: 30px;\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>Designed and Developed by Prakash Das &copy;</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\n  padding: 12px;\n  background-color: #4f5b66;\n}\nul {\n\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nspan{\n  padding: 5px;\n}\n.menu > div{\n  width: 35px;\n  height: 5px;\n  background-color: white;\n  color: white;\n  margin: 6px 0;\n}\na {\n  text-decoration: none;\n  color: white;\n}\nul {\n  display: flex;\n  padding: 5px;\n}\n.spacer {\n  flex: 1 1 auto;\n}\ninput {\n  outline: none;\n}\ninput[type=search] {\n  -webkit-appearance: textfield;\n  -webkit-box-sizing: content-box;\n  font-family: inherit;\n  font-size: 100%;\n}\ninput::-webkit-search-decoration,\ninput::-webkit-search-cancel-button {\n  display: none;\n}\ninput:-moz-placeholder {\n  color: #999;\n}\ninput::-webkit-input-placeholder {\n  color: #999;\n}\ninput[type=search] {\n  background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;\n  border: solid 1px #ccc;\n  padding: 9px 10px 9px 32px;\n  width: 100%;\n  border-radius: 1em;\n  margin-left: 20%;\n  transition: all .5s;\n}\ninput[type=search]:focus {\n  width: 130%;\n  background-color: #fff;\n  border-color: #66CC75;\n  box-shadow: 0 0 5px rgba(109,207,246,.5);\n}\ninput[type=search] {\n  outline: none;\n}\ninput[type=search] {\n  -webkit-appearance: textfield;\n  -webkit-box-sizing: content-box;\n  font-family: inherit;\n  font-size: 100%;\n}\ninput::-webkit-search-decoration,\ninput::-webkit-search-cancel-button {\n  display: none;\n}\ninput:-moz-placeholder {\n  color: #999;\n}\ninput::-webkit-input-placeholder {\n  color: #999;\n}\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxShow=\"true\" fxHide.gt-sm=\"true\">\n  <mat-toolbar >\n  <mat-toolbar-row>\n   <span>\n    <a routerLink=\"/\" routerLinkActive=\"mat-accent\">MyMed</a>\n  </span>\n    <span class=\"spacer\"></span>\n    <div *ngIf=\"isAuthenticated\" [ngStyle]=\"{'margin-right': '15px'}\">\n      <app-cart></app-cart>\n    </div>\n    <button class=\"menu\" (click)=\"sidenav()\">\n   <div></div>\n      <div></div>\n      <div></div>\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n</div>\n\n  <div fxShow=\"true\" fxHide.lt-md=\"true\">\n  <mat-toolbar>\n  <span>\n    <a routerLink=\"/\" routerLinkActive=\"mat-accent\">MyMed</a>\n  </span>\n\n  <div fxFlex fxShow=”true” fxHide.lt-md=”true”>\n\n    <form class=\"example-form\">\n        <input matInput [matAutocomplete]=\"auto\" type=\"search\" [formControl]=\"stateCtrl\">\n        <mat-autocomplete #auto=\"matAutocomplete\" >\n          <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state\">\n            <span>{{state}}</span>\n          </mat-option>\n        </mat-autocomplete>\n    </form>\n\n  </div>\n  <span class=\"spacer\"></span>\n  <div fxFlex fxShow=”true” fxHide.lt-md=”true”>\n\n  <ul>\n    <li *ngIf=\"isAuthenticated\">\n      <a mat-button routerLink=\"/home\" routerLinkActive=\"mat-accent\">My Account</a>\n    </li>\n    <li *ngIf=\"isAuthenticated\">\n      <a mat-button routerLink=\"/doclist\" routerLinkActive=\"mat-accent\">Book Doc</a>\n    </li>\n    <li *ngIf=\"!isAuthenticated\">\n      <a mat-button routerLink=\"/login\" routerLinkActive=\"mat-accent\">Login</a>\n    </li>\n    <li *ngIf=\"!isAuthenticated\">\n      <a mat-button routerLink=\"/signup\" routerLinkActive=\"mat-accent\">Signup</a>\n    </li>\n    <li *ngIf=\"isAuthenticated\">\n      <a mat-button (click)=\"logout()\">Logout</a>\n    </li>\n    <li *ngIf=\"isAuthenticated\">\n      <app-cart></app-cart>\n    </li>\n  </ul>\n  </div>\n</mat-toolbar>\n</div>\n\n<li *ngFor=\"let c of characters | filter : search\">\n  {{c}}\n</li>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _cardlist_medicine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cardlist/medicine.service */ "./src/app/cardlist/medicine.service.ts");
/* harmony import */ var _doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../doctor.service */ "./src/app/doctor.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, medicineservice, doctorService) {
        var _this = this;
        this.auth = auth;
        this.medicineservice = medicineservice;
        this.doctorService = doctorService;
        this.characters = [];
        this.states = [];
        this.medicines = {};
        this.i = 0;
        this.doctors = {};
        this.searches$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])("");
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.auth.getAuth().subscribe(function (res) { return _this.isAuthenticated = res; });
        this.searches$.subscribe(function (_) { return _this.search = _; });
        this.medicineservice.getMedicines()
            .subscribe(function (datas) {
            _this.medicines = datas;
            for (var i = 0; i < _this.medicines.length; i++) {
                _this.states.push(_this.medicines[i].name);
            }
        }, function (error) { return console.log(error); });
        this.filteredStates = this.stateCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) { return state ? _this._filterStates(state) : _this.states.slice(); }));
    }
    HeaderComponent.prototype._filterStates = function (value) {
        var filterValue = value.toLowerCase();
        return this.states.filter(function (state) { return state.toLowerCase().indexOf(filterValue) === 0; });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        console.log(this.states + "ddd");
    };
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
    };
    HeaderComponent.prototype.sidenav = function () {
        this.clickEvent.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "clickEvent", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _cardlist_medicine_service__WEBPACK_IMPORTED_MODULE_3__["MedicineService"], _doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-carousel>\n</app-carousel><app-cardlist></app-cardlist>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/hoverover.directive.ts":
/*!****************************************!*\
  !*** ./src/app/hoverover.directive.ts ***!
  \****************************************/
/*! exports provided: HoveroverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveroverDirective", function() { return HoveroverDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HoveroverDirective = /** @class */ (function () {
    function HoveroverDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    HoveroverDirective.prototype.onMouseOver = function () {
        var part = this.el.nativeElement.querySelector('.card');
        this.renderer.setStyle(part, 'display', 'block');
    };
    HoveroverDirective.prototype.onMouseOut = function () {
        var part = this.el.nativeElement.querySelector('.card');
        this.renderer.setStyle(part, 'display', 'none');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HoveroverDirective.prototype, "onMouseOver", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HoveroverDirective.prototype, "onMouseOut", null);
    HoveroverDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHoverover]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HoveroverDirective);
    return HoveroverDirective;
}());



/***/ }),

/***/ "./src/app/individual-med/individual-med.component.css":
/*!*************************************************************!*\
  !*** ./src/app/individual-med/individual-med.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  background:#efefef;\n  font-family:'Arial' sans-serif;\n  font-size:62.5%;\n}\nh1{\n  font-weight:500;\n}\nimg{\n  max-width:100%;\n}\n#wrap{\n  width:80%;\n  margin:0 auto;\n  padding-top:30px;\n  padding-bottom:30px;\n}\n#product_layout_1{\n  margin-top:30px;\n}\n#product_layout_1 .top{\n  display:block;\n  width:100%;\n  margin-bottom:30px;\n}\n#product_layout_1 .bottom{\n  display:block;\n  width:100%;\n  padding-top:30px;\n  clear:both;\n}\n#product_layout_1 .product_info{\n  width:66%;\n  float:left;\n  margin-left:4%;\n}\n#product_layout_1 .product_images .product_image_1{\n  width:100%;\n  border:2px solid lightgray;\n  border-radius:3px;\n}\n#product_layout_1 .product_images .product_image_small{\n  width:100%;\n  margin-top:15px;\n}\n#product_layout_1 .product_images .product_image_small .product_image_2{\n  width:30%;\n  border:1px solid lightgray;\n  float:left;\n  margin-right:4%;\n  box-sizing:border-box;\n}\n#product_layout_1 .product_images .product_image_small .product_image_3{\n  width:30%;\n  border:1px solid lightgray;\n  float:left;\n  margin-right:4%;\n  box-sizing:border-box;\n}\n#product_layout_1 .product_images .product_image_small .product_image_4{\n  width:30%;\n  border:1px solid lightgray;\n  float:left;\n}\n#product_layout_1 .product_info h1{\n  font-size:2.0em;\n  line-height:.8;\n}\n#product_layout_1 .product_info .price{\n  margin-top:-40px;\n}\n#product_layout_1 .product_info .original_price{\n  color:lightgray;\n  font-size:2.0em;\n  text-decoration:line-through;\n  width:20%;\n}\n#product_layout_1 .product_info .sale_price{\n  color:#b30000;\n  font-size:2.0em;\n\n\n  width:30%;\n}\n#product_layout_1 .product_info .rating{\n  margin-top:-20px;\n  color:goldenrod;\n}\n#product_layout_1 .product_info .product_description{\n  font-size:1.4em;\n}\n#product_layout_1 .product_info .related_info{\n  color:#a6a6a6;\n}\n#product_layout_1 .product_info .related_info span{\n  margin-right:5%;\n}\n#product_layout_1 .product_info .options{\n  margin-top:30px;\n}\n#product_layout_1 .product_info .buying_options{\n  width:45%;\n  float:left;\n}\n#product_layout_1 .product_info .buying{\n  width:45%;\n  float:left;\n  margin-left:10%;\n}\n#product_layout_1 .product_info .buying_options .select{\n  width:90%;\n  margin:20px auto;\n}\n#product_layout_3 .product_image{\n  display:block;\n  box-sizing:border-box;\n  width:40%;\n  float:left;\n}\n#product_layout_3 .product_image .main_image img{\n  margin:0 auto;\n  border:1px solid #808080;\n  border-radius:2px;\n}\n#product_layout_3 .product_desc{\n  width:50%;\n  float:left;\n  margin-left:10%;\n  min-height:660px;\n}\n#product_layout_3 .product_desc h1{\n  font-size:3.6em;\n  font-weight:500;\n}\n#product_layout_3 .product_desc .price{\n  display:block;\n  font-size:2.4em;\n  color:#ccc;\n  text-decoration:line-through;\n}\n#product_layout_3 .product_desc .sale_price{\n  display:block;\n  font-size:2.8em;\n  color:crimson;\n  font-weight:700;\n}\n#product_layout_3 .product_options .select{\n  width: 100%;\n  max-width:300px;\n  height: 40px;\n  overflow: hidden;\n  background: url('https://i.imgur.com/10e9Roz.png') no-repeat right #FFF;\n  border: 1px solid #ccc;\n  border-radius:3px;\n  margin-top:15px;\n}\n#product_layout_1 .product_info .buying_options select{\n  border-radius:2px;\n  margin-top:15px;\n}\n#product_layout_3 .product_options select{\n  background: transparent;\n  display:block;\n  width: 268px;\n  padding: 5px;\n  font-size: 2em;\n  line-height: 1;\n  border: 0;\n  border-radius:0;\n  height: 40px;\n  -webkit-appearance: none;\n}\n#product_layout_1 .product_info .buying .quantity{\n  font-size:1em;\n  margin-top:15px;\n  width:100%;\n  display:block;\n}\n#product_layout_1 .product_info .buying .quantity [type=\"text\"]{\n  width:40px;\n  height:40px;\n  border:1px solid #ccc;\n  border-radius:3px;\n  padding:10px;\n  box-sizing:border-box;\n  font-size:0.7em;\n}\n#product_layout_1 .product_info .buying .cart{\n  margin-top:25px;\n  width:100%;\n  float:left;\n  margin-bottom:20px;\n}\n#product_layout_1 .product_info .buying .cart a.add{\n  font-size:1em;\n  color:#FFF;\n  background:#00a900;\n  text-decoration:none;\n  padding:10px 20px;\n  height:40px;\n  border-radius:3px;\n  margin-left:10px;\n}\n#product_layout_1 .product_info .social {\n  font-size: 1.0em;\n}\n#product_layout_3 .buying{\n  max-width:300px;\n  width:100%;\n  display:block;\n}\n#product_layout_3 .buying .quantity{\n  font-size:2em;\n  margin-top:15px;\n  width:35%;\n  float:left;\n  display:block;\n}\n#product_layout_3 .buying .quantity [type=\"text\"]{\n  width:40px;\n  height:40px;\n  border:1px solid #ccc;\n  border-radius:2px;\n  padding:10px;\n  box-sizing:border-box;\n  font-size:1em;\n}\n#product_layout_3 .buying .cart{\n  margin-top:25px;\n  width:65%;\n  float:left;\n  margin-bottom:20px;\n}\n#product_layout_3 .buying .cart a.add{\n  font-size:2em;\n  float:right;\n  color:#FFF;\n  background:skyblue;\n  text-decoration:none;\n  padding:10px 20px;\n  margin-top:-10px;\n  border-radius:2px;\n}\n#product_layout_3 .product_desc .other_options{\n  color:#aaa;\n  display:block;\n  float:left;\n  width:100%;\n  min-height:30px;\n  margin-bottom:15px;\n}\n#product_layout_3 .product_desc .other_options span{\n  display:block;\n}\n#product_layout_3 .product_desc .description{\n  font-size:1.4em;\n  display:block;\n  width:100%;\n  clear:both;\n}\n#product_layout_3 .product_desc .social{\n  font-size:1.4em;\n  line-height:1.2;\n  margin-bottom:15px;\n  width:60%;\n  display:block;\n  margin:15px 0px;\n}\n#product_layout_1 .product_info .social .share{\n  margin-top:-5px;\n  margin-bottom:15px;\n}\n#product_layout_1 .product_info .buttons{}\n#product_layout_3 .product_desc .social .share{\n  margin-top:-5px;\n  margin-bottom:15px;\n}\n#product_layout_3 .product_desc .buttons{\n  margin-top:20px;\n  margin-left:10px;\n  display:inline-block;\n  width:30%;\n}\n#product_layout_1 .reviews{\n  width:30%;\n  float:left;\n  border:2px solid #aaa;\n  border-radius:3px;\n  margin-bottom:30px;\n  box-sizing:border-box;\n  max-width:320px;\n}\n#product_layout_1 .reviews h2{\n  font-weight:500;\n  font-size:2.4em;\n}\n#product_layout_1 .reviews .head{\n  background:#ccc;\n  text-align:center;\n  padding:5px;\n}\n#product_layout_1 .reviews .content .name{\n  font-size:1.2em;\n}\n#product_layout_1 .reviews .content .stars{\n  color:goldenrod;\n  margin-left:15px;\n}\n#product_layout_1 .reviews .content .review_text{\n  margin-top:10px;\n  font-size:0.8em;\n}\n#product_layout_1 .reviews .content .fullReview a{\n  display:block;\n  font-size:0.8em;\n  text-align:center;\n  color:#006bff;\n  text-decoration:none;\n}\n#product_layout_1 .reviews .content .writeReview a{\n  display:block;\n  font-size:1.0em;\n  text-align:center;\n  color:#006bff;\n  text-decoration:none;\n}\n#product_layout_1 .related{\n  width:66%;\n  float:left;\n  display:block;\n  margin-left:4%;\n  border:2px solid #aaa;\n  border-radius:3px;\n  box-sizing:border-box;\n}\n#product_layout_1 .related .head{\n  background:#ccc;\n  padding:.3em;\n}\n#product_layout_1 .related .head h2{\n  text-align:center;\n  font-weight:500;\n  font-size:1.4em;\n}\n#product_layout_1 .related .content{\n  background:#FFF;\n}\n#product_layout_1 .related .relatedProducts{\n  -webkit-columns:3;\n          columns:3;\n}\n#product_layout_1 .related .products{\n  text-align:center;\n  width:25%;\n  float:left;\n  margin-left:6.25%;\n  box-sizing:border-box;\n}\n#product_layout_1 .related .products .title{\n  font-size:1.0em;\n  line-height:1;\n  min-height:24px;\n}\n#product_layout_1 .related .products .image img{\n  border:2px solid #ccc;\n  margin-top:-5px;\n  cursor:pointer;\n}\n#product_layout_1 .related .products .price{\n  color:black;\n  font-size:1.0em;\n  margin-top:-2px;\n}\n@media (max-width:500px) {\n\n  .product_images > .product_image_1 > img{\n\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n  }\n  .product_images{\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n  }\n   .product_info {\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0\n  }\n\n}\n@media (min-width: 500px)\n{\n  #product_layout_1 .product_images{\n    width:30%;\n    max-width:350px;\n    float:left;\n  }\n}\n"

/***/ }),

/***/ "./src/app/individual-med/individual-med.component.html":
/*!**************************************************************!*\
  !*** ./src/app/individual-med/individual-med.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\" rel=\"stylesheet\">\n<div id=\"wrap\">\n  <div id=\"product_layout_1\">\n    <div class=\"top\">\n      <div class=\"product_images\">\n        <div class=\"product_image_1\">\n          <img src = {{message.image}} alt=\"image\"/>\n        </div>\n      </div>\n      <div class=\"product_info\">\n        <h1>{{message.name}}</h1>\n        <div class=\"price\">\n          <h4 class=\"original_price\">{{message.price + 140 | currency : 'INR'}}</h4>\n          <h4 class=\"sale_price\">{{message.price | currency : 'INR'}}</h4>\n        </div>\n        <div class=\"product_description\">\n          <p><b><i>Description: </i></b>{{message.desc}}</p>\n        </div>\n        <div class=\"related_info\">\n          <span class=\"sku\">SKU:1234567</span><span class=\"quantity\">QTY Left:{{message.qty}}</span>\n        </div>\n        <div class=\"options\">\n          <div class=\"buying\">\n            <div class=\"quantity\">\n              <a (click)=\"addMed(message)\" mat-raised-button color=\"primary\" [ngStyle]=\"{'width' : '200px', 'margin-left':'0px'}\">Add to Cart</a>\n              <br/>\n              <br/>\n              <a routerLink=\"/checkout\" mat-raised-button color=\"success\" [ngStyle]=\"{'width' : '200px', 'background-color' : 'green','color':'white'}\">Checkout</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"social\">\n          <span class=\"buttons\"><img src=\"https://i.imgur.com/M8D8rr8.jpg\"/></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/individual-med/individual-med.component.ts":
/*!************************************************************!*\
  !*** ./src/app/individual-med/individual-med.component.ts ***!
  \************************************************************/
/*! exports provided: IndividualMedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualMedComponent", function() { return IndividualMedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndividualMedComponent = /** @class */ (function () {
    function IndividualMedComponent(route, data, cartservice) {
        this.route = route;
        this.data = data;
        this.cartservice = cartservice;
    }
    IndividualMedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
    };
    IndividualMedComponent.prototype.addMed = function (med) {
        this.cartservice.addToCart(med);
    };
    IndividualMedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individual-med',
            template: __webpack_require__(/*! ./individual-med.component.html */ "./src/app/individual-med/individual-med.component.html"),
            styles: [__webpack_require__(/*! ./individual-med.component.css */ "./src/app/individual-med/individual-med.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], IndividualMedComponent);
    return IndividualMedComponent;
}());



/***/ }),

/***/ "./src/app/limit.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/limit.pipe.ts ***!
  \*******************************/
/*! exports provided: LimitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitPipe", function() { return LimitPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LimitPipe = /** @class */ (function () {
    function LimitPipe() {
    }
    LimitPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.toLowerCase().includes(searchText);
        });
    };
    LimitPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], LimitPipe);
    return LimitPipe;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.authenticated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
    }
    LoginService.prototype.getAuth = function () {
        return this.authenticated.asObservable();
    };
    LoginService.prototype.checkAuth = function () {
        this.authenticated.next(true);
    };
    LoginService.prototype.storeEmail = function (email) {
        localStorage.setItem("email", email);
    };
    LoginService.prototype.getEmail = function () {
        return localStorage.getItem('email');
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.authenticated.next(false);
        this.router.navigate(["/login"]);
    };
    LoginService.prototype.sendToken = function (token) {
        localStorage.setItem("token", token);
    };
    LoginService.prototype.getToken = function () {
        return localStorage.getItem("token");
    };
    LoginService.prototype.isLoggedIn = function () {
        return this.getToken() !== null;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\n  margin: 20px auto;\n  text-align: center;\n  display: block;\n\n}\n.formfield{\n  text-align: center;\n}\n.error{\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f = \"ngForm\"  (ngSubmit)=\"onFormSubmit(f)\" novalidate>\n\n  <mat-form-field class=\"formfield\" appearance=\"outline\">\n    <mat-label>Email</mat-label>\n    <input matInput placeholder=\"Enter\" name=\"email\" ngModel #email = \"ngModel\"  required  pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" />\n\n  </mat-form-field>\n\n\n  <div *ngIf = \"email.touched && email.errors?.pattern\">\n    <span class=\"error\">The email id doesn't seem right</span>\n  </div>\n  <div *ngIf = \"email.touched && email.errors?.required\">\n    <span class=\"error\">The email cannot be empty</span>\n  </div>\n\n  <br />\n  <mat-form-field  class=\"formfield\" appearance=\"outline\">\n    <mat-label>Password</mat-label>\n    <input matInput ngModel #password=\"ngModel\" name=\"password\" minlength=\"4\" placeholder=\"Enter\" required/>\n  </mat-form-field>\n\n  <div *ngIf = \"password.invalid && password.touched\">\n    <span class=\"error\">The password is wrong</span>\n  </div>\n  <div *ngIf = \"errors.length > 0\">\n    <span class=\"error\">{{errors}}</span>\n  </div>\n<br />\n\n\n  <button mat-raised-button [disabled]=\"!f.valid\">Login</button>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.error */ "./src/app/app.error.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, authService, spinnerService) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.spinnerService = spinnerService;
        this.errors = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onFormSubmit = function (f) {
        var _this = this;
        this.spinnerService.show();
        this.http.post('/api/login', {
            email: f.value.email,
            passwordfield: f.value.password
        }).catch(function (error) {
            _this.spinnerService.hide();
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throwError(new _app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
        })
            .subscribe(function (response) {
            _this.errors = response.message;
            if (_this.errors === 'Login Successful') {
                _this.authService.storeEmail(f.value.email);
                _this.authService.checkAuth();
                _this.authService.sendToken(response.details);
                _this.spinnerService.hide();
                _this.router.navigate(['/home']);
            }
            else {
                _this.spinnerService.hide();
                alert("failed");
                _this.errors = response.message;
            }
        }, function (err) {
            _this.spinnerService.hide();
            _this.errors = err.message;
            throw err;
        });
        this.spinnerService.hide();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_7__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"]
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/med-list/med-list.component.css":
/*!*************************************************!*\
  !*** ./src/app/med-list/med-list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n  color: grey;\n  text-align: center;\n  padding: 20px ;\n}\n"

/***/ }),

/***/ "./src/app/med-list/med-list.component.html":
/*!**************************************************!*\
  !*** ./src/app/med-list/med-list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>List of all our Medicines</h2>\n<mat-card  *ngFor=\"let medicine of medicines\">\n  <mat-card-title>{{medicine.name | uppercase}}</mat-card-title>\n  <img mat-card-image src={{medicine.image}}>\n  <mat-card-content>\n    <span>{{medicine.price | currency : 'INR'}}</span>\n    <p>{{medicine.desc}}</p>\n    <a [routerLink]=\"['/medicine',medicine.id]\"><button mat-button (click)=\"changeMed(medicine)\">Buy Now</button></a>\n    <button mat-button (click)=\"addMed(medicine)\">Add to cart</button>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/med-list/med-list.component.ts":
/*!************************************************!*\
  !*** ./src/app/med-list/med-list.component.ts ***!
  \************************************************/
/*! exports provided: MedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedListComponent", function() { return MedListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MedListComponent = /** @class */ (function () {
    function MedListComponent(data, cartservice) {
        this.data = data;
        this.cartservice = cartservice;
    }
    MedListComponent.prototype.ngOnInit = function () {
    };
    MedListComponent.prototype.changeMed = function (med) {
        this.data.changeMessage(med);
    };
    MedListComponent.prototype.addMed = function (med) {
        this.cartservice.addToCart(med);
    };
    MedListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-med-list',
            template: __webpack_require__(/*! ./med-list.component.html */ "./src/app/med-list/med-list.component.html"),
            styles: [__webpack_require__(/*! ./med-list.component.css */ "./src/app/med-list/med-list.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], MedListComponent);
    return MedListComponent;
}());



/***/ }),

/***/ "./src/app/profile/order.model.ts":
/*!****************************************!*\
  !*** ./src/app/profile/order.model.ts ***!
  \****************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(name, date, time, sum) {
        this.name = name;
        this.date = date;
        this.time = time;
        this.sum = sum;
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"1:1\" >\n  <mat-grid-tile [colspan]=\"1\">\n\n    <app-upload [(url)]=picurl [editmode]=editEnabled ></app-upload>\n    <label for=\"cbeditmode\">Edit mode</label>\n    <input #cbeditmode id=\"cbeditmode\" [checked]=\"editEnabled\" (change)=\"editEnabled=cbeditmode.checked\" type=\"checkbox\">\n    <button class=\"button\" (click)=\"clear()\">Clear</button>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"2\" [ngStyle]=\"{'width' : '100%'}\">\n    <h2>Your orders</h2>\n    <br/>\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                         (closed)=\"panelOpenState = false\"\n                         *ngFor=\"let item of order\"\n                         [ngStyle]=\"{'width' : '100%'}\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{item.name}}\n        </mat-panel-title>\n        <mat-panel-description>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <b>Date :</b><span [ngStyle]=\"{'float':'right'}\">{{item.date}}</span><br />\n      <b>Time :</b> <span [ngStyle]=\"{'float':'right'}\">{{item.time}}</span><br />\n      <b>Order value :</b><span [ngStyle]=\"{'float':'right'}\"> Rs.{{item.sum}}</span>\n    </mat-expansion-panel>\n\n  </mat-grid-tile>\n  <br/>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _profileservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profileservice.service */ "./src/app/profile/profileservice.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.model */ "./src/app/profile/order.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, profile) {
        this.auth = auth;
        this.profile = profile;
        this.orders = {};
        this.order = [];
        this.editEnabled = true;
        var token = localStorage.getItem('token');
        var tokenInfo = this.getDecodedAccessToken(token);
        this.id = tokenInfo.userId;
    }
    ProfileComponent.prototype.getDecodedAccessToken = function (token) {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);
        }
        catch (Error) {
            return null;
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profile.getOrders(this.id).subscribe(function (data) {
            _this.orders = data;
            for (var i = 0; i < _this.orders.length; i = i + 1) {
                _this.order.push(new _order_model__WEBPACK_IMPORTED_MODULE_4__["Order"](_this.orders[i][0], _this.orders[i][1], _this.orders[i][2], _this.orders[i][3]));
            }
        });
    };
    ProfileComponent.prototype.clear = function () {
        this.picurl = '';
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _profileservice_service__WEBPACK_IMPORTED_MODULE_2__["ProfileserviceService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profileservice.service.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profileservice.service.ts ***!
  \***************************************************/
/*! exports provided: ProfileserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileserviceService", function() { return ProfileserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileserviceService = /** @class */ (function () {
    function ProfileserviceService(http, router) {
        this.http = http;
        this.router = router;
    }
    ProfileserviceService.prototype.getOrders = function (id) {
        return this.http.get("/api/orders/" + id);
    };
    ProfileserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileserviceService);
    return ProfileserviceService;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=search] {\n  background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;\n  border: solid 1px #ccc;\n  padding: 9px 10px 9px 32px;\n  width: 100%;\n  border-radius: 1em;\n  margin-left: 20%;\n  transition: all .5s;\n}\ninput[type=search]:focus {\n  width: 130%;\n  background-color: #fff;\n  border-color: #66CC75;\n  box-shadow: 0 0 5px rgba(109,207,246,.5);\n}\ninput {\n  outline: none;\n}\ninput[type=search] {\n  -webkit-appearance: textfield;\n  -webkit-box-sizing: content-box;\n  font-family: inherit;\n  font-size: 100%;\n}\ninput::-webkit-search-decoration,\ninput::-webkit-search-cancel-button {\n  display: none;\n}\ninput:-moz-placeholder {\n  color: #999;\n}\ninput::-webkit-input-placeholder {\n  color: #999;\n}\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form id=\"demo-1\">\n  <input type=\"search\"  placeholder=\"Search\"  [(ngModel)]=\"searchText\">\n</form>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.searchText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.change = function (event) {
        this.searchText.emit(event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchComponent.prototype, "searchText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SearchComponent.prototype, "change", null);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/searchd.directive.ts":
/*!**************************************!*\
  !*** ./src/app/searchd.directive.ts ***!
  \**************************************/
/*! exports provided: SearchdDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchdDirective", function() { return SearchdDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchdDirective = /** @class */ (function () {
    function SearchdDirective() {
    }
    SearchdDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSearchd]'
        }),
        __metadata("design:paramtypes", [])
    ], SearchdDirective);
    return SearchdDirective;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\n  margin: 20px auto;\n  text-align: center;\n  display: block;\n\n}\n.formfield{\n  text-align: center;\n}\n.error{\n  color: red;\n}\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form  #f=\"ngForm\" (ngSubmit)=\"onFormSubmit(f)\" >\n\n  <mat-form-field class=\"formfield\" appearance=\"outline\">\n    <mat-label>Name </mat-label>\n    <input ngModel name=\"fname\" #fname = \"ngModel\" id=\"inputName\" matInput placeholder=\"Enter\"  required >\n  </mat-form-field>\n  <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\"\n       class=\"alert alert-danger\">\n    <div *ngIf = \"fname.errors?.required\">\n      <span class=\"error\">Name field can't be blank</span>\n    </div>\n  </div>\n  <br />\n  <mat-form-field class=\"formfield\" appearance=\"outline\">\n    <mat-label>Username/Email </mat-label>\n    <input ngModel name=\"email\" #email = \"ngModel\" id=\"inputEmail\" matInput placeholder=\"Enter\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required >\n\n  </mat-form-field>\n  <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n       class=\"alert alert-danger\">\n    <div *ngIf = \"email.errors?.required\">\n      <span class=\"error\">Email field can't be blank</span>\n    </div>\n    <div *ngIf = \"email.errors?.pattern && email.touched\">\n      <span class=\"error\">The email id doesn't seem right</span>\n    </div>\n  </div>\n  <br />\n  <mat-form-field  class=\"formfield\" appearance=\"outline\">\n    <mat-label>Password</mat-label>\n    <input matInput ngModel #password=\"ngModel\" name=\"password\" minlength=\"4\" placeholder=\"Enter\" required/>\n  </mat-form-field>\n  <div *ngIf = \"errors.length > 0\">\n    <span class=\"error\">{{errors}}</span>\n  </div>\n\n  <br />\n  <button type=\"submit\" [disabled]=\"!f.valid\" mat-raised-button>Signup</button>\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.error */ "./src/app/app.error.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(http, router, auth, spinnerService) {
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.spinnerService = spinnerService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.errors = "";
    };
    SignupComponent.prototype.onFormSubmit = function (f) {
        var _this = this;
        this.spinnerService.show();
        this.http.post('/api/signup', {
            email: f.value.email,
            passwordfield: f.value.password,
            fname: f.value.fname
        }).catch(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throwError(new _app_error__WEBPACK_IMPORTED_MODULE_4__["AppError"](error));
        }).subscribe(function (response) {
            alert("Signup successfull.");
            _this.router.navigate(['/login']);
        }, function (err) {
            _this.errors = err.message;
            throw err;
        });
        this.spinnerService.hide();
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/srch/srch.component.css":
/*!*****************************************!*\
  !*** ./src/app/srch/srch.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/srch/srch.component.html":
/*!******************************************!*\
  !*** ./src/app/srch/srch.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  srch works!\n</p>\n"

/***/ }),

/***/ "./src/app/srch/srch.component.ts":
/*!****************************************!*\
  !*** ./src/app/srch/srch.component.ts ***!
  \****************************************/
/*! exports provided: SrchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrchComponent", function() { return SrchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SrchComponent = /** @class */ (function () {
    function SrchComponent() {
    }
    SrchComponent.prototype.ngOnInit = function () {
    };
    SrchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-srch',
            template: __webpack_require__(/*! ./srch.component.html */ "./src/app/srch/srch.component.html"),
            styles: [__webpack_require__(/*! ./srch.component.css */ "./src/app/srch/srch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SrchComponent);
    return SrchComponent;
}());



/***/ }),

/***/ "./src/app/upload.service.ts":
/*!***********************************!*\
  !*** ./src/app/upload.service.ts ***!
  \***********************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadService = /** @class */ (function () {
    function UploadService(http, spinnerService) {
        this.http = http;
        this.spinnerService = spinnerService;
    }
    UploadService.prototype.pushFileToStorage = function (file) {
        var formdata = new FormData();
        formdata.append('file', file);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', '/api/post', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    UploadService.prototype.getFiles = function (id) {
        return this.http.get("/api/get/" + id);
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.css":
/*!*********************************************!*\
  !*** ./src/app/upload/upload.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-picture {\n  position: relative;\n  z-index: 1;\n  width: 300px;\n  height:300px;\n  background-image:url('profile-placeholder.png');\n  background-size: contain;\n  border-radius: 1em;\n}\n\n.profile-picture img {\n  width: 300px;\n  height: 300px;\n  position: absolute;\n  z-index: 2;\n  border-radius: 1em;\n}\n\n.profile-picture label {\n  width: 300px;\n  height: 300px;\n  position: relative;\n  z-index: 3;\n}\n\n.profile-picture .drag-over .infotext {\n  color: white;\n  border: dashed 5px white;\n}\n\n.profile-picture .infotext {\n  margin-left: 5px;\n  margin-top: 5px;\n  height: 290px;\n  width: 290px;\n  vertical-align: middle;\n  text-align: center;\n  color: rgba(255,255,255,0.8);\n  border: dashed 3px rgba(255,255,255,0.8);\n  border-radius: 10px;\n  padding-top: 110px;\n  font-size: 150%;\n}\n"

/***/ }),

/***/ "./src/app/upload/upload.component.html":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-picture\">\n  <img *ngIf=\"url\" width=300 height=300 src=\"{{url}}\" />\n  <label *ngIf=\"editmode\" for=\"uploader-input\" ng2FileDrop [ngClass]=\"{'drag-over': hasDragOver}\" (fileOver)=\"fileOver($event)\" [uploader]=\"uploader\">\n    <div class=\"infotext\"><span *ngIf=\"!url\" >Drop your picture<br>or click to upload</span></div>\n  </label>\n  <input *ngIf=\"editmode\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" id=\"uploader-input\" style=\"display:none\" />\n</div>\n"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../upload.service */ "./src/app/upload.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadComponent = /** @class */ (function () {
    function UploadComponent(uploadService, spinnerService) {
        var _this = this;
        this.uploadService = uploadService;
        this.spinnerService = spinnerService;
        this.progress = { percentage: 0 };
        this.hasDragOver = false;
        this.editmode = false;
        this.url = {};
        this.urlChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var token = localStorage.getItem('token');
        var tokenInfo = this.getDecodedAccessToken(token);
        var id = tokenInfo.userId;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({
            url: "http://localhost:4200/api/post/" + id,
            disableMultipart: false,
            autoUpload: true
        });
        this.uploadService.getFiles(id).subscribe(function (data) {
            _this.url = data;
            _this.urlChange.emit(_this.url);
        });
    }
    UploadComponent.prototype.getDecodedAccessToken = function (token) {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
        }
        catch (Error) {
            return null;
        }
    };
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.fileOver = function (e) {
        this.hasDragOver = e;
    };
    UploadComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "editmode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "urlChange", void 0);
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/upload/upload.component.css")]
        }),
        __metadata("design:paramtypes", [_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"], ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/prakashdas/demo2/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map