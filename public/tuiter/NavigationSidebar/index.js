const NavigationSidebar = () => {
  return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="logo fa-brands fa-twitter"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="logo fa-solid fa-house-chimney"></i>
                    <span class="d-none d-xxl-block d-xl-block ms-4">Home</span>
                </a>
                <a class="list-group-item active" href="/">
                    <i class="logo fa-solid fa-hashtag"></i>
                    <span class="d-none d-xxl-block d-xl-block ms-4">Explore</span>
                </a>
                <a class="list-group-item" href="/">
                    <i class="logo fa-solid fa-bell"></i>
                    <span class="d-none d-xxl-block d-xl-block ms-4">Notifications</span>
                </a>
                <a class="list-group-item" href="/">
                    <i class="logo fa-solid fa-envelope"></i>
                    <span class="d-none d-xxl-block d-xl-block ms-4">Messages</span>
                </a>
                <a class="list-group-item" href="/">
                    <i class="logo fa-solid fa-bookmark"></i>
                    <span class="d-none d-xxl-block d-xl-block ms-4">Bookmarks</span>
                </a>
                <a class="list-group-item" href="/">
                    <i class="logo fa-solid fa-list"></i>
                    <span class="d-none d-xxl-block d-xl-block ms-4">Lists</span>
                </a>
                <a class="list-group-item" href="/">
                    <i class="logo fa-solid fa-user"></i>
                    <span class="d-none d-xxl-block d-xl-block ms-4">Profile</span>
                </a>
                <a class="list-group-item" href="/">
                    <span class="logo fa-stack">
                        <i class="fas fa-circle fa-stack-1x"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="d-none d-xxl-block d-xl-block ms-4">More</span>
                </a>
            </div>
            <button id="tuit-button" type="button" class="btn btn-primary w-100 mt-2">Tuit</button>
    `);
}
export default NavigationSidebar;