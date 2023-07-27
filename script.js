// Initialize the map
var map = L.map('map').setView([56.9496, 24.1052], 13);

// Add the map tile layer (you may need to replace the URL with the appropriate tile source)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Event listener for when the map is clicked
map.on('click', function(e) {
  var lat = e.latlng.lat;
  var lng = e.latlng.lng;

  // Show the report form with the coordinates filled in
  showReportForm(lat, lng);
});

function showReportForm(latitude, longitude) {
  // Code to show the report form pop-up and fill in the coordinates
  // You can use JavaScript to create DOM elements and show the form as a pop-up modal
}

// Add an event listener to the form submission
document.getElementById("reportForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting via traditional HTTP request

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var location = document.getElementById("location").value;
  var details = document.getElementById("details").value;

  // Create an object with the form data
  var formData = {
    name: name,
    email: email,
    location: location,
    details: details
  };

  // Send the form data to the backend using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/report", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Report submitted successfully
        alert("Report submitted successfully!");
        // You can redirect the user or perform other actions as needed
      } else {
        // Error handling
        alert("Error submitting the report. Please try again later.");
      }
    }
  };
  xhr.send(JSON.stringify(formData));
});
