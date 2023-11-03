
/** Quote - Display quote
 * 
 * Prop:
 * - quote: Object like { text, author }
 * 
 * RandomInspoQuote -> Quote
 */

<<<<<<< HEAD
function Quote({ quote }) {
  return (<p className="Quote">
    <i>{quote.text} - {quote.author}</i>
  </p>);
=======
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
          </div>
          :
          <form onSubmit={handleGetQuote}>
            <button>Get Inspirational Quote</button>
          </form>
      }
    </div >
  );
>>>>>>> 068b0c302dd76d3151f62f25b63462e9ad0e018a
}

export default Quote;