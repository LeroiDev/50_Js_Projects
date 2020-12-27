const loadingText = document.querySelector(".loading__text"),
backgroundImage = document.querySelector(".bg");
let load = 0;

let loadingIntervalCount = setInterval(() => {
  blurring();
}, 30);
  

function blurring(){
  load++;
  if(load > 99)
  clearInterval(loadingIntervalCount);

  loadingText.innerText = `${load} %`;
  loadingText.style.opacity = scale(load,0,100,1,0)
  backgroundImage.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
}

//inverse scale function 1-100 invert to map 0 - 1 
const scale = (num,in_min,in_max, out_min,out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) +
  out_min;
};