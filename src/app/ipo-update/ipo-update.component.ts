import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { IPODetails } from '../ipo-details';
import { IpoDetailsService } from '../ipo-details.service';

@Component({
  selector: 'app-ipo-update',
  templateUrl: './ipo-update.component.html',
  styleUrls: ['./ipo-update.component.css']
})
export class IpoUpdateComponent implements OnInit {
  ipo: IPODetails = new IPODetails();
  constructor(private IpoDetailsService :IpoDetailsService,  
    private router: Router ,
    private route:ActivatedRoute) { }
    id: number;
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.IpoDetailsService.getIpoById(this.id).subscribe(data => {
        this.ipo = data;
      },error => {
        console.log("Error Here")
        console.log(error);
      });
    }
    goToIpoAll(){
      this.router.navigate(['ipo-all']);
    }
    onSubmit(){

      this.IpoDetailsService.updateIpo(this.id, this.ipo).subscribe(data =>{
        this.goToIpoAll();
      });
  
}
  


}