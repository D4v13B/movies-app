import useMovie from "@/presentation/hooks/useMovie"
import { useLocalSearchParams } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { View, Text, ActivityIndicator, ScrollView } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
const MovieScreen = () => {
   const { id } = useLocalSearchParams()

   const { movieQuery } = useMovie(+id)

   if (movieQuery.isLoading || !movieQuery.data) {
      return (
         <View className="flex flex-1 justify-center items-center">
            <Text className="mb-4">Espere por favor</Text>
            <ActivityIndicator color={"purple"} size={30} />
         </View>
      )
   }

   return (
      <SafeAreaProvider>
         <SafeAreaView>
            <ScrollView>
               <Text>{movieQuery.data.title}</Text>
               {/* <StatusBar/> */}
            </ScrollView>
         </SafeAreaView>
      </SafeAreaProvider>
   )
}
export default MovieScreen
