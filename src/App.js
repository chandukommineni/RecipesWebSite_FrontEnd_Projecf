import Navbar from "./components/Navbar";
import MealInfo from "./components/MealInfo";
import About from "./components/About";
import './App.css';
import Footer from "./components/Footer";

import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import MainInfoContainer from "./components/MainInfoContainer";
function App() {

  const [url, setUrl] = useState(" https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
  const [items, setItems] = useState([])
   const fetching=async()=>{

    await fetch(url).then(res => res.json()).then(data => setItems(data.meals))

  }
  useEffect(() => {
     
    fetching();
     
  }, [url])
  return (
    <div className="App">
      <Navbar />
      <Routes> 
            <Route path="/" element={<MainInfoContainer setUrl={setUrl} items={items} url={url} />}/>
            <Route path="/:id" element={<MealInfo/>}/>
            <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
