/* eslint-disable react-refresh/only-export-components */
import { ColumnDef } from "@tanstack/react-table";
import StarshipTable from "../../../shared/table/StarshipTable";
import { useStarshipQuery } from "./starship-query";

export type columnProps = {
  id: string;
  name: string;
  model: string;
  class: string;
  passenger: string;
  length:string;
  character: string;
};

export const columns: ColumnDef<columnProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "class",
    header: "Class",
  },
  {
    accessorKey: "passenger",
    header: "Passenger",
  },
  {
    accessorKey: "length",
    header: "Length",
  },
  {
    accessorKey: "character",
    header: "Character",
  },
];

const Starship = () => {

    const { starshipData, gettingStarships } = useStarshipQuery();

    console.log(starshipData);


  return (
    <div>
      <h3 className="pb-8 font-Ubuntu font-semibold text-lg text-stone-500">
        Starships
      </h3>
      <StarshipTable
        tableData={starshipData?.results}
        isLoading={gettingStarships}
        tableColumns={columns}
      />
    </div>
  );
};

export default Starship;
