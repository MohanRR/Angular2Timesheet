import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { BaseRequestOptions } from '@angular/http';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { AuthGuard } from './guard/auth.guard';
import { UserService } from './services/userservice';
import { HomeComponent } from './components/home.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [
        AuthGuard,
        BaseRequestOptions,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }