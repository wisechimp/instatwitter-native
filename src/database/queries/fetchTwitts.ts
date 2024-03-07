import FetchedTwittData from "../../types/FetchedTwittsData"
import { supabase } from "../config/supabase"

const fetchTwitts = async () => {
  try {
    const { data, error } = await supabase
      .from('twitts')
      .select(
        `*,
        profiles (
          *
        )`)
        return data
  } catch (error) {
    return error
  }
}

export default fetchTwitts