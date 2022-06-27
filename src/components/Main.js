import React, { useEffect } from "react";
// import profilAvatar from "../images/Kusto.jpg";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUsername] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  function getUserInfo() {
    Promise.all([api.setUserInfo(), api.getInitialCards()])
      .then(([data, response]) => {
        setUsername(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(
          response.map((item) => ({
            title: item.name,
            link: item.link,
            _id: item._id,
            likes: item.likes,
          }))
        );
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="main">
      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <h1 className="profile__info-name">{userName}</h1>
          <button
            className="profile__info-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__info-job">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
          ></Card>
        ))}
      </section>
    </div>
  );
}

export default Main;
