// Initialize and add the map
function initMap() {
    // The location of Uluru
    const lat = -1.2921;
    const lng = 36.8219;
    const nairobi = { lat: lat, lng: lng };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("index_map"), {
        zoom: 6,
        center: nairobi,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: nairobi,
        map: map,
    });
}

window.initMap = initMap;