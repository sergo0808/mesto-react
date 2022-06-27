import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./PopupWithImage";
import PopupWithConfirm from "./PopupWithConfirm";

function App() {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const handleCardClick = (card) => setSelectedCard(card);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>

        <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          {
            <input
              type="text"
              className="popup__input popup__input_name_active"
              id="name-profile"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
          }
          {<span className="popup__error" id="name-profile-error"></span>}
          {
            <input
              type="text"
              className="popup__input popup__input_job_active"
              id="job-profile"
              name="about"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
          }
          {<span className="popup__error" id="job-profile-error"></span>}
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="add"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          {
            <input
              type="text"
              className="popup__input popup__input_name_add"
              id="name-mesto"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
          }
          {<span className="popup__error" id="name-mesto-error"></span>}
          {
            <input
              type="url"
              className="popup__input popup__input_link_add"
              id="link-mesto"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
          }
          {<span className="popup__error" id="link-mesto-error"></span>}
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          {
            <input
              type="url"
              className="popup__input popup__input_link_avatar"
              id="link-avatar"
              name="avatar"
              placeholder="Ссылка на картинку"
              required
            />
          }
          {<span className="popup__error" id="link-avatar-error"></span>}
        </PopupWithForm>
        <PopupWithForm title="Вы уверены ?" name="Confirm" />
        <PopupWithConfirm></PopupWithConfirm>
      </div>
    </div>
  );
}

export default App;
