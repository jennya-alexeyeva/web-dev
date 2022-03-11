const WhoToFollowListItem = (item) => {
  return(`<li class="list-group-item">
              <div class="row">
                <div class="col-10">
                  <p class="gray-text">${item.topic}</p>
                  <p><b>${item.userName} <i class="fa-solid fa-circle-check"></i></b> <span class="gray-text">- ${item.time}</span></p>
                  <p><b>${item.title}</b></p>
                  ${item.tweets ? `<p class="gray-text">${item.tweets} Tweets</p>` : ""}
                </div>
                <div class="col-2">
                  <img class="w-100 for-you-img" src="${item.image}" />
                </div>
              </div>
            </li>`)
}

export default WhoToFollowListItem