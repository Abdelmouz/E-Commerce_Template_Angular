import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  state_poper = "none";
  active_home = "";
  active_shop = "";
  active_blog = "";
  active_about = "";
  active_contact = "";
  constructor() {
    // this.active_home =
    this.active_home = localStorage.getItem('url_Home_active');
    this.active_blog = localStorage.getItem('url_blog_active');
    this.active_contact = localStorage.getItem('url_contact_active');
    this.active_about = localStorage.getItem('url_about_active');
    this.active_shop = localStorage.getItem('url_shop_active');
    console.log("active_home", this.active_home);
    console.log("active_blog", this.active_blog)
    console.log("active_contact", this.active_contact);
    console.log("active_about", this.active_about);
    console.log("active_shop", this.active_shop);

  }
  close() {
    this.state_poper = "none";
  }
  open() {
    this.state_poper = "flex";
  }
  ngOnInit(): void {
  }

}
