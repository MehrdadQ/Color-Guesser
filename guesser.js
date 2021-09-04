var colors = {};
var tries = 0;

function generate_color() {
  colors.red = Math.floor(Math.random() * 255) + 1;
  colors.blue = Math.floor(Math.random() * 255) + 1;
  colors.green = Math.floor(Math.random() * 255) + 1;

  document.body.style.backgroundColor =
    "rgb(" + colors.red + "," + colors.green + "," + colors.blue + ")";

  if (
    (colors.red > 120 && colors.blue > 120 && colors.green > 120) ||
    colors.red > 190 ||
    colors.green > 180
  ) {
    document.documentElement.style.setProperty("--main-color", "black");
  } else {
    document.documentElement.style.setProperty("--main-color", "white");
  }

  document.getElementById("results").style.display = "none";
}

window.onload = function () {
  generate_color();
};

function set_color() {
  let user_red = document.getElementById("user_red").value;
  let user_green = document.getElementById("user_green").value;
  let user_blue = document.getElementById("user_blue").value;
  let isnum =
    /^\d+$/.test(user_blue) &&
    /^\d+$/.test(user_green) &&
    /^\d+$/.test(user_red);
  if (
    user_blue > 255 ||
    user_blue < 0 ||
    user_green > 255 ||
    user_green < 0 ||
    user_red > 255 ||
    user_red < 0 ||
    isnum === false
  ) {
    // alert("Please enter a number between 1 and 255");
    alert(isnum);
    return;
  }
  // document.getElementById("result").innerText =
  //   "rgb(" + user_red + ", " + user_green + ", " + user_blue + ")";
  document.getElementById("user-guess").style.backgroundColor =
    "rgb(" + user_red + ", " + user_green + ", " + user_blue + ")";

  document.getElementById("result").innerText =
    "rgb(" + user_red + ", " + user_green + ", " + user_blue + ")";

  document.getElementById("actual-rgb").innerText =
    "rgb(" + colors.red + ", " + colors.green + ", " + colors.blue + ")";

  var red_error = Math.abs(colors.red - user_red);
  var green_error = Math.abs(colors.green - user_green);
  var blue_error = Math.abs(colors.blue - user_blue);
  var total_error = red_error + green_error + blue_error;

  // document.getElementById("red-error").innerText = "Red Error: " + red_error;
  // document.getElementById("green-error").innerText =
  //   "Green Error: " + green_error;
  // document.getElementById("blue-error").innerText = "Blue Error: " + blue_error;
  // document.getElementById("total-error").innerText =
  //   "Total Error: " + total_error;

  const msg = document.getElementById("message");
  if (total_error < 10) {
    msg.innerText = "how??";
  }

  document.getElementById("results").style.display = "flex";
}

function reset() {
  generate_color();
  document.getElementById("user_red").value = "";
  document.getElementById("user_green").value = "";
  document.getElementById("user_blue").value = "";
  document.getElementById("user-guess").style.backgroundColor = "transparent";
  document.getElementById("result").innerText = "";
  document.getElementById("actual-rgb").innerText = "";
  document.getElementById("green-error").innerText = "";
  document.getElementById("red-error").innerText = "";
  document.getElementById("blue-error").innerText = "";
  document.getElementById("total-error").innerText = "";

  document.getElementById("user_red").focus();
}

document.getElementById("submit").addEventListener("click", set_color);
document.getElementById("reset").addEventListener("click", reset);

document.addEventListener("keydown", function onEvent(event) {
  if (event.key === "Enter") {
    set_color();
  }

  if (event.key === " ") {
    reset();
  }
});

var height = document.documentElement.clientWidth;
if (height < 905) {
  document.getElementById("submit").style["margin"] = "auto 250px";
}
