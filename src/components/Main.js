import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="main">
      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <h1 className="profile__info-name">{currentUser.name}</h1>
          <button className="profile__info-button" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__info-job">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
        {props.cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          ></Card>
        ))}
      </section>
    </div>
  );
}

export default Main;
