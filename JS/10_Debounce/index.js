const btn = document.querySelector(".btn");
const incCount = document.querySelector(".incCount");
const debounceCount = document.querySelector(".debounceCount");
const throttleCount = document.querySelector(".throttleCount");
console.log(btn, incCount, debounceCount);

let count1 = 0;
let count2 = 0;
let count3 = 0;

const debounce = (cb, delay) => {
  let timerId;

  return function (...args) {
    if (timerId) clearInterval(timerId);
    timerId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const throttle = (cb, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    cb(...args);
  };
};

const incrementDebounce = debounce(() => {
  debounceCount.innerHTML = ++count2;
}, 800);

const incrementThrottle = throttle(() => {
  throttleCount.innerHTML = ++count3;
},800);
btn.addEventListener("click", () => {
  console.log("btn clicked");
  incCount.innerHTML = ++count1;
  incrementDebounce();
  incrementThrottle();
});
