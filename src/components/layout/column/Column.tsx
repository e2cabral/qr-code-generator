import React from 'react';

import './index.css';

export const Column: React.FC = ({ children }) => {
    return (
        <div className="column">
            { children }
        </div>
    );
}