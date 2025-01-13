import { View, Text, SafeAreaView } from "react-native"

import { Slot, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import "../global.css"

const queryClient = new QueryClient()

const RootLayut = () => {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <Stack />
            <StatusBar style="inverted" />
         </QueryClientProvider>
      </>
   )
}
export default RootLayut
