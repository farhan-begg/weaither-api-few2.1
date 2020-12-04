import {getWeather} from './weather.js';

        const tempEl = document.getElementById('temp')
        const descEl = document.getElementById('desc')
        const formEl = document.getElementById('form')
        const zipInput = document.getElementById('zip')

        // Define event listeners
        formEl.addEventListener('submit', (e) => {
            e.preventDefault()
            const zip = zipInput.value
            const apiKey = '467355df4c808dd6134a3b64e9ace282'
            // zip ==== argument ==== value ==== '94122'
            const p = getWeather(zip, apiKey)
            p.then(data => {
                onWeather(data)
            })
        })

        function onWeather(data) {
            temp.innerHTML = data.main.temp
            desc.innerHTML = data.weather[0].description
        }
