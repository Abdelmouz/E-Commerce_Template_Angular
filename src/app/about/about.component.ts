import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {
   
    localStorage.setItem('url_Home_active', " ");
    localStorage.setItem('url_blog_active', " ");
    localStorage.setItem('url_contact_active', " ");
    localStorage.setItem('url_about_active', "active");
    localStorage.setItem('url_shop_active', " ");
   }

  ngOnInit(): void {
  }

}
