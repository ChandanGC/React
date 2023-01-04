import React,{useEffect,useState} from 'react'

const FetchingData = () => {
    let [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        window.fetch("https://api.github.com/users").then((x)=>x.json()).then((value)=>{setData(value)}).catch((err)=>err)
    },[])
  return (
      <div>{data.map((e, index) => {
          return <li key={index}>{ e.login}</li>
      })}</div>
  )
}

export default FetchingData