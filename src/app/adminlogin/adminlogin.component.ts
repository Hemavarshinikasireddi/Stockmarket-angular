
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  username="techgeeknext"
  password='password'
  invalidLogin=false

  constructor(private router: Router,private loginservice:AuthenticationService
    ) { }

  ngOnInit(): void {
    
  }
  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    )
  };


}
