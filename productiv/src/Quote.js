
/** Quote - Display quote
 * 
 * Prop:
 * - quote: Object like { text, author }
 * 
 * RandomInspoQuote -> Quote
 */

function Quote({ quote }) {
  return (<p className="Quote">
    <i>{quote.text} - {quote.author}</i>
  </p>);
}

export default Quote;