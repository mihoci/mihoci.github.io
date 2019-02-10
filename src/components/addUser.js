import React from "react";

class AddUser extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            username: ""
        };
    }

    onNameChange = event => {
        this.setState({ name: event.target.value });
    };

    onUsernameChange = event => {
        this.setState({ name: event.target.value });
    };

    onAddUser = () => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: this.state.name,
                username: this.state.username
            })
        })
            .then(response => response.json())
            .then(json => console.log(json));
    };

    render() {
        return (
            <div>
                <h2>Add user</h2>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.onNameChange}
                    />
                </div>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.onUsernameChange}
                    />
                </div>
                <div>
                    <input
                        type="button"
                        value="Add user"
                        onClick={this.onAddUser}
                    />
                </div>
            </div>
        );
    }
}

export default AddUser;
