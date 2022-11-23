import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <nav>
                <div className="title">
                    <Link className="nav-link" to='/'>
                        <h1>Home</h1>
                    </Link>
                </div>
                <div className="nav-links">

                    <Link className="nav-link" to='/to-do'>
                        To Do List
                    </Link>
                    <Link className="nav-link" to='/notes'>
                        Notes
                    </Link>
                </div>
            </nav>
            <Outlet />
        </Fragment>

    );
}

export default Navigation;