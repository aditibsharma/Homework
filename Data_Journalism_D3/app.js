//= ==============================================================================================================
//Using the D3 techniques, created a scatter plot that represents each state with circle elements. This is coded in 
//app.js file and data is pulled from data.csv by using the d3.csv function.
//= ==============================================================================================================


// Step 1: Set up our chart
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

// Step 2: Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
//= =========================================================================================================================
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Step 3: Import Data
d3.csv("./data/data.csv", function (err, unemploymentData) {
  if (err) throw err;

  // Step 4: Parse Data/Cast as numbers
   // ==============================
   unemploymentData.forEach(function (data) {
    data.UnemploymentRate = +data.UnemploymentRate;
    data.ConfidenceLimitHigh = parseInt(data.ConfidenceLimitHigh);
  });

  // Step 5: Create scale functions
  // ==============================
  var xLinearScale = d3.scaleLinear()
    .domain([0, d3.max(unemploymentData, d => d.UnemploymentRate)])
    .range([0, width]);

  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(unemploymentData, d => d.ConfidenceLimitHigh)])
    .range([height, 0]);

  // Step 6: Create axis functions
  // ==============================
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Step 7: Append Axes to the chart
  // ==============================
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  chartGroup.append("g")
    .call(leftAxis);

   // Step 8: Create Circles
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

  // step 9: Add text on the cicles
  //= ==================================
  var textGroup = chartGroup.selectAll("#circleText")
  .data(unemploymentData)
  .enter()
  .append("text")
  .text(d => d.stateAbbr)
  .attr("id", "circleText")
  .attr("x", d => xLinearScale(d.UnemploymentRate)-5)
  .attr("y", d => yLinearScale(d.ConfidenceLimitHigh)+4)
  .attr("stroke-width", "1")
  .attr("fill", "white")
  .attr("font-size", 8);
  

  // Step 10: Initialize tool tip
  // ==============================
  var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([90, -60])
    .html(d =>
      `${d.state}<br>Unemployment Rate: ${d.UnemploymentRate}<br>Confidence Limit: ${d.ConfidenceLimitHigh}`
    );

  // Step 11: Create tooltip in the chart
  // ==============================
  chartGroup.call(toolTip);

  // Step 12: Create event listeners to display and hide the tooltip
  // ==============================
  circlesGroup.on("mouseover", function (data) {
      toolTip.show(data);
    })
    // onmouseout event
    .on("mouseout", function (data, index) {
      toolTip.hide(data);
    });

  // Step 13: Create axes labels
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
    .text("Unemployment Rate for women under 25-44 years of age");
});

// Step 14: Add the Chart Analysis description for the chart
//var chartAnalysis = d3.select("#chartAnalysis")
  //  .append("text")
    //   .text(` This chart represents a relation between the unemployed women of 25-44 years of age and the their hight confidence limit in various staes of USA.
     //  Mississippi has the highest rate of unemployment as 9.7 for women from 25-44 years of age with an high confidence limit of 41.
     //  North Dakota has the lowest rate of unemployment as 2.7 for women from 25-44 years of age with an high confidence limit of 63`
    // );

