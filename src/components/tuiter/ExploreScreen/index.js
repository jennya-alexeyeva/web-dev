import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";
import './explore.css';

const ExploreScreen = () => {
  return(
      <div className="row mt-2">
        <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
          <NavigationSidebar active="explore"/>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
          <ExploreComponent/>
        </div>
        <div className="d-none col-xxl-4 col-xl-4 col-lg-4 d-xxl-block d-xl-block d-lg-block">
          <WhoToFollowList/>
        </div>
      </div>
  );
};
export default ExploreScreen;
