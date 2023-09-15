require([
  "esri/config",
  "esri/Map",
  "esri/views/SceneView",
  "esri/Graphic",
  "esri/geometry/Point",
], (esriConfig, Map, SceneView, Graphic, Point) => {
  esriConfig.apiKey =
    "AAPK6c828a943be04f099788653fe34e553cmg3-f8tJr_TYm-UdRrf70zrhLRZOZ9JOaR0UVeG7cGRabHlkOQ2-_JasvGvWk--7";

  const map = new Map({
    basemap: "hybrid",
    ground: "world-elevation",
  });

  var view = new SceneView({
    container: "map", // Reference to the scene div created in step 5
    map: map, // Reference to the map object created before the scene
  })
    .when((view) => {
      view.goTo({
        center: [65.08086, 41.86843],
        zoom: 6,
      });

      var locations = [
        { name: "Location 1", longitude: 58.28617, latitude: 43.271111 },
        { name: "Location 2", longitude: 58.19976, latitude: 43.017959 },
        { name: "Location 3", longitude: 65.268902, latitude: 39.170431 },
        { name: "Location 3", longitude: 65.8097, latitude: 39.2767 },
        { name: "Location 3", longitude: 65.80549, latitude: 38.45954 },
      ];

      // Add location points to the map
      locations.forEach(function (location) {
        var point = new Point({
          longitude: location.longitude,
          latitude: location.latitude,
        });

        var marker = new Graphic({
          geometry: point,
          symbol: {
            type: "picture-marker",
            url: "img/neft.png",
            window: "40px",
            heihgt: "60px",
          },
          attributes: location,
          popupTemplate: {
            title: "{name}",
            content: "Longitude: {longitude}<br>Latitude: {latitude}",
          },
        });

        view.graphics.add(marker);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

// var points = [
//   {
//     longitude: 58.28617,
//     latitude: 43.271111,
//   },
//   {
//     longitude: 58.19976,
//     latitude: 43.017959,
//   },
//   {
//     longitude: 65.268902,
//     latitude: 39.170431,
//   },
//   {
//     longitude: 65.8097,
//     latitude: 39.2767,
//   },
//   {
//     longitude: 65.80549,
//     latitude: 38.45954,
//   },
//   // Add more points here...
// ];
