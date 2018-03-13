import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tiles = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 2, color: '#DDBDF1'},
    {text: 'Hstag', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Available', cols: 4, rows: 1, color: '#DDBDF1'},
  ];

}
