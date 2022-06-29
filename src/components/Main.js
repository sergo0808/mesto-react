import React from "react";
import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUsername] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  function getUserInfo() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
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

  useEffect(() => {
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
          <button className="profile__info-button" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__info-job">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick}></Card>
        ))}
      </section>
    </div>
  );
}

export default Main;
