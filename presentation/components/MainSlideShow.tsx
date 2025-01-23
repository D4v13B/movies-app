import {
   configureReanimatedLogger,
   ReanimatedLogLevel,
} from "react-native-reanimated"

// This is the default configuration
configureReanimatedLogger({
   level: ReanimatedLogLevel.warn,
   strict: false, // Reanimated runs in strict mode by default
})

import React, { useRef } from "react"
import { View, useWindowDimensions } from "react-native"
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel"
import { Movie } from "@/infrastructure/interfaces/movie.interface"
import MoviePoster from "./movies/MoviePoster"

interface Props {
   movies: Movie[]
}

const MainSlideShow = ({ movies }: Props) => {
   const ref = useRef<ICarouselInstance>(null)
   const { width } = useWindowDimensions()

   return (
      <View
         className="h-[250px] w-full"
         style={{
            height: 250,
         }}
      >
         <Carousel
            ref={ref}
            data={movies}
            renderItem={({ item }) => (
               <MoviePoster id={item.id} poster={item.poster} />
            )}
            width={160}
            height={350}
            style={{
               width: width,
               height: 350,
               justifyContent: "center",
               alignItems: "center",
            }}
            loop
            pagingEnabled
            // mode="parallax"
            // modeConfig={{
            //    parallaxScrollingScale: 0.9,
            //    parallaxScrollingOffset: 50
            // }}
            // defaultIndex={1}
         />
      </View>
   )
}

export default MainSlideShow
