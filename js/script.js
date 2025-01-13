const cursor = document.querySelector('.custom-cursor');
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.2;

function updateCursor() {
  currentX += (targetX - currentX) * speed;
  currentY += (targetY - currentY) * speed;

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  cursor.style.left = `${currentX + scrollX}px`;
  cursor.style.top = `${currentY + scrollY}px`;

  requestAnimationFrame(updateCursor);
}

document.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

updateCursor();

const header = document.querySelector('header');

document.addEventListener("scroll", () => {
  if(window.scrollY >= 150) {
    header.style.background = "#0d0d0d52";
    header.style.transition = "all .5s ease-in-out";
  } else {
    header.style.background = "transparent";
    header.style.transition = "all .5s ease-in-out";
  }
});
