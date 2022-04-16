import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import {createTuit, deleteTuit, findAllTuits, updateTuit}
  from "../actions/tuits-actions";
import './tuit-list-item.css';

const TuitList = () => {
  const [newTuit, setNewTuit] =
      useState({tuit: 'New tuit',
        postedBy: {username: "Herlock Sholmes", handle: "GreatDetective"},
        avatarImage: "/images/herlock.png"});
  const tuits = useSelector(
      state => state.tuits);
  const dispatch = useDispatch();
  useEffect(() =>
          findAllTuits(dispatch));
  return (
      <div>
        <div id="tuit-input">
          <div>
            <img id="pfp" src="/images/herlock.png" alt="..." />
            <textarea id="input-tuit-text-box" placeholder="What's happening?"
                      onChange={(e) =>
                          setNewTuit({...newTuit,
                            tuit: e.target.value})}/>
          </div>
          <div id="button-panel">
            <div id="left-buttons">
              <i className="icon fa-solid fa-image"/>
              <i className="icon fa-solid fa-chart-line"/>
              <i className="icon fa-regular fa-face-smile"/>
              <i className="icon fa-regular fa-calendar"/>
            </div>
            <button className="btn btn-primary" onClick={() => createTuit(dispatch, newTuit)}>Tuit</button>
          </div>
        </div>

        <ul className="ttr-tuits list-group">
          {
              tuits.map && tuits.map(tuit =>
                  <li className="list-group-item" key={tuit._id}>
                    <div className="wd-article wd-border">
                      <img className="wd-article-pfp" src={tuit.avatarImage ?? "../../../../images/no_pfp.png"} alt="..." />
                      <div className="wd-article-body">
                        <i className="fa-solid fa-xmark" onClick={() => deleteTuit(dispatch, tuit)}/>
                        <p className="wd-author-tag"><span className="wd-author-name">{tuit.postedBy.username} {tuit.verified ?
                            <i className="fa-solid fa-circle-check"/> : ""}</span> @{tuit.postedBy.handle}</p>
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
                            <span>0</span>
                          </p>
                          <p className="wd-icon">
                            <span><i className={`fa-solid fa-thumbs-down ${tuit.disliked ? "wd-heart" : "none"}`} onClick={
                              () => updateTuit(dispatch, {
                                ...tuit,
                                dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
                                disliked: !tuit.disliked
                              })
                            }/></span>
                            <span>{tuit.dislikes}</span>
                          </p>
                          <p className={`wd-icon ${tuit.liked ? "wd-heart" : ""}`}>
                    <span>
                      <i className={`fa-solid fa-heart ${tuit.liked ? "wd-heart" : "none"}`} onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
                        liked: !tuit.liked
                      })}/>
                      </span>
                            <span>{tuit.likes}</span>
                          </p>
                          <p className="wd-icon">
                            <span><i className="fa-solid fa-download"/></span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>)
          }
        </ul>
      </div>
  );
}

export default TuitList;

