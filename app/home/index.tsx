import React from "react"
import { View, Text, ActivityIndicator } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import MainSlideShow from "@/presentation/components/MainSlideShow"
import { useMovies } from "@/presentation/hooks/useMovies"

const HomeScreen = () => {
   const { nowPlayingQuery } = useMovies()

   if (nowPlayingQuery.isLoading) {
      return (
         <View className="justify-center items-center flex-1">
            <ActivityIndicator color={"purple"} size={50} />
         </View>
      )
   }

   return (
      <SafeAreaProvider>
         <SafeAreaView className="flex-1 pt-4">
            <Text className="text-3xl font-bold mb-6 px-4">Movie App</Text>

            {/* Carousel */}
            <MainSlideShow movies={nowPlayingQuery.data ?? []} />
         </SafeAreaView>
      </SafeAreaProvider>
   )
}

export default HomeScreen
