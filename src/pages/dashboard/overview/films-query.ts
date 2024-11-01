import { _get } from "../../../api/api-client";
import { useQuery } from "@tanstack/react-query";


export const useFilmsQuery = () => {
  const {data, isPending} = useQuery({
    queryKey:["films"],
    queryFn: async () => {
      const response =  await _get("/films")
      return response.data
    }
  })

  return {filmData:data, gettingFilms:isPending}
}