import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList";

(function ($) {
  $('#wd-explore').append(`
        <div class="row pt-2">
          <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
              ${NavigationSidebar()}
          </div>
          <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10">
              ${ExploreComponent()}
          </div>
          <div class="d-none col-xxl-4 col-xl-4 col-lg-4 d-xxl-block d-xl-block d-lg-block">
              ${WhoToFollowList()}
          </div>
        </div>
    `);
})($);