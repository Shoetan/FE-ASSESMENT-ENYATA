/* eslint-disable react-refresh/only-export-components */
import { ColumnDef } from "@tanstack/react-table";
import SpecieTable from "../../../shared/table/SpeciesTable";
import { useSpeciesQuery } from "./species-query";

export type columnProps = {
  id: string;
  name: string;
  classification: string;
  eye_color: string;
  hair_color: string;
  height:string;
  created: string;
};

export const columns: ColumnDef<columnProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "classification",
    header: "Classification",
  },
  {
    accessorKey: "eye_color",
    header: "Eye Color",
  },
  {
    accessorKey: "hair_color",
    header: "Hair Color",
  },
  {
    accessorKey: "height",
    header: "Height",
  },
  {
    accessorKey: "created",
    header: "Created",
  },
];

const Species = () => {

    const { speciesData, gettingSpecies } = useSpeciesQuery();

    console.log(speciesData);

  return (
    <div>
      <h3 className="pb-8 font-Ubuntu font-semibold text-lg text-stone-500">
        Species
      </h3>
      <SpecieTable
        tableData={speciesData?.results}
        isLoading={gettingSpecies}
        tableColumns={columns}
      />
    </div>
  );
};

export default Species;
