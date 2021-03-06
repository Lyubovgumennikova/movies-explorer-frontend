import React from "react";
import Popup from "../Modale/Modale";
import UnionX from "../../images/UnionX.svg"
import "./InfoTooltip.css"

function InfoTooltip({
  name,
  isOpen,
  onClose,
  infoTooltip,
  src,
  ...props
  }) {

  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <figure name={name} className="popup__register">
        <img
          className="popup__image-register"
          src={ UnionX}
          alt={name}
        />
        <figcaption className="popup__text">
          { "Поменяйте запрос и опробуйте ещё раз."}
        </figcaption>
      </figure>
    </Popup>
  );
}

export default InfoTooltip;
