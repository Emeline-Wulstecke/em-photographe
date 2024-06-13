import React from 'react';

const Form = ({ fields, onSubmit, submitLabel }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            placeholder={field.placeholder}
            required={field.required}
          />
        </div>
      ))}
      <button type="submit">{submitLabel}</button>
    </form>
  );
};

export default Form;
