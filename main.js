let tableBody = document.querySelector("#myTable tbody");

for (let i = 1; i < 10; i++) {
  let row = document.createElement("tr");

  for (let j = 1; j < 10; j++) {
    let a = document.createElement("td");
    if (i < j) {
      a.textContent = null;
    } else {
      a.textContent = `${i} * ${j} = ${i * j}`;
      row.appendChild(a);
    }
  }
  tableBody.appendChild(row);
}
