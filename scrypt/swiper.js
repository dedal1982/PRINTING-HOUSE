window.addEventListener("scroll", function () {
  var header = document.getElementById("sticky-header");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 200) {
    header.style.top = "0";
  } else {
    header.style.top = "-200px";
  }
});
