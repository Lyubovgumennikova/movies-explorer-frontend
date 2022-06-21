// import CurrentUserContext from '../../contexts/CurrentUserContext';
import React from "react";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Form from "../Form/Form";
import Input from "../Input/Input";
import NewInput from "../NewInput/NewInput";
import "./Profile.css";

function Profile({isValid}) {
  // const currentUserData = React.useContext(CurrentUserContext);
  const FOPM_STYLES = {
    form: "profile__form",
    group: "profile__group",
    label: "profile__label",
    // input:  `${isValid
    //     ? "profile__text-field"
    //     : "profile__text-field_valid"
    // }`,
    input: "profile__text-field",
    valid: "profile__text-field_valid",
    button: "profile__form_submit-button",
    // button: "form__submit-button",
    link: "profile__input-text_link",
    error: "message__error"
  };

  function handleSubmit(e) {
    console.log("lkjds")
    e.preventDefault();

    // const { name, email, password } = newEntry;
    // onRegister({
    //   name,
    //   email,
    //   password,
    // });
  }

  return (
    <div className="profile">
      <Header>
        <AuthNavigation />
      </Header>
      <Form
        name="Login"
        title="Привет, {name}!"
        styleSettings={FOPM_STYLES}
        buttonText="Редактировать"
        // isSubmitted={isSubmitted}
        // setIsSubmitted={setIsSubmitted}
        onSubmit={handleSubmit}
      >
        <Input
          required
          type="name"
          name="Имя"
          styleSettings={FOPM_STYLES}
          maxLength="30"
          // onChange={handleChange} //={setEmail}
          // value={isincluded.email}
        />
        <hr class="portfolio__line" />
        <Input
          required
          type="email"
          name="E-mail"
          styleSettings={FOPM_STYLES}
          // placeholder="Пароль"
          // onChange={handleChange} //={setPassword}
          // value={isincluded.password}
        />
      </Form>
      <NewInput
        styleSettings={FOPM_STYLES}
        linkText="Выйти из аккаунта"
        linkPath="/signup"
      />
    </div>
  );
}

export default Profile;
