export default function EditProfile({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const about = form.about.value.trim();
    onSubmit?.({ name, about });
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
  );
}
