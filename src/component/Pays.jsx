import { useEffect, useState } from "react";
export default function Pays() {
  const [pays, setPays] = useState([]);
  const [continentActif, setContinentActif] = useState("Africa");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,region,flags,capital,population"
    )
      .then((res) => res.json())
      .then((data) => setPays(data))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  // Filtrer par continent actif
  const paysFiltres = pays.filter((p) => p.region === continentActif);

  return (
    <div className="container mt-5 pt-5">
      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center">
        {["Europe", "Africa", "Asia", "Americas", "Oceania"].map((continent) => (
          <li className="nav-item" key={continent}>
            <button
              className={`nav-link ${
                continentActif === continent ? "active" : ""
              }`}
              onClick={() => setContinentActif(continent)}
            >
              {continent}
            </button>
          </li>
        ))}
      </ul>

      {/* Liste des pays */}
      <div className="row mt-4 g-3">
        {paysFiltres.map((p) => (
          <div key={p.name.common} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm position-relative country-card">
              {p.flags && (
                <img
                  src={p.flags.png}
                  className="card-img-top"
                  alt={`Drapeau de ${p.name.common}`}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{p.name.common}</h5>
              </div>

              {/* Overlay au survol */}
              <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center p-3">
                <h5>{p.name.common}</h5>
                <p>Capitale: {p.capital ? p.capital[0] : "N/A"}</p>
                <p>Population: {p.population.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS inline pour l’overlay */}
      <style>{`
        .country-card {
          overflow: hidden;
        }
        .overlay {
          background-color: rgba(1, 1, 2, 0.7);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .country-card:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
