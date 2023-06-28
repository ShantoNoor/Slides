import swiper from "./scripts/swiper.js";
import closeNav from "./scripts/nav.js";
import insertHtml from "./scripts/dld.js";

const main_div = document.querySelector('#main');

const ds_c = document.querySelector("#ds")
let dld_c //= document.querySelector("#dld")
let jt_c //= document.querySelector("#jt")

const ds_b = document.querySelector("#bds")
const dld_b = document.querySelector("#bdld")
const jt_b = document.querySelector("#bjt")

ds_b.addEventListener("click", (e) => {
  e.preventDefault()
  document.querySelector('.copened').classList.toggle("copened")
  ds_c.classList.add("copened")
  closeNav()
})

dld_b.addEventListener("click", (e) => {
  e.preventDefault()
  if (dld_c == undefined) {
    import('./scripts/dld.js')
    .then(module => {
      const insertHtml = module.default;
      insertHtml()
      dld_c = document.querySelector("#dld")
      document.querySelector('.copened').classList.toggle("copened")
      dld_c.classList.add("copened")
    }).catch((e) => { 
      console.log('Something went wrong.', e) 
    })
  } else {
    document.querySelector('.copened').classList.toggle("copened")
    dld_c.classList.add("copened")
  }
  closeNav()
})

jt_b.addEventListener("click", (e) => {
  e.preventDefault()
  if (jt_c == undefined) {
    import('./scripts/jt.js')
    .then(module => {
      const insertHtml = module.default;
      insertHtml()
      jt_c = document.querySelector("#jt")
      document.querySelector('.copened').classList.toggle("copened")
      jt_c.classList.add("copened")
    }).catch((e) => { 
      console.log('Something went wrong.', e) 
    })
  } else {
    document.querySelector('.copened').classList.toggle("copened")
    jt_c.classList.add("copened")
  }
  closeNav()
})
