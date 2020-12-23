import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company';
@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent implements OnInit {

  company:Company = new Company();
  constructor(private companyService: CompanyService,private router:Router){console.log("hema")} 

  ngOnInit(): void {
  }
  save(){
    this.companyService.createCompany(this.company).subscribe(data => {
      console.log(data);
      this.goToCompanyAll();
    },
    error => console.log(error));
  }

  goToCompanyAll(){
    this.router.navigate(['/companies']);
  }

  onSubmit(){
    console.log(this.company);
    this.save();
  }

}
