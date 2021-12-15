import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovielistComponent implements OnInit {
  results: Array<any> = []
  searchTerm: string = '';
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    /*  
    For Testing purposes
    this.movieService.searchMovies('The Lion King').then((resp:any)=>
      {
        this.results =resp.results
        console.log(this.results);
      
      }).catch(console.log);*/
  }
  searchMovie() {
    this.movieService
      .searchMovies(this.searchTerm)
      .then((resp: any) => {
        this.results = resp.results;
        console.log(this.results);
      })
      .catch(console.log);
  }
}

/*type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
*/