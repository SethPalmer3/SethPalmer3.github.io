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

/*var client = HttpClient();
client.get("https://script.google.com/macros/s/AKfycbwQHZTAQxj3VpQ10U1GrlT-UY1zKD67kE9kfog7glKO61ksfzIJ/exec", function(respons){
  console.log(respons);
});*/

navigator.geolocation.getCurrentPosition(showPosition);
