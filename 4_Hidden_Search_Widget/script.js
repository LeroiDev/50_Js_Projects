const search = document.querySelector(".search"),
inputSearch = document.querySelector(".input"),
btnSearch = document.querySelector(".btn");

btnSearch.addEventListener('click',()=>{
  search.classList.toggle("active");
  inputSearch.focus();
});
