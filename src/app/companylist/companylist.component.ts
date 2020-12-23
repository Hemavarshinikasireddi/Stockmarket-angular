import { Component, OnInit } from '@angular/core';
import { CompanydetailsComponent } from '../companydetails/companydetails.component';
import { Observable } from "rxjs";
import { CompanyService } from "../company.service";
import { Company } from "../company";
import { Router } from '@angular/router';
@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit {
  companies: Observable<Company[]>;

  constructor(private companyService: CompanyService,
    private router: Router) {}

    ngOnInit():void {
      this.reloadData();
    }
    reloadData() {
     this.companies = this.companyService.getCompaniesList();
      //this.companyService.getCompaniesList().subscribe(data => {
        //this.companies=data;
        //});
    }
    //newly added code
    //updateCompany(id:number){}
    deleteCompany(id: number) {
      this.companyService.deleteCompany(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  companyDetails(id: number){
     this.router.navigate(['details', id]);
    }
    updateCompany(id: number){
      this.router.navigate(['update', id]);
     }
}







