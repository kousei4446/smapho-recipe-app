import React, { useEffect, useState } from 'react'
import "./Main.css"
import Foot from '../Foot/Foot';
import RecipeCard from './RecipeCard';
import AddModal from './Modal/AddModal';
import SearchModal from './Modal/SearchModal';
import SearchBar from './SearchBar';



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

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes))
  }, [recipes])

  const deleteRecipe = (id) => {
    let updateRecipe = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(updateRecipe)
  }

  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null)

  const [filterRecipes, setFilterRecipes] = useState([])
  const filterRecipeCard = (category) => {
    let newRecipes = recipes.filter((recipe) => recipe.category === category);
    setFilterRecipes([...newRecipes])
    setActiveModal({ type: "filterCard" })
  }
  const [serch, setSerch] = useState(true)

  return (
    <div style={{backgroundColor:"rgb(225, 215, 226)"}}>
      <SearchBar recipes={recipes} setSerch={setSerch} setRecipes={setFilterRecipes} />
      <div className='main'>
        {activeModal ?
          activeModal.type === "addModal" ?
            <AddModal closeModal={closeModal} recipes={recipes} setRecipes={setRecipes} /> :
            activeModal.type === "searchModal" ?
              <SearchModal closeModal={closeModal} filterRecipeCard={filterRecipeCard} /> :
              activeModal.type === "filterCard" ? (
                <div>
                  <button onClick={() => setActiveModal(null)}>戻る</button>
                  <RecipeCard recipes={filterRecipes} deleteRecipe={deleteRecipe} setRecipes={setRecipes} /> :
                </div>
              ) :
                null :
          serch ? <RecipeCard recipes={recipes} deleteRecipe={deleteRecipe} setRecipes={setRecipes} /> :
            <RecipeCard recipes={filterRecipes} deleteRecipe={deleteRecipe} setRecipes={setFilterRecipes} />
        }

        <div className='foot'>
          <Foot setActiveModal={setActiveModal} />
        </div>
      </div>
    </div>
  )
}

export default Main;
