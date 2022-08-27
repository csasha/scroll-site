let birds = document.getElementById("birds");
let sun = document.getElementById("sun");
let hills_behind = document.getElementById("hills_behind");
let bamboo_behind = document.getElementById("bamboo_behind");
let btn = document.getElementById("btn");
let bamboo_front = document.getElementById("bamboo_front");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  birds.style.left = value * 1.5 + "px";
  birds.style.marginTop = value * 0.25 + "px";
  sun.style.top = value * 1.05 + "px";
  hills_behind.style.top = value * 0.5 + "px";
  bamboo_front.style.left = value * 0.25 + "px";
  bamboo_behind.style.left = value * -0.2 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  header.style.top = value * 0.5 + "px";
});
