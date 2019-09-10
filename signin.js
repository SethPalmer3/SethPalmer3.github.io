function showPosition(position){
  console.log(position.coords.longitude);
}

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}
function send(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://script.google.com/macros/s/AKfycbwAi2yZEWJQeGJMYXlP729X9Xop4CDSeG-V-cn5vePh_GWjeNmC/exec", true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);
}

navigator.geolocation.getCurrentPosition(showPosition);
