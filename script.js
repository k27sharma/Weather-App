const time1 = document.getElementById('time');
const day1 = document.getElementById('day');
const others = document.getElementById
('current-weather-items');
const timeZone = document.getElementById('time-zone');
const country = document.getElementById('country');
const futureForecastToday = document.getElementById('temp');
const weatherforecastitems = document.getElementById('weather-forecast');


// setting the date and time 

const days = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

setInterval(() => {

    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    //we wnat hours in 12 hour format
    const hour12format = hour>12 ? hour%12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour>12 ? 'PM':'AM';

    time1.innerHTML = hour12format + ':' + minutes + ' ' + '<span id = "am-pm">' + ampm + '</span>'

    day1.innerHTML = days[day] + ', ' + date + ' ' + months[month]

    
}, 1000);


const apiKey = '608ffa38b3cadb4a4b86c4c90274a31a';

//function to call the api

getWeatherData()
function getWeatherData(){
     
    navigator.geolocation.getCurrentPosition((success) => {

        let{latitude, longitude} = success.coords;

        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`).then(res => res.json()).then(data => {

        console.log(data);
        })
    })

}
