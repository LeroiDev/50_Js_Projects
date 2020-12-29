const leftSide = document.querySelector(".left"),
rightSide = document.querySelector(".right"),
container = document.querySelector(".container");

leftSide.addEventListener('mouseenter',()=> container.classList.add("hover__left"));

leftSide.addEventListener('mouseleave',()=>container.classList.remove("hover__left"));

rightSide.addEventListener('mouseenter',()=>container.classList.add("hover__right"));

rightSide.addEventListener('mouseleave',()=>container.classList.remove("hover__right"));



