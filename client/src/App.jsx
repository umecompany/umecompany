import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState();

  useEffect(() => {
    fetch("/api/lists")
      .then((res) => res.text())
      .then((date) => setCount(date));
  }, []);
  return <div>{count}</div>;
}

export default App;
