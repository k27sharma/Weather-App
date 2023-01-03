var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var x = document.querySelector('.name')
var des = document.querySelector('.des')
var temp = document.querySelector('.temp')


button.addEventListener('click', function(){

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'appid=1e1eddc220296ddd7e81dcda1035ba6f').then(res => res.json()).then(data => {

    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var desValue = data['weather'][0]['description'];

    x.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    des.innerHTML = desValue;



})
})