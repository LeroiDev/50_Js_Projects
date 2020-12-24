const progress = document.getElementById("progress"),
btnPrev = document.getElementById("prev"),
btnNext = document.getElementById("next"),
circles = document.querySelectorAll(".circle");

let currentActive = 1;

btnNext.addEventListener('click', ()=>{
  currentActive ++;
  if(currentActive > circles.length){
    currentActive = circles.length;
  }
  updateDOM();
})

btnPrev.addEventListener('click',()=>{
  currentActive --;
  if(currentActive < 1) currentActive = 1;
  updateDOM();
})

function updateDOM(){
  circles.forEach((circle, index)=>{
      if(index < currentActive){
          circle.classList.add("active");
      }
      else{
        circle.classList.remove("active");
      }
  })
  const actives = document.querySelectorAll(".active");

  progress.style.width = (((actives.length -1) / (circles.length - 1)) * 100) + "%";

  if(currentActive === 1){
    btnPrev.disabled = true;
  }else if(currentActive === circles.length){
    btnNext.disabled = true;
  }else{
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
}