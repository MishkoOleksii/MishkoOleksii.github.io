 fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
    .then(response => {return response.json()})
    .then(cursNbu => {
    console.log(cursNbu)
        let index = cursNbu.findIndex(valuta => valuta.cc === 'USD')
        const usd = cursNbu[index].rate
        index = cursNbu.findIndex(valuta => valuta.cc === 'EUR')
        const eur = cursNbu[index].rate
        index = cursNbu.findIndex(valuta => valuta.cc === 'RUB')
        const rub = cursNbu[index].rate
        console.log(usd)
        console.log(eur)
        console.log(rub)
    
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
//let usd = 28;
//let eur = 33;
//let rur = 0.37;
//навар посредника
let b = 0.97;
let s = 1.03;

const usdBuyPrice = Math.floor(usd * b * 100) / 100;
const usdSalePrice = Math.floor(usd * s * 100) / 100;
const eurBuyPrice = Math.floor(eur * b * 100) / 100;
const eurSalePrice = Math.floor(eur * s * 100) / 100;
const rurBuyPrice = Math.floor(rub * b * 1000) / 1000;
const rurSalePrice = Math.floor(rub * s * 1000) / 1000;

usdbuy.innerHTML = usdBuyPrice;
usdsale.innerHTML = usdSalePrice;
eurbuy.innerHTML = eurBuyPrice;
eursale.innerHTML = eurSalePrice;
rurbuy.innerHTML = rurBuyPrice;
rursale.innerHTML = rurSalePrice;

salebtn.onclick = () => {
    const n = document.getElementById('mySelect').options.selectedIndex;
    const sel = document.getElementById('mySelect').options[n].text;
    const val = document.getElementById('input-value').value;
    setSaleResult(sel, val);
resultBuy.style.display = 'none';
resultSale.style.display = 'block';
}

setSaleResult = (sel, val) => {
    let saleResult;
    switch (sel) {
            case "USD":
            saleResult = val * usdBuyPrice;
            break
            case "EUR":
            saleResult = val * eurBuyPrice;
            break
            case "RUR":
            saleResult = val * rurBuyPrice;
            break
    }
document.getElementById('resultSale').innerHTML = `Ви отримаєте ${saleResult}`;

}

buybtn.onclick = () => {
    const m = document.getElementById('mySelect').options.selectedIndex;
    const sal = document.getElementById('mySelect').options[m].text;
    const vel = document.getElementById('input-value').value;
    setBuyResult(sal, vel);
resultBuy.style.display = 'block';
resultSale.style.display = 'none';
}

setBuyResult = (sal, vel) => {
    let buyResult;
    switch (sal) {
            case "USD":
            buyResult = vel * usdSalePrice;
            break
            case "EUR":
            buyResult = vel * eurSalePrice;
            break
            case "RUR":
            buyResult = vel * rurSalePrice;
            break
    }
document.getElementById('resultBuy').innerHTML = `До сплати ${buyResult}`;

}
})

fetch("https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=b06f702d9a33b23e0f721b6c76ddefc5")
    .then(response => {return response.json()})
    .then(data => {
//    console.log(data)
//     const usd = data.id
//     console.log(usd)
document.querySelector('.city').textContent = data.name
document.querySelector('.description').textContent = data.weather[0]['description']
document.querySelector('.temp').innerHTML = (data.main.temp) + "&deg;"
document.querySelector('.icon').src = "https://openweathermap.org/img/w/" + data.weather[0]['icon'] + '.png'

})
    .catch(err =>{
    console.log(err)
})
