import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  function handleChangePlaceLink(event) {
    setLink(event.target.value);
  }

  function handleChangePlaceName(event) {
    setName(event.target.value);
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddCard({ name, link });
  }
  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input popup__input_name_add"
        id="name-mesto"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        onChange={handleChangePlaceName}
        value={name || ""}
        required
      />
      <span className="popup__error" id="name-mesto-error"></span>
      <input
        type="url"
        className="popup__input popup__input_link_add"
        id="link-mesto"
        name="link"
        placeholder="Ссылка на картинку"
        onChange={handleChangePlaceLink}
        value={link || ""}
        required
      />
      <span className="popup__error" id="link-mesto-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
