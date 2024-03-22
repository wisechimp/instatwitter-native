import { useEffect, useState } from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

import TwittCardList from "../../src/components/twittCardList/TwittCardList"
import fetchTwitts from "../../src/database/queries/fetchTwitts"

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
    <View style={styles.container}>
      {isLoading ? (
        <View>
          <ActivityIndicator size='large' color='#03125f' />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <TwittCardList twittData={twittData} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9bc3fd",
    alignItems: "center",
    justifyContent: "center"
  },
  loadingText: {
    color: "#03125f",
    fontSize: 24,
    marginTop: 24
  }
})

export default Home