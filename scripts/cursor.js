const cursor = document.querySelector('.cursor');

const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  const cursorWidth = cursor.offsetWidth;
  const cursorHeight = cursor.offsetHeight;

  cursor.style.left = (mouseX - (cursorWidth / 2)) + "px";
  cursor.style.top = (mouseY - (cursorHeight / 2)) + "px";
  cursor.style.transform = `translate3d(${mouseX - (cursorWidth / 2)}px, ${mouseY - (cursorHeight / 2)}px, 0)`;
}

window.addEventListener('mousemove', positionElement);
