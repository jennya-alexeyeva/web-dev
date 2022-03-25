import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"
import '../ExploreScreen/explore.css';

const WhoToFollowList = () => {
  return (
      <ul className="list-group">
        <li className="list-group-item" key="header"><b>Who to follow</b></li>
        {
          who.map(who => {
            return(
                <WhoToFollowListItem key={who.handle} who={who}/>
            );
          })
        }
      </ul>
  ); }

export default WhoToFollowList
