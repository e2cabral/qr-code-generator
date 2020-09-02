import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { QrCodeGenerator } from '../pages/qr-code-generator/QrCodeGenerator';

export const Router = () => {
	return (
		<BrowserRouter>
			<Route path='/' exact component={QrCodeGenerator} />
		</BrowserRouter>
	);
}