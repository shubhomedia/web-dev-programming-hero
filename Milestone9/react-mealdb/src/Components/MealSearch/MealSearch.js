import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MealCard from '../MealCard/MealCard';

const MealSearch = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText])

    const handleSearchField = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    return (
        <div>
            <input onChange={handleSearchField} placeholder="Search Meals Here" type="text" />
            <div>
                {
                    meals.map(meal => <MealCard key={meal.idMeal} meal={meal}></MealCard>
                    )
                }

            </div>
        </div>
    );
};

export default MealSearch;