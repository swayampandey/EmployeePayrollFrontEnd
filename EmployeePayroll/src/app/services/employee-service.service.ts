import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class EmployeeServiceService {
    [x: string]: any;

    constructor(private http: HttpClient) { }

    insertEmployee(employee: any) {
        return this.http.post("http://localhost:8085/employeepayrollservice/create", employee);
    }
    getEmployee() {
        return this.http.get("http://localhost:8085/employeepayrollservice/get")
    }
}