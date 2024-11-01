/* eslint-disable react-refresh/only-export-components */
import { ColumnDef } from "@tanstack/react-table";
import PeopleTable from "../../../shared/table/PeopleTable";
import { usePeopleQuery } from "./people-query";

export type columnProps = {
  id: string;
  name: string;
  birth_year: string;
  gender: string;
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
    accessorKey: "birth_year",
    header: "Birth Year",
  },
  {
    accessorKey: "gender",
    header: "Gender",
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

const People = () => {

    const { peopleData, gettingPeople } = usePeopleQuery();

    console.log(peopleData);


  return (
    <div>
      <h3 className="pb-8 font-Ubuntu font-semibold text-lg text-stone-500">
        People
      </h3>
      <PeopleTable
        tableData={peopleData?.results}
        isLoading={gettingPeople}
        tableColumns={columns}
      />
    </div>
  );
};

export default People;
