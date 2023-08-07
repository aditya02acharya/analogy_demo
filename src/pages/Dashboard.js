import Breadcrumb from "components/Breadcrumb";
import { analytics } from "../data/AnalyticsData";
import {
  stacked_bar,
  lineWithAnnotationNum,
  lineWithAnnotationDnom,
  lineWithAnnotationProp,
} from "../data/DummyData";
import PlotlyComponent from "../components/charts/PlotlyComponent";
import LineWithAnnotationChart from "components/charts/LineWithAnnotationChart";
import React from "react";

const Dashboard = () => {
  const incidence_overall_data = analytics.incidence.table.data.filter(
    (record) => {
      return record[2] === "Overall";
    }
  );

  const conditions = ["SELFHARM_BIRM_CAM:0"];

  const get_plot_data = () => {
    const plot_data = [];
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    for (let i = 0; i < conditions.length; i++) {
      const data = incidence_overall_data.filter((record) => {
        return record[0] === conditions[i];
      });
      const trace = {
        x: data.map((item) => {
          return item[1];
        }),
        y: data.map((item) => {
          return (Math.round(item[4] * 100) / 100).toFixed(2);
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
  const get_plot_bar = () => {
    const plot_data = [];
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    for (let i = 0; i < conditions.length; i++) {
      const data = incidence_overall_data.filter((record) => {
        return record[0] === conditions[i];
      });
      const trace = {
        x: data.map((item) => {
          return item[1];
        }),
        y: data.map((item) => {
          return (Math.round(item[4] * 100) / 100).toFixed(2);
        }),
        name: conditions[i],
        mode: "lines+markers",
        type: "bar",
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
    title: "Incidence Rate for Self Harm",
    colorway: ["#0284c7"],
    //["#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f", "#edc949", "#af7aa1", "#ff9da7", "#9c755f", "#bab0ab"],
    autosize: true,
    xaxis: { title: "Year" },
    yaxis: { title: "Incidence rate per 100,000 person years" },
    showlegend: false,
  };
  const plot_layout_bar = {
    title: "",
    colorway: ["#358ec7", "#e8f2f9"],
    //["#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f", "#edc949", "#af7aa1", "#ff9da7", "#9c755f", "#bab0ab"],
    autosize: true,
    xaxis: { title: "" },
    yaxis: { title: "" },
    barmode: "stack",
    showlegend: false,
  };

  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <section className="breadcrumb">
        <Breadcrumb title="Dashboard" />
      </section>
      <div className="grid lg:grid-cols-2 gap-5 mb-5">
        {/* Summaries */}
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="card px-4 py-8 flex justify-center items-center text-center lg:transform hover:scale-110 hover:shadow-lg transition-transform duration-200">
            <div>
              <span className="text-primary text-5xl leading-none la la-first-aid"></span>
              <p className="mt-2">Tested at Year 1</p>
              <div className="text-primary mt-5 text-3xl leading-none">
                8.7%
              </div>
            </div>
          </div>
          <div className="card px-4 py-8 flex justify-center items-center text-center lg:transform hover:scale-110 hover:shadow-lg transition-transform duration-200">
            <div>
              <span className="text-primary text-5xl leading-none la la-first-aid"></span>
              <p className="mt-2">Tested at Year 2</p>
              <div className="text-primary mt-5 text-3xl leading-none">
                9.1%
              </div>
            </div>
          </div>
          <div className="card px-4 py-8 flex justify-center items-center text-center lg:transform hover:scale-110 hover:shadow-lg transition-transform duration-200">
            <div>
              <span className="text-primary text-5xl leading-none la la-first-aid"></span>
              <p className="mt-2">Tested at Year 3</p>
              <div className="text-primary mt-5 text-3xl leading-none">
                6.8%
              </div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="card p-5">
            <LineWithAnnotationChart
              data={lineWithAnnotationNum}
              unit="patients"
            />
          </div>
          <div className="card p-5">
            <LineWithAnnotationChart
              data={lineWithAnnotationDnom}
              unit="patients"
            />
          </div>
          <div className="card p-5">
            <LineWithAnnotationChart data={lineWithAnnotationProp} unit="%" />
          </div>
        </div>
        <div className="card p-5 min-w-0">
          <h3>Testing of women with gestational diabetes in the community</h3>
          <div className="mt-5 min-w-0">
            <PlotlyComponent plot_data={stacked_bar} layout={plot_layout_bar} />
          </div>
        </div>
        <div className="card p-5 flex flex-col">
          <h3>
            Testing of women with gestational diabetes in Health Authorities
          </h3>
          <table className="table table_list mt-10 w-full">
            <thead>
              <tr>
                <th className=" text-left uppercase">HEALTH_AUTH</th>
                <th className=" text-center uppercase">Tested at Year 1 (%)</th>
                <th className=" text-center uppercase">Tested at Year 2 (%)</th>
                <th className=" text-center uppercase">Tested at Year 3 (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>London</td>
                <td className="text-center">23.52</td>
                <td className="text-center">21.73</td>
                <td className="text-center">42.85</td>
              </tr>
              <tr>
                <td>South East</td>
                <td className="text-center">3.94</td>
                <td className="text-center">5.79</td>
                <td className="text-center">0.00</td>
              </tr>
              <tr>
                <td>Wales</td>
                <td className="text-center">7.57</td>
                <td className="text-center">9.83</td>
                <td className="text-center">6.89</td>
              </tr>
              <tr>
                <td>West Midlands</td>
                <td className="text-center">12.50</td>
                <td className="text-center">12.06</td>
                <td className="text-center">12.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
