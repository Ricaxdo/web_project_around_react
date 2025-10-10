// src/components/.../popup/Popup.jsx
import closeIcon from "../../../../images/close_icon.png";

export default function Popup({
  onClose,
  title,
  children,
  variant, // "imagePopup" | "editPopup" | "addPopup" | "avatarPopup" | "confirmationPopup"
}) {
  if (variant === "imagePopup") {
    return (
      <div
        className={`popup ${variant} popup_opened`}
        role="dialog"
        aria-modal="true"
      >
        <div className="imagePopup__container">
          {children}
          <button
            className="imagePopup__close-button"
            type="button"
            aria-label="Close modal"
            onClick={onClose}
          >
            <img
              src={closeIcon}
              alt="Cerrar"
              className="imagePopup__close-button-icon"
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`popup ${variant || ""} popup_opened`}
      role="dialog"
      aria-modal="true"
    >
      <div className="popup__container">
        <div className="popup__content">
          <h2 className={variant ? `${variant}__title` : "popup__title"}>
            {title}
          </h2>
          {children}
        </div>

        <button
          className={`${variant}__close-button`}
          type="button"
          aria-label="Close modal"
          onClick={onClose}
        >
          <img
            src={closeIcon}
            alt="Cerrar"
            className={`${variant}__close-button-icon`}
          />
        </button>
      </div>
    </div>
  );
}
