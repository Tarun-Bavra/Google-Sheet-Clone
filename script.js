const headRow = document.getElementById("head-row");
const sno = document.getElementById("sno");
const body = document.getElementById("body");

const rows = 100;
const columns = 26;

for (let i = 1; i < columns + 1; i++) {
  const headCell = document.createElement("div");
  if (i >= 1) {
    headCell.innerText = String.fromCharCode(i + 64); //"A"=>65
    headCell.className = "col-head";
  }
  headRow.appendChild(headCell);
}

for (let i = 0; i < rows; i++) {
  const snoCell = document.createElement("div");
  snoCell.className = "sno-cell";
  snoCell.innerText = i + 1;
  sno.appendChild(snoCell);
}

for (let i = 1; i <= rows; i++) {
  const row = document.createElement("div");
  row.className = "row";

  for (let j = 1; j <= columns; j++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.contentEditable = true;
    cell.id = `${String.fromCharCode(j+64)}${i}`/// have a look at this unique id.

    cell.addEventListener("focus",onFocusCell);

    row.appendChild(cell); 
  }

  body.appendChild(row);
}

////////////////////////////////////////////////////////////////////////////
// document.querySelectorAll('.col-head, .sno-cell').forEach(cell => {
//   cell.addEventListener('keydown', function(e) {
//     if (e.key === 'Enter') {
//       // Prevent default behavior of creating new divs or line breaks
//       e.preventDefault();
//     }
//   });
// });
/////////////////////////////////////////////////////////////////////////////
