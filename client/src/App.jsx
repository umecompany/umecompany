import {useEffect, useState} from 'react'


function App() {
  const [count, setCount] = useState()
    useEffect(() => {
        fetch("api")
            .then(res => res.text())
            .then(date=>setCount(date))
    }, []);
  return (
<div>こんにちは:{count}</div>
  )
}

export default App
