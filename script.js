window.addEventListener('load', () => {
    fetch(`https://api.exchangerate.host/latest?base=${valueFirst}&symbols=${valueSecond}`)
        .then(res => res.json()).then(data => {
            document.querySelector('.currencies-first p').textContent = `1 ${valueFirst} = ${data.rates[valueSecond]} ${valueSecond}` })
    fetch(`https://api.exchangerate.host/latest?base=${valueSecond}&symbols=${valueFirst}`)
        .then(res => res.json()).then(data => {
            document.querySelector('.currencies-second p').textContent = `1 ${valueSecond} = ${data.rates[valueFirst]} ${valueFirst}` }) })
document.querySelector('.bank-A').addEventListener('click', () => { input1.value = ''; input2.value = '' })
// document.querySelector('.bank-A').addEventListener('click', () => {location.href = "index.html"})
let c = 0
document.querySelector('.menu-button').addEventListener('click', (e) => {
    if (c % 2 == 0) { document.querySelector('.nav').style.display = 'flex' }
    if (c % 2 != 0) { document.querySelector('.nav').style.display = 'none' } c++ })
window.addEventListener('resize', (e) => { if (c % 2 != 0) { document.querySelector('.nav').style.display = 'none'; c++; } })
document.querySelector('.main').addEventListener('click', () => { if (c % 2 != 0) { document.querySelector('.nav').style.display = 'none'; c++; } })
let tabOne = document.querySelectorAll('.tab-one td'), tabTwo = document.querySelectorAll('.tab-two td')
let valueFirst = 'RUB', valueSecond = 'USD';
tabOne.forEach((item) => { item.addEventListener('click', (e) => { valueFirst = e.target.textContent; }) })
tabTwo.forEach((item) => { item.addEventListener('click', (e) => { valueSecond = e.target.textContent; }) })
function changeCurrencies(arr) {
    arr.forEach((item) => {item.addEventListener('click', (e) => {
            arr.forEach((item) => {
                item.style.backgroundColor = '#FFFFFF'; item.style.color = '#E5E5E5'; })
            e.target.style.backgroundColor = '#833AE0'; e.target.style.color = '#FFFFFF'; }) }) };
changeCurrencies(tabOne); changeCurrencies(tabTwo);
let input1 = document.querySelector('.currencies-first input'), input2 = document.querySelector('.currencies-second input')
window.addEventListener('click', () => {
    fetch(`https://api.exchangerate.host/latest?base=${valueFirst}&symbols=${valueSecond}`)
        .then(res => res.json()).then(data => {
            document.querySelector('.currencies-first p').textContent = `1 ${valueFirst} = ${data.rates[valueSecond]} ${valueSecond}`
            fetch(`https://api.exchangerate.host/latest?base=${valueSecond}&symbols=${valueFirst}`).then(r => r.json()).then(d => {
                input1.value = input2.value * Number(d.rates[valueFirst])})
            input1.addEventListener('input', () => {
                input1.value = input1.value.replace(",", ".").replace("..", ".").replace(".,", ".").replace(",.", ".")
                .replace(/[^0-9,.]/g, '').split(' ').join('').replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ').replace(/(\.\d+)\s(\d+)/g, '$1$2')
                if(input1.value.length == '2' && input1.value[0] == '0' && input1.value[1] != '.')
                input1.value = input1.value.slice(1);
                if (input1.value.length > 0) {
                    input2.value = (Number((input1.value.split(' ').join('')) * Number(data.rates[valueSecond]))).toLocaleString(undefined, { minimumFractionDigits: 4 }).replace(",", ".").replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1')
                } else { input2.value = '' } }) })
    fetch(`https://api.exchangerate.host/latest?base=${valueSecond}&symbols=${valueFirst}`)
        .then(res => res.json()).then(data => {
            fetch(`https://api.exchangerate.host/latest?base=${valueFirst}&symbols=${valueSecond}`).then(r => r.json()).then(d => {
                input2.value = input1.value * Number(d.rates[valueSecond])})
            document.querySelector('.currencies-second p').textContent = `1 ${valueSecond} = ${data.rates[valueFirst]} ${valueFirst}`
            input2.addEventListener('input', () => { 
                input2.value = input2.value.replace(",", ".").replace("..", ".").replace(".,", ".").replace(",.", ".")
                .replace(/[^0-9,.]/g, '').split(' ').join('').replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ').replace(/(\.\d+)\s(\d+)/g, '$1$2')
                if(input2.value.length == '2' && input2.value[0] == '0' && input2.value[1] != '.')
                input2.value = input2.value.slice(1);
                if (input2.value.length > 0) {
                    input1.value = (Number((input2.value.split(' ').join('')) * Number(data.rates[valueFirst]))).toLocaleString(undefined, { minimumFractionDigits: 4 }).replace(",", ".").replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1')
                } else { input1.value = '' } }) }) })
// .replace(/(\w{3})$/, '$1 ')