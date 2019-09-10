function showPosition(position){
  console.log(position.coords.longitude);
}
function send(){
  var win = window.open('https://script.google.com/macros/s/AKfycbwAi2yZEWJQeGJMYXlP729X9Xop4CDSeG-V-cn5vePh_GWjeNmC/exec');
  win.close();
}

function form(){
  var win2=window.open('https://docs.google.com/forms/d/e/1FAIpQLSdFWa9Y1IoQn8jadteQzrXKn2MFVJfr5VG5L8NEE0KdGbDleg/viewform?usp=sf_link');
}

navigator.geolocation.getCurrentPosition(showPosition);
