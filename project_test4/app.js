// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function(){
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // if(links.classList.contains("show-links")){
    //     // if class of show links is there, we are removing 
    //     links.classList.remove("show-links")
    // } else {
    //     links.classList.add("show-links")
    //     // if class is not there aka it is false, we are showing the links
    // }
    links.classList.toggle("show-links")
    // shorter version
})