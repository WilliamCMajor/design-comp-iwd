const nav = document.querySelector("svg.nav-bars");

nav.addEventListener('click', function(e){
    document.querySelector("nav").classList.toggle("show-nav");
})