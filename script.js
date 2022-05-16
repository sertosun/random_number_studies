let result = document.getElementById("result");

function myFunc(min, max) {
  let number = Math.floor(Math.random() * (1000 - 1)) + 1;
  result.innerHTML = number;
}
