import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import AuthForm from '../components/AuthForm';
import mutation from '../mutations/Signup';
import currentUserquery from '../queries/CurrentUser';

export default (WrappedComponent) => {
    class requireAuth extends Component {
        shouldComponentUpdate(nextProps) {
            const {data} = nextProps;
            if(!data.loading && !data.user) hashHistory.push('/login');
            return true;
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return graphql(currentUserquery)(requireAuth);
}