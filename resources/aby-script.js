let notice = document.getElementById('notice');
let close = document.getElementById('close-button');
let hideNotice = function(){
    notice.style.display='none';
};
close.onclick = hideNotice;


let bookmark = document.getElementById('side-home-bookmark');
let sideHome = document.getElementById('side-home');
let sideHomeStatus = true;

/*
bookmark.onclick = ()=> {
    if(sideHomeStatus === true){
      sideHomeStatus = false;
      sideHome.style.right =`${-360}px`;
   } else if(sideHomeStatus === false){
       sideHomeStatus = true;
       sideHome.style.right =`${0}px`;
   }
}
*/


/*
window.onscroll = function(){scrollFunction()};
function scrollFunction() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        sideHome.style.display = 'none';
    }
}
*/