import { getInspoQuote } from "./inspoQuoteApi";

/** Quote
 *
 */

async function Quote() {
  const quote = await getInspoQuote();

  return (
    <div className="Quote">
      <p>
        <i>{ quote.text } - { quote.author }</i>
      </p>
    </div>
  )
}

export default Quote;