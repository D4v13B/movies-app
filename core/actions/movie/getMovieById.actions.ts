import { movieApi } from "@/core/api/movie-api"
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface"
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response"
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response"
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"

export const getMovieByIdAction = async(id:number | string):Promise<CompleteMovie> => {

   try {
         
         const {data} = await movieApi.get<MovieDBMovieResponse>(`/${id}`)
         
         // const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie)
         // console.log(data)
         return MovieMapper.fromTheMovieDBToCompleteMovie(data)
         
         // console.log(movies);
      } catch (error) {
         console.log(error);
         throw "Cannot load now playing movies"
      }
}