import { useState } from "react";

function EditModal({ closeModal, recipe }) {
    const [title, setTitle] = useState(recipe.title);
    const [ingredients, setIngredients] = useState(recipe.ingredients);
    const [instructions, setInstructions] = useState(recipe.instructions);
    const [category, setCategory] = useState(recipe.category);
  
    const doChange = () => {
      // recipeのプロパティを更新
      recipe.title = title;
      recipe.ingredients = ingredients;
      recipe.instructions = instructions;
      recipe.category = category;
      closeModal();
    };
  
    return (
      <div style={modalStyles.overlay}>
        <div style={modalStyles.content}>
          <button onClick={closeModal}>戻る</button>
          <div>
            料理名:
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            材料:
            <input value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            <br />
            手順:
            <input value={instructions} onChange={(e) => setInstructions(e.target.value)} />
            <br />
            カテゴリー:
            <input value={category} onChange={(e) => setCategory(e.target.value)} />
            <br />
            <button onClick={doChange}>確定</button>
          </div>
        </div>
      </div>
    );
  }
  
  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '4px',
      maxWidth: '500px',
      width: '100%',
    },
  };
  export default EditModal;