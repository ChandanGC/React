import React, {useRef, useState} from 'react'
import "./App.css"
const App1 = () => {
    let [mName, setName] = useState("Kanthara");
    let [img, setImage] = useState(
      "https://cdn.pixabay.com/photo/2022/11/28/20/52/bird-7623166__340.jpg"
    );
    let h1Ref = useRef();
    let photoRef = useRef();

    let handleClick = () => {
        setName("Bird")
        h1Ref.current.style.color = "crimson";
        h1Ref.current.style.background = "black";
        h1Ref.current.style.padding = "5px";
        h1Ref.current.style.border = "2px solid crimson";
        photoRef.current.style.borderRadius = "50%";
        photoRef.current.style.width = "400px";
    }

  return (
      <div>
          <h1 ref={h1Ref}>{mName}</h1>
          <img src={img} alt="" ref={photoRef} />
          <button onClick={handleClick}>Change</button>
    </div>
  )
}

export default App1