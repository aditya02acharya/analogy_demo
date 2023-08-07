import Breadcrumb from "components/Breadcrumb";
import {analytics} from "../data/AnalyticsData";
import React, {useMemo, useState} from "react";
import PlotlyComponent from "../components/charts/PlotlyComponent";
import Select from 'react-select';

const Prevalence = () => {
    const prevalence_data = analytics.incidence.table.data.filter((record) => {
        return record[2] !== "Overall";
    });
    const conditions = [...new Set(prevalence_data.map((item) => {return item[0]}))];
    const conditionOptions = conditions.map((item) => {return{value: item, label: item}});
    const groups = [...new Set(prevalence_data.map((item) => {return item[2]}))];
    const groupOptions = groups.map((item) => {return{value: item, label: item}});
    const subgroups = [...new Set(prevalence_data.map((item) => {return item[3]}))];
    const [currentCondition, setCurrentCondition] = useState({conditionsSelected: [conditions[0]], groupSelected: [groups[0]]});

    const handleConditionChange = (selected) => {
        setCurrentCondition(
            {...currentCondition, conditionsSelected: selected.map((item) => {return item.value})}
        );
    };

    const handleGroupChange = (selected) => {
        setCurrentCondition(
            {...currentCondition, groupSelected: selected.map((item) => {return item.value})}
        );
    };


    const get_plot_data = () => {
        const plot_data = [];
        const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
        for (let i = 0; i < conditions.length; i++) {
            for (let j = 0; j < groups.length; j++){
                const traces = []
                for (let k = 0; k < subgroups.length; k++){
                    const data = prevalence_data.filter((record) => {return (record[0] === conditions[i] && record[2] === groups[j] && record[3] === subgroups[k]);});
                    const trace = {
                        x: data.map((item) =>{return item[1]}),
                        y: data.map((item) =>{return (Math.round(item[4] * 100) / 100).toFixed(2)}),
                        name: subgroups[k],
                        mode: 'lines+markers',
                        type: 'scatter',
                        error_y: {
                            type: 'data',
                            symmetric: false,
                            array: data.map((item) => {
                                if ((Math.round(item[5] * 100) / 100) === 0.0 && (Math.round(item[6] * 100) / 100) === 0.0){
                                    return 0.0
                                }
                                else {
                                    return clamp((Math.round(item[8] * 100) / 100).toFixed(2) - (Math.round(item[4] * 100) / 100).toFixed(2), 0.0, 100)
                                }
                            }),
                            arrayminus: data.map((item) => {
                                if (item[5] === 0.0 && item[6] === 0.0){
                                    return 0.0
                                }
                                else{
                                    return clamp((Math.round(item[4] * 100) / 100).toFixed(2) - (Math.round(item[7] * 100) / 100).toFixed(2), 0.0, 100)
                                }
                            }),
                            visible: true
                        },
                    }
                    traces.push(trace)
                }
                plot_data.push({
                    id: conditions[i] + "_" + groups[j],
                    condition: conditions[i],
                    group: groups[j],
                    plotData: traces,
                    layout: {
                        title: "Prevalence trend for "+conditions[i]+ " by "+groups[j],
                        colorway: ["#6dccda", "#cdcc5d", "#a2a2a2", "#ed97ca", "#a8786e", "#ad8bc9", "#ed665d", "#67bf5c", "#ff9e4a", "#729ece"],
                        autosize: true,
                        xaxis: {title: "Year"},
                        yaxis:{title: "Prevalence proportion per 100,000 persons"},
                    },
                })
            }
        }
        return plot_data;
    };
    const plotJson = useState( () => get_plot_data() );

    const currentPageData = useMemo(() => {
        let data = plotJson[0];
        if (currentCondition.conditionsSelected !== null && currentCondition.conditionsSelected.length > 0) {
            data = data.filter((record) => {return currentCondition.conditionsSelected.includes(record.condition)})
        }
        if (currentCondition.groupSelected !== null && currentCondition.groupSelected.length > 0) {
            data = data.filter((record) => {return currentCondition.groupSelected.includes(record.group)})
        }

        return data

        },
        [plotJson, currentCondition]
    );

    return (
        <main className="workspace">
            {/* Breadcrumb */}
            <section className="breadcrumb lg:flex items-start">
                <Breadcrumb title="Prevalence Subgroup Analysis" />
                <div className="w-200 flex flex-wrap gap-2 items-center mr-0 ltr:ml-auto mt-5 lg:mt-0">
                    <div>
                        <Select
                            defaultValue={conditionOptions[0]}
                            isMulti
                            onChange={handleConditionChange}
                            options={conditionOptions}
                        />
                    </div>
                    <div>
                        <Select
                        isMulti
                        defaultValue={groupOptions[0]}
                        onChange={handleGroupChange}
                        options={groupOptions}/>
                    </div>

                </div>
            </section>
            <div className="grid lg:grid-cols-1 gap-5">
                {
                    currentPageData.map((item) => {
                        return(
                            <div key={item.id} className="card p-5 min-w-0">
                                <PlotlyComponent plot_data={item.plotData} layout={item.layout}/>
                            </div>
                        );
                    })
                }
            </div>
        </main>
    );
};

export default Prevalence;