const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menu.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

document.querySelector('#order-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const body = [
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Order type: ${data.get('type')}`,
    `Deadline: ${data.get('deadline') || 'Not specified'}`,
    '',
    'Details:',
    data.get('details'),
  ].join('\n');
  window.location.href = `mailto:kawowza246@gmail.com?subject=${encodeURIComponent('New Kawowza order inquiry')}&body=${encodeURIComponent(body)}`;
});
