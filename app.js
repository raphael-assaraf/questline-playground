const SERVICES = [
  { name: "api", up: true },
  { name: "dashboard", up: true },
  { name: "worker", up: false },
];

function render() {
  const el = document.getElementById("services");
  el.innerHTML = SERVICES.map(
    (s) => `<div class="card"><span>${s.name}</span>` +
      `<span class="${s.up ? "up" : "down"}">${s.up ? "up" : "down"}</span></div>`
  ).join("");
}

document.getElementById("refresh").addEventListener("click", render);
render();
