import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs';

@Injectable()
export class BeverageService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    async getBeverages(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/beverage`)
            .toPromise()
            .then((resp) => {
                let beverages = resp.json();
                return beverages;
            });
    }

    async getBeverageById(beverageId): Promise<Object> {
        const resp = await this.http.get(`${this.apiUrl}/beverage/id/${beverageID}`).toPromise();
        const beverage = resp.json();
        return beverage || [];
    }

    async addBeverage(beverage): Promise<Object> {
        const resp = await this.http.post(`${this.apiUrl}/beverage`, beverage).toPromise();
        const newBeverage = resp.json();
        return newBeverage || null;
    }

    async deleteBeverage(id): Promise<Object> {
        const resp = await this.http.delete(`${this.apiUrl}/beverage/id/${beverageid}`).toPromise();
        const status = resp.json();
        return status;
    }

    async updateBeverage(id, beverage): Promise<Object> {
        const resp = await this.http.put(`${this.apiUrl}/beverage/id/${Beverageid}`, beverage).toPromise();
        const updatedBeverage = resp.json();
        return updatedBeverage;
    }

}
