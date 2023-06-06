import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

function Navigation() {

    const location = useLocation();
    const currentURL = location.pathname;


    return (
        <div className="navigation">
            <NavLink to='/current-competitions' className={currentURL === "/current-competitions"? "active": ""}>
                <button>Current competitions</button>
            </NavLink>

            <NavLink to='/my-competitions' className={currentURL === "/my-competitions"? "active": ""}>
                <button>My competitions</button>
            </NavLink>

            <NavLink to='/archive' className={currentURL === "/archive"? "active":  ""}>
                <button >Archive</button>
            </NavLink>


        </div>
    );
}

export default Navigation;