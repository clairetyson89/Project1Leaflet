var map = L.map('mapID').setView([30.16226132977644, -98.83087243219747], 4);
//view is set to the middle of Texas

 //add in the basemap (I used the Esri Ocean basemap because of the water theme!)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
  minZoom: 1,
	maxZoom: 13
}).addTo(map);

//load fish bowl icon
var fishIcon = L.icon({
  iconUrl:
    "https://cdn.iconscout.com/icon/premium/png-256-thumb/fish-bowl-2792692-2325270.png",
  iconSize: [30,30]
	});

//adding in aquarium markers, icon, and popups for each aquarium
var marker1 = L.marker([47.60781228494069,-122.34323501586913], {icon: fishIcon}).addTo(map);
//Seattle Aquarium
marker1.bindPopup("<b>Seattle Aquarium</b><br>Google Rating: 4.4").openPopup();

var marker2 = L.marker([46.90665289084876,-124.11460876464844], {icon: fishIcon}).addTo(map);
//Westport Aquarium
marker2.bindPopup("<b>Westport Aquarium</b><br>Google Rating: 4.3").openPopup();

var marker3 = L.marker([44.61393394730626,-124.04663085937499], {icon: fishIcon}).addTo(map);
//Oregon Coast Aquarium
marker3.bindPopup("<b>Oregon Coast Aquarium</b><br>Google Rating: 4.3").openPopup();

var marker4 = L.marker([37.80544394934271,-122.44262695312501], {icon: fishIcon}).addTo(map);
//Aquarium of the Bay
marker4.bindPopup("<b>Aquarium of the Bay</b><br>Google Rating: 4.2").openPopup();

var marker5 = L.marker([36.61552763134925,-121.937255859375], {icon: fishIcon}).addTo(map);
//Monterey Bay Aquarium
marker5.bindPopup("<b>Monterey Bay Aquarium</b><br>Google Rating: 4.7").openPopup();

var marker6 = L.marker([33.75631505992707,-118.2513427734375], {icon: fishIcon}).addTo(map);
//Aquarium of the Pacific
marker6.bindPopup("<b>Aquarium of the Pacific</b><br>Google Rating: 4.6").openPopup();

var marker7 = L.marker([32.83690450361482,-117.27630615234374], {icon: fishIcon}).addTo(map);
//Birch Aquarium at Scripps Institution of Oceanography
marker7.bindPopup("<b>Birch Aquarium at Scripps Institution of Oceanography</b><br>Google Rating: 4.5").openPopup();

var marker8 = L.marker([27.732160709580906,-97.3828125], {icon: fishIcon}).addTo(map);
//Texas State Aquarium
marker8.bindPopup("<b>Texas State Aquarium</b><br>Google Rating: 4.6").openPopup();

var marker9 = L.marker([29.29598055871569,-95.042724609375], {icon: fishIcon}).addTo(map);
//Sea Center Texas
marker9.bindPopup("<b>Sea Center Texas</b><br>Google Rating: 4.7").openPopup();

var marker10 = L.marker([29.954934549656144,-89.98901367187499], {icon: fishIcon}).addTo(map);
//Audubon Aquarium of the Americas
marker10.bindPopup("<b>Audubon Aquarium of the Americas</b><br>Google Rating: 4.4").openPopup();

var marker11 = L.marker([24.56710835257599,-81.7822265625], {icon: fishIcon}).addTo(map);
//Key West Aquarium
marker11.bindPopup("<b>Key West Aquarium</b><br>Google Rating: 4.1").openPopup();

var marker12 = L.marker([31.92885480180959,-81.01318359375], {icon: fishIcon}).addTo(map);
//UGA Marine Education Center and Aquarium
marker12.bindPopup("<b>UGA Marine Education Center and Aquarium</b><br>Google Rating: 4.5").openPopup();

var marker13 = L.marker([35.913522985137384,-75.83038330078125], {icon: fishIcon}).addTo(map);
//North Carolina Aquarium on Roanoke Island
marker13.bindPopup("<b>North Carolina Aquarium on Roanoke Island</b><br>Google Rating: 4.6").openPopup();

var marker14 = L.marker([39.27478966170308,-76.56372070312499], {icon: fishIcon}).addTo(map);
//National Aquarium
marker14.bindPopup("<b>National Aquarium</b><br>Google Rating: 4.6").openPopup();

var marker15 = L.marker([40.59727063442024,-73.9874267578125], {icon: fishIcon}).addTo(map);
//New York Aquarium
marker15.bindPopup("<b>New York Aquarium</b><br>Google Rating: 4.2").openPopup();

var marker16 = L.marker([42.39912215986002,-71.0540771484375], {icon: fishIcon}).addTo(map);
//New England Aquarium
marker16.bindPopup("<b>New England Aquarium</b><br>Google Rating: 4.5").openPopup();

var marker17 = L.marker([43.87017822557581,-69.58740234375], {icon: fishIcon}).addTo(map);
//Maine State Aquarium
marker17.bindPopup("<b>Maine State Aquarium</b><br>Google Rating: 4.3").openPopup();


//Kelp Layer -- call the file from github ------
$.getJSON("https://raw.githubusercontent.com/clairetyson89/Project1Leaflet/main/kelp.geojson",function(data){
L.geoJson(data).addTo(map);

//add in popup for kelp info
var datalayer = L.geoJson(data ,{onEachFeature: function(feature, featureLayer) {featureLayer.bindPopup(feature.properties.Info);
}
}).addTo(map);
map.fitBounds(datalayer.getBounds());
});

/* this didn't work :(
//change the color based on rating (kelp density)
L.geoJSON({
    style: function(feature) {
        switch (feature.properties.Rating) {
            case '0': return {color: "#FAFDFA"};
            case '1': return {color: "#C7F5C7"};
            case '2': return {color: "#78DB78"};
            case '3': return {color: "#21A321"};
        }
    }
}).addTo(map);*/


