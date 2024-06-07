import React, { useEffect, useState } from 'react'
import "./Main.css"
import RecipeCard from './RecipeCard';
import Modal from './Modal/MainModal';

function Main() {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [{
      id: Math.floor(Math.random() * 1000000),
      title: "例：カレーライス",
      ingredients: "カレールー",
      instructions: "お湯で温める",
      category: "中華",
      createdAt: new Date(Date.now()).toLocaleDateString("ja-JP", {
        hour: "2-digit",
        minute: "2-digit"
      })
    }];
  });

  useEffect(()=>{
    localStorage.setItem("recipes",JSON.stringify(recipes))
  },[recipes])

  const deleteRecipe = (id) => {
    let updateRecipe = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updateRecipe)
  }
  const [isModal, setIsMordal] = useState(false)
  const closeModal = () => setIsMordal((prev) => !prev)

  return (
    <>
      {isModal ? <Modal closeModal={closeModal} recipes={recipes} setRecipes={setRecipes}/> :
        <div>
          <button className='add-btn' onClick={() => setIsMordal((prev) => !prev)}>+</button>
          <RecipeCard recipes={recipes} deleteRecipe={deleteRecipe} setRecipes={setRecipes}/>
        </div>}
    </>
  )
}

export default Main;
