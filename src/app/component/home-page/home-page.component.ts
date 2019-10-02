import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/classes/movie';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

 // movies : Movie[];
  constructor() { }

  ngOnInit() {
  }

  moviesList(movies : any){
    //this.movies = $event
    debugger;
    console.log("Inside Parent Method !! " +movies)
  }

}
