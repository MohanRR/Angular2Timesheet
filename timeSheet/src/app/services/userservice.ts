import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/user';
import {AppSettings} from '../util/app.settings';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get(AppSettings.API_ENDPOINT+'users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(AppSettings.API_ENDPOINT+'users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(AppSettings.API_ENDPOINT+'users', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put(AppSettings.API_ENDPOINT+'users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(AppSettings.API_ENDPOINT+'users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'TimeSheet ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}