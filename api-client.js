import "isomorphic-fetch";


function performQuery(searchQuery)  {
   
    const apiUrl = "http://www.omdbapi.com/?apikey=644256c0&s=" + searchQuery;
    return fetch(apiUrl)
        .then((response) => response.json());
};

module.exports = performQuery;



