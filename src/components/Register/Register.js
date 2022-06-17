import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Input from "../Input/Input";
import Form from "../Form/Form";
import NewInput from "../NewInput/NewInput";
import SandboxForm from "../Forms/Forms"

function Register({ onRegister, isSubmitted,  }) {
  const [newEntry, setNewEntry] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNewEntry((old) => ({
      ...old,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, password } = newEntry;
    onRegister({
      name,
      email,
      password,
    });
  }

  return (
    <SandboxForm/>
  )

  // return (
  //   <div className="register">
  //     <Header />
  //     <Form
  //       name="register"
  //       title="Добро пожаловать!"
  //       buttonText="Зарегистрироваться"
  //       isSubmitted={isSubmitted}
  //       setIsSubmitted={setIsSubmitted}
  //       onSubmit={handleSubmit}
  //     >
  //       <Input
  //         type="name"
  //         name="Имя"
  //         className="popup__input popup__input_auth"
  //         // placeholder="Имя"
  //         onChange={handleChange}
  //         // value={newEntry.name}
  //       />
  //       <Input
  //         type="email"
  //         name="E-mail"
  //         className="popup__input popup__input_auth"
  //         // placeholder="Email"
  //         onChange={handleChange}
  //         // value={newEntry.email}
  //       />
  //       {/* <span id="email-error" className="popup__input-error"></span> */}
  //       <Input
  //         type="password"
  //         name="Пароль"
  //         className="popup__input popup__input_auth"
  //         // placeholder="Пароль"
  //         onChange={handleChange}
  //         // value={newEntry.password}
  //       />
  //       {/* <span id="password-error" className="popup__input-error"></span> */}
  //     </Form>
  //     <NewInput text="Уже&nbsp;зарегистрированы&#63;" link="Войти" />
  //   </div>
  // );
}

export default Register;
