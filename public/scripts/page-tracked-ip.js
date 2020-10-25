//Map options
const options = {
    zoomControl: false
};

var map = L.map('map', options).setView([51.505, -0.09], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([51.5, -0.09]).addTo(map);