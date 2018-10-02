import {elements} from './base';
export const getInput = () => elements.searchInput.value;



const createRecipe = recipe => {
  const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Title">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
  `;
  return markup;
  //elements.searchResultList.insertAdjacentHTML('beforeend', markup);
  //$('.results__list').insertAdjacentHTML('beforeend', markup)
}

export const renderResult = (recipes) => {
  var recipeLis = recipes.map(recipe => createRecipe(recipe)).join('\n');
  elements.searchResultList.innerHTML = recipeLis;
}
