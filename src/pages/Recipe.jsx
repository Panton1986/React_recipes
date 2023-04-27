import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getMealById(id)
        .then(data => setRecipe(data.meals[0]));
    },[id])

    return <>
            {!recipe.idMeal ? <Preloader /> : (
                <div className="recipe">
                    <h3>{recipe.strMeal}</h3>
                    <h4>Category: {recipe.strCategory}</h4>
                    {recipe.strArea ? <h4>Canteen: {recipe.strArea}</h4> : null};
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <p>{recipe.strInstructions}</p>

                <table className="centered">
                    <thead>
                        <tr>
                            <th>Ingredients</th>
                            <th>Measures</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(recipe).map(key => {
                                if(key.includes('strIngredient') && recipe[key]){
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{
                                                recipe[`strMeasure${key.slice(13)}`]
                                                }</td>
                                        </tr>
                                    )
                                }
                                return null;
                            })
                        }
                    </tbody>
                </table>

                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5>Recipe Video</h5>
                            <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
                        </div>
                    ) : null}
                </div>
            )}
            <button className="btn" onClick={() => {navigate(-1)}}>Back</button>
           </>
}

export {Recipe}