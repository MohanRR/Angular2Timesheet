import { Routes, RouterModule } from '@angular/router';

 import {HomeComponent} from './components/home/home.component';
 import {WelcomeComponent} from './components/welcome/welcome.component';
// import { LoginComponent } from './login/index';
// import { RegisterComponent } from './register/index';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'welcome', component: WelcomeComponent},


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);