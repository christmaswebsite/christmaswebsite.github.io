
/* --------------------------
 * GLOBAL VARS
 * -------------------------- */
// The date you want to count down to
var targetDate = new Date("2018/09/07 00:00:00");

// Other date related variables
var days;
var hrs;
var min;
var sec;

/* --------------------------
 * ON DOCUMENT LOAD
 * -------------------------- */
$(function() {
   // Calculate time until launch date
   timeToLaunch();
  // Transition the current countdown from 0
  numberTransition('#days .number', days, 1000, 'easeOutQuad');
  numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
  numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
  numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
  // Begin Countdown
  setTimeout(countDownTimer,1001);
});

/* --------------------------
 * FIGURE OUT THE AMOUNT OF
   TIME LEFT BEFORE LAUNCH
 * -------------------------- */
function timeToLaunch(){
    // Get the current date
    var currentDate = new Date();

    // Find the difference between dates
    var diff = (currentDate - targetDate)/1000;
    var diff = Math.abs(Math.floor(diff));

    // Check number of days until target
    days = Math.floor(diff/(24*60*60));
    sec = diff - days * 24*60*60;

    // Check number of hours until target
    hrs = Math.floor(sec/(60*60));
    sec = sec - hrs * 60*60;

    // Check number of minutes until target
    min = Math.floor(sec/(60));
    sec = sec - min * 60;
}

/* --------------------------
 * DISPLAY THE CURRENT
   COUNT TO LAUNCH
 * -------------------------- */
function countDownTimer(){

    // Figure out the time to launch
    timeToLaunch();

    // Write to countdown component
    $( "#days .number" ).text(days);
    $( "#hours .number" ).text(hrs);
    $( "#minutes .number" ).text(min);
    $( "#seconds .number" ).text(sec);

    // Repeat the check every second
    setTimeout(countDownTimer,1000);
}

/* --------------------------
 * TRANSITION NUMBERS FROM 0
   TO CURRENT TIME UNTIL LAUNCH
 * -------------------------- */
function numberTransition(id, endPoint, transitionDuration, transitionEase){
  // Transition numbers from 0 to the final number
  $({numberCount: $(id).text()}).animate({numberCount: endPoint}, {
      duration: transitionDuration,
      easing:transitionEase,
      step: function() {
        $(id).text(Math.floor(this.numberCount));
      },
      complete: function() {
        $(id).text(this.numberCount);
      }
   });
};

function Password(){
  var password = "please";
  var x = prompt("Enter in the password "," ");
  if (x.toLowerCase() == password) {
    alert("Come right in \n \n You've entered in the right password");
    window.location = "index.htm";
  }
  else {
    window.location = "bad.htm";
  }
}
var password_keys = [
  "abcdef",
  "123456",
  "qwerty",
  "1a2b3c",
];

var password_inputs = document.querySelectorAll("input[type='password']");

for (var i = 0; i < password_inputs.length; i++) {
  var input = password_inputs[i];

  input.addEventListener("keydown", function(event) {
    var key_code = event.which;
    if (key_code == 13) {
      event.preventDefault();

      if (this.value == password_keys[this.parentNode.attributes["data-page-id"].nodeValue]) {
        this.parentNode.classList.remove("visible");
        var open_page = document.querySelectorAll(".page[data-page-id='"+ this.attributes["data-show-page"].nodeValue +"']")[0];

        open_page.classList.add("visible");
        console.log(this.parentNode, "correct pw");
      }
    }
  });
}
