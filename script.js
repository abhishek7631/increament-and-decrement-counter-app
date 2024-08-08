let title = document.querySelector("#title");
let currval = 0;
let btn_increament = document.querySelector("#increament");
let btn_reset = document.querySelector("#reset");
let btn_decrement = document.querySelector("#decrement");

btn_increament.addEventListener("click", () => {
  currval++;
  title.textContent = currval;
});

btn_decrement.addEventListener("click", () => {
  currval--;
  title.textContent = currval;
});

btn_reset.addEventListener("click", () => {
  currval = 0;
  title.textContent = currval;
});
