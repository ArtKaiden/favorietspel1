const ship = document.querySelector(".ship");
const  nav = document.querySelector("nav");
const  grip = document.querySelector(".grip");

ship.addEventListener("click", ()=>{
  ship.style.left = "43vw";
  ship.style.top = "-30vh";
  ship.style.transition = "top 6s, left 2s";
  nav.classList.remove("invisible");
  grip.classList.add("very-visible");
});
