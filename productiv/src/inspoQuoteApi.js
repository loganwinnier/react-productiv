const BASE_URL = "https://inspo-quotes-api.herokuapp.com/quotes";

/**
 * Get's a random inspirational quote from the Inspirational Quote API.
 * Returns object:
 * { text, author } 
 */

async function getInspoQuote() {
  const result = await fetch(BASE_URL + '/random');
  const data = await result.json();
  return data.quote;
}

export { getInspoQuote };