import React, { useState, useRef, useEffect } from 'react';

const initialState = {
  name: '',
  price: '',
  description: '',
};

export const Form = ({ onSubmit }) => {
  const [formInfo, setFormInfo] = useState(initialState);
  const activeInputRef = useRef();

  useEffect(() => {
    // activeInputRef.current.focus();
    activeInputRef.current = formInfo;

    console.log(activeInputRef);
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;

    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(formInfo);

    setFormInfo(initialState);
  };

  const { name, price, description } = formInfo;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          ref={activeInputRef}
          placeholder="price"
          type="text"
          name="price"
          value={price}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          placeholder="Description"
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
