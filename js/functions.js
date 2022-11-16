export function gatherIngredientsToArray(meals) {
    let returnList = []

    // itererer gjennom hvert meal i meals
    for (var mealIndex in meals) {

        // legger meal, med ny ingredienseliste til i returnlist
        returnList.push(addIngredientListToMeal(meals[mealIndex]))
    }
    return returnList
}

export function addIngredientListToMeal(meal) {
    let ingredients = []

    //henter alle nøklene i meal ex: strName, strCategory...
    // filtrerer slik at jeg bare får alle som begynner på strIngredient
    // da får jeg liste med strIngredient1, strIngredient2, strIngredient3...
    const strIngredientKeys = Object.keys(meal).filter(keyInMeals => keyInMeals.startsWith("strIngredient"))
    const strMeasurementKeys = Object.keys(meal).filter(keyInMeals => keyInMeals.startsWith("strMeasure"))

    // itererer gjennom strIngredient nøkklene
    for (var strIngredientIndex in strIngredientKeys) {
        // gjeldende nøkkel
        const strIngredientKey = strIngredientKeys[strIngredientIndex]
        const strMeasureKey = strMeasurementKeys[strIngredientIndex]
        const ingredient = meal[strIngredientKey]
        const measure = meal[strMeasureKey]

        if (!ingredient || !measure) continue
        if (!ingredient.length || !measure.length) continue

        // legger til verdien i meal til gjeldende nøkkel
        // ex: strIngredient1 sin verdi er tomat, da legger jeg til tomat i ingredient listen
        ingredients.push({
            ingredient: ingredient,
            measure: measure
        })
    }

    // legger til én ny nøkkel med verdi på meal, ingredients, som er en array med ingredienser
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
