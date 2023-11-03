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

<<<<<<< HEAD
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
=======
  function updateQuote() {
    setQuote({});
  }

  useEffect(() => {
    async function fetchQuote() {
      const quote = await getInspoQuote();
      setQuote(quote);
    }
    fetchQuote();
  }, []);

  return (
    <div className="RandomInspoQuote">
      <p>
        <i>{quote.text} - {quote.author}</i>
      </p>
      <form onSubmit={updateQuote}>
        <button>Nü quøte</button>
      </form>
>>>>>>> 068b0c302dd76d3151f62f25b63462e9ad0e018a
    </div>
  );
}

export default RandomInspoQuote;

