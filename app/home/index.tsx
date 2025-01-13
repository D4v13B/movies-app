import React from "react"
import { View, Text, ActivityIndicator } from "react-native"
import {
   SafeAreaProvider,
   SafeAreaView,
   useSafeAreaInsets,
} from "react-native-safe-area-context"

import MainSlideShow from "@/presentation/components/MainSlideShow"
import { useMovies } from "@/presentation/hooks/useMovies"
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList"

const HomeScreen = () => {
   const safeArea = useSafeAreaInsets()
   const { nowPlayingQuery, popularQuery } = useMovies()

   if (nowPlayingQuery.isLoading) {
      return (
         <View className="justify-center items-center flex-1">
            <ActivityIndicator color={"purple"} size={50} />
         </View>
      )
   }

   // if (popularQuery.isLoading) {
   //    return (
   //       <View className="justify-center items-center flex-1">
   //          <ActivityIndicator color={"purple"} size={50} />
   //       </View>
   //    )
   // }

   return (
      <View className="mt-2" style={{ paddingTop: safeArea.top }}>
         <Text className="text-3xl font-bold mb-6 px-4">Movie App</Text>

         {/* Carousel */}
         <MainSlideShow movies={nowPlayingQuery.data ?? []} />

         {/* Peliculas populares */}
         <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []} />
      </View>
   )
}

export default HomeScreen
