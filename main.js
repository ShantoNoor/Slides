var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

navbtn = document.querySelector(".btn")
nav = document.querySelector(".nav")
navbtn.addEventListener("click", () => {
  closeNav()
})

function closeNav() {
  navbtn.classList.toggle("btn-close")
  nav.classList.toggle("open")
}

ds_c = document.querySelector("#ds")
dld_c = document.querySelector("#dld")
jt_c = document.querySelector("#jt")

ds_b = document.querySelector("#bds")
dld_b = document.querySelector("#bdld")
jt_b = document.querySelector("#bjt")

last_c = ds_c

ds_b.addEventListener("click", (e) => {
  e.preventDefault()
  last_c.classList.toggle("copened")
  ds_c.classList.toggle("copened")
  last_c = ds_c
  closeNav()
})

dld_b.addEventListener("click", (e) => {
  e.preventDefault()
  last_c.classList.toggle("copened")
  dld_c.classList.toggle("copened")
  last_c = dld_c
  closeNav()
})

jt_b.addEventListener("click", (e) => {
  e.preventDefault()
  last_c.classList.toggle("copened")
  jt_c.classList.toggle("copened")
  last_c = jt_c
  closeNav()
})

