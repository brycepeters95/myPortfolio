//select all the ui attributes like nav list, menu button, nav items, branding

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
//selects all items in navitems and puts them in a nodelist like(arraylist)
const navItems = document.querySelectorAll(".nav-item");

//sets state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  // adds show to index.html classes
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    //set each navitem to show
    navItems.forEach(item => item.classList.add("show"));

    //change menu state when nav btn clicked
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    //set each navitem to show
    navItems.forEach(item => item.classList.remove("show"));

    //change menu state when nav btn clicked
    showMenu = false;
  }
}
