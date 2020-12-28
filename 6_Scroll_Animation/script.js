/*animate on scroll or jquery could be used as well- libraries to add then*/
const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll',CheckBoxPosition);

CheckBoxPosition();

function CheckBoxPosition(){
  const triggerBottom = window.innerHeight / 6 * 4;

  boxes.forEach((box)=>{
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      box.classList.add("show");
    }else{
      box.classList.remove("show");
    }
  })

}