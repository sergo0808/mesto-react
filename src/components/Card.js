import React from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__group-basket ${isOwn && "element__group-basket_active "}`;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__group-like ${isLiked && "element__group-like_active "}`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="element">
      <img className="element__mask-group" alt={card.name} src={card.link} onClick={handleClick} />
      <div className="element__group">
        <h2 className="element__group-text">{card.name}</h2>
        <div className="element__like_container">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <span className="element__group-count">{card.likes.length}</span>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
    </article>
  );
}

export default Card;
