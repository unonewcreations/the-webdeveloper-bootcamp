// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "blue";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "pink";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext();
  }, delay);
};

delayedColorChange("red", 1000, () => {
  delayedColorChange("orange", 1000, () => {
    delayedColorChange("blue", 3000, () => {
      delayedColorChange("pink", 3000, () => {
        delayedColorChange("green", 3000, () => {});
      });
    });
  });
});
