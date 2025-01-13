import React, { useRef } from "react"
import { View, Text, useWindowDimensions, Image } from "react-native"
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel"
import { Movie } from "@/infrastructure/interfaces/movie.interface"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import MoviePoster from "./movies/MoviePoster"

interface Props {
   movies: Movie[]
}

const MainSlideShow = ({ movies }: Props) => {
   const ref = useRef<ICarouselInstance>(null)
   const { width } = useWindowDimensions()

   return (
      <GestureHandlerRootView className="h-[250px] w-full">
         <Carousel
            ref={ref}
            data={movies}
            renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} />}
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
            defaultIndex={1}
         />
      </GestureHandlerRootView>
   )
}

export default MainSlideShow
