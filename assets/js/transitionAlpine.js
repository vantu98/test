function transitionAlpine() {
  return {
    //vars
    isSidebarOpen: false,
    isSearchFormOpen: false,
    isAccountOpen: false,
    isCartOpen: false,
    showBottomMenu: true,
    // SIDEBAR
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
    // SEARCH FORM
    searchFormOpen() {
      this.isSearchFormOpen = true;
    },
    searchFormClose() {
      this.isSearchFormOpen = false;
    },
    // ACCOUNT
    accountOpen() {
      this.isAccountOpen = true;
    },
    accountClose() {
      this.isAccountOpen = false;
    },
    // BOTTOM MENU
    isScrollAtTop() {
      let isScrollAtTop = window.pageYOffset > 40 ? true : false;
      this.showBottomMenu = !isScrollAtTop;
    },
  };
}
