import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPODetails } from '../ipo-details';
import { IpoDetailsService } from '../ipo-details.service';

@Component({
  selector: 'app-ipo-all',
  templateUrl: './ipo-all.component.html',
  styleUrls: ['./ipo-all.component.css']
})

export class IpoAllComponent implements OnInit {

  ipo: IPODetails[] = [];
  constructor(private ipoService: IpoDetailsService  , private router:Router) { }

  ngOnInit(): void {
    this.getAllIpo();
  }

  public getAllIpo(){
    this.ipoService.getIpoList().subscribe(data => {

      this.ipo = data;
    });
  }
  
  updateIpo(id:number){
    this.router.navigate(['ipo-update', id]);
  }
  
  deleteIpo(id:number){
    this.ipoService.deleteIpoById(id).subscribe(data =>{
      console.log(data);
      this.getAllIpo();
    },error=>{
      console.log(error);
    });
  }

}