import { createContext, useContext, useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "actions";

import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";

import Backdrop from "components/Backdrop";

import useWindowSize from "utilities/hooks/useWindowSize";

const MenuBarContext = createContext();

const MenuBar = () => {
  const dispatch = useDispatch();

  const menuBarVisible = useSelector((state) => state.root.menuBarVisible);

  const windowSize = useWindowSize();

  const [activeMenus, setActiveMenus] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBackdropActive, setIsBackdropActive] = useState(false);

  const menuBar = useRef(null);

  // Activate Menu
  const activateMenu = (menuName, withMenuDetail = true) => {
    if (activeMenus.includes(menuName) && isMenuOpen) {
      setActiveMenus([]);
      hideMenuDetail();
    } else {
      setActiveMenus([menuName]);

      if (withMenuDetail) {
        setIsMenuOpen(true);
        setIsBackdropActive(true);
      } else {
        hideMenuDetail();
      }
    }
  };

  // Check if a Menu is Active
  const isActive = (menuName) => {
    return activeMenus.includes(menuName);
  };

  // Check if a Menu Detail is Open
  const isOpen = (menuName) => {
    return activeMenus.includes(menuName) && isMenuOpen;
  };

  // Hide Menu Detail
  const hideMenuDetail = () => {
    setIsMenuOpen(false);
    setIsBackdropActive(false);
  };

  useEffect(() => {
    if (windowSize.width > 640) {
      dispatch(toggleMenu(true));
    } else {
      dispatch(toggleMenu(false));
    }
  }, [windowSize]);

  return (
    <MenuBarContext.Provider value={{ isOpen, hideMenuDetail }}>
      <Backdrop active={isBackdropActive} workspaceOnly={true} />
      <aside
        ref={menuBar}
        className={classNames("menu-bar", "menu-sticky", {
          "menu-hidden": !menuBarVisible,
        })}
      >
        <div className="menu-items">
          <Link
            to="/"
            onClick={() => activateMenu("study_design", false)}
            className={classNames("link", { active: isActive("study_design") })}
          >
            <span className="icon la la-file-alt"></span>
            <span className="title">Study Design</span>
          </Link>
          <button
            onClick={() => activateMenu("summary")}
            className={classNames("link", { active: isActive("summary") })}
          >
            <span className="icon la la-chart-bar"></span>
            <span className="title">Summary</span>
          </button>
          <button
            onClick={() => activateMenu("analysis")}
            className={classNames("link", { active: isActive("analysis") })}
          >
            <span className="icon la la-flask"></span>
            <span className="title">Analysis</span>
          </button>
        </div>
        <>
          <MenuDetailSummary />
          <MenuDetailAnalysis />
        </>
      </aside>
    </MenuBarContext.Provider>
  );
};

export default MenuBar;

const MenuDetailSummary = () => {
  const { isOpen, hideMenuDetail } = useContext(MenuBarContext);

  return (
    <div className={classNames("menu-detail", { open: isOpen("summary") })}>
      <div className="menu-detail-wrapper">
        <h6 className="uppercase">Summary</h6>
        <NavLink to="/summary_baseline" onClick={hideMenuDetail}>
          <span className="la la-table"></span>
          Baseline
        </NavLink>
      </div>
    </div>
  );
};

const MenuDetailAnalysis = () => {
  const { isOpen, hideMenuDetail } = useContext(MenuBarContext);

  return (
    <div className={classNames("menu-detail", { open: isOpen("analysis") })}>
      <div className="menu-detail-wrapper">
        <NavLink to="/dashboard" onClick={hideMenuDetail}>
          <span className="la la-chalkboard"></span>
          Dashboard
        </NavLink>
        <hr />

        <h6 className="uppercase">Overall</h6>
        <NavLink to="/analysis_overall_incidence" onClick={hideMenuDetail}>
          <span className="la la-table"></span>
          Incidence
        </NavLink>
        <NavLink to="/analysis_overall_prevalence" onClick={hideMenuDetail}>
          <span className="la la-table"></span>
          Prevalence
        </NavLink>
        <hr />
        <h6 className="uppercase">Subgroup</h6>
        <NavLink to="/analysis_incidence" onClick={hideMenuDetail}>
          <span className="la la-table"></span>
          Incidence
        </NavLink>
        <NavLink to="/analysis_prevalence" onClick={hideMenuDetail}>
          <span className="la la-table"></span>
          Prevalence
        </NavLink>
      </div>
    </div>
  );
};
