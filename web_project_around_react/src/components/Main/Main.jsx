// src/components/Main/Main.jsx
import editIcon from "../../images/edit-button_icon.png";
import plusIcon from "../../images/icon-plus_icon.png";
import userImage from "../../images/usuario.png";

export default function Main() {
  return (
    <>
      <div className="content">
        {/* -------------- Profile Section -------------- */}
        <section className="profile">
          {/* Avatar */}
          <div className="profile__avatar">
            <img
              className="profile__avatar-image"
              src={userImage}
              alt="Imagen de perfil"
            />
            <button
              className="profile__avatar-edit"
              aria-label="Cambiar avatar"
              type="button"
            >
              <img
                src={editIcon}
                alt="icono de editar"
                className="profile__avatar-edit-icon"
              />
            </button>
          </div>

          {/* Info */}
          <div className="profile__info">
            <h1 className="profile__info-name" hidden>
              Ricardo Castro
            </h1>
            <button className="profile__edit-icon" type="button">
              <img
                className="profile__edit-icon-image"
                src={editIcon}
                alt="Icono de editar"
              />
            </button>
            <p className="profile__info-description" hidden>
              Front-end Developer
            </p>
          </div>

          <button className="profile__add-button-rectangle" type="button">
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
          {/* Aquí luego renderizaremos la lista de cards con estado */}
        </section>
      </div>
    </>
  );
}
