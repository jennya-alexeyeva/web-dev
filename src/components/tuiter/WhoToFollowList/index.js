import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return(
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

  );
};
export default WhoToFollowList;