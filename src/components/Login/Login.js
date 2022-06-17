import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
// import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import Input from "../Input/Input";
import NewInput from "../NewInput/NewInput";
import "./Login.css";

function Login({ onLogin, isSubmitted, setIsSubmitted, ...props }) {
  const [isincluded, setIsincluded] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setIsincluded((old) => ({
      ...old,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = isincluded;

    if (!email || !password) {
      return;
    }
    onLogin({
      email,
      password,
    });
  }

  return (
    <div className="login">
      <Header />
      <Form
        name="Login"
        title="Рады видеть!"
        buttonText="Войти"
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          required
          name="E-mail"
          // className="popup__input popup__input_auth"
          // placeholder="Email"
          maxLength="30"
          onChange={handleChange} //={setEmail}
          // value={isincluded.email}
        />
        {/* <span id="email-error" className="popup__input-error"></span> */}
        <Input
          type="password"
          required
          name="Пароль"
          label="email"
          // className="popup__input popup__input_auth"
          // placeholder="Пароль"
          onChange={handleChange} //={setPassword}
          // value={isincluded.password}
        />
        {/* <span id="password-error" className="popup__input-error"></span> */}
      </Form>
      <NewInput
        text="Ещё&nbsp;не&nbsp;зарегистрированы&#63;"
        link="Регистрация"
      />
    </div>
  );
}

export default Login;
