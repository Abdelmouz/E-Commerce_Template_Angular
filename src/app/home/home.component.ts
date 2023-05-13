import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor() {

    localStorage.setItem('url_Home_active',"active");
    localStorage.setItem('url_blog_active', " ");
    localStorage.setItem('url_contact_active', " ");
    localStorage.setItem('url_about_active', " ");
    localStorage.setItem('url_shop_active', " ");

  }

  ngOnInit(): void {
  }

}
