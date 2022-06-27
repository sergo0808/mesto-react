function PopupWithConfirm() {
  return (
    <div className="popup popup_type_confirm">
      <div className="popup__container popup__container-confirm">
        <form className="popup__form" name="place" noValidate>
          <button
            className="popup__close-button popup__close-button_confirm"
            type="button"
            aria-label="close-btn"
          ></button>
          <h3 className="popup__title popup__title_confirm">Вы уверены ?</h3>
          <button className="popup__submit popup__submit-confirm" type="submit">
            Да
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithConfirm;
