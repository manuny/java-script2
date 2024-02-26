const videoEl = document.querySelector(".video");
const playEl = document.querySelector(".play");
const pauseEl = document.querySelector(".pause");

playEl.addEventListener("click", function (e) {
  videoEl.play();
});
pauseEl.addEventListener("click", function (e) {
  videoEl.pause();
});
