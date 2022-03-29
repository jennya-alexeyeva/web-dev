import React from "react";

const NavigationSidebar = (
    {
      active = 'home'
    }) => {
  return(
            <>
              <div className="list-group">
                <a className="list-group-item" href="/">
                  <i className="logo fa-brands fa-twitter"/>
                </a>
                <a className={`list-group-item
                   ${active === 'home' ? 'active' : ''}`} href="/">
                  <i className="logo fa-solid fa-house-chimney"/>
                  <span
                      className="d-none d-xxl-inline-block d-xl-inline-block ms-4">Home</span>
                </a>
                <a className={`list-group-item
                   ${active === 'explore' ? 'active' : ''}`} href="/">
                  <i className="logo fa-solid fa-hashtag"/>
                  <span
                      className="d-none d-xxl-inline-block d-xl-inline-block ms-4">Explore</span>
                </a>
                <a className={`list-group-item
                   ${active === 'notifications' ? 'active' : ''}`} href="/">
                  <i className="logo fa-solid fa-bell"/>
                  <span
                      className="d-none d-xxl-inline-block d-xl-inline-block ms-4">Notifications</span>
                </a>
                <a className={`list-group-item
                   ${active === 'messages' ? 'active' : ''}`} href="/">
                  <i className="logo fa-solid fa-envelope"/>
                  <span
                      className="d-none d-xxl-inline-block d-xl-inline-block ms-4">Messages</span>
                </a>
                <a className={`list-group-item
                   ${active === 'bookmarks' ? 'active' : ''}`} href="/">
                  <i className="logo fa-solid fa-bookmark"/>
                  <span
                      className="d-none d-xxl-inline-block d-xl-inline-block ms-4">Bookmarks</span>
                </a>
                <a className={`list-group-item
                   ${active === 'lists' ? 'active' : ''}`} href="/">
                  <i className="logo fa-solid fa-list"/>
                  <span
                      className="d-none d-xxl-inline-block d-xl-inline-block ms-4">Lists</span>
                </a>
                <a className={`list-group-item
                   ${active === 'profile' ? 'active' : ''}`} href="/">
                  <i className="logo fa-solid fa-user"/>
                  <span
                      className="d-none d-xxl-inline-block d-xl-inline-block ms-4">Profile</span>
                </a>
                <a className={`list-group-item
                   ${active === 'more' ? 'active' : ''}`} href="/">
                    <span className="logo fa-stack">
                        <i className="fas fa-circle fa-stack-1x"/>
                        <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"/>
                    </span>
                  <span
                      className="d-none d-xxl-inline-block d-xl-inline-block ms-4">More</span>
                </a>
              </div>
              <button id="tuit-button" type="button"
                      className="btn btn-primary w-100 mt-2">Tuit
              </button>
            </>
    );
}
export default NavigationSidebar;