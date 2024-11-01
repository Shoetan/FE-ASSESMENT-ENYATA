/* eslint-disable react-refresh/only-export-components */
import { ColumnDef } from "@tanstack/react-table";
import TableOne from "../../../shared/table/Table";
import OverViewCards from "../../../shared/overviewCard/OverViewCards";
import Green from "../../../assets/Green.png"
import Yellow from "../../../assets/Yellow.png"
import indigo from "../../../assets/indigo.png"
import pink from "../../../assets/pink.png"
import { CardProps } from "../../../shared/overviewCard/types";
import { useFilmsQuery } from "./films-query";

// This type is used to define the shape of our data.
export type columnProps = {
  id: string;
  film_title: string;
  release_date: string;
  director: string;
  producer: string;
  episode_id:string;
  character: string;
};

export const columns: ColumnDef<columnProps>[] = [
  {
    accessorKey: "film_title",
    header: "Film Title",
  },
  {
    accessorKey: "release_date",
    header: "Release Date",
  },
  {
    accessorKey: "director",
    header: "Director",
  },
  {
    accessorKey: "producer",
    header: "Producer",
  },
  {
    accessorKey: "episode_id",
    header: "Episode ID",
  },
  {
    accessorKey: "character",
    header: "Character",
  },
];

const Overview = () => {

  const cardData: CardProps[] = [
    {
      title: "Films" ,
      quantity: 200,
      add:20,
      color:Green

    },
    {
      title: "Starship" ,
      quantity: 200,
      add:20,
      color:indigo
    },
    {
      title: "People" ,
      quantity: 200,
      add:20,
      color: pink
    },
    {
      title: "Species" ,
      quantity: 200,
      add:20,
      color:Yellow
    },
  ]


  const {filmData, gettingFilms} = useFilmsQuery()

  return (
    <div>
      <div className="flex items-start gap-20 m-8">
        {cardData.map((card) => {
          return (
            <OverViewCards
              title={card.title}
              quantity={card.quantity}
              color={card.color}
              add={card.add}
            />
          );
        })}
      </div>
      <h3 className="pb-8 font-Ubuntu font-semibold text-lg text-stone-500">
        Films
      </h3>
      <TableOne
        tableData={filmData?.results}
        isLoading={gettingFilms}
        tableColumns={columns}
      />
    </div>
  );
};

export default Overview;
