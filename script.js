let isServiciosOpen = false;

function toggleServicios() {
  const dropdown = document.getElementById("serviciosDropdown");
  const toggleBtn = document.getElementById("toggleServiciosBtn");

  if (isServiciosOpen) {
    dropdown.style.display = "none";
    toggleBtn.innerHTML = 'Servicios ▼';
  } else {
    dropdown.style.display = "block";
    toggleBtn.innerHTML = 'Servicios ▲';
  }

  isServiciosOpen = !isServiciosOpen;
}
