var type = new Typed(".typing-text", {
  strings: [
    "Web designer",
    "Web designer",
    "App Developer",
    "MERN Stack-Developer",
    "Data Scientist",
  ],
  typeSpeed: 100,
  frontSpeed: 100,
  loop: true,
});
let themeColor = document.querySelectorAll(".theme-toggler span");
themeColor.forEach((color) =>
  color.addEventListener("click", () => {
    let background = color.style.background;
    document.querySelector("body").style.background = background;
  })
);
