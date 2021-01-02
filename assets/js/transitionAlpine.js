function transitionAlpine() {
  return {
    //vars
    isSidebarOpen: false,
    isCartOpen: false,
    showBottomMenu: true,
    // Sidebar
    sidebarOpen() {
      this.isSidebarOpen = true;
      // console.log("open sidebar");
    },
    sidebarClose() {
      this.isSidebarOpen = false;
    },
    isSideBarOpenFunc() {
      return this.isSidebarOpen === true;
    },
    // Bottom Menu
    isScrollAtTop() {
      let isScrollAtTop = window.pageYOffset > 50 ? true : false;
      this.showBottomMenu = !isScrollAtTop;
    },
  };
}
