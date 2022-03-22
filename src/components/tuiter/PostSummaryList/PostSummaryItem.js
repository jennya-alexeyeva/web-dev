import React from "react";

const PostSummaryListItem = (
    {
      post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "./images/react.png"
      }
    }
) => {
  return(<li className="list-group-item">
              <div className="row">
                <div className="col-10">
                  <p className="gray-text mb-0">{post.topic}</p>
                  <p className="mb-0"><b>{post.userName} <i className="fa-solid fa-circle-check" /></b> <span className="gray-text">- {post.time}</span></p>
                  <p className="mb-0"><b>{post.title}</b></p>
                  <p className="gray-text mb-0">{post.tweets ? `${post.tweets} Tweets` : ""}</p>
                </div>
                <div className="col-2">
                  <img alt="" className="w-100 for-you-img" src={post.image} />
                </div>
              </div>
            </li>)
}

export default PostSummaryListItem