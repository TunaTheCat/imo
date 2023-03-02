import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './sites/company/company.component';
import { ContactComponent } from './sites/contact/contact.component';
import { HomeComponent } from './sites/home/home.component';
import { ImoComponent } from './sites/imo/imo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'imo' , component: ImoComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: '*', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
