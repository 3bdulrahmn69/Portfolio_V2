const bars = document.getElementById("bars");
const header = document.querySelector("header");
let navLinks = document.querySelectorAll("nav ul li");
let Sections = document.querySelectorAll("section");

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

window.addEventListener("click", (e) => {
  if (e.target.tagName != "UL" && e.target.tagName != "I") {
    if (!header.classList.contains("hidden")) {
      header.animate([{ width: "33.3333%" }, { width: "0" }], {
        duration: 300,
        fill: "backwards",
      });
      header.classList.add("hidden");
    }
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

Sections.forEach((section) => {
  section.addEventListener("mouseover", () => {
    let sectionId = section.getAttribute("id");
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-link") == sectionId) {
        link.classList.add("active");
      }
    });
  });
});
