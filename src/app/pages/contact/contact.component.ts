import { Component, ViewChild, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  @ViewChild ('inputText') input! : ElementRef;

  openpage(){
    const text = this.input.nativeElement.value
    const msg = text.replaceAll(' ', '%20')
    const url = `https://wa.me/593991389834?text=${msg}`
    window.open(url)
  }

}
