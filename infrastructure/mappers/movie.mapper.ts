import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MovieDBMovieResponse } from "../interfaces/moviedb-movie.response";
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper {
   static fromTheMovieDbToMovie = (movie: Result):Movie => {

      return {
         id: movie.id,
         title: movie.title,
         description: movie.overview,
         realeseDate: new Date(movie.release_date),
         poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
         backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
         rating: movie.vote_average
      }
   }

   static fromTheMovieDBToCompleteMovie = (movie:MovieDBMovieResponse):CompleteMovie => {
      return {
         id: movie.id,
         title: movie.title,
         description: movie.overview,
         realeseDate: new Date(movie.release_date),
         poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
         backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
         rating: movie.vote_average,
         budget: movie.budget,
         duration: movie.runtime,
         genres: movie.genres,
         originalTitle: movie.original_title,
         productionCompanies: movie.production_companies
      }
   }
}