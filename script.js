//mobile nav
let c = 0 
document.querySelector('.menu-button').addEventListener('click',
    (e) => {if(c%2==0){document.querySelector('.nav').style.display = 'flex'}
    if(c%2!=0){document.querySelector('.nav').style.display = 'none'}c++})

fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')

document.querySelectorAll('td').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.style.backgroundColor = '#833AE0'
    })
})