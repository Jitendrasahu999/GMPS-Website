var navbarContainer = document.getElementById("navbarContainerAll");
var navbarRequest = new XMLHttpRequest();
navbarRequest.open("GET", "navbar-all.html", true);
navbarRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    navbarContainer.innerHTML = this.responseText;
  }
};
navbarRequest.send();