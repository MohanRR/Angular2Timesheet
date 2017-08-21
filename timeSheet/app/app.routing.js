"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var welcome_component_1 = require("./components/welcome/welcome.component");
// import { LoginComponent } from './login/index';
// import { RegisterComponent } from './register/index';
// import { AuthGuard } from './_guards/index';
var appRoutes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map