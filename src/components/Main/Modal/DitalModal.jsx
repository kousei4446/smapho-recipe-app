
function DitalModal({ closeModal ,recipe}) {  
    return (
      <div style={modalStyles.overlay}>
        <div style={modalStyles.content}>
          <button onClick={closeModal}>戻る</button>
          <div>
            タイトル：{recipe.title}
            <br/>
            材料：{recipe.ingredients}
            <br/>
            手順：{recipe.instructions}
            <br/>
            カテゴリー：{recipe.category}
            <br/>
            作成日：{recipe.createdAt}
          </div>
        </div>
      </div>
    );
  };
  


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

export default DitalModal;