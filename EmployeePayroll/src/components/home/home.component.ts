import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private service: EmployeeServiceService
  ) { }
  list: any;
  ngOnInit(): void {
    this.service.getEmployee().subscribe((data: any) => {
      console.log(data);
      this.list = data.data;
    });
  }

}
