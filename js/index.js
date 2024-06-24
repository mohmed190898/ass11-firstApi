var dataRow = document.getElementById("dataRow");
var findBtn = document.querySelector(".findBtn");
var search = document.getElementById("find");
var date,directoin="";
var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var allData = [];
var part1Data;

getCity("cairo");


findBtn.addEventListener('click',function(){
    getCity(search.value);
})


async function getCity(cityName) {
    // console.log(cityName);

    try {
        var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=da1700e1ac6a49af868185407242206&q=${cityName}&days=3&aqi=no&alerts=no`);

    var data = await response.json();

    allData = data;
    part1Data=data;
    date = new Date();
    // console.log(allData.current.wind_dir);
    // console.log(directoin);

    directoin=allData.current.wind_dir;
    // switch (allData.current.wind_dir) {
    //     case 'E':
    //         directoin="East";
    //         break;
    //     case "W":
    //         directoin="West";
    //         break;
    //     case 'NNE':
    //         directoin="North";
    //         break;
    //     case "SSW":
    //         directoin="South";
    //         break;
    //         default:
    //             directoin= "east";
    //             break;
    // }
    addData();
    } catch (error) {
        console.log("ERROR");
    }



    
}
function addData() {
    var cartona = `
        <div class="card  mb-3 col-4 bg-dark" >
                <div class="card-header d-flex justify-content-between text-white">
                    <span class="p-3 fs-5">${days[date.getDay()]}</span>
                    <span class="p-3 fs-5">${date.getDate()}/${date.getMonth()+1 }</span>
                </div>

                <div class="card-body text-white">
                    <h5 class="card-title ps-3">${allData.location.name}</h5>
                    <div class="group d-flex justify-content-between p-3 ">
                        <span class="fs-1">${allData.current.temp_c}</span>
                        <span class="fs-1">${allData.current.condition.icon}</span>
                        
                    </div>
                    <span class="p-3 fw-bold text-info">${allData.current.condition.text}</span>
                    <div class="icons d-flex p-3 text-white">
                        <span class="pe-3">Rainy ${allData.current.wind_kph}%</span>
                        <span class="pe-3">${allData.current.gust_kph}km/h</span>
                        <span class="pe-3">${directoin}</span>
                        
                    </div>
                </div>
                
            </div>


            <div class="card mb-3 col-4 bg-dark text-white" >
                <div class="card-header  p-3 text-center">
                    <p class="fs-5">${days[date.getDay()+1]}</p>
                </div>
                <div class="card-body text-center">
                    <p class="mt-2">icon</p>
                    <div class="tempratureGroup ">
                        <p class="fs-3 fw-bold">${allData.forecast.forecastday[1].day.maxtemp_c}*C</p>
                        <p class="fs-3 fw-bold">${allData.forecast.forecastday[1].day.mintemp_c}*C</p>
                        
                    </div>
                    <span class="text-info fs-5 fw-bold">${allData.forecast.forecastday[1].day.condition.text}</span>
                </div>
            </div>
            <div class="card mb-3 col-4 bg-dark text-white" >
                <div class="card-header  p-3 text-center">
                    <p class="fs-5">${days[date.getDay()+2]}</p>
                </div>
                <div class="card-body text-center">
                    <p class="mt-2">icon</p>
                    <div class="tempratureGroup ">
                        <p class="fs-3 fw-bold">${allData.forecast.forecastday[2].day.maxtemp_c}*C</p>
                        <p class="fs-3 fw-bold">${allData.forecast.forecastday[2].day.mintemp_c}*C</p>                        
                    </div>
                    <span class="text-info fs-5 fw-bold">${allData.forecast.forecastday[2].day.condition.text}</span>
                </div>
            </div>

    `;
    dataRow.innerHTML = cartona;
}


