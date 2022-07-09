import React from "react";
import { useState, useEffect } from "react";
import { api } from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import PopupWithConfirm from "./PopupWithConfirm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [selectedCard, setSelectedCard] = useState(null);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [cards, setCards] = useState([]);

  function getUserInfo() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, response]) => {
        setCurrentUser({ ...currentUser, name: data.name, about: data.about, avatar: data.avatar, _id: data._id });
        setCards(
          response.map((item) => ({
            _id: item._id,
            link: item.link,
            name: item.name,
            likes: item.likes,
            owner: item.owner,
          }))
        );
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  function handleCardDelete(card) {
    api.deleteCardApi(card._id).then((deleteCard) => {
      setCards((state) => state.filter((deleteCard) => deleteCard._id !== card._id));
    });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    api.likeCardApi(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

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

  function handleUpdateUser({ name, about }) {
    api.updateUserInfom({ name, about }).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    });
  }

  function handleAddCard(data) {
    api.addCardApi(data).then((data) => {
      setCards([data, ...cards]);
      closeAllPopups();
    });
  }

  function handleUpdateAvatar({ avatar }) {
    api.updateAvatarApi({ avatar }).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddCard} />
          <PopupWithForm title="Вы уверены ?" name="Confirm" />
          <PopupWithConfirm></PopupWithConfirm>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
