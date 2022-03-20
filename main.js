const content = document.getElementById("content");

const elements = Array.from(Array(50), (e, i) => `Elemento #${i + 1}`);
console.log(elements);
elements.forEach((e) => {
  const div = document.createElement("div");
  div.textContent = e;
  div.style.backgroundColor = `rgb(${random()},${random()},${random()})`;
  div.classList = "child";
  content.append(div);
});

function random() {
  const { round, random } = Math;
  return round(random() * 255);
}
