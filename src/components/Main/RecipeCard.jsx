import React, { useState } from 'react';
import "./RecipeCard.css";
import EditModal from './Modal/EditModal';
import DetailModal from "./Modal/DetailModal "
import { Visibility } from '@mui/icons-material';
import img1 from "../../img/img1.png";


function RecipeCard({ recipes, deleteRecipe, setRecipes }) {
  const [activeRecipe, setActiveRecipe] = useState(null);
  const closeModal = () => setActiveRecipe(null);


  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className='card' style={{ backgroundImage: `url(${img1})` }}>
          <p>料理名: {recipe.title}</p>
          <p>ジャンル: {recipe.category}</p>
          <p>作成日: {recipe.createdAt}</p>
          <div className='three_btn'>
            <button className="del-btn" onClick={() => deleteRecipe(recipe.id)}>削除</button>
            <button className="edi-btn" onClick={() => setActiveRecipe({ type: `edit`, recipe })}>編集</button>
            <button className="det-btn" onClick={() => setActiveRecipe({ type: `detail`, recipe })}><Visibility /></button>
          </div>
        </div>
      ))}
      {activeRecipe && activeRecipe.type === "edit" && <EditModal closeModal={closeModal} recipe={activeRecipe.recipe} setRecipes={setRecipes} recipes={recipes} />}
      {activeRecipe && activeRecipe.type === "detail" && <DetailModal closeModal={closeModal} recipe={activeRecipe.recipe} setRecipes={setRecipes} recipes={recipes} />}
    </div>
  );
}

export default RecipeCard;

