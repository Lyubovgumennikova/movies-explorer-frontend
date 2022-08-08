import React from "react";
import "./NotifyAboutErro.css";

function NotifyAboutError({ text }) {
  const STYLE_SETTINGS = {
    notify: "notifyAboutError_text",
  };

  return <p className={STYLE_SETTINGS.notify}>{text}</p>;
}

export default NotifyAboutError;
