const Check = document.getElementById("check");
const Nav = document.getElementById("nav-text");
const responsiveIconButton = document.getElementById("responsive-icon-button");
const MainBannerCoffee = document.getElementById("main-container");

function responsiveButton() {
  if (Check.checked) {
    Nav.style.left = "-100%";
    responsiveIconButton.src = "./assets/menu-buguer-open.svg";
  } else {
    Nav.style.left = "0";
    responsiveIconButton.src = "./assets/menu-buguer-close.svg";
  }
}
