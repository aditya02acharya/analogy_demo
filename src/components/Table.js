import Pagination from "../components/Pagination";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import Modal from "./Modal";

const Table = (props) => {
  const { data, columns, left_justified_col, exclude, rate_col } = props;
  return (
    <div className="overflow-x-auto">
      <table className="table table-auto table_hoverable w-full">
        <thead>
          <tr>
            {columns.map((item) => {
              let elem = null;

              if (
                !exclude.includes(item) &&
                item !== left_justified_col &&
                item !== rate_col
              ) {
                elem = (
                  <th className="text-center uppercase" key={item}>
                    {item}
                  </th>
                );
              } else if (item === left_justified_col) {
                elem = (
                  <th className="text-left uppercase" key={item}>
                    {item}
                  </th>
                );
              } else if (item === rate_col) {
                elem = (
                  <th className="text-center uppercase" key={item}>
                    {item + " (95% CI)"}
                  </th>
                );
              } else {
                elem = (
                  <th className="hidden text-center uppercase" key={item}>
                    {item}
                  </th>
                );
              }

              return elem;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item[0].concat("_", item[1])}>
                <td>{item[0]}</td>
                <td className="text-center">{item[1]}</td>
                <td className="text-center">
                  {(Math.round(item[4] * 100) / 100).toFixed(2)} (
                  {(Math.round(item[7] * 100) / 100).toFixed(2)},{" "}
                  {(Math.round(item[8] * 100) / 100).toFixed(2)})
                </td>
                <td className="text-center">
                  {(Math.round(item[5] * 100) / 100).toFixed(2)}
                </td>
                <td className="text-center">
                  {(Math.round(item[6] * 100) / 100).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  left_justified_col: PropTypes.string,
  exclude: PropTypes.array,
  rate_col: PropTypes.string,
};

export default Table;
