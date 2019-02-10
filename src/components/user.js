import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: props.user };
    }

    render() {
        const { onSelectUser } = this.props;
        const { name, username } = this.state.user;

        return (
            <div>
                <li
                    className="ph3 pv2 b--light-silver pointer grow"
                    onClick={() => onSelectUser(this.state.user)}
                >
                    <strong>{name}</strong> - {username}
                </li>
            </div>
        );
    }
}

export default User;
