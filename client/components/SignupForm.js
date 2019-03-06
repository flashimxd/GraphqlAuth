import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import AuthForm from '../components/AuthForm';
import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';


class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = { errors: [] }
    }
    shouldComponentUpdate(nextProps) {
        const {data} = this.props;
        if(!data.user && nextProps.data.user) {
            hashHistory.push('/dashboard');
        }
        return true;
    }
    onSubmit({email, password}) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch(error => {
            const errors = error.graphQLErrors.map(error => error.message);
            this.setState({errors});
        })
    }
    render() {
        const { errors } = this.state;
        return (
            <div>
                <h3>Sign Up</h3>
                <AuthForm onSubmit={this.onSubmit.bind(this)} errors={errors} />
            </div>
        );
    }
}

export default graphql(query)(
    graphql(mutation)(SignupForm)
);