import api from "./data.js";

import { createOption, populateRecipeList } from "./constructions.js";
import { filterByCatgory, filterByCuisine, filterBySearch } from "./filters.js";
import { gatherIngredientsToArray } from "./functions.js";

const categories = await api.fetchCatgories()

const meals = await api.fetchSearchResult()

const finishedMealList = gatherIngredientsToArray(meals.meals)

const searchInput = document.getElementById("search")

const categorySelect = document.getElementById("category-select")

categorySelect.innerHTML += "<option value=\"-1\">Category:</option>"

categories.forEach(category => {
    categorySelect.innerHTML += createOption(category.strCategory, category.strCategory)
});

const cuisines = await api.fetchCuisineList()

const cuisineSelect = document.getElementById("cuisine-select")

cuisineSelect.innerHTML += "<option value=\"-1\">Cuisine:</option>"

cuisines.forEach(cuisine => {
    cuisineSelect.innerHTML += createOption(cuisine.strArea, cuisine.strArea)
});

categorySelect.addEventListener("change", () => {
    populateRecipeList(filterByCatgory(finishedMealList, categorySelect.value))
})

cuisineSelect.addEventListener("change", () => {
    populateRecipeList(filterByCuisine(finishedMealList, cuisineSelect.value))
})

searchInput.addEventListener("keyup", search)

async function search() {
    populateRecipeList(filterBySearch(filterByCatgory(filterByCuisine(finishedMealList, cuisineSelect.value), categorySelect.value), searchInput.value))
}

populateRecipeList(finishedMealList)



