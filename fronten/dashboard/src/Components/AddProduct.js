import React, { useState } from "react";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addproduct = async () => {
    console.warn(!name);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    console.warn(name, price, category, company);

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter Product name"
        className="inputbox"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>

      {error && !name && (
        <span className="invalid-input">Please invalid fill above box</span>
      )}
      <input
        type="text"
        placeholder="Enter Product Price"
        className="inputbox"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      ></input>
      {error && !price && (
        <span className="invalid-input">Enter valid price</span>
      )}

      <input
        type="text"
        placeholder="Enter Product category"
        className="inputbox"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      ></input>

      {error && !category && (
        <span className="invalid-input">Enter valid category</span>
      )}
      <input
        type="text"
        placeholder="Enter Product company"
        className="inputbox"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      ></input>

      {error && !company && (
        <span className="invalid-input">Enter valid company</span>
      )}
      <button className="Button1" onClick={addproduct}>
        Add Product
      </button>
    </div>
  );
}
