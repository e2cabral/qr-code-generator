import React from 'react';

import './index.css';

export const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <p className="header__logo">
                    <i className="icofont-qr-code"></i>
                    <span className="header__logoText">
                        QrCode <strong>Generator</strong>
                    </span>
                </p>
            </div>
            <div className="header__right">
                {/* TODO: implement a menu in the right side */}
            </div>
        </div>
    );
}