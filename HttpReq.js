function includeHTML(elementId, file) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(elementId).innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", file, true);
  xhttp.send();
}
