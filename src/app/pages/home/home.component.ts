import { Component } from '@angular/core';
import { NgIf, NgFor } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";
import { OwlOptions } from 'ngx-owl-carousel-o';

import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { BttpComponent } from '../../shared/bttp/bttp.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { WorksComponent } from "../works/works.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, AboutComponent, ContactComponent, BttpComponent, SpinnerComponent, NgIf, CarouselModule, NgFor, WorksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  loading: boolean = false

  customOptions: OwlOptions = {
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    dots: true,
    items: 1
  };

  images = [
    'assets/img/7.jpg',
    'assets/img/13.jpg',
    'assets/img/14.jpg',
    'assets/img/15.jpg',
    'assets/img/16.jpg',
    'assets/img/17.jpg',
    'assets/img/19.jpg',
    'assets/img/20.jpg',
  ];

}
