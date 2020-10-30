 const modal = document.getElementById('myModal');
 const btn = document.getElementById('modalBtn');
 const span = document.getElementsByClassName('close')[0];

 btn.onclick = () => {
     modal.style.display = 'block';
     btn.style.display = 'none';
 }

 span.onclick = () => {
     modal.style.display = 'none';
     btn.style.display = 'block';
 }

 window.onclick = e => {
     if (e.target === modal) {
         modal.style.display = 'none';
          btn.style.display = 'block';
     }
 }
 
//курс НБУ:
let usd = 28;
let eur = 33;
let rur = 0.37;
//навар посредника
let s = 0.95;
let b = 1.05;

usdbuy.innerHTML = Math.floor(usd * b * 100) / 100;
usdsale.innerHTML = Math.floor(usd * s * 100) / 100;
eurbuy.innerHTML = Math.floor(eur * b * 100) / 100;
eursale.innerHTML = Math.floor(eur * s * 100) / 100;
rurbuy.innerHTML = Math.floor(rur * b * 10000) / 10000;
rursale.innerHTML = Math.floor(rur * s * 10000) / 10000;