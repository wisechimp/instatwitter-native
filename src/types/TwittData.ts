import { Tables } from "./supabase"

type TwittData = {
  data: Tables<"twitts"> & {
    profiles: Pick<Tables<"profiles">, "username">
  }
}

export default TwittData
