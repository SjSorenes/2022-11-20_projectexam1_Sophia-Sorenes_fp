export function filterByCatgory(meals, category) {
    if (parseInt(category) === -1) return meals
    return meals.filter(meal => meal.strCategory.toLowerCase().startsWith(category.toLowerCase()))
}

export function filterByCuisine(meals, cuisine) {
    if (parseInt(cuisine) === -1) return meals
    return meals.filter(meal => meal.strArea.toLowerCase().startsWith(cuisine.toLowerCase()))
}

export function filterBySearch(meals, search) {
    if (!search) return meals
    return meals.filter(meal => 
        meal.strMeal.toLowerCase().includes(search.toLowerCase()) ||
        meal.ingredients.some(ingredient => ingredient.ingredient && ingredient.ingredient.toLowerCase().includes(search.toLowerCase()))
    )
}

var today = new Date()
var curHr = today.getHours()

export function filterByTime() {

}

// export function gatherIngredientsToArray(meals) {
//     let ingredients = []
//     for (let index in meals)
// }