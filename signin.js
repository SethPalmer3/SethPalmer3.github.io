function showPosition(position){
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);
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
  var win = window.open('https://script.google.com/macros/s/AKfycbwAi2yZEWJQeGJMYXlP729X9Xop4CDSeG-V-cn5vePh_GWjeNmC/exec');
  win.close();
}

function showForm(position){
  if (position.coords.longitude=-112.6925169){
    var win2=window.open('https://docs.google.com/forms/d/e/1FAIpQLSdFWa9Y1IoQn8jadteQzrXKn2MFVJfr5VG5L8NEE0KdGbDleg/viewform?usp=sf_link');
  }
  
}

navigator.geolocation.getCurrentPosition(showPosition);
