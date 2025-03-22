import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import CurrentTheme from "./CurrentTheme";

function App() {
  return (
    <div className="dark">
      <h1>Hello!</h1>
      <CurrentTheme />
      <ThemeSwitcher />
    </div>
  );
}

export default App;
