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

  document.getElementById("result").innerText =
    "rgb(" + user_red + ", " + user_green + ", " + user_blue + ")";
  document.getElementById("user-guess").style.backgroundColor =
    "rgb(" + user_red + ", " + user_green + ", " + user_blue + ")";

  document.getElementById("result").innerText =
    "rgb(" + user_red + ", " + user_green + ", " + user_blue + ")";

  document.getElementById("actual-rgb").innerText =
    "rgb(" + colors.red + ", " + colors.green + ", " + colors.blue + ")";

  if (
    (user_red > 120 && user_blue > 120 && user_green > 120) ||
    user_red > 190 ||
    user_green > 180
  ) {
    document.documentElement.style.setProperty("--user-color", "black");
  } else {
    document.documentElement.style.setProperty("--user-color", "white");
  }

  document.getElementById("results").style.display = "flex";
}

function reset() {
  generate_color();
  document.getElementById("user_red").focus();
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
}

document.getElementById("rgb-form").addEventListener("submit", set_color);
document.getElementById("reset").addEventListener("click", reset);

document.addEventListener("keydown", function onEvent(event) {
  if (event.key === " ") {
    reset();
  }
});

var form = document.getElementById("rgb-form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

var height = document.documentElement.clientWidth;
if (height < 905) {
  document.getElementById("submit").style["margin"] = "auto 250px";
}
