const jokeDiv = document.getElementById("joke"),
jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener('click',GenerateJoke);

GenerateJoke();

//Async Await method
async function GenerateJoke(){
 const config = {
  headers: {
    "Accept":"application/json"
  }
};
  const res = await fetch("https://icanhazdadjoke.com",config);
  const data = await res.json();
 
  jokeDiv.innerText = data.joke;
}


//FETCH API WAY GONNA DO THIS IN ASYNC AWAIT ABOVE
// function GenerateJoke(){
//   const config = {
//     headers: {
//       'Accept':'application/json'
//     }
//   };
//   fetch("https://icanhazdadjoke.com",config)
//   .then(res => res.json())
//   .then(data => jokeDiv.innerText = data.joke);
// }

