import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    public httpHeader: Headers;
    public serviceAddress: string ="http://localhost:9090/api/";
    constructor(private http: Http) {
        this.generateHttpHeader();
    }

    generateHttpHeader() {
        this.httpHeader = new Headers();
        this.httpHeader.append('Accept', 'application/json');
        this.httpHeader.append('Content-Type', 'application/json');
        this.httpHeader.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }
    getHttpHeaderForPost() {
        let httpHeader = new Headers();
        httpHeader.append('Accept', 'application/json');
        httpHeader.append('Content-Type', 'application/json');
        httpHeader.append('x-authorization', 'Bearer ' + localStorage.getItem('token'));
        return httpHeader;
    }

  
    create(userDetails:any) {
       return this.http.post(this.serviceAddress+'auth/register', userDetails, this.jwt()).map((response: Response) => response.json());
    }

    login(userDetails:any) {
       return this.http.post(this.serviceAddress+'auth/login', userDetails, this.jwt()).map(
           (response: Response) => {
               let user = response.json();
               if (user && user.object && user.object.authToken) {
                    localStorage.setItem('currentUser', JSON.stringify(user.object));
               }
               return user;
           });
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.authToken) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.authToken });
            return new RequestOptions({ headers: headers });
        }
    }
}