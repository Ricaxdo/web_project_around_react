// src/components/Main/components/form/confirm/ConfirmDelete.jsx
export default function ConfirmDelete({ onConfirm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm?.();
  };

  return (
    <form
      className="confirmationPopup__form"
      noValidate
      onSubmit={handleSubmit}
    >
      <button type="submit" className="confirmationPopup__submit-button">
        Si
      </button>
    </form>
  );
}
