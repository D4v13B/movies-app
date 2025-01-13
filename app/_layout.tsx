import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

import { GestureHandlerRootView } from "react-native-gesture-handler"

import "../global.css"

const queryClient = new QueryClient()

const RootLayut = () => {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <GestureHandlerRootView>
               <Stack
                  screenOptions={{
                     headerShown: false,
                  }}
               />
               {/* <Slot /> */}
               <StatusBar style="inverted" />
            </GestureHandlerRootView>
         </QueryClientProvider>
      </>
   )
}
export default RootLayut
