import React from 'react';
import {Outlet} from 'react-router-dom'

export const Product = () => {
    
    return (
      <div>
        <h3>Product</h3>
        <Outlet />
      </div>
    );
}
