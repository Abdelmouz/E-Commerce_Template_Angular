import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() {
   
    localStorage.setItem('url_Home_active', " ");
    localStorage.setItem('url_blog_active', "active");
    localStorage.setItem('url_contact_active', " ");
    localStorage.setItem('url_about_active', " ");
    localStorage.setItem('url_shop_active', " ");
   }

  ngOnInit(): void {
  }

}
