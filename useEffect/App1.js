import React, {useEffect, useState} from 'react'

const App1 = () => {
    let [value, setValue] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", () => {
            setValue(window.innerWidth)
            console.log(value)
        })
    },[value])
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}

export default App1