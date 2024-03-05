import React, { useState } from 'react'
import './Navigation.css'
const Navigation = ({ setUrl, url }) => {
    const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const [index,setIndex]=useState(1)
  const urlChange=()=>{
    setIndex(index+1)
    setUrl(` https:/www.themealdb.com/api/json/v1/1/search.php?f=${a[index]}`)
    // window.scrollTo({
    //     top: 1000,
    //     behavior: 'smooth',
    //   });
  }
    return (
        <div className="container button-container">
            <div className="row">
                <div className="col buttons">
                    <button onClick={urlChange} className='btn btn-sm'><a href='#dishes'>next</a></button>

                </div>

            </div>
        </div>
    )
}

export default Navigation