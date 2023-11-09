const axios = require('axios'); // Import the Axios library
require('dotenv').config({ path: '../../.env' }); //The ../../ part of the path indicates that you are going up two directories.
const apiKey=process.env.REACT_APP_GOOGLE_PLACES_API_KEY;

const performTextSearch = async (text) => {
    const searchQuery = text; 
    try {
      const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(searchQuery)}&key=${apiKey}`;
      const response = await axios.get(apiUrl);
  
      if (response.data.status === 'OK') {
        // The response contains a list of places
        const places = response.data.results;
        console.log(places);
      } else {
        console.error('Text search request failed:', response.data.status);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  // performTextSearch('cafes in new york');
  // performTextSearch('東京のカツ丼'); // katsu don in tokyo

  module.exports = performTextSearch;
  

// const fetchPlaceData = async (apiKey) => {
//     try {
//       const apiUrl = `https://places.googleapis.com/v1/places/ChIJj61dQgK6j4AR4GeTYWZsKWw?fields=id,displayName&key=${apiKey}`;
//       const response = await axios.get(apiUrl);

//       // Check if the response status is not in the 200 range
//       if (response.status < 200 || response.status >= 300) {
//         throw new Error(`API request failed with status ${response.status}`);
//       }
  
//       return response.data;
//     } catch (error) {
//       throw new Error(`Failed to fetch place data: ${error.message}`);
//     }
//   };

// (async () => {
//     try {
//       const placeData = await fetchPlaceData(apiKey);
//       console.log(placeData);
//     } catch (error) {
//       console.error(error);
//     }
//   })();

//   module.exports = fetchPlaceData;
