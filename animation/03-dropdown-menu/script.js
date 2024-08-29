const dropdownContainer = document.querySelector(".dropdown-container");
const menuTitle = document.querySelector(".menu-title");
const dropdownMenu = document.querySelector(".dropdown-menu");

menuTitle.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    if(!dropdownMenu.classList.contains("visible"))
    {
      dropdownMenu.classList.add("visible");
      dropdownMenu.classList.remove("hidden");
    }
    
  else
  {
    dropdownMenu.classList.add("hidden");
    dropdownMenu.classList.remove("visible");
  }
}
})

window.addEventListener("click", (e) => {
  if (!dropdownContainer.contains(e.target)) {
    dropdownMenu.classList.remove("visible")
  }
})