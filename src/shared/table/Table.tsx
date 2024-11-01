/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate } from "react-router-dom";

type TableProp = {
  tableData: any[];
  isLoading: boolean;
  tableColumns: any[];
};

const TableOne = ({ tableData, isLoading, tableColumns }: TableProp) => {

  const navigate = useNavigate()
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th>
                <input type="checkbox" name="" id="" />
              </th>
              {tableColumns &&
                tableColumns.map((column: any, i: any) => {
                  return (
                    <th
                      key={i}
                      className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white"
                    >
                      {column.header}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={4}>
                  <div className="loader-container">
                    <div className="loader"></div>
                  </div>
                </td>
              </tr>
            )}
            {tableData &&
              tableData.length > 0 &&
              tableData.map((packageItem, key) => {
                return (
                  <tr key={key} className="cursor-pointer hover:animate-pulse"   onClick={()=> {navigate(`details-page/:${packageItem.episode_id}`)}}>
                     <td className="border-b border-[#eee] py-5 pr-4 dark:border-strokedark">
                      <input type="checkbox" name="" id="" />
                    </td>
                     <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      {packageItem.title}
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      {" "}
                      {packageItem.release_date}
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      {packageItem.director}
                    </td>
                     <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      {packageItem.producer}
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      {" "}
                      {packageItem.episode_id}
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      {packageItem.characters[0]}
                    </td>
                   
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOne;
