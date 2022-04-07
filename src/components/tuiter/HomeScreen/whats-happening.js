import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit',
      tuit: whatsHappening
    });
  }

  return (
        <div id="tuit-input">
          <div>
            <img id="pfp" src="/images/herlock.png" alt="..." />
            <textarea id="input-tuit-text-box" value={whatsHappening} placeholder="What's happening?"
                      onChange={(event) =>
                          setWhatsHappening(event.target.value)}/>
          </div>
          <div id="button-panel">
            <div id="left-buttons">
              <i className="icon fa-solid fa-image"/>
              <i className="icon fa-solid fa-chart-line"/>
              <i className="icon fa-regular fa-face-smile"/>
              <i className="icon fa-regular fa-calendar"/>
            </div>
            <button className="btn btn-primary" onClick={tuitClickHandler}>Tuit</button>
          </div>
        </div>
  );
}
export default WhatsHappening;