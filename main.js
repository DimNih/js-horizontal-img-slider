let mousePos = { x: 0, y: 0 }
let lastMousePos = { x: 0, y: 0 }
let isMouseDown = false
document.addEventListener("mousemove", (event) => {
  mousePos.x = event.clientX;
  mousePos.y = event.clientY;
})
document.addEventListener("touchmove", (event) => {
  mousePos.x = event.touches[0].clientX;
  mousePos.y = event.touches[0].clientY;
})
document.addEventListener("mousedown", (event) => {
  isMouseDown = true;
  lastMousePos.x = event.clientX;
  lastMousePos.y = event.clientY;
})
document.addEventListener("touchstart", (event) => {
  isMouseDown = true;
  lastMousePos.x = event.touches[0].clientX;
  lastMousePos.y = event.touches[0].clientY;
})
document.addEventListener("mouseup", () => isMouseDown = false)
document.addEventListener("touchend", () => isMouseDown = false)

let scrollPosition = 0;
let targetPosition = 0;
let targetVelocity = 0;
function frame() {
  window.requestAnimationFrame(frame);
  const contentEl = document.querySelector(".content");
  if (isMouseDown) {
	const rect = contentEl.getBoundingClientRect();
	targetVelocity = -1 * (mousePos.x - lastMousePos.x) / rect.width;
	lastMousePos.x = mousePos.x;
	lastMousePos.y = mousePos.y;
	targetPosition += targetVelocity;
	scrollPosition = scrollPosition * 0.8 + targetPosition * 0.2;
  } else {
	const snappingPosition = Math.min(Math.max(0, Math.round(targetPosition)), 8);
	const snappingForce = 0.05;
	targetVelocity += (snappingPosition - targetPosition) * snappingForce;
	const damping = 0.8;
	targetVelocity *= damping;
	targetPosition += targetVelocity;
	scrollPosition = scrollPosition * 0.9 + targetPosition * 0.1;
  }
  contentEl.style.setProperty("--scroll", scrollPosition);
  contentEl.querySelectorAll("section").forEach(el => {
	const basePos = parseFloat(getComputedStyle(el).getPropertyValue('--position'));
	const relativePosition = basePos - scrollPosition;
	if (relativePosition > 0) {
	  el.style.setProperty("--relPosition", relativePosition ** 0.75);
	} else if (relativePosition < 0) {
	  el.style.setProperty("--relPosition", -1 * ((-relativePosition) ** 0.75));
	} else {
	  el.style.setProperty("--relPosition", 0);
	}
	if (Math.abs(relativePosition) < 0.25) {
	  el.classList.add('active');
	} else {
	  el.classList.remove('active');
	}
  });
}
frame();