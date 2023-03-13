/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import Button from '../Button';

export interface tableData {
  id: number;
  name: string;
  age: number;
}

export interface TableProps<tableData> {
  header: string[];
  data: tableData[];
  action?: boolean;
}

const Table: React.FC<TableProps<any>> = ({
  header,
  data,
  action
}: TableProps<any>) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {header.map((item, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {item}
              </th>
            ))}
            {action && (
              <th scope="col" className="px-6 py-3" key={header.length + 1}>
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((col) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={col.id}
            >
              <td scope="row" className="px-6 py-4">
                {col.id}
              </td>
              <td className="px-6 py-4">{col.name}</td>
              <td className="px-6 py-4">{col.age}</td>
              {action && (
                <td className="flex">
                  <Button
                    text="Edit"
                    onClick={() => {
                      alert('Edit Clicked');
                    }}
                  />
                  <Button
                    text="Delete"
                    onClick={() => {
                      alert('Delete Clicked');
                    }}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  action: false
};

export default Table;
