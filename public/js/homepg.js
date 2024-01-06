Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('keyup',(el)=>{
        if(e.value.length > 0)
        {
            document.getElementsByClassName('bi-caret-down-square-fill')[i].style.transform = "rotate(180deg)";
        }
        else{
            document.getElementsByClassName('bi-caret-down-square-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})

let menu_btn = document.getElementsByClassName('bi-three-dots')[0];
let menu_box = document.getElementById('menu_box');
menu_btn.addEventListener('click',()=>{
     menu_box.classList.toggle('ul_active')
})


function empty_input(){
    document.querySelector("#inp").value = '';
}