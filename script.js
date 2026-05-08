const background =
document.getElementById("background");

/* إنشاء الخطوط المتحركة */

for(let i = 0; i < 40; i++){

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

/* حركة بسيطة للكروت */

const cards =
document.querySelectorAll(".tool-card");

cards.forEach((card,index)=>{

  card.style.animation =
  `showCard 0.8s ease forwards`;

  card.style.animationDelay =
  `${index * 0.2}s`;

});

/* إضافة الأنيميشن */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes showCard{

  from{

    opacity:0;

    transform:
    translateX(150px);
  }

  to{

    opacity:1;

    transform:
    translateX(80px);
  }

}

`;

document.head.appendChild(style);
