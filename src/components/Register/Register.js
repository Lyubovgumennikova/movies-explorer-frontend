import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Form from "../Form/Form";
import NewInput from "../NewInput/NewInput";
import "./Register.css";
import { useFormWithValidation } from "../../utils/FormValidation";
import NOTIFICATION_TEXT_ERROR from "../../constants/NotificationText";

function Register({ onRegister, isSubmitted, regResStatus, isLoggedIn, isLoadingData }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});
  const [isRegistrationError, setIsRegistrationError] = useState(false);
  const [registrationErrorText, setRegistrationErrorText] = useState("");
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
  }

  const errorHandler = () => {
    if (regResStatus) {
      switch (regResStatus) {
        case 409:
          setIsRegistrationError(true);
          setRegistrationErrorText(NOTIFICATION_TEXT_ERROR.CONFLICT_EMAIL);
          break;
        case 400:
          setIsRegistrationError(true);
          setRegistrationErrorText(
            NOTIFICATION_TEXT_ERROR.REGISTRATION_ERRORS_TEXTS
          );
          break;
        case 200:
          setIsRegistrationError(false);
          setRegistrationErrorText("");
          resetForm();
          break;
        default:
          setIsRegistrationError(true);
          setRegistrationErrorText(
            NOTIFICATION_TEXT_ERROR.REGISTRATION_ERRORS_TEXTS
          );
          break;
      }
    }
  };

  useEffect(() => {
    errorHandler();
  }, [regResStatus]);

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
        onSubmit={handleSubmit}
        formIsValid={isValid}
        isLoadingData={isLoadingData}
        errors={errors}
      >
        <Input
          required
          type="name"
          name="name"
          label="Имя"
          styleSettings={FOPM_STYLES}
          minLength="2"
          onChange={handleChange}
          value={values.name}
          error={errors.name}
          pattern="[a-zA-Zа-яёА-ЯЁ -]{2,30}"
          customErrorMessage="Поле должно сотовлять не менее 2-х символов и содержать только латиницу, кириллицу, пробел или дефис."
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
          pattern="\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"
          customErrorMessage=" Поле должно содержать точку и доменное имя(ru,com,info)."
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
        {isRegistrationError && (
          <p className="notifyAboutError_text">{registrationErrorText}</p>
        )}
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
