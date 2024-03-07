import { Text } from "react-native"

import TwittData from "../../../types/TwittData"

const TwittCard = ({ data }: TwittData) => {
  const { text } = data
  return (
    <Text>{text}</Text>
  )
}

export default TwittCard