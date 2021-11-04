import "./styles.css";
import "@glidejs/glide/dist/css/glide.core.min.css";

// Optional Theme Stylesheet
//import "@glidejs/glide/src/assets/sass/glide.theme";
import Glide from "@glidejs/glide";

const sliders = document.querySelectorAll(".glide").forEach((slider) => {
  return new Glide(`.${slider.classList[1]}`, {
    type: "carousel",
    startAt: 0,
    perView: 1,
    gap: 0,
    keyboard: true
  }).mount();
  document
    .querySelector(".glide__arrow--right")
    .addEventListener("click", () => {
      slider.go(">");
    });

  document
    .querySelector(".glide__arrow--left")
    .addEventListener("click", () => {
      slider.go("<");
    });
});
