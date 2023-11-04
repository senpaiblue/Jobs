import { useState } from "react"
import { View, ScrollView, SafeAreaView } from "react-native"
import { Stack, useRouter } from "expo-router"

import { COLORS, icons, images, SIZES } from '../.expo/constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../.expo/components'
const Home = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: ''
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          flex: 1,
          padding: 5,
          gap:20
        }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home