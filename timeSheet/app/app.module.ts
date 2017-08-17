import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

//import { AlertComponent } from './_directives/index';
//import { AuthGuard } from './_guards/index';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/common/header.component';
import { FooterComponent } from './components/common/footer.component';
import { AlertComponent } from './components/common/alert.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
//import { LoginComponent } from './login/index';
//import { RegisterComponent } from './register/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        WelcomeComponent
        // LoginComponent,
        // RegisterComponent
    ],
    providers: [
        // AuthGuard,
        // AuthenticationService,
        UserService,
        AlertService,
        // // providers used to create fake backend
        // fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }