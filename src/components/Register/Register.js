import React, { useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Form from "../Form/Form";
import NewInput from "../NewInput/NewInput";
import "./Register.css";
import { useFormWithValidation } from "../../utils/FormValidation";

function Register({ onRegister, isSubmitted, setIsSubmitted, isLoggedIn }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  const FOPM_STYLES = {
    form: "form",
    group: "form__group",
    label: "input__label",
    input: `${isValid ? "text-field__input" : "text-field__input_valid"}`,
    button: `${
      isValid
        ? "form__submit-button"
        : "form__submit-button form__submit-button_disabled"
    }`,
    link: "login__input-text_link",
    error: "message__error",
    logo: "header__logo header__logo_entrance",
    required: true,
  };

  function handleSubmit(e) {
    console.log("ljhg");
    e.preventDefault();
    onRegister(values);
    // resetForm()
  }

  return (
    <div className="register">
      <Header styleSettings={FOPM_STYLES} />
      <Form
        name="register"
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        styleSettings={FOPM_STYLES}
        loggedIn={isLoggedIn}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        onSubmit={handleSubmit}
        formIsValid={isValid}
        errors={errors}
      >
        <Input
          required
          type="name"
          name="name"
          label="Имя"
          styleSettings={FOPM_STYLES}
          onChange={handleChange}
          value={values.name}
          error={errors.name}
          // pattern="[a-zA-Z -]{2,30}"
          // regexp={'[a-zA-Z -]{2,30}'}
        />
        <Input
          required
          type="email"
          name="email"
          label="E-mail"
          styleSettings={FOPM_STYLES}
          onChange={handleChange}
          value={values.email}
          error={errors.email}
        />
        <Input
          required
          type="password"
          name="password"
          label="Пароль"
          minLength="6"
          styleSettings={FOPM_STYLES}
          onChange={handleChange}
          value={values.password}
          error={errors.password}
        />
      </Form>
      <NewInput
        styleSettings={FOPM_STYLES}
        text="Уже&nbsp;зарегистрированы&#63;"
        linkText="Войти"
        linkPath="/signin"
      />
    </div>
  );
}

export default Register;
