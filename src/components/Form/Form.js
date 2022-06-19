import React, { useState } from "react";
import "./Form.css"

function Form({
  name,
  children,
  buttonText,
  isSubmitted,
  onSubmit,
  title,
  formIsValid,
  isLoadingData,
  styleSettings,
  validationMessage,
  isValid,
  // value,

  ...props
}) {


  return (
    <form className= {styleSettings.form}   onSubmit={onSubmit} noValidate>
      <h1 className="form__title">{title}</h1>
      {children}
      <button
        type="submit"
        // disabled
        // className={`${
        //   !isValid
        //     ? `form__submit-button`
        //     : `form__submit-button form__submit-button_disabled`
        // }`}
        className= {styleSettings.button}
      >
        {isSubmitted ? "Выполняется..." : buttonText}
      </button>
    </form>
  );
}

export default Form;
//noValidate
// function SandboxForm(props) {
//   const [value1, setValue1] = useState("");
//   const [isValid1, setValidity1] = useState(false);
//   const [error1, setError1] = useState("");
//   const [value2, setValue2] = useState("");
//   const [isValid2, setValidity2] = useState(false);
//   const [error2, setError2] = useState("");

//   function handleInput1Change(event) {
//     const input = event.target;
//     setValue1(input.value);
//     setValidity1(input.validity.valid);
//     if (!isValid1) {
//       setError1(input.validationMessage);
//     } else {
//       setError1('');
//     }
//   }

//   function handleInput2Change(event) {
//     const input = event.target;
//         setValue2(input.value);
//         setValidity2(input.validity.valid);
//         if (!isValid2) {
//           setError2(input.validationMessage);
//         } else {
//           setError2('');
//         }
//   }

//   return (
//     <form>
//       <input
//         id="input1-id"
//         name="input1"
//         type="text"
//         value={value1}
//         onChange={handleInput1Change}
//       />
//       <span>{error1}</span>
//       <input
//         id="input2-id"
//         name="input2"
//         type="email"
//         value={value2}
//         onChange={handleInput2Change}
//       />
//       <span>{error2}</span>
//       <button type="submit" disabled={!(isValid1 && isValid2)}>
//         Отправить
//       </button>
//     </form>
//   );
// }

// export default SandboxForm;
