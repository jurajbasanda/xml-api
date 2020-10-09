import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';

const App= () => {
  const [Data,setData] = useState({})
  const fetch = async () =>{ 
    try{
    const res = await axios.get('./data.xml') 
             await setData(res.data)
    let parser = new DOMParser()
    let xmlDOM = parser.parseFromString(Data,'application/xml')
          console.log(xmlDOM)
          console.log(Data)
        }
    catch(error){
      console.log(error.message)
    }
      }
  useEffect(() => {
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
