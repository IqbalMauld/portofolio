const nav = document.querySelector('.nav');
const menu = document.getElementById('menu');

menu.addEventListener('click', () =>{
    nav.classList.toggle('active');

});

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !nav.contains(e.target)){
        nav.classList.remove('active');
    }
});

const skill = document.getElementById('btns');
const peng = document.getElementById('btnp');
const pend = document.getElementById('btnpp');

skill.addEventListener('click', function(){
    document.querySelector('.coding').style.opacity = '1';
    document.querySelector('.codingp').style.opacity = '0';
    document.querySelector('.pengalaman p').style.opacity = '0';
})
peng.addEventListener('click', function(){
    document.querySelector('.pengalaman p').style.opacity = '1';
    document.querySelector('.coding').style.opacity = '0';
    document.querySelector('.codingp').style.opacity = '0';
})
pend.addEventListener('click', function(){
    document.querySelector(' .codingp').style.opacity = '1';
    document.querySelector(' .coding').style.opacity = '0';
    document.querySelector(' .pengalaman p').style.opacity = '0';
})
