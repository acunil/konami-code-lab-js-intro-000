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

// function init() {
//   document.body.addEventListener("keydown", (event) => {
    
//     console.log("start");
//     const key = event.key;
    
//     if (key === codes[index]) {
//       index ++;
//       console.log("code++");
      
//       if (index === codes.length) {
//         alert("Hurray!");
//         index = 0;
//       }
//     } else {
//       index = 0;
//     }
//   });
// }


function init() {
  document.body.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key === codes[index]){
      console.log("correct");
      index++;
    }
  });
}