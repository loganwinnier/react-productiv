import { useState } from "react";
import RandomInspoQuote from "./RandomInspoQuote";

/** Quote - Displays button to get quote or random quote.
 * State:
 * - quote: Object like { text, author }
 */

function Quote() {

  function handleGetQuote() {
    return 
  }

  return (
    <div className="Quote">
        <form onSubmit={handleGetQuote}>
          <button>Get Inspirational Quote</button>
        </form>
    </div>
  );
}

export default Quote;