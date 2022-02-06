// @ts-nocheck
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (event) => {
  isDown = true;
  slider.classList.add('active');
  // console.log(event.pageX);  x position of mouse
  startX = event.pageX - slider.offsetLeft; // offsetLeft is the left position of the slider
  scrollLeft = slider.scrollLeft; // scrollLeft is the left position of the slider

});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', () => {
  if (!isDown) return; // stop the fn from running
   console.log(isDown);
  //  console.log("do work");
});
