import React from "react";
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>, document.getElementById('root')
);