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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/DetailsParams.ts":
/*!**********************************!*\
  !*** ./src/app/DetailsParams.ts ***!
  \**********************************/
/*! exports provided: DetailsParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsParams", function() { return DetailsParams; });
var DetailsParams = /** @class */ (function () {
    function DetailsParams() {
    }
    return DetailsParams;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/container.component */ "./src/app/container/container.component.ts");




var AppRoutes = [
    { path: '', component: _container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"] },
    { path: 'news', component: _container_container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(AppRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet> "

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _result_list_result_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./result-list/result-list.component */ "./src/app/result-list/result-list.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_details_news_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news-details/news-details.component */ "./src/app/news-details/news-details.component.ts");
/* harmony import */ var _load_more_load_more_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./load-more/load-more.component */ "./src/app/load-more/load-more.component.ts");
/* harmony import */ var _news_overview_news_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./news-overview/news-overview.component */ "./src/app/news-overview/news-overview.component.ts");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./container/container.component */ "./src/app/container/container.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _result_list_result_list_component__WEBPACK_IMPORTED_MODULE_9__["ResultListComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_10__["NewsComponent"],
                _news_details_news_details_component__WEBPACK_IMPORTED_MODULE_11__["NewsDetailsComponent"],
                _load_more_load_more_component__WEBPACK_IMPORTED_MODULE_12__["LoadMoreComponent"],
                _news_overview_news_overview_component__WEBPACK_IMPORTED_MODULE_13__["NewsOverviewComponent"],
                _container_container_component__WEBPACK_IMPORTED_MODULE_14__["ContainerComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/call.service.ts":
/*!*********************************!*\
  !*** ./src/app/call.service.ts ***!
  \*********************************/
/*! exports provided: CallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallService", function() { return CallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _creat_guid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creat-guid */ "./src/app/creat-guid.ts");





var CallService = /** @class */ (function () {
    function CallService(httpClient) {
        this.httpClient = httpClient;
        this.newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5e80c4b9ce1b45d1a1e69e81bfe6fe51';
    }
    CallService.prototype.getNews = function () {
        return this.httpClient.get(this.newsApiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response.articles.map(function (value) {
                value.source.id = _creat_guid__WEBPACK_IMPORTED_MODULE_4__["Guid"].newGuid();
                return value;
            });
        }));
    };
    CallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CallService);
    return CallService;
}());



/***/ }),

/***/ "./src/app/container/container.component.css":
/*!***************************************************!*\
  !*** ./src/app/container/container.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/container/container.component.html":
/*!****************************************************!*\
  !*** ./src/app/container/container.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>  \r\n<news *ngIf=\"isLoadNews\" (loadNewsDetailsOutput)=\"loadNewsDetailsEvent($event);\" (loadNewsOverviewOutput)=\"loadNewsOverviewEvent($event);\"></news>\r\n<news-details [details]=\"details\" *ngIf=\"isLoadNewsDetails\"></news-details>\r\n<news-overview (loadNewsDetailsOutput)=\"loadNewsDetailsEvent($event);\" [newsOverviewId]=\"newsOverviewId\" *ngIf=\"isLoadNewsOverview\"></news-overview>\r\n<footer></footer> "

/***/ }),

/***/ "./src/app/container/container.component.ts":
/*!**************************************************!*\
  !*** ./src/app/container/container.component.ts ***!
  \**************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
        this.title = 'News';
    }
    ContainerComponent.prototype.loadNewsDetailsEvent = function (event) {
        this.isLoadNewsDetails = true;
        this.isLoadNews = false;
        this.isLoadNewsOverview = false;
        this.details = event;
    };
    ContainerComponent.prototype.loadNewsOverviewEvent = function (event) {
        this.isLoadNewsOverview = true;
        this.isLoadNewsDetails = false;
        this.isLoadNews = false;
        this.newsOverviewId = event;
    };
    ContainerComponent.prototype.ngOnInit = function () {
        this.isLoadNews = true;
    };
    ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.css */ "./src/app/container/container.component.css")]
        })
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/creat-guid.ts":
/*!*******************************!*\
  !*** ./src/app/creat-guid.ts ***!
  \*******************************/
/*! exports provided: Guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
var Guid = /** @class */ (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news */ "./src/app/news.ts");
/* harmony import */ var _news_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.json */ "./src/app/news.json");
var _news_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./news.json */ "./src/app/news.json", 1);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call.service */ "./src/app/call.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _creat_guid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./creat-guid */ "./src/app/creat-guid.ts");







var DataService = /** @class */ (function () {
    function DataService(callService) {
        this.callService = callService;
        this.source = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('All Sources');
        this.currentSource = this.source.asObservable();
        if (!this.data) {
            this.data = _news_json__WEBPACK_IMPORTED_MODULE_2__.map(function (n) {
                var news = new _news__WEBPACK_IMPORTED_MODULE_1__["News"](_creat_guid__WEBPACK_IMPORTED_MODULE_6__["Guid"].newGuid(), n.source.name);
                news.title = n.title;
                news.author = n.author;
                news.description = n.description;
                news.url = n.url;
                news.urlToImage = n.urlToImage;
                news.publishedAt = n.publishedAt;
                news.content = n.content;
                return news;
            });
            this.getExternalNews();
        }
    }
    DataService.prototype.getExternalNews = function () {
        var _this = this;
        return this.callService.getNews().subscribe(function (articles) {
            _this.data = _this.data.concat(articles);
        }, function (error) { return console.log(error); });
    };
    DataService.prototype.changeSource = function (source) {
        this.source.next(source);
    };
    DataService.prototype.getNews = function (count) {
        if (count === void 0) { count = 0; }
        return this.sliceNews(this.data, count);
    };
    DataService.prototype.getNewsBySource = function (source, count) {
        if (count === void 0) { count = 0; }
        var gotData = this.data.filter(function (news) {
            return news.source.name === source;
        });
        return this.sliceNews(gotData, count);
    };
    ;
    DataService.prototype.getSourceList = function () {
        return this.data.map(function (x) { return x.source.name; })
            .filter(function (value, index, array) {
            return array.indexOf(value) === index;
        });
    };
    DataService.prototype.addNews = function (news) { this.data.push(news); };
    DataService.prototype.updateNews = function (id, newsToUpdate) {
        this.data = this.data.filter(function (value) { return value.source.id !== id; });
        this.data.push(newsToUpdate);
        return newsToUpdate;
    };
    DataService.prototype.getNewsById = function (id) {
        return this.data[this.data.findIndex(function (item) { return item.source.id === id; })];
    };
    DataService.prototype.deleteNews = function (id) {
        this.data = this.data.filter(function (value) { return value.source.id !== id; });
    };
    DataService.prototype.sliceNews = function (data, count) {
        if (count > 0 && count < data.length) {
            return data.slice(0, count);
        }
        else {
            return data;
        }
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_call_service__WEBPACK_IMPORTED_MODULE_4__["CallService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, term) {
        return value.filter(function (news) {
            return news.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
                || news.description.toLocaleLowerCase().includes(term.toLocaleLowerCase());
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".align-footer{\r\n    text-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduLWZvb3RlcntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron align-footer\">{{poweredBy}}\r\n  <a href=\"{{newsApiLink}}\">{{newsApiUri}}</a>\r\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.poweredBy = "Powered by";
        this.newsApiLink = "https://newsapi.org/";
        this.newsApiUri = "NewsApi.org";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = ".align-header {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4 align-header\">{{source}}</h1>    \r\n  </div>\r\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataService) {
        this.dataService = dataService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentSource.subscribe(function (source) { return _this.source = source; });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/load-more/load-more.component.css":
/*!***************************************************!*\
  !*** ./src/app/load-more/load-more.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWQtbW9yZS9sb2FkLW1vcmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/load-more/load-more.component.html":
/*!****************************************************!*\
  !*** ./src/app/load-more/load-more.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\"(click)=\"loadMore()\" class=\"btn btn-primary btn-lg btn-block\">Load More</button>"

/***/ }),

/***/ "./src/app/load-more/load-more.component.ts":
/*!**************************************************!*\
  !*** ./src/app/load-more/load-more.component.ts ***!
  \**************************************************/
/*! exports provided: LoadMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoreComponent", function() { return LoadMoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadMoreComponent = /** @class */ (function () {
    function LoadMoreComponent() {
        this.loadMoreOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LoadMoreComponent.prototype.ngOnInit = function () {
    };
    LoadMoreComponent.prototype.loadMore = function () {
        var loadMoreCount = 5;
        this.loadMoreOutput.emit(loadMoreCount);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LoadMoreComponent.prototype, "loadMoreOutput", void 0);
    LoadMoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'load-more',
            template: __webpack_require__(/*! ./load-more.component.html */ "./src/app/load-more/load-more.component.html"),
            styles: [__webpack_require__(/*! ./load-more.component.css */ "./src/app/load-more/load-more.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadMoreComponent);
    return LoadMoreComponent;
}());



/***/ }),

/***/ "./src/app/news-details/news-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/news-details/news-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".noresize{\r\n    resize: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1kZXRhaWxzL25ld3MtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25ld3MtZGV0YWlscy9uZXdzLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3Jlc2l6ZXtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/news-details/news-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/news-details/news-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 offset-md-3\">\r\n        <form class=\"form-group\" [formGroup]=\"editForm\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" name=\"name\" class=\"form-control\" [formControl]=\"name\">\r\n          <label for=\"description\">Description</label>\r\n          <input type=\"text\" name=\"description\" class=\"form-control\" [formControl]=\"description\">\r\n          <label for=\"author\">Author</label>\r\n          <input type=\"text\" name=\"author\" class=\"form-control\" [formControl]=\"author\">\r\n          <label for=\"url\">Url</label>\r\n          <input type=\"url\" name=\"url\" class=\"form-control\" [formControl]=\"url\">\r\n          <label for=\"urlToImage\">Url to image</label>\r\n          <input type=\"url\" name=\"urlToImage\" class=\"form-control\" [formControl]=\"urlToImage\">\r\n          <label for=\"publishedAt\">Published At</label>\r\n          <input type=\"date\" name=\"publishedAt\" class=\"form-control\" [formControl]=\"publishedAt\">\r\n          <label for=\"content\">Content</label>\r\n          <textarea class=\"form-control noresize\" rows=\"6\" name=\"content\" [formControl]=\"content\"></textarea>\r\n          <br>\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\"\r\n            [disabled]=\"!editForm.valid\">Submit</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/news-details/news-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/news-details/news-details.component.ts ***!
  \********************************************************/
/*! exports provided: NewsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailsComponent", function() { return NewsDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _DetailsParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailsParams */ "./src/app/DetailsParams.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _creat_guid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../creat-guid */ "./src/app/creat-guid.ts");






var NewsDetailsComponent = /** @class */ (function () {
    function NewsDetailsComponent(dataService) {
        this.dataService = dataService;
        this.id = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](_creat_guid__WEBPACK_IMPORTED_MODULE_5__["Guid"].newGuid());
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.author = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.url = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.urlToImage = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.publishedAt = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.content = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            id: this.id,
            name: this.name,
            description: this.description,
            author: this.author,
            url: this.url,
            urlToImage: this.urlToImage,
            publishedAt: this.publishedAt,
            content: this.content
        });
    }
    NewsDetailsComponent.prototype.onSubmit = function () {
        switch (this.details.detailsType) {
            case "Create":
                this.dataService.addNews(this.editForm.value);
                alert('News has been created!');
                break;
            case "Edit":
                this.dataService.updateNews(this.editForm.value.id, this.editForm.value);
                alert('News has been updated!');
                break;
        }
    };
    NewsDetailsComponent.prototype.ngOnInit = function () {
        this.dataService.changeSource(this.details.title);
        if (this.details.id) {
            var editable = this.dataService.getNewsById(this.details.id);
            this.id.setValue(editable.source.id);
            this.name.setValue(editable.source.name);
            this.description.setValue(editable.description);
            this.author.setValue(editable.author);
            this.url.setValue(editable.url);
            this.urlToImage.setValue(editable.urlToImage);
            this.publishedAt.setValue(editable.publishedAt);
            this.content.setValue(editable.content);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _DetailsParams__WEBPACK_IMPORTED_MODULE_3__["DetailsParams"])
    ], NewsDetailsComponent.prototype, "details", void 0);
    NewsDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'news-details',
            template: __webpack_require__(/*! ./news-details.component.html */ "./src/app/news-details/news-details.component.html"),
            styles: [__webpack_require__(/*! ./news-details.component.css */ "./src/app/news-details/news-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], NewsDetailsComponent);
    return NewsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/news-overview/news-overview.component.css":
/*!***********************************************************!*\
  !*** ./src/app/news-overview/news-overview.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview-image {\r\n    width: 300px;\r\n    height: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy1vdmVydmlldy9uZXdzLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL25ld3Mtb3ZlcnZpZXcvbmV3cy1vdmVydmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/news-overview/news-overview.component.html":
/*!************************************************************!*\
  !*** ./src/app/news-overview/news-overview.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isNewsDeleted\" class=\"media\">\r\n    <img class=\"mr-3 preview-image\" src=\"{{model.urlToImage}}\" alt=\"{{model.url}}\">\r\n    <div class=\"media-body\">\r\n      <h2 class=\"mt-0\">{{model.title}}</h2>\r\n     <p>{{model.content}}</p>\r\n     <p>Author: {{model.author}}</p>\r\n     <p>Published At: {{model.publishedAt | date}}</p>\r\n     <div>\r\n        <button (click)=\"loadNewsDetails(model.source.id)\" class=\"btn btn-primary\">Edit</button>\r\n        <button (click)=\"delete(model.source.id)\" class=\"btn btn-primary\">Delete</button>\r\n     </div>     \r\n    </div>   \r\n  </div>\r\n  <div>\r\n      <div *ngIf=\"isNewsDeleted\" class=\"alert alert-success\">\r\n          <strong>Success!</strong> News has been deleted!\r\n        </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/news-overview/news-overview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/news-overview/news-overview.component.ts ***!
  \**********************************************************/
/*! exports provided: NewsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsOverviewComponent", function() { return NewsOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _DetailsParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailsParams */ "./src/app/DetailsParams.ts");




var NewsOverviewComponent = /** @class */ (function () {
    function NewsOverviewComponent(dataService) {
        this.dataService = dataService;
        this.loadNewsDetailsOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NewsOverviewComponent.prototype.loadNewsDetails = function (id) {
        var details = new _DetailsParams__WEBPACK_IMPORTED_MODULE_3__["DetailsParams"]();
        details.id = id;
        details.detailsType = "Edit";
        details.title = "Edit News";
        this.loadNewsDetailsOutput.emit(details);
    };
    NewsOverviewComponent.prototype.delete = function (id) {
        this.dataService.deleteNews(id);
        this.isNewsDeleted = true;
    };
    NewsOverviewComponent.prototype.ngOnInit = function () {
        this.model = this.dataService.getNewsById(this.newsOverviewId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NewsOverviewComponent.prototype, "newsOverviewId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NewsOverviewComponent.prototype, "loadNewsDetailsOutput", void 0);
    NewsOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'news-overview',
            template: __webpack_require__(/*! ./news-overview.component.html */ "./src/app/news-overview/news-overview.component.html"),
            styles: [__webpack_require__(/*! ./news-overview.component.css */ "./src/app/news-overview/news-overview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], NewsOverviewComponent);
    return NewsOverviewComponent;
}());



/***/ }),

/***/ "./src/app/news.json":
/*!***************************!*\
  !*** ./src/app/news.json ***!
  \***************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, default */
/***/ (function(module) {

module.exports = [{"source":{"id":"1","name":"Prnewswire.com"},"author":"OmniBazaar, Inc.","title":"Peer-to-Peer Marketplace Celebrates its 10,000th Registered User","description":"CLEARWATER, Fla., Feb. 13, 2019 /PRNewswire/ -- OmniBazaar, Inc., developer of the OmniBazaar online distributed marketplace, announced today that it has acquired over 10,000 registered users in less than 4 months of operation. The production version of the O…","url":"https://www.prnewswire.com/news-releases/peer-to-peer-marketplace-celebrates-its-10-000th-registered-user-300794948.html","urlToImage":"https://mma.prnewswire.com/media/821465/OmniBazaar_Logo.jpg?p=facebook","publishedAt":"2019-02-13T13:36:00Z","content":"CLEARWATER, Fla., Feb. 13, 2019 /PRNewswire/ -- OmniBazaar, Inc., developer of the OmniBazaar online distributed marketplace, announced today that it has acquired over 10,000 registered users in less than 4 months of operation.\r\nThe production version of the … [+3254 chars]"},{"source":{"id":"23353352","name":"Hackernoon.com"},"author":"FlatOutCrypto","title":"Save the ICO","description":"ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…","url":"https://hackernoon.com/save-the-ico-34287dbbce03","urlToImage":"https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n","publishedAt":"2019-02-13T13:31:01Z","content":"Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"},{"source":{"id":"2351152","name":"Hackernoon.com"},"author":"FlatOutCrypto","title":"Save the ICO","description":"ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…","url":"https://hackernoon.com/save-the-ico-34287dbbce03","urlToImage":"https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n","publishedAt":"2019-02-13T13:31:01Z","content":"Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"},{"source":{"id":"22761435","name":"Hackernoon.com"},"author":"FlatOutCrypto","title":"Save the ICO","description":"ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…","url":"https://hackernoon.com/save-the-ico-34287dbbce03","urlToImage":"https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n","publishedAt":"2019-02-13T13:31:01Z","content":"Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"},{"source":{"id":"25015893","name":"Hackernoon.com"},"author":"FlatOutCrypto","title":"Save the ICO","description":"ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…","url":"https://hackernoon.com/save-the-ico-34287dbbce03","urlToImage":"https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n","publishedAt":"2019-02-13T13:31:01Z","content":"Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"},{"source":{"id":"2352962","name":"Hackernoon.com"},"author":"FlatOutCrypto","title":"Save the ICO","description":"ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…","url":"https://hackernoon.com/save-the-ico-34287dbbce03","urlToImage":"https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n","publishedAt":"2019-02-13T13:31:01Z","content":"Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"},{"source":{"id":"2323452","name":"Hackernoon.com"},"author":"FlatOutCrypto","title":"Save the ICO","description":"ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…","url":"https://hackernoon.com/save-the-ico-34287dbbce03","urlToImage":"https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n","publishedAt":"2019-02-13T13:31:01Z","content":"Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"},{"source":{"id":"22867835","name":"Hackernoon.com"},"author":"FlatOutCrypto","title":"Save the ICO","description":"ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…","url":"https://hackernoon.com/save-the-ico-34287dbbce03","urlToImage":"https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n","publishedAt":"2019-02-13T13:31:01Z","content":"Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"},{"source":{"id":"251230","name":"Hackernoon.com"},"author":"FlatOutCrypto","title":"Save the ICO","description":"ICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with ‘scam’…","url":"https://hackernoon.com/save-the-ico-34287dbbce03","urlToImage":"https://cdn-images-1.medium.com/max/1200/0*GzLWhz8GYEIEvT3n","publishedAt":"2019-02-13T13:31:01Z","content":"Photo by Connor Jalbert on Unsplash\r\nICOs have taken a battering in recent months. Just by writing this article I tie myself in with a model that is now synonymous with scam. The problems are well-trodden. Project teams exploited them to raise capital quickly… [+10481 chars]"},{"source":{"id":"3","name":"Forbes.com"},"author":"Editors, Forbes Technology Council, CommunityVoice, Editors, Forbes Technology Council, CommunityVoice https://www.forbes.com/sites/forbestechcouncil/people/forbestechcouncilcontributor/","title":"10 Tech Industry Experts Predict The Next 'Blockchain Wave'","description":"Members of Forbes Technology Council predict which industries will next see a “blockchain wave.\"","url":"https://www.forbes.com/sites/forbestechcouncil/2019/02/13/10-tech-industry-experts-predict-the-next-blockchain-wave/","urlToImage":"https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2018%2F11%2Fcanva-photo-editor-1-3.png","publishedAt":"2019-02-13T13:30:00Z","content":"Share to facebook\r\nShare to twitter\r\nShare to linkedin\r\nIn 2018, we saw lots of headlines about the banking and finance industry adopting blockchain-based solutions. As blockchain becomes more sophisticated, the technology is expected to spread across various… [+9459 chars]"},{"source":{"id":"4","name":"9to5mac.com"},"author":"9to5Mac","title":"617M stolen account details from 500px, Dubsmash, MyFitnessPal, ShareThis, more, for sale","description":"Stolen account details from 16 hacked websites have gone on sale on the dark web. In all, 617 million records are available, with data including account holder names, email addresses and hashed passwords … more… The post 617M stolen account details from 500px…","url":"https://9to5mac.com/2019/02/13/stolen-account-details/","urlToImage":"https://9to5mac.com/wp-content/uploads/sites/6/2019/02/stolen-account-details.jpg?quality=82&strip=all&w=1500","publishedAt":"2019-02-13T13:28:46Z","content":"Stolen account details from 16 hacked websites have gone on sale on the dark web. In all, 617 million records are available, with data including account holder names, email addresses and hashed passwords …\r\nThe Register lists the 16 websites affected.\r\nFor le… [+2784 chars]"},{"source":{"id":"5","name":"Thefrisky.com"},"author":"Petar Mikonoss","title":"The Crypto Market Today at a Glance","description":"Over 2000 cryptocurrencies are hovering around the crypto sphere and it is certain that not all of them will survive; in fact, only a few selected … The post The Crypto Market Today at a Glance appeared first on The Frisky.","url":"https://thefrisky.com/the-crypto-market-today-at-a-glance/","urlToImage":"https://thefrisky.com/wp-content/uploads/2019/02/crypto.jpeg","publishedAt":"2019-02-13T13:25:39Z","content":"Over 2000 cryptocurrencies are hovering around the crypto sphere and it is certain that not all of them will survive; in fact, only a few selected will probably emerge as victorious. Looking at the crypto market today, in the very beginning of 2019, things lo… [+2398 chars]"},{"source":{"id":"6","name":"Dailyfx.com"},"author":"Justin McQueen, Analyst, Justin McQueen","title":"GBPUSD Spikes Higher, NZDUSD Outperforms, EURUSD Soft - US Market Open","description":"NZD soars following RBNZ, GBPUSD spikes amid touted Fix related buy orders in quiet trade. Euro soft as markets digest Spanish snap elections.","url":"https://www.dailyfx.com/forex/market_alert/2019/02/13/GBPUSD-Spikes-Higher-NZDUSD-Outperforms-EURUSD-Soft---US-Market-Open.html","urlToImage":null,"publishedAt":"2019-02-13T13:25:00Z","content":"MARKET DEVELOPMENT –GBPUSD Spikes Higher, NZDUSD Outperforms, EURUSD Soft\r\nNZD: The Kiwi is soaring this morning after the RBNZ delivered a somewhat less dovish than expected monetary policy report. Heading into the rate decision, markets had been notably sho… [+1628 chars]"},{"source":{"id":"7","name":"Marketwatch.com"},"author":"Aaron Hankin","title":"Bitcoin prices on track for three-day skid","description":"Bitcoin prices fell Wednesday, extending the slide that has seen the cryptocurrency fall 5% since making a three-week high above $3,700 on Friday.","url":"https://www.marketwatch.com/story/bitcoin-prices-on-track-for-three-day-skid-2019-02-13","urlToImage":"http://s.marketwatch.com/public/resources/MWimages/MW-FN792_bitcoi_MG_20170606085726.jpg","publishedAt":"2019-02-13T13:19:00Z","content":"Bitcoin prices fell Wednesday, extending the slide that has seen the cryptocurrency fall 5% since making a three-week high above $3,700 last week. \r\nIn early trading, one bitcoin,\r\nBTCUSD, +0.08%\r\nthe worlds largest digital currency, was changing hands at $3,… [+1603 chars]"},{"source":{"id":"8","name":"Bitcoinist.com"},"author":"Allen Scott","title":"Bitcoin Now Mining Its Biggest Blocks Ever","description":"The Bitcoin network is scaling as the network just reached a new all-time high of 1.3 MB average block size amid record low transaction fees. Biggest Average Bitcoin Block Size to Date The latest data from Blockchain.com shows that February 12, 2019 saw an av…","url":"https://bitcoinist.com/bitcoin-biggest-blocks-ever/","urlToImage":"https://bitcoinist.com/wp-content/uploads/2019/02/shutterstock_95349784-980x613.jpg","publishedAt":"2019-02-13T13:00:43Z","content":"The Bitcoin network is scaling as the network just reached a new all-time high of 1.3 MB average block size amid record low transaction fees. \r\nBiggest Average Bitcoin Block Size to Date\r\nThe latest data from Blockchain.com shows that February 12, 2019 saw an… [+2492 chars]"},{"source":{"id":"9","name":"Cnet.com"},"author":"Alfred Ng","title":"With smart sneakers, privacy risks take a great leap","description":"Privacy experts are waiting for the other shoe to drop on connected kicks.","url":"https://www.cnet.com/news/with-smart-sneakers-the-potential-for-privacy-risks-take-a-great-leap/","urlToImage":"https://cnet3.cbsistatic.com/img/VFgVgbhMS9xu5XKQhqFkHvgDmg4=/724x407/2019/02/12/c7ccaaf4-6342-4f49-b105-350d2c74352a/dsc05414-1.jpg","publishedAt":"2019-02-13T13:00:21Z","content":"The Nike Adapt BB, a pair of self-tying shoes, are controlled through an app. \r\nAriel Nunez / CNET\r\nI'm dribbling a basketball in one hand, with a phone in the other, adjusting the tightness on a pair of Nike's Bluetooth-connected self-tying Adapt BB sneakers… [+8243 chars]"},{"source":{"id":"10","name":"Yahoo.com"},"author":null,"title":"ICOs Alive and Well as Crypto Startups Go After Wealthy Buyers","description":"About 70 companies are holding token sales, and another 17 as of last week were planning initial coin offerings, where startups bypass traditional venture capital venues by raising money directly from investors through digital-asset sales, according to data c…","url":"https://finance.yahoo.com/news/icos-alive-well-crypto-startups-130005810.html","urlToImage":null,"publishedAt":"2019-02-13T13:00:05Z","content":"(Bloomberg) -- Checking for a pulse in the world of cryptocurrencies? Look no further than the ICO market.\r\nAbout 70 companies are holding token sales, and another 17 as of last week were planning initial coin offerings, where startups bypass traditional vent… [+3514 chars]"},{"source":{"id":"11","name":"Yahoo.com"},"author":null,"title":"Exclusive: Voyager’s Game-Changing Bitcoin Trading App Just Went Live in the US","description":"Voyager, the “Name Your Price” tool of crypto trading, launches in US 9 states this morning. Available on the Apple store as we speak, the powerful new brokerage app enables users to leverage the power of algorithmic trading to find the best deal on Bitcoin, …","url":"https://news.yahoo.com/exclusive-voyager-game-changing-bitcoin-130004740.html","urlToImage":null,"publishedAt":"2019-02-13T13:00:04Z","content":null},{"source":{"id":"crypto-coins-news","name":"Crypto Coins News"},"author":"P. H. Madore","title":"Exclusive: Voyager’s Game-Changing Bitcoin Trading App Just Went Live in the US","description":"Voyager, the “Name Your Price” tool of crypto trading, launches in US 9 states this morning. Available on the Apple store as we speak, the powerful new brokerage app enables users to leverage the power of algorithmic trading to find the best deal on Bitcoin, …","url":"https://www.ccn.com/voyager-crypto-bitcoin-brokerage-app-us-launch","urlToImage":"https://www.ccn.com/wp-content/uploads/2018/09/bitcoin-ethereum-ripple.jpg","publishedAt":"2019-02-13T13:00:04Z","content":"Voyager, the Name Your Price tool of crypto trading, launches in US 9 states this morning. Available on the Apple store as we speak, the powerful new brokerage app enables users to leverage the power of algorithmic trading to find the best deal on Bitcoin, Et… [+2854 chars]"},{"source":{"id":"12","name":"Hackernoon.com"},"author":"Pirate Beachbum","title":"Bitcoin Bear Market Diaries Volume 1 with Hodlonaut","description":"The Bitcoin Bear Market Diaries are a series of interviews featuring various important voices and perspectives in the Bitcoin ecosystem…","url":"https://hackernoon.com/bitcoin-bear-market-diaries-volume-1-with-hodlonaut-124c4467b05e","urlToImage":"https://cdn-images-1.medium.com/max/1200/1*LbiR5shrMPOdArFHQBVOMA.jpeg","publishedAt":"2019-02-13T12:56:37Z","content":"The Bitcoin Bear Market Diaries are a series of interviews featuring various important voices and perspectives in the Bitcoin ecosystem. Each interviewee was carefully selected and asked the same group of questions. The main goal was to provide the world with… [+5225 chars]"},{"source":{"id":"13","name":"Thestar.com"},"author":"Manus Cranny - Bloomberg,Mahmoud Habboush","title":"Crypto finally poised to get institutional money, Novogratz says","description":"Institutional money should start to flow into cryptocurrencies within the next year, setting the stage for a rally, according to Galaxy Digital Holdings Ltd. founder Mike Novogratz.","url":"https://www.thestar.com/business/2019/02/13/crypto-finally-poised-to-get-institutional-money-novogratz-says.html","urlToImage":"https://images.thestar.com/0po6cLgh2bGEm2Lnqvxykp7zi5I=/1200x800/smart/filters:cb(1550062590346)/https://www.thestar.com/content/dam/thestar/business/2019/02/13/crypto-finally-poised-to-get-institutional-money-novogratz-says/cryptocurrency_8e5cc77c_28b3_11e9_984d_9b8fba003e81.jpg","publishedAt":"2019-02-13T12:54:30Z","content":"Institutional money should start to flow into cryptocurrencies within the next year, setting the stage for a rally, according to Galaxy Digital Holdings Ltd. founder Mike Novogratz.\r\n“All the architecture that institutions need to feel comfortable with this i… [+1256 chars]"},{"source":{"id":"14","name":"Theconversation.com"},"author":"Eyal Winter, Andrews and Elizabeth Brunner Professor of Behavioural/Industrial Economics, Lancaster University","title":"A fear of regret can lock us into bad relationships, jobs and habits – here's how to break free","description":"Our brain processes the fear of  regret in the same way as actual regret,  making us reluctant to make changes in life.","url":"http://theconversation.com/a-fear-of-regret-can-lock-us-into-bad-relationships-jobs-and-habits-heres-how-to-break-free-111115","urlToImage":"https://images.theconversation.com/files/258245/original/file-20190211-174864-2zwl73.jpg?ixlib=rb-1.1.0&rect=0%2C88%2C1800%2C900&q=45&auto=format&w=1356&h=668&fit=crop","publishedAt":"2019-02-13T12:47:44Z","content":"Damian Gadal/Flickr, CC BY-SA How many times have you thought about starting a company, taking a year out to write that novel or leaving a loveless relationship but ended up doing nothing about it? A fear of regret – which is a powerful driver of maintaining … [+6318 chars]"},{"source":{"id":"15","name":"Seekingalpha.com"},"author":"Jim Sloan","title":"Buffett's Barbell With An Educational Twist Is Perfect For A Thrifty 19-Year-Old: 90% S&P 500 Index And 10% I Bonds For Cash","description":"My son asked two questions in response to my previous article: why do we hold fewer equities than Buffett recommends, and what advice would I give to his daught","url":"https://seekingalpha.com/article/4240486-buffetts-barbell-educational-twist-perfect-thrifty-19-year-old-90-percent-s-and-p-500-index","urlToImage":"https://static1.seekingalpha.com/images/marketing_images/people_animals/warren_bufett_2.jpeg","publishedAt":"2019-02-13T12:31:45Z","content":"The 19-year-old for whose edification I am writing this is my granddaughter. I hope some of you will share these ideas as well as your own views with your own children or grandchildren. I frequently talked finance and the markets with my kids, and they both g… [+34420 chars]"},{"source":{"id":"16","name":"Forbes.com"},"author":"Michael del Castillo, Forbes Staff, Michael del Castillo, Forbes Staff https://www.forbes.com/sites/michaeldelcastillo/","title":"Despite Crypto Depression, M&A Deals Set New Record","description":"Destroying the previous record by 170%, recent cryptocurrency-related acquisitions show an ever-maturing industry, even as prices suffer.","url":"https://www.forbes.com/sites/michaeldelcastillo/2019/02/13/despite-crypto-depression-ma-deals-set-new-record/","urlToImage":"https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F924996176%2F960x0.jpg","publishedAt":"2019-02-13T12:30:00Z","content":"Circle Internet Financial, backed by Goldman Sachs, acquired Poloniex for a U.S. record $400 million.Getty Images\r\nAs the cumulative market cap for cryptocurrencies dropped from an all-time high of $813 billion in 2018 to just $130 billion at the end of the y… [+4735 chars]"},{"source":{"id":"17","name":"Teiss.co.uk"},"author":"https://www.facebook.com/profile.php?id=100009407656255&ref=bookmarks, https://www.facebook.com/profile.php?id=100009407656255&ref=bookmarks","title":"620 million stolen online accounts available to buyers on the Dark Web","description":"Over 620 million stolen online accounts have been put up for sale on the Dream Market cyber-souk, a Dark Web marketplace which can be accessed using Tor. The accounts contain names, email addresses, and passwords of millions of people from across the globe.","url":"https://www.teiss.co.uk/news/620-million-stolen-accounts-dark-web/","urlToImage":"https://s27942.pcdn.co/wp-content/uploads/2019/02/dark-web-stolen-accounts.jpg","publishedAt":"2019-02-13T12:29:00Z","content":"Over 620 million stolen online accounts have been put up for sale on the Dream Market cyber-souk, a Dark Web marketplace which can be accessed using Tor. The accounts contain names, email addresses, and passwords of millions of people from across the globe.\r\n… [+4242 chars]"},{"source":{"id":"bbc-news","name":"BBC News"},"author":"https://www.facebook.com/bbcnews","title":"Elon Musk named as Twitter boss favourite","description":"The choice has raised eyebrows because of the controversial nature of some of Mr Musk's tweets.","url":"https://www.bbc.co.uk/news/technology-47225377","urlToImage":"https://ichef.bbci.co.uk/news/1024/branded_news/09D1/production/_105631520_muskdorsey.gif","publishedAt":"2019-02-13T12:25:01Z","content":"Image copyrightGetty/ReutersImage caption\r\n Mr Musk (left) is Mr Dorsey's favourite, despite some rather controversial tweets\r\nElon Musk has been named as Twitter boss Jack Dorsey's favourite tweeter in an interview about how to tackle abuse.\r\nThe singling ou… [+2800 chars]"},{"source":{"id":"business-insider","name":"Business Insider"},"author":"Jacqui Frank and Sara Silverstein","title":"Vitalik Buterin created one of the world’s largest cryptocurrencies in his early twenties — here’s how he did it and why","description":"Vitalik Buterin is the co-founder of Ethereum, the second largest cryptocurrency in the world. Buterin was 21-years-old when the cryptocurrency was initially released. Buterin became interested in bitcoin in 2011 and co-founded a bitcoin magazine. Eventually,…","url":"https://www.businessinsider.com/vitalik-buterin-created-ethereum-one-of-the-worlds-three-largest-cryptocurrencies-2019-1","urlToImage":"https://amp.businessinsider.com/images/5c4485a12bdd7f172b5add72-1920-960.jpg","publishedAt":"2019-02-13T12:22:00Z","content":"VItalik Buterin sat down with Business Insider at DesTechAZ in October, 2018. In this clip he talks about how he got involved in the cryptocurrency space and why he created Ethereum. Following is a transcript of the video. \r\nVitalik Buterin: So, I first got i… [+1761 chars]"}];

/***/ }),

/***/ "./src/app/news.ts":
/*!*************************!*\
  !*** ./src/app/news.ts ***!
  \*************************/
/*! exports provided: News */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./src/app/source.ts");

var News = /** @class */ (function () {
    function News(id, name) {
        this.source = new _source__WEBPACK_IMPORTED_MODULE_0__["Source"](id, name);
    }
    return News;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n   <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li (click)=\"getSources()\" class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{source}}\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a (click)=\"onSelect('All Sources')\" class=\"dropdown-item\">All Sources</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a *ngFor=\"let source of sources\" class=\"dropdown-item\" (click)=\"onSelect(source)\">{{source}}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"form-inline my-2 my-lg-0\">\r\n          <input class=\"form-control mr-sm-2\" [(ngModel)]=\"filterInput\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">       \r\n      </li>    \r\n      <li class=\"form-inline my-2 my-lg-0\">\r\n          <button type=\"button\"(click)=\"loadNewsDetails()\" class=\"btn btn-primary\">Add News</button>      \r\n      </li>  \r\n    </ul>  \r\n  </div>\r\n</nav>  \r\n<result (loadNewsDetailsOutput)=\"loadNewsDetailsEvent($event);\" (loadNewsOverviewOutput)=\"loadNewsOverviewEvent($event);\" [source]=\"source\" [filterInput]=\"filterInput\"></result>"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _DetailsParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailsParams */ "./src/app/DetailsParams.ts");




var NewsComponent = /** @class */ (function () {
    function NewsComponent(dataService) {
        this.dataService = dataService;
        this.sources = [];
        this.loadNewsDetailsOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadNewsOverviewOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NewsComponent.prototype.loadNewsDetails = function (id) {
        var details = new _DetailsParams__WEBPACK_IMPORTED_MODULE_3__["DetailsParams"]();
        details.id = id;
        details.detailsType = "Create";
        details.title = "Create News";
        this.loadNewsDetailsOutput.emit(details);
    };
    NewsComponent.prototype.loadNewsDetailsEvent = function (event) {
        this.loadNewsDetailsOutput.emit(event);
    };
    NewsComponent.prototype.loadNewsOverviewEvent = function (event) {
        this.loadNewsOverviewOutput.emit(event);
    };
    NewsComponent.prototype.onSelect = function (source) {
        this.dataService.changeSource(source);
    };
    NewsComponent.prototype.getSources = function () {
        this.sources = this.dataService.getSourceList();
    };
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.currentSource.subscribe(function (source) { return _this.source = source; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NewsComponent.prototype, "loadNewsDetailsOutput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NewsComponent.prototype, "loadNewsOverviewOutput", void 0);
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/result-list/result-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/result-list/result-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preview-image {\r\n    width: 119px;\r\n    height: 101px;\r\n}\r\n.media-item {\r\n    background-color: #e9ecef;\r\n}\r\n.lower-left{\r\n    float: right;\r\n}\r\n.align-date{\r\n    display:inline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0LWxpc3QvcmVzdWx0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHQtbGlzdC9yZXN1bHQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXctaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDExOXB4O1xyXG4gICAgaGVpZ2h0OiAxMDFweDtcclxufVxyXG4ubWVkaWEtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG59XHJcbi5sb3dlci1sZWZ0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYWxpZ24tZGF0ZXtcclxuICAgIGRpc3BsYXk6aW5saW5lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/result-list/result-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/result-list/result-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of news | filter: filterInput\">\r\n  <li class=\"media media-item\">\r\n    <a class=\"pull-left\" href=\"{{item.url}}\">\r\n      <img class=\"mr-3 preview-image\" src=\"{{item.urlToImage}}\">\r\n    </a>\r\n    <div class=\"media-body\">\r\n      <h5 class=\"mt-1\"><a href=\"{{item.url}}\">{{item.title}}</a></h5>\r\n      <p>{{item.description}}</p>\r\n      <p class=\"align-date\">{{item.publishedAt | date}}</p>\r\n      <div class=\"lower-left\">       \r\n        <button (click)=\"loadNewsDetails(item.source.id)\" class=\"btn btn-primary\">Edit</button>\r\n        <button (click)=\"delete(item.source.id)\" class=\"btn btn-primary\">Delete</button>\r\n        <button (click)=\"loadNewsOverview(item.source.id)\" class=\"btn btn-primary\">Details</button>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <br>\r\n</div>\r\n<load-more (loadMoreOutput)=\"handleLoadMore($event);\"></load-more>"

/***/ }),

/***/ "./src/app/result-list/result-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/result-list/result-list.component.ts ***!
  \******************************************************/
/*! exports provided: ResultListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultListComponent", function() { return ResultListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _DetailsParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailsParams */ "./src/app/DetailsParams.ts");




var ResultListComponent = /** @class */ (function () {
    function ResultListComponent(dataService) {
        this.dataService = dataService;
        this.loadNewsDetailsOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadNewsOverviewOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.defaultLoadCount = 5;
        this.news = [];
    }
    ResultListComponent.prototype.renderNews = function (source, count) {
        if (count === void 0) { count = 0; }
        if (source === 'All Sources') {
            this.news = this.dataService.getNews(count);
        }
        else {
            this.news = this.dataService.getNewsBySource(source, count);
        }
    };
    ResultListComponent.prototype.getPropCurrentValue = function (name, changes) {
        return changes[name].currentValue;
    };
    ResultListComponent.prototype.loadNewsDetails = function (id) {
        var details = new _DetailsParams__WEBPACK_IMPORTED_MODULE_3__["DetailsParams"]();
        details.id = id;
        details.detailsType = "Edit";
        details.title = "Edit News";
        this.loadNewsDetailsOutput.emit(details);
    };
    ResultListComponent.prototype.delete = function (id) {
        this.dataService.deleteNews(id);
        this.renderNews(this.currentSource, this.loadNewsCount);
    };
    ResultListComponent.prototype.loadNewsOverview = function (id) {
        this.loadNewsOverviewOutput.emit(id);
    };
    ResultListComponent.prototype.handleLoadMore = function (event) {
        this.loadNewsCount += event;
        this.renderNews(this.currentSource, this.loadNewsCount);
    };
    ResultListComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if (propName === 'source') {
                this.loadNewsCount = this.defaultLoadCount;
                this.currentSource = this.getPropCurrentValue(propName, changes);
                this.renderNews(this.currentSource, this.loadNewsCount);
            }
        }
    };
    ResultListComponent.prototype.ngOnInit = function () {
        this.loadNewsCount = this.defaultLoadCount;
        this.currentSource = 'All Sources';
        this.news = this.dataService.getNews(this.loadNewsCount);
        this.filterInput = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ResultListComponent.prototype, "source", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ResultListComponent.prototype, "filterInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ResultListComponent.prototype, "loadNewsDetailsOutput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ResultListComponent.prototype, "loadNewsOverviewOutput", void 0);
    ResultListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'result',
            template: __webpack_require__(/*! ./result-list.component.html */ "./src/app/result-list/result-list.component.html"),
            styles: [__webpack_require__(/*! ./result-list.component.css */ "./src/app/result-list/result-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ResultListComponent);
    return ResultListComponent;
}());



/***/ }),

/***/ "./src/app/source.ts":
/*!***************************!*\
  !*** ./src/app/source.ts ***!
  \***************************/
/*! exports provided: Source */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
var Source = /** @class */ (function () {
    function Source(id, name) {
        this.id = id;
        this.name = name;
    }
    return Source;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Maksim_Karneyeu\Desktop\atempt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map