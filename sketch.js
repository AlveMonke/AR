if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (e) => {
        let useLat = e.coords.latitude;
        let useLong = e.coords.longitude;
        
        document.querySelector("a-scene").innerHTML += `<a-entity gltf-model="./assets/magnemite/scene.gltf" rotation="0 180 0" scale="0.15 0.15 0.15" gps-entity-place="longitude: ${useLong}; latitude: ${useLat};" animation-mixer />`;

//         let key = "AHxoFnjGGgGyfjAA9kaQdpC3ID2AZ9dG";

//         console.log(useLat, useLong);

//         let places = await fetch(
//             `https://api.tomtom.com/search/2/nearbySearch/.json?lat=${useLat}&lon=${useLong}&radius=2&key=${key}`
//         );
//         places = await places.json();

//         let placesArr = [];

//         places.results.forEach((e) => {
//             placesArr.push({
//                 name: e.poi.name,
//                 lat: e.position.lat,
//                 lon: e.position.lon,
//             });
//         });

//         placesArr.forEach((e) => {
//             document.body.innerHTML += `<a-entity gltf-model="./assets/magnemite/scene.gltf" rotation="0 180 0" scale="0.15 0.15 0.15" gps-entity-place="longitude: ${e.lon}; latitude: ${e.lat};" animation-mixer />`;
//         });
    });
} else {
    document.body.innerHTML =
        "<h3>Geolocation is not supported by this browser. View this site from another browser.</h3>";
}
