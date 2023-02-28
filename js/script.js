let apiKey = '06b3080ea97b0897e5782d76dd980503';
let url;
let lat, lon;

let grados = document.querySelector('#grados');
let clima = document.querySelector('#clima');
let img = document.querySelector('#img');
let ciudad = document.querySelector('#ciudad');




if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition( (position)=> {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let temp = data.main.temp
                let celcius = (temp - 32) * 5/9;
                let weather = data.weather[0].main;
                let city = data.name;

                

                selectImage(weather)
                console.log(weather)
                console.log(data)
                ciudad.textContent = `${city}`;
                grados.textContent = `${celcius.toFixed(0)}º`;

            })
            .catch(err => {
                console.log(err)
            })
    })
}


function selectImage(weatherClima){
    switch (weatherClima) {
        case 'Clear':
            img.src = "img/despejado.png";
            clima.textContent = "Soleado"
            break
        case 'Clouds':
            img.src = "img/nublado.png";
            clima.textContent = "Nublado"
            break
        case 'Rain':
            img.src = "img/lluvia.png";
            clima.textContent = "Lluvia"
            break
        case 'Thunderstorm':
            img.src = "img/electrica.png";
            clima.textContent = "Tormenta elèctrica";
            break
        case 'Drizzle':
            img.src = "img/llovizna.png";
            clima.textContent = "Lloviznando";
            break
        case 'Snow':
            img.src = "img/nieve.png";
            clima.textContent = "Nevando";
            break
        case 'Mist':
            img.src = "img/niebla.png";
            clima.textContent = "Niebla";
            break
        case 'Fog':
            img.src = "img/niebla.png";
            clima.textContent = "Niebla";
            break
        case 'Smoke':
            img.src = "img/niebla.png";
            clima.textContent = "Humo";
            break
        case 'Haze':
            img.src = "img/default.png"
            clima.textContent = "Neblina";
            break
        case 'Dust':
            img.src = "img/default.png"
            clima.textContent = "Polvo";
            break
        case 'Sand':
            img.src = "img/default.png"
            clima.textContent = "Arena";
            break
        case 'Squall':
            img.src = "img/default.png"
            clima.textContent = "Torbonada";
            break
        case 'Tornado':
            img.src = "img/default.png"
            clima.textContent = "Tornado";
            break
        default: 
            img.src = "img/default.png"
            clima.textContent = "Indefinido";
    }
}