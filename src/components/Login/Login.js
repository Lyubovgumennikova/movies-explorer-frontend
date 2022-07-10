import React, { useState } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Input from "../Input/Input";
import NewInput from "../NewInput/NewInput";
import "./Login.css";
import "../Input/Input.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useFormWithValidation } from "../../utils/FormValidation";

function Login({ onLogin, isSubmitted, setIsSubmitted }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  let navigate = useNavigate();

  const FORM_STYLES = {
    form: "form",
    label: "input__label",
    input: `${isValid ? "text-field__input" : "text-field__input_valid"}`,
    button: "form__submit-button",
    link: "login__input-text_link",
    error: "message__error",
    logo: "header__logo header__logo_entrance",
    required: true,
  };

  // const styldata = {
  //   regexp: "[a-zA-Z -]{2,30}",
  //   customErrorMessage:
  //     "Поле name может содержать только латиницу, пробел или дефис: a-zA-Z -",
  // };

  function handleSubmit(e) {
    console.log("логинсубмит");
    e.preventDefault();
    onLogin(values);
    // resetForm();
    // navigate("/movies");
  }

  return (
    <div className="login">
      {/* <Header styleSettings={FORM_STYLES} /> */}
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
          required
          type="email"
          name="email"
          label="E-mail"
          styleSettings={FORM_STYLES}
          // minLength="5"
          maxLength="30"
          onChange={handleChange}
          value={values.email}
          error={errors.email}
          // regexp={/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i}
          // styldata={styldata}
        />
        <Input
          required
          type="password"
          name="password"
          label="Пароль"
          minLength="6"
          styleSettings={FORM_STYLES}
          onChange={handleChange}
          value={values.password}
          error={errors.password}
          // regexp={"[a-zA-Z -]{2,30}"}
          // styldata={styldata}
          pattern="[a-zA-Z -]{2,30}"
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
