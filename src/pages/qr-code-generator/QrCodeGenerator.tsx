import React, { useState } from 'react';

import { Header } from '../../components/header/Header';
import { Container } from '../../components/layout/container/Container';
import { Row } from '../../components/layout/row/Row';
import { Column } from '../../components/layout/column/Column';
import { QrCode } from '../../components/qr-code/QrCode';

import { LevelEnum } from '../../models/enums/LevelEnum';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState<string> ('text');
    const [bgColor, setBgColor] = useState<string> ('#ffffff');
    const [fgColor, setFgColor] = useState<string> ('#000000');
    const [size, setSize] = useState<number> (400);
    const [level, setLevel] = useState<'L' | 'M' | 'Q' | 'H'> ('H');

    return (
        <div className="qrCodeGenerator">
            <Header />
            <Container>
                <Row>
                    <Column>
                        <QrCode
                            value={value}
                            bgColor={bgColor}
                            fgColor={fgColor}
                            size={size}
                            level={level}
                        />
                    </Column>
                    <Column>
                        <div>
                            <label htmlFor="value">Digite o link que deseja inserir:</label>
                            <input
                                id="value"
                                type="text"
                                name="value"
                                onChange={(event) => setValue(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="bgColor">Selecione a cor de fundo:</label>
                            <br/>
                            <input
                                id="bgColor"
                                type="color"
                                name="bgColor"
                                onChange={(event) => setBgColor(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="fgColor">Selecione a cor dos gráficos:</label>
                            <br/>
                            <input
                                id="fgColor"
                                type="color"
                                name="fgColor"
                                onChange={(event) => setFgColor(event.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="level">Selecione a densidade dos gráficos:</label>
                            <br/>
                            <select name="level" id="level" onChange={(event) => setLevel(event.target.value as 'L' | 'M' | 'Q' | 'H')}>
                                { LevelEnum.getAll().map((l) => <option value={l}>{ l }</option>) }
                            </select>
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
    );
}