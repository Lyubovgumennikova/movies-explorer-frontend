import React, { useState } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Input from "../Input/Input";
import NewInput from "../NewInput/NewInput";
import "./Login.css";
import "../Input/Input.css"
import { Navigate, useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../FormValidation/FormValidation";

function Login({ onLogin, isSubmitted, setIsSubmitted }) {
  const [isAuthError, setIsAuthError] = useState(false);
  const [authErrorText, setAuthErrorText] = useState(null);

  const {values, errors, isValid, handleChange, resetForm } = useFormWithValidation({});

  let navigate = useNavigate();

  const FORM_STYLES = {
    form: "form",
    label: "input__label",
    input: "text-field__input",
    valid: "text-field__input_valid",
    button: "form__submit-button",
    link: "login__input-text_link",
    error: "message__error",
    header: "login__header",
    required: true,
  };

  const [isincluded, setIsincluded] = useState({
    email: "",
    password: "",
  });

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setIsincluded((old) => ({
  //     ...old,
  //     [name]: value,
  //   }));
  // }

  function handleSubmit(e) {
    console.log("логинсубмит")
      e.preventDefault();

    // const { email, password } = isincluded;

    // if (!email || !password) {
    //   return;
    // }
    onLogin(values);
    // onLogin({
    //   email,
    //   password,
    // });
    resetForm()
    navigate("/movies");
  }

  return (
    <div className="login">
      <Header styleSettings={FORM_STYLES}/>
      <Form
        name="Login"
        title="Рады видеть!"
        buttonText="Войти"
        styleSettings={FORM_STYLES}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        onSubmit={handleSubmit}
        formIsValid={isValid}
        errors={errors}
      >
        <Input
          type="email"
          // required
          name="email"
          label='E-mail'
          styleSettings={FORM_STYLES}
          maxLength="30"
          onChange={handleChange}
          value={values.email}
          error={errors.email}
        />
        <Input
          type="password"
          required
          name="password"
          label='Пароль'
          styleSettings={FORM_STYLES}
          onChange={handleChange}
          value={values.password}
          error={errors.password}
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
