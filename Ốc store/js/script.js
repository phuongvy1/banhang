//-------Menu-item-----
const toP = document.querySelector(".top")
window.addEventListener("scroll",function(){
    const X = this.pageYOffset;
    if(X>1){toP.classList.add("active")}
    else{
        toP.classList.remove("active")
    }
})
//---------product---------
const huongdanbaoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if(huongdanbaoquan){
    huongdanbaoquan.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-buttom-centent-huongdanbaoquan").style.display = "block"
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-buttom-centent-huongdanbaoquan").style.display = "none"
    })
}
const butTon = document.querySelector(".product-content-right-bottom-top")
if(butTon){
    butTon.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}