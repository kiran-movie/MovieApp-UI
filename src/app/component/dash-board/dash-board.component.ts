import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Output, Input, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/classes/movie';



const url = "https://api.themoviedb.org/3/search/movie?api_key=06203334b59c6a533b36ecd954eb2d14&query="; 

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  movieList : Movie[];
  @Input()  movieName : string;
  @Output() movies = new EventEmitter<Movie[]>();

  searchValue = new FormControl('');
  constructor(private _http : HttpClient) { }

  ngOnInit() {
  }

  onSearch()  {
  
    this._http.get(url + this.searchValue.value).subscribe( response => {
      console.log(response.results)
      this.movieList = response.results;

      console.log("After !! "+this.movieList)
      this.movies.emit(this.movieList);
      console.log("After !! "+this.movies)
    });
   
  }
}
