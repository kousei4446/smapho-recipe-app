import { useState } from "react"


function Modal({ closeModal, setRecipes ,recipes}) {
    const [title, setTitle] = useState("")
    const [ingredient, setIngredient] = useState("")
    const [instructions, setInstructions] = useState("")
    const [category, setCategory] = useState("")
  
    const addRecipe=()=>{
      const newRecipe = {
        id: Math.floor(Math.random() * 1000000),
        title: title,
        ingredients:ingredient,
        instructions:instructions,
        category: category,
        createdAt: new Date(Date.now()).toLocaleDateString("ja-JP", {
          hour: "2-digit",
          minute: "2-digit"
        })
      }
      setRecipes([...recipes,newRecipe])
      closeModal()
    }
    return (
      <div style={modalStyles.overlay}>
        <div style={modalStyles.content}>
          <button onClick={closeModal}>戻る</button>
          <div>
            料理名:<input type='text' onChange={(e)=>setTitle(e.target.value)}/>
            <br />
            材料:<input type='text' onChange={(e)=>setIngredient(e.target.value)}/>
            <br/>
            手順:<input type='text' onChange={(e)=>setInstructions(e.target.value)}/>
            <br />
            カテゴリー:<input type='text' onChange={(e)=>setCategory(e.target.value)}/>
            <br />
            <button onClick={addRecipe}>確定</button>
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
export default Modal  