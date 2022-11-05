export function filterByCatgory(meals, category) {
    if (parseInt(category) === -1) return meals
    return meals.filter(meal => meal.strCategory === category)
}

export function filterByCuisine(meals, cuisine) {
    if (parseInt(cuisine) === -1) return meals
    return meals.filter(meal => meal.strArea === cuisine)
}

export function filterBySearch(meals, search) {
    if (!search) return meals
    return meals.filter(meal => 
        meal.strMeal.toLowerCase().startsWith(search.toLowerCase()) ||
        meal.ingredients.some(x => x && x.toLowerCase().startsWith(search.toLowerCase()))
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