import React from "react";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
    }

    componentDidMount() {
        const { id } = this.props.selectedUser;
        fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id)
            .then(res => res.json())
            .then(data => this.setState({ posts: data }));
    }

    render() {
        const { name, username } = this.props.selectedUser;
        const posts = this.state.posts.map(post => {
            return (
                <li className="ph3 pv2 b--light-silver" key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            );
        });
        return (
            <div>
                <h1>{name}'s posts</h1>
                <p className="black-50">{username}</p>
                <ul className="list">{posts}</ul>
            </div>
        );
    }
}

export default Posts;
