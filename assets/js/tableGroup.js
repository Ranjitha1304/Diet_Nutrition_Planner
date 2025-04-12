const toggleBtn = document.getElementById("toggleTableBtn");
const panel = document.getElementById("fruitTablePanel");
const iconImg = toggleBtn.querySelector(".icon");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  const isOpen = panel.style.display === "block";
  panel.style.display = isOpen ? "none" : "block";
  
  // Change image src based on state
  iconImg.src = isOpen
    ? "./assets/images/drop down collapsed icon.png"
    : "./assets/images/drop down expanded icon.png";
});
