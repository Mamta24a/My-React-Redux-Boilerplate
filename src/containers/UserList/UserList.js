import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import { fetchUserListApi } from "../../actions/userAction";
import User from "../../components/user/User";

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            loading: false
        };
    }

    componentDidMount() {
        this.props.fetchUserListApi();
    }

    render() {
        let { userList, loading } = this.props.userState;
        return (
            <div>
                <User />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { userState: state.userState }
}

const mapActionsToProps = {
    fetchUserListApi: fetchUserListApi
}

export default connect(mapStateToProps, mapActionsToProps)(UserList);