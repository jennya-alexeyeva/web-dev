import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json"

const PostSummaryList = () => {
  return (<div className="card">
              <ul className="list-group list-group-flush">
                {
                  posts.map(post => {
                    return(<PostSummaryItem key={post.userName} post={post} />);
                  })
                }
              </ul>
            </div>
          ); }

export default PostSummaryList
