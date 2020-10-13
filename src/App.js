import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import {Product} from './Product';
import { ProductIndex } from "./ProductIndex";
import {LaunchShoe} from './LaunchShoe';

export const App = () => {
    return (
        <div>
            <nav>
                {/* <Link to='./about'>About</Link> */}
                <Link to='/'>Product</Link>

            </nav>
            <Routes>
                <Route path='/' element={<Product />}>
                    <Route  path='/' element={<ProductIndex />} />
                    <Route path=':slug' element={<LaunchShoe />} />
                </Route>
            </Routes>
        </div>
    )
}
