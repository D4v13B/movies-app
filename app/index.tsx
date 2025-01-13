import { Redirect } from "expo-router"
import { View, Text } from "react-native"
const MoviesApp = () => {
   return (
      <Redirect href={"/home"} />

      // <View>
      //    <Text className="">HomeLayout</Text>
      // </View>
   )
}
export default MoviesApp
