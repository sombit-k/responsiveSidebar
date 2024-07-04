
let barmenu=document.querySelector("#navbar .icon i");
console.dir(barmenu);
barmenu.addEventListener("click",(event)=>{
    barmenu.setAttribute("id","disappear");
    console.log(barmenu)
    setTimeout(()=>{
    barmenu.style="display:none"
    },750);
    showSidebar();
});

let showSidebar =() =>{
    let sidebar = document.querySelector(".sidebar");
    console.log(sidebar);
    sidebar.setAttribute("id","sidebar");
    let cross = document.querySelector(".crossIcon");
    cross.addEventListener("click",()=>{
        console.log("cross pressed")
    })
}

