const TableHeader = ({ columns }: any) => {
  return (
    <tr>
      {columns.map((column:any, index:any) => (
        <th key={index} scope="col" className="px-6 py-3">
            {column.title}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
