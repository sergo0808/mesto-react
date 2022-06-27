function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container popup__container-avatar">
        <form className="popup__form" name={props.name} noValidate>
          <button
            className="popup__close-button popup__close-button_avatar"
            type="button"
            aria-label="close-btn"
            onClick={props.onClose}
          ></button>
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
          <button className="popup__submit" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
