const scrollup = document.querySelector(".scrollup");
const ham = document.querySelector(".ham");

if (ham) {
  const bottomheader = document.querySelector(".bottom_header");
  ham.addEventListener("click", () => {
    bottomheader.classList.toggle("open");
  });
  document.querySelector(".closesidebar").addEventListener("click", () => {
    bottomheader.classList.remove("open");
  });
}

if (scrollup) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollup.style.display = "flex";
    } else {
      scrollup.style.display = "none";
    }

    scrollup.addEventListener("click", () => {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    });
  });
}
