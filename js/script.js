const searchInput = document.getElementById("search")
const searchButton = document.getElementById("search-button")

searchInput.addEventListener("keyup", search)
searchButton.addEventListener("click", search)

async function search(event) {
    if (event.key !== 'Enter' && event.target.type !== "submit")
        return
    window.location.href = `/recipes.html?search=${searchInput.value}`
} 




