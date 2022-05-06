
let listup=document.querySelector(".listup");
let listdown=document.querySelector(".listdown");



// dynamic time


function getTime(){
    let time=document.querySelector(".time");
    let today = new Date().toLocaleString();
    // let today = new Date().toLocaleTimeString();
    // console.log(today)
    // time.innerHTML= today.getFullYear()+"."+today.getMonth()+"."+today.getDay();
    time.innerHTML="現在時間 "+today;
}
setInterval("getTime()",1000);

async function getData(city){
    let url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-7118B202-1151-43E8-BE84-EBA964198849&format=JSON&locationName=${city}`;
    // let url = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-7118B202-1151-43E8-BE84-EBA964198849&format=JSON&locationName=臺北市";
    let req = await fetch(url);
    let Data = await req.json();
    // console.log(response)
    let records = Data.records.locations[0].location[0].weatherElement;
    const PoP = records[0].time[0].elementValue[0].value;
    const Wx = records[1].time[0].elementValue[0].value;
    const T = records[2].time[0].elementValue[0].value;
    // console.log(PoP);
    const cityWeather = [PoP, Wx, T];
    console.log(cityWeather);

    
    // list.innerHTML=city+"<hr/>"+"降雨率:"+cityWeather[0]+"<br>"+"天氣:"+cityWeather[1]+"<br>"+"溫度:"+cityWeather[2];
    // list.innerHTML=city+"<br>"+"<br>"+"降雨率:"+cityWeather[0]+"<br>"+"天氣:"+cityWeather[1]+"<br>"+"溫度:"+cityWeather[2];
    
    listup.innerHTML=city;
    listdown.innerHTML="降雨率:"+cityWeather[0]+"%"+"<br>"+"天氣:"+cityWeather[1]+"<br>"+"溫度:"+cityWeather[2]+"°C ";

    // console.log(data);
    // console.log(dataTemperature);
    // let city;
    // let dataTemperature;
    // for(let i=0;i<data.length;i++){
    //     city=data[i];
    //     // let dataTemperature = city.weatherElement[3].time[0].elementValue[0].value
    //     console.log(city)
    //     list.innerHTML+=city.locationName+"temperature:"+city.weatherElement[3].time[0].elementValue[0].value+"<hr/>"+"</br>";
    // }
    
    // return records;
    


}

// async function makeContext(city){
//     let data = await getData(city);
//     console.log(data);
// }

/////////////////////////////////
// function getData(){
//     let req = fetch(url
//     ).then((response)=>{
//         console.log(response)
//         return response.json()
//     }).then((data)=>{
//         console.log(data)
//         let dataCITY;
//         dataCITY = data.records.locations[0].location;
//         console.log(dataCITY);
//         for(let i=0;i<dataCITY.length;i++){
//             city=dataCITY[i];
//             list.innerHTML+="<button>"+city.locationName+"</button>"+"</br>"
//         }
//     })
//     console.log("HIIIIII")
    // console.log(req);
    // let response = req.json();
    // console.log(response)
    // let data = response.records.locations[0].location
    
    // console.log(data);
    // // console.log(dataTemperature);
    // let city;
    // // let dataTemperature;
    // for(let i=0;i<data.length;i++){
    //     city=data[i];
    //     // let dataTemperature = city.weatherElement[3].time[0].elementValue[0].value
    //     console.log(city)
    //     list.innerHTML+=city.locationName+"temperature:"+city.weatherElement[3].time[0].elementValue[0].value+"<hr/>"+"</br>";
    // }
    
    // return data;
    



// makeContext();
// console.log("XXXXXXXX")
// getData("高雄市");
getData("新竹市");

let selectCity = document.querySelector(".city")
selectCity.addEventListener("click", function(e){
    let city = e.target.innerText;
    getData(city);
    console.log(city);
})










// for test

// document.getElementById("testBtn").addEventListener("click", testButton)
// document.querySelector(".testBtn2").addEventListener("click", testButton2)
// document.getElementById("demo").addEventListener("click", myFunction);
// document.getElementById("demo1").addEventListener("click", myFunction1);
// document.getElementById("demo2").addEventListener("click", myFunction2);
// document.getElementById("demo3").addEventListener("click", myFunction3);
// document.querySelector(".Button1").addEventListener("click", testTextContent)
// document.querySelector(".Button2").addEventListener("mouseover", testInnerText)
// document.querySelector(".Button2").addEventListener("mouseout", testMouseout)

function testButton(){
    alert("hi")
    console.log("hi")
    let aboutDiv=document.querySelector("#about")
    aboutDiv.style.display="block"
}

function testButton2(){
    alert("testBtn2")
}

function myFunction() {
document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
creatDiv()
}

function creatDiv(){
    let creatOB = document.createElement('div')
    creatOB.innerHTML="ceratDiv"
    creatOB.appendChild(document.createElement('br')) 
    document.querySelector("#po").appendChild(creatOB)
    // document.querySelector("#po").innerHTML = "123"
    // document.getElementById("po").innerHTML = "123";
}

function myFunctions() {
    document.getElementById("po").innerHTML = n;
    }
function myFunction1() {
    document.getElementById("po").innerHTML = "1";
    }
function myFunction2() {
    document.getElementById("po").innerHTML = "2";
    }
function myFunction3() {
    document.getElementById("po").innerHTML = "3";
    }

function testTextContent(){
    document.querySelector(".Button1").textContent = "test textContent";
}

function testInnerText(){
    document.querySelector(".Button2").innerText = "test innerText";
}
function testMouseout(){
    document.querySelector(".Button2").innerText = "test innerText";
    document.querySelector(".Button2").style = "background: linear-gradient(to right, hsl(98 100% 50%), hsl(204 100% 50%));";
}

// async function temp(){
// let tempurl =await fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-7118B202-1151-43E8-BE84-EBA964198849&format=JSON") 
// tempurl = await tempurl.json();
// // let cityName=Data.records.locations[0].location[0].locationName

// let cityName = [];
// for (i=0; i<22 ;i++){
//     let cityList =tempurl.records.locations[0].location[i].locationName;
//     // console.log(cityList);
//     // cityName = cityName.push(cityList)
//     // console.log(cityName.push('cityList'))
//     cityName.push(cityList)
    
// }
// console.log(cityName)
// }
// temp();