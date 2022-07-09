import React from "react";
import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeAbout(event) {
    setAbout(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, about });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="popup__input popup__input_name_active"
        id="name-profile"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        onChange={handleChangeName}
        required
      />
      <span className="popup__error" id="name-profile-error"></span>
      <input
        type="text"
        className="popup__input popup__input_job_active"
        id="job-profile"
        name="about"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        onChange={handleChangeAbout}
        required
      />
      <span className="popup__error" id="job-profile-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
