//mobile nav
let c = 0
document.querySelector('.menu-button').addEventListener('click', (e) => {
    if (c % 2 == 0) { document.querySelector('.nav').style.display = 'flex' }
    if (c % 2 != 0) { document.querySelector('.nav').style.display = 'none' } c++
})
window.addEventListener('resize', (e) => { if (c % 2 != 0) { document.querySelector('.nav').style.display = 'none'; c++; } })
document.querySelector('.main').addEventListener('click', () => { if (c % 2 != 0) { document.querySelector('.nav').style.display = 'none'; c++; } })
let tabOne = document.querySelectorAll('.tab-one td'), tabTwo = document.querySelectorAll('.tab-two td')
//changeCurrencies
function changeCurrencies(arr) {
    arr.forEach((item) => {
        item.addEventListener('click', (e) => {
            arr.forEach((item) => {
                item.style.backgroundColor = '#FFFFFF'; item.style.color = '#E5E5E5';
            })
            e.target.style.backgroundColor = '#833AE0'; e.target.style.color = '#FFFFFF';
        })
    })
};
changeCurrencies(tabOne); changeCurrencies(tabTwo);

fetch('https://api.exchangerate.host/latest?base=RUB&symbols=USD')
    .then(res => res.json())
    .then(data => {
        document.querySelector('.currencies-first p').textContent = `1 RUB = ${data.rates.USD} USD`
        document.querySelector('.currencies-first input').addEventListener('input', () => {
            if (document.querySelector('.currencies-first input').value != 0) {
                document.querySelector('.currencies-second input').value = ((+(document.querySelector('.currencies-first input').value) * +(data.rates.USD))).toLocaleString(undefined, { minimumFractionDigits: 4 }).replace(",", ".").replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1')
            } else {
                document.querySelector('.currencies-second input').value = ''
            }
        })
    })

fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
    .then(res => res.json())
    .then(data => {
        document.querySelector('.currencies-second p').textContent = `1 USD = ${data.rates.RUB} RUB`
        document.querySelector('.currencies-second input').addEventListener('input', () => {
            if (document.querySelector('.currencies-second input').value != 0) {
                document.querySelector('.currencies-first input').value = ((+(document.querySelector('.currencies-second input').value) * +(data.rates.RUB))).toLocaleString(undefined, { minimumFractionDigits: 4 }).replace(",", ".").replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1')
            } else {
                document.querySelector('.currencies-first input').value = ''
            }
        })
    })
