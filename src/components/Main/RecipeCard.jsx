import React, { useState } from 'react';
import "./RecipeCard.css";
import EditModal from './Modal/EditModal';
import DetalModal from './Modal/DitalModal';

function RecipeCard({ recipes, deleteRecipe }) {
  const [isModalEdit, setIsModalEdit] = useState(0);
  const openEditModal = () => setIsModalEdit(1);
  const openDetalModal = () => setIsModalEdit(2);
  const closeModal = () => setIsModalEdit(0);


  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          {isModalEdit === 1 ? (
            <EditModal closeModal={closeModal} recipe={recipe} />
          ) :(isModalEdit ===2 ? 
            <DetalModal closeModal={closeModal} recipe={recipe}/> :
            (
                <div key={recipe.id} className='card'>
                  <p>タイトル: {recipe.title}</p>
                  <p>カテゴリー: {recipe.category}</p>
                  <p>作成日: {recipe.createdAt}</p>
                  <div>
                    <button onClick={() => deleteRecipe(recipe.id)}>削除</button>
                    <button onClick={openEditModal}>編集</button>
                    <button onClick={openDetalModal}>詳細</button>
                  </div>
                </div>
              )
          ) }
        </div>
      ))}
    </div>
  );
}

export default RecipeCard;

