var lightSwitch = document.querySelector('.switch'), statusBox = document.querySelector('.status');

document.addEventListener('DOMContentLoaded', () => {
  statusBox.innerHTML = "Let's get the party started!";
});

lightSwitch.addEventListener('click', switching);

function switching() {
  if (lightSwitch.getAttribute('class') === 'switch on') {
    lightSwitch.setAttribute('class', 'switch off');
    document.body.setAttribute('class', 'dark');
    statusBox.innerHTML = 'Hey, who turned off the lights?';
  } else {
    lightSwitch.setAttribute('class', 'switch on');
    document.body.setAttribute('class', 'light');
    statusBox.innerHTML = "It's so bright in here!";
  }
}