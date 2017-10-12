webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <app-navbar></app-navbar> -->\n<div style=\"text-align:center\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_selfie_service__ = __webpack_require__("../../../../../src/app/services/selfie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_is_logged_in_canactivate_service__ = __webpack_require__("../../../../../src/app/services/is-logged-in.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_quizz_controller_service__ = __webpack_require__("../../../../../src/app/services/quizz-controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_dataemotion_service__ = __webpack_require__("../../../../../src/app/services/dataemotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__quizz_quizz_component__ = __webpack_require__("../../../../../src/app/quizz/quizz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__editprofile_editprofile_component__ = __webpack_require__("../../../../../src/app/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__selfie_selfie_component__ = __webpack_require__("../../../../../src/app/selfie/selfie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__brother_brother_component__ = __webpack_require__("../../../../../src/app/brother/brother.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__mail_mail_component__ = __webpack_require__("../../../../../src/app/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__userprofile_profile_profile_component__ = __webpack_require__("../../../../../src/app/userprofile/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__userprofile_todo_todo_component__ = __webpack_require__("../../../../../src/app/userprofile/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__userprofile_points_points_component__ = __webpack_require__("../../../../../src/app/userprofile/points/points.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__loginform_loginform_component__["a" /* LoginformComponent */],
            __WEBPACK_IMPORTED_MODULE_17__signupform_signupform_component__["a" /* SignupformComponent */],
            __WEBPACK_IMPORTED_MODULE_18__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__quizz_quizz_component__["a" /* QuizzComponent */],
            __WEBPACK_IMPORTED_MODULE_20__editprofile_editprofile_component__["a" /* EditprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_22__selfie_selfie_component__["a" /* SelfieComponent */],
            __WEBPACK_IMPORTED_MODULE_23__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_24__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_25__brother_brother_component__["a" /* BrotherComponent */],
            __WEBPACK_IMPORTED_MODULE_26__mail_mail_component__["a" /* MailComponent */],
            __WEBPACK_IMPORTED_MODULE_27__userprofile_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_28__userprofile_todo_todo_component__["a" /* TodoComponent */],
            __WEBPACK_IMPORTED_MODULE_29__userprofile_points_points_component__["a" /* PointsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_30_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["a" /* AlertModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__services_is_logged_in_canactivate_service__["a" /* IsLoggedInService */], __WEBPACK_IMPORTED_MODULE_10__services_quizz_controller_service__["a" /* QuizzControllerService */], __WEBPACK_IMPORTED_MODULE_11__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_7__services_selfie_service__["a" /* SelfieService */], __WEBPACK_IMPORTED_MODULE_12__services_todo_service__["a" /* TodoService */], __WEBPACK_IMPORTED_MODULE_13__services_dataemotion_service__["a" /* DataemotionService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/brother/brother.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img1.png") + ");\n  height: 100vh;\n  font-family: Apercu;\n}\n.home{\n  list-style-type: none;\n  width: 329px;\n\theight: 348px;\n\tfont-family: Apercu;\n\tfont-size: 40px;\n\tfont-weight: bold;\n\tline-height: 1.32;\n\ttext-align: left;\n\tcolor: #000000;\n  padding-top: 30%;\n  padding-left: 10%;\n}\n.home a{\n  color:#000;\n}\n.home a:hover {\n    color: #0074cd;\n}\n\n.home li{\n  padding:2%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/brother/brother.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"img\">\n  <button (click)=\"cancel()\">Back</button>\n<div *ngIf=\"user\" class=\"home\">\n  <div *ngIf=\"user.role=='Student'\">\n  <li><a [routerLink]=\"['/chat',user._id]\">Chat</a></li>\n  <li><a [routerLink]=\"['/selfie',user._id]\">Selfie</a></li>\n</div>\n<div *ngIf=\"user.role=='Tutor'\" class=\"home\">\n  <li><a [routerLink]=\"['/chat',user.refToBrother]\">Chat</a></li>\n  <li><a [routerLink]=\"['/selfie',user.refToBrother]\">Selfie</a></li>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/brother/brother.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrotherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrotherComponent = (function () {
    function BrotherComponent(location, auth) {
        var _this = this;
        this.location = location;
        this.auth = auth;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    BrotherComponent.prototype.ngOnInit = function () {
    };
    BrotherComponent.prototype.cancel = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    return BrotherComponent;
}());
BrotherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-brother',
        template: __webpack_require__("../../../../../src/app/brother/brother.component.html"),
        styles: [__webpack_require__("../../../../../src/app/brother/brother.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], BrotherComponent);

var _a, _b;
//# sourceMappingURL=brother.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img1.png") + ");\n  height: 100vh;\n  font-family: Apercu;\n}\nh3{\n  margin-top: 0;\n  padding: 10% 0;\n}\n\ntextarea{\n  width: 302px;\n\theight: 60px;\n\tbackground-color: #ffffff;\n\tbox-shadow: 0 10px 40px 0 rgba(190, 190, 206, 0.5);\n\tfont-family: Apercu;\n\tfont-size: 20px;\n\tletter-spacing: -0.6px;\n\ttext-align: left;\n\tcolor: #c7c7d3;\n}\n\nform{\n  position:fixed;\n  top:500px;\n  left:40px;\n}\n\n.chatbox:nth-child(odd){\n  width: 180px;\n\theight: 60px;\n\tborder-radius: 5px;\n\tbackground-color: #02ad58;\n\tbox-shadow: 0 10px 40px 0 rgba(190, 190, 206, 0.5);\n  margin-left: 5%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color:#FFF;\n}\n\n\n.chatbox:nth-child(even){\n  width: 180px;\n\theight: 60px;\n  border-radius: 5px;\n  background-color: #0074cd;\n\tbox-shadow: 0 10px 40px 0 rgba(110, 110, 123, 0.5);\n  margin: 5% 0 5% 40%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color:#FFF;\n}\n\n.glyphico{\n  position:relative;\n  left:55%;\n  top: -50px;\n  border: 1px solid #c7c7d3;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"img\">\n  <button (click)=\"cancel()\">Back</button>\n  <h3>Chat</h3>\n   <div *ngIf=\"message\">\n      <div *ngFor=\" let m of message\" class=\"chatbox\">\n        <div>\n    <p class=\"text\">{{m.message}}</p>\n  </div>\n</div>\n\n\n<form >\n  <textarea rows=\"4\" cols=\"50\" [(ngModel)]=\"messagetosend\" name=\"message\">\n\n</textarea>\n\n <div *ngIf=\"user.role=='Student'\">\n    <button (click)=\"send(this.user._id,messagetosend,this.user.refToBrother,this.user.username)\">Send</button>\n</div>\n<div *ngIf=\"user.role=='Tutor'\">\n   <button (click)=\"bigBrotherSend(this.user._id,messagetosend,this.user.refToBrother,this.user.username)\" class=\"glyphicon glyphicon-send\" aria-hidden=\"true\"></button>\n</div>\n\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_is_logged_in_canactivate_service__ = __webpack_require__("../../../../../src/app/services/is-logged-in.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = (function () {
    function ChatComponent(location, auth, messages, route, log) {
        var _this = this;
        this.location = location;
        this.auth = auth;
        this.messages = messages;
        this.route = route;
        this.log = log;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) { return _this.userId = String(params['id']); });
        setInterval(function () {
            _this.messages.getmessages(_this.userId)
                .subscribe(function (message) { return _this.message = message; });
        }, 1000);
        this.currentUser = this.log.user;
        this.userRole = this.currentUser.role;
    };
    ChatComponent.prototype.send = function (id, message, ref, name) {
        var _this = this;
        console.log(name);
        this.messages.sendmessages(id, message, ref, name).map(function (user) { return console.log(user); })
            .subscribe(function (result) {
            _this.messages.getmessages(_this.userId)
                .subscribe(function (message) { return _this.message = message; });
        });
    };
    ChatComponent.prototype.bigBrotherSend = function (id, message, ref, name) {
        var _this = this;
        console.log(this.user);
        console.log(name);
        this.messages.bigBrotherSendMessages(id, message, ref, name).map(function (user) { return console.log(user); })
            .subscribe(function (response) {
            _this.messages.getmessages(_this.userId)
                .subscribe(function (message) { return _this.message = message; });
        });
    };
    ChatComponent.prototype.cancel = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_is_logged_in_canactivate_service__["a" /* IsLoggedInService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_is_logged_in_canactivate_service__["a" /* IsLoggedInService */]) === "function" && _e || Object])
], ChatComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<form >\n  <h2> Edit</h2>\n  <label> Username </label>\n  <input type=\"text\" [(ngModel)]=\"newUser.username\" name=\"username\"/>\n  <br>\n  <label> Password </label>\n  <input type=\"password\" [(ngModel)]=\"newUser.password\" name=\"password\">\n  <br>\n  <label> Alias </label>\n  <input type=\"text\" [(ngModel)]=\"newUser.alias\" name=\"alias\"/>\n  <br>\n  <label> Email </label>\n  <input type=\"email\" [(ngModel)]=\"newUser.email\" name=\"email\"/>\n  <br>\n  <label> Cumpleaños </label>\n  <input type=\"date\" [(ngModel)]=\"newUser.date\" name=\"date\"/>\n  <br>\n  <label>Picture</label>\n\n  <fieldset>\n     <input type=\"file\" name=\"file\"  id=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  </fieldset>\n\n  <button (click)=\"submit()\"> Edit </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/auth/edit";
var EditprofileComponent = (function () {
    function EditprofileComponent(auth, route) {
        this.auth = auth;
        this.route = route;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({
            url: BASEURL
        });
        this.newUser = {
            id: '',
            username: '',
            password: '',
            alias: '',
            email: '',
            birthday: ''
        };
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) { return _this.userId = String(params['id']); });
    };
    EditprofileComponent.prototype.submit = function () {
        var _this = this;
        this.newUser.id = this.userId;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('name', _this.newUser.username);
            form.append('password', _this.newUser.password);
            form.append('alias', _this.newUser.alias);
            form.append('email', _this.newUser.email);
            form.append('birthday', _this.newUser.birthday);
        };
        console.log("hago subida de archivos");
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function (res) { return console.log(res); };
    };
    return EditprofileComponent;
}());
EditprofileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editprofile',
        template: __webpack_require__("../../../../../src/app/editprofile/editprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/editprofile/editprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], EditprofileComponent);

var _a, _b;
//# sourceMappingURL=editprofile.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img1.png") + ");\n  height: 100vh;\n  font-family: Apercu;\n}\n.home{\n  list-style-type: none;\n  width: 329px;\n\theight: 348px;\n\tfont-family: Apercu;\n\tfont-size: 40px;\n\tfont-weight: bold;\n\tline-height: 1.32;\n\ttext-align: left;\n\tcolor: #000000;\n  padding-top: 50%;\n}\n.home a{\n  color:#000;\n}\n.home a:hover {\n    color: #0074cd;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"img\">\n  <button (click)=\"cancel()\">Back</button>\n<div *ngIf=\"user\">\n  <ul class=\"home\">\n  <li><a [routerLink]=\"['/user']\">Mi perfil</a></li>\n  <div *ngIf=\"user.role=='Tutor'\">\n  <li><a [routerLink]=\"['/brother']\">Hermano Menor</a></li>\n</div>\n<div *ngIf=\"user.role=='Student'\">\n<li><a [routerLink]=\"['/brother']\">Hermano Mayor</a></li>\n</div>\n  <li><a [routerLink]=\"['/quizz']\">Quizz</a></li>\n  <li><a [routerLink]=\"['/mail']\">Buzón virtual</a></li>\n</ul>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(location, auth) {
        var _this = this;
        this.location = location;
        this.auth = auth;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.cancel = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img1.png") + ");\n  height: 100vh;\n  font-family: Apercu;\n}\n.btn{\n  margin-bottom:10%;\n  background-color: black;\n  color:#FFF;\n  font-size: 14px;\n\tline-height: 1.14;\n  width: 120px;\n\theight: 40px;\n\tborder-radius: 100px;\n\tbackground-color: #000000;\n}\n\n.text{\n  margin:10% 13% 10% 13%;\n  font-size: 36px;\n\tline-height: 1.11;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"img\">\n<h2 class=\"text\">Esto es BIG Project, una iniciativa para acabar con el acoso en las escuelas.<br>¿Te apuntas?</h2>\n<div>\n<a [routerLink]=\"['/signup']\" class=\"btn btn-round\">Registrar usuario</a>\n</div>\n<a [routerLink]=\"['/login']\" class=\"btn btn-round\">Inicio sesión</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-index',
        template: __webpack_require__("../../../../../src/app/index/index.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IndexComponent);

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img1.png") + ");\n  height: 100vh;\n  font-family: Apercu;\n}\n.btn{\n  margin-bottom:10%;\n  background-color: black;\n  color:#FFF;\n  font-size: 14px;\n\tline-height: 1.14;\n  float: right;\n  margin-right: 10%;\n  width: 110px;\n\theight: 40px;\n\tborder-radius: 100px;\n\tbackground-color: #000000;\n}\n.login{\n  padding-top: 30%;\n}\ninput{\n  margin: 10% 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  border-bottom: 1px solid black;\n  height:40px;\n}\ninput textarea { background: #FFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"img\">\n  <button (click)=\"cancel()\">Back</button>\n  <div class=\"login\">\n<form>\n  <div class=\"form-row\">\n   <div class=\"col\">\n  <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" placeholder=\"Usuario\"/>\n  </div>\n  <div class=\"col\">\n  <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" placeholder=\"Contraseña\"/>\n</div>\n</div>\n  <button (click)=\"login()\" class=\"btn btn-default\"> OK </button>\n</form>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginformComponent = (function () {
    function LoginformComponent(location, auth, router) {
        this.location = location;
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
    };
    LoginformComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            console.log("Login with " + username + " " + password);
            this.auth.login(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe(function (r) { return _this.router.navigate(['/home']); });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    LoginformComponent.prototype.cancel = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginformComponent);

var _a, _b, _c;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/mail/mail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img1.png") + ");\n  height: 100vh;\n  font-family: Apercu;\n}\np{\n  font-family: Apercu;\n\tfont-size: 20px;\n\tline-height: 1.05;\n\ttext-align: justify;\n\tcolor: #000000;\n  padding: 2% 10%;\n}\n\nh3{\n  margin-top: 0;\n  padding: 10% 0;\n}\n\ntextarea{\n  width: 360px;\n\theight: 253px;\n\topacity: 0.19;\n\tbackground-color: #0074cd;\n  margin-top: 2%;\n  color:#000;\n}\n\n.btn{\n  margin-bottom:10%;\n  background-color: black;\n  color:#FFF;\n  font-size: 18px;\n\tline-height: 1.14;\n  float: right;\n  margin-right: 10%;\n  width: 110px;\n\theight: 40px;\n\tborder-radius: 100px;\n\tbackground-color: #000000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mail/mail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"img\">\n  <button (click)=\"cancel()\">Back</button>\n<h3>Buzón</h3>\n<p>¿Tienes algo que decir? Seguro que sí, todas las ideas y propuestas son bienvenidas.</p>\n\n<p>Escribe aquí tu sugerencia.</p>\n<textarea rows=\"4\" cols=\"50\">\n</textarea>\n<button class=\"btn\">Enviar</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/mail/mail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailComponent = (function () {
    function MailComponent(location) {
        this.location = location;
    }
    MailComponent.prototype.ngOnInit = function () {
    };
    MailComponent.prototype.cancel = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    return MailComponent;
}());
MailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-mail',
        template: __webpack_require__("../../../../../src/app/mail/mail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mail/mail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object])
], MailComponent);

var _a;
//# sourceMappingURL=mail.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-faded\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <span class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></span>\n  </a>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/quizz/quizz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img1.png") + ");\n  height: 100vh;\n  font-family: Apercu;\n}\nh3{\n  margin:0;\n  padding-top: 5%;\n}\n.introduction p{\n  font-family: Apercu;\n\tfont-size: 20px;\n\tline-height: 1.05;\n\ttext-align: justify;\n\tcolor: #000000;\n  padding: 10% 10% 0 10%;\n}\n.btn{\n  margin-bottom:10%;\n  background-color: black;\n  color:#FFF;\n  font-size: 14px;\n\tline-height: 1.14;\n  float: right;\n  margin-right: 10%;\n  width: 110px;\n\theight: 40px;\n\tborder-radius: 100px;\n\tbackground-color: #000000;\n}\n.finish{\n  font-family: Apercu;\n\tfont-size: 22px;\n\tline-height: 1.5;\n\ttext-align: justify;\n\tcolor: #000000;\n  padding: 20% 10% 0 10%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quizz/quizz.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"img\">\n  <button (click)=\"cancel()\">Back</button>\n<h3>Quizz</h3>\n  <div *ngIf=\"this.counter=='0'\" class=\"introduction\">\n    <p>Hola {{this.user.username}}</p>\n    <p>Con tu ayuda, vamos a hacer algo grande, eliminar el acoso de las aulas. ¿Estás preparado para esta misión?</p>\n    <button (click)=\"this.getRandomNumber()\" class=\"btn\">Siguinte</button>\n  </div>\n  <div *ngIf=\"this.counter >='1'&& this.counter<'4'\">\n    <!-- {{ this.Quizz | json}} -->\n      <h3>{{this.counter}}/3</h3>\n      <p>{{this.Quizz[0].Quizz[1].question }}</p>\n  <div *ngIf=\"this.quizzcounter=='0'\">\n    <form>\n      <textarea [(ngModel)]=\"formInfo.answer\" name=\"answer\" value=\"{{this.Quizz[0].Quizz[this.quizzcounter].answer[0].value}}\"rows=\"4\" cols=\"50\">\n      </textarea>\n     <button (click)=\"this.getRandomNumber(); this.getPoints(this.user._id)\" class=\"btn\">Siguiente</button>\n   </form>\n  </div>\n  <div *ngIf=\"this.quizzcounter>'0' && this.quizzcounter<3\">\n       <form>\n        <input type=\"radio\" [(ngModel)]=\"formInfo.answer\" name=\"answer\" value=\"{{this.Quizz[0].Quizz[this.quizzcounter].answer[0].value}}\"> {{this.Quizz[0].Quizz[this.quizzcounter].answer[0].answer}}\n        <br>\n        <input type=\"radio\" [(ngModel)]=\"formInfo.answer\" name=\"answer\" value=\"{{this.Quizz[0].Quizz[this.quizzcounter].answer[1].value}}\"> {{this.Quizz[0].Quizz[this.quizzcounter].answer[1].answer}}\n        <br>\n        <input type=\"radio\" [(ngModel)]=\"formInfo.answer\" name=\"answer\" value=\"{{this.Quizz[0].Quizz[this.quizzcounter].answer[2].value}}\"> {{this.Quizz[0].Quizz[this.quizzcounter].answer[2].answer}}\n        <br>\n        <button (click)=\"this.getRandomNumber(); this.getPoints(this.user._id)\" class=\"btn\">Siguiente</button>\n      </form>\n</div>\n  </div>\n  <div *ngIf=\"this.counter=='4'\">\n    <p class=\"finish\">¡Hemos terminado por hoy! Muchas gracias por paticipar en BIG Project. Acabas de conseguir 4 puntos extra que se añadirán a tu cuenta. Y recuerda, ante el abuso y acoso, TOLERANCIA CERO.</p>\n    <button (click)=\"this.goBack()\" class=\"btn\">Volver</button>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/quizz/quizz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quizz_controller_service__ = __webpack_require__("../../../../../src/app/services/quizz-controller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizzComponent = (function () {
    function QuizzComponent(location, auth, controller, router) {
        this.location = location;
        this.auth = auth;
        this.controller = controller;
        this.router = router;
        this.quizzcounter = -1;
        this.counter = 0;
        this.formInfo = {
            answer: ""
        };
    }
    QuizzComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.controller.getQuizz().subscribe(function (quizz) { return _this.Quizz = quizz; });
    };
    QuizzComponent.prototype.getRandomNumber = function () {
        if (this.counter < 4) {
            this.counter++;
        }
        else {
            this.counter = 0;
        }
        if (this.quizzcounter < 3) {
            console.log('entro a sumar');
            this.quizzcounter++;
            console.log(this.quizzcounter);
        }
        else {
            this.quizzcounter = -1;
        }
    };
    QuizzComponent.prototype.goBack = function () {
        this.router.navigate(['/home']);
    };
    QuizzComponent.prototype.getPoints = function (user) {
        var answer = this.formInfo;
        if ((answer.answer).length > 1) {
            answer.answer = "2";
        }
        var id = user;
        this.controller.sendPoints(id, answer)
            .map(function (res) { return console.log(res); })
            .subscribe(function (r) { return console.log(r); });
    };
    QuizzComponent.prototype.cancel = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    return QuizzComponent;
}());
QuizzComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quizz',
        template: __webpack_require__("../../../../../src/app/quizz/quizz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/quizz/quizz.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_quizz_controller_service__["a" /* QuizzControllerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_quizz_controller_service__["a" /* QuizzControllerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], QuizzComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=quizz.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quizz_quizz_component__ = __webpack_require__("../../../../../src/app/quizz/quizz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editprofile_editprofile_component__ = __webpack_require__("../../../../../src/app/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_is_logged_in_canactivate_service__ = __webpack_require__("../../../../../src/app/services/is-logged-in.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__selfie_selfie_component__ = __webpack_require__("../../../../../src/app/selfie/selfie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_index_component__ = __webpack_require__("../../../../../src/app/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__brother_brother_component__ = __webpack_require__("../../../../../src/app/brother/brother.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mail_mail_component__ = __webpack_require__("../../../../../src/app/mail/mail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__userprofile_profile_profile_component__ = __webpack_require__("../../../../../src/app/userprofile/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__userprofile_todo_todo_component__ = __webpack_require__("../../../../../src/app/userprofile/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__userprofile_points_points_component__ = __webpack_require__("../../../../../src/app/userprofile/points/points.component.ts");















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__index_index_component__["a" /* IndexComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_is_logged_in_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__["a" /* LoginformComponent */], },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__["a" /* SignupformComponent */], },
    { path: 'quizz', component: __WEBPACK_IMPORTED_MODULE_4__quizz_quizz_component__["a" /* QuizzComponent */], },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_5__editprofile_editprofile_component__["a" /* EditprofileComponent */] },
    { path: 'chat/:id', component: __WEBPACK_IMPORTED_MODULE_7__chat_chat_component__["a" /* ChatComponent */] },
    { path: 'selfie/:id', component: __WEBPACK_IMPORTED_MODULE_8__selfie_selfie_component__["a" /* SelfieComponent */] },
    { path: 'brother', component: __WEBPACK_IMPORTED_MODULE_10__brother_brother_component__["a" /* BrotherComponent */] },
    { path: 'mail', component: __WEBPACK_IMPORTED_MODULE_11__mail_mail_component__["a" /* MailComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__userprofile_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'todo', component: __WEBPACK_IMPORTED_MODULE_13__userprofile_todo_todo_component__["a" /* TodoComponent */] },
    { path: 'points', component: __WEBPACK_IMPORTED_MODULE_14__userprofile_points_points_component__["a" /* PointsComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/selfie/selfie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden{\n  visibility: hidden;\n}\n.img{\n  width:50%;\n  height:200px;\n}\n.imgb{\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img1.png") + ");\n  height: 100vh;\n  font-family: Apercu;\n}\nh3{\n  margin:0;\n  padding-top: 5%;\n  margin-bottom: 30%;\n}\n\n.pic{\n  width:100%;\n  background-color: #0074cd;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selfie/selfie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"imgb\">\n  <button (click)=\"cancel()\">Back</button>\n  <h3>Cámara</h3>\n\n<div *ngIf=\"selfie\" class=\"pic\">\n<img [src]=\"urlimg + selfie.selfie\" class=\"img\"/>\n</div>\n<button (click)=\"getPersonEmotion(urlimg + selfie.selfie)\">Get emotion</button>\n<div *ngIf=\"personEmotion\">\n<p>Main emotion: {{personEmotion.name}}</p>\n</div>\n\n<form>\n  <fieldset>\n     <input type=\"file\" name=\"file\"  id=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n  </fieldset>\n  <button (click)=\"submit(this.user.refToBrother,this.user._id)\"> submit </button>\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/selfie/selfie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_selfie_service__ = __webpack_require__("../../../../../src/app/services/selfie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dataemotion_service__ = __webpack_require__("../../../../../src/app/services/dataemotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BASEURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASEURL + "/selfie";
var BASEURLSelf = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASEURL;
var SelfieComponent = (function () {
    function SelfieComponent(location, auth, self, route, data) {
        this.location = location;
        this.auth = auth;
        this.self = self;
        this.route = route;
        this.data = data;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: BASEURL
        });
        this.newSelfie = {
            refToOlderBrother: '',
            refToYoungerBrother: ''
        };
        this.urlimg = BASEURLSelf;
        this.imageUrl = '';
    }
    SelfieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
        this.route.params
            .subscribe(function (params) { return _this.userId = String(params['id']); });
        this.self.getLastSelfie(this.userId).subscribe(function (res) { return _this.selfie = res; });
    };
    SelfieComponent.prototype.submit = function (ref, id) {
        var _this = this;
        this.newSelfie.refToOlderBrother = ref;
        this.newSelfie.refToYoungerBrother = id;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('refToOlderBrother', _this.newSelfie.refToOlderBrother);
            form.append('refToYoungerBrother', _this.newSelfie.refToYoungerBrother);
        };
        console.log("hago subida de archivos");
        this.uploader.uploadAll();
        this.uploader.onCompleteItem = function () { return console.log("hecho"); };
    };
    SelfieComponent.prototype.getPersonEmotion = function (imageUrl) {
        var _this = this;
        console.log(imageUrl);
        this.data.getPersonEmotion(imageUrl).subscribe(function (data) {
            return _this.personEmotion = _this.getScore(data[0].scores);
        });
    };
    SelfieComponent.prototype.getScore = function (objScores) {
        var scoresArr = Object.entries(objScores);
        var maxEmotion = {
            name: '',
            score: 0
        };
        for (var i = 0; i < scoresArr.length - 1; i++) {
            console.log(scoresArr[i][1]);
            if (scoresArr[i][1] > maxEmotion.score) {
                maxEmotion.name = scoresArr[i][0];
                maxEmotion.score = scoresArr[i][1];
            }
        }
        return maxEmotion;
    };
    SelfieComponent.prototype.cancel = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    return SelfieComponent;
}());
SelfieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-selfie',
        template: __webpack_require__("../../../../../src/app/selfie/selfie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/selfie/selfie.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_selfie_service__["a" /* SelfieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_selfie_service__["a" /* SelfieService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_dataemotion_service__["a" /* DataemotionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_dataemotion_service__["a" /* DataemotionService */]) === "function" && _e || Object])
], SelfieComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=selfie.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/auth";
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        console.log("AUTH ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.signup = function (username, password, role) {
        var _this = this;
        console.log("entrooo");
        return this.http.post(BASEURL + "/signup", { username: username, password: password, role: role }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(BASEURL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (quizz) { return _this.emitUserLoginEvent(null); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.getbro = function (id) {
        console.log(id);
        return this.http.post(BASEURL + "/bro", { id: id }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.updateUser = function (id, username, password, alias, email, birthday, filename) {
        console.log(filename);
        return this.http.post(BASEURL + "/edit", { id: id, username: username, password: password, alias: alias, email: email, birthday: birthday, filename: filename })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/dataemotion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataemotionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataemotionService = (function () {
    function DataemotionService(http) {
        this.http = http;
        this.url = "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize";
    }
    DataemotionService.prototype.getPersonEmotion = function (imageUrl) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": "4b8e96c60cf44ca09ff34bf648d79f97"
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.url, { url: imageUrl }, options)
            .map(function (data) { return data.json(); })
            .do(function (result) { return console.log(result); });
    };
    return DataemotionService;
}());
DataemotionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataemotionService);

var _a;
//# sourceMappingURL=dataemotion.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/is-logged-in.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var timeout = function (nS) { return new Promise(function (resolve) { return setTimeout(resolve, nS * 1000); }); };
var IsLoggedInService = (function () {
    function IsLoggedInService(auth) {
        this.auth = auth;
    }
    IsLoggedInService.prototype.canActivate = function () {
        console.log("Checking can activate");
        //return timeout(5).then(() => true);
        //return this.auth.isLoggedIn().map(user => true)
        this.user = this.auth.getUser();
        return this.user ? true : false;
        //return false;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsLoggedInService);

var _a;
//# sourceMappingURL=is-logged-in.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/auth";
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = { withCredentials: true };
        //this.isLoggedIn().subscribe();
    }
    MessageService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    MessageService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    MessageService.prototype.handleError = function (e) {
        console.log("Message ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    MessageService.prototype.sendmessages = function (id, message, ref, name) {
        console.log(ref);
        return this.http.post(BASEURL + "/messages", { id: id, message: message, ref: ref, name: name }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService.prototype.bigBrotherSendMessages = function (id, message, ref, name) {
        console.log(ref);
        return this.http.post(BASEURL + "/bigbrothermessages", { id: id, message: message, ref: ref, name: name }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService.prototype.getmessages = function (id) {
        console.log(id);
        return this.http.get(BASEURL + "/messages/" + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MessageService.prototype.getlastmessages = function (id) {
        console.log("titi");
        return this.http.get(BASEURL + "/last/" + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return MessageService;
}());
MessageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MessageService);

var _a;
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/quizz-controller.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzControllerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/quizz";
var BASEURLAuth = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/auth";
var QuizzControllerService = (function () {
    function QuizzControllerService(http) {
        this.http = http;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    QuizzControllerService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    QuizzControllerService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    QuizzControllerService.prototype.getQuizz = function () {
        return this.http.get(BASEURL + "/", this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuizzControllerService.prototype.handleError = function (e) {
        console.log("Quizz ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    QuizzControllerService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASEURLAuth + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    QuizzControllerService.prototype.sendPoints = function (id, points) {
        return this.http.post(BASEURL + "/points", { id: id, points: points }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return QuizzControllerService;
}());
QuizzControllerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], QuizzControllerService);

var _a;
//# sourceMappingURL=quizz-controller.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/selfie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/selfie";
var SelfieService = (function () {
    function SelfieService(http) {
        this.http = http;
    }
    SelfieService.prototype.handleError = function (e) {
        console.log("SELFIE ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    SelfieService.prototype.updateSelfie = function (ref, id, filename) {
        return this.http.put(BASEURL + "/selfie/", { ref: ref, id: id, filename: filename })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SelfieService.prototype.getLastSelfie = function (id) {
        return this.http.get(BASEURL + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return SelfieService;
}());
SelfieService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SelfieService);

var _a;
//# sourceMappingURL=selfie.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/todo";
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
    }
    TodoService.prototype.handleError = function (e) {
        console.log("ToDo ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    TodoService.prototype.getToDo = function () {
        console.log("entro en el servicio");
        return this.http.get("" + BASEURL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return TodoService;
}());
TodoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TodoService);

var _a;
//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<form >\n  <h2> Signup </h2>\n  <label> Username </label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n  <br>\n  <label> Password </label>\n  <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n\n  <label> Role </label>\n  <input type=\"radio\" [(ngModel)]=\"formInfo.role\" name=\"role\" value=\"Tutor\"> Tutor<br>\n  <input type=\"radio\" [(ngModel)]=\"formInfo.role\" name=\"role\" value=\"Student\"> Student<br>\n\n  <button (click)=\"signup()\"> signup </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupformComponent = (function () {
    function SignupformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: "",
            role: ""
        };
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signup = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password, role = _a.role;
        if (username != "" && password != "") {
            console.log("Signup with " + username + " " + password);
            this.auth.signup(username, password, role)
                .map(function (user) { return console.log(user); })
                .subscribe(function (r) { return _this.router.navigate(['/home']); });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupformComponent);

var _a, _b;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/points/points.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/points/points.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <button (click)=\"cancel()\">Back</button>\n<h3>Tus puntos: {{user.point}} </h3>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/points/points.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PointsComponent = (function () {
    function PointsComponent(location, auth) {
        var _this = this;
        this.location = location;
        this.auth = auth;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    PointsComponent.prototype.ngOnInit = function () {
    };
    PointsComponent.prototype.cancel = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    return PointsComponent;
}());
PointsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-points',
        template: __webpack_require__("../../../../../src/app/userprofile/points/points.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/points/points.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], PointsComponent);

var _a, _b;
//# sourceMappingURL=points.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img1.png") + ");\n  height: 100vh;\n  font-family: Apercu;\n}\nh3{\n  margin:0;\n  padding-top: 5%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"img\">\n  <button (click)=\"cancel()\">Back</button>\n  <h3>Mis datos</h3>\n<div *ngIf=\"user\">\n\n  <!-- <pre> {{ user | json }} </pre> -->\n\n  <p> Hello {{user.username}}</p>\n\n  <a [routerLink]=\"['/edit',user._id]\">Edit profile</a>\n\n  <button (click)=\"logout()\"> logout </button>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(location, auth, router) {
        var _this = this;
        this.location = location;
        this.auth = auth;
        this.router = router;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (r) { return _this.router.navigate(['/']); });
    };
    ProfileComponent.prototype.cancel = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/userprofile/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img1.png") + ");\n  height: 100vh;\n  font-family: Apercu;\n}\n\nh3{\n  margin:0;\n  padding-top: 5%;\n}\n\n.bg-green{\n\twidth: 181px;\n\theight: 138px;\n\tborder-radius: 5px;\n\tbackground-color: #02ad58;\n\tbox-shadow: 0 0 10px 0 rgba(110, 110, 123, 0.5);\n  margin-left:15%;\n}\n\n.bg-red{\n  width: 175px;\n\theight: 136px;\n\tborder-radius: 5px;\n\tbackground-color: #ff473d;\n\tbox-shadow: 0 0 40px 0 rgba(110, 110, 123, 0.5);\n  margin-left: 40%;\n  padding-left: 3%;\n  margin-top: -3%;\n  margin-bottom: -3%;\n}\n\n.bg-blue{\n  width: 216px;\n\theight: 120px;\n\tborder-radius: 5px;\n\tbackground-color: #0074cd;\n\tbox-shadow: 0 10px 40px 0 rgba(110, 110, 123, 0.5);\n  margin-left: 25%;\n}\n\n.bg-green p{\n  font-family: Apercu;\n\tfont-size: 20px;\n\ttext-align: center;\n\tcolor: #ffffff;\n  position: relative;\n  float: left;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%)\n}\n\n.bg-red p{\n  font-family: Apercu;\n\tfont-size: 20px;\n\ttext-align: left;\n\tcolor: #ffffff;\n  position: relative;\n  float: left;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%)\n}\n\n.bg-blue p{\n  font-family: Apercu;\n\tfont-size: 20px;\n\tline-height: 1.2;\n\ttext-align: center;\n\tcolor: #ffffff;\n  position: relative;\n  float: left;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%)\n}\n\n.idea{\n  text-align: left;\n  font-size: 22px;\n  margin: 7% 0 10% 15%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"img\">\n  <button (click)=\"cancel()\">Back</button>\n  <h3>To do</h3>\n  <p class=\"idea\">¡Aquí algunas ideas!</p>\n<div *ngFor=\"let t of todos\">\n  <div class=\"bg-green\">\n<p>{{t.todo[0]}}</p>\n</div>\n<div class=\"bg-red\">\n<p>{{t.todo[1]}}</p>\n</div>\n<div class=\"bg-blue\">\n<p>{{t.todo[2]}}</p>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_todo_service__ = __webpack_require__("../../../../../src/app/services/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = (function () {
    function TodoComponent(location, todoget) {
        this.location = location;
        this.todoget = todoget;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("heyyyy");
        this.todoget.getToDo().subscribe(function (todolist) { return _this.todos = todolist; });
        this.randomNumber1 = Math.round((Math.random() * 3));
        this.randomNumber2 = Math.round((Math.random() * 3));
        this.randomNumber3 = Math.round((Math.random() * 3));
    };
    TodoComponent.prototype.cancel = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-todo',
        template: __webpack_require__("../../../../../src/app/userprofile/todo/todo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/todo/todo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_todo_service__["a" /* TodoService */]) === "function" && _b || Object])
], TodoComponent);

var _a, _b;
//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img{\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img1.png") + ");\n  height: 100vh;\n  font-family: Apercu;\n}\n.myprofileHeader {\n\tfont-family: Apercu;\n\tfont-size: 44px;\n\tfont-weight: bold;\n\tline-height: 1.32;\n\ttext-align: left;\n\tcolor: #000000;\n  text-align: center;\n}\n\n.home{\n  list-style-type: none;\n  width: 329px;\n\theight: 348px;\n\tfont-family: Apercu;\n\tfont-size: 40px;\n\tfont-weight: bold;\n\tline-height: 1.32;\n\ttext-align: left;\n\tcolor: #000000;\n  padding-top: 50%;\n}\n.home a{\n  color:#000;\n}\n.home a:hover {\n    color: #0074cd;\n}\nh2{\n  margin:0;\n  padding-top: 2%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"img\">\n  <button (click)=\"cancel()\">Back</button>\n<h2 class=\"myprofileHeader\">Mi Perfil</h2>\n<div *ngIf=\"!user\">\n  <h2>NO USER LOGGED IN</h2>\n</div>\n<div *ngIf=\"pendingmessage\" class=\"pending\">\n<p>Tienes un mensaje nuevo</p>\n</div>\n\n<div *ngIf=\"user\">\n\n  <!-- <pre> {{ user | json }} </pre> -->\n  <ul class=\"home\">\n<li><a [routerLink]=\"['/profile']\">Mis datos</a></li>\n<li><a [routerLink]=\"['/mail']\">Reportar</a></li>\n<li><a [routerLink]=\"['/todo']\">To Do</a></li>\n<li><a [routerLink]=\"['/points']\">Puntos</a></li>\n  </ul>\n\n<div *ngIf=\"user.role=='Student'&& !user.refToBrother\">\n<button (click)=\"getabro(this.user._id)\">Get a brother</button>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_is_logged_in_canactivate_service__ = __webpack_require__("../../../../../src/app/services/is-logged-in.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserprofileComponent = (function () {
    function UserprofileComponent(location, auth, log, message) {
        var _this = this;
        this.location = location;
        this.auth = auth;
        this.log = log;
        this.message = message;
        this.pendingmessage = false;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentuser = this.log.user;
        this.userId = this.currentuser._id;
        this.message.getlastmessages(this.userId).subscribe(function (m) {
            if (m.refToWriter !== _this.userId) {
                _this.pendingmessage = true;
            }
            else {
                _this.pendingmessage = false;
            }
        });
    };
    UserprofileComponent.prototype.getabro = function (id) {
        console.log(id);
        this.auth.getbro(id).map(function (user) { return console.log(user); })
            .subscribe();
    };
    UserprofileComponent.prototype.cancel = function () {
        this.location.back(); // <-- go back to previous location on cancel
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_is_logged_in_canactivate_service__["a" /* IsLoggedInService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_is_logged_in_canactivate_service__["a" /* IsLoggedInService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]) === "function" && _d || Object])
], UserprofileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img1.60c600fb1d011fc3b3ef.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    BASEURL: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map