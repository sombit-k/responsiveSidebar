let barmenu=document.querySelector("#navbar .icon i");
console.dir(barmenu);

barmenu.addEventListener("click",(event)=>{
    // console.log("event",event);
    // barmenu.style="display:none";
    barmenu.setAttribute("class","disappear")
})