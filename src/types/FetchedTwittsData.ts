import { Tables } from "./supabase"

type FetchedTwittData = {
  data: Array<Tables<"twitts"> & Pick<Tables<"profiles">, "username">>
  error: string
}

export default FetchedTwittData
