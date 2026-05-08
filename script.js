// إنشاء خطوط الخلفية المتحركة
const background = document.getElementById("background");

for (let i = 0; i < 35; i++) {
  const line = document.createElement("div");
  line.classList.add("line");
  line.style.left = Math.random() * 100 + "vw";
  line.style.animationDuration = (Math.random() * 5 + 3) + "s";
  line.style.opacity = Math.random() * 0.7 + 0.2;
  line.style.height = (Math.random() * 250 + 100) + "px";
  background.appendChild(line);
}

// إذا أردت إضافة فيديوهات حقيقية فيما بعد، استخدم هذا الكود
// مثال: يمكنك وضع رابط فيديو يوتيوب لكل أداة

/*
const videos = [
  { id: "video1", url: "https://www.youtube.com/embed/xxxxx" },
  { id: "video2", url: "https://www.youtube.com/embed/yyyyy" },
  { id: "video3", url: "https://www.youtube.com/embed/zzzzz" },
  { id: "video4", url: "https://www.youtube.com/embed/wwwww" }
];

videos.forEach(video => {
  const container = document.getElementById(video.id);
  if (container && video.url) {
    container.innerHTML = `<iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>`;
  }
});
*/

console.log("Mr.D.B Tools - Website Loaded ✅");
