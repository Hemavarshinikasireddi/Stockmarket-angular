import { Component, OnInit } from '@angular/core';
import {Login} from '../login';
import {AdminloginComponent} from '../adminlogin/adminlogin.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:Login = new Login();
  constructor() { }

  ngOnInit(): void {
  }

}
