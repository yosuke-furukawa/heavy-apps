document.addEventListener("DOMContentLoaded", () => {
  const ul = document.getElementById("todos");
  for (let i=0;i<1000;i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    ul.appendChild(li);
  }
});

var throttle = function(fn, interval) {
  var lastTime = Date.now() - interval
  return function() {
    if ((lastTime + interval) < Date.now()) {
      lastTime = Date.now()
      fn()
    }
  }
}

window.addEventListener("scroll", (e) => {
    const height = window.outerHeight;
    const scrollVal = window.pageYOffset;
    const more = document.getElementById("more");
    const rect = more.getBoundingClientRect();
    for (let i=0;i<5000;i++) {
      console.log(rect.top + i);
    }
    if (scrollVal + height> rect.top + scrollVal) {
      console.log("shown");
    }
});