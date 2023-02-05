import { useState } from 'react'
import "./FormFields.css";

const FormFields = (props) => {
  const placeholderModified = `${props.placeholder}...`;

  const whenTyping = (e) => {
    props.whenChanged(e.target.value);
  };

  return (
    <div className="form-fields">
      <label>{props.label}</label>
      <input
        value={props.valueContent}
        onChange={whenTyping}
        type={props.inputType}
        required={props.mandatory}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default FormFields;
