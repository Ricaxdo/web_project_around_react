export default function NewCard({ onAddNewCard }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = form.title.value.trim();
    const link = form.link.value.trim();
    onAddNewCard({ title, link });
  };

  return (
    <form className="addPopup__form" noValidate onSubmit={handleSubmit}>
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
        type="url"
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
  );
}
