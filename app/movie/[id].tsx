import { getMovieByIdAction } from "@/core/actions/movie/getMovieById.actions"
import { useLocalSearchParams } from "expo-router"
import { View, Text } from "react-native"
const MovieScreen = () => {

   const {id} = useLocalSearchParams() 



   return (
      <View>
         <Text>{id}</Text>
      </View>
   )
}
export default MovieScreen