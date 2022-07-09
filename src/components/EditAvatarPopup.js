import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <input
        type="url"
        className="popup__input popup__input_link_avatar"
        id="link-avatar"
        name="avatar"
        placeholder="Ссылка на картинку"
        ref={avatarRef}
        required
      />
      <span className="popup__error" id="link-avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
