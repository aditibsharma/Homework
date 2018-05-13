function buildPlot() {
    /* data route */
      var name_url = "/names";
      Plotly.d3.json(name_url, function(error, data) {
          
          if (error) return console.warn(error);
          names = Object.values(data);
          for (var n = 0; n < names.length; n++) {
              var $option = document.createElement("option");
              var $selection = document.querySelector("#selSample")
              $option.value = names[n];
              $option.innerHTML = names[n];
              $selection.appendChild($option);
          };
      })