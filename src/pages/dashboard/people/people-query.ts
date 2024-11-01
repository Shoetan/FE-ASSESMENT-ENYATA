import { _get } from "../../../api/api-client";
import { useQuery } from "@tanstack/react-query";

export const usePeopleQuery = () => {
  const { data, isPending } = useQuery({
    queryKey: ["people"],
    queryFn: async () => {
      const response = await _get("/people");
      return response.data;
    },
  });

  return { peopleData: data, gettingPeople: isPending };
};
