import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"
const PostSummaryList = () => {
  return (`
            <div class="card">
              <ul class="list-group list-group-flush">
                ${
                  posts.map(user => {
                    return(PostSummaryItem(user));
                  }).join('')
                }
              </ul>
            </div>
          `); }

export default PostSummaryList
