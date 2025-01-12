  // window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };
fetch("nav.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("header").innerHTML = data))
  .catch((error) => console.error("Error loading navbar:", error));