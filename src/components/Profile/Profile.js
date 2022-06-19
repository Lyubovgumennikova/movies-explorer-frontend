// import CurrentUserContext from '../../contexts/CurrentUserContext';
import React from "react";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Form from "../Form/Form";
import Input from "../Input/Input";
import NewInput from "../NewInput/NewInput";
import "./Profile.css";
// import ProfileForm from '../ProfileForm/ProfileForm';
// import useFormWithValidation from '../../hooks/useFormValidation';
// import UPDATE_PROFILE_ERRORS_TEXTS from '../../constants/update-profile-errors-texts';

function Profile({
  onSignOut,
  onUpdateCurrentUser,
  isLoadingUpdateCurrentUser,
  updUserResStatus,
}) {
  // const currentUserData = React.useContext(CurrentUserContext);
  const FOPM_STYLES = {
    form: "form__profile",
    group: "profile__group",
    label: "profile__label",
    input: "text-field__profile",
    valid: "text-field__profile_valid",
    button: "form__submit-button_profile",
    // button: "form__submit-button",
    link: "profile__input-text_link"
  };

  // const [isUpdateUserProfileError, setIsUpdateUserProfileError] =
  //   React.useState(false);
  // const [updateUserProfileErrorText, setUpdateUserProfileErrorText] =
  //   React.useState("");
  // const [formIsValid, setFormIsValid] = React.useState(false);

  // const {
  //   values,
  //   errors,
  //   isValid,
  //   handleChange,
  //   resetForm
  // } = useFormWithValidation({});

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   onUpdateCurrentUser(values)
  //   handleToggleEditableProfile();
  //   resetForm(currentUserData);
  // };

  // const [isEdited, setIsEdited] = React.useState(false);

  // const handleToggleEditableProfile = () => {
  //   setIsEdited(!isEdited);
  //   setIsUpdateUserProfileError(false);
  //   setUpdateUserProfileErrorText("");
  // };

  const SUBMIT_BUTTON_SETTINGS = {
    type: "submit",
    title: "Сохранить",
  };

  const INPUTS_DATA = [
    {
      key: 1,
      type: "text",
      id: "name",
      label: "Имя",
      placeholder: "Имя",
      name: "name",
      required: true,
      regexp: "[a-zA-Z -]{2,30}",
      customErrorMessage:
        "Поле name может содержать только латиницу, пробел или дефис: a-zA-Z -",
    },
    {
      key: 2,
      type: "email",
      id: "email",
      label: "Почта",
      placeholder: "Почта",
      name: "email",
      required: true,
    },
  ];

  // const TITLE_TEXT = `Привет, ${currentUserData.name || ''}!`;

  const PROFILE_STYLE_SETTINGS = {
    main: "profile",
  };

  const PROFILE_EDIT_BUTTON_SETTINGS = {
    title: "Редактировать",
  };

  const PROFILE_SIGNOUT_BUTTON_SETTINGS = {
    title: "Выйти из аккаунта",
  };

  // React.useEffect(() => {
  //   if (currentUserData) {
  //     resetForm(currentUserData);
  //   }
  // }, [currentUserData, resetForm])

  // React.useEffect(() => {
  //   setFormIsValid(isValid);
  // }, [isValid, values])

  // React.useEffect(() => {
  //   if (currentUserData.name === values.name && currentUserData.email === values.email) {
  //     setFormIsValid(false);
  //   }
  // }, [currentUserData, values])

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
        // onSubmit={handleSubmit}
      >
{/* <div class="input-group"></div> */}
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
        {/* <span id="password-error" className="popup__input-error"></span> */}
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
