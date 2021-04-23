import "isomorphic-fetch";

function performQuery(searchQuery, pageNumber) {
  const apiUrl = "http://www.omdbapi.com/?apikey=644256c0&s=" + searchQuery + "&page=" + pageNumber;
  return fetch(apiUrl).then((response) => response.json());
}

module.exports = performQuery;
