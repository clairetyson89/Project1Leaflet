var map = L.map('mapID').setView([38.62677384139302, -90.19857584848421], 11.5);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);


var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.23260116577148,
          38.63953406479131
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.21371841430664,
          38.62143058055104
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.24667739868164,
          38.62531986267628
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.21509170532227,
          38.65012583524745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.25423049926758,
          38.64422681447823
        ]
      }
    }
  ]
};

var feat = L.geoJSON(geojsonFeature).addTo(map);

feat.bindPopup("<b>I'm a marker</b><br>I'm a popup.").openPopup();

var myLines = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "River Name": "Mississippi River",
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -90.16960144042969,
            38.77389304718155
          ],
          [
            -90.19020080566406,
            38.742837445589046
          ],
          [
            -90.21217346191406,
            38.718197532760165
          ],
          [
            -90.19706726074219,
            38.68604574559684
          ],
          [
            -90.18196105957031,
            38.64958958070073
          ],
          [
            -90.18333435058594,
            38.6115052496676
          ],
          [
            -90.20530700683594,
            38.58789354020368
          ],
          [
            -90.24032592773438,
            38.55514627725395
          ],
          [
            -90.2691650390625,
            38.522384090200845
          ],
          [
            -90.27122497558594,
            38.49981784551419
          ]
        ]
      }
    }
  ]
}

var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);

var parks = [{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Park": "Forest Park",
        "Dog Park": "Yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.30109405517577,
              38.64771265817877
            ],
            [
              -90.30487060546875,
              38.634036452919226
            ],
            [
              -90.26504516601562,
              38.62974534092597
            ],
            [
              -90.26710510253906,
              38.638863646894464
            ],
            [
              -90.26710510253906,
              38.64369051578083
            ],
            [
              -90.30109405517577,
              38.64771265817877
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Park": "Tower Grove Park",
        "Dog Park": "No"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.2688217163086,
              38.60962732987789
            ],
            [
              -90.2691650390625,
              38.60587134283919
            ],
            [
              -90.24307250976562,
              38.603188374582146
            ],
            [
              -90.2420425415039,
              38.60721278935162
            ],
            [
              -90.2578353881836,
              38.60909077233832
            ],
            [
              -90.25680541992188,
              38.61687046392973
            ],
            [
              -90.25920867919922,
              38.61687046392973
            ],
            [
              -90.26195526123045,
              38.6107004329194
            ],
            [
              -90.2688217163086,
              38.60962732987789
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Park": "Fairground Park",
        "Dog Park": "Yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -90.22693634033203,
              38.66983040550309
            ],
            [
              -90.22899627685547,
              38.66647967071403
            ],
            [
              -90.2171516418457,
              38.66138625351512
            ],
            [
              -90.21474838256836,
              38.66487126231641
            ],
            [
              -90.22693634033203,
              38.66983040550309
            ]
          ]
        ]
      }
    }
  ]
}];

L.geoJSON(parks, {
    style: function(feature) {
        switch (feature.properties.party) {
            case "Yes": return {color: "#C8C9C7"};
            case "No": return {color: "#003DA5"};
        }
    }
}).addTo(map);
