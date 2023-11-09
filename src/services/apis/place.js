import React, { Component } from 'react';
import axios from 'axios';
require('dotenv').config({ path: '../../.env' });

const apiKey = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
const apiUrl = 'https://places.googleapis.com/v1/places:searchText';

class TextSearchComponent extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  handleTextSearch = () => {
    const requestData = {
      textQuery: 'Spicy Vegetarian Food in Sydney, Australia',
    };

    const requestHeaders = {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.priceLevel',
    };

    axios
      .post(apiUrl, requestData, {
        headers: requestHeaders,
      })
      .then((response) => {
        this.setState({ results: response.data.places });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleTextSearch}>Search for Spicy Vegetarian Food</button>
        <ul>
          {this.state.results.map((place, index) => (
            <li key={index}>
              {place.displayName.text}: {place.formattedAddress}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TextSearchComponent;
