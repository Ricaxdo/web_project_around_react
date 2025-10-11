import heartOutlineIcon from "../../../../images/heart-outline_icon.svg";
import heartIcon from "../../../../images/heart_icon.svg";
import trashIcon from "../../../../images/trash_icon.svg";

export default function Card({ card, onLike, onDelete, onPreview }) {
  const { _id, name, link, isLiked } = card;

  return (
    <div className="photography__card">
      <button
        className="photography__card-button"
        type="button"
        onClick={() => onPreview?.(card)}
      >
        <img className="photography__card-image" src={link} alt={name} />
      </button>

      <img
        className="photography__trash-icon"
        src={trashIcon}
        alt="Eliminar"
        onClick={() => onDelete?.(_id)}
      />

      <div className="photography__info">
        <h2 className="photography__info-title">{name}</h2>
        <img
          className={`photography__info-icon ${
            isLiked ? "photography__info-icon_active" : ""
          }`}
          src={isLiked ? heartIcon : heartOutlineIcon}
          alt="Me gusta"
          onClick={() => onLike?.(_id)}
        />
      </div>
    </div>
  );
}
