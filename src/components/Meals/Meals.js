// 음식 목록 렌더링
import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
    return <React.Fragment>
        <MealsSummary />
        <AvailableMeals />
    </React.Fragment>
};

export default Meals;