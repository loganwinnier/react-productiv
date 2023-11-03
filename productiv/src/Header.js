import RandomInspoQuote from "./RandomInspoQuote";

/** Header component.
 * Props:
 * - Header: String containing main text.
 * - Subheader: String containing smaller text.
 * 
 * App -> Header -> RandomInspoQuote
 */

function Header({ text, subtext }) {
  return (
    <div className="Header">
      <header className="container-fluid pt-4 pb-1">
        <div className="container">
          <h1>{text}</h1>
          <p className="lead">{subtext}</p>
          <RandomInspoQuote />
        </div>
      </header>
    </div>
  );
}

export default Header;