// import React, { useState } from 'react'
import { useState } from "react";
import "./HeroSection.css"
const HeroSetion = ({setUrl}) => {
  const [search,setSearch]=useState('');
  const handleClick=()=>{
       setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
       setSearch('')
  }
  return (
   
    <div className="container-flux banner">
      <div className="row banner-container">
        <div className="col-sm-5 info">
          <h2>Thinking of what to cook ?</h2>
          <p>Find the best recipes at a click of a button from the largest community</p>
        </div>
        <div className="col-sm-7 input">
          <input type="text" className="searchbar" placeholder='find you item here....' value={search} onChange={(e)=>{
            setSearch(e.target.value)
          }}/>
         <button className='button btn' onClick={handleClick}><i className="fa-solid fa-magnifying-glass"></i></button>
         
        </div>
      </div>
    </div>
  )
}

export default HeroSetion