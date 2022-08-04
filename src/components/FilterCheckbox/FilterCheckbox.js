import React, { useState } from 'react';

function FilterCheckbox(props) {

  const [onFocus, setOnFocus] = useState(false);

  const handleFocus = () => {
    setOnFocus(true);
  };

  const handleBlur = () => {
    setOnFocus(false);
  };

  return (
    <label
      className={onFocus ? `${props.labelClassName} ${props.onFocusClassName}` : props.labelClassName}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <input



        // onChange={handleChange}

        // onclick={localStorage.setItem("checked", values.shortfilm)}


        className="searchForm__checkbox_input"
        type="checkbox"
        id="shortfilm"
        name="shortfilm"
        required={props.settings.required}
        onChange={props.onChange}
        value={props.value}
        checked={props.value || ''}
      />
      <span
        className="searchForm__checkbox_slider"
      />
      {props.settings.labelText}
    </label>
  )
}

export default FilterCheckbox;
