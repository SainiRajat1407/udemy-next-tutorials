import MealItem from "./meal-item";
import classes from './meal-item.module.css'



export default function MealsGrid({meals}){
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => (
                <MealItem
                   {...meal}
                />
            ))}
        </ul>
    );
}