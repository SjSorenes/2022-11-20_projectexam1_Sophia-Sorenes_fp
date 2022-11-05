import { createRecipeDetails } from "./constructions.js";
import api from "./data.js";
import { getParamsFromUrl } from "./functions.js";

let id = getParamsFromUrl().get("id");
const recipe = await api.fetchRecipe(id);
console.log(recipe);

let title = document.querySelector("title");
title.innerHTML = recipe.strMeal + " | Good Food Mood";

let recipeContainer = document.getElementById("recipe-container")

recipeContainer.innerHTML = createRecipeDetails(recipe)