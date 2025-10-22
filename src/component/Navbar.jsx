
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 w-100 fixed-top ">
      <a href=""></a>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">
          🌍 Pays
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center fixed-top"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex gap-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pays
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Infos
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
  
}

