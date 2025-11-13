import { useContext, useEffect, useState } from "react";
import editIcon from "../../images/edit-button_icon.png";
import plusIcon from "../../images/icon-plus_icon.png";
import userImage from "../../images/usuario.png";

import Card from "../Main/components/card/Card";
import ConfirmDelete from "../Main/components/form/confirmdelete/ConfirmDelete";
import EditProfile from "../Main/components/form/editprofile/EditProfile";
import ImagePopup from "../Main/components/form/imagepopup/ImagePopup";
import NewCard from "../Main/components/form/newcard/NewCard";
import Popup from "../Main/components/popup/Popup";
import AvatarUpdate from "./components/form/editavatar/AvatarUpdate";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { api } from "../../utils/api";

export default function Main() {
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  const userContext = useContext(CurrentUserContext);
  const { currentUser } = userContext || {};

  // Fallback mientras no llega el usuario de la API
  const profile = currentUser || {
    name: "Ricardo Castro",
    about: "Front-end Developer",
    avatar: userImage,
  };

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardsFromApi) => {
        setCards(cardsFromApi);
      })
      .catch((err) => {
        console.error("Error al cargar tarjetas:", err);
      });
  }, []);

  const handleAddCard = ({ title, link }) => {
    const newCard = {
      _id: Date.now().toString(),
      name: title,
      link,
      isLiked: false,
      owner: "yo",
      createdAt: new Date().toISOString(),
    };
    setCards((prev) => [newCard, ...prev]);
  };

  const handleDeleteCard = (id) => {
    setCards((prev) => prev.filter((card) => card._id !== id));
  };

  const handleToggleLike = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card._id === id ? { ...card, isLiked: !card.isLiked } : card
      )
    );
  };

  // --------- Popup open/close ---------
  const handleClosePopup = () => setPopup(null);
  function handleOpenPopup(nextPopup) {
    setPopup(nextPopup);
  }

  // --------- Popup builders---------
  const buildNewCardPopup = () => ({
    title: "Nuevo lugar",
    variant: "addPopup",
    children: (
      <NewCard
        onAddNewCard={({ title, link }) => {
          handleAddCard({ title, link });
          setPopup(null);
        }}
      />
    ),
  });

  const buildEditProfilePopup = () => ({
    title: "Editar perfil",
    variant: "editPopup",
    children: (
      <EditProfile
        onClose={() => {
          setPopup(null);
        }}
      />
    ),
  });

  const buildAvatarUpdatePopup = () => ({
    title: "Actualizar foto de perfil",
    variant: "avatarPopup",
    children: (
      <AvatarUpdate
        onClose={() => {
          setPopup(null);
        }}
      />
    ),
  });

  const buildConfirmDeletePopup = (cardId) => ({
    title: "¿Eliminar card?",
    variant: "confirmationPopup",
    children: (
      <ConfirmDelete
        onConfirm={() => {
          handleDeleteCard(cardId);
          setPopup(null);
        }}
      />
    ),
  });

  const buildImagePopup = (card) => ({
    title: null,
    variant: "imagePopup",
    children: <ImagePopup card={card} />,
  });

  return (
    <>
      <div className="content">
        {/* -------------- Profile Section -------------- */}
        <section className="profile">
          <div className="profile__avatar">
            <img
              className="profile__avatar-image"
              src={profile.avatar || userImage}
              alt="Imagen de perfil"
            />
            <button
              className="profile__avatar-edit"
              aria-label="Cambiar avatar"
              type="button"
              onClick={() => handleOpenPopup(buildAvatarUpdatePopup())}
            >
              <img
                src={editIcon}
                alt="icono de editar"
                className="profile__avatar-edit-icon"
              />
            </button>
          </div>

          <div className="profile__info">
            <h1 className="profile__info-name">{profile.name}</h1>
            <button
              className="profile__edit-icon"
              type="button"
              onClick={() => handleOpenPopup(buildEditProfilePopup())}
            >
              <img
                className="profile__edit-icon-image"
                src={editIcon}
                alt="Icono de editar"
              />
            </button>
            <p className="profile__info-description">{profile.about}</p>
          </div>

          <button
            className="profile__add-button-rectangle"
            type="button"
            onClick={() => handleOpenPopup(buildNewCardPopup())}
          >
            <img
              className="profile__add-button-icon"
              src={plusIcon}
              alt="Icono de añadir"
            />
          </button>
        </section>

        {/* -------------- Photography Section -------------- */}
        <section className="photography">
          <h2 className="photography__heading" hidden>
            Galería de fotos
          </h2>

          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onLike={handleToggleLike}
              onPreview={(card) => handleOpenPopup(buildImagePopup(card))}
              onDelete={() =>
                handleOpenPopup(buildConfirmDeletePopup(card._id))
              }
            />
          ))}
        </section>

        {/* -------------- Popup condicional -------------- */}
        {popup && (
          <Popup
            onClose={handleClosePopup}
            title={popup.title}
            variant={popup.variant}
          >
            {popup.children}
          </Popup>
        )}
      </div>
    </>
  );
}
