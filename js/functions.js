export function gatherIngredientsToArray(meals) {
    let returnList = []
    for (var i in meals) {
        let ingredients = []
        const list = Object.keys(meals[i]).filter(x => x.startsWith("strIngredient"))
        for (var c in list) {
            ingredients.push(meals[i][`${list[c]}`])
        }
        Object.assign(meals[i], {ingredients: ingredients})
        returnList.push(meals[i])
    }
    return returnList
}

// export function gatherSpecificIngredientsToArray(meals) {
//     let returnIngredients = []
//     for (var i in )
// }
