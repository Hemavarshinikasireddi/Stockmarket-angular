import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { CompanylistComponent } from './companylist/companylist.component';
import { UpdatecompanyComponent } from './updatecompany/updatecompany.component';
import { HomeComponent } from './home/home.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExcelsheetComponent } from './excelsheet/excelsheet.component';
import { IpoAddComponent } from './ipo-add/ipo-add.component';
import { IpoAllComponent } from './ipo-all/ipo-all.component';
import { IpoUpdateComponent } from './ipo-update/ipo-update.component';
import { StockExchangeAddComponent } from './stock-exchange-add/stock-exchange-add.component';
import { StockExchangeAllComponent } from './stock-exchange-all/stock-exchange-all.component';
import { StockExchangeUpdateComponent } from './stock-exchange-update/stock-exchange-update.component';
import { UserAllComponent } from './user-all/user-all.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import {BasicAuthHtppInterceptorService} from './basic-auth-interceptor.service';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    CreatecompanyComponent,
    CompanydetailsComponent,
    CompanylistComponent,
    UpdatecompanyComponent,
    HomeComponent,
    ManagecompanyComponent,
    ExcelsheetComponent,
    IpoAddComponent,
    IpoAllComponent,
    IpoUpdateComponent,
    StockExchangeAddComponent,
    StockExchangeAllComponent,
    StockExchangeUpdateComponent,
    UserAllComponent,
    UserUpdateComponent,
    LoginComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
