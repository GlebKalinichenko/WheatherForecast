function getWeather(){
    var url = "http://api.openweathermap.org/data/2.5/weather?q=Makiivka,ua&lang=ru&units=metric&callback=test";
 
    $.ajax({
        url:url,
        type: 'GET',
        dataType: "jsonp",
        contentType: "application/json ",
        success: function(data){
            setWeather(data);
        },
        error: function(){alert("Ошибка при получении погоды!")}
    }); 
};

function setWeather(data){
    var path = "img/";
    var icon = "";
    document.getElementById('temp').innerHTML = data.main.temp + " C°";
    document.getElementById('humidity').innerHTML = data.main.humidity + "%";
    document.getElementById('pressure').innerHTML = data.main.pressure + " hPa";
    document.getElementById('wind_speed').innerHTML = data.wind.speed + " м/с";
    document.getElementById('clouds').innerHTML = data.clouds.all + " %";
    document.getElementById('city_name').innerHTML = data.name;
 
    var icon_id = data.weather[0].icon;
 
    switch(icon_id){
        case("11d"):
        icon = "storm";
        break;
        case("09d"):
        icon = "heavy"
        break;
        case("10d"):
        icon = "heavy"
        break;
        case("13d"):
        icon = "snow"
        break;
        case("50d"):
        icon = "fog"
        break;
        case("01d"):
        icon = "sunny"
        break;
        case("03d"):
        icon = "overcast"
        break;
        case("04d"):
        icon = "overcast"
        break;
        //for night weather
        case("11n"):
        icon = "storm";
        break;
        case("09n"):
        icon = "heavy"
        break;
        case("10n"):
        icon = "heavy"
        break;
        case("13n"):
        icon = "snow"
        break;
        case("50n"):
        icon = "fog"
        break;
        case("01n"):
        icon = "sunny"
        break;
        case("03n"):
        icon = "overcast"
        break;
        case("04n"):
        icon = "overcast"
        break;
    }
//    $('#weather-icon').css({"background": "url("+path+icon+".png) no-repeat center"});
    $('#weather-icon').css({"background": "url("+"img/weather.png"+") no-repeat center"});
};