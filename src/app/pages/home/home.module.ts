import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  imports: [
    CommonModule, CarouselModule, HomeComponent
  ],
  declarations: []
})
export class HomeModule { }
