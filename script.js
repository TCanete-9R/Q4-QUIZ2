function analyzeScore() {
  // Get values
  var f = Number(document.getElementById('filipino').value);
  var e = Number(document.getElementById('english').value);
  var s = Number(document.getElementById('science').value);
  var m = Number(document.getElementById('math').value);
  var soc = Number(document.getElementById('social').value);

  // Calculate average
  var avg = (f + e + s + m + soc) / 5;

  // Determine rating
  var rating = "";
  if (avg >= 94) {
    rating = "Excellent";
  } else if (avg >= 87) {
    rating = "Above Satisfactory";
  } else if (avg >= 80) {
    rating = "Satisfactory";
  } else if (avg >= 75) {
    rating = "Needs Improvement";
  } else {
    rating = "Poor";
  }

  // Show result
  window.alert("Your average is " + avg.toFixed(2) + " - " + rating);
}