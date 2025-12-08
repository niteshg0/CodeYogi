import { useState } from "react";
import Table from "./Table";

function App() {
  const [flip, setFlip] = useState(false);

  let t1 = "table1";
  let t2 = "table2";

  if (flip) {
    t1 = "table2";
    t2 = "table1";
  }
  return (
    <>
      <div className="flex gap-6 p-4 ">
          <Table key={t1} />
          <Table key={t2} />
      </div>
      <button
        onClick={() => setFlip(!flip)}
        className="bg-blue-500 px-6 py-2 font-medium text-white rounded ml-30 text-2xl"
      >
        Flip
      </button>
    </>
  );
}

export default App;
