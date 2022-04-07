import { Component } from "@angular/core";
import { Movie } from "../movie";
import { movies } from "../movie.datasource";
@Component({
    selector: 'app-movies',
    templateUrl: 'movies.component.html',
})
export class MoviesComponent {
    title = "Movie list";
    movies = movies;
    // movies = ["movie 1", "movie 2", "movie 3"];
    // movie: Movie = {
    //     _id: 1,
    //     _name: "movie name"
    // }

    // getTitle() {
    //     return this.title;
    // }
}   