import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';

const App= () => {
  const [Data,setData] = useState([])
  const [Dataxml,setDataxml] = useState([])
  const fetch = () =>{ 
    try{
    axios.get('./data.xml',{"Content-Type": "application/xml"}) 
          .then(res => setData(res.data))
        }
    catch(error){
      console.log(error.message)
    }
  }
  const xmlFetch =()=>{
    axios
.get("https://fakerestapi.azurewebsites.net/api/books", {"Content-Type": "application/xml"})
.then((response)=> setDataxml(response.data.slice(0, 10)))
.catch((error)=> {
  console.log(error)
});
  }
   
      
  useEffect(() => {
   xmlFetch()
   
  }, [])

  return (
    <div className="App">
    <pre>
    {Dataxml.map(item=> <div key={item.ID}>{item.Title}</div>)}
    </pre>
 </div>
  );
}

export default App;
