// Menu
const imgItem = document.querySelectorAll(".aspect-ratio-169");
const imgItemContaiber = document.querySelector(".aspect-ratio-169");
const dotItem = document.querySelectorAll(".dot");

let index =0;
let imgLeng = imgItem.length
imgItem.forEach(function(images,index){
  image.style.left = index*100 + "%"
  dotItem[index].addEventListener("click",function(){
    slideRun (index)
  })
})
function slider(){
  index++;
  if(index >= imgLeng){index=0}

  slideRun (index)
}
function sliderRun (index){
  imgItemContainer.style.left = "-"+ index*100 + "%"
  const dotActive = document.quẻySelector(".active")
  dotActive.classList.remove("active")
  dotItem[index].classList.add("active");
}

setInterval (slider,5000)