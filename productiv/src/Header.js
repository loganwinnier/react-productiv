import Quote from "./Quote";

/** Header component.
 * Props:
 * - Header: String containing main text.
 * - Subheader: String containing smaller text.
 */

function Header({ text, subtext }) {
  return (
    <div className="Header">
      <header className="container-fluid pt-4 pb-1">
          <div className="container">
            <h1>{text}</h1>
            <p className="lead">{subtext}</p>
            <Quote />
          </div>
    </header>
    </div>
  )
}

export default Header;