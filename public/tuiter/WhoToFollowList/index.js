import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
  return (`
            <ul class="list-group">
              <li class="list-group-item"><b>Who to follow</b></li>
              ${
                  who.map(user => {
                    return(WhoToFollowListItem(user));
                  }).join('')
              }
            </ul>
`); }

export default WhoToFollowList
