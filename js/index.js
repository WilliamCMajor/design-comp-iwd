const nav = document.querySelector("svg.logo");

nav.addEventListener('click', function(e){
    document.querySelector("nav").classList.toggle("show-nav");
})