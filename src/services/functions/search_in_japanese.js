const translateText = require('../apis/google_translate');
const performTextSearch = require('../apis/google_places');

const language = {
  from: "en",
  to: "ja"
}

async function searchInJapanese(text) {
  try {
    const translatedText = await translateText(text, language); 
    console.log("Translated Text------>>> " + translatedText);
    const results = await performTextSearch(translatedText);
    console.log(results);
    return results;
  } catch (error) {
      console.error('Error in translateThenSearch:', error.message);
    return null; 
  }
}
// searchInJapanese('katsu don in tokyo');

module.exports = searchInJapanese;

