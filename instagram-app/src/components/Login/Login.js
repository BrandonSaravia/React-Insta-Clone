import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            userTyped: '',
            passTyped: '',
        }
    }

    updateUsername = event => {
        event.preventDefault();
        this.setState({userTyped: event.target.value})
    }
    updatePassword = event => {
        event.preventDefault();
        this.setState({passTyped: event.target.value})
    }

    logIn = event => {
        event.preventDefault();
        if (!this.state.signIn) {
          localStorage.setItem('signIn', true);
        } else {
          localStorage.removeItem('signIn');
        }
        this.setState({ signIn: !this.state.signIn});
    }

    render() {
   
        return (
            <form>
                <input 
                    type="text"
                    value={this.state.userTyped}
                    placeholder="username"
                    name='name'
                    onChange={this.updateUsername}
                />
                <input
                    type="text"
                    value={this.state.passTyped}
                    placeholder="password"
                    name='name'
                    onChange={this.updatePassword}
                />
                <button onClick={this.logIn}>sign In</button>
            </form>
        );
    };
}
export default Login;