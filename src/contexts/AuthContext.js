import React, { createContext } from "react";

export const AuthContext = createContext()

class AuthContextProvider extends React.Component{
    state = {
        loggedIn: true
    }
    
    logIn = () => {
        this.setState({loggedIn: true})
    }

    logOut = () => {
        this.setState({loggedIn: false})
    }

    render(){
        return(
            <AuthContext.Provider value={ {...this.state, logIn: this.logIn, logOut: this.logOut} }>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider