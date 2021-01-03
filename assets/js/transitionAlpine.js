function transitionAlpine() {
  return {
    //vars
    isSidebarOpen: false,
    isSearchFormOpen: false,
    isAccountOpen: false,
    isCartOpen: false,
    isPromoFormOpen: false,
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
    // SIDE CART
    sidecartOpen() {
      this.isCartOpen = true;
    },
    sidecartClose() {
      this.isCartOpen = false;
    },
    // PROMO FORM
    promoFormOpen(){
      this.isPromoFormOpen = true;
    },
    // BOTTOM MENU
    isScrollAtTop() {
      let isScrollAtTop = window.pageYOffset > 40 ? true : false;
      this.showBottomMenu = !isScrollAtTop;
    },
  };
}
