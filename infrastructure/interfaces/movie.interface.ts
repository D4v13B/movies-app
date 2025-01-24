import { Genre, ProductionCompany } from "./moviedb-movie.response"

export interface Movie{
   id: number,
   title: string,
   description: string,
   realeseDate: Date,
   rating: number,
   poster: string,
   backdrop: string
}

export interface CompleteMovie extends Movie {
   genres: Genre[]
   duration: number
   budget: number
   originalTitle: string
   productionCompanies: ProductionCompany[]
}