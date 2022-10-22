const logo = document.getElementById('logo');
const tvScreen = document.getElementById('screen');

const centerLogo = function() {
  let leftRandom = Math.round(Math.random() * tvScreen.offsetWidth);
  if (leftRandom > logo.offsetWidth) {
    leftRandom -= logo.offsetWidth;
  }

  let topRandom = Math.round(Math.random() * tvScreen.offsetHeight);
  if (topRandom > logo.offsetHeight) {
    topRandom -= logo.offsetHeight;
  }
  // logo.style.left = `${(tvScreen.offsetWidth / 2) - (logo.offsetWidth / 2)}px`;
  logo.style.left = leftRandom + 'px';
  // logo.style.top = `${(tvScreen.offsetHeight / 2) - (logo.offsetHeight / 2)}px`;
  logo.style.top = topRandom + 'px';
};

window.addEventListener('resize', () => {
  centerLogo();
});

centerLogo();