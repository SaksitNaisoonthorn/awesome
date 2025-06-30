import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const n = parseInt(number);
    if (!n || n < 1) {
      setResult("กรุณาใส่จำนวนเต็มบวก");
      return;
    }
    const sum = (n * (n + 1)) / 2;
    setResult("ผลรวมตั้งแต่ 1 ถึง " + number + " คือ " + sum);
  };

  return (
    <div className="App">
      <header>
        <h2>ผลรวมของตัวเลขตั้งแต่ 1 ถึงค่านั้น</h2>
        <input
          type="number"
          placeholder="กรอกเลข"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={handleCalculate}>คำนวณ</button>
        <p>{result}</p>
      </header>
    </div>
  );
}

export default App;

// const [name, setName] = useState("Pond");
// const [data, setData] = useState([]);

// useEffect(() => {
//   fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
//     .then((res) => res.json())
//     .then((data) => setData(data));
// }, [count]);

// console.log(data);

// import logo from "./logo.svg";
// import "./App.css";
