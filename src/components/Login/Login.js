import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Input from "../Input/Input";
import NewInput from "../NewInput/NewInput";
import "./Login.css";
import "../Input/Input.css";
import { useFormWithValidation } from "../../utils/FormValidation";
import NOTIFICATION_TEXT_ERROR from "../../constants/NotificationText";

function Login({ onLogin, logResStatus }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  const [isRegistrationError, setIsRegistrationError] = useState(false);
  const [registrationErrorText, setRegistrationErrorText] = useState("");

  const FORM_STYLES = {
    form: "form",
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

  const errorHandler = () => {
    if (logResStatus) {
      switch (logResStatus) {
        case 401:
          setIsRegistrationError(true);
          setRegistrationErrorText(NOTIFICATION_TEXT_ERROR.LOGIN_ERRORS_TEXTS);
          break;
        case 400:
          setIsRegistrationError(true);
          setRegistrationErrorText(NOTIFICATION_TEXT_ERROR.LOGIN_UNAUTHORIZED);
          break;
        case 500:
          setIsRegistrationError(true);
          setRegistrationErrorText(
            NOTIFICATION_TEXT_ERROR.INTERNAL_SERVER_ERROR
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

  function handleSubmit(e) {
    console.log("логинсубмит");
    e.preventDefault();
    onLogin(values);
  }

  useEffect(() => {
    errorHandler();
  }, [logResStatus]);

  return (
    <div className="login">
      <Header styleSettings={FORM_STYLES} />
      <Form
        name="Login"
        title="Рады видеть!"
        buttonText="Войти"
        styleSettings={FORM_STYLES}
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
          maxLength="30"
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
          styleSettings={FORM_STYLES}
          onChange={handleChange}
          value={values.password}
          error={errors.password}
        />
        {isRegistrationError && (
          <p className="notifyAboutError_text">{registrationErrorText}</p>
        )}
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
