import { formatText } from "./functions.js";

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
    <div class="random-card desktop-card bc-white">
        <a href="recipe.html?id=${meal.idMeal}">
            <div>
                <h3>${meal.strMeal}</h3>
                <img class="thumbnail" src=${meal.strMealThumb} alt="${meal.strMeal}">
                <p>This is a ${meal.strArea} ${meal.strCategory} dish made with ${meal.strIngredient1}</p>
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

function createIngredientList(ingredients) {
    let ingredientList = "";
    ingredients.forEach((ingredient) => {
        ingredientList += `<li>${ingredient.measure} ${ingredient.ingredient}</li>`
    })
    return ingredientList;
}

export function createRecipeDetails(recipe) {
    return `
    <div class="card padding-10 bc-white">
        <div class="desktop-flex">
            <div class="desktop-flex desktop-column-reverse desktop-grow-1">
                <img src=${recipe.strMealThumb}>
                <div class="flex column">
                    <ul class="chip-list flex gap24">
                        <li class="chip"><a href="/recipes.html?category=${recipe.strCategory}">${recipe.strCategory}</a></li>
                        <li class="chip"><a href="/recipes.html?cuisine=${recipe.strArea}">${recipe.strArea}</a></li>
                    </ul>
                </div>
                <h1>${recipe.strMeal}</h1>
            </div>
            <div class="desktop-flex desktop-center desktop-grow-1">
                <div class="auto-margin">
                    <h2>Ingredients</h2>
                    <ul>
                        ${createIngredientList(recipe.ingredients)}
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <h2>Instructions</h2>
            <p>${recipe.strInstructions}</p>
        </div>
    </div>
    `
}

export function createRandomMealCard(meal) {
    return `
    <h2>Ever tried ${meal.strMeal}?</h2>
    ${createLinkToMeal(meal.idMeal)}
    <div class="flex gap5 card padding-10 bc-white">
        <img class="flex bigchild" src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="flex column smallchild">
            <p>This is a ${meal.strArea} ${meal.strCategory} dish made with ${meal.strIngredient1}</p>
            <p>Get recipe >></p>
        </div>
    </div>
    </a>
    `
}

export function createLinkToMeal(id) {
    return `
    <a href="recipe.html?id=${id}">
    `
}

function createCategoryCard(category) {
    return `
    <a class="card padding-10 desktop-card bc-white" href="recipes.html?category=${category.strCategory}">
        <div>
            <img src="${category.strCategoryThumb}" alt="">
            <h3 class="hidden">${category.strCategory}</h3><p>${formatText(category.strCategoryDescription, 208)}</p>
        </div>
    </a>
    `
}

export function populateCategories(categories, categorySection) {
    categorySection.innerHTML = ""
    categories.forEach(category => {
        categorySection.innerHTML += createCategoryCard(category)
    });
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