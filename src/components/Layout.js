import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <nav>
                        <Link to="/">Home</Link> |{" "}
                        <Link to="/about">About</Link> |{" "}
                        <Link to="/not-found">NotFound</Link> |{" "}
                    </nav>
                </header>
                <Outlet />
            </React.Fragment>
        );
    }
}