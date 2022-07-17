import React, { useEffect } from "react";
import Button from "../Button/Button";
import "./Modale.css";

const Modale = ({ isOpen, onClose, name, children }) => {
  const FOPM_STYLES = {
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
      className={`modale ${isOpen ? "modale_opened" : ""}`}
      onClick={handleOverlayClose}
    >
      <div className= {`modale__container`}>
        <Button
          type="close"
          title=""
          styleSettings={FOPM_STYLES}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Modale;
