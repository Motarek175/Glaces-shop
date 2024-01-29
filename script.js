let image = document.querySelector(".start .container .img img");
window.onload = setTimeout(function () {
  image.style.cssText =
    "visibility: visible; animation-name: hid;animation-duration: 2s;";
}, 500);

let image1 = document.querySelector(".info .container .img img");
window.onload = setTimeout(function () {
  image1.style.cssText =
    "  visibility: visible;animation-name: hid;animation-duration: 3s;  animation-direction: alternate-reverse; animation-iteration-count: infinite; ";
}, 500);

let btn = document.querySelector(".header i.up");

window.onscroll = function () {
  if (
    (window.scrollY >= 110 && window.scrollY <= 1200) ||
    window.scrollY >= 250
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
