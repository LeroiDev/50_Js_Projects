const btnOpen = document.getElementById("open"),
btnClose = document.getElementById("close"),
container = document.querySelector(".container");

btnOpen.addEventListener('click',()=>{
  container.classList.add("show__nav");
});
btnClose.addEventListener('click',()=>{
  container.classList.remove("show__nav");
});