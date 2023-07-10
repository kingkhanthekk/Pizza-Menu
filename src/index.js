import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Khan Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaInfo={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>Currently we don't have any pizza.</p>
      )}
    </div>
  );
};

const Pizza = ({ pizzaInfo }) => {
  // if (props.pizzaInfo.soldOut)
  //   return (
  //     <li className="pizza sold-out">
  //       <img src={props.pizzaInfo.photoName} alt={props.pizzaInfo.name} />
  //       <div>
  //         <h3>{props.pizzaInfo.name}</h3>
  //         <p>{props.pizzaInfo.ingredients}</p>
  //         <span>Price: {props.pizzaInfo.price}</span>
  //       </div>
  //     </li>
  //   );

  return (
    <li className={pizzaInfo.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaInfo.photoName} alt={pizzaInfo.name} />
      <div>
        <h3>{pizzaInfo.name}</h3>
        <p>{pizzaInfo.ingredients}</p>
        <span>
          {pizzaInfo.soldOut ? "Sold Out" : `Price: ${pizzaInfo.price}`}
        </span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour <= 24;

  return (
    <footer className="footer">
      {isOpen ? <Order /> : <p>We're currently closed.</p>}
    </footer>
  );
};

const Order = () => {
  return (
    <div className="order">
      <p>We're open until 24:00. Come visit us or order online.</p>{" "}
      <button className="btn">Order</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
