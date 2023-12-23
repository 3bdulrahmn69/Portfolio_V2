const bars = document.getElementById("bars");
const header = document.querySelector("header");

bars.addEventListener("click", () => {
  if (header.classList.contains("hidden")) {
    header.animate([{ width: "0" }, { width: "33.3333%" }], {
      duration: 300,
      fill: "forwards",
    });
    header.classList.remove("hidden");
  } else {
    header.animate([{ width: "33.3333%" }, { width: "0" }], {
      duration: 300,
      fill: "backwards",
    });
    header.classList.add("hidden");
  }
});
