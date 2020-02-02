const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0;

function init() {
  document.body.addEventListener("keydown", (event) => {
    
    console.log("start");
    
    if (event.key === codes[index]) {
      index ++;
      console.log("code++");
      
      if (index === codes.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}


