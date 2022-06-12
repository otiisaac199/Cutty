const bars = document.querySelector(".bar");
const menuUl = document.querySelector(".menu-ul");

bars.addEventListener("click", () => {
  bars.classList.toggle("active");
  menuUl.classList.toggle("active-2");
  console.log("working");
});

let items = document.querySelectorAll(".observer-p");

let Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      e.target.classList.toggle("show", e.isIntersecting);
      if (e.isIntersecting) {
        Observer.unobserve(e.target);
      }
    });
  },
  {
    threshold: 0,
  }
);
items.forEach((i) => {
  Observer.observe(i);
});

let sliderIndex = 0;
showSlides();
function showSlides() {
  let slides = document.querySelectorAll(".slider");
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  sliderIndex++;
  if (sliderIndex > slides.length) {
    sliderIndex = 1;
  }
  slides[sliderIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); //Changes elety 5 seconds
}
