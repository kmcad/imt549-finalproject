function renderRecipeProp(content, nonNumeric) {
    var td = document.createElement("td");
    td.textContent = content;
    if (nonNumeric) {
        td.classList.add("non-numeric");
    }

    return td;
}

function renderRecipe(recipe) {
    var tr = document.createElement("tr");
    tr.appendChild(renderRecipeProp(recipe.name, true));
    tr.appendChild(renderRecipeProp(recipe.dish));
    tr.appendChild(renderRecipeProp(recipe.contributor));
    tr.appendChild(renderRecipeProp(recipe.page));
    return tr;
}

function renderRecipes(recipe_list) {
    recipe_list.sort(function (record1, record2) {
        return record1.page - record2.page;
    });
    var tbody = document.querySelector(".recipes tbody");
    tbody.textContent = "";

    for (var idx = 0; idx < recipe_list.length; idx++) {
        var row = renderRecipe(recipe_list[idx]);

        tbody.appendChild(row);
    }
}

var filterInput = document.getElementById("recipe-filter");

function recipeFoundFilter(recipe) {
    var userInput = filterInput.value;
    var lowercaseUserInput = userInput.toLowerCase();
    var lowercaseTitle = recipe.name.toLowerCase();
    if (lowercaseTitle.indexOf(lowercaseUserInput) >= 0) {
        return true;
    } else {
        return false;
    }
}

filterInput.addEventListener("input", function () {
    var filtered_recipes = RECIPES.filter(recipeFoundFilter);

    renderRecipes(filtered_recipes);
});