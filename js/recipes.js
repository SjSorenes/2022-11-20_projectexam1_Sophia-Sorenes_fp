import api from "./data.js";

import { createOption, populateRecipeList } from "./constructions.js";
import { filterByCatgory, filterByCuisine, filterBySearch } from "./filters.js";
import { gatherIngredientsToArray, getParamsFromUrl, setParamToUrl } from "./functions.js";

const categories = await api.fetchCatgories()

const meals = await api.fetchSearchResult()

const finishedMealList = gatherIngredientsToArray(meals.meals)

const searchInput = document.getElementById("search")

const categorySelect = document.getElementById("category-select")

let selectedCategoryFromUrl = getParamsFromUrl().get("category") ?? "-1"

let selectedCuisineFromUrl = getParamsFromUrl().get("cuisine") ?? "-1"

let searchFromUrl = getParamsFromUrl().get("search") ?? ""

const searchButton = document.getElementById("search-button")

searchButton.addEventListener("click", search)

categorySelect.innerHTML += "<option value=\"-1\">Category:</option>"

categories.forEach(category => {
    categorySelect.innerHTML += createOption(category.strCategory.toLowerCase(), category.strCategory)
});

const cuisines = await api.fetchCuisineList()

const cuisineSelect = document.getElementById("cuisine-select")

cuisineSelect.innerHTML += "<option value=\"-1\">Cuisine:</option>"

cuisines.forEach(cuisine => {
    cuisineSelect.innerHTML += createOption(cuisine.strArea.toLowerCase(), cuisine.strArea)
});

searchInput.value = searchFromUrl
categorySelect.value = selectedCategoryFromUrl.toLowerCase()
cuisineSelect.value = selectedCuisineFromUrl.toLowerCase()

categorySelect.addEventListener("change", () => {
    setParamToUrl("category", categorySelect.value)
    populateRecipeList(filterByCatgory(filterByCuisine(filterBySearch(finishedMealList, searchInput.value), cuisineSelect.value), categorySelect.value))
})

cuisineSelect.addEventListener("change", () => {
    setParamToUrl("cuisine", cuisineSelect.value)
    populateRecipeList(filterByCuisine(filterByCatgory(filterBySearch(finishedMealList, searchInput.value), categorySelect.value), cuisineSelect.value))
})

searchInput.addEventListener("keyup", (e) => {
    if (e.key !== "Enter") return;
    setParamToUrl("search", searchInput.value)
    populateRecipeList(filterBySearch(filterByCatgory(filterByCuisine(finishedMealList, cuisineSelect.value), categorySelect.value), searchInput.value))
})

searchButton.addEventListener("click", (e) => {
    setParamToUrl("search", searchInput.value)
    populateRecipeList(filterBySearch(filterByCatgory(filterByCuisine(finishedMealList, cuisineSelect.value), categorySelect.value), searchInput.value))
})

populateRecipeList(
    filterBySearch(
        filterByCatgory(
            filterByCuisine(finishedMealList, selectedCuisineFromUrl),
            selectedCategoryFromUrl),
        searchFromUrl))



