import React,  {useState, useEffect } from "react";
//import ReactDOM from "react-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComponent from "./CardComponent";

function App() {

  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCards = async() => {
      //const response = await fetch('https://0zyed550gd.execute-api.us-east-1.amazonaws.com/Dev-2');
      try {
        const response = await fetch('https://0zyed550gd.execute-api.us-east-1.amazonaws.com/Dev-2');
         setLoading(false);
          setInfo(await response.json());
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
    console.log(info);
  }

  useEffect(() => {
    getCards();
  },[])


  if (loading) {
    return <h1>Loading...</h1>
}

return (
    <>
      <h2>Astronomy App</h2>
        <div className="container-fluid mt-5">
            <div className="row text-center">
              {
                info.map((element) => 
                  element && 
                  <CardComponent title={element.title} url={element.hdurl} desc={element.explanation} date={element.date}></CardComponent>
                )
              }
            </div>  
        </div>

    </>
)
  
}

export default App;
