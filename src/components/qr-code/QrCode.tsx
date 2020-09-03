import React from 'react';

import QRCode from 'qrcode.react';

import './index.css';

interface Props {
    value: string;
    bgColor: string;
    fgColor: string;
    size: number;
    level: 'L' | 'M' | 'Q' | 'H';
}

export const QrCode: React.FC<Props> = (props) => {
    return (
        <div className="qrcode">
            <QRCode
                value={props.value}
                bgColor={props.bgColor}
                fgColor={props.fgColor}
                size={props.size}
                level={props.level}
            />
        </div>
    );
}