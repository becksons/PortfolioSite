
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import VirtualSpace from './components/VirtualSpaceComponent';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme/theme';
import './App.css';


function App() {
    return (
        <ThemeProvider theme={theme}>
            <>

                <Router>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/virtualspace" element={<VirtualSpace />} />
                        </Routes>
                    </div>
                </Router>
            </>
        </ThemeProvider>
    );
}

export default App;
