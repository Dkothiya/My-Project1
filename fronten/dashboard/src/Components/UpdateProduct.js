import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigats = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []); 

  const getProductDetails = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    // console.warn(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const updateProduct = async () => {
    console.warn(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.warn(result);
    navigats("/");
  };

  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        type="text"
        placeholder="Enter Product name"
        className="inputbox"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>

      <input
        type="text"
        placeholder="Enter Product Price"
        className="inputbox"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      ></input>

      <input
        type="text"
        placeholder="Enter Product category"
        className="inputbox"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      ></input>

      <input
        type="text"
        placeholder="Enter Product company"
        className="inputbox"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
      ></input>

      <button className="Button1" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
}
