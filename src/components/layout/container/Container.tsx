import React from 'react';

import './index.css';

export const Container: React.FC = ({ children }) => {
    return (

        <div className="container">
            { children }
        </div>
    );
}