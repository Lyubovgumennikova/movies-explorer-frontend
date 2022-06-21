import React, { useState } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Input from "../Input/Input";
import NewInput from "../NewInput/NewInput";
import "./Login.css";

function Login({ onLogin, isSubmitted, setIsSubmitted }) {
  const FORM_STYLES = {
    form: "form",
    group: "form__group",
    label: "input__label",
    input: "text-field__input",
    valid: "text-field__input_valid",
    button: "form__submit-button",
    link: "login__input-text_link",
    error: "message__error",
  };

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
    console.log("ljhg")
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
//  const handleSubmit = () => {
//     return console.log("ljhg")
//   };
  return (
    <div className="login">
      <Header />
      <Form
        name="Login"
        title="Рады видеть!"
        buttonText="Войти"
        styleSettings={FORM_STYLES}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          required
          name="E-mail"
          styleSettings={FORM_STYLES}
          maxLength="30"
          onChange={handleChange}
          value={isincluded.email}
        />
        <Input
          type="password"
          required
          name="Пароль"
          styleSettings={FORM_STYLES}
          onChange={handleChange}
          value={isincluded.password}
        />
      </Form>
      <NewInput
        styleSettings={FORM_STYLES}
        text="Ещё&nbsp;не&nbsp;зарегистрированы&#63;"
        linkText="Регистрация"
        linkPath="/signup"
      />
    </div>
  );
}

export default Login;
