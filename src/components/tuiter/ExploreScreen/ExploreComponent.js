import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(
      <div>
        <div className="row" style={{display: "flex", alignItems: "center"}}>
          <i className="fa-solid fa-magnifying-glass"/>
          <input className="col-11 mb-2 ps-5" id="search"
                 placeholder="Search Tuiter"/>
          <a className="col-1" href="../explore-settings.html"><i
    className="fa-solid fa-gear fa-xl ms-3 mb-3"/></a>
        </div>
        <ul className="nav mb-2 nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="for-you.html">For you</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="trending.html">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="news.html">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="sports.html">Sports</a>
          </li>
          <li className="nav-item d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none">
            <a className="nav-link" href="entertainment.html">Entertainment</a>
          </li>
        </ul>
        <div className="card col-12 ps-0 pe-0">
          <img src="./images/starship.jpg" className="card-img-top"
               alt="starship"/>
          <div className="card-img-overlay d-flex flex-column justify-content-end">
            <h4 className="card-title">SpaceX's Starship</h4>
          </div>
        </div>
        <PostSummaryList/>
      </div>
    );
}
export default ExploreComponent;
