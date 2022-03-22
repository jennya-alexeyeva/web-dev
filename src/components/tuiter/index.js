import React from "react";
import ExploreScreen from "./ExploreScreen";
import {Link} from "react-router-dom";

const Tuiter = () => {
  return(
      <>
        <ExploreScreen />
        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/">
          Labs
        </Link>
      </>
  )
};

export default Tuiter;

