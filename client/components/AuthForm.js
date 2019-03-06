import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props){
        super(props);
        this.state = { email: '', password: ''}
    }
    onSubmit(evt) {
        evt.preventDefault();
        const { email, password } = this.state;
        const { onSubmit } = this.props;
        onSubmit({ email, password });
    }
    render() {
        const { email, password } = this.state;
        const { errors } = this.props;
        return (
            <div className="row" >
                <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-filed">
                        <input value={email} onChange={e => this.setState({ email: e.target.value })} placeholder="Email" />
                    </div>

                    <div className="input-filed">
                        <input value={password} onChange={e => this.setState({ password: e.target.value })} type="password" placeholder="Password" />
                    </div>

                    <div className="errors" >
                        {errors.map(erro => <div key={erro}>{erro}</div>)}
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default AuthForm;