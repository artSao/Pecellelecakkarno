// toogle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toogle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox =  document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active')
  searchBox.focus();
  e.preventDefault();
};

//klik di luar element

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector('#search-button')

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

function kirimPesan(event) {
  event.preventDefault(); // Mencegah form reload halaman

  // Ambil data dari input
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;

  // Format URL WhatsApp
  const url = `https://wa.me/6287790938791?text=Halo%20saya%20${encodeURIComponent(nama)}%2C%20${encodeURIComponent(pesan)}`;

  // Redirect ke WhatsApp
  window.open(url, "_blank");
}
