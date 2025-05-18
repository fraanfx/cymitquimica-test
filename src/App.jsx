import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/product/:id' element={<ProductPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App