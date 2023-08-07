import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDefault from "layouts/Default";
import StudyDesign from "pages/StudyDesign";
import OverallIncidence from "pages/OverallIncidence";
import Baseline from "pages/BaselineSummary";
import Outcome from "pages/OutcomeSummary";
import Incidence from "pages/Incidence";
import Prevalence from "pages/Prevalence";
import OverallPrevalence from "../pages/OverallPrevalence";
import Dashboard from "../pages/Dashboard";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutDefault />}>
                    <Route path="/" element={<StudyDesign />} />
                    <Route path="/analysis_overall_incidence" element={<OverallIncidence />} />
                    <Route path="/analysis_overall_prevalence" element={<OverallPrevalence/>} />
                    <Route path="/summary_baseline" element={<Baseline />} />
                    <Route path="/summary_outcome" element={<Outcome />} />
                    <Route path="/analysis_incidence" element={<Incidence />} />
                    <Route path="/analysis_prevalence" element={<Prevalence />} />
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;