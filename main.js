import swiper from "./scripts/swiper.js";
import closeNav from "./scripts/nav.js";

const ds_c = document.querySelector("#ds")
let dld_c //= document.querySelector("#dld")
let jt_c //= document.querySelector("#jt")
let ada_c //= document.querySelector("#ada")
let toc_c //= document.querySelector("#ada")
let dct_c //= document.querySelector("#dct")
let ia_c //= document.querySelector("#ia")
let ids_c //= document.querySelector("#ids")

const ds_b = document.querySelector("#bds")
const dld_b = document.querySelector("#bdld")
const jt_b = document.querySelector("#bjt")
const ada_b = document.querySelector("#bada")
const toc_b = document.querySelector("#btoc")
const dct_b = document.querySelector("#bdct")
const ia_b = document.querySelector("#bia")
const ids_b = document.querySelector("#bids")

ds_b.addEventListener("click", (e) => {
  e.preventDefault()
  document.querySelector('.copened').classList.toggle("copened")
  ds_c.classList.add("copened")
  closeNav()
})

function addClickListener(el_b, el_c, el_id) {
  el_b.addEventListener("click", (e) => {
    e.preventDefault()
    if (el_c == undefined) {
      import(`./scripts/${el_id}.js`)
      .then(module => {
        const insertHtml = module.default;
        insertHtml()
        el_c = document.querySelector(`#${el_id}`)
        document.querySelector('.copened').classList.toggle("copened")
        el_c.classList.add("copened")
      }).catch((e) => { 
        console.log('Something went wrong.', e) 
      })
    } else {
      document.querySelector('.copened').classList.toggle("copened")
      el_c.classList.add("copened")
    }
    closeNav()
  })
}

addClickListener(dld_b, dld_c, 'dld')
addClickListener(jt_b, jt_c, 'jt')
addClickListener(ada_b, ada_c, 'ada')
addClickListener(ids_b, ids_c, 'ids')
addClickListener(toc_b, toc_c, 'toc')
addClickListener(dct_b, dct_c, 'dct')
addClickListener(ia_b, ia_c, 'ia')
