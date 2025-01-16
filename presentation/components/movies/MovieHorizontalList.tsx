import { Movie } from "@/infrastructure/interfaces/movie.interface"
import { View, Text } from "react-native"
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler"
import MoviePoster from "./MoviePoster"

interface Props {
   movies: Movie[],
   title?: string 
   className?: string 
}

const MovieHorizontalList = ({ movies, title, className }: Props) => {


   return (
      <>
         <View className={`mt-3 ${className}`} >
            {/* <Text className="text-3xl font-bold px-4">Populares</Text> */}

            {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

            <FlatList
               horizontal
               showsHorizontalScrollIndicator={false}
               data={movies}
               keyExtractor={(item) => `${item.id}`}
               renderItem={({ item }) => (
                  <MoviePoster
                     smallPoster
                     className="px-11"
                     id={item.id}
                     poster={item.poster}
                  />
               )}
            />
         </View>
      </>
   )
}
export default MovieHorizontalList
