import { createRecipeCard, populateRecipeList } from "./constructions.js";
import api from "./data.js";

const mealsList = await api.fetchSearchResult()
console.log(mealsList);

const searchInput = document.getElementById("search")

searchInput.addEventListener("keyup", search)

async function search(event) {
    if (event.key !== 'Enter')
        return
    const searchResult = await api.fetchSearchResult(searchInput.value)
    populateRecipeList(searchResult.meals)
} 
populateRecipeList(mealsList.meals)



