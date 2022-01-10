import logo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <main>
      <header className="appbar__container">
        <div>
          <img alt="logo" src={logo} />
        </div>
        <h3 className="appbar__title">Simple, as you need</h3>
      </header>
    </main>
  );
}

export default App;
