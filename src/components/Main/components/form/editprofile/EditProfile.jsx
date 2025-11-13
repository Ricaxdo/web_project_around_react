// src/components/Main/components/form/editprofile/EditProfile.jsx
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../../../contexts/CurrentUserContext";

export default function EditProfile({ onClose }) {
  const { currentUser, handleUpdateUser } =
    useContext(CurrentUserContext) ?? {};

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  // Cuando currentUser cambie (o se cargue de la API), rellenar el formulario
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setAbout(currentUser.about || "");
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar a la API
    handleUpdateUser?.({ name, about });

    // Cerrar popup
    onClose?.();
  };

  return (
    <form className="editPopup__form" noValidate onSubmit={handleSubmit}>
      <input
        id="input-name"
        type="text"
        name="name"
        className="editPopup__input editPopup__input-name"
        placeholder="Nombre"
        required
        minLength={2}
        maxLength={40}
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />
      <span className="editPopup__input-error input-about-error">
        Por favor, rellena este campo
      </span>

      <button type="submit" className="editPopup__submit-button">
        Guardar
      </button>
    </form>
  );
}
