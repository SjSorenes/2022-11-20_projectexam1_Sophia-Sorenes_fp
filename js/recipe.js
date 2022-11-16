import { createRecipeDetails } from "./constructions.js";
import api from "./data.js";
import { addIngredientListToMeal, getParamsFromUrl } from "./functions.js";

let id = getParamsFromUrl().get("id");
const recipeResult = await api.fetchRecipe(id);
const recipe = addIngredientListToMeal(recipeResult)
console.log(recipe);

let title = document.querySelector("title");
title.innerHTML = recipe.strMeal + " | Good Food Mood";

let recipeContainer = document.getElementById("recipe-container")

recipeContainer.innerHTML = createRecipeDetails(recipe)