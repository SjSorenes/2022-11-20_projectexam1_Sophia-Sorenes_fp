import { createRandomMealCard, populateCategories } from "./constructions.js";
import api from "./data.js";

const random = document.getElementById("random")
const linkToMeal = document.getElementById("link-to-meal")

export const loadRandomMeal = async () => {
    const randomMeal = await api.fetchRandomMeal()
    random.innerHTML = createRandomMealCard(randomMeal)
}

const categorySection = document.getElementById("categories")

const categories = await api.fetchCatgories()
populateCategories(categories, categorySection)

loadRandomMeal()

const loadRandomMealButton = document.getElementById("load-random-meal")
loadRandomMealButton.addEventListener("click", loadRandomMeal)

