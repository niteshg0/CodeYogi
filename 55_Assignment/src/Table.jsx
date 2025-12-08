import { useState } from "react";
import TableRow from "./TableRow"

function Table() {
    const [num, setNum] = useState(2);

  const handleClick = () => {
    setNum(num + 1);
  };

  return (
    <div className="text-blue-800 font-medium text-2xl">
        <button onClick={handleClick} className="bg-blue-500 px-6 py-2 font-medium text-white rounded">Next </button>
        <TableRow num={num} index={1}/>
        <TableRow num={num} index={2}/>
        <TableRow num={num} index={3}/>
        <TableRow num={num} index={4}/>
        <TableRow num={num} index={5}/>
        <TableRow num={num} index={6}/>
        <TableRow num={num} index={7}/>
        <TableRow num={num} index={8}/>
        <TableRow num={num} index={9}/>
        <TableRow num={num} index={10}/>
    </div>
  )
}
export default Table