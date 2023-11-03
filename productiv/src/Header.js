import Quote from "./Quote";

/** Header component.
 * Props:
 * - Header: String containing main text.
 * - Subheader: String containing smaller text.
 */

function Header({ Header, subHeader }) {
  return (
    <div className="Header">
      <header className="container-fluid pt-4 pb-1">
          <div className="container">
            <h1>{Header}</h1>
            <p className="lead">{subHeader}</p>
            <Quote />
          </div>
    </header>
    </div>
  )
}

export default Header;