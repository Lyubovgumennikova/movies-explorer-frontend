import React, { useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Form from "../Form/Form";
import NewInput from "../NewInput/NewInput";
import "./Register.css";

function Register({ onRegister, isSubmitted, setIsSubmitted }) {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [newEntry, setNewEntry] = useState({
    name: "",
    email: "",
    password: "",
  });

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

  function handleChange(e) {
    // const { name, value } = e.target;
    const input = e.target;
    setValue(input.value);
    setIsValid(input.validity.valid);
    if (!isValid) {
      setError(input.validationMessage);
    } else {
      setError("");
    }

    setNewEntry((old) => ({
      ...old,
      [input]: value,
    }));
    setIsValid(input.closest('form').checkValidity());
  }

  function handleSubmit(e) {
    console.log("ljhg")
    e.preventDefault();

    const { name, email, password } = newEntry;
    onRegister({
      name,
      email,
      password,
    });
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
          value={newEntry.name}
        />
        <Input
          type="email"
          name="E-mail"
          styleSettings={FOPM_STYLES}
          onChange={handleChange}
          value={newEntry.email}
        />
        <Input
          type="password"
          name="Пароль"
          styleSettings={FOPM_STYLES}
          onChange={handleChange}
          value={newEntry.password}
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
