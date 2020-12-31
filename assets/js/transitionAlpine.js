function transitionAlpine() {
  return {
    isSidebarOpen: false,
    isCartOpen: false,
    sidebarOpen() {
      this.isSideBarOpen = true;
    },
  };
}
