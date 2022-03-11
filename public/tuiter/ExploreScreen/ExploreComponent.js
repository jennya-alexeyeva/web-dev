import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
           <div class="row" style="display: flex; align-items: center;">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input class="col-11 mb-2 ps-5" id="search" placeholder="Search Tuiter" />
              <a class="col-1" href="../explore-settings.html"><i class="fa-solid fa-gear fa-xl ms-3 mb-3"></i></a>
           </div>
           <ul class="nav mb-2 nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
              </li>
              <li class="nav-item d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
              </li>
           </ul>
           <div class="card col-12">
              <img src="../../labs/images/starship.jpg" class="card-img-top" alt="starship" />
              <div class="card-img-overlay">
                <h4 class="card-title">SpaceX's Starship</h4>
              </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
