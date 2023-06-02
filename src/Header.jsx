import {LogoutLink} from "./LogoutLink.jsx"

export function Header() {
 
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <li>
          <a className="dropdown-item" href="/signup">
            Sign Up
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/login">
            Log In
          </a>
        </li>
      </>
    );
  } else {
    authenticationLinks = (
      <li>
        <LogoutLink/>
      </li>
    );
  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
         resuMe ||
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-auto d-flex">
            <ul className="nav nav-underline">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
           
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-primary"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  {authenticationLinks} 
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

