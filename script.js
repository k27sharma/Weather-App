const time1 = document.getElementById('time');
const day1 = document.getElementById('day');
const others= document.getElementById
('current-weather-items');
const timeZone = document.getElementById('time-zone');
const country = document.getElementById('country');
const futureForecastToday = document.getElementById('temp');
const weatherforecastitems = document.getElementById('weather-forecast');


var button = document.querySelector('.Submit')
var inputValue = document.querySelector('.inputValue')
var x = document.querySelector('.name')
var des = document.querySelector('.des')
var temp = document.querySelector('.temp')
var feels = document.querySelector('.feels');

// fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=1e1eddc220296ddd7e81dcda1035ba6f')
// .then(res => res.json()).then(data => console.log(data))


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

    time1.innerHTML = (hour12format<10?'0'+ hour12format: hour12format) + ':' + (minutes<10? '0'+minutes:minutes) + ' ' + '<span id = "am-pm">' + ampm + '</span>'

    day1.innerHTML = days[day] + ', ' + date + ' ' + months[month]

    
}, 1000);


const apiKey = '608ffa38b3cadb4a4b86c4c90274a31a';

//function to call the api

getWeatherData()
function getWeatherData(){
     
    navigator.geolocation.getCurrentPosition((success) => {

        let{latitude, longitude} = success.coords;
       
       
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`).then(res => res.json()).then(data => {

        console.log(data);
      
         showWeatherData(data);

        })
        
       
        })
    

}


function showWeatherData(data){
    let{humidity,pressure} = data.main;
    let{speed} = data.wind;
    let{sunrise,sunset} = data.sys;

    // timeZone.innerHTML = data.timezone;
       var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var feelValue = data['main']['feels_like'];

        x.innerHTML = nameValue;
        temp.innerHTML = 'Temperature :   ' + tempValue + '&#176; C';
        des.innerHTML = descValue;
        feels.innerHTML = 'Feels-Like :   ' +  feelValue + '&#176; C';


    country.innerHTML = data.coord.lat + 'N' + data.coord.lon + 'E';

    others.innerHTML =

    ` <div class="weather-items">
                    <div>Humidity</div>
                    <div>${humidity}</div>
                </div>
                <div class="weather-items">
                    <div>Pressure</div>
                    <div>${pressure}</div>
                </div>
                 <div class="weather-items">
                    <div>Wind Speed</div>
                    <div>${speed}</div>
                </div>
                 <div class="weather-items">
                    <div>Sunrise</div>
                    <div>${window.moment(sunrise *1000).format('HH:mm a')}</div>
                </div>
                 <div class="weather-items">
                    <div>Sunset</div>
                    <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
                </div>`
               ;
    
    

    
                
               
}
