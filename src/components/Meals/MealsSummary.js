// 음식 목록 위 요약 텍스트
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
            Choose your favorite meal from our broad selection of available meals
            and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
            All our meals are cooked with high-quality ingredients, just-in-time and
            of course by experienced chefs!
        </p>
    </section>
};

export default MealsSummary;