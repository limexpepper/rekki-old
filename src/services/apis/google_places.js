const axios = require('axios'); 
require('dotenv').config({ path: '../../.env' }); //The ../../ part of the path indicates that you are going up two directories.
const apiKey=process.env.REACT_APP_GOOGLE_PLACES_API_KEY;

const performTextSearch = async (text) => {
    const searchQuery = text; 
    try {
      const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(searchQuery)}&key=${apiKey}`;
      const response = await axios.get(apiUrl);
  
      if (response.data.status === 'OK') {
        const places = response.data.results; // console.log(places);
        return places;
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