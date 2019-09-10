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
  xhr.open("POST", 'https://script.google.com/macros/s/AKfycbwAi2yZEWJQeGJMYXlP729X9Xop4CDSeG-V-cn5vePh_GWjeNmC/exec', true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  xhr.send("hello");
}

navigator.geolocation.getCurrentPosition(showPosition);
