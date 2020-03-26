const NAME = "Marco";
const WELCOME_MESSAGE_TEMPLATE = ["night", "morning", "afternoon", "evening"];

// Setup welcome message
// Simply dividing current hours by 6 proves to be a good enough aproximation of how late it is.
let curHours = new Date().getHours();
curHours = Math.floor(curHours / 6);
if (curHours == 4) curHours = 3;

let welcome = "Good " + WELCOME_MESSAGE_TEMPLATE[curHours] + ", " + NAME;
document.getElementById("welcome-string").innerHTML = welcome;

var span = document.getElementById('time');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  if (s < 10) {
	s = "0" + s;
  }
  if (m < 10) {
	m = "0" + m;
  }
  if (h < 10) {
	h = "0" + h;
  }
  span.textContent = h + ":" + m + ":" + s;
}

setInterval(time, 1000);

var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("date").innerHTML = days[d.getDay()]+","+" "+months[d.getMonth()]+" "+(d.getDate())+", "+" "+(d.getFullYear());
