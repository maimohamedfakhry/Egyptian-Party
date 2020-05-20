var width = $(document).outerWidth(true);
var widthnavside = $(".navvleft").outerWidth(true);
var calwidth = width - widthnavside;

$(".open").click(function () {
  $(".imagehome").css("width", calwidth);
  $(".navvleft").css("left", "0px");
});
$(".close").click(function () {
  $(".imagehome").css("width", "100%");
  $(".navvleft").css("left", "-" + widthnavside);
});
////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  $("#acc .content2").eq(0).slideDown();
});
$("#acc h3").click(function () {
  var val = $(this).next();
  val.slideToggle(500);
  $("#acc .content2").not(val).slideUp(500);
});
////////////////////////////////////////////////////////////////////////
let second = setInterval(mytimer, 1000);
let counter = 0;
let myminite = 0;
let myhours = 0;
let mydays = -520;
document.querySelector("#ite3 h3").innerHTML = "0 - " + myminite + " m";
document.querySelector("#ite2 h3").innerHTML = "0 - " + myhours + " h";
document.querySelector("#ite1 h3").innerHTML = mydays + " D";
function mytimer() {
  counter++;
  if (counter == 60) {
    myminite++;
    document.querySelector("#ite4 h3").innerHTML = "00 s";
    document.querySelector("#ite3 h3").innerHTML = "0 - " + myminite + " s";
    if (myminite == 60) {
      document.querySelector("#ite3 h3").innerHTML = "00 s";
      myminite = 0;
      myhours++;
      document.querySelector("#ite3 h3").innerHTML = "0 - " + myhours + " s";
      if (myhours == 24) {
        myhours = 0;
        document.querySelector("#ite2 h3").innerHTML = "00 s";
        mydays++;
        document.querySelector("#ite3 h3").innerHTML = "0 - " + mydays + " s";
      }
    }
    counter = 0;
  } else {
    document.querySelector("#ite4 h3").innerHTML = "0 - " + counter + " s";
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
var character = 100;
var valuetextarea;

document.querySelector(".charr").innerHTML = character;

/////////////////////////////////////////////////////////////
$("textarea").keyup(function () {
  var string = document.querySelector("textarea").value;
  var number = string.length;
  character = 100 - number;
  document.querySelector(".charr").innerHTML = character;

  valuetextarea = string;
});
////////////////////////////////////////////////////////////////////////////
$("textarea").keypress(function (e) {
  var string = document.querySelector("textarea").value;
  var number = string.length;
  character = 100 - number;
  if (character == 0) {
    $(".alrt").css("display", "block");
    return false;
  } else if (character > 0) {
    return true;
  }
});
$("textarea").keydown(function (e) {
  var keyID = e.keyCode;
  if (keyID == 8) {
    var string = document.querySelector("textarea").value;
    var number = string.length;
    character = 100 - number;
  }
  if (character >= 0) {
    $(".alrt").css("display", "none");
  }
});
