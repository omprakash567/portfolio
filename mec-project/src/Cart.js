import React, { useState } from "react";
//import "./App.css";

function Cart() {
  // Product form - one useState object
  const [product, setProduct] = useState({
    name: "",
    price: ""
  });
  const [products, setProducts] = useState([]);
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };
  const addProduct = (e) => {
    e.preventDefault();
    if (product.name === "" || product.price === "") {
      alert("Please enter product name and price");
      return;
    }
    const newProduct = {
      id: Date.now(),
      name: product.name,
      price: Number(product.price),
      quantity: 1
    };
    setProducts([...products, newProduct]);
    setProduct({
      name: "",
      price: ""
    });
  };
  const increaseQuantity = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  const decreaseQuantity = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const below1000 = products.filter(
    (item) => item.price < 1000
  );
  return (
    <div className="container">
      <h1>🛒 Shopping Cart</h1>
      <form onSubmit={addProduct} className="form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />
        <button type="submit">
          Add Product
        </button>
      </form>
      <hr />
      <h2>All Products</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        products.map((item) => (
          <div className="product" key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <div className="quantity">
              <button
                onClick={() => decreaseQuantity(item.id)}
              >
                −
              </button>
              <span>
                {item.quantity}
              </span>
              <button
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
            </div>
            <p>
              Total: ₹{item.price * item.quantity}
            </p>
          </div>
        ))
      )}
      <hr />
      <h2>Products Below ₹1000</h2>
      {below1000.length === 0 ? (
        <p>No products below ₹1000.</p>
      ) : (
        below1000.map((item) => (
          <p key={item.id}>
            {item.name} - ₹{item.price}
          </p>
        ))
      )}

    </div>
  );
}

export default Cart;
