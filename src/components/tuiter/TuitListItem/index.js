import React from "react";
import './tuit-list-item.css';
import {useDispatch} from "react-redux";

const TuitListItem = ({key, tuit}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
      <li className="list-group-item" key={key}>
        <div className="wd-article wd-border">
          <img className="wd-article-pfp" src={tuit.avatarImage} alt="..." />
            <div className="wd-article-body">
              <i className="fa-solid fa-xmark" onClick={() => deleteTuit(tuit)}/>
              <p className="wd-author-tag"><span className="wd-author-name">{tuit.postedBy.username} {tuit.verified ?
                  <i className="fa-solid fa-circle-check"/> : ""}</span> @{tuit.handle}</p>
              <p className="wd-article-caption">{tuit.tuit}</p>
              <div className="wd-border wd-article-link">
                {tuit.attachments ? (
                    tuit.attachments.video ?
                        <iframe width="504" height="264"
                                src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/> : (
                                    tuit.attachments.image ?
                                        <img src={tuit.attachments.image}  alt="..."/> :
                                        ""
                        )
                ) : ""}
              </div>
              <div className="wd-icon-panel">
                <p className="wd-icon">
                  <span><i className="fa-solid fa-comment"/></span>
                  <span>{tuit.stats.comments}</span>
                </p>
                <p className="wd-icon">
                  <span><i className="fa-solid fa-retweet"/></span>
                  <span>{tuit.stats.retuits}</span>
                </p>
                <p className={`wd-icon ${tuit.liked ? "wd-heart" : ""}`}>
                  <span onClick={likeTuit}>
                    <i className="fa-solid fa-heart"/>
                    </span>
                  <span>{tuit.stats.likes}</span>
                </p>
                <p className="wd-icon">
                  <span><i className="fa-solid fa-download"/></span>
                </p>
              </div>
            </div>
        </div>
    </li>
  )
}

export default TuitListItem;