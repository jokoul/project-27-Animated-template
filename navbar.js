function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle("block");
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).style.backgroundColor = "white";
  document.getElementById(collapseID).style.width = "100%";
  if (window.innerWidth > 1024) {
    document.getElementById(collapseID).style.backgroundColor = "transparent";
    document.getElementById(collapseID).style.width = "auto";
  }
}
