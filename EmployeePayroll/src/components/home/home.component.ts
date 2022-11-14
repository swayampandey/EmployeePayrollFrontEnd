import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee1 } from 'src/app/model/employeeModel';

import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private service: EmployeeServiceService,

  ) { }

  list: any;
  count: Number = 0;
  public employeeUpdate: Employee1 = new Employee1("", 0, "", new Date, "", "", [])

  ngOnInit(): void {

    this.service.getEmployee().subscribe((data: any) => {
      console.log(data);
      this.list = data.data;
      this.count = this.list.length;
    });

  }
  onDelete(id: Number) {
    console.log(id);
    this.service.deleteEmployeeById(id).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
    })
  }
  id: Number = 0;

  onUpdate(employeeId: Number, employeeUp: Employee1) {
    console.log(employeeId, employeeUp)
    this.service.updateDataFunc(employeeId, employeeUp);
    this.router.navigate(["form"]);

  }


}