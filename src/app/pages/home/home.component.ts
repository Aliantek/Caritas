import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { BttpComponent } from '../../shared/bttp/bttp.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, AboutComponent, ContactComponent, BttpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
