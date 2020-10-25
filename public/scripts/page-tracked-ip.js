const ipSpan = document.getElementById('ipSpan');
const lat = ipSpan.dataset.lat;
const lng = ipSpan.dataset.lng;

//Map options
const options = {
    zoomControl: false
};

//Create Icon
const icon = L.icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [20, 28]
});

var map = L.map('map', options).setView([lat, lng], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([lat, lng], { icon }).addTo(map);

