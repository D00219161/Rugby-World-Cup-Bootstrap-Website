var map;
function initMap() {
    
    //cities//
    var tokyo = {lat: 35.6762, lng: 139.6503};
    var nagoya = {lat: 35.1815, lng: 136.9066};
    var saitama = {lat: 35.8616, lng: 139.6455};
    var ueda = {lat: 36.4019, lng: 138.2491};
    var yokohama = {lat: 35.4437, lng: 35.4437};
    var kumamoto = {lat: 32.8032, lng: 130.7079};
    var hiroshima = {lat: 34.3853, lng: 132.4553};
    var kobe = {lat: 34.6901, lng: 135.1956};
    var osaka = {lat: 34.6937, lng: 135.5023};

    //attractions//
    var tokyotower = {lat: 35.6586, lng: 139.7454};
    var hiroshimapeacememorial = {lat: 34.3955, lng: 132.4536};
    var jigokudanimonkeypark = {lat: 36.7327, lng: 138.4621};
    var kiyomizudera = {lat: 34.9949, lng: 135.7850};
    var thehimejicastle = {lat: 34.8394, lng: 134.6939};
    var greatbuddhaofkamakura = {lat: 35.3167, lng: 139.5362};
    var todaijitemple = {lat: 34.6890, lng: 135.8398};
    var tokyoimperialpalace = {lat: 35.6852, lng: 139.7528};
    var mountfuji = {lat: 35.3606, lng: 138.7274};
    var templeofthegoldenpavilion = {lat: 35.0394, lng: 135.7292};

    //food places//
    var ramengutara = {lat: 35.6815, lng: 139.5364};
    var srilankakumamoto = {lat: 32.8020, lng: 130.7079};
    var yokobachi = {lat: 32.8064, lng: 130.7128};
    var keikaramen = {lat: 1.3728, lng: 103.8937};
    var tatsumisushi = {lat: 33.5961, lng: 130.4066};
    var osakatacos = {lat: 34.6486, lng: 135.5041};
    var kagonoya = {lat: 13.7437, lng: 100.5441};
    var wantoburger = {lat: 34.6928, lng: 135.1884};
    var hyotan = {lat: 34.9737, lng: 137.1150};
    var torisobatake = {lat: 35.6582, lng: 139.7439};
    var nodaiwa = {lat: 35.6581, lng: 139.7434};
    var yakinikuhanabi = {lat: 13.7370, lng: 100.5737};

    //transport//
    var hanedaairport = {lat: 35.5494, lng: 139.7798};
    var kumamotoairport = {lat: 32.8346, lng: 130.8581};
    var oitaairport = {lat: 33.4785, lng: 131.7360};
    var kobeairport = {lat: 34.6354, lng: 135.2249};
    var kyotostation = {lat: 34.9858, lng: 135.7588};
    var osakastation = {lat: 34.7025, lng: 135.4960};
    var sapporostation = {lat: 43.0687, lng: 141.3508};
    var shinjukustation = {lat: 35.6897, lng: 139.7004};

    //hotels//
    var kumamotowasukitsukasakan = {lat: 32.8045, lng: 130.7114};
    var parkhoteltokyo = {lat: 35.6632, lng: 139.7596};
    var tokyoprincehotel = {lat: 35.6590, lng: 139.7481};
    var hotelsyoen = {lat: 36.6990, lng: 137.2149};
    var schiheillodge = {lat: 36.7528, lng: 137.8686};
    var hotelaile = {lat: 33.2794, lng: 131.5069};

    //images
    var plane = "images/plane_1.svg";
    var train = "images/train_1.svg";
    var hotel = "images/hotel_1.svg";
    var chopsticks = "images/chopsticks_1.svg";
    var noodles = "images/noodles_1.svg";
    var attractions = "images/attractions_1.svg";

    map = new google.maps.Map(document.getElementById('map'),
            {center: {lat: 35.6762, lng: 139.6503}, zoom: 7});

    //cities//
    var marker = new google.maps.Marker({position: tokyo, map: map, title: 'Tokyo'});
    var marker = new google.maps.Marker({position: nagoya, map: map, title: 'Nagoya'});
    var marker = new google.maps.Marker({position: saitama, map: map, title: 'Saitama'});
    var marker = new google.maps.Marker({position: ueda, map: map, title: 'Ueda'});
    var marker = new google.maps.Marker({position: yokohama, map: map, title: 'Yokohama'});
    var marker = new google.maps.Marker({position: kumamoto, map: map, title: 'Kumamoto'});
    var marker = new google.maps.Marker({position: hiroshima, map: map, title: 'Hiroshima'});
    var marker = new google.maps.Marker({position: kobe, map: map, title: 'Kobe'});
    var marker = new google.maps.Marker({position: osaka, map: map, title: 'Osaka'});

    //attractions//
    var marker = new google.maps.Marker({position: tokyotower, map: map, icon: attractions, title: 'Tokyo Tower'});
    var marker = new google.maps.Marker({position: hiroshimapeacememorial, map: map, icon: attractions, title: 'Hiroshima Peace Memorial'});
    var marker = new google.maps.Marker({position: jigokudanimonkeypark, map: map, icon: attractions, title: 'Jigokudani Monkey Park'});
    var marker = new google.maps.Marker({position: kiyomizudera, map: map, icon: attractions, title: 'Kiyomizu-dera Temple'});
    var marker = new google.maps.Marker({position: thehimejicastle, map: map, icon: attractions, title: 'The Himeji Castle'});
    var marker = new google.maps.Marker({position: greatbuddhaofkamakura, map: map, icon: attractions, title: 'Great Buddha Of Kamakura'});
    var marker = new google.maps.Marker({position: todaijitemple, map: map, icon: attractions, title: 'Todaiji Temple'});
    var marker = new google.maps.Marker({position: tokyoimperialpalace, map: map, icon: attractions, title: 'Tokyo Imperial Palace'});
    var marker = new google.maps.Marker({position: mountfuji, map: map, icon: attractions, title: 'Mount Fuji'});
    var marker = new google.maps.Marker({position: templeofthegoldenpavilion, map: map, icon: attractions, title: 'Temple Of The Golden Pavilion'});

    //food//
    var marker = new google.maps.Marker({position: ramengutara, map: map, icon: noodles, title: 'Ramen Gutara'});
    var marker = new google.maps.Marker({position: srilankakumamoto, map: map, icon: chopsticks, title: 'Srilanka Kumamoto'});
    var marker = new google.maps.Marker({position: yokobachi, map: map, icon: noodles, title: 'Yokobachi'});
    var marker = new google.maps.Marker({position: keikaramen, map: map, icon: chopsticks, title: 'Keika Ramen'});
    var marker = new google.maps.Marker({position: tatsumisushi, map: map, icon: chopsticks, title: 'Tatsumi Sushi'});
    var marker = new google.maps.Marker({position: osakatacos, map: map, icon: noodles, title: 'Osaka Tacos'});
    var marker = new google.maps.Marker({position: kagonoya, map: map, icon: chopsticks, title: 'Kagonoya'});
    var marker = new google.maps.Marker({position: wantoburger, map: map, icon: noodles, title: 'Wanto Burger'});
    var marker = new google.maps.Marker({position: hyotan, map: map, icon: noodles, title: 'Hyotan'});
    var marker = new google.maps.Marker({position: torisobatake, map: map, icon: chopsticks, title: 'Torisobatake'});
    var marker = new google.maps.Marker({position: nodaiwa, map: map, icon: noodles, title: 'Nodaiwa'});
    var marker = new google.maps.Marker({position: yakinikuhanabi, map: map, icon: chopsticks, title: 'Yakiniku Hanabi'});

    //transport//
    var marker = new google.maps.Marker({position: hanedaairport, map: map, icon: plane, title: 'Hanedaa Aiport'});
    var marker = new google.maps.Marker({position: kumamotoairport, map: map, icon: plane, title: 'Kumamoto Aiport'});
    var marker = new google.maps.Marker({position: oitaairport, map: map, icon: plane, title: 'Oita Aiport'});
    var marker = new google.maps.Marker({position: kobeairport, map: map, icon: plane, title: 'Kobe Aiport'});
    var marker = new google.maps.Marker({position: kyotostation, map: map, icon: train, title: 'Kyoto Station'});
    var marker = new google.maps.Marker({position: osakastation, map: map, icon: train, title: 'Osaka Station'});
    var marker = new google.maps.Marker({position: sapporostation, map: map, icon: train, title: 'Sapporo Station'});
    var marker = new google.maps.Marker({position: shinjukustation, map: map, icon: train, title: 'Shinjuku Station'});

    //hotels//
    var marker = new google.maps.Marker({position: kumamotowasukitsukasakan, map: map, icon: hotel, title: 'Kumamoto Wasuki Tsukasakan'});
    var marker = new google.maps.Marker({position: parkhoteltokyo, map: map, icon: hotel, title: 'Park Hotel Tokyo'});
    var marker = new google.maps.Marker({position: tokyoprincehotel, map: map, icon: hotel, title: 'Tokyo Prince Hotel'});
    var marker = new google.maps.Marker({position: hotelsyoen, map: map, icon: hotel, title: 'Hotel Syoen'});
    var marker = new google.maps.Marker({position: schiheillodge, map: map, icon: hotel, title: 'Schiheil Lodge'});
    var marker = new google.maps.Marker({position: hotelaile, map: map, icon: hotel, title: 'Hotel Aile'});
}

//var map2;
// function initMap2() 
//  {
//      var directionsService = new google.maps.DirectionsService();
//     var directionsRenderer = new google.maps.DirectionsRenderer();
//    var map2 = new google.maps.Map(document.getElementById('map'), {
//       zoom: 8,
//center: {lat: 35.6762, lng: 139.6503}
//        });
//        directionsRenderer.setMap(map2);
//
//        var onChangeHandler = function() {
//         calculateAndDisplayRoute(directionsService, directionsRenderer);
//        };
//       document.getElementById('start').addEventListener('change', onChangeHandler);
//        document.getElementById('end').addEventListener('change', onChangeHandler);
//      }
//
//function calculateAndDisplayRoute(directionsService, directionsRenderer) {
//       directionsService.route(
//           {
//              origin: {query: document.getElementById('start').value},
//            destination: {query: document.getElementById('end').value},
//              travelMode: 'DRIVING'
//           },
//           function(response, status) {
//              if (status === 'OK') {
//              directionsRenderer.setDirections(response);
//             } else {
//                window.alert('Directions request failed due to ' + status);             }
//           });
//     }


function initMap2() {
    var directionsRenderer = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: 35.6762, lng: 139.6503}
    });
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById('right-panel'));

    var control = document.getElementById('floating-panel');
    control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}








