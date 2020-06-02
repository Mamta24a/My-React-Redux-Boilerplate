import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.setState({
            user: []
        })
    }

    componentWillMount() { }

    componentDidMount() { }

    componentWillReceiveProps(nextProps) { }

    shouldComponentUpdate(nextProps, nextState) { }

    componentWillUpdate(nextProps, nextState) { }

    componentDidUpdate(prevProps, prevState) { }

    componentWillUnmount() { }

    render() {
        return (
            <div>
                <h3 className="heading">Hello User...</h3>
            </div>
        );
    }
}

export default User;