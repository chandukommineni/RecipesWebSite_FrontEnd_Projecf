import React from 'react'
import Dishes from "../components/Dishes";
import HeroSetion from "../components/HeroSection";
import Navigation from './Navigation';
const MainInfoContainer = ({setUrl,items,url}) => {
  return (
    <> 
       <HeroSetion setUrl={setUrl} />
    <Dishes items={items} />
    <Navigation setUrl={setUrl} url={url}/>
    </>
 
  )
}

export default MainInfoContainer