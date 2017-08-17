"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var alert_service_1 = require("../../services/alert.service");
var HeaderComponent = (function () {
    function HeaderComponent(userService, router, alertService) {
        this.userService = userService;
        this.router = router;
        this.alertService = alertService;
        this.register = {};
        this.user = {};
        this.isLoggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.register);
        this.userService.create(this.register).subscribe(function (data) {
            // set success message and pass true paramater to persist the message after redirecting to the login page
            if (data.statusCode == 200) {
                _this.alertService.success(data.message, true);
                _this.cancelReg.nativeElement.click();
                _this.router.navigate(['/home']);
            }
            else {
                _this.alertService.error(data.message);
            }
        }, function (error) {
            console.log("User not registerd");
            _this.alertService.error(error);
        });
    };
    HeaderComponent.prototype.login = function () {
        var _this = this;
        console.log(this.user);
        this.userService.login(this.user).subscribe(function (data) {
            // set success message and pass true paramater to persist the message after redirecting to the login page
            if (data.statusCode == 200) {
                _this.isLoggedIn = true;
                _this.alertService.success(data.message, true);
                _this.cancelLog.nativeElement.click();
                _this.router.navigate(['/welcome']);
            }
            else {
                _this.alertService.error(data.message);
            }
        }, function (error) {
            _this.alertService.error(error);
        });
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem("currentUser");
        this.isLoggedIn = false;
    };
    __decorate([
        core_1.ViewChild('cancelReg'),
        __metadata("design:type", core_1.ElementRef)
    ], HeaderComponent.prototype, "cancelReg", void 0);
    __decorate([
        core_1.ViewChild('cancelLog'),
        __metadata("design:type", core_1.ElementRef)
    ], HeaderComponent.prototype, "cancelLog", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-header',
            templateUrl: '../../templates/common/header.template.html'
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, alert_service_1.AlertService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map