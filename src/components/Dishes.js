import './Dishes.css'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Dishes = ({ items }) => {
    const navigate=useNavigate();
    return <>
    <div className="heading">
        <h1> Our Dishes</h1>
        <p>check it once and try to make it once </p>
    </div>
    <div className="card-container container" id='dishes'>
    
        
        {
            !items ? "no data" : items.map((dish, index) => {

                return (
                    <div className="card" key={index} onClick={()=>navigate(`/${dish.idMeal}`)}>
                        <img className="card-img-top" src={dish.strMealThumb} alt="Cardcap" />
                        <div className="card-body">
                            <p className="card-text">{dish.strMeal}</p>
                        </div>
            
                    </div>
            
 
                )
                    
                })
            }

    </div>
    </>
}

export default Dishes