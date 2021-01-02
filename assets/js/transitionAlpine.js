function transitionAlpine() {
  return {
    //vars
    isSidebarOpen: false,
    isSearchFormOpen: false,
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
    // Search Form
    searchFormOpen() {
      this.isSearchFormOpen = true;
    },
    searchFormClose() {
      this.isSearchFormOpen = false;
    },
    // Bottom Menu
    isScrollAtTop() {
      let isScrollAtTop = window.pageYOffset > 40 ? true : false;
      this.showBottomMenu = !isScrollAtTop;
    },
  };
}
