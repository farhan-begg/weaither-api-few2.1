import getWeather from './weather.js';
import onWeather from './weather.js'

const tempEl = document.getElementById('temp')
const descEl = document.getElementById('desc')
const formEl = document.getElementById('form')
const zipInput = document.getElementById('zip')

// Define event listeners
formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const zip = zipInput.value
    // zip ==== argument ==== value ==== '94122'
    const p = getWeather(zip)
    p.then(data => {
        onWeather(data)
    })
})


