const nav = document.querySelector(".nav")
const navbtn = document.querySelector(".btn")

const closeNav = () => {
  navbtn.classList.toggle("btn-close")
  nav.classList.toggle("open")
}

navbtn.addEventListener("click", () => {
  closeNav()
})

export default closeNav;