document.addEventListener("DOMContentLoaded", () => {
  const ul = document.getElementById("todos");
  for (let i=0;i<1000;i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    ul.appendChild(li);
  }
});

window.addEventListener("scroll", (e) => {
    e.preventDefault();
    const height = window.outerHeight;
    const scrollVal = window.pageYOffset;
    const more = document.getElementById("more");
    const rect = more.getBoundingClientRect();
    for (let i=0;i<100000;i++) {
      console.log(rect.top + i);
    }
    if (scrollVal + height> rect.top + scrollVal) {
      console.log("shown");
    }
});