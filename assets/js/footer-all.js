var footerContainer = document.getElementById("footerContainerAll");
var footerRequest = new XMLHttpRequest();
footerRequest.open("GET", "footer-all.html", true);
footerRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    footerContainer.innerHTML = this.responseText;
  }
};
footerRequest.send();