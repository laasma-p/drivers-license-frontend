import "./App.css";
import Authorization from "./components/Authorization";
import Instructions from "./components/Instructions";
import Quiz from "./containers/Quiz";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Authorization />
      <Instructions />
      <Quiz />
    </div>
  );
}

export default App;
