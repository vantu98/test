function transitionAlpine() {
  return {
    isSidebarOpen: false,
    isCartOpen: false,
    sidebarOpen() {
      this.isSidebarOpen = true;
      console.log("open sidebar");
    },
    sidebarClose() {
      this.isSidebarOpen = false;
    },
    isSideBarOpenFunc() {
      return this.isSidebarOpen === true;
    },
  };
}
