export function gatherIngredientsToArray(meals) {
    let returnList = []

    for (var mealIndex in meals) {

        returnList.push(addIngredientListToMeal(meals[mealIndex]))
    }
    return returnList
}

export function addIngredientListToMeal(meal) {
    let ingredients = []

    const strIngredientKeys = Object.keys(meal).filter(keyInMeals => keyInMeals.startsWith("strIngredient"))
    const strMeasurementKeys = Object.keys(meal).filter(keyInMeals => keyInMeals.startsWith("strMeasure"))

    for (var strIngredientIndex in strIngredientKeys) {
        const strIngredientKey = strIngredientKeys[strIngredientIndex]
        const strMeasureKey = strMeasurementKeys[strIngredientIndex]
        const ingredient = meal[strIngredientKey]
        const measure = meal[strMeasureKey]

        if (!ingredient || !measure) continue
        if (!ingredient.length || !measure.length) continue

        ingredients.push({
            ingredient: ingredient,
            measure: measure
        })
    }

    Object.assign(meal, { ingredients: ingredients })
    return meal
}

export function getParamsFromUrl() {
    return new URLSearchParams(document.location.search)
}

export function setParamToUrl(name, value) {
    const params = getParamsFromUrl()
    params.set(name, value)
    window.location.search = params
}

export function formatText(text, max) {
    const splitedText = text.split(' ')
    const firstWordLength = splitedText[0].length
    const textWithoutFirstWord = text.substring(firstWordLength, text.length)
    const formatedFirstWord = `<span class="first-word">${splitedText[0]}</span>`
    const finalText = formatedFirstWord + textWithoutFirstWord

    if(text.length <= max) return finalText
    return finalText.substring(0, max) + "..."
}

// export function gatherSpecificIngredientsToArray(meals) {
//     let returnIngredients = []
//     for (var i in )
// }
