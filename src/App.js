import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux"; //default
import { store } from "./Redux/store";

import NavBar from "./Routes/NavBar"




import AppProvider from './Utils/AppProvider'
import './App.css';
import MainWrapper from './Routes/MainWrapper';

function App() {

  return (
    <HashRouter>
      <Provider store={store}>
        <AppProvider store={store}>

          <NavBar />
          <MainWrapper />

        </AppProvider>
      </Provider>
    </HashRouter>





  );
}

export default App;