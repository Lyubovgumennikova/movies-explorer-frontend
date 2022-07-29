import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Form from "../Form/Form";
import Input from "../Input/Input";
import "./Profile.css";
import MenuButton from "../MenuButton/MenuButton";
import { useFormWithValidation } from "../../utils/FormValidation";
import Button from "../Button/Button";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import NOTIFICATION_TEXT_ERROR from "../../constants/NotificationText";

function Profile({
  onOpenMenu,
  onUpdateUser,
  onSignOut,
  profResStatus,
  isSubmitted,
}) {
  const [formIsValid, setFormIsValid] = useState(false);
  const [isRegistrationError, setIsRegistrationError] = useState(false);
  const [registrationErrorText, setRegistrationErrorText] = useState("");

  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  const FOPM_STYLES = {
    form: "profile__form",
    label: "profile__label",
    input: "profile__textInput",
    button: `${
      !isValid
        ? "profile__form_submit-button profile__form_submit-button_disabled"
        : "profile__form_submit-button "
    }`,
    link: "profile__text_link",
    error: "message__error",
    logo: "header__logo",
  };

  const FOPM_STYLES_BUTTON = {
    button: "profile__reset-button",
  };

  const TITLE_TEXT = `Привет, ${currentUser.name || ""}!`;

  const errorHandler = () => {
    if (profResStatus) {
      switch (profResStatus) {
        case 404:
          setIsRegistrationError(true);
          setRegistrationErrorText(
            NOTIFICATION_TEXT_ERROR.PROFILE_ERRORS_TEXTS
          );
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
            NOTIFICATION_TEXT_ERROR.PROFILE_SUCCESS_TEXT
          );
          break;
      }
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
    resetForm(currentUser);
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  useEffect(() => {
    setFormIsValid(isValid);
  }, [isValid, values]);

  useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
    ) {
      setFormIsValid(false);
    }
  }, [currentUser, values]);

  useEffect(() => {
    errorHandler();
  });

  return (
    <div className="profile">
      <Header styleSettings={FOPM_STYLES}>
        <AuthNavigation />
        <MenuButton onOpenMenu={onOpenMenu} />
      </Header>
      <Form
        name="profile"
        title={TITLE_TEXT}
        styleSettings={FOPM_STYLES}
        buttonText="Редактировать"
        onSubmit={handleSubmit}
        isSubmitted={isSubmitted}
        formIsValid={formIsValid}
      >
        <Input
          required
          type="name"
          name="name"
          label="Имя"
          styleSettings={FOPM_STYLES}
          maxLength="30"
          minLength="2"
          onChange={handleChange}
          value={values.name || ""}
          error={errors.name}
          pattern="[a-zA-Zа-яёА-ЯЁ -]{2,30}"
          customErrorMessage="Поле должно сотовлять не менее 2-х символов и содержать только латиницу, кириллицу, пробел или дефис."
        />
        <hr className="portfolio__line" />
        <Input
          required
          type="email"
          name="email"
          label="E-mail"
          styleSettings={FOPM_STYLES}
          onChange={handleChange}
          value={values.email || ""}
          error={errors.email}
        />
        {isRegistrationError && (
          <p className="notifyAboutError_text">{registrationErrorText}</p>
        )}
      </Form>
      <Button
        styleSettings={FOPM_STYLES_BUTTON}
        buttonText="Выйти из аккаунта"
        onClick={onSignOut}
      />
    </div>
  );
}

export default Profile;
