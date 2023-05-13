import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
   
    localStorage.setItem('url_Home_active', " ");
    localStorage.setItem('url_blog_active', " ");
    localStorage.setItem('url_contact_active', "active");
    localStorage.setItem('url_about_active', " ");
    localStorage.setItem('url_shop_active', " ");
   }

  ngOnInit(): void {
  }

}
