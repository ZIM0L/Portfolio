const SvgLinks = document.querySelectorAll(".Links-svg-conn")
// add transition
var i=0;
SvgLinks.forEach(element => {
    element.firstElementChild.addEventListener("onload", (e) => {
       // console.log(element.firstElementChild);
       element.firstElementChild.setAttribute("transform","scale(1.3)")
       element.firstElementChild.setAttribute("fill","#34D9EB")
       element.lastElementChild.setAttribute("transform","scale(1.2)")


    });
    element.firstElementChild.addEventListener("mouseout", (e) => {
       element.firstElementChild.setAttribute("transform","scale(1.0)")
       element.firstElementChild.setAttribute("fill","#FFFFFF")
       element.lastElementChild.setAttribute("transform","scale(1.0)")
       
    });
    i++;
});
const Top_Circle =document.querySelector(".Top-circle");
document.addEventListener("DOMContentLoaded", (e) => {
    //refactor like this other shapes ?
    // JQuery for Resize > ?
    Top_Circle.firstElementChild.setAttribute("cx",window.innerWidth);
    //Top_Circle.firstElementChild.setAttribute("transform", "scale("+window.innerWidth/window.innerHeight+")");
});

