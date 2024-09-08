let anteriorButton = document.getElementById("anterior");
let próximoButton = document.getElementById("próximo");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicadores = document.querySelector(".indicadores");
let dots = indicadores.querySelectorAll("ul li");
let list = container.querySelector('.list')

let active = 0;
let lastPosition = items.length - 1;

function setSlider() {
  let itemOld = container.querySelector(".list .item.active");
  itemOld.classList.remove("active");

  let dotsOLD = indicadores.querySelector("ul li.active");
  dotsOLD.classList.remove("active");
  dots[active].classList.add("active");

  indicadores.querySelector(".numeros").innerHTML = "0" + (active + 1);
}

function updateIndicators() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === active);
  });
}

function showItem(index) {
  items.forEach((item) => {
    item.classList.remove("active");
  });
  items[index].classList.add("active");
  updateIndicators();
}

próximoButton.onclick = () => {
  list.style.setProperty('--calculation', 1)
  active = active + 1 > lastPosition ? 0 : active + 1;
  setSlider();
  showItem(active);
};

anteriorButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
  active = active - 1 < 0 ? lastPosition : active - 1;
  setSlider();
  showItem(active);
};

