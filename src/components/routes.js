import React from 'react';
import { Route , Routes } from 'react-router-dom'; 
import Main from './main/main';
const routes = () => {
    return (
        <Routes>
            <Route path="*" element={<Main />} />
        </Routes>
    )
}
export default routes; 