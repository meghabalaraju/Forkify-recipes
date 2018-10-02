import {baseUrl} from '../views/base';
export class Search{
  constructor(inputUrl){
    this.inputUrl = inputUrl;
    }

  getResults() {
  return new Promise((resolve, reject) => {
    const HTTP = new XMLHttpRequest();
    const url =  baseUrl + this.inputUrl;
    HTTP.open('GET', url);
    HTTP.onreadystatechange = function() {
      if(HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200){
        //console.log(HTTP.getAllResponseHeaders());
        let result = JSON.parse(HTTP.responseText);
        console.log(result);
        resolve(result);
        //console.log(data.weather[0].description);
      } else if(HTTP.readyState === XMLHttpRequest.DONE && HTTP.status !== 200){
          console.log('error');
        }
    };
    HTTP.send();
  });
}

}
/*
constructor(query) {
  this.query = query;
}
  getResults() {
    const HTTP = new XMLHttpRequest();
    const key = 'b71a4de9a24c5136534c729fd89423f3';
    //const key = '23d89290bf0ce90b4ee3f4eff7c2379a';
    const url = `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`;
    HTTP.open('GET', url);
    HTTP.onreadystatechange = function() {
      if(HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200){
        //console.log(HTTP.getAllResponseHeaders());
        this.result = JSON.parse(HTTP.responseText);
        //console.log(data.weather[0].description);
      } else if(HTTP.readyState === XMLHttpRequest.DONE && HTTP.status !== 200){
          console.log('error');
        }
    };
    HTTP.send();
} */

/*
  static fetchData(query) {
    this.query = query;
    return new Promise((resolve, reject) => {
      const HTTP = new XMLHttpRequest();
      const key = 'b71a4de9a24c5136534c729fd89423f3';
      //const key = '23d89290bf0ce90b4ee3f4eff7c2379a';
      const url = `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`;
      HTTP.open('GET', url);
      HTTP.onreadystatechange = function() {
        if(HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200){
          console.log(HTTP.getAllResponseHeaders());
          let data = JSON.parse(HTTP.responseText);
          this.result = data.recipes;
          resolve(data);
          //console.log(data);
          //console.log(data.weather[0].description);
        } else if(HTTP.readyState === XMLHttpRequest.DONE && HTTP.status !== 200){
            reject('Something went wrong');
          }
      };
      HTTP.send();
    });
  }
}

*/
/*
   function

   var http = new XMLHttpRequest();
   var key = '23d89290bf0ce90b4ee3f4eff7c2379a';
   var method = 'GET';
   var url = 'https://www.food2fork.com/api/search?key=' + key + '&q=shredded%20chicken';
   http.open(method, url);
   http.onreadystatechange = function() {
     if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
       console.log(http.getAllResponseHeaders());
       var data = JSON.parse(http.responseText);
       console.log(data.recipes);
       //console.log(data.weather[0].description);
     } else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200){
         console.log("An error occurred");
       }
     }

   http.send();
}
*/
