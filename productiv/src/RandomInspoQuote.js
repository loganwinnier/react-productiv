import { useState, useEffect } from "react";
import { getInspoQuote } from "./inspoQuoteApi";

/**
 *
 */

function RandomInspoQuote() {
  const [quote, setQuote] = useState({});

  useEffect(async () => {
    const quote = await getInspoQuote();
    setQuote(quote);
  }, []);

  return (
    <div className="RandomInspoQuote">
      <p>
        <i>{quote.text} - {quote.author}</i>
      </p>
    </div>
  );
}

export default RandomInspoQuote;