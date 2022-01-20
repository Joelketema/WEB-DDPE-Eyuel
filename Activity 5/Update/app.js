const form = document.getElementById('form1');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'red';
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = 'green';
}, true);
