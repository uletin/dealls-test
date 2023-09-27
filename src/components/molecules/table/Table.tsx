import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ data, column }: any) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <TableHeader columns={column} />
        </thead>
        <tbody>
            <TableRow />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
