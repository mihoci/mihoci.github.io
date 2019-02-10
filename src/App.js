import React, { Component } from "react";
import Users from "./components/users";
import AddUser from "./components/addUser";
import Posts from "./components/posts";
import Navigation from "./components/navigation";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            route: "users",
            selectedUser: {}
        };

        this.onSelectUser = this.onSelectUser.bind(this);
    }

    onRouteChange = route => {
        this.setState({ route: route });
    };

    onSelectUser = user => {
        this.setState({ route: "posts", selectedUser: user });
    };

    render() {
        let page;
        switch (this.state.route) {
            case "users":
                page = <Users onSelectUser={this.onSelectUser} />;
                break;
            case "addUser":
                page = <AddUser />;
                break;
            case "posts":
                page = <Posts selectedUser={this.state.selectedUser} />;
                break;
            default:
                page = <Users />;
                break;
        }
        return (
            <div className="bb tc mw8 center mt4 athelas">
                <Navigation onRouteChange={this.onRouteChange} />
                {page}
            </div>
        );
    }
}

export default App;
