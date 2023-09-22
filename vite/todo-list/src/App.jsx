
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Button from 'react-bootstrap/Button';
import viteLogo from "/vite.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");

  const handleClick = () => {
    setCount((count) => count + 10);
  };

  const handleColorChange = () => {
    if (color === "blue") {
      setColor("red");
    }
    if (color === "red") {
      setColor("blue");
    }
  };

  return (
    
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
      style={{
        backgroundColor: 'green',
        width: '370px',
        height: '100px'
      }}
    />
      <div style={{ backgroundColor: color }}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>Vite + React</h1> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={handleClick}>second add</button>
        <button onClick={() => setCount((count) => count - 1)}>
          decrement
        </button>
        <Button onClick={handleColorChange}>Change the color</Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

