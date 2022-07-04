// import CurrentUserContext from '../../contexts/CurrentUserContext';
import React from "react";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Form from "../Form/Form";
import Input from "../Input/Input";
import NewInput from "../NewInput/NewInput";
import "./Profile.css";
import MenuButton from "../MenuButton/MenuButton";

function Profile({isValid, name, onOpenMenu}) {
  // const currentUserData = React.useContext(CurrentUserContext);
  const FOPM_STYLES = {
    form: "profile__form",
    // group: "profile__group",
    label: "profile__label",
    // input:  `${isValid
    //     ? "profile__textInput"
    //     : "profile__textInput_valid"
    // }`,
    input: "profile__textInput",
    valid: "profile__textInput_valid",
    button: "profile__form_submit-button",
    // button: "form__submit-button",
    link: "profile__text_link",
    error: "profile__error"
  };

  function handleSubmit(e) {
    console.log("профсамбит")
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
        <MenuButton onOpenMenu={onOpenMenu} />
      </Header>
      {/* <h1 className="form__title">"Привет, {name}!"</h1> */}
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
          name="E-mail" //&#8208;
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
