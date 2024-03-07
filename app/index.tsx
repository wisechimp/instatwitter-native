import { useEffect, useState } from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import TwittCardList from "../src/components/twittCardList/TwittCardList"
import fetchTwitts from "../src/database/queries/fetchTwitts"

const Home = () => {
  const [twittData, setTwittData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getTwittData = async () => {
      const data = await fetchTwitts()
      if (data.length) {
        setTwittData(data)
        setIsLoading(false)
      }
    }

    getTwittData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View>
          <ActivityIndicator size='large' />
          <Text>Loading...</Text>
        </View>
      ) : (
        <TwittCardList twittData={twittData} />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default Home