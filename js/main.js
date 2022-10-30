// Wait for load before accessing offset Widths/Heights to avoid 0
window.addEventListener('load', () => {

  const logo = document.getElementById('logo');
  const tvScreen = document.getElementById('screen');
  const tvShell = document.getElementById('tv');

  const setScreenSize = function() {
  // Landscape vs Portrait
    if (window.innerWidth > window.innerHeight) {
      tvScreen.style.width = tvShell.offsetWidth * 0.77 + 'px';
      tvScreen.style.height = tvShell.offsetHeight * 0.578 + 'px';
      tvScreen.style.top = tvShell.offsetHeight * 0.135 + 'px';
    } else {
      tvScreen.style.width = tvShell.offsetWidth * 0.77 + 'px';
      tvScreen.style.height = tvShell.offsetHeight * 0.578 + 'px';
      tvScreen.style.top = (window.innerHeight / 2) - (tvShell.offsetHeight * 0.37) + 'px';
    }
  };

  // Randomly position logo somewhere inside screen without going outside
  const setLogoPosition = function() {
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

    // Bounce and change color if:
    // Reach wall on left or right
    if (logo.offsetLeft <= 0 || logo.offsetLeft >= (tvScreen.offsetWidth - logo.offsetWidth)) {
      changeLogoColor();
      x *= -1;
    }
    // Reach wall on top or bottom
    if (logo.offsetTop <= 0 || logo.offsetTop >= (tvScreen.offsetHeight - logo.offsetHeight)) {
      changeLogoColor();
      y *= -1;
    }

    logo.style.left = `${logo.offsetLeft += x}px`;
    logo.style.top = `${logo.offsetTop += y}px`;
  };

  window.addEventListener('resize', () => {
    setScreenSize();
    setLogoPosition();
  });

  // For when changing orientation on mobile to avoid getting stuck outside the screen
  window.addEventListener('orientationchange', () => {
    setScreenSize();
    setLogoPosition();
  });

  // Initial setup and run
  setScreenSize();
  setLogoPosition();
  changeLogoColor();
  animate();

});