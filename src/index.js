
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with Italian olive oil and rosemary",
    price: 6,
    image: "/focaccia.jpg"
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    image: "/margherita.jpg"
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    image: "/spinaci.jpg"
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    image: "/funghi.jpg"
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    image: "/salamino.jpg"
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    image: "/prosciutto.jpg"
  }
];

// Header Component
function Header(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
    </header>
  );
}

// Pizza Component using Props
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.image} alt={props.name} />

      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <p className="price">{props.price}</p>
      </div>
    </li>
  );
}

// Menu Component using Props
function Menu(props) {
  return (
    <main className="menu">
      <h2>{props.title}</h2>

      <p>{props.description}</p>

      <ul className="pizzas">
        {props.pizzas.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            image={pizza.image}
          />
        ))}
      </ul>
    </main>
  );
}

// Order Component using Props
function Order(props) {
  return (
    <div className="order">
      <p>{props.message}</p>

      <button className="btn" type="button">
        {props.buttonText}
      </button>
    </div>
  );
}

// Footer Component using Props
function Footer(props) {
  return (
    <footer className="footer">
      {props.openOrNot ? (
        <Order
          message="We're currently open"
          buttonText="Order"
        />
      ) : (
        <p>We're currently closed</p>
      )}
    </footer>
  );
}

// Main App Component
function App() {
  const hour = new Date().getHours();
  const openOrNot = hour >= 10 && hour < 22;

  return (
    <div className="container">
      <Header title="Andy's Pizza Co." />

      <Menu
        title="Our Menu"
        description="Authentic Italian cuisine, all from our stone oven"
        pizzas={pizzaData}
      />

      <Footer openOrNot={openOrNot} />
    </div>
  );
}

// Render React App
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);
