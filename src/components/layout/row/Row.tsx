import React from 'react';

import './index.css';

export const Row: React.FC = ({ children }) => {
    return (
        <div className="row">
            { children }
        </div>
    );
}