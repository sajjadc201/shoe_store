import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import {Home} from './Home';
import {Product} from './Product';
import { ProductIndex } from "./ProductIndex";
import {LaunchShoe} from './LaunchShoe';

export const App = () => {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                {/* <Link to='./about'>About</Link> */}
                <Link to='./product'>Product</Link>

            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Product />}>
                    <Route path='/' element={<ProductIndex />} />
                    <Route path=':slug' element={<LaunchShoe />} />
                    </Route>
            </Routes>
        </div>
    )
}
