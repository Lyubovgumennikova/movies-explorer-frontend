import React from "react";
import { Link } from "react-router-dom";
import accaunt from "../../images/icon-account.svg";
import "./AccauntLink.css"

function AccauntLink() {

  return (
    <Link className="accauntLink" to="/profile">
    <img
      className="accauntLink__icon"
      src={accaunt}
      alt="accaunt"
    />
    Аккаунт
  </Link>
  );
}

export default AccauntLink;
