import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { CompanylistComponent } from '../companylist/companylist.component';
@Component({
  selector: 'app-companydetails',
  templateUrl: './companydetails.component.html',
  styleUrls: ['./companydetails.component.css']
})
export class CompanydetailsComponent implements OnInit {
  id: number;
  company: Company;
  constructor(private route: ActivatedRoute,private router: Router,
    private companyService: CompanyService) { }


    ngOnInit() {
      this.company = new Company();
  
      this.id = this.route.snapshot.params['id'];
      
      this.companyService.getCompany(this.id)
        .subscribe(data => {
          console.log(data)
          this.company = data;
        }, error => console.log(error));
    }
    list(){
      this.router.navigate(['companies']);
    }
}




