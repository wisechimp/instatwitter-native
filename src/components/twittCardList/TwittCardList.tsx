import { FlatList } from "react-native"
import TwittData from "../../types/TwittData"
import TwittCard from "./twittCard/TwittCard"

type TwittCardListProps = {
  twittData: Array<TwittData>
}

const TwittCardList = ({ twittData }: TwittCardListProps) => {
  return(
  <FlatList data={twittData} renderItem={({ item: twitt }) => (
    <TwittCard data={twitt} />
  )} />
  )
}

export default TwittCardList