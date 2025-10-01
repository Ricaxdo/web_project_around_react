// src/App.jsx
import logoAround from "../images/aroundEEUU_logo.svg";
import closeIcon from "../images/close_icon.png";
import editIcon from "../images/edit-button_icon.png";
import plusIcon from "../images/icon-plus_icon.png";
import trashIcon from "../images/trash_icon.svg";
import userImage from "../images/usuario.png";
import "../index.css";

export default function App() {
  return (
    <>
      <div className="page">
        {/* -------------- Header -------------- */}
        <header className="header">
          <img
            className="header__logo"
            src={logoAround}
            alt="Logotipo de Around The U.S."
          />
          <div className="header__divider"></div>
        </header>

        {/* -------------- Main Content -------------- */}
        <main className="content">
          {/* -------------- Profile Section -------------- */}
          <section className="profile">
            {/* Avatar Container */}
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

            {/* Profile Information */}
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
          </section>
        </main>

        {/* -------------- Photography Card Template -------------- */}
        <template id="photography-card-template">
          <div className="photography__card">
            <button className="photography__card-button" type="button">
              <img className="photography__card-image" src="" alt="" />
            </button>
            <img className="photography__trash-icon" src={trashIcon} alt="" />
            <div className="photography__info">
              <h2 className="photography__info-title"></h2>
              <img
                className="photography__info-icon"
                src="./images/heart-outline_icon.svg"
                alt="Icono de me gusta"
              />
            </div>
          </div>
        </template>

        {/* -------------- Footer -------------- */}
        <footer className="footer">
          <p className="footer__copyright">© 2025 Around Minecraft</p>
        </footer>

        {/* -------------- Edit Profile Popup -------------- */}
        <div className="popup editPopup popup_hidden">
          <div className="popup__container">
            <div className="popup__content">
              <h2 className="editPopup__title">Editar perfil</h2>
              <form className="editPopup__form">
                <input
                  id="input-name"
                  type="text"
                  name="name"
                  className="editPopup__input editPopup__input-name"
                  placeholder="Nombre"
                  required
                  minLength={2}
                  maxLength={40}
                />
                <span className="editPopup__input-error input-name-error">
                  Por favor, rellena este campo
                </span>
                <input
                  id="input-about"
                  type="text"
                  name="about"
                  className="editPopup__input editPopup__input-about"
                  placeholder="Acerca de mí"
                  required
                  minLength={2}
                  maxLength={300}
                />
                <span className="editPopup__input-error input-about-error">
                  Por favor, rellena este campo
                </span>
                <button type="submit" className="editPopup__submit-button">
                  Guardar
                </button>
              </form>
            </div>
            <button className="editPopup__close-button" type="button">
              <img
                src="./images/close_icon.png"
                alt="Cerrar"
                className="editPopup__close-button-icon"
              />
            </button>
          </div>
        </div>

        {/* -------------- Add Place Popup -------------- */}
        <div className="popup addPopup popup_hidden">
          <div className="popup__container">
            <div className="popup__content">
              <h2 className="addPopup__title">Agregar lugar</h2>
              <form className="addPopup__form">
                <input
                  id="input-title"
                  type="text"
                  name="title"
                  className="addPopup__input addPopup__input-title"
                  placeholder="Titulo"
                  required
                  minLength={2}
                  maxLength={30}
                />
                <span className="addPopup__input-error input-title-error">
                  Por favor, rellena este campo
                </span>
                <input
                  id="input-url"
                  type="text"
                  name="link"
                  className="addPopup__input addPopup__input-link"
                  placeholder="Enlace de la imagen"
                  required
                />
                <span className="addPopup__input-error input-url-error">
                  Por favor, rellena este campo
                </span>
                <button type="submit" className="addPopup__submit-button">
                  Crear
                </button>
              </form>
            </div>
            <button className="addPopup__close-button" type="button">
              <img
                src={closeIcon}
                alt="Cerrar"
                className="addPopup__close-button-icon"
              />
            </button>
          </div>
        </div>

        {/* -------------- Image Popup -------------- */}
        <div className="popup imagePopup popup_hidden">
          <div className="imagePopup__container">
            <img className="imagePopup__image" alt="Vista previa" />
            <button className="imagePopup__close-button" type="button">
              <img
                src={closeIcon}
                alt="Cerrar"
                className="imagePopup__close-button-icon"
              />
            </button>
          </div>
        </div>

        {/* -------------- Confirmation delete Popup -------------- */}
        <div className="popup confirmationPopup popup_hidden">
          <div className="popup__container">
            <div className="popup__content">
              <h2 className="confirmationPopup__title">¿Estas seguro?</h2>
              <button
                type="submit"
                className="confirmationPopup__submit-button"
              >
                Si
              </button>
            </div>
            <button className="confirmationPopup__close-button" type="button">
              <img
                src={closeIcon}
                alt="Cerrar"
                className="confirmationPopup__close-button-icon"
              />
            </button>
          </div>
        </div>

        {/* -------------- Avatar Update Popup -------------- */}
        <div className="popup avatarPopup popup_hidden">
          <div className="popup__container">
            <div className="popup__content">
              <h2 className="avatarPopup__title">Actualizar foto de perfil</h2>
              <form className="avatarPopup__form">
                <input
                  id="input-avatar"
                  type="url"
                  name="avatar"
                  className="avatarPopup__input"
                  placeholder="Enlace de tu imagen de perfil"
                  required
                />
                <span className="avatarPopup__input-error input-avatar-error">
                  Por favor, rellena este campo
                </span>
                <button className="avatarPopup__submit-button" type="submit">
                  Guardar
                </button>
              </form>
            </div>
            <button className="avatarPopup__close-button" type="button">
              <img
                src={closeIcon}
                alt="Cerrar"
                className="avatarPopup__close-button-icon"
              />
            </button>
          </div>
        </div>
      </div>

      {/* -------------- Pantalla de carga-------------- */}
      <div
        id="pageLoader"
        className="pageLoader"
        aria-live="polite"
        role="status"
      >
        <div className="pageLoader__box">
          <div className="pageLoader__spinner"></div>
          <div className="pageLoader__text">Cargando</div>
        </div>
      </div>
    </>
  );
}
