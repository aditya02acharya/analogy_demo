import React, { useMemo, useState } from "react";
import Breadcrumb from "components/Breadcrumb";
import PlotlyComponent from "components/charts/PlotlyComponent";
import {analytics} from "../data/AnalyticsData";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Pagination from "../components/Pagination";
import classNames from "classnames";
import Table from "../components/Table";
import Tabs, {TabsContent, TabsContentItem, TabsNavigation, TabsNavigationItem} from "../components/Tabs";

const OverallIncidence = () => {
    const incidence_overall_data = analytics.incidence.table.data.filter((record) => {
        return record[2] === "Overall";
    });

    const conditions = [...new Set(incidence_overall_data.map((item) => {return item[0]}))];

    const incidence_overall_columns = analytics.incidence.table.columns
    const get_plot_data = () => {
        const plot_data = [];
        const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
        for (let i = 0; i < conditions.length; i++) {
            const data = incidence_overall_data.filter((record) => {return record[0] === conditions[i];});
            const trace = {
                x: data.map((item) =>{return item[1]}),
                y: data.map((item) =>{return (Math.round(item[4] * 100) / 100).toFixed(2)}),
                name: conditions[i],
                mode: 'lines+markers',
                type: 'scatter',
                error_y: {
                    type: 'data',
                    symmetric: false,
                    array: data.map((item) =>{
                        if ((Math.round(item[5] * 100) / 100) === 0.0 && (Math.round(item[6] * 100) / 100) === 0.0){
                            return 0.0
                        }
                        else {
                            return clamp((Math.round(item[8] * 100) / 100).toFixed(2) - (Math.round(item[4] * 100) / 100).toFixed(2), 0.0, 50)
                        }
                        }),
                    arrayminus: data.map((item) =>{
                        if (item[5] === 0.0 && item[6] === 0.0){
                            return 0.0
                        }
                        else{
                            return clamp((Math.round(item[4] * 100) / 100).toFixed(2) - (Math.round(item[7] * 100) / 100).toFixed(2), 0.0, 50)
                        }
                    }),
                    visible: true
                },
            }
            plot_data.push(trace)
        }
        return plot_data;
    };

    const plot_layout = {
        title: 'Overall Incidence',
        colorway: ["#6dccda", "#cdcc5d", "#a2a2a2", "#ed97ca", "#a8786e", "#ad8bc9", "#ed665d", "#67bf5c", "#ff9e4a", "#729ece"],
        //["#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f", "#edc949", "#af7aa1", "#ff9da7", "#9c755f", "#bab0ab"],
        autosize: true,
        xaxis: {title: "Year"},
        yaxis:{title: "Incidence rate per 100,000 person years"}
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const currentPageData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return incidence_overall_data.slice(firstPageIndex, lastPageIndex);
        },
        [currentPage, pageSize, incidence_overall_data]
    );

    return (
        <main className="workspace">
            {/* Breadcrumb */}
            <section className="breadcrumb lg:flex items-start">
                <Breadcrumb title="Overall Incidence" />
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
                    <h3>Incidence Plot</h3>
                    <div className="mt-5"><PlotlyComponent plot_data={get_plot_data()} layout={plot_layout}/></div>

                </div>
                <div className="card p-5">
                    <h3>Incidence Table</h3>
                    <>
                        <div className="alert-wrapper mt-5">
                            <div className={classNames("alert", "alert_primary", {alert_outlined: true,})}>
                                <strong className="uppercase">
                                    <bdi>Incidence</bdi>
                                </strong>
                                rates are recorded per 100,000 person years.
                            </div>
                        </div>
                        <div className="mt-3">
                            <Table data={currentPageData} columns={incidence_overall_columns}
                                   exclude={["Lower_CI", "Upper_CI", "Subgroup", "Group"]}
                                   left_justified_col="Condition"
                                   rate_col="Incidence"/>
                        </div>
                        <div className="mt-5">
                            <Pagination
                                currentPage={currentPage}
                                totalCount={incidence_overall_data.length}
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

export default OverallIncidence;