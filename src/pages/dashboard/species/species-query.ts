import { _get } from "../../../api/api-client";
import { useQuery } from "@tanstack/react-query";

export const useSpeciesQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["species"],
    queryFn: async () => {
      const response = await _get("/species");
      return response.data;
    },
  });

  return { speciesData: data, gettingSpecies: isPending };
};
