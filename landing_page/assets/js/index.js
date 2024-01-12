const sendButton = document.querySelector(".btn__send");
const closeButton = document.querySelector(".btn__close");
const errorMessage = document.querySelector(".error__message");
const successMessage = document.querySelector(".success__message");
const modalSend = document.querySelector(".modal__send");

const success = "#04d361";
const error = "#ff3e3e";

sendButton.addEventListener("click", (e) => {
  e.preventDefault();

  const stateRegister = "error";

  if (stateRegister === "success") {
    errorMessage.remove();
    closeButton.style.backgroundColor = success;
  }
  
  if (stateRegister === "error") {
    successMessage.remove();
    closeButton.style.backgroundColor = error;
  }

  modalSend.show();
});

closeButton.addEventListener("click", () => {
  modalSend.close();
});
