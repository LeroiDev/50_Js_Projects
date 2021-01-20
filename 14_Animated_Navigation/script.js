const toggleNavBtn = document.querySelector("#btnToggle"),
navBar = document.querySelector("#nav");

toggleNavBtn.addEventListener('click',() => navBar.classList.toggle("active"));

