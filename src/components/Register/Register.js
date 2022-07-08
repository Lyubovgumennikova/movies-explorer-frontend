import React, { useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Form from "../Form/Form";
import NewInput from "../NewInput/NewInput";
import "./Register.css";
import { useFormWithValidation } from "../FormValidation/FormValidation";

function Register({ onRegister, isSubmitted, setIsSubmitted }) {
  const {values, errors, isValid, handleChange, resetForm } = useFormWithValidation({});

  const FOPM_STYLES = {
    form: "form",
    group: "form__group",
    label: "input__label",
    input: "text-field__input",
    valid: "text-field__input_valid",
    button: "form__submit-button",
    link: "login__input-text_link",
    error: "message__error",
    required: true,
  };

  function handleSubmit(e) {
    console.log("ljhg")
    e.preventDefault();
    onRegister(values);
    resetForm()
    // const { name, email, password } = newEntry;
    // onRegister({
    //   name,
    //   email,
    //   password,
    // });
  }

  return (
    <div className="register">
      <Header />
      <Form
        name="register"
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        styleSettings={FOPM_STYLES}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        onSubmit={handleSubmit}
      >
        <Input
          type="name"
          name="Имя"
          styleSettings={FOPM_STYLES}
          onChange={handleChange}
          value={values.name}
        />
        <Input
          type="email"
          name="E-mail"
          styleSettings={FOPM_STYLES}
          onChange={handleChange}
          value={values.email}
        />
        <Input
          type="password"
          name="Пароль"
          styleSettings={FOPM_STYLES}
          onChange={handleChange}
          value={values.password}
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
