export default function AvatarUpdate({ onSaveAvatar }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.currentTarget.avatar.value.trim();
    onSaveAvatar?.({ avatar: url });
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
