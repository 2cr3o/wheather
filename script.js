// 'use strict'; 

// // geolocation
// function success(pos){
//     ajaxRequest(
//         pos.coords.latitude,
//         pos.coords.longitude
//         );
// }

// function fail(error){
//     alert('位置情報の取得に失敗しました。エラーコード:' + error.code);
// }

// navigator.geolocation.getCurrentPosition(success, fail);

// //データ取得
// function ajaxRequest(lat, long){
//     const URL = 'https://pro.openweathermap.org/data/2.5/forecast/hourly';
//     const APP_ID = 'pro.openweathermap.org/data/2.5/forecast/hourly';

//     $.ajax({
//         url: URL,
//         data: {
//             appid: APP_ID,
//             lat: lat,
//             lon: long,
//             units: 'metric',
//             lang: 'ja'
//         }
//     })
//     .done(function(data){
//         console.log(data);
//     })
//     .fail(function(){
//         console.log('$.ajax failed!');
//     })
// }

// // var settings = {
// // 	"async": true,
// // 	"crossDomain": true,
// // 	"url": "https://mxrck-ser-programadores-apis.p.rapidapi.com/weather/forecast/MXCE0008/c.json?lang=es",
// // 	"method": "GET",
// // 	"headers": {
// // 		"x-rapidapi-host": "mxrck-ser-programadores-apis.p.rapidapi.com",
// // 		"x-rapidapi-key": "3840757b10mshcdb44212cd66ca2p1a927ejsnb8482768e8df"
// // 	}
// // }

// // $.ajax(settings).done(function (response) {
// // 	console.log(response);
// // });

'use strict';

// geolocation
function success(pos) {
    ajaxRequest(pos.coords.latitude, pos.coords.longitude);
}

function fail(error) {
    alert('位置情報の取得に失敗しました。エラーコード：' + error.code);
}

navigator.geolocation.getCurrentPosition(success, fail);

// データ取得
function ajaxRequest(lat, long) {
    const url = 'https://api.openweathermap.org/data/2.5/forecast';
    const appId = 'addef0382c5e95dc97cdae7a9878699d';

    $.ajax({
        url: url,
        data: {
            appid: appId,
            lat: lat,
            lon: long,
            units: 'metric',
            lang: 'ja'
        }
    })
    .done(function(data) {
        console.log(data);
    })
    .fail(function() {
        console.log('$.ajax failed!');
    })
}
