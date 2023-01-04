import React, {useEffect, useState} from 'react'

const App1 = () => {
    let [counter, setCounter] = useState(0)
    let [value, setValue] = useState("")
    useEffect(() => {
        document.title = `you clicked ${counter} times`
        console.log(`you clicked ${counter}`);
        console.log(`you typed ${value.length} times`)
    },[counter,value])
  return (
      <div>
          <h1>{counter}</h1>
          <input type="text" id='inputs' onChange={(e) => {
              setValue(e.target.value)
          }} />
          <button onClick={() => {
              setCounter(counter +1)
          }}>INCREMENT</button>
    </div>
  )
}

export default App1