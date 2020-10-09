import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';

const App= () => {

  const [Data,setData] = useState(null)

  const fetch = () =>{
    axios.get('./data.xml',{"Content-Type": "application/xml"}) 
          .then(res => {
            const parser = new DOMParser()
            const content = parser.parseFromString(res.data,'application/xml')
            return content
            })
          .then(data=> setData(data))
          .catch(err=>console.error(err))
              }

  useEffect(() => {
   fetch()
  }, [])

  return (
    <div className="App">
    {Data && [...Data.getElementsByTagName('title')].map(el=>{return(<h1 key={el.innerHTML}>{el.innerHTML}</h1>)})}
 </div>
  );
}

export default App;
