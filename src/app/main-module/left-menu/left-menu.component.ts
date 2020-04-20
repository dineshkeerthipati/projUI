import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  menuItems = [
    {item: 'Feed', itemUrl: 'news_feed'},
    {item: 'Diary', itemUrl: 'diary'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
