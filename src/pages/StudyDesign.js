import Breadcrumb from "components/Breadcrumb";
import FlowChart from "../components/charts/FlowChart";

const StudyDesign = () => {
    return (
        <main className="workspace">
            {/* Breadcrumb */}
            <section className="breadcrumb">
                <Breadcrumb title="Study Design" />
            </section>
            <div className="card">
                <div className="p-5">
                  <h3>Study Design</h3>
                </div>
                <hr />
                <div className="p-5">
                    <FlowChart />
                </div>

            </div>
        </main>
    );
};

export default StudyDesign;