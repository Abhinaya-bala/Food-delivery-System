import React, { createContext } from "react";

export const AppContext = createContext();

class AppProvider extends React.Component {


    render() {
        const { store } = this.props; //redux store
        return (
            <AppContext.Provider value={{ store }}>
                {this.props.children}

            </AppContext.Provider>
        );
    }
}

export default AppProvider;