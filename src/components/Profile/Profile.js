// import CurrentUserContext from '../../contexts/CurrentUserContext';
import React, { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Form from "../Form/Form";
import Input from "../Input/Input";
import NewInput from "../NewInput/NewInput";
import "./Profile.css";
import MenuButton from "../MenuButton/MenuButton";
import { useFormWithValidation } from "../../utils/FormValidation";
import Button from "../Button/Button";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onOpenMenu, onUpdateUser, onSignOut, isOpen }) {
  const [isEdited, setIsEdited] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

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
    input: `${isValid ? "profile__textInput" : "profile__textInput_valid"}`,
    button: `${
      isValid
        ? "profile__form_submit-button"
        : "profile__form_submit-button profile__form_submit-button_disabled"
    }`,
    link: "profile__text_link",
    error: "message__error",
    logo: "header__logo",
  };

  const FOPM_STYLES_BUTTON = {
    button: "profile__reset-button",
  };

  function handleSubmit(e) {
    console.log("профсамбит");
    e.preventDefault();
    onUpdateUser(values);
    resetForm(currentUser);
  }

  // useEffect(() => {
  //   setFormIsValid(isValid);
  // }, [isValid, values])

  useEffect(() => {
    // if (currentUser.name === values.name && currentUser.email === values.email) {
    //       setFormIsValid(true);
    //     }

    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser, resetForm]);



  React.useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setFormIsValid(false);
    }
  }, [currentUser, values])




  return (
    <div className="profile">
      <Header styleSettings={FOPM_STYLES}>
        <AuthNavigation />
        <MenuButton onOpenMenu={onOpenMenu} />
      </Header>
      {/* <h1 className="form__title">"Привет, {name}!"</h1> */}
      <Form
        name="Login"
        title="Привет, {name}!"
        styleSettings={FOPM_STYLES}
        buttonText="Редактировать"
        onSubmit={handleSubmit}
        formIsValid={isValid}
        // disabled={!formIsValid}
      >
        <Input
          required
          type="name"
          name="username"
          label="Имя"
          styleSettings={FOPM_STYLES}
          maxLength="30"
          onChange={handleChange}
          value={values.username || name}
          // value={values.username}
          error={errors.username}
        />
        <hr class="portfolio__line" />
        <Input
          required
          type="email"
          name="email"
          label="E-mail"
          styleSettings={FOPM_STYLES}
          onChange={handleChange}
          value={values.email || email}
          error={errors.email}
        />
      </Form>
      <Button
        styleSettings={FOPM_STYLES_BUTTON}
        // type={type}
        // title={title}
        buttonText="Выйти из аккаунта"
        onClick={onSignOut}
      />
    </div>
  );
}

export default Profile;
