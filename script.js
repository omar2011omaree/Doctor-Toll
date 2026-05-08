const background =
document.getElementById("background");

for(let i = 0; i < 35; i++){

  const line =
  document.createElement("div");

  line.classList.add("line");

  line.style.left =
  Math.random() * 100 + "vw";

  line.style.animationDuration =
  (Math.random() * 5 + 3) + "s";

  line.style.opacity =
  Math.random();

  line.style.height =
  (Math.random() * 250 + 100) + "px";

  background.appendChild(line);
}
