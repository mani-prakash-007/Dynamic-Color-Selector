import { ColorApp } from "./components/ColorApp";
function App() {
  return (
    <>
      <div>
        <h1 className="font-bold text-xl text-center bg-green-600">
          Dynamic Color Selector
        </h1>
        <div className="border border-black flex justify-center">
          <ColorApp />
        </div>
      </div>
    </>
  );
}

export default App;
