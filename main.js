import swiper from "./scripts/swiper.js";

const nav = document.querySelector(".nav")
const navbtn = document.querySelector(".btn")

navbtn.addEventListener("click", () => {
  closeNav()
})

function closeNav() {
  navbtn.classList.toggle("btn-close")
  nav.classList.toggle("open")
}

const ds_c = document.querySelector("#ds")
const dld_c = document.querySelector("#dld")
const jt_c = document.querySelector("#jt")

const ds_b = document.querySelector("#bds")
const dld_b = document.querySelector("#bdld")
const jt_b = document.querySelector("#bjt")

let last_c = ds_c

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

