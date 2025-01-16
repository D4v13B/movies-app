import React from "react"
import { View, Text, ActivityIndicator, ScrollView } from "react-native"
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
   const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } = useMovies()

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
      <ScrollView className="mt-2" style={{ paddingTop: safeArea.top }}>
         <Text className="text-3xl font-bold mb-6 px-4">Movie App Mickey</Text>

         {/* Carousel */}
         <MainSlideShow movies={nowPlayingQuery.data ?? []} />

         {/* Peliculas populares */}
         <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []} />

         {/* Top rated */}
         <MovieHorizontalList title="Mejor Calificadas" movies={topRatedQuery.data ?? []} />

         {/* Proximamente */}
         <MovieHorizontalList title="Proximamente"  movies={upcomingQuery.data ?? []} />
         <MovieHorizontalList className="pb-20"  movies={upcomingQuery.data ?? []} />
      </ScrollView>
   )
}

export default HomeScreen
