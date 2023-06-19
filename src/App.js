import React, { useState } from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const Header = () => {
  return (
    <header className="header footer">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
};
const Menu = () => {
  const pizzas = pizzaData;
  const pizzasLength = pizzas.length;
  return (
    <main className="menu">
      <h2>Menu</h2>

      {pizzasLength > 0 ? (
        <div className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza
              key={pizza.name}
              photoName={pizza.photoName}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              soldOut={pizza.soldOut}
            />
          ))}
        </div>
      ) : (
        <p>Sorry, we are closed!</p>
      )}
    </main>
  );
};
const Pizza = ({ photoName, name, ingredients, price, soldOut }) => {
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : price}</span>
      </div>
    </div>
  );
};
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We are open until {closeHour}h! Call us to order at </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>Sorry, we are closed!</p>
      )}
    </footer>
  );
};

export default App;
