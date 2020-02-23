import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [HeaderComponent, NavbarComponent, FooterComponent, LoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    RouterModule
  ]
})
export class SharedModule { }
