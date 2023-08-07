import React from "react";
import { useMemo, useState } from "react";

import Button from "components/Button";
import Breadcrumb from "components/Breadcrumb";
import Pagination from "components/Pagination";
import { table_one } from "../data/DummyData";
import Dropdown from "../components/Dropdown";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../components/Modal";
import CustomSelect from "../components/form/CustomSelect";

const Baseline = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [isSideModalActive, setIsSideModalActive] = useState(false);
  const data = table_one.data;
  const columns = table_one.columns;

  const currentPageData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize, data]);

  return (
    <main className="workspace">
      {/* Breadcrumb */}
      <section className="breadcrumb lg:flex items-start">
        <Breadcrumb title="Summary of Baseline" />

        <div className="flex flex-wrap gap-2 items-center ltr:ml-auto rtl:mr-auto mt-5 lg:mt-0">
          <Button
            color="secondary"
            outlined
            icon
            onClick={() => setIsSideModalActive(true)}
          >
            <span className="la la-sliders-h"></span>
          </Button>

          <div className="flex gap-x-2">
            {/* Sort By */}
            <Dropdown
              content={
                <div className="dropdown-menu">
                  <a href="#no-link">Text File</a>
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

      <div className="card p-5">
        <div className="overflow-x-auto">
          <table className="table table-auto table_hoverable w-full">
            <thead className="sticky top-0">
              <tr>
                {columns.map((item) => {
                  let elem = null;

                  if (item !== "Covariate_Index" && item !== "Covariate") {
                    elem = (
                      <th className="text-center uppercase" key={item}>
                        {item}
                      </th>
                    );
                  } else if (item === "Covariate") {
                    elem = (
                      <th className="text-left uppercase" key={item}>
                        {item}
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
              {currentPageData.map((item) => {
                return (
                  <tr key={item[5].concat("_", item[1])}>
                    <td>{item[0]}</td>
                    <td className="text-center">{item[1]}</td>
                    <td className="text-center">{item[2]}</td>
                    <td className="text-center">{item[3]}</td>
                    <td className="text-center">{item[4]}</td>
                    <td className="hidden text-center">{item[5]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5">
        <Pagination
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
          onPageSizeChange={(size) => setPageSize(size)}
        />
      </div>
      <Modal
        active={isSideModalActive}
        aside
        onClose={() => setIsSideModalActive(false)}
      >
        <ModalHeader>Filters</ModalHeader>
        <ModalBody>
          <form className="menu-detail">
            <div className="menu-detail-wrapper">
              <h6 className="uppercase">Covariate</h6>
              <CustomSelect>
                <option>Select</option>
                <option>AGE_CATG</option>
                <option>SEX</option>
              </CustomSelect>
            </div>
            <hr className="mb-10 border-divider" />
            <div className="flex-col whitespace-nowrap">
              <h6 className="uppercase">Stratum</h6>
              <CustomSelect>
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </CustomSelect>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            className="uppercase"
            onClick={() => setIsSideModalActive(false)}
          >
            Close
          </Button>
          <Button className="ltr:ml-2 rtl:mr-2 uppercase">Apply</Button>
        </ModalFooter>
      </Modal>
    </main>
  );
};

export default Baseline;
