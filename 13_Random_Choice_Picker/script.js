const divTags = document.querySelector(".tags"),
textArea = document.querySelector("#textarea");

textArea.focus();

textArea.addEventListener('keyup',(e)=>{
    createTags(e.target.value);

  //check to see if enter was hit

  if(e.key === "Enter"){
     setTimeout(()=>{
        e.target.value = "";
     },10)

    randomSelect()
  } 
});

function createTags(input){

  const tags = input.split(',').filter(tag=>tag.trim() !== "").map(tag => tag.trim());

  divTags.innerHTML = "";

  tags.forEach(tag =>{
    const tagEl = document.createElement("span");
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    divTags.appendChild(tagEl);
  })
}

function randomSelect(){
  const highlightTimes = 30;
  const interval = setInterval(()=>{
      const randomTag = pickRandomTag();
      HighlightTag(randomTag);

    setTimeout(()=>{
        RemoveHightlight(randomTag);
    },100);

  },100);

  //provision for endless loop

  setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
          const randTag = pickRandomTag();
          HighlightTag(randTag);
      }, 100);

  }, highlightTimes * 100);

}

function pickRandomTag(){
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function HighlightTag (tag){
    tag.classList.add("highlight");
}

function RemoveHightlight(tag){
  tag.classList.remove("highlight");
}











