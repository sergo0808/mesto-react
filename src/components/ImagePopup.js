function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image popup_preview_active ${props.card && "popup_opened"}`}>
      <div className="popup__container popup__container_image">
        <button
          className="popup__close-button popup__close-button_image"
          type="button"
          aria-label="close-btn"
          onClick={props.onClose}
        ></button>
        <figure className="popup__group">
          <img className="popup__image" alt={props.card?.title} src={props.card?.link} />
          <figcaption className="popup__caption">{props.card ? props.card.title : ""}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
