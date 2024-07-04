let barmenu=document.querySelector("#navbar .icon i");
console.dir(barmenu);

barmenu.addEventListener("click",(event)=>{
    barmenu.setAttribute("id","disappear");
    console.log(barmenu)
    setTimeout(()=>{
    barmenu.style="display:none"
    },750)
});


