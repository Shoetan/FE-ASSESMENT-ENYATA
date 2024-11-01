import { _get } from "../../../api/api-client";
import { useQuery } from "@tanstack/react-query";

export const useStarshipQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["starships"],
    queryFn: async () => {
      const response = await _get("/starships");
      return response.data;
    },
  });

  return { starshipData: data, gettingStarships: isPending };
};
