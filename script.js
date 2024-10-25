let image=document.getElementById("Wether-image")
async function firstrun(){
    let city="london";
    const link=`https://api.openweathermap.org/data/2.5/weather?q=`;
    const apikey='&appid=4b486a443648ea6205d0e7092655c590'
    let data=await fetch(link +city+ apikey);
    var da=await data.json();
    console.log(da)
    document.getElementById("name").textContent=da.name
    let n=da.main.temp;
    n=n-273.15;
    n=Math.floor(n);
    document.getElementById("deg").textContent=n+"°c";
    document.getElementById("deg").textContent=n+"°c";
    document.getElementById("humidity-percentage").textContent=da.main.humidity+"%";
    document.getElementById("wind-percentage").textContent=da.wind.speed+" km/h";

    if(da.weather[0].main=="Clouds"){
        image.src="./images/clouds.png"
    }
    else if(da.weather[0].main=="Rain"){
        image.src="./images/rain.png"
    }
    else if(da.weather[0].main=="Clear"){
         image.src="./images/clear.png"
    }
    else if(da.weather[0].main=="Drizzle"){
         image.src="./images/drizzle.png"
    }
    else if(da.weather[0].main=="Mist"){
        image.src="./images/mist.png"
    }
}
let intimeout=setTimeout(firstrun,2000)



async function getcity(){
    let inputtab=document.getElementById("cityname");
    let city=inputtab.value;
    const link=`https://api.openweathermap.org/data/2.5/weather?q=`;
    const apikey='&appid=4b486a443648ea6205d0e7092655c590'

    let data=await fetch(link +city+ apikey);
    var da=await data.json();
    console.log(da)
    document.getElementById("name").textContent=da.name
    let n=da.main.temp;
    n=n-273.15;
    n=Math.floor(n);
    document.getElementById("deg").textContent=n+"°c";
    document.getElementById("humidity-percentage").textContent=da.main.humidity+"%";
    document.getElementById("wind-percentage").textContent=da.wind.speed+" km/h";

    if(da.weather[0].main=="Clouds"){
        image.src="./images/clouds.png"
    }
    else if(da.weather[0].main=="Rain"){
        image.src="./images/rain.png"
    }
    else if(da.weather[0].main=="Clear"){
         image.src="./images/clear.png"
    }
    else if(da.weather[0].main=="Drizzle"){
         image.src="./images/drizzle.png"
    }
    else if(da.weather[0].main=="Mist"){
        image.src="./images/mist.png"
    }



    clearTimeout(intimeout);
   
    
}
