import React, { useMemo, useState } from "react";
import Breadcrumb from "components/Breadcrumb";
import PlotlyComponent from "components/charts/PlotlyComponent";
import { analytics } from "data/AnalyticsData";
import Dropdown from "../components/Dropdown";
import Button from "../components/Button";
import classNames from "classnames";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

const OverallPrevalence = () => {
  const prevalence_overall_data = analytics.prevalence.table.data.filter(
    (record) => {
      return record[2] === "Overall";
    }
  );
  const conditions = [
    ...new Set(
      prevalence_overall_data.map((item) => {
        return item[0];
      })
    ),
  ];
  const prevalence_overall_columns = analytics.prevalence.table.columns;

  const get_plot_data = () => {
    const plot_data = [];
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    for (let i = 0; i < conditions.length; i++) {
      const data = prevalence_overall_data.filter((record) => {
        return record[0] === conditions[i];
      });
      const trace = {
        x: data.map((item) => {
          return item[1];
        }),
        y: data.map((item) => {
          if (item[4] !== null) {
            return (Math.round(item[4] * 100) / 100).toFixed(2);
          } else {
            return null;
          }
        }),
        name: conditions[i],
        mode: "lines+markers",
        type: "scatter",
        error_y: {
          type: "data",
          symmetric: false,
          array: data.map((item) => {
            if (
              Math.round(item[5] * 100) / 100 === 0.0 &&
              Math.round(item[6] * 100) / 100 === 0.0
            ) {
              return 0.0;
            } else {
              return clamp(
                (Math.round(item[8] * 100) / 100).toFixed(2) -
                  (Math.round(item[4] * 100) / 100).toFixed(2),
                0.0,
                50
              );
            }
          }),
          arrayminus: data.map((item) => {
            if (item[5] === 0.0 && item[6] === 0.0) {
              return 0.0;
            } else {
              return clamp(
                (Math.round(item[4] * 100) / 100).toFixed(2) -
                  (Math.round(item[7] * 100) / 100).toFixed(2),
                0.0,
                50
              );
            }
          }),
          visible: true,
        },
      };
      plot_data.push(trace);
    }
    return plot_data;
  };

  const plot_layout = {
    title: "Overall Prevalence",
    colorway: [
      "#6dccda",
      "#cdcc5d",
      "#a2a2a2",
      "#ed97ca",
      "#a8786e",
      "#ad8bc9",
      "#ed665d",
      "#67bf5c",
      "#ff9e4a",
      "#729ece",
    ],
    //["#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f", "#edc949", "#af7aa1", "#ff9da7", "#9c755f", "#bab0ab"],
    autosize: true,
    xaxis: { title: "Year" },
    yaxis: { title: "Prevalence proportion per 100,000 persons" },
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const currentPageData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return prevalence_overall_data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, prevalence_overall_data]);

  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <section className="breadcrumb lg:flex items-start">
        <Breadcrumb title="Overall Prevalence" />
        <div className="flex flex-wrap gap-2 items-center ltr:ml-auto rtl:mr-auto mt-5 lg:mt-0">
          <div className="flex gap-x-2">
            {/* Sort By */}
            <Dropdown
              content={
                <div className="dropdown-menu">
                  <a href="#no-link">PNG Image</a>
                  <a href="#no-link">CSV File</a>
                </div>
              }
            >
              <Button color="secondary" outlined className="uppercase">
                Export As
                <span className="ltr:ml-3 rtl:mr-3 la la-caret-down text-xl leading-none"></span>
              </Button>
            </Dropdown>
          </div>
        </div>
      </section>
      <div className="grid lg:grid-cols-1 gap-5">
        <div className="card p-5">
          <h3>Prevalence Plot</h3>
          <div className="mt-5">
            <PlotlyComponent plot_data={get_plot_data()} layout={plot_layout} />
          </div>
        </div>
        <div className="card p-5">
          <h3>Prevalence Table</h3>
          <>
            <div className="alert-wrapper mt-5">
              <div
                className={classNames("alert", "alert_primary", {
                  alert_outlined: true,
                })}
              >
                <strong className="uppercase">
                  <bdi>Prevalence</bdi>
                </strong>
                proportions are recorded per 100,000 persons.
              </div>
            </div>
            <div className="mt-3">
              <Table
                data={currentPageData}
                columns={prevalence_overall_columns}
                exclude={["Lower_CI", "Upper_CI", "Subgroup", "Group"]}
                left_justified_col="Condition"
                rate_col="Prevalence"
              />
            </div>
            <div className="mt-5">
              <Pagination
                currentPage={currentPage}
                totalCount={prevalence_overall_data.length}
                pageSize={pageSize}
                onPageChange={(page) => setCurrentPage(page)}
                onPageSizeChange={(size) => setPageSize(size)}
              />
            </div>
          </>
        </div>
      </div>
    </main>
  );
};

export default OverallPrevalence;
