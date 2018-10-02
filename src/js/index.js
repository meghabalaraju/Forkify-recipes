//23d89290bf0ce90b4ee3f4eff7c2379a

import {Search} from './models/Search';
//import {Recipe} from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import {elements} from './views/base';
import {key as key} from './views/base';
/**Global state of the app
* - Search object
*/
const state = {};

const controlSearch = () => {
  //1)Get query from view
  const input = searchView.getInput(); //TODO

  if (input) {
    //2) new search object and add to state
    state.search = new Search(`search?key=${key}&q=${input}`);

    // 3) Prepare UI for results
      //clear input function
      //clear list of recipe otherwise next query result will be added to the end

    //4)Search for Recipes
   var results = state.search.getResults();

   //5) Render results on UI
   //searchView.renderResult(state.search.data);
   results.then(function(data) {
     console.log(data);
     searchView.renderResult(data.recipes);
   })
  }


}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});



/*******************
  RECIPE CONTROLER
********************/

const controlRecipe = () => {
  const id = window.location.hash.replace('#', '');
  console.log(id);

  if(id) {
      //recipeView.clearRecipe();
      state.recipe = new Search(`get?key=${key}&rId=${id}`);

      var recipeResult = state.recipe.getResults();
      console.log(recipeResult);
      recipeResult.then(function(rec){
        console.log(rec);

        recipeView.renderRecipe(rec.recipe);
      })
  }
}

['hashchange', 'load'].forEach( event => window.addEventListener(event, controlRecipe));











/***************************************
Using CORS
https://www.html5rocks.com/en/tutorials/cors/
****************************************/
/*
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText)   //to access the data came back
        console.log(data.recipes);
      } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
        console.log('Error!');
      }
    }
  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

(function makeCorsRequest() {
  var key = '23d89290bf0ce90b4ee3f4eff7c2379a';
  var url = 'https://www.food2fork.com/api/search?key=' + key + '&q=shredded%20chicken';
  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    throw new Error('CORS not supported');
  }
  xhr.send();
})();

*/
