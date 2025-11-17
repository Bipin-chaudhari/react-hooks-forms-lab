import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = React.useState({
    name: "",
    category: "Produce"
  });

  const handleChange = (e) => {
    setFormData((formData) => (
      {
        ...formData,
        [e.target.name]: e.target.value
      }
    ));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      ...formData
    };

    onItemFormSubmit(newItem);

    setFormData({
      name: "",
      category: "Produce"
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} required />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
