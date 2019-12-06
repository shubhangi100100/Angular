import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'banner', component:BannerComponent},
  {path:'footer',component:FooterComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
HeaderComponent, BannerComponent, FooterComponent, LoginComponent
]
