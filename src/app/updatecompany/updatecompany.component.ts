import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {
  id: number;
  //company: Company;
  company:Company = new Company();
  submitted=false;
  constructor(private route: ActivatedRoute,private router: Router,
    private companyService: CompanyService) { }
  
    ngOnInit() {
      
      this.id = this.route.snapshot.params['id'];
      
      this.companyService.getCompany(this.id)
        .subscribe(data => {
          console.log(data)
          this.company = data;
        }, error => console.log(error));
    }
    
  /*  updateCompany() {
      this.companyService.updateCompany(this.id, this.company)
        .subscribe(data => {
          console.log(data);
          //this.company = new Company();
          this.gotoList();
        }, error => console.log(error));
    }
    onSubmit() {
      this.submitted=true;
      console.log(this.company)
      this.updateCompany();    
    }*/
    gotoList() {
      this.router.navigate(['/companies']);
    }
    onSubmit(){
      this.submitted=true;
      this.companyService.updateCompany(this.id, this.company).subscribe(data =>{
        this.gotoList();
      });
   
}
}



  
    