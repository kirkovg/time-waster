const timeWaster = document.getElementById('timeWaster');
const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const t0 = performance.now();

const getRandom = (number) => Math.random() * number;

timeWaster.addEventListener('mouseenter', () => {
  const newTop = getRandom(height);
  const newLeft = getRandom(width);
  timeWaster.style.marginTop = newTop + 'px';
  timeWaster.style.marginLeft = newLeft + 'px';
});

timeWaster.addEventListener('click', () => {
  const t1 = performance.now();
  const minutesSpent = +((t1 - t0) / 60000).toFixed(1);
  window.alert(`You just spent ${minutesSpent} minutes of your life trying to click a stupid button that does nothing.`);
});

