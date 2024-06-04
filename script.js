const burger = document.querySelector(".header__burger");
const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");


burger.addEventListener("click", () => {
  header.classList.toggle("open");
  document.body.classList.toggle("stop-scroll");
});


// Закрыть меню при клике на Esc
window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") {
      document.querySelector(".header").classList.remove("open")
    }
  });

  // Закрыть меню при клике вне его
burger.addEventListener("click", (e) => {
    e._isClickWithInMenu = true;
  });
  menu.addEventListener("click", (e) => {
    e._isClickWithInMenu = true;
  });
  body.addEventListener("click", (e) => {
    if  (e._isClickWithInMenu)  return;
    header.classList.remove("open")
  });


  // const navItems = document.querySelector(".header__item");

  // navItems.forEach(el => {
  //   el.addEventListener ("click", () => {
  //     header.classList.remove("open");
  //   });
  // });













































