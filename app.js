
let barmenu=document.querySelector("#navbar .icon i");
console.dir(barmenu);
barmenu.addEventListener("click",(event)=>{
    barmenu.setAttribute("id","disappear");
    console.log(barmenu)
    setTimeout(()=>{
    barmenu.setAttribute("id","dissapeared");
    },750);
    showSidebar();
});
let showBarMenu =() =>{
    let barmenu=document.querySelector("#navbar .icon i");
    barmenu.setAttribute("id","");
    barmenu.setAttribute("style","");
    console.log("showing barmenu")
}

let showSidebar =() =>{
    let sidebar = document.querySelector(".sidebar");
    console.log(sidebar);
    sidebar.setAttribute("id","sidebar");
    let cross = document.querySelector(".crossIcon");
    cross.addEventListener("click",()=>{
        hideSidebar(sidebar);
    })
}

let hideSidebar = (sidebar) => {
    console.log("Hiding sidebar");
    sidebar.setAttribute("id","hideSidebar");
    setTimeout(()=>{
    sidebar.setAttribute("id","hiddenSidebar");
    },2000)
    showBarMenu();
}

