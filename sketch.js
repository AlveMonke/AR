if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (e) => {
        let useLat = e.coords.latitude;
        let useLong = e.coords.longitude;

        console.log(document.querySelector("a-scene"));

        // let ent = document.createElement("a-entity");
        // ent.setAttribute("gltf-model", "./assets/magnemite/scene.gltf");
        // ent.setAttribute("rotation", "0 180 0");
        // ent.setAttribute("gltf-model", "./assets/magnemite/scene.gltf");

        // document.querySelector(
        //     "a-scene"
        // ).innerHTML += `<a-entity gltf-model="./assets/magnemite/scene.gltf" rotation="0 180 0" scale="0.15 0.15 0.15" gps-entity-place="longitude: ${useLong}; latitude: ${useLat};" animation-mixer look-at="[gps-camera]"/>`;

        document.querySelector("a-scene").innerHTML += <a-text
        value="This content will always face you."
        look-at="[gps-camera]"
        scale="120 120 120"
        gps-entity-place="latitude: 22.61990942334273; longitude: 88.35054311892733;"
      ></a-text>;

        console.log(document.querySelector("a-scene"));

        // console.log(useLat, useLong);

        // let key = "AHxoFnjGGgGyfjAA9kaQdpC3ID2AZ9dG";

        // console.log(useLat, useLong);

        // let places = await fetch(
        //     `https://api.tomtom.com/search/2/nearbySearch/.json?lat=${useLat}&lon=${useLong}&radius=2&key=${key}`
        // );
        // places = await places.json();

        // let placesArr = [];

        // places.results.forEach((e) => {
        //     placesArr.push({
        //         name: e.poi.name,
        //         lat: e.position.lat,
        //         lon: e.position.lon,
        //     });
        // });

        // placesArr.forEach((e) => {
        //     document.body.innerHTML += `<a-entity gltf-model="./assets/magnemite/scene.gltf" rotation="0 180 0" scale="0.15 0.15 0.15" gps-entity-place="longitude: ${e.lon}; latitude: ${e.lat};" animation-mixer />`;
        // });
    });
} else {
    document.body.innerHTML =
        "<h3>Geolocation is not supported by this browser. Try this website from another browser.</h3>";
}
