import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="notFound">
      <h2 className="notFound__title">404</h2>
      <p className="notFound__subtitle">Страница не найдена</p>
      <button className="notFound__button" onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}
export default NotFound;
