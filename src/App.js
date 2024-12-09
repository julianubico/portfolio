import Home from "./pages/Home.tsx";
import "./index.css";
import Background from "./components/Background";

function App() {
  return (
    <div className="h-full w-full select-none overflow-y-auto">
      <Background />
      <Home />
    </div>
  );
}

export default App;
