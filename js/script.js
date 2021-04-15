const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('side-nav');
const modal = document.getElementById('modal');

navBtn.addEventListener('click', () => {
  sideNav.classList.add('show');
  modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', () => {
  sideNav.classList.remove('show');
  modal.classList.remove('showModal');
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
  }
});
