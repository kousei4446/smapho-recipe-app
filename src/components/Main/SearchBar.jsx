import React, { useState } from 'react';
import "./SearchBar.css";
import { Search } from '@mui/icons-material';


function SearchBar({ recipes, setSerch ,setRecipes}) {
    const [category, setCategory] = useState("");

    const handleSearch = (e) => {
        const categoryValue = e.target.value; // 入力された値を取得
        setCategory(categoryValue); // categoryのステートを更新
        setSerch(false); // 検索状態を更新

        let filteredRecipes = recipes.filter((recipe) => recipe.category.includes(categoryValue)); // 入力値でフィルタリング
        setRecipes(filteredRecipes)
    }

    return (
        <div className='search-container'>
            <div className='search-main'>
                <Search className='search-icon' style={{ color: "rgb(230, 230, 230)" }} />
                <input
                    className='search-input'
                    placeholder='カテゴリー名を検索'
                    type='text'
                    value={category} // categoryのステートをバインド
                    onChange={handleSearch} // 入力変更時にhandleSearchを呼び出し
                />
            </div>
        </div>
    );
}

export default SearchBar;
