// After initializing your map...
map.on('load', function() {
    // Define the coordinates for the corners of your image [top-left, top-right, bottom-right, bottom-left]
    const imageBounds = [
      [-80.0, 45.0],  // top-left (lng, lat)
      [-70.0, 45.0],  // top-right
      [-70.0, 40.0],  // bottom-right
      [-80.0, 40.0]   // bottom-left
    ];
  
    // Add an image source with the georeferenced image
    map.addSource('historical-map', {
      type: 'image',
      url: 'https://cornellcolab.net/EarlyAmericanMaps/files/original/88629d990701955185ca05a21f6926ce.jpg',
      coordinates: imageBounds
    });
  
    // Add a raster layer to display the image
    map.addLayer({
      id: 'historical-map-layer',
      type: 'raster',
      source: 'historical-map',
      paint: {
        'raster-opacity': 0.7  // Adjust opacity as needed
      }
    });
  });

  map.addSource('movement-area', {
    type: 'geojson',
    data: 'path/to/your/geojson-file.geojson'
  });
  
  map.addLayer({
    id: 'movement-area-layer',
    type: 'fill', // use 'line' for routes
    source: 'movement-area',
    paint: {
      'fill-color': '#888888',
      'fill-opacity': 0.4
    }
  });
  