function pintar(color) {
  color.style.backgroundColor = "yellow";
}

let ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";
ele.addEventListener("click", () => pintar(ele));
