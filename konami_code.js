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

function init() {
  document.body.addEventListener("keydown", event => {
    let index = 0;
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


