const arrSounds = ["applause","boo", "gasp", "tada", "victory", "wrong"];

arrSounds.forEach((sound) =>{
  const btn = document.createElement('button');
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener('click',()=>{
    StopSongs();
    document.getElementById(sound).play();
  })

  document.getElementById("buttons").appendChild(btn);
});

function StopSongs(){
  arrSounds.forEach(sound =>{
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  })

}

