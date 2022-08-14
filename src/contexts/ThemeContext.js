import React, { createContext } from "react";

class ThemeContextProvider extends React.Component{
    state = {
        isDarkTheme: true,
        darkTheme: {
            text: '#ffff',
            backgroud: '#d4asd'
        },
        lightTheme: {
            text: '#sadfs1',
            backgroud: '#ffff'
        }
    }

    toggleTheme(){
        this.setState({ isDarkTheme: !this.state.isDarkTheme})
    }
    render(){
        return(
            <ThemeContext.Provider value={ {...this.state} }>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}


export const ThemeContext= createContext()
export default ThemeContextProvider
