import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        console.log(this.props);
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.name.givenName}!</h1>
                <p>You're logged in.</p>
                <h3>All Users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items._embedded.users.map((aUser, index) =>
                            <li key={aUser.id}>
                                {aUser.name.givenName + ' ' + aUser.name.familyName}
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login"><button className="btn btn-primary">Logout</button></Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };