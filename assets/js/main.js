const sumbitBtn = document.querySelector('#sumbitBtn');

sumbitBtn.addEventListener('click', event => {
  event.preventDefault()

  const productName = document.querySelector('#productName').value;
  const productValue = document.querySelector('#productValue').value;

  console.table([productName, productValue])
})