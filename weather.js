       function onWeather(data) {
        temp.innerHTML = data.main.temp
        desc.innerHTML = data.weather[0].description
    }

      // Functions 
      function getWeather(zip) {
        // const zip = '94122'
        // zip ==== parameter ==== variable 
        const apiKey = '467355df4c808dd6134a3b64e9ace282'
        const units = 'imperial'
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
        const p = fetch(path)
        const p2 = p.then(res => res.json())
        return p2
       }

