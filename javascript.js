let slideBtnLeft= document.getElementById("slide-btn-left")
let slideBtnRight= document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")


console.log(imgItem.length-1)

let startslider= 0
let endslider=(imgItem.length-1) * 100
slideBtnLeft.addEventListener("click",handelLeftBtn)

function handelLeftBtn(){
    
    if(startslider < 0)
    {
        startslider=startslider+100;
    }
    

    imgItem.forEach(element =>{
        element.style.transform =`translatex(${startslider}%)`;
    })  
}
slideBtnRight.addEventListener("click",handelRightBtn)

function handelRightBtn(){
    if(startslider >= -endslider+100)
    {
        startslider=startslider-100;
    }
    

    imgItem.forEach(element =>{
        element.style.transform =`translatex(${startslider}%)`;
    })

     
}

// render automatically

function autorenders(){
    
    if(startslider >= -endslider+100){
        handelRightBtn()
    }
    else {
        startslider = 0;
    }
}
setInterval(autorenders,4000)

//sidebar navigation
const sidebarNavigationE = document.getElementById("sidebar-container-navigation-id")
const sidebaropenNavigationE= document.getElementById("nav-sidebar")
const sidebarCloseNavigationE= document.getElementById("sidebar-navigation-close")

console.log(sidebarNavigationE)
sidebaropenNavigationE.addEventListener("click",()=>{
    sidebarNavigationE.classList.toggle("slidebar-show")
})
sidebarCloseNavigationE.addEventListener("click",()=>{
    sidebarNavigationE.classList.toggle("slidebar-show")
})