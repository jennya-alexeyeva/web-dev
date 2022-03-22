import React from "react";

const WhoToFollowListItem = (
    {
      who = {
        avatarIcon: './images-a4/nasa.jpg',
        userName: 'NASA',
        handle: 'NASA',
      }
    }
) => {
  return(<li className="list-group-item">
            <div className="row">
              <div className="col-2">
                <img alt="" className="w-100 who-to-follow-img" src={who.avatarIcon}/>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-5">
                <p className="mb-0 who-to-follow-nick">{who.userName} <i className="fa-solid fa-circle-check"/></p>
                <p className="mb-0">@{who.handle}</p>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-5">
                <button style={{borderRadius: "25px"}} className="btn btn-primary follow-btn ms-4 me-auto">Follow</button>
              </div>
            </div>
          </li>)
}

export default WhoToFollowListItem;