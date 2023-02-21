const SvgLinks = document.querySelectorAll(".Links-svg-conn")
// add transition
var i=0;
SvgLinks.forEach(element => {
       element.firstElementChild.firstElementChild.addEventListener("mouseover", (e) => {
       element.firstElementChild.firstElementChild.setAttribute("transform","scale(1.3)")
       element.firstElementChild.firstElementChild.setAttribute("fill","#34D9EB")
       element.lastElementChild.setAttribute("transform","scale(1.2)")
       

    });
    element.firstElementChild.firstElementChild.addEventListener("mouseout", (e) => {
       element.firstElementChild.firstElementChild.setAttribute("transform","scale(1.0)")
       element.firstElementChild.firstElementChild.setAttribute("fill","#FFFFFF")
       element.lastElementChild.setAttribute("transform","scale(1.0)")
       
    });
    i++;
});
const Project_content = document.querySelectorAll(".Project-content");
let element_array = [];
Project_content.forEach( element => {
element_array.push(element.getElementsByTagName("div")[0].firstElementChild,element.getElementsByTagName("div")[2],element.getElementsByTagName("div")[3]);
})
console.log(element_array);

let number;
const links =document.querySelectorAll('.links');
links.forEach(element => {
   element.addEventListener("mouseover",(link) => {
      number = link.target.dataset.index;
      console.log(link.target.dataset.index)
      if (number >= 1 && number <= 2 ) {  //not cool looking, but works ?
         element_array[0].style.filter = "none"
            // if (number == 1) {   //scrapped idea
            //    element_array[1].lastElementChild.style.animation = "arrow-off 1s ease infinite alternate"
            // }
      } else if (number >= 3 && number <= 4) {
         element_array[3].style.filter = "none"
      } else { 
         element_array[6].style.filter = "none"
      }
   })

   element.addEventListener("mouseout", () => {
      if (number >= 1 && number <= 2 ) {  //not cool looking, but works ?
         element_array[0].style.filter = "hue-rotate(50deg)  grayscale(70%)"
      } else if (number >= 3 && number <= 4) {
         element_array[3].style.filter = "hue-rotate(50deg)  grayscale(70%)"  
      } else { 
         element_array[6].style.filter = "hue-rotate(50deg)  grayscale(70%)"
      }
   })
})

