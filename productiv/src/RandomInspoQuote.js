import { useState } from "react";
import { getInspoQuote } from "./inspoQuoteApi";
import Quote from './Quote';

/** Shows Button to generate new quote or Quote and button
 * State
 * -clicked: boolean to display initial button or not
 * -quote: object like {text: "string", author: "string"}
 * 
 * Header -> RandomInspoQuote -> Quote
 */

function RandomInspoQuote() {
  const [clicked, setClicked] = useState(false);

  /** gets new inspirational quote updates quote state */
  const newQuote = async () => {
    const quote = await getInspoQuote();
    setQuote(quote);
  };

  const [quote, setQuote] = useState(newQuote);

  /** Toggles display from initial button state */
  function handleGetQuote() {
    setClicked(true);
  }

  return (
    <div className="RandomInspoQuote">
      {
        clicked
          ?
          <>
            <Quote quote={quote} />
            <button onClick={newQuote}>Nü quøte!</button>
          </>
          :
          <button onClick={handleGetQuote}>Click here for an inspirational quøte!</button>
      }
    </div>
  );
}

export default RandomInspoQuote;

