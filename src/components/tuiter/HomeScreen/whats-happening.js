import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { createTuit } from "../actions/tuits-actions";

const WhatsHappening = () => {
  const [newTuit, setNewTuit] =
      useState({tuit: 'New tuit'});
  const dispatch = useDispatch();

  return (
        <div id="tuit-input">
          <div>
            <img id="pfp" src="/images/herlock.png" alt="..." />
            <textarea id="input-tuit-text-box" placeholder="What's happening?"
                      onChange={((e) =>
                          setNewTuit({...newTuit,
                            tuit: e.target.value}))}/>
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
  );
}
export default WhatsHappening;