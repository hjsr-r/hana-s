// Function to open sidebar
function openSidebar() {
  document.getElementById("sidebar").classList.add("active");
}

// Function to close sidebar
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
}

// Event listener to open sidebar when button clicked
document.getElementById("openSidebar").addEventListener("click", openSidebar);

// Event listener to close sidebar when close button clicked
document.getElementById("closeSidebar").addEventListener("click", closeSidebar);
