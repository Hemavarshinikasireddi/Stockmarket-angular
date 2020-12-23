import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { UpdatecompanyComponent } from './updatecompany/updatecompany.component';
import { HomeComponent } from './home/home.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
import { ExcelsheetComponent } from './excelsheet/excelsheet.component';
import { IpoAddComponent } from './ipo-add/ipo-add.component';
import { IpoAllComponent } from './ipo-all/ipo-all.component';
import { IpoUpdateComponent } from './ipo-update/ipo-update.component';
import { StockExchangeAddComponent } from './stock-exchange-add/stock-exchange-add.component';
import { StockExchangeAllComponent } from './stock-exchange-all/stock-exchange-all.component';
import { StockExchangeUpdateComponent } from './stock-exchange-update/stock-exchange-update.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', redirectTo: 'company', pathMatch: 'full' },
  {path:'managecompany',component:ManagecompanyComponent},
  { path: 'companies', component: CompanylistComponent },
  { path: 'add', component: CreatecompanyComponent },
  { path: 'update/:id', component: UpdatecompanyComponent },
  { path: 'details/:id', component: CompanydetailsComponent },
  { path: 'excel', component: ExcelsheetComponent },
  {path:'ipo-all',component: IpoAllComponent},
  {path:'ipo-add',component :IpoAddComponent},
  {path:'ipo-update/:id',component : IpoUpdateComponent},
  {path:'stock-exchange-all',component:StockExchangeAllComponent},
  {path:'stock-exchange-add',component : StockExchangeAddComponent},
  {path:'stock-exchange-update/:id',component : StockExchangeUpdateComponent},
 {path:'login',component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





