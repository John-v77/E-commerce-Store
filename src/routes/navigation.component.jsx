import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = (props) => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="nav-links-container">
          <Link className="logo-container" to="/">
            <div>Logo</div>
          </Link>

          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
