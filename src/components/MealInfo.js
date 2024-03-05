import React, { useEffect } from 'react'
import './MealInfo.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import cookingingredients from '../images/cooking-ingredients.webp'
import instructions from '../images/instructions.png'
const MealInfo = () => {
    const [meal, setMeal] = useState([]);
    let { id } = useParams();
    let url=meal.strYoutube?meal.strYoutube:'';
    let newUrl=url.replace("watch?v=","embed/")

    // if (id !== "") {
    //     fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => res.json()).then(data => setMeal(data.meals[0]))
    // }
    useEffect(()=>{
        const dataFetching= async()=>{
            const response=await fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
             const data=await response.json();
             setMeal(data.meals[0])
        }
        dataFetching();
        window.scrollTo(0, 0)

    },[id])
    // window.onload = function() {
    //     window.scrollTo(0, 0); // Scrolls to the top of the page
    //   };
   
 

    return (
        <div style={{backgroundColor:"#f0f0f0"}}>
            <div className="info-conatiner container-md container-flux">
                <div className="bannerMeal row">
                    <div className="col-sm-6">
                        <div className="picture-container" >
                            <img className="card-img-top" src={meal.strMealThumb} alt="Cardcap" />
                            {/* <div className="card-body">
                            <p className="card-text">{meal.strMeal}</p>
                        </div> */}

                        </div>
                    </div>
                    <div className="col-sm-6 info-displayer">
                        <div>
                        <h2>{meal.strMeal}</h2>
                        </div>
                       
                        <h3>Category: <span>{meal.strCategory}</span></h3>
                        <h3>Tags :<span>{meal.strTags}</span></h3>
                        <h3>Country :<span>{meal.strArea}</span></h3>
                    </div>

                </div>
            </div>
            <div className="container-md conatiner-flux ingredients-container">
                <div className="row ingredients" >
                    <div className="col-sm-5 image">
                        <img className="images" src={cookingingredients} alt="img" />
                    </div>
                    <div className="col-sm-7 listOfIngredients">
                        <h1>Ingredients</h1>
                        <ul className='fontStyle'>
                            <li>{meal.strIngredient1}:{meal.strMeasure1}</li>
                            <li>{meal.strIngredient2}:{meal.strMeasure2}</li>
                            <li>{meal.strIngredient3}:{meal.strMeasure3}</li>
                            <li>{meal.strIngredient4}:{meal.strMeasure4}</li>
                            <li>{meal.strIngredient5}:{meal.strMeasure5}</li>
                            <li>{meal.strIngredient6}:{meal.strMeasure6}</li>
                            <li>{meal.strIngredient7}:{meal.strMeasure7}</li>
                            <li>{meal.strIngredient8}:{meal.strMeasure8}</li>
                        </ul>

                    </div>
                </div>

            </div>
            <div className="container-md container-flux recipe-contianer">
                <div className="row ingredients">
                    <div className="col-sm-7 instruction-container">
                        <h1>Instructions</h1>
                        <p className="instructions fontStyle">
                            {meal.strInstructions}
                        </p>


                    </div>
                    <div className="col-sm-5 image">
                        <img className="images" src={instructions} alt="img" />
                    </div>
                </div>
            </div>
            
            <div className="container videocontainer">
                <div className="row">
                    <div className="col video">
                        <h2>how to cook ?</h2>
                       
                      <iframe  title="youtube video" src={newUrl} ></iframe>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default MealInfo