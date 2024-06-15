let key = document.getElementById("key");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    key.style.backgroundColor = "pink";
  } else if (event.key === "s") {
    key.style.backgroundColor = "orange";
  } else if (event.key === "d") {
    key.style.backgroundColor = "cyan";
  }
});

document.addEventListener("keydown", function (event) {
  let colorDiv = document.getElementById("colorDiv");

  if (!colorDiv) {
    colorDiv = document.createElement("div");
    colorDiv.id = "colorDiv";
    document.body.appendChild(colorDiv);
  }

  if (event.key === "q") {
    colorDiv.style.backgroundColor = "purple";
    colorDiv.style.display = "block";
  } else if (event.key === "w") {
    colorDiv.style.backgroundColor = "gray";
    colorDiv.style.display = "block";
  } else if (event.key === "e") {
    colorDiv.style.backgroundColor = "brown";
    colorDiv.style.display = "block";
  }
});
