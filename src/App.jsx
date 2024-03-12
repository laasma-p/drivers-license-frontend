import "./App.css";
import Authorization from "./components/Authorization";
import Instructions from "./components/Instructions";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Authorization />
      <Instructions />
    </div>
  );
}

export default App;
