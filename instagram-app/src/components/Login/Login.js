import React from 'react';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            userTyped: '',
            passTyped: '',
        };
    }

    updateUsername = event => {
        event.preventDefault();
        this.setState({userTyped: event.target.value})
    };

    updatePassword = event => {
        event.preventDefault();
        this.setState({passTyped: event.target.value})
    };

    logIn = event => {
        const user = this.state.userTyped;
        localStorage.setItem('user', user);
        window.location.reload();
    };

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