import { createErrorMessage } from "./constructions.js";

const apiUrl = "https://www.themealdb.com/api/json/v2/9973533/";

async function fetchData(path) {
    try {
        const response = await fetch(apiUrl + path);
        const json = await response.json();
        return json
    } catch (error) {
        console.error(error);
        createErrorMessage(error);
    }
}

async function fetchCatgories() {
    const data = await fetchData("categories.php")
    return data.categories
}

async function fetchCuisineList() {
    const data = await fetchData("list.php?a=list")
    return data.meals
}

async function fetchSearchResult(search) {
    search = search === undefined ? "" : search
    return fetchData("search.php?s=" + search)
}

async function fetchRecipe(id) {
    const data = await fetchData(`lookup.php?i=` + id);
    return data.meals[0]
}

export default {fetchCatgories, fetchCuisineList, fetchSearchResult, fetchRecipe}