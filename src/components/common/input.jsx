import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <form-group className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </form-group>
  );
};

export default Input;
