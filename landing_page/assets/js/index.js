document.querySelector(".btn__send").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".modal__send").showModal();
});

document.querySelector(".btn__close").addEventListener("click", () => {
  document.querySelector(".modal__send").close();
});