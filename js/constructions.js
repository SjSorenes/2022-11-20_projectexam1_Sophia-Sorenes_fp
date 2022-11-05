export function createErrorMessage(error) {
    let errorDiv = document.querySelector(".error");
    errorDiv.innerHTML = "An error has occured: " + error;
}

export function createSearchResult(searchResultItem) {
    return ``
}

export function createOption(value, name) {
    return `<option value="${value}">${name}</option>`
}

export function createRecipeCard(meal) {
    return `
    <div class="card-container">
        <a href="recipe.html?id=${meal.idMeal}">
            <div>
                <h3>${meal.strMeal}</h3>
                <img class="thumbnail" src=${meal.strMealThumb} alt="${meal.strMeal}">
            </div>
        </a>
    </div>
    `
}

export function populateRecipeList(recipes) {
    const resultList = document.getElementById("result")
    resultList.innerHTML = ""
    recipes.forEach(meal => {
        resultList.innerHTML += createRecipeCard(meal)
    });
}

export function createRecipeDetails(recipe) {
    return `
    <img src=${recipe.strMealThumb}>
    <div class="flex column">
        <ul class="chip">
            <li><a href="/recipes.html?category=${recipe.strCategory}">${recipe.strCategory}</a></li>
            <li><a href="/recipes.html">${recipe.strArea}</a></li>
        </ul>
    </div>
    <h1>${recipe.strMeal}</h1>
    <div>
        <h2>Ingredients</h2>
        <ul>
            <li>${recipe.strMeasure1} ${recipe.strIngredient1}</li>
            // ETC? --------------------------------------------?
        </ul>
    </div>
    <div>
        <h2>Instructions</h2>
        <p>${recipe.strInstructions}</p>
    </div>
    `
}

// export function createResultByTime() {
//     const 
//     if (curHr < 12) {
//         console.log('good morning')
//         return `
//         <h2>Time for breakfast?</h2>
//         <div class="error"></div>
//         <div id="result">
//         </div>
//         `
//       } else if (curHr < 18) {
//         console.log('good afternoon')
//         return `
//         <h2>Planning dinner?</h2>
//         <div class="error"></div>
//         <div id="result">
//         </div>
//         `
//       } else {
//         console.log('good evening')
//         return `
//         <h2>Got a sweet tooth?</h2>
//         <div class="error"></div>
//         <div id="result">
//         </div>
//         `
//       }
// }