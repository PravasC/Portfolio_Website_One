const menu = document.querySelector(".nav-menu");
const menuicon = document.querySelector("#nav-menu-btn");
const navLeft = menu.getBoundingClientRect().left;
const closebtn = document.querySelector("#close-btn");

menuicon.addEventListener("click" , () => {
    if(navLeft < 0)
    {
        menu.classList.add("showmenu");
        menuicon.style.display="none";
        closebtn.style.display="block";
    }
});
closebtn.addEventListener("click" , () => {
    if(navLeft < 0)
    {
        console.log(navLeft);
        menu.classList.remove("showmenu");
        closebtn.style.display="none";
        menuicon.style.display="block";
    }
});