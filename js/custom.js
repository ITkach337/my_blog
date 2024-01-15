const text = document.querySelector(".sec-text");

const textLoad = () =>{
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Front-end dev";
  }, 4000);
}
textLoad();
setInterval(textLoad, 8000);