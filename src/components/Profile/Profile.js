// import CurrentUserContext from '../../contexts/CurrentUserContext';
import React from "react";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Form from "../Form/Form";
import Input from "../Input/Input";
import NewInput from "../NewInput/NewInput";
import "./Profile.css";
import MenuButton from "../MenuButton/MenuButton";
import { useFormWithValidation } from "../../utils/FormValidation";

function Profile({ onOpenMenu, onUpdateUser }) {
  // const currentUserData = React.useContext(CurrentUserContext);
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
    button: "profile__form_submit-button",
    // button: "form__submit-button",
    link: "profile__text_link",
    error: "message__error",
    logo: "header__logo",
  };

  function handleSubmit(e) {
    console.log("профсамбит");
    e.preventDefault();
    onUpdateUser(values);
    resetForm();
  }

  return (
    <div className="profile">
      {/* <Header styleSettings={FOPM_STYLES}> */}
        {/* <AuthNavigation /> */}
        {/* <MenuButton onOpenMenu={onOpenMenu} /> */}
      {/* </Header> */}
      {/* <h1 className="form__title">"Привет, {name}!"</h1> */}
      <Form
        name="Login"
        title="Привет, {name}!"
        styleSettings={FOPM_STYLES}
        buttonText="Редактировать"
        onSubmit={handleSubmit}
        formIsValid={isValid}
      >
        <Input
          required
          type="name"
          name="username"
          label="Имя"
          styleSettings={FOPM_STYLES}
          maxLength="30"
          onChange={handleChange}
          value={values.username}
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
          value={values.email}
          error={errors.email}
        />
      </Form>
      <NewInput
        styleSettings={FOPM_STYLES}
        linkText="Выйти из аккаунта"
        linkPath="/"
      />
    </div>
  );
}

export default Profile;
