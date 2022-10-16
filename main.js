const logo = document.getElementById('logo');
const tvScreen = document.getElementById('screen');

const centerLogo = function() {
  let leftRandom = Math.floor(Math.random() * (tvScreen.offsetWidth - logo.offsetWidth + 1));
  let topRandom = Math.floor(Math.random() * (tvScreen.offsetHeight - logo.offsetHeight + 1));

  logo.style.left = leftRandom + 'px';
  logo.style.top = topRandom + 'px';
};

const changeLogoColor = function() {
  logo.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
};

let x = 1;
let y = -1;

const animate = function() {
  requestAnimationFrame(animate);

  if (logo.offsetLeft <= 0 || logo.offsetLeft >= (tvScreen.offsetWidth - logo.offsetWidth)) {
    changeLogoColor();
    x *= -1;
  }
  if (logo.offsetTop <= 0 || logo.offsetTop >= (tvScreen.offsetHeight - logo.offsetHeight)) {
    changeLogoColor();
    y *= -1;
  }

  logo.style.left = `${logo.offsetLeft += x}px`;
  logo.style.top = `${logo.offsetTop += y}px`;
};

window.addEventListener('resize', () => {
  centerLogo();
});

centerLogo();
changeLogoColor();
animate();