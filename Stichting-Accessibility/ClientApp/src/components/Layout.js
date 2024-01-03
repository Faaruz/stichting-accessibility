import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './navbar/NavMenu';
import { AuthProvider } from './services/AuthContext';

class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <AuthProvider>
                <div>
                    <NavMenu />
                    <Container tag="main">
                        {this.props.children}
                    </Container>
                </div>
            </AuthProvider>
        );
    }
}

export default Layout;