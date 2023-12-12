document.addEventListener('DOMContentLoaded', function () {
  const openModalButton = document.getElementById('openModalBtn');
  const closeModalButton = document.getElementById('closeModalBtn');
  const backdrop = document.querySelector('.backdrop.visually-shown');

  openModalButton.addEventListener('click', function () {
    backdrop.style.display = 'block';
  });

  closeModalButton.addEventListener('click', function () {
    backdrop.style.display = 'none';
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      backdrop.style.display = 'none';
    }
  });

  backdrop.addEventListener('click', function (event) {
    if (event.target === backdrop) {
      backdrop.style.display = 'none';
    }
  });
});
