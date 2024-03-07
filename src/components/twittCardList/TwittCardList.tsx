import { FlatList } from "react-native"
import TwittData from "../../types/TwittData"
import TwittCard from "./twittCard/TwittCard"

type TwittCardListProps = {
  twittData: Array<TwittData>
}

const TwittCardList = ({ twittData }: TwittCardListProps) => {
  console.log(twittData)
  return(
  <FlatList data={twittData} renderItem={({ item: twitt }) => (
    <TwittCard data={twitt} />
  )} />
  )
}

export default TwittCardList