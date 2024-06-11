import { useState } from "react"


function SearchModal({ closeModal , filterRecipeCard }) {

  const [category, setCategory] = useState("")

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <button onClick={closeModal}>戻る</button>
        <div>
          カテゴリー名:
          <input type="tect" onChange={(e)=>setCategory(e.target.value)}/>
        </div>
        <button onClick={()=>filterRecipeCard(category)}>決定</button>
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
export default SearchModal  