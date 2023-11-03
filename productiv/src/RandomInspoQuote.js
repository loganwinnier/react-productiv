import { useState, useEffect } from "react";
import { getInspoQuote } from "./inspoQuoteApi";

/**
 *
 */

function RandomInspoQuote() {
  const [quote, setQuote] = useState({});

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
    </div>
  );
}

export default RandomInspoQuote;