import React from "react";
import Button from "../Button/Button";
import "./MenuButton.css";
import icon from "../../images/icon__menu_open.svg";

const MUNU_BUTTON_LABEL = "открыть меню";
const FOPM_STYLES = {
  button: "menuButton",
};

function MenuButton({ onOpenMenu }) {
  return (
    <Button
      type="button"
      title={MUNU_BUTTON_LABEL}
      styleSettings={FOPM_STYLES}
      onClick={onOpenMenu}
      buttonText={<img src={icon} className="menuButton" alt="Открыть" />}
    />
  );
}

export default MenuButton;
