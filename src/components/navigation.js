import React from "react";

const Navigation = ({ onRouteChange }) => {
    return (
        <nav className="bt bb tc mw8 center mt4 pointer athelas br4">
            <p
                className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
                onClick={() => onRouteChange("users")}
            >
                Users
            </p>
            <p
                className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l"
                onClick={() => onRouteChange("addUser")}
            >
                Add user
            </p>
        </nav>
    );
};

export default Navigation;
