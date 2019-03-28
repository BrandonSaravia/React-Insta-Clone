import React from 'react';

const withAuthenticate = PostPage => Login => 
    class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                signedIn: false
            }
        }

        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({signedIn: false});
            } else {
                this.setState({signedIn: true});
            }
        }

        render() {
            if (this.state.signedIn) return <PostPage />;
            return <Login />
        }
    }

export default withAuthenticate