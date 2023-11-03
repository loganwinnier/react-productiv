import { useState } from "react";
import RandomInspoQuote from "./RandomInspoQuote";

/** Quote - Displays button to get quote or random quote.
 * State:
 * - quote: Object like { text, author }
 */

function Quote() {

  const [showRandomQuote, setShowRandomQuote] = useState(false);

  function handleGetQuote() {
    setShowRandomQuote(true);
  }

  return (
    <div className="Quote">
      {
        showRandomQuote
          ?
          <div>
            <RandomInspoQuote />
            <form onSubmit={handleGetQuote}>
              <button>Nü quøte</button>
            </form>
          </div>
          :
          <form onSubmit={handleGetQuote}>
            <button>Get Inspirational Quote</button>
          </form>
      }
    </div >
  );
}

export default Quote;