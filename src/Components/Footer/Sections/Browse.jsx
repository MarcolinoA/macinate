import { NavLink } from "react-router-dom";

const Browse = () => {
  return (
    <div className="browse">
      <h4 className="browse-title title">Browse</h4>
      <ul className="browse-nav desc">
          <li className="browse-item">
            <NavLink
              to="/maciante/"
              activeclassname="active"
              className="browse-link"
            >
              Home
            </NavLink>
          </li>
          <li className="browse-item">
            <NavLink
              to="/menu-page"
              activeclassname="active"
              className="browse-link"
            >
              Menu
            </NavLink>
          </li>
          <li className="browse-item">
            <NavLink
              to="/hours-location-page"
              activeclassname="active"
              className="browse-link"
            >
              Orari e Location
            </NavLink>
          </li>
          <li className="browse-item">
            <NavLink
              to="/contattaci"
              activeclassname="active"
              className="browse-link"
            >
              Eventi
            </NavLink>
          </li>
        </ul>
    </div>
  );
}

export default Browse