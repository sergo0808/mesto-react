const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
const config = {
  url: "https://mesto.nomoreparties.co/v1/cohort-42",
  headers: {
    authorization: "5a769756-07f6-441a-bbc2-3fc7a58dd4ed",
    "Content-Type": "application/json",
  },
};

export { enableValidation, config };
