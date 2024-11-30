var a = document.querySelector("button");
var b = document.getElementById("bulb");
var flag = 0;

a.addEventListener("click", function () {
  if (flag == 0) {
    b.style.backgroundColor = "yellow";
    flag = 1;
    a.innerHTML = "off";
  } else {
    b.style.backgroundColor = "transparent";
    flag = 0;
    a.innerHTML = "on";
  }
});
