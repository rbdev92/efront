let productIdCounter = 0;

function addProduct() {
  const productName = document.querySelector("#productName").value;
  const productValue = document.querySelector("#productValue").value;
  const tableBody = document.querySelector("#tableBody");

  const newRow = document.createElement("tr");
  newRow.setAttribute("data-id", `product-${productIdCounter}`);

  newRow.innerHTML = `
  <td>${productName}</td>
  <td>${productValue}</td>
  <td>
    <button class="editButton" data-id="product-${productIdCounter}">Edit</button>
    <button class="deleteButton" data-id="product-${productIdCounter}">Delete</button>
  </td>
  `;

  tableBody.appendChild(newRow);
  productIdCounter++;

  document.querySelectorAll(".editButton").forEach((button) => {
    button.addEventListener("click", editProduct);
  });

  document.querySelectorAll(".deleteButton").forEach((button) => {
    button.addEventListener("click", deleteProduct);
  });
}

function editProduct(event) {
  const rowId = event.target.dataset.id;
  const row = document.querySelector(`tr[data-id="${rowId}"]`);
  const cells = row.querySelectorAll("td");

  const productName = cells[0].innerText;
  const productValue = cells[1].innerText;

  document.querySelector("#productName").value = productName;
  document.querySelector("#productValue").value = productValue;
}

function deleteProduct(event) {
  const rowId = event.target.dataset.id;
  const row = document.querySelector(`tr[data-id="${rowId}"]`);
  row.remove();
}

document.querySelector("#submitButton").addEventListener("click", addProduct);