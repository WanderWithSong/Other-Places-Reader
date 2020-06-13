let notice = document.getElementById('notice');
let close = document.getElementById('close-button');
let hideNotice = function(){
    notice.style.display='none';
};
close.onclick = hideNotice;