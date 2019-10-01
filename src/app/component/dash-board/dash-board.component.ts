import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSearch(search : any) : void {
    console.log("Inside onSearch method !! " +search.preventDefault)
  }
}
