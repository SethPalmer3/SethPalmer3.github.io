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
  var win = window.open('https://script.google.com/macros/s/AKfycbwAi2yZEWJQeGJMYXlP729X9Xop4CDSeG-V-cn5vePh_GWjeNmC/exec');
  win.close();
}

navigator.geolocation.getCurrentPosition(showPosition);
