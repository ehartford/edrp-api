
Plotly.d3.json('/a/sys', function (response) {
  var data = [{
    x: _.map(response, function(n){return n.coords[0];}),
    y: _.map(response, function(n){return n.coords[1];}),
    z: _.map(response, function(n){return n.coords[2];}),
    text: _.map(response, function(n){return n.name;}),
    mode: 'markers',
    type: 'scatter3d',
    marker: {
      color: 'rgb(23, 190, 207)',
      size: 2
    }}
    /*, {
    alphahull: 21,
    opacity: 0.1,
    type: 'mesh3d',
    text: _.map(response, function(n){return n.name;}),
    x: _.map(response, function(n){return n.coords[0];}),
    y: _.map(response, function(n){return n.coords[1];}),
    z: _.map(response, function(n){return n.coords[2];})
  }*/];

  var layout = {
    autosize: true,
    height: 600,
    scene: {
      aspectratio: {
        x: 1,
        y: 1,
        z: 1
      },
      camera: {
        center: {
          x: 0,
          y: 0,
          z: 0
        },
        eye: {
          x: 1.25,
          y: 1.25,
          z: 1.25
        },
        up: {
          x: 0,
          y: 0,
          z: 1
        }
      },
      xaxis: {
        type: 'linear',
        zeroline: false
      },
      yaxis: {
        type: 'linear',
        zeroline: false
      },
      zaxis: {
        type: 'linear',
        zeroline: false
      }
    },
    title: 'Elite Dangerous Route Planner',
    width: 800
  };

  Plotly.newPlot('myDiv', data, layout);
});