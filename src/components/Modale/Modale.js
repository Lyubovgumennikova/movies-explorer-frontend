import React, { useEffect } from "react";
import Button from "../Button/Button";
import "./Modale.css";
import icon from "../../images/icon__menu_close.svg" ;

const Modale = ({isOpen, onClose, name, children }) => {
  const FOPM_STYLES = {
    // input:  `${isValid
    //     ? "profile__text-field"
    //     : "profile__text-field_valid"
    // }`,
    button: "modale__button_close",
  };
  useEffect(() => {
    if (!isOpen) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keyup", handleEscClose);

    return () => {
      document.removeEventListener("keyup", handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
    className={`popup ${isOpen ? "popup_opened" : ""}`}
    onClick={handleOverlayClose}
    >
      <div
        className={`modale__container`}
      >
      <Button
      type = "close"
      title=""
      styleSettings={FOPM_STYLES}
      onClick={onClose}
      // buttonText={
      //   <img src={icon} className="modale__button_close" alt="Закрыть" />
      // }
        className={`popup__close`}
        // type="button"
        // onClick={onClose}
      />
      {children}
      </div>
    </div>
  );
};

export default Modale;
