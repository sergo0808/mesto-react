function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <article className="element">
      <img className="element__mask-group" alt={props.card.title} src={props.card.link} onClick={handleClick} />
      <div className="element__group">
        <h2 className="element__group-text">{props.card.title}</h2>
        <div className="element__like_container">
          <button className="element__group-like" type="button"></button>
          <span className="element__group-count">{props.card.likes.length}</span>
        </div>
      </div>
      <button className="element__group-basket" type="button"></button>
    </article>
  );
}

export default Card;
