import React from "react";
import User from "./user";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        const request = new Request(
            "https://jsonplaceholder.typicode.com/users"
        );

        fetch(request)
            .then(res => res.json())
            .then(data => {
                this.setState({ users: data });
            });
    }

    render() {
        const { onSelectUser } = this.props;
        const users = this.state.users;
        if (users.length !== 0) {
            let listItems = users.map(user => {
                return (
                    <User
                        key={user.id}
                        user={user}
                        onSelectUser={onSelectUser}
                    />
                );
            });
            return (
                <div>
                    <h2>Users</h2>
                    <ul className="list">{listItems}</ul>
                    <p className="black-20">
                        <a
                            className="black-20"
                            href="https://jsonplaceholder.typicode.com/users"
                        >
                            https://jsonplaceholder.typicode.com/users
                        </a>
                    </p>
                </div>
            );
        } else {
            return <h2>Loading list of users</h2>;
        }
    }
}

export default Users;
