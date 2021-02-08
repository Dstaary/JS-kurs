const burger = document.getElementById('navbarSupportedContent41');
const menuElements = document.getElementById('menu-elements');
const menuLinks = menuElements.querySelectorAll('a');

for (const menuLink of menuLinks){

menuLink.addEventListener("click", function() {
    let widthPage = window.innerWidth;
    if(widthPage <= 1440) {
        console.log(widthPage);
        burger.classList.remove('show');
    };
});
}