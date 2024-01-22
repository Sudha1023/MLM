const dropdown = document.querySelector('.dropdown');
const btnDropdown = document.querySelector(".btn_dropdown");

btnDropdown.addEventListener('click', ()=> {
  dropdown.classList.toggle('open');
});
