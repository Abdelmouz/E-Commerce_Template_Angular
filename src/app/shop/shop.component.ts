import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() {
  
    localStorage.setItem('url_Home_active', " ");
    localStorage.setItem('url_blog_active', " ");
    localStorage.setItem('url_contact_active', " ");
    localStorage.setItem('url_about_active', " ");
    localStorage.setItem('url_shop_active', "active ");

  }

  ngOnInit(): void {
  }

}
