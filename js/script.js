const cursor = document.querySelector('.custom-cursor');
const cursorOutline = document.querySelector('.custom-cursor-outline');

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
const speed = 0.2;

let targetXOutline = 0;
let targetYOutline = 0;

document.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;

  targetXOutline = e.clientX;
  targetYOutline = e.clientY;
});

function updateCursor() {
  currentX += (targetX - currentX) * speed;
  currentY += (targetY - currentY) * speed;

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  cursor.style.left = `${currentX + scrollX}px`;
  cursor.style.top = `${currentY + scrollY}px`;

  requestAnimationFrame(updateCursor);
}

function updateCursorOutline() {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  cursorOutline.style.left = `${targetXOutline + scrollX}px`;
  cursorOutline.style.top = `${targetYOutline + scrollY}px`;

  requestAnimationFrame(updateCursorOutline);
}

updateCursor();
updateCursorOutline();

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

document.addEventListener("scroll", ()=> {
  console.log(window.scrollY);
  
})

const scrollToY = (Y) => {
  window.scrollTo({
    top: Y,
    behavior: 'smooth'
  })
}