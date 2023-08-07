import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "actions";
import CustomSelect from "components/form/CustomSelect";

const TopBar = () => {
  const dispatch = useDispatch();

  const menuBarVisible = useSelector((state) => state.root.menuBarVisible);

  return (
    <header className="top-bar">
      {/* Menu Toggler */}
      <button
        className="menu-toggler la la-bars"
        onClick={() => dispatch(toggleMenu(!menuBarVisible))}
      ></button>
      {/* Brand */}
      <span className="brand ltr:ml-15">Analogy</span>

      {/* Dropdown */}
      <form className="w-64 md:block ltr:ml-10 rtl:mr-auto">
        <CustomSelect>
          <option>Default Analysis</option>
          <option>Analysis-1</option>
          <option>Analysis-2</option>
        </CustomSelect>
      </form>

      {/* Right */}
      <div className="flex items-center ltr:ml-auto rtl:mr-auto">
        <h3>Testing after gestational diabetes</h3>
      </div>
    </header>
  );
};

export default TopBar;
