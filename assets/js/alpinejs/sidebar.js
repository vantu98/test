function toggleSidebar() {
  return {
    isSideBarOpen: false,
    open() {
      this.isSideBarOpen = true;
    },
    close() {
      this.isSideBarOpen = false;
    },
  };
}
