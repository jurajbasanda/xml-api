import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';

const App= () => {
  const [Data,setData] = useState([])
  const [Dataxml,setDataxml] = useState([])

  const fetch = () =>{ 
    axios.get('/data.xml',{"Content-Type": "application/xml"}) 
          .then(res => setData(res))
          .catch(error=>console.log(error.message))    
  }
  const xmlFetch =()=>{
    axios
.get("https://fakerestapi.azurewebsites.net/api/books", {"Content-Type": "application/xml"})
.then((response)=> setDataxml(response))
.catch((error)=> {
  console.log(error)
});
  }
   
      
  useEffect(() => {
   xmlFetch()
   fetch()
   
  }, [])

  return (
    <div className="App">
    <pre>
    </pre>
 </div>
  );
}

export default App;
