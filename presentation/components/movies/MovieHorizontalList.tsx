import { Movie } from "@/infrastructure/interfaces/movie.interface"
import { View, Text, NativeSyntheticEvent, NativeScrollEvent } from "react-native"
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler"
import MoviePoster from "./MoviePoster"
import { useEffect, useRef } from "react"

interface Props {
   movies: Movie[],
   title?: string 
   className?: string
   loadNextPage?: () => void
}

const MovieHorizontalList = ({ movies, title, className, loadNextPage }: Props) => {

   const isLoading = useRef(false)

   // useEffect(() => {
   //    setTimeout(() => isLoading.current == false, 2000)
   // }, [movies])

   const onScroll = (event : NativeSyntheticEvent<NativeScrollEvent>) => {
      if(isLoading.current) return

      const {contentOffset, layoutMeasurement, contentSize } = event.nativeEvent

      const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width

      if(!isEndReached) return

      isLoading.current = true

      // TODO:
      // console.log("Cargar siguiente peliculas")
      loadNextPage && loadNextPage()

      isLoading.current = false
   }

   return (
      <>
         <View className={`mt-3 ${className}`} >
            {/* <Text className="text-3xl font-bold px-4">Populares</Text> */}

            {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

            <FlatList
               horizontal
               showsHorizontalScrollIndicator={false}
               data={movies}
               keyExtractor={(item, i) => `${item.id}-${i}`}
               renderItem={({ item }) => (
                  <MoviePoster
                     smallPoster
                     className="px-11"
                     id={item.id}
                     poster={item.poster}
                  />
               )}
               onScroll={onScroll}
            />
         </View>
      </>
   )
}
export default MovieHorizontalList
