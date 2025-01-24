import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white cursor-pointer"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white cursor-pointer"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white cursor-pointer"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-black cursor-pointer "
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("yellow")}
            >
              yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white cursor-pointer"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              olive
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white cursor-pointer"
              style={{ backgroundColor: "black" }}
              onClick={() => setColor("black")}
            >
              black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
