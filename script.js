var map = L.map('map').setView([29.74487111897466, -99.59174995408246], 3);

 L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri',
	maxZoom: 13
}).addTo(map);


$.getJSON("https://raw.githubusercontent.com/clairetyson89/Project1Leaflet/main/aqua.geojson",function(data){
	var bodyIcon = L.icon({
		iconUrl: "https://cdn.iconscout.com/icon/premium/png-256-thumb/fish-bowl-2792692-2325270.png",
		iconSize: [30,30]
	});
    L.geoJson(data ,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: bodyIcon});
    }
  } ).addTo(map);
});
