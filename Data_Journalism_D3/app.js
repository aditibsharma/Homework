
// Set up our chart
//= ================================
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20 ,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("./data/data.csv", function (err, unemploymentData) {
  if (err) throw err;

  // Step 1: Parse Data/Cast as numbers
   // ==============================
   unemploymentData.forEach(function (data) {
    data.UnemploymentRate = +data.UnemploymentRate;
    data.ConfidenceLimitHigh = parseInt(data.ConfidenceLimitHigh);
  });

  // Step 2: Create scale functions
  // ==============================
  var xLinearScale = d3.scaleLinear()
    .domain([0, d3.max(unemploymentData, d => d.UnemploymentRate)])
    .range([0, width]);

  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(unemploymentData, d => d.ConfidenceLimitHigh)])
    .range([height, 0]);

  // Step 3: Create axis functions
  // ==============================
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Step 4: Append Axes to the chart
  // ==============================
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  chartGroup.append("g")
    .call(leftAxis);

   // Step 5: Create Circles
  // ==============================
  var circlesGroup = chartGroup.selectAll("circle")
  .data(unemploymentData)
  .enter()
  .append("circle")
  .attr("cx", d => xLinearScale(d.UnemploymentRate))
  .attr("cy", d => yLinearScale(d.ConfidenceLimitHigh))
  .attr("r", "15")
  .attr("fill", "blue")
  .attr("opacity", ".5")
  

  // Step 6: Initialize tool tip
  // ==============================
  var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([90, -60])
    .html(d =>
      `${d.state}<br>Unemployment Rate: ${d.UnemploymentRate}<br>High Confidence Level(Female): ${d.ConfidenceLimitHigh}`
    );

  // Step 7: Create tooltip in the chart
  // ==============================
  chartGroup.call(toolTip);

  // Step 8: Create event listeners to display and hide the tooltip
  // ==============================
  circlesGroup.on("mouseover", function (data) {
      toolTip.show(data);
    })
    // onmouseout event
    .on("mouseout", function (data, index) {
      toolTip.hide(data);
    });

  // Create axes labels
  chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left + 40)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .attr("class", "axisText")
    .text("Confidence Limit High");

  chartGroup.append("text")
    .attr("transform", `translate(${width/2}, ${height + margin.top + 30})`)
    .attr("class", "axisText")
    .text("Unemployement Rate for women under 25-44 years of age");
});



