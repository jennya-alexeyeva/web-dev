const WhoToFollowListItem = (who) => {
  return(`<li class="list-group-item">
            <div class="row">
              <div class="col-2">
                <img class="w-100 who-to-follow-img" src="${who.avatarIcon}"/>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-5">
                <p class="who-to-follow-nick">${who.userName} <i
                    class="fa-solid fa-circle-check"></i>
                  <p>@${who.handle}</p>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-5">
                <button class="btn btn-primary follow-btn ms-4 me-auto">Follow</button>
              </div>
            </div>
          </li>`)
}

export default WhoToFollowListItem