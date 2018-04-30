
// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $Input = document.querySelector("#search");

var $searchBtn1 = document.querySelector("#datetime");
var $searchBtn2 = document.querySelector("#city");
var $searchBtn3 = document.querySelector("#state");
var $searchBtn4 = document.querySelector("#country");
var $searchBtn5 = document.querySelector("#shape");


var $searchBtn0 = document.querySelector("#reset");
$searchBtn0.addEventListener("click", reset);


$searchBtn1.addEventListener("click", datetime);
$searchBtn2.addEventListener("click", city);
$searchBtn3.addEventListener("click", state);
$searchBtn4.addEventListener("click", country);
$searchBtn5.addEventListener("click", shape);

// Assigning variable to the dataset.
var filter = dataSet;

renderTable();

// reset function to reset values.

function reset()
{
  $Input.value = "";
  renderTable();
}

function renderTable()
 {
  $tbody.innerHTML = "";
  for (var i = 0; i < filter.length; i++) 
  {
    // Get get the current address object and its fields
    var address = filter[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) 
    {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }}

function datetime() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filteritem = $Input.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "datetime" matches the filter
  filter = filter.filter(function(address) {
    var addressState = address.datetime.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filteritem;
  });
  renderTable();
}

function city() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filteritem = $Input.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "city" matches the filter
  filter = filter.filter(function(address) {
    var addressState = address.city.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filteritem;
  });
  renderTable();
}

function state() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filteritem = $Input.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filter = filter.filter(function(address) {
    var addressState = address.state.toLowerCase();
    console.log(address.state)

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filteritem;
  });
  renderTable();
}

function country() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filteritem = $Input.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "country" matches the filter
  filter = filter.filter(function(address) {
    var addressState = address.country.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filteritem;
  });
  renderTable();
}

function shape() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filteritem = $Input.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "shape" matches the filter
  filter = filter.filter(function(address) {
    var addressState = address.shape.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filteritem;
  });
  renderTable();
}