import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap";
import { fetchUserListApi } from "../../actions/userAction";

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
                <h3 className="heading">Hello User...</h3>
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