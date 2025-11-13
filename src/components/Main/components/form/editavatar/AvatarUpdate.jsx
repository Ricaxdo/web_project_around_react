import { useContext, useRef } from "react";
import { CurrentUserContext } from "../../../../../contexts/CurrentUserContext";

export default function AvatarUpdate({ onClose }) {
  const { handleUpdateAvatar } = useContext(CurrentUserContext) ?? {};
  const avatarRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = avatarRef.current?.value.trim();
    if (!url) return;

    // Llamamos a la API a través del contexto
    handleUpdateAvatar?.({ avatar: url });

    // Cerramos el popup
    onClose?.();
  };

  return (
    <form className="avatarPopup__form" noValidate onSubmit={handleSubmit}>
      <input
        id="input-avatar"
        type="url"
        name="avatar"
        className="avatarPopup__input"
        placeholder="Enlace de tu imagen de perfil"
        required
        ref={avatarRef} // 👈 usamos ref
      />
      <span className="avatarPopup__input-error input-avatar-error">
        Por favor, rellena este campo
      </span>

      <button className="avatarPopup__submit-button" type="submit">
        Guardar
      </button>
    </form>
  );
}
