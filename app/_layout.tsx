import { View, Text, SafeAreaView } from "react-native"

import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"

import "../global.css"

const RootLayut = () => {
   return (
      <>
         <Slot />
         <StatusBar style="inverted" />
      </>
   )
}
export default RootLayut
