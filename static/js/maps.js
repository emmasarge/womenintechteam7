let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.347485658164636, lng: -6.2743021937092776 },
    zoom: 8,
  });
}