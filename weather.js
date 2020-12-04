    //    export function onWeather(data) {
    //     temp.innerHTML = data.main.temp
    //     desc.innerHTML = data.weather[0].description
    // }

      // Functions 
     export function getWeather(zip, apiKey, units = 'imperial') {
        // const zip = '94122'
        // zip ==== parameter ==== variable 
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
        const p = fetch(path)
        const p2 = p.then(res => res.json())
        return p2
       }

