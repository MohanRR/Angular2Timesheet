"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// used to create fake backend
//import { fakeBackendProvider } from './_helpers/index';
var testing_1 = require("@angular/http/testing");
var http_2 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
//import { AlertComponent } from './_directives/index';
//import { AuthGuard } from './_guards/index';
var home_component_1 = require("./components/home/home.component");
var header_component_1 = require("./components/common/header.component");
var footer_component_1 = require("./components/common/footer.component");
var alert_component_1 = require("./components/common/alert.component");
var welcome_component_1 = require("./components/welcome/welcome.component");
var user_service_1 = require("./services/user.service");
var alert_service_1 = require("./services/alert.service");
//import { LoginComponent } from './login/index';
//import { RegisterComponent } from './register/index';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                alert_component_1.AlertComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                welcome_component_1.WelcomeComponent
                // LoginComponent,
                // RegisterComponent
            ],
            providers: [
                // AuthGuard,
                // AuthenticationService,
                user_service_1.UserService,
                alert_service_1.AlertService,
                // // providers used to create fake backend
                // fakeBackendProvider,
                testing_1.MockBackend,
                http_2.BaseRequestOptions
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map